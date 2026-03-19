/**
 * Generate TOOLS.md — a categorized catalog of all GHL MCP tools.
 *
 * Usage:  npm run build && node dist/scripts/generate-tools-catalog.js
 *    or:  npm run generate:catalog
 * Output: TOOLS.md in project root
 */

import * as fs from 'fs';
import * as path from 'path';
import { GHLApiClient } from '../src/clients/ghl-api-client.js';
import { ContactTools } from '../src/tools/contact-tools.js';
import { ConversationTools } from '../src/tools/conversation-tools.js';
import { BlogTools } from '../src/tools/blog-tools.js';
import { OpportunityTools } from '../src/tools/opportunity-tools.js';
import { CalendarTools } from '../src/tools/calendar-tools.js';
import { EmailTools } from '../src/tools/email-tools.js';
import { LocationTools } from '../src/tools/location-tools.js';
import { EmailISVTools } from '../src/tools/email-isv-tools.js';
import { SocialMediaTools } from '../src/tools/social-media-tools.js';
import { MediaTools } from '../src/tools/media-tools.js';
import { ObjectTools } from '../src/tools/object-tools.js';
import { AssociationTools } from '../src/tools/association-tools.js';
import { CustomFieldV2Tools } from '../src/tools/custom-field-v2-tools.js';
import { WorkflowTools } from '../src/tools/workflow-tools.js';
import { SurveyTools } from '../src/tools/survey-tools.js';
import { StoreTools } from '../src/tools/store-tools.js';
import { ProductsTools } from '../src/tools/products-tools.js';
import { AffiliatesTools } from '../src/tools/affiliates-tools.js';
import { BusinessesTools } from '../src/tools/businesses-tools.js';
import { CampaignsTools } from '../src/tools/campaigns-tools.js';
import { CompaniesTools } from '../src/tools/companies-tools.js';
import { CoursesTools } from '../src/tools/courses-tools.js';
import { FormsTools } from '../src/tools/forms-tools.js';
import { FunnelsTools } from '../src/tools/funnels-tools.js';
import { InvoicesTools } from '../src/tools/invoices-tools.js';
import { LinksTools } from '../src/tools/links-tools.js';
import { PaymentsTools } from '../src/tools/payments-tools.js';
import { PhoneTools } from '../src/tools/phone-tools.js';
import { ReportingTools } from '../src/tools/reporting-tools.js';
import { ReputationTools } from '../src/tools/reputation-tools.js';
import { SaasTools } from '../src/tools/saas-tools.js';
import { SmartListsTools } from '../src/tools/smartlists-tools.js';
import { SnapshotsTools } from '../src/tools/snapshots-tools.js';
import { TemplatesTools } from '../src/tools/templates-tools.js';
import { TriggersTools } from '../src/tools/triggers-tools.js';
import { UsersTools } from '../src/tools/users-tools.js';
import { WebhooksTools } from '../src/tools/webhooks-tools.js';
import { WorkflowBuilderTools } from '../src/tools/workflow-builder-tools.js';
import { PhoneSystemTools } from '../src/tools/phone-system-tools.js';
import { VoiceAITools } from '../src/tools/voice-ai-tools.js';
import { ProposalsTools } from '../src/tools/proposals-tools.js';
import { CustomMenusTools } from '../src/tools/custom-menus-tools.js';
import { MarketplaceTools } from '../src/tools/marketplace-tools.js';
import { AgentStudioTools } from '../src/tools/agent-studio-tools.js';

// ─── Types ──────────────────────────────────────────────────

interface ToolDef {
  name: string;
  description?: string;
  inputSchema?: {
    type: string;
    properties?: Record<string, any>;
    required?: string[];
  };
  _meta?: {
    labels?: {
      category?: string;
      access?: string;
      complexity?: string;
    };
  };
}

// ─── Collect Tools ──────────────────────────────────────────

function collectAllTools(): ToolDef[] {
  const dummyConfig = {
    accessToken: 'dummy',
    baseUrl: 'https://services.leadconnectorhq.com',
    version: '2021-07-28',
    locationId: 'dummy',
  };
  const ghl = new GHLApiClient(dummyConfig);

  const modules: Array<{ instance: any; listMethod: string }> = [
    { instance: new ContactTools(ghl), listMethod: 'getToolDefinitions' },
    { instance: new ConversationTools(ghl), listMethod: 'getToolDefinitions' },
    { instance: new BlogTools(ghl), listMethod: 'getToolDefinitions' },
    { instance: new OpportunityTools(ghl), listMethod: 'getToolDefinitions' },
    { instance: new CalendarTools(ghl), listMethod: 'getToolDefinitions' },
    { instance: new EmailTools(ghl), listMethod: 'getToolDefinitions' },
    { instance: new LocationTools(ghl), listMethod: 'getToolDefinitions' },
    { instance: new EmailISVTools(ghl), listMethod: 'getToolDefinitions' },
    { instance: new SocialMediaTools(ghl), listMethod: 'getTools' },
    { instance: new MediaTools(ghl), listMethod: 'getToolDefinitions' },
    { instance: new ObjectTools(ghl), listMethod: 'getToolDefinitions' },
    { instance: new AssociationTools(ghl), listMethod: 'getTools' },
    { instance: new CustomFieldV2Tools(ghl), listMethod: 'getTools' },
    { instance: new WorkflowTools(ghl), listMethod: 'getTools' },
    { instance: new SurveyTools(ghl), listMethod: 'getTools' },
    { instance: new StoreTools(ghl), listMethod: 'getTools' },
    { instance: new ProductsTools(ghl), listMethod: 'getTools' },
    { instance: new AffiliatesTools(ghl), listMethod: 'getToolDefinitions' },
    { instance: new BusinessesTools(ghl), listMethod: 'getToolDefinitions' },
    { instance: new CampaignsTools(ghl), listMethod: 'getToolDefinitions' },
    { instance: new CompaniesTools(ghl), listMethod: 'getToolDefinitions' },
    { instance: new CoursesTools(ghl), listMethod: 'getToolDefinitions' },
    { instance: new FormsTools(ghl), listMethod: 'getToolDefinitions' },
    { instance: new FunnelsTools(ghl), listMethod: 'getToolDefinitions' },
    { instance: new InvoicesTools(ghl), listMethod: 'getTools' },
    { instance: new LinksTools(ghl), listMethod: 'getToolDefinitions' },
    { instance: new PaymentsTools(ghl), listMethod: 'getTools' },
    { instance: new PhoneTools(ghl), listMethod: 'getToolDefinitions' },
    { instance: new ReportingTools(ghl), listMethod: 'getToolDefinitions' },
    { instance: new ReputationTools(ghl), listMethod: 'getToolDefinitions' },
    { instance: new SaasTools(ghl), listMethod: 'getToolDefinitions' },
    { instance: new SmartListsTools(ghl), listMethod: 'getToolDefinitions' },
    { instance: new SnapshotsTools(ghl), listMethod: 'getToolDefinitions' },
    { instance: new TemplatesTools(ghl), listMethod: 'getToolDefinitions' },
    { instance: new TriggersTools(ghl), listMethod: 'getToolDefinitions' },
    { instance: new UsersTools(ghl), listMethod: 'getToolDefinitions' },
    { instance: new WebhooksTools(ghl), listMethod: 'getToolDefinitions' },
    { instance: new WorkflowBuilderTools(), listMethod: 'getTools' },
    { instance: new PhoneSystemTools(ghl), listMethod: 'getToolDefinitions' },
    { instance: new VoiceAITools(ghl), listMethod: 'getToolDefinitions' },
    { instance: new ProposalsTools(ghl), listMethod: 'getToolDefinitions' },
    { instance: new CustomMenusTools(ghl), listMethod: 'getToolDefinitions' },
    { instance: new MarketplaceTools(ghl), listMethod: 'getToolDefinitions' },
    { instance: new AgentStudioTools(ghl), listMethod: 'getToolDefinitions' },
  ];

  const allTools: ToolDef[] = [];
  for (const { instance, listMethod } of modules) {
    try {
      const tools = instance[listMethod]() as ToolDef[];
      allTools.push(...tools);
    } catch (err: any) {
      console.error(`Warning: Failed to load tools from ${instance.constructor.name}: ${err.message}`);
    }
  }
  return allTools;
}

// ─── Format Helpers ─────────────────────────────────────────

function formatType(prop: any): string {
  if (!prop) return 'any';
  if (prop.type === 'array') {
    if (prop.items?.type === 'object') return 'array\\<object\\>';
    if (prop.items?.type) return `array\\<${prop.items.type}\\>`;
    return 'array';
  }
  return prop.type || 'any';
}

function formatDescription(prop: any): string {
  let desc = (prop.description || '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
  if (prop.enum && prop.enum.length > 0) {
    desc += ` Values: \`${prop.enum.join('` \\| `')}\``;
  }
  return desc;
}

function renderParamTable(schema: ToolDef['inputSchema']): string {
  if (!schema?.properties || Object.keys(schema.properties).length === 0) {
    return '_No parameters._\n';
  }

  const required = new Set(schema.required || []);
  const lines: string[] = [];
  lines.push('| Param | Type | Required | Description |');
  lines.push('|-------|------|----------|-------------|');

  for (const [name, prop] of Object.entries(schema.properties)) {
    const isReq = required.has(name) ? '**yes**' : 'no';
    lines.push(`| ${name} | ${formatType(prop)} | ${isReq} | ${formatDescription(prop)} |`);
  }
  return lines.join('\n') + '\n';
}

function categoryDisplayName(cat: string): string {
  return cat
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

// ─── Main ───────────────────────────────────────────────────

function main() {
  console.log('Collecting tool definitions...');
  const allTools = collectAllTools();
  console.log(`Found ${allTools.length} tools.`);

  // Group by category
  const categories = new Map<string, ToolDef[]>();
  for (const tool of allTools) {
    const cat = tool._meta?.labels?.category || 'uncategorized';
    if (!categories.has(cat)) categories.set(cat, []);
    categories.get(cat)!.push(tool);
  }

  // Sort categories alphabetically
  const sortedCats = [...categories.entries()].sort((a, b) => a[0].localeCompare(b[0]));

  // Build markdown
  const md: string[] = [];
  md.push(`# GHL MCP Server \u2014 Tool Catalog (${allTools.length} tools)\n`);
  md.push(`> Auto-generated on ${new Date().toISOString().split('T')[0]}. Call tools via \`POST /tools/call { "name": "<tool>", "arguments": {...} }\`\n`);

  // Table of contents
  md.push('## Table of Contents\n');
  for (const [cat, tools] of sortedCats) {
    const anchor = cat.replace(/\s+/g, '-').toLowerCase();
    md.push(`- [${categoryDisplayName(cat)} (${tools.length} tools)](#${anchor})`);
  }
  md.push('\n---\n');

  // Each category
  for (const [cat, tools] of sortedCats) {
    md.push(`## ${categoryDisplayName(cat)}\n`);

    const accessOrder: Record<string, number> = { read: 0, write: 1, delete: 2 };
    tools.sort((a, b) => {
      const aOrder = accessOrder[a._meta?.labels?.access || 'write'] ?? 1;
      const bOrder = accessOrder[b._meta?.labels?.access || 'write'] ?? 1;
      if (aOrder !== bOrder) return aOrder - bOrder;
      return a.name.localeCompare(b.name);
    });

    for (const tool of tools) {
      const access = tool._meta?.labels?.access || '';
      const badge = access === 'read' ? ' `READ`' : access === 'delete' ? ' `DELETE`' : ' `WRITE`';
      md.push(`### ${tool.name}${badge}\n`);
      md.push(`${tool.description || 'No description.'}\n`);
      md.push(renderParamTable(tool.inputSchema));
    }
  }

  // Write file — resolve relative to the project root
  // When compiled, this runs from dist/scripts/, so go up two levels
  const outPath = path.resolve(__dirname, '..', '..', 'TOOLS.md');
  fs.writeFileSync(outPath, md.join('\n'), 'utf-8');
  console.log(`Wrote ${outPath} (${(fs.statSync(outPath).size / 1024).toFixed(1)} KB, ${sortedCats.length} categories)`);
}

main();
