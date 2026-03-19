/**
 * Execute Route — CRESyncFlow MCP Bridge endpoints
 *
 * Exposes REST endpoints consumed by CRESyncFlow-v2's mcp-tools-bridge.ts:
 *   GET  /tools   — all tool definitions in Anthropic input_schema format
 *   POST /execute — execute a named tool by { name, arguments }
 *
 * These sit alongside (not replacing) the existing MCP protocol endpoints
 * (/mcp, /sse) and the /tools/call REST endpoint.
 */

import type { Application } from 'express';
import type { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { ToolRegistry } from './tool-registry.js';
import type { MCPAppsManager } from './apps/index.js';
import type { MetaToolRouter } from './meta-tool-router.js';

// ── Helpers ───────────────────────────────────────────────────────────────────

/**
 * Convert an MCP SDK Tool (camelCase inputSchema) to Anthropic format
 * (snake_case input_schema) expected by CRESyncFlow-v2's mcp-tools-bridge.ts.
 */
function toAnthropicTool(tool: Tool) {
  // MCP SDK uses inputSchema; fall back gracefully if field name varies
  const schema: Record<string, unknown> =
    (tool as any).inputSchema ?? (tool as any).input_schema ?? {};

  return {
    name: tool.name,
    description: tool.description ?? '',
    input_schema: {
      type: 'object' as const,
      properties: (schema.properties as Record<string, unknown>) ?? {},
      ...(Array.isArray(schema.required) ? { required: schema.required as string[] } : {}),
    },
  };
}

// ── Route Registration ────────────────────────────────────────────────────────

/**
 * Register the CRESyncFlow bridge routes on the given Express app.
 *
 * Must be called:
 *   1. After `app.use(express.json())` is applied
 *   2. Before `app.listen()` is called
 *
 * When a MetaToolRouter is provided (router mode), GET /tools returns the
 * meta-tool definitions and POST /execute tries the router first before
 * falling back to direct registry calls for backward compatibility.
 */
export function registerExecuteRoutes(
  app: Application,
  registry: ToolRegistry,
  appsManager: MCPAppsManager,
  appTools: Tool[],
  router?: MetaToolRouter
): void {
  // ── GET /tools — Anthropic-compatible tool catalogue ────────────────────
  app.get('/tools', (_req, res) => {
    try {
      if (router) {
        // Router mode: return meta-tool definitions
        const metaDefs = router.getAllToolDefinitions();
        const anthropicTools = metaDefs.map(toAnthropicTool);
        res.json({ tools: anthropicTools, count: anthropicTools.length, mode: 'router' });
      } else {
        // Classic mode: return all 550+ tool definitions
        const allDefs = registry.getAllToolDefinitions(appTools);
        const anthropicTools = allDefs.map(toAnthropicTool);
        res.json({ tools: anthropicTools, count: anthropicTools.length, mode: 'classic' });
      }
    } catch (err: any) {
      console.error('[execute-route] GET /tools error:', err.message);
      res.status(500).json({ error: 'Failed to list tools' });
    }
  });

  // ── POST /execute — execute a named tool ─────────────────────────────────
  app.post('/execute', async (req, res) => {
    const body = req.body ?? {};
    const toolName: string | undefined = body.name;
    const toolArgs: Record<string, unknown> = body.arguments ?? {};

    if (!toolName || typeof toolName !== 'string') {
      res.status(400).json({ error: 'Body must include a non-empty string "name"' });
      return;
    }

    try {
      // 1. In router mode, try meta-tool routing first
      if (router) {
        const routerResult = await router.callTool(toolName, toolArgs);
        if (routerResult !== undefined) {
          res.json({ result: routerResult });
          return;
        }
      }

      // 2. Try GHL registry tools (direct call — works in both modes)
      const registryResult = await registry.callTool(toolName, toolArgs);
      if (registryResult !== undefined) {
        res.json({ result: registryResult });
        return;
      }

      // 3. Try MCP App tools
      if (appsManager.isAppTool(toolName)) {
        const appResult = await appsManager.executeTool(toolName, toolArgs);
        res.json({ result: appResult });
        return;
      }

      // 4. Unknown tool
      res.status(404).json({ error: `Unknown tool: ${toolName}` });
    } catch (err: any) {
      console.error(`[execute-route] POST /execute tool=${toolName} error:`, err.message);
      res.status(500).json({ error: `Tool execution failed: ${err.message}` });
    }
  });
}
