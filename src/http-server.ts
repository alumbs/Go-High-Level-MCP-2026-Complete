/**
 * GoHighLevel MCP HTTP Server
 * HTTP version for ChatGPT web integration
 */

import express from 'express';
import cors from 'cors';
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { SSEServerTransport } from '@modelcontextprotocol/sdk/server/sse.js';
import { 
  CallToolRequestSchema,
  ErrorCode,
  ListToolsRequestSchema,
  McpError 
} from '@modelcontextprotocol/sdk/types.js';
import * as dotenv from 'dotenv';

import { GHLApiClient } from './clients/ghl-api-client';
import { ContactTools } from './tools/contact-tools';
import { ConversationTools } from './tools/conversation-tools';
import { BlogTools } from './tools/blog-tools';
import { OpportunityTools } from './tools/opportunity-tools';
import { CalendarTools } from './tools/calendar-tools';
import { EmailTools } from './tools/email-tools';
import { LocationTools } from './tools/location-tools';
import { EmailISVTools } from './tools/email-isv-tools';
import { SocialMediaTools } from './tools/social-media-tools';
import { MediaTools } from './tools/media-tools';
import { ObjectTools } from './tools/object-tools';
import { AssociationTools } from './tools/association-tools';
import { CustomFieldV2Tools } from './tools/custom-field-v2-tools';
import { WorkflowTools } from './tools/workflow-tools';
import { SurveyTools } from './tools/survey-tools';
import { StoreTools } from './tools/store-tools';
import { ProductsTools } from './tools/products-tools.js';
import { AffiliatesTools } from './tools/affiliates-tools';
import { BusinessesTools } from './tools/businesses-tools';
import { CampaignsTools } from './tools/campaigns-tools';
import { CompaniesTools } from './tools/companies-tools';
import { CoursesTools } from './tools/courses-tools';
import { FormsTools } from './tools/forms-tools';
import { FunnelsTools } from './tools/funnels-tools';
import { InvoicesTools } from './tools/invoices-tools';
import { LinksTools } from './tools/links-tools';
import { PaymentsTools } from './tools/payments-tools';
import { PhoneTools } from './tools/phone-tools';
import { ReportingTools } from './tools/reporting-tools';
import { ReputationTools } from './tools/reputation-tools';
import { SaasTools } from './tools/saas-tools';
import { SmartListsTools } from './tools/smartlists-tools';
import { SnapshotsTools } from './tools/snapshots-tools';
import { TemplatesTools } from './tools/templates-tools';
import { TriggersTools } from './tools/triggers-tools';
import { UsersTools } from './tools/users-tools';
import { WebhooksTools } from './tools/webhooks-tools';
import { MCPAppsManager } from './apps/index.js';
import { GHLConfig } from './types/ghl-types';

// Load environment variables
dotenv.config();

/**
 * HTTP MCP Server class for web deployment
 */
class GHLMCPHttpServer {
  private app: express.Application;
  private server: Server;
  private ghlClient: GHLApiClient;
  private contactTools: ContactTools;
  private conversationTools: ConversationTools;
  private blogTools: BlogTools;
  private opportunityTools: OpportunityTools;
  private calendarTools: CalendarTools;
  private emailTools: EmailTools;
  private locationTools: LocationTools;
  private emailISVTools: EmailISVTools;
  private socialMediaTools: SocialMediaTools;
  private mediaTools: MediaTools;
  private objectTools: ObjectTools;
  private associationTools: AssociationTools;
  private customFieldV2Tools: CustomFieldV2Tools;
  private workflowTools: WorkflowTools;
  private surveyTools: SurveyTools;
  private storeTools: StoreTools;
  private productsTools: ProductsTools;
  private affiliatesTools: AffiliatesTools;
  private businessesTools: BusinessesTools;
  private campaignsTools: CampaignsTools;
  private companiesTools: CompaniesTools;
  private coursesTools: CoursesTools;
  private formsTools: FormsTools;
  private funnelsTools: FunnelsTools;
  private invoicesTools: InvoicesTools;
  private linksTools: LinksTools;
  private paymentsTools: PaymentsTools;
  private phoneTools: PhoneTools;
  private reportingTools: ReportingTools;
  private reputationTools: ReputationTools;
  private saasTools: SaasTools;
  private smartListsTools: SmartListsTools;
  private snapshotsTools: SnapshotsTools;
  private templatesTools: TemplatesTools;
  private triggersTools: TriggersTools;
  private usersTools: UsersTools;
  private webhooksTools: WebhooksTools;
  private mcpAppsManager: MCPAppsManager;
  private port: number;

  constructor() {
    this.port = parseInt(process.env.PORT || process.env.MCP_SERVER_PORT || '8000');
    
    // Initialize Express app
    this.app = express();
    this.setupExpress();

    // Initialize MCP server with capabilities
    this.server = new Server(
      {
        name: 'ghl-mcp-server',
        version: '1.0.0',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    // Initialize GHL API client
    this.ghlClient = this.initializeGHLClient();
    
    // Initialize tools
    this.contactTools = new ContactTools(this.ghlClient);
    this.conversationTools = new ConversationTools(this.ghlClient);
    this.blogTools = new BlogTools(this.ghlClient);
    this.opportunityTools = new OpportunityTools(this.ghlClient);
    this.calendarTools = new CalendarTools(this.ghlClient);
    this.emailTools = new EmailTools(this.ghlClient);
    this.locationTools = new LocationTools(this.ghlClient);
    this.emailISVTools = new EmailISVTools(this.ghlClient);
    this.socialMediaTools = new SocialMediaTools(this.ghlClient);
    this.mediaTools = new MediaTools(this.ghlClient);
    this.objectTools = new ObjectTools(this.ghlClient);
    this.associationTools = new AssociationTools(this.ghlClient);
    this.customFieldV2Tools = new CustomFieldV2Tools(this.ghlClient);
    this.workflowTools = new WorkflowTools(this.ghlClient);
    this.surveyTools = new SurveyTools(this.ghlClient);
    this.storeTools = new StoreTools(this.ghlClient);
    this.productsTools = new ProductsTools(this.ghlClient);
    this.affiliatesTools = new AffiliatesTools(this.ghlClient);
    this.businessesTools = new BusinessesTools(this.ghlClient);
    this.campaignsTools = new CampaignsTools(this.ghlClient);
    this.companiesTools = new CompaniesTools(this.ghlClient);
    this.coursesTools = new CoursesTools(this.ghlClient);
    this.formsTools = new FormsTools(this.ghlClient);
    this.funnelsTools = new FunnelsTools(this.ghlClient);
    this.invoicesTools = new InvoicesTools(this.ghlClient);
    this.linksTools = new LinksTools(this.ghlClient);
    this.paymentsTools = new PaymentsTools(this.ghlClient);
    this.phoneTools = new PhoneTools(this.ghlClient);
    this.reportingTools = new ReportingTools(this.ghlClient);
    this.reputationTools = new ReputationTools(this.ghlClient);
    this.saasTools = new SaasTools(this.ghlClient);
    this.smartListsTools = new SmartListsTools(this.ghlClient);
    this.snapshotsTools = new SnapshotsTools(this.ghlClient);
    this.templatesTools = new TemplatesTools(this.ghlClient);
    this.triggersTools = new TriggersTools(this.ghlClient);
    this.usersTools = new UsersTools(this.ghlClient);
    this.webhooksTools = new WebhooksTools(this.ghlClient);
    this.mcpAppsManager = new MCPAppsManager(this.ghlClient);

    // Setup MCP handlers
    this.setupMCPHandlers();
    this.setupRoutes();
  }

  /**
   * Setup Express middleware and configuration
   */
  private setupExpress(): void {
    // Enable CORS for ChatGPT integration
    this.app.use(cors({
      origin: (origin, callback) => {
        // Allow requests with no origin (curl, server-to-server)
        if (!origin) return callback(null, true);
        // Allow any localhost port + ChatGPT
        if (/^https?:\/\/localhost(:\d+)?$/.test(origin) ||
            origin === 'https://chatgpt.com' ||
            origin === 'https://chat.openai.com') {
          return callback(null, true);
        }
        callback(new Error('CORS not allowed'));
      },
      methods: ['GET', 'POST', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
      credentials: true
    }));

    // Parse JSON requests
    this.app.use(express.json());

    // Request logging
    this.app.use((req, res, next) => {
      console.log(`[HTTP] ${req.method} ${req.path} - ${new Date().toISOString()}`);
      next();
    });
  }

  /**
   * Initialize GoHighLevel API client with configuration
   */
  private initializeGHLClient(): GHLApiClient {
    // Load configuration from environment
    const config: GHLConfig = {
      accessToken: process.env.GHL_API_KEY || '',
      baseUrl: process.env.GHL_BASE_URL || 'https://services.leadconnectorhq.com',
      version: '2021-07-28',
      locationId: process.env.GHL_LOCATION_ID || ''
    };

    // Validate required configuration
    if (!config.accessToken) {
      throw new Error('GHL_API_KEY environment variable is required');
    }

    if (!config.locationId) {
      throw new Error('GHL_LOCATION_ID environment variable is required');
    }

    console.log('[GHL MCP HTTP] Initializing GHL API client...');
    console.log(`[GHL MCP HTTP] Base URL: ${config.baseUrl}`);
    console.log(`[GHL MCP HTTP] Version: ${config.version}`);
    console.log(`[GHL MCP HTTP] Location ID: ${config.locationId}`);

    return new GHLApiClient(config);
  }

  /**
   * Setup MCP request handlers
   */
  private setupMCPHandlers(): void {
    // Handle list tools requests
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      console.log('[GHL MCP HTTP] Listing available tools...');
      
      try {
        const contactToolDefinitions = this.contactTools.getToolDefinitions();
        const conversationToolDefinitions = this.conversationTools.getToolDefinitions();
        const blogToolDefinitions = this.blogTools.getToolDefinitions();
        const opportunityToolDefinitions = this.opportunityTools.getToolDefinitions();
        const calendarToolDefinitions = this.calendarTools.getToolDefinitions();
        const emailToolDefinitions = this.emailTools.getToolDefinitions();
        const locationToolDefinitions = this.locationTools.getToolDefinitions();
        const emailISVToolDefinitions = this.emailISVTools.getToolDefinitions();
        const socialMediaToolDefinitions = this.socialMediaTools.getTools();
        const mediaToolDefinitions = this.mediaTools.getToolDefinitions();
        const objectToolDefinitions = this.objectTools.getToolDefinitions();
        const associationToolDefinitions = this.associationTools.getTools();
        const customFieldV2ToolDefinitions = this.customFieldV2Tools.getTools();
        const workflowToolDefinitions = this.workflowTools.getTools();
        const surveyToolDefinitions = this.surveyTools.getTools();
        const storeToolDefinitions = this.storeTools.getTools();
        const productsToolDefinitions = this.productsTools.getTools();
        const affiliatesToolDefs = this.affiliatesTools.getToolDefinitions();
        const businessesToolDefs = this.businessesTools.getToolDefinitions();
        const campaignsToolDefs = this.campaignsTools.getToolDefinitions();
        const companiesToolDefs = this.companiesTools.getToolDefinitions();
        const coursesToolDefs = this.coursesTools.getToolDefinitions();
        const formsToolDefs = this.formsTools.getToolDefinitions();
        const funnelsToolDefs = this.funnelsTools.getToolDefinitions();
        const invoicesToolDefs = this.invoicesTools.getTools();
        const linksToolDefs = this.linksTools.getToolDefinitions();
        const paymentsToolDefs = this.paymentsTools.getTools();
        const phoneToolDefs = this.phoneTools.getToolDefinitions();
        const reportingToolDefs = this.reportingTools.getToolDefinitions();
        const reputationToolDefs = this.reputationTools.getToolDefinitions();
        const saasToolDefs = this.saasTools.getToolDefinitions();
        const smartListsToolDefs = this.smartListsTools.getToolDefinitions();
        const snapshotsToolDefs = this.snapshotsTools.getToolDefinitions();
        const templatesToolDefs = this.templatesTools.getToolDefinitions();
        const triggersToolDefs = this.triggersTools.getToolDefinitions();
        const usersToolDefs = this.usersTools.getToolDefinitions();
        const webhooksToolDefs = this.webhooksTools.getToolDefinitions();
        
        const allTools = [
          ...contactToolDefinitions,
          ...conversationToolDefinitions,
          ...blogToolDefinitions,
          ...opportunityToolDefinitions,
          ...calendarToolDefinitions,
          ...emailToolDefinitions,
          ...locationToolDefinitions,
          ...emailISVToolDefinitions,
          ...socialMediaToolDefinitions,
          ...mediaToolDefinitions,
          ...objectToolDefinitions,
          ...associationToolDefinitions,
          ...customFieldV2ToolDefinitions,
          ...workflowToolDefinitions,
          ...surveyToolDefinitions,
          ...storeToolDefinitions,
          ...productsToolDefinitions,
          ...affiliatesToolDefs,
          ...businessesToolDefs,
          ...campaignsToolDefs,
          ...companiesToolDefs,
          ...coursesToolDefs,
          ...formsToolDefs,
          ...funnelsToolDefs,
          ...invoicesToolDefs,
          ...linksToolDefs,
          ...paymentsToolDefs,
          ...phoneToolDefs,
          ...reportingToolDefs,
          ...reputationToolDefs,
          ...saasToolDefs,
          ...smartListsToolDefs,
          ...snapshotsToolDefs,
          ...templatesToolDefs,
          ...triggersToolDefs,
          ...usersToolDefs,
          ...webhooksToolDefs
        ];
        
        console.log(`[GHL MCP HTTP] Registered ${allTools.length} tools total`);
        
        return {
          tools: allTools
        };
      } catch (error) {
        console.error('[GHL MCP HTTP] Error listing tools:', error);
        throw new McpError(
          ErrorCode.InternalError,
          `Failed to list tools: ${error}`
        );
      }
    });

    // Handle tool execution requests
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;
      
      console.log(`[GHL MCP HTTP] Executing tool: ${name}`);

      try {
        let result: any;

        // Route to appropriate tool handler
        if (this.isContactTool(name)) {
          result = await this.contactTools.executeTool(name, args || {});
        } else if (this.isConversationTool(name)) {
          result = await this.conversationTools.executeTool(name, args || {});
        } else if (this.isBlogTool(name)) {
          result = await this.blogTools.executeTool(name, args || {});
        } else if (this.isOpportunityTool(name)) {
          result = await this.opportunityTools.executeTool(name, args || {});
        } else if (this.isCalendarTool(name)) {
          result = await this.calendarTools.executeTool(name, args || {});
        } else if (this.isEmailTool(name)) {
          result = await this.emailTools.executeTool(name, args || {});
        } else if (this.isLocationTool(name)) {
          result = await this.locationTools.executeTool(name, args || {});
        } else if (this.isEmailISVTool(name)) {
          result = await this.emailISVTools.executeTool(name, args || {});
        } else if (this.isSocialMediaTool(name)) {
          result = await this.socialMediaTools.executeTool(name, args || {});
        } else if (this.isMediaTool(name)) {
          result = await this.mediaTools.executeTool(name, args || {});
        } else if (this.isObjectTool(name)) {
          result = await this.objectTools.executeTool(name, args || {});
        } else if (this.isAssociationTool(name)) {
          result = await this.associationTools.executeAssociationTool(name, args || {});
        } else if (this.isCustomFieldV2Tool(name)) {
          result = await this.customFieldV2Tools.executeCustomFieldV2Tool(name, args || {});
        } else if (this.isWorkflowTool(name)) {
          result = await this.workflowTools.executeWorkflowTool(name, args || {});
        } else if (this.isSurveyTool(name)) {
          result = await this.surveyTools.executeSurveyTool(name, args || {});
        } else if (this.isStoreTool(name)) {
          result = await this.storeTools.executeStoreTool(name, args || {});
        } else if (this.isProductsTool(name)) {
          result = await this.productsTools.executeProductsTool(name, args || {});
        } else {
          // Try dynamic routing for newer tool modules (all use handleToolCall)
          result = await this.tryDynamicToolCall(name, args || {});
        }
        
        console.log(`[GHL MCP HTTP] Tool ${name} executed successfully`);
        
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(result, null, 2)
            }
          ]
        };
      } catch (error) {
        console.error(`[GHL MCP HTTP] Error executing tool ${name}:`, error);
        
        throw new McpError(
          ErrorCode.InternalError,
          `Tool execution failed: ${error}`
        );
      }
    });
  }

  /**
   * Setup HTTP routes
   */
  private setupRoutes(): void {
    // Health check endpoint
    this.app.get('/health', (req, res) => {
      res.json({ 
        status: 'healthy',
        server: 'ghl-mcp-server',
        version: '1.0.0',
        timestamp: new Date().toISOString(),
        tools: this.getToolsCount()
      });
    });

    // MCP capabilities endpoint
    this.app.get('/capabilities', (req, res) => {
      res.json({
        capabilities: {
          tools: {},
        },
        server: {
          name: 'ghl-mcp-server',
          version: '1.0.0'
        }
      });
    });

    // Tools listing endpoint
    this.app.get('/tools', async (req, res) => {
      try {
        const contactTools = this.contactTools.getToolDefinitions();
        const conversationTools = this.conversationTools.getToolDefinitions();
        const blogTools = this.blogTools.getToolDefinitions();
        const opportunityTools = this.opportunityTools.getToolDefinitions();
        const calendarTools = this.calendarTools.getToolDefinitions();
        const emailTools = this.emailTools.getToolDefinitions();
        const locationTools = this.locationTools.getToolDefinitions();
        const emailISVTools = this.emailISVTools.getToolDefinitions();
        const socialMediaTools = this.socialMediaTools.getTools();
        const mediaTools = this.mediaTools.getToolDefinitions();
        const objectTools = this.objectTools.getToolDefinitions();
        const associationTools = this.associationTools.getTools();
        const customFieldV2Tools = this.customFieldV2Tools.getTools();
        const workflowTools = this.workflowTools.getTools();
        const surveyTools = this.surveyTools.getTools();
        const storeTools = this.storeTools.getTools();
        const productsTools = this.productsTools.getTools();
        const appTools = this.mcpAppsManager.getToolDefinitions();
        
        const allTools = [
          ...contactTools, ...conversationTools, ...blogTools, ...opportunityTools,
          ...calendarTools, ...emailTools, ...locationTools, ...emailISVTools,
          ...socialMediaTools, ...mediaTools, ...objectTools, ...associationTools,
          ...customFieldV2Tools, ...workflowTools, ...surveyTools, ...storeTools,
          ...productsTools, ...appTools,
          ...this.affiliatesTools.getToolDefinitions(),
          ...this.businessesTools.getToolDefinitions(),
          ...this.campaignsTools.getToolDefinitions(),
          ...this.companiesTools.getToolDefinitions(),
          ...this.coursesTools.getToolDefinitions(),
          ...this.formsTools.getToolDefinitions(),
          ...this.funnelsTools.getToolDefinitions(),
          ...this.invoicesTools.getTools(),
          ...this.linksTools.getToolDefinitions(),
          ...this.paymentsTools.getTools(),
          ...this.phoneTools.getToolDefinitions(),
          ...this.reportingTools.getToolDefinitions(),
          ...this.reputationTools.getToolDefinitions(),
          ...this.saasTools.getToolDefinitions(),
          ...this.smartListsTools.getToolDefinitions(),
          ...this.snapshotsTools.getToolDefinitions(),
          ...this.templatesTools.getToolDefinitions(),
          ...this.triggersTools.getToolDefinitions(),
          ...this.usersTools.getToolDefinitions(),
          ...this.webhooksTools.getToolDefinitions(),
        ];
        res.json({
          tools: allTools,
          count: allTools.length
        });
      } catch (error) {
        res.status(500).json({ error: 'Failed to list tools' });
      }
    });

    // Tool execution endpoint (REST)
    this.app.post('/tools/call', async (req, res) => {
      const { name, arguments: args } = req.body;
      if (!name) {
        res.status(400).json({ error: 'Missing tool name' });
        return;
      }
      console.log(`[GHL MCP HTTP] REST tool call: ${name}`);
      try {
        let result: any;
        if (this.isContactTool(name)) {
          result = await this.contactTools.executeTool(name, args || {});
        } else if (this.isConversationTool(name)) {
          result = await this.conversationTools.executeTool(name, args || {});
        } else if (this.isBlogTool(name)) {
          result = await this.blogTools.executeTool(name, args || {});
        } else if (this.isOpportunityTool(name)) {
          result = await this.opportunityTools.executeTool(name, args || {});
        } else if (this.isCalendarTool(name)) {
          result = await this.calendarTools.executeTool(name, args || {});
        } else if (this.isEmailTool(name)) {
          result = await this.emailTools.executeTool(name, args || {});
        } else if (this.isLocationTool(name)) {
          result = await this.locationTools.executeTool(name, args || {});
        } else if (this.isEmailISVTool(name)) {
          result = await this.emailISVTools.executeTool(name, args || {});
        } else if (this.isSocialMediaTool(name)) {
          result = await this.socialMediaTools.executeTool(name, args || {});
        } else if (this.isMediaTool(name)) {
          result = await this.mediaTools.executeTool(name, args || {});
        } else if (this.isObjectTool(name)) {
          result = await this.objectTools.executeTool(name, args || {});
        } else if (this.isAssociationTool(name)) {
          result = await this.associationTools.executeAssociationTool(name, args || {});
        } else if (this.isCustomFieldV2Tool(name)) {
          result = await this.customFieldV2Tools.executeCustomFieldV2Tool(name, args || {});
        } else if (this.isWorkflowTool(name)) {
          result = await this.workflowTools.executeWorkflowTool(name, args || {});
        } else if (this.isSurveyTool(name)) {
          result = await this.surveyTools.executeSurveyTool(name, args || {});
        } else if (this.isStoreTool(name)) {
          result = await this.storeTools.executeStoreTool(name, args || {});
        } else if (this.isProductsTool(name)) {
          result = await this.productsTools.executeProductsTool(name, args || {});
        } else if (this.mcpAppsManager.isAppTool(name)) {
          result = await this.mcpAppsManager.executeTool(name, args || {});
        } else {
          // Try dynamic routing for newer tool modules
          try {
            result = await this.tryDynamicToolCall(name, args || {});
          } catch (e: any) {
            if (e.message?.includes('Unknown tool')) {
              res.status(404).json({ error: `Unknown tool: ${name}` });
              return;
            }
            throw e;
          }
        }
        console.log(`[GHL MCP HTTP] REST tool ${name} executed successfully`);
        res.json({ result });
      } catch (error: any) {
        console.error(`[GHL MCP HTTP] REST tool ${name} error:`, error);
        res.status(500).json({ error: `Tool execution failed: ${error.message || error}` });
      }
    });

    // SSE endpoint for ChatGPT MCP connection
    const handleSSE = async (req: express.Request, res: express.Response) => {
      const sessionId = req.query.sessionId || 'unknown';
      console.log(`[GHL MCP HTTP] New SSE connection from: ${req.ip}, sessionId: ${sessionId}, method: ${req.method}`);
      
      try {
        // Create SSE transport (this will set the headers)
        const transport = new SSEServerTransport('/sse', res);
        
        // Connect MCP server to transport
        await this.server.connect(transport);
        
        console.log(`[GHL MCP HTTP] SSE connection established for session: ${sessionId}`);
        
        // Handle client disconnect
        req.on('close', () => {
          console.log(`[GHL MCP HTTP] SSE connection closed for session: ${sessionId}`);
        });
        
      } catch (error) {
        console.error(`[GHL MCP HTTP] SSE connection error for session ${sessionId}:`, error);
        
        // Only send error response if headers haven't been sent yet
        if (!res.headersSent) {
          res.status(500).json({ error: 'Failed to establish SSE connection' });
        } else {
          // If headers were already sent, close the connection
          res.end();
        }
      }
    };

    // Handle both GET and POST for SSE (MCP protocol requirements)
    this.app.get('/sse', handleSSE);
    this.app.post('/sse', handleSSE);

    // Root endpoint with server info
    this.app.get('/', (req, res) => {
      res.json({
        name: 'GoHighLevel MCP Server',
        version: '1.0.0',
        status: 'running',
        endpoints: {
          health: '/health',
          capabilities: '/capabilities',
          tools: '/tools',
          sse: '/sse'
        },
        tools: this.getToolsCount(),
        documentation: 'https://github.com/your-repo/ghl-mcp-server'
      });
    });
  }

  /**
   * Get tools count summary
   */
  private getToolsCount() {
    // Legacy modules (original 17)
    const legacyCounts: Record<string, number> = {
      contact: this.contactTools.getToolDefinitions().length,
      conversation: this.conversationTools.getToolDefinitions().length,
      blog: this.blogTools.getToolDefinitions().length,
      opportunity: this.opportunityTools.getToolDefinitions().length,
      calendar: this.calendarTools.getToolDefinitions().length,
      email: this.emailTools.getToolDefinitions().length,
      location: this.locationTools.getToolDefinitions().length,
      emailISV: this.emailISVTools.getToolDefinitions().length,
      socialMedia: this.socialMediaTools.getTools().length,
      media: this.mediaTools.getToolDefinitions().length,
      objects: this.objectTools.getToolDefinitions().length,
      associations: this.associationTools.getTools().length,
      customFieldsV2: this.customFieldV2Tools.getTools().length,
      workflows: this.workflowTools.getTools().length,
      surveys: this.surveyTools.getTools().length,
      store: this.storeTools.getTools().length,
      products: this.productsTools.getTools().length,
    };

    // Dynamic modules (21 newer modules added later)
    const dynamicModules: Array<{ name: string; instance: any; listMethod: string }> = [
      { name: 'affiliates', instance: this.affiliatesTools, listMethod: 'getToolDefinitions' },
      { name: 'businesses', instance: this.businessesTools, listMethod: 'getToolDefinitions' },
      { name: 'campaigns', instance: this.campaignsTools, listMethod: 'getToolDefinitions' },
      { name: 'companies', instance: this.companiesTools, listMethod: 'getToolDefinitions' },
      { name: 'courses', instance: this.coursesTools, listMethod: 'getToolDefinitions' },
      { name: 'forms', instance: this.formsTools, listMethod: 'getToolDefinitions' },
      { name: 'funnels', instance: this.funnelsTools, listMethod: 'getToolDefinitions' },
      { name: 'invoices', instance: this.invoicesTools, listMethod: 'getTools' },
      { name: 'links', instance: this.linksTools, listMethod: 'getToolDefinitions' },
      { name: 'payments', instance: this.paymentsTools, listMethod: 'getTools' },
      { name: 'phone', instance: this.phoneTools, listMethod: 'getToolDefinitions' },
      { name: 'reporting', instance: this.reportingTools, listMethod: 'getToolDefinitions' },
      { name: 'reputation', instance: this.reputationTools, listMethod: 'getToolDefinitions' },
      { name: 'saas', instance: this.saasTools, listMethod: 'getToolDefinitions' },
      { name: 'smartLists', instance: this.smartListsTools, listMethod: 'getToolDefinitions' },
      { name: 'snapshots', instance: this.snapshotsTools, listMethod: 'getToolDefinitions' },
      { name: 'templates', instance: this.templatesTools, listMethod: 'getToolDefinitions' },
      { name: 'triggers', instance: this.triggersTools, listMethod: 'getToolDefinitions' },
      { name: 'users', instance: this.usersTools, listMethod: 'getToolDefinitions' },
      { name: 'webhooks', instance: this.webhooksTools, listMethod: 'getToolDefinitions' },
      { name: 'apps', instance: this.mcpAppsManager, listMethod: 'getToolDefinitions' },
    ];

    const dynamicCounts: Record<string, number> = {};
    for (const mod of dynamicModules) {
      try {
        dynamicCounts[mod.name] = mod.instance[mod.listMethod]().length;
      } catch { dynamicCounts[mod.name] = 0; }
    }

    const legacyTotal = Object.values(legacyCounts).reduce((a, b) => a + b, 0);
    const dynamicTotal = Object.values(dynamicCounts).reduce((a, b) => a + b, 0);

    return {
      ...legacyCounts,
      ...dynamicCounts,
      total: legacyTotal + dynamicTotal,
      sections: Object.keys(legacyCounts).length + Object.keys(dynamicCounts).length,
    };
  }

  /**
   * Dynamic tool router for newer modules that use handleToolCall.
   * Builds a tool-name → handler map from all new modules' tool definitions,
   * then routes to the correct module's handleToolCall.
   */
  private _dynamicToolMap: Map<string, { handleToolCall: (name: string, args: Record<string, unknown>) => Promise<unknown> }> | null = null;

  private getDynamicToolMap() {
    if (this._dynamicToolMap) return this._dynamicToolMap;
    
    const modules: Array<{ instance: any; listMethod: string }> = [
      { instance: this.affiliatesTools, listMethod: 'getToolDefinitions' },
      { instance: this.businessesTools, listMethod: 'getToolDefinitions' },
      { instance: this.campaignsTools, listMethod: 'getToolDefinitions' },
      { instance: this.companiesTools, listMethod: 'getToolDefinitions' },
      { instance: this.coursesTools, listMethod: 'getToolDefinitions' },
      { instance: this.formsTools, listMethod: 'getToolDefinitions' },
      { instance: this.funnelsTools, listMethod: 'getToolDefinitions' },
      { instance: this.invoicesTools, listMethod: 'getTools' },
      { instance: this.linksTools, listMethod: 'getToolDefinitions' },
      { instance: this.paymentsTools, listMethod: 'getTools' },
      { instance: this.phoneTools, listMethod: 'getToolDefinitions' },
      { instance: this.reportingTools, listMethod: 'getToolDefinitions' },
      { instance: this.reputationTools, listMethod: 'getToolDefinitions' },
      { instance: this.saasTools, listMethod: 'getToolDefinitions' },
      { instance: this.smartListsTools, listMethod: 'getToolDefinitions' },
      { instance: this.snapshotsTools, listMethod: 'getToolDefinitions' },
      { instance: this.templatesTools, listMethod: 'getToolDefinitions' },
      { instance: this.triggersTools, listMethod: 'getToolDefinitions' },
      { instance: this.usersTools, listMethod: 'getToolDefinitions' },
      { instance: this.webhooksTools, listMethod: 'getToolDefinitions' },
    ];

    const map = new Map<string, any>();
    for (const mod of modules) {
      const tools: any[] = mod.instance[mod.listMethod]();
      for (const tool of tools) {
        map.set(tool.name, mod.instance);
      }
    }
    this._dynamicToolMap = map;
    return map;
  }

  private async tryDynamicToolCall(toolName: string, args: Record<string, unknown>): Promise<unknown> {
    const map = this.getDynamicToolMap();
    const handler = map.get(toolName);
    if (!handler) {
      throw new Error(`Unknown tool: ${toolName}`);
    }
    return handler.handleToolCall(toolName, args);
  }

  /**
   * Tool name validation helpers
   */
  private isContactTool(toolName: string): boolean {
    const contactToolNames = [
      // Basic Contact Management
      'create_contact', 'search_contacts', 'get_contact', 'update_contact',
      'add_contact_tags', 'remove_contact_tags', 'delete_contact',
      // Task Management
      'get_contact_tasks', 'create_contact_task', 'get_contact_task', 'update_contact_task',
      'delete_contact_task', 'update_task_completion',
      // Note Management
      'get_contact_notes', 'create_contact_note', 'get_contact_note', 'update_contact_note',
      'delete_contact_note',
      // Advanced Operations
      'upsert_contact', 'get_duplicate_contact', 'get_contacts_by_business', 'get_contact_appointments',
      // Bulk Operations
      'bulk_update_contact_tags', 'bulk_update_contact_business',
      // Followers Management
      'add_contact_followers', 'remove_contact_followers',
      // Campaign Management
      'add_contact_to_campaign', 'remove_contact_from_campaign', 'remove_contact_from_all_campaigns',
      // Workflow Management
      'add_contact_to_workflow', 'remove_contact_from_workflow'
    ];
    return contactToolNames.includes(toolName);
  }

  private isConversationTool(toolName: string): boolean {
    const conversationToolNames = [
      // Basic conversation operations
      'send_sms', 'send_email', 'search_conversations', 'get_conversation',
      'create_conversation', 'update_conversation', 'delete_conversation', 'get_recent_messages',
      // Message management
      'get_email_message', 'get_message', 'upload_message_attachments', 'update_message_status',
      // Manual message creation
      'add_inbound_message', 'add_outbound_call',
      // Call recordings & transcriptions
      'get_message_recording', 'get_message_transcription', 'download_transcription',
      // Scheduling management
      'cancel_scheduled_message', 'cancel_scheduled_email',
      // Live chat features
      'live_chat_typing'
    ];
    return conversationToolNames.includes(toolName);
  }

  private isBlogTool(toolName: string): boolean {
    const blogToolNames = [
      'create_blog_post', 'update_blog_post', 'get_blog_posts', 'get_blog_sites',
      'get_blog_authors', 'get_blog_categories', 'check_url_slug'
    ];
    return blogToolNames.includes(toolName);
  }

  private isOpportunityTool(toolName: string): boolean {
    const opportunityToolNames = [
      'search_opportunities', 'get_pipelines', 'get_opportunity', 'create_opportunity',
      'update_opportunity_status', 'delete_opportunity', 'update_opportunity', 
      'upsert_opportunity', 'add_opportunity_followers', 'remove_opportunity_followers'
    ];
    return opportunityToolNames.includes(toolName);
  }

  private isCalendarTool(toolName: string): boolean {
    const calendarToolNames = [
      // Calendar Groups Management
      'get_calendar_groups', 'create_calendar_group', 'validate_group_slug',
      'update_calendar_group', 'delete_calendar_group', 'disable_calendar_group',
      // Calendars
      'get_calendars', 'create_calendar', 'get_calendar', 'update_calendar', 'delete_calendar',
      // Events and Appointments
      'get_calendar_events', 'get_free_slots', 'create_appointment', 'get_appointment',
      'update_appointment', 'delete_appointment',
      // Appointment Notes
      'get_appointment_notes', 'create_appointment_note', 'update_appointment_note', 'delete_appointment_note',
      // Calendar Resources
      'get_calendar_resources', 'get_calendar_resource_by_id', 'update_calendar_resource', 'delete_calendar_resource',
      // Calendar Notifications
      'get_calendar_notifications', 'create_calendar_notification', 'update_calendar_notification', 'delete_calendar_notification',
      // Blocked Slots
      'create_block_slot', 'update_block_slot', 'get_blocked_slots', 'delete_blocked_slot'
    ];
    return calendarToolNames.includes(toolName);
  }

  private isEmailTool(toolName: string): boolean {
    const emailToolNames = [
      'get_email_campaigns', 'create_email_template', 'get_email_templates',
      'update_email_template', 'delete_email_template'
    ];
    return emailToolNames.includes(toolName);
  }

  private isLocationTool(toolName: string): boolean {
    const locationToolNames = [
      // Location Management
      'search_locations', 'get_location', 'create_location', 'update_location', 'delete_location',
      // Location Tags
      'get_location_tags', 'create_location_tag', 'get_location_tag', 'update_location_tag', 'delete_location_tag',
      // Location Tasks
      'search_location_tasks',
      // Custom Fields
      'get_location_custom_fields', 'create_location_custom_field', 'get_location_custom_field', 
      'update_location_custom_field', 'delete_location_custom_field',
      // Custom Values
      'get_location_custom_values', 'create_location_custom_value', 'get_location_custom_value',
      'update_location_custom_value', 'delete_location_custom_value',
      // Templates
      'get_location_templates', 'delete_location_template',
      // Timezones
      'get_timezones'
    ];
    return locationToolNames.includes(toolName);
  }

  private isEmailISVTool(toolName: string): boolean {
    const emailISVToolNames = [
      'verify_email'
    ];
    return emailISVToolNames.includes(toolName);
  }

  private isSocialMediaTool(toolName: string): boolean {
    const socialMediaToolNames = [
      // Post Management
      'search_social_posts', 'create_social_post', 'get_social_post', 'update_social_post',
      'delete_social_post', 'bulk_delete_social_posts',
      // Account Management
      'get_social_accounts', 'delete_social_account',
      // CSV Operations
      'upload_social_csv', 'get_csv_upload_status', 'set_csv_accounts',
      // Categories & Tags
      'get_social_categories', 'get_social_category', 'get_social_tags', 'get_social_tags_by_ids',
      // OAuth Integration
      'start_social_oauth', 'get_platform_accounts'
    ];
    return socialMediaToolNames.includes(toolName);
  }

  private isMediaTool(toolName: string): boolean {
    const mediaToolNames = [
      'get_media_files', 'upload_media_file', 'delete_media_file'
    ];
    return mediaToolNames.includes(toolName);
  }

  private isObjectTool(toolName: string): boolean {
    const objectToolNames = [
      'get_all_objects', 'create_object_schema', 'get_object_schema', 'update_object_schema',
      'create_object_record', 'get_object_record', 'update_object_record', 'delete_object_record',
      'search_object_records'
    ];
    return objectToolNames.includes(toolName);
  }

  private isAssociationTool(toolName: string): boolean {
    const associationToolNames = [
      'ghl_get_all_associations', 'ghl_create_association', 'ghl_get_association_by_id',
      'ghl_update_association', 'ghl_delete_association', 'ghl_get_association_by_key',
      'ghl_get_association_by_object_key', 'ghl_create_relation', 'ghl_get_relations_by_record',
      'ghl_delete_relation'
    ];
    return associationToolNames.includes(toolName);
  }

  private isCustomFieldV2Tool(toolName: string): boolean {
    const customFieldV2ToolNames = [
      'ghl_get_custom_field_by_id', 'ghl_create_custom_field', 'ghl_update_custom_field',
      'ghl_delete_custom_field', 'ghl_get_custom_fields_by_object_key', 'ghl_create_custom_field_folder',
      'ghl_update_custom_field_folder', 'ghl_delete_custom_field_folder'
    ];
    return customFieldV2ToolNames.includes(toolName);
  }

  private isWorkflowTool(toolName: string): boolean {
    const workflowToolNames = [
      'ghl_get_workflows'
    ];
    return workflowToolNames.includes(toolName);
  }

  private isSurveyTool(toolName: string): boolean {
    const surveyToolNames = [
      'ghl_get_surveys',
      'ghl_get_survey_submissions'
    ];
    return surveyToolNames.includes(toolName);
  }

  private isStoreTool(toolName: string): boolean {
    const storeToolNames = [
      'ghl_create_shipping_zone', 'ghl_list_shipping_zones', 'ghl_get_shipping_zone',
      'ghl_update_shipping_zone', 'ghl_delete_shipping_zone', 'ghl_get_available_shipping_rates',
      'ghl_create_shipping_rate', 'ghl_list_shipping_rates', 'ghl_get_shipping_rate',
      'ghl_update_shipping_rate', 'ghl_delete_shipping_rate', 'ghl_create_shipping_carrier',
      'ghl_list_shipping_carriers', 'ghl_get_shipping_carrier', 'ghl_update_shipping_carrier',
      'ghl_delete_shipping_carrier', 'ghl_create_store_setting', 'ghl_get_store_setting'
    ];
    return storeToolNames.includes(toolName);
  }

  private isProductsTool(toolName: string): boolean {
    const productsToolNames = [
      'ghl_create_product', 'ghl_list_products', 'ghl_get_product', 'ghl_update_product',
      'ghl_delete_product', 'ghl_bulk_update_products', 'ghl_create_price', 'ghl_list_prices',
      'ghl_get_price', 'ghl_update_price', 'ghl_delete_price', 'ghl_list_inventory',
      'ghl_update_inventory', 'ghl_get_product_store_stats', 'ghl_update_product_store',
      'ghl_create_product_collection', 'ghl_list_product_collections', 'ghl_get_product_collection',
      'ghl_update_product_collection', 'ghl_delete_product_collection', 'ghl_list_product_reviews',
      'ghl_get_reviews_count', 'ghl_update_product_review', 'ghl_delete_product_review',
      'ghl_bulk_update_product_reviews'
    ];
    return productsToolNames.includes(toolName);
  }

  /**
   * Test GHL API connection
   */
  private async testGHLConnection(): Promise<void> {
    try {
      console.log('[GHL MCP HTTP] Testing GHL API connection...');
      
      const result = await this.ghlClient.testConnection();
      
      console.log('[GHL MCP HTTP] ✅ GHL API connection successful');
      console.log(`[GHL MCP HTTP] Connected to location: ${result.data?.locationId}`);
    } catch (error) {
      console.error('[GHL MCP HTTP] ❌ GHL API connection failed:', error);
      throw new Error(`Failed to connect to GHL API: ${error}`);
    }
  }

  /**
   * Start the HTTP server
   */
  async start(): Promise<void> {
    console.log('🚀 Starting GoHighLevel MCP HTTP Server...');
    console.log('=========================================');
    
    try {
      // Test GHL API connection
      await this.testGHLConnection();
      
      // Start HTTP server
      this.app.listen(this.port, '0.0.0.0', () => {
        console.log('✅ GoHighLevel MCP HTTP Server started successfully!');
        console.log(`🌐 Server running on: http://0.0.0.0:${this.port}`);
        console.log(`🔗 SSE Endpoint: http://0.0.0.0:${this.port}/sse`);
        console.log(`📋 Tools Available: ${this.getToolsCount().total}`);
        console.log('🎯 Ready for ChatGPT integration!');
        console.log('=========================================');
      });
      
    } catch (error) {
      console.error('❌ Failed to start GHL MCP HTTP Server:', error);
      process.exit(1);
    }
  }
}

/**
 * Handle graceful shutdown
 */
function setupGracefulShutdown(): void {
  const shutdown = (signal: string) => {
    console.log(`\n[GHL MCP HTTP] Received ${signal}, shutting down gracefully...`);
    process.exit(0);
  };

  process.on('SIGINT', () => shutdown('SIGINT'));
  process.on('SIGTERM', () => shutdown('SIGTERM'));
}

/**
 * Main entry point
 */
async function main(): Promise<void> {
  try {
    // Setup graceful shutdown
    setupGracefulShutdown();
    
    // Create and start HTTP server
    const server = new GHLMCPHttpServer();
    await server.start();
    
  } catch (error) {
    console.error('💥 Fatal error:', error);
    process.exit(1);
  }
}

// Start the server
main().catch((error) => {
  console.error('Unhandled error:', error);
  process.exit(1);
}); 