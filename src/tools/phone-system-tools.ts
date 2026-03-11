/**
 * GoHighLevel Phone System Tools
 * Tools for managing number pools and active phone numbers
 * (Separate from phone-tools.ts which covers phone number provisioning/messaging)
 */

import { GHLApiClient } from '../clients/ghl-api-client.js';

export class PhoneSystemTools {
  constructor(private ghlClient: GHLApiClient) {}

  getToolDefinitions() {
    return [
      {
        name: 'list_number_pools',
        description: 'List all phone number pools available in the phone system. Number pools are groups of numbers used for call tracking and rotation.',
        inputSchema: {
          type: 'object',
          properties: {
            locationId: {
              type: 'string',
              description: 'Location ID to filter number pools (uses default if not provided)'
            },
            companyId: {
              type: 'string',
              description: 'Company/Agency ID to filter number pools'
            }
          }
        },
        _meta: {
          labels: {
            category: "phone-system",
            access: "read",
            complexity: "simple"
          }
        }
      },
      {
        name: 'list_active_numbers_by_location',
        description: 'List all active phone numbers assigned to a specific location',
        inputSchema: {
          type: 'object',
          properties: {
            locationId: {
              type: 'string',
              description: 'Location ID to retrieve active numbers for (uses default if not provided)'
            }
          }
        },
        _meta: {
          labels: {
            category: "phone-system",
            access: "read",
            complexity: "simple"
          }
        }
      }
    ];
  }

  async handleToolCall(toolName: string, args: Record<string, unknown>): Promise<unknown> {
    const config = this.ghlClient.getConfig();
    const locationId = (args.locationId as string) || config.locationId;

    switch (toolName) {
      case 'list_number_pools': {
        const params = new URLSearchParams();
        if (locationId) params.append('locationId', locationId);
        if (args.companyId) params.append('companyId', String(args.companyId));

        const query = params.toString();
        return this.ghlClient.makeRequest('GET', `/phone-system/number-pools${query ? `?${query}` : ''}`);
      }

      case 'list_active_numbers_by_location': {
        return this.ghlClient.makeRequest('GET', `/phone-system/numbers/location/${locationId}`);
      }

      default:
        throw new Error(`Unknown tool: ${toolName}`);
    }
  }
}
