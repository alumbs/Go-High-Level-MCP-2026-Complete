/**
 * Meta-Tool Router — collapses 550+ tools into ~16 category meta-tools.
 *
 * Each meta-tool accepts { action, params } and internally routes to the
 * correct underlying tool via ToolRegistry.callTool().
 *
 * A special `ghl_discover` tool returns the full catalog of categories,
 * actions, descriptions, and parameter schemas for LLM discovery.
 *
 * Activated via MCP_ROUTER_MODE=true (default).
 */

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { Tool } from '@modelcontextprotocol/sdk/types.js';
import { z } from 'zod';

import { ToolRegistry } from './tool-registry.js';
import type { MCPAppsManager } from './apps/index.js';

// ─── Category Mapping ───────────────────────────────────────
// Maps each meta-tool name to the ToolRegistry module names it wraps.
// Module names must match the first arg of addModule() in tool-registry.ts.

const CATEGORY_MAP: Record<string, { modules: string[]; description: string }> = {
  ghl_contacts: {
    modules: ['contact', 'companies', 'associations', 'customFieldsV2'],
    description: 'Contact & company CRM management — create, search, update, delete contacts and companies; manage tags, tasks, notes, followers; associate records; custom field CRUD.',
  },
  ghl_calendar: {
    modules: ['calendar'],
    description: 'Calendar & scheduling — manage calendars, calendar groups, events, appointments; check availability; book and reschedule appointments.',
  },
  ghl_conversations: {
    modules: ['conversation', 'email', 'emailISV'],
    description: 'Conversations, messaging & email — send/receive SMS, email, live chat; manage conversation threads; email verification; ISV email operations.',
  },
  ghl_opportunities: {
    modules: ['opportunity'],
    description: 'Deals & pipeline management — create, search, update, delete opportunities; manage pipeline stages and deal values.',
  },
  ghl_campaigns: {
    modules: ['campaigns', 'workflows', 'triggers'],
    description: 'Campaigns, workflows & triggers — manage marketing campaigns; list/create workflows; configure triggers and automation rules.',
  },
  ghl_payments: {
    modules: ['payments', 'invoices'],
    description: 'Payments & invoicing — manage payment integrations, orders, transactions, subscriptions; create/send/void invoices and estimates; invoice templates and scheduling.',
  },
  ghl_content: {
    modules: ['blog', 'funnels', 'forms', 'templates', 'media', 'links'],
    description: 'Content & marketing assets — blogs, funnels, forms, email/SMS templates, media library, links and link triggers.',
  },
  ghl_social: {
    modules: ['socialMedia', 'reputation'],
    description: 'Social media & reputation — manage social posts, accounts, tags, categories, CSV uploads; reviews, review responses, widget settings.',
  },
  ghl_courses: {
    modules: ['courses'],
    description: 'Courses & memberships — manage course products, categories, instructors, lessons, offers, and student enrollments.',
  },
  ghl_phone: {
    modules: ['phone', 'phoneSystem', 'voiceAI'],
    description: 'Phone system & voice AI — manage phone numbers, call logs, voicemail, IVR menus; phone system addresses and toll-free verification; voice AI agents, actions, and call logs.',
  },
  ghl_commerce: {
    modules: ['store', 'products', 'proposals', 'affiliates'],
    description: 'E-commerce & affiliates — store settings, shipping, collections; product/price CRUD; proposals/contracts; affiliate campaigns, commissions, referrals, payouts.',
  },
  ghl_locations: {
    modules: ['location', 'users', 'businesses', 'customMenus'],
    description: 'Location & account management — location settings, tags, custom values, recurring tasks; user CRUD; business profiles; custom sidebar menus.',
  },
  ghl_reporting: {
    modules: ['reporting', 'surveys'],
    description: 'Reporting & surveys — analytics, attribution reports, ad performance; survey CRUD and submissions.',
  },
  ghl_integrations: {
    modules: ['webhooks', 'objects', 'marketplace', 'snapshots', 'saas', 'smartLists', 'oauth'],
    description: 'Integrations & platform — webhooks; custom objects and records; marketplace listings; snapshots; SaaS rebilling and subscriptions; smart lists; OAuth management.',
  },
  ghl_automation: {
    modules: ['agentStudio', 'workflowBuilder'],
    description: 'Agent Studio & Workflow Builder — AI agent CRUD; workflow creation, update, publish, clone, and deletion via internal API.',
  },
};

// ─── MetaToolRouter ─────────────────────────────────────────

export class MetaToolRouter {
  /** category name → array of underlying Tool definitions */
  private categoryActions = new Map<string, Tool[]>();
  /** tool name → category name (for reverse lookup) */
  private actionToCategory = new Map<string, string>();

  constructor(
    private registry: ToolRegistry,
    private appTools: Tool[],
    private appsManager: MCPAppsManager,
  ) {
    this.buildIndex();
  }

  private buildIndex(): void {
    const toolsByModule = this.registry.getToolsByModule();

    for (const [category, { modules }] of Object.entries(CATEGORY_MAP)) {
      const tools: Tool[] = [];
      for (const moduleName of modules) {
        const moduleTools = toolsByModule.get(moduleName);
        if (moduleTools) {
          tools.push(...moduleTools);
        } else {
          process.stderr.write(`[MetaToolRouter] Warning: module "${moduleName}" not found in registry (category: ${category})\n`);
        }
      }
      this.categoryActions.set(category, tools);
      for (const tool of tools) {
        this.actionToCategory.set(tool.name, category);
      }
    }
  }

  /**
   * Generate the description for a category meta-tool.
   * Includes purpose + list of available action names.
   */
  private makeDescription(category: string): string {
    const info = CATEGORY_MAP[category];
    const tools = this.categoryActions.get(category) || [];
    const actionNames = tools.map(t => t.name);

    let desc = `${info.description}\n\nCall with { "action": "<name>", "params": {...} }. Available actions (${actionNames.length}):\n`;
    const actionList = actionNames.join(', ');

    // Keep under ~3000 chars to avoid bloating tool descriptions
    if (desc.length + actionList.length > 3000) {
      const truncated = actionList.slice(0, 2800 - desc.length);
      const lastComma = truncated.lastIndexOf(',');
      desc += truncated.slice(0, lastComma) + `, ... and ${actionNames.length - truncated.slice(0, lastComma).split(',').length} more.`;
    } else {
      desc += actionList;
    }

    desc += '\n\nUse ghl_discover({ category: "' + category + '" }) for full parameter schemas.';
    return desc;
  }

  /**
   * Register all meta-tools + ghl_discover on the given McpServer.
   */
  registerAll(server: McpServer): number {
    let count = 0;

    // Register category meta-tools
    for (const category of Object.keys(CATEGORY_MAP)) {
      const description = this.makeDescription(category);
      const tools = this.categoryActions.get(category) || [];

      server.registerTool(
        category,
        {
          title: category.replace(/^ghl_/, '').replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
          description,
          annotations: {
            readOnlyHint: false,
            destructiveHint: false,
            idempotentHint: false,
            openWorldHint: true,
          },
        },
        async (args: any) => {
          return this.handleCategoryCall(category, args, tools);
        },
      );
      count++;
    }

    // Register ghl_discover
    server.registerTool(
      'ghl_discover',
      {
        title: 'GHL Discover',
        description: 'Discover available GHL tool categories, actions, and parameter schemas. Call with no args for an overview, or with { "category": "ghl_contacts" } for full details.',
        annotations: {
          readOnlyHint: true,
          destructiveHint: false,
          idempotentHint: true,
          openWorldHint: false,
        },
      },
      async (args: any) => {
        return this.handleDiscover(args);
      },
    );
    count++;

    return count;
  }

  private async handleCategoryCall(
    category: string,
    args: any,
    tools: Tool[],
  ): Promise<{ content: Array<{ type: 'text'; text: string }>, isError?: boolean }> {
    const action = args?.action;
    const params = args?.params || {};

    if (!action || typeof action !== 'string') {
      const actionNames = tools.map(t => t.name).join(', ');
      return {
        content: [{ type: 'text', text: `Error: "action" is required. Available actions for ${category}: ${actionNames}` }],
        isError: true,
      };
    }

    // Validate action belongs to this category
    if (this.actionToCategory.get(action) !== category) {
      // Check if action exists in another category
      const actualCategory = this.actionToCategory.get(action);
      if (actualCategory) {
        return {
          content: [{ type: 'text', text: `Error: "${action}" belongs to ${actualCategory}, not ${category}. Call ${actualCategory}({ action: "${action}", params: {...} }) instead.` }],
          isError: true,
        };
      }

      // Suggest similar actions
      const suggestions = this.findSimilarActions(action, tools);
      const suggestText = suggestions.length > 0
        ? ` Did you mean: ${suggestions.join(', ')}?`
        : ` Available actions: ${tools.map(t => t.name).join(', ')}`;

      return {
        content: [{ type: 'text', text: `Error: Unknown action "${action}" for ${category}.${suggestText}` }],
        isError: true,
      };
    }

    // Execute via registry
    try {
      const result = await this.registry.callTool(action, params);
      if (result === undefined) {
        // Try app tools
        if (this.appsManager.isAppTool(action)) {
          const appResult = await this.appsManager.executeTool(action, params);
          const text = JSON.stringify(appResult, null, 2);
          return { content: [{ type: 'text', text }] };
        }
        return {
          content: [{ type: 'text', text: `Error: Tool "${action}" returned no result.` }],
          isError: true,
        };
      }
      const text = typeof result === 'string' ? result : JSON.stringify(result, null, 2);
      return { content: [{ type: 'text', text }] };
    } catch (err: any) {
      return {
        content: [{ type: 'text', text: `Error executing ${action}: ${err.message}` }],
        isError: true,
      };
    }
  }

  private handleDiscover(args: any): { content: Array<{ type: 'text'; text: string }> } {
    const category = args?.category as string | undefined;

    if (category) {
      // Detailed view for one category
      const tools = this.categoryActions.get(category);
      if (!tools) {
        const available = Object.keys(CATEGORY_MAP).join(', ');
        return {
          content: [{ type: 'text', text: `Unknown category "${category}". Available: ${available}` }],
        };
      }

      const info = CATEGORY_MAP[category];
      const actions = tools.map(tool => ({
        name: tool.name,
        description: tool.description || '',
        parameters: (tool as any).inputSchema?.properties || {},
        required: (tool as any).inputSchema?.required || [],
      }));

      return {
        content: [{
          type: 'text',
          text: JSON.stringify({
            category,
            description: info.description,
            actionCount: actions.length,
            actions,
          }, null, 2),
        }],
      };
    }

    // Overview of all categories
    const overview: Record<string, { description: string; actionCount: number; actions: string[] }> = {};
    for (const [cat, { description }] of Object.entries(CATEGORY_MAP)) {
      const tools = this.categoryActions.get(cat) || [];
      overview[cat] = {
        description,
        actionCount: tools.length,
        actions: tools.map(t => t.name),
      };
    }

    return {
      content: [{
        type: 'text',
        text: JSON.stringify({
          totalCategories: Object.keys(overview).length,
          totalActions: Object.values(overview).reduce((sum, c) => sum + c.actionCount, 0),
          categories: overview,
        }, null, 2),
      }],
    };
  }

  /**
   * Find similar action names for error suggestions (simple substring match).
   */
  private findSimilarActions(input: string, tools: Tool[]): string[] {
    const lower = input.toLowerCase();
    const parts = lower.split('_');
    return tools
      .filter(t => {
        const name = t.name.toLowerCase();
        // Match if any part of the input appears in the tool name
        return parts.some(p => p.length > 2 && name.includes(p)) || name.includes(lower);
      })
      .slice(0, 5)
      .map(t => t.name);
  }

  // ─── REST support ─────────────────────────────────────────

  /**
   * Call a tool for REST endpoints. Handles both meta-tool format
   * and direct tool names (backward compat).
   */
  async callTool(name: string, args: Record<string, unknown>): Promise<unknown> {
    // Handle ghl_discover
    if (name === 'ghl_discover') {
      return this.handleDiscover(args);
    }

    // Handle category meta-tools
    if (CATEGORY_MAP[name]) {
      const tools = this.categoryActions.get(name) || [];
      return this.handleCategoryCall(name, args, tools);
    }

    // Fall through — not a meta-tool name
    return undefined;
  }

  /**
   * Get meta-tool definitions for REST /tools endpoint.
   */
  getAllToolDefinitions(): Tool[] {
    const defs: Tool[] = [];

    for (const category of Object.keys(CATEGORY_MAP)) {
      defs.push({
        name: category,
        description: this.makeDescription(category),
        inputSchema: {
          type: 'object',
          properties: {
            action: {
              type: 'string',
              description: 'The specific tool action to execute (e.g., "create_contact", "search_contacts")',
            },
            params: {
              type: 'object',
              description: 'Parameters for the action. Use ghl_discover for required params.',
            },
          },
          required: ['action'],
        },
      });
    }

    // ghl_discover
    defs.push({
      name: 'ghl_discover',
      description: 'Discover available GHL tool categories, actions, and parameter schemas. Call with no args for overview, or { "category": "ghl_contacts" } for full details.',
      inputSchema: {
        type: 'object',
        properties: {
          category: {
            type: 'string',
            description: 'Optional category name to get detailed info for (e.g., "ghl_contacts"). Omit for overview of all categories.',
          },
        },
      },
    });

    return defs;
  }

  getToolCount(): number {
    return Object.keys(CATEGORY_MAP).length + 1; // +1 for ghl_discover
  }

  getCategoryCounts(): Record<string, number> {
    const counts: Record<string, number> = {};
    for (const [cat, tools] of this.categoryActions) {
      counts[cat] = tools.length;
    }
    return counts;
  }
}
