# GHL MCP Server — Tool Catalog (552 tools)

> Auto-generated on 2026-03-19. Call tools via `POST /tools/call { "name": "<tool>", "arguments": {...} }`

## Table of Contents

- [Affiliates (17 tools)](#affiliates)
- [Agent Studio (8 tools)](#agent-studio)
- [Analytics (12 tools)](#analytics)
- [Associations (10 tools)](#associations)
- [Blogs (7 tools)](#blogs)
- [Businesses (5 tools)](#businesses)
- [Calendar (39 tools)](#calendar)
- [Campaigns (12 tools)](#campaigns)
- [Contacts (31 tools)](#contacts)
- [Conversations (20 tools)](#conversations)
- [Courses (32 tools)](#courses)
- [Custom Fields (8 tools)](#custom-fields)
- [Custom Menus (5 tools)](#custom-menus)
- [Deals (10 tools)](#deals)
- [Email (6 tools)](#email)
- [Email Isv (8 tools)](#email-isv)
- [Forms (4 tools)](#forms)
- [Funnels (8 tools)](#funnels)
- [General (5 tools)](#general)
- [Invoices (18 tools)](#invoices)
- [Links (6 tools)](#links)
- [Locations (28 tools)](#locations)
- [Marketplace (7 tools)](#marketplace)
- [Media (7 tools)](#media)
- [Objects (9 tools)](#objects)
- [Payments (22 tools)](#payments)
- [Phone Numbers (20 tools)](#phone-numbers)
- [Phone System (15 tools)](#phone-system)
- [Products (11 tools)](#products)
- [Proposals (4 tools)](#proposals)
- [Reputation (15 tools)](#reputation)
- [Saas (12 tools)](#saas)
- [Smartlists (8 tools)](#smartlists)
- [Snapshots (7 tools)](#snapshots)
- [Social Media (19 tools)](#social-media)
- [Stores (18 tools)](#stores)
- [Surveys (9 tools)](#surveys)
- [Templates (18 tools)](#templates)
- [Triggers (11 tools)](#triggers)
- [Users (7 tools)](#users)
- [Voice Ai (11 tools)](#voice-ai)
- [Webhooks (9 tools)](#webhooks)
- [Workflows (14 tools)](#workflows)

---

## Affiliates

### approve_affiliate `READ`

Approve a pending affiliate

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| affiliateId | string | **yes** | Affiliate ID |
| locationId | string | no | Location ID |

### get_affiliate `READ`

Get a specific affiliate

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| affiliateId | string | **yes** | Affiliate ID |
| locationId | string | no | Location ID |

### get_affiliate_campaign `READ`

Get a specific affiliate campaign

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| campaignId | string | **yes** | Affiliate Campaign ID |
| locationId | string | no | Location ID |

### get_affiliate_campaigns `READ`

Get all affiliate campaigns

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| status | string | no | Campaign status filter Values: `active` \| `inactive` \| `all` |
| limit | number | no | Max results |
| offset | number | no | Pagination offset |

### get_affiliate_commissions `READ`

Get commissions for an affiliate

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| affiliateId | string | **yes** | Affiliate ID |
| locationId | string | no | Location ID |
| status | string | no | Status filter Values: `pending` \| `approved` \| `paid` \| `all` |
| startDate | string | no | Start date |
| endDate | string | no | End date |
| limit | number | no | Max results |
| offset | number | no | Pagination offset |

### get_affiliate_stats `READ`

Get affiliate performance statistics

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| affiliateId | string | **yes** | Affiliate ID |
| locationId | string | no | Location ID |
| startDate | string | no | Start date |
| endDate | string | no | End date |

### get_affiliates `READ`

Get all affiliates

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| campaignId | string | no | Filter by campaign |
| status | string | no | Status filter Values: `pending` \| `approved` \| `rejected` \| `all` |
| limit | number | no | Max results |
| offset | number | no | Pagination offset |

### get_payouts `READ`

Get affiliate payouts

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| affiliateId | string | no | Filter by affiliate |
| status | string | no | Status filter Values: `pending` \| `completed` \| `failed` \| `all` |
| limit | number | no | Max results |
| offset | number | no | Pagination offset |

### get_referrals `READ`

Get referrals (leads/sales) from affiliates

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| affiliateId | string | no | Filter by affiliate |
| campaignId | string | no | Filter by campaign |
| type | string | no | Referral type Values: `lead` \| `sale` \| `all` |
| limit | number | no | Max results |
| offset | number | no | Pagination offset |

### reject_affiliate `READ`

Reject/deny a pending affiliate

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| affiliateId | string | **yes** | Affiliate ID |
| locationId | string | no | Location ID |
| reason | string | no | Rejection reason |

### create_affiliate `WRITE`

Create/add a new affiliate

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| contactId | string | **yes** | Contact ID to make affiliate |
| campaignId | string | **yes** | Campaign to assign to |
| customCode | string | no | Custom affiliate code |
| status | string | no | Initial status Values: `pending` \| `approved` |

### create_affiliate_campaign `WRITE`

Create a new affiliate campaign

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| name | string | **yes** | Campaign name |
| description | string | no | Campaign description |
| commissionType | string | **yes** | Commission type Values: `percentage` \| `fixed` |
| commissionValue | number | **yes** | Commission value (percentage or fixed amount) |
| cookieDays | number | no | Cookie tracking duration in days |
| productIds | array\<string\> | no | Product IDs for this campaign |

### create_payout `WRITE`

Create a payout for affiliate

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| affiliateId | string | **yes** | Affiliate ID |
| locationId | string | no | Location ID |
| amount | number | **yes** | Payout amount |
| commissionIds | array\<string\> | no | Commission IDs to include |
| note | string | no | Payout note |

### update_affiliate `WRITE`

Update an affiliate

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| affiliateId | string | **yes** | Affiliate ID |
| locationId | string | no | Location ID |
| status | string | no | Status Values: `pending` \| `approved` \| `rejected` |
| customCode | string | no | Custom affiliate code |

### update_affiliate_campaign `WRITE`

Update an affiliate campaign

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| campaignId | string | **yes** | Campaign ID |
| locationId | string | no | Location ID |
| name | string | no | Campaign name |
| description | string | no | Campaign description |
| commissionType | string | no | Commission type Values: `percentage` \| `fixed` |
| commissionValue | number | no | Commission value |
| status | string | no | Campaign status Values: `active` \| `inactive` |

### delete_affiliate `DELETE`

Remove an affiliate

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| affiliateId | string | **yes** | Affiliate ID |
| locationId | string | no | Location ID |

### delete_affiliate_campaign `DELETE`

Delete an affiliate campaign

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| campaignId | string | **yes** | Campaign ID |
| locationId | string | no | Location ID |

## Agent Studio

### ghl_get_agent `READ`

Get details for a specific AI agent by ID, including its current staging and production versions.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| agentId | string | **yes** | The unique ID of the agent to retrieve |
| locationId | string | no | Location ID (uses default if not provided) |

### ghl_list_agent_versions `READ`

List all versions (staging and production snapshots) for a given agent.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| agentId | string | **yes** | The unique ID of the agent |
| locationId | string | no | Location ID (uses default if not provided) |

### ghl_list_agents `READ`

List all AI agents in a GoHighLevel location. Returns agent metadata including IDs, names, statuses and version counts.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID to list agents for (uses default if not provided) |
| status | string | no | Filter agents by status Values: `active` \| `inactive` \| `draft` |
| limit | number | no | Maximum number of agents to return (default: 20) |
| skip | number | no | Number of agents to skip for pagination (default: 0) |

### ghl_create_agent `WRITE`

Create a new AI agent in GoHighLevel Agent Studio. A staging version is automatically created. Scope required: agent-studio_write.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID to create the agent in (uses default if not provided) |
| name | string | **yes** | Display name for the agent |
| description | string | no | Optional description of what the agent does |
| status | string | no | Initial status of the agent (default: draft) Values: `active` \| `inactive` \| `draft` |

### ghl_deploy_agent `WRITE`

Deploy an agent from staging to production. Creates an immutable production snapshot of the current staging version. The agent immediately serves live traffic after deployment.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| agentId | string | **yes** | The unique ID of the agent to deploy |
| locationId | string | no | Location ID (uses default if not provided) |
| notes | string | no | Optional deployment notes / changelog for this version |

### ghl_update_agent `WRITE`

Update agent metadata (name, description, status). To modify the agent graph (nodes/edges) use ghl_update_agent_version instead.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| agentId | string | **yes** | The unique ID of the agent to update |
| locationId | string | no | Location ID (uses default if not provided) |
| name | string | no | New display name for the agent |
| description | string | no | New description for the agent |
| status | string | no | New status for the agent Values: `active` \| `inactive` \| `draft` |

### ghl_update_agent_version `WRITE`

Update the agent graph for a specific version. This is the primary tool for building an agent programmatically — supply nodes (steps/actions), edges (transitions between nodes), variables (context data), and config (global settings). Typically called on the staging version before deploying.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| versionId | string | **yes** | The version ID to update (usually the staging version ID) |
| locationId | string | no | Location ID (uses default if not provided) |
| nodes | array\<object\> | no | Array of node objects defining each step/action in the agent. Each node has: id (string), type (string), data (object with node-specific config) |
| edges | array\<object\> | no | Array of edge objects defining transitions between nodes. Each edge has: id, source (node id), target (node id), and optional condition. |
| variables | array\<object\> | no | Context variables available throughout the agent conversation. Each variable has: name, type, defaultValue. |
| config | object | no | Global agent configuration: e.g., { model, temperature, maxTurns, fallbackMessage, language } |

### ghl_delete_agent `DELETE`

Permanently delete an AI agent and all its versions. This action is irreversible.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| agentId | string | **yes** | The unique ID of the agent to delete |
| locationId | string | no | Location ID (uses default if not provided) |

## Analytics

### get_ad_reports `READ`

Get advertising performance reports (Google/Facebook ads)

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| platform | string | no | Ad platform Values: `google` \| `facebook` \| `all` |
| startDate | string | **yes** | Start date (YYYY-MM-DD) |
| endDate | string | **yes** | End date (YYYY-MM-DD) |

### get_agent_reports `READ`

Get agent/user performance reports

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| userId | string | no | Filter by user ID |
| startDate | string | **yes** | Start date (YYYY-MM-DD) |
| endDate | string | **yes** | End date (YYYY-MM-DD) |

### get_appointment_reports `READ`

Get appointment activity reports

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| startDate | string | **yes** | Start date (YYYY-MM-DD) |
| endDate | string | **yes** | End date (YYYY-MM-DD) |
| calendarId | string | no | Filter by calendar ID |
| status | string | no | Appointment status filter Values: `booked` \| `confirmed` \| `showed` \| `noshow` \| `cancelled` |

### get_attribution_report `READ`

Get attribution/source tracking report showing where leads came from

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| startDate | string | **yes** | Start date (YYYY-MM-DD) |
| endDate | string | **yes** | End date (YYYY-MM-DD) |

### get_call_reports `READ`

Get call activity reports including call duration, outcomes, etc.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| startDate | string | **yes** | Start date (YYYY-MM-DD) |
| endDate | string | **yes** | End date (YYYY-MM-DD) |
| userId | string | no | Filter by user ID |
| type | string | no | Call type filter Values: `inbound` \| `outbound` \| `all` |

### get_conversion_reports `READ`

Get conversion tracking reports

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| startDate | string | **yes** | Start date (YYYY-MM-DD) |
| endDate | string | **yes** | End date (YYYY-MM-DD) |
| source | string | no | Filter by source |

### get_dashboard_stats `READ`

Get main dashboard statistics overview

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| dateRange | string | no | Date range preset Values: `today` \| `yesterday` \| `last7days` \| `last30days` \| `thisMonth` \| `lastMonth` \| `custom` |
| startDate | string | no | Start date for custom range |
| endDate | string | no | End date for custom range |

### get_email_reports `READ`

Get email performance reports (deliverability, opens, clicks)

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| startDate | string | **yes** | Start date (YYYY-MM-DD) |
| endDate | string | **yes** | End date (YYYY-MM-DD) |

### get_funnel_reports `READ`

Get funnel performance reports (page views, conversions)

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| funnelId | string | no | Filter by funnel ID |
| startDate | string | **yes** | Start date (YYYY-MM-DD) |
| endDate | string | **yes** | End date (YYYY-MM-DD) |

### get_pipeline_reports `READ`

Get pipeline/opportunity performance reports

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| pipelineId | string | no | Filter by pipeline ID |
| startDate | string | **yes** | Start date (YYYY-MM-DD) |
| endDate | string | **yes** | End date (YYYY-MM-DD) |
| userId | string | no | Filter by assigned user |

### get_revenue_reports `READ`

Get revenue/payment reports

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| startDate | string | **yes** | Start date (YYYY-MM-DD) |
| endDate | string | **yes** | End date (YYYY-MM-DD) |
| groupBy | string | no | Group results by Values: `day` \| `week` \| `month` |

### get_sms_reports `READ`

Get SMS performance reports

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| startDate | string | **yes** | Start date (YYYY-MM-DD) |
| endDate | string | **yes** | End date (YYYY-MM-DD) |

## Associations

### ghl_get_all_associations `READ`

Get all associations for a sub-account/location with pagination. Returns system-defined and user-defined associations.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | GoHighLevel location ID (will use default if not provided) |
| skip | number | no | Number of records to skip for pagination |
| limit | number | no | Maximum number of records to return (max 100) |

### ghl_get_association_by_id `READ`

Get a specific association by its ID. Works for both system-defined and user-defined associations.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| associationId | string | **yes** | The ID of the association to retrieve |

### ghl_get_association_by_key `READ`

Get an association by its key name. Useful for finding both standard and user-defined associations.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| keyName | string | **yes** | The key name of the association to retrieve |
| locationId | string | no | GoHighLevel location ID (will use default if not provided) |

### ghl_get_association_by_object_key `READ`

Get associations by object keys like contacts, custom objects, and opportunities.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| objectKey | string | **yes** | The object key to search for (e.g., "custom_objects.car", "contact", "opportunity") |
| locationId | string | no | GoHighLevel location ID (optional) |

### ghl_get_relations_by_record `READ`

Get all relations for a specific record ID with pagination and optional filtering by association IDs.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| recordId | string | **yes** | The record ID to get relations for |
| locationId | string | no | GoHighLevel location ID (will use default if not provided) |
| skip | number | no | Number of records to skip for pagination |
| limit | number | no | Maximum number of records to return |
| associationIds | array\<string\> | no | Optional array of association IDs to filter relations |

### ghl_create_association `WRITE`

Create a new association that defines relationship types between entities like contacts, custom objects, and opportunities.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | GoHighLevel location ID (will use default if not provided) |
| key | string | **yes** | Unique key for the association (e.g., "student_teacher") |
| firstObjectLabel | any | **yes** | Label for the first object in the association (e.g., "student") |
| firstObjectKey | any | **yes** | Key for the first object (e.g., "custom_objects.children") |
| secondObjectLabel | any | **yes** | Label for the second object in the association (e.g., "teacher") |
| secondObjectKey | any | **yes** | Key for the second object (e.g., "contact") |

### ghl_create_relation `WRITE`

Create a relation between two entities using an existing association. Links specific records together.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | GoHighLevel location ID (will use default if not provided) |
| associationId | string | **yes** | The ID of the association to use for this relation |
| firstRecordId | string | **yes** | ID of the first record (e.g., contact ID if contact is first object in association) |
| secondRecordId | string | **yes** | ID of the second record (e.g., custom object record ID if custom object is second object) |

### ghl_update_association `WRITE`

Update the labels of an existing association. Only user-defined associations can be updated.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| associationId | string | **yes** | The ID of the association to update |
| firstObjectLabel | any | **yes** | New label for the first object in the association |
| secondObjectLabel | any | **yes** | New label for the second object in the association |

### ghl_delete_association `DELETE`

Delete a user-defined association. This will also delete all relations created with this association.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| associationId | string | **yes** | The ID of the association to delete |

### ghl_delete_relation `DELETE`

Delete a specific relation between two entities.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| relationId | string | **yes** | The ID of the relation to delete |
| locationId | string | no | GoHighLevel location ID (will use default if not provided) |

## Blogs

### check_url_slug `READ`

Check if a URL slug is available for use. Use this before creating or updating blog posts to ensure unique URLs.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| urlSlug | string | **yes** | URL slug to check for availability |
| postId | string | no | Optional post ID when updating an existing post (to exclude itself from the check) |

### get_blog_authors `READ`

Get all available blog authors for the current location. Use this to find author IDs for creating blog posts.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| limit | number | no | Number of authors to retrieve (default: 10) |
| offset | number | no | Number of authors to skip for pagination (default: 0) |

### get_blog_categories `READ`

Get all available blog categories for the current location. Use this to find category IDs for creating blog posts.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| limit | number | no | Number of categories to retrieve (default: 10) |
| offset | number | no | Number of categories to skip for pagination (default: 0) |

### get_blog_posts `READ`

Get blog posts from a specific blog site. Use this to list and search existing blog posts.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| blogId | string | **yes** | Blog site ID to get posts from (use get_blog_sites to find available blogs) |
| limit | number | no | Number of posts to retrieve (default: 10, max recommended: 50) |
| offset | number | no | Number of posts to skip for pagination (default: 0) |
| searchTerm | string | no | Optional search term to filter posts by title or content |
| status | string | no | Optional filter by publication status Values: `DRAFT` \| `PUBLISHED` \| `SCHEDULED` \| `ARCHIVED` |

### get_blog_sites `READ`

Get all blog sites for the current location. Use this to find available blogs before creating or managing posts.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| limit | number | no | Number of blogs to retrieve (default: 10) |
| skip | number | no | Number of blogs to skip for pagination (default: 0) |
| searchTerm | string | no | Optional search term to filter blogs by name |

### create_blog_post `WRITE`

Create a new blog post in GoHighLevel. Requires blog ID, author ID, and category IDs which can be obtained from other blog tools.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| title | string | **yes** | Blog post title |
| blogId | string | **yes** | Blog site ID (use get_blog_sites to find available blogs) |
| content | string | **yes** | Full HTML content of the blog post |
| description | string | **yes** | Short description/excerpt of the blog post |
| imageUrl | string | **yes** | URL of the featured image for the blog post |
| imageAltText | string | **yes** | Alt text for the featured image (for SEO and accessibility) |
| urlSlug | string | **yes** | URL slug for the blog post (use check_url_slug to verify availability) |
| author | string | **yes** | Author ID (use get_blog_authors to find available authors) |
| categories | array\<string\> | **yes** | Array of category IDs (use get_blog_categories to find available categories) |
| tags | array\<string\> | no | Optional array of tags for the blog post |
| status | string | no | Publication status of the blog post Values: `DRAFT` \| `PUBLISHED` \| `SCHEDULED` \| `ARCHIVED` |
| canonicalLink | string | no | Optional canonical URL for SEO |
| publishedAt | string | no | Optional ISO timestamp for publication date (defaults to now for PUBLISHED status) |

### update_blog_post `WRITE`

Update an existing blog post in GoHighLevel. All fields except postId and blogId are optional.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| postId | string | **yes** | Blog post ID to update |
| blogId | string | **yes** | Blog site ID that contains the post |
| title | string | no | Updated blog post title |
| content | string | no | Updated HTML content of the blog post |
| description | string | no | Updated description/excerpt of the blog post |
| imageUrl | string | no | Updated featured image URL |
| imageAltText | string | no | Updated alt text for the featured image |
| urlSlug | string | no | Updated URL slug (use check_url_slug to verify availability) |
| author | string | no | Updated author ID |
| categories | array\<string\> | no | Updated array of category IDs |
| tags | array\<string\> | no | Updated array of tags |
| status | string | no | Updated publication status Values: `DRAFT` \| `PUBLISHED` \| `SCHEDULED` \| `ARCHIVED` |
| canonicalLink | string | no | Updated canonical URL |
| publishedAt | string | no | Updated ISO timestamp for publication date |

## Businesses

### get_business `READ`

Get a specific business by ID

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| businessId | string | **yes** | The business ID to retrieve |
| locationId | string | no | Location ID (uses default if not provided) |

### get_businesses `READ`

Get all businesses for a location. Businesses represent different entities within a sub-account.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID (uses default if not provided) |

### create_business `WRITE`

Create a new business for a location

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID (uses default if not provided) |
| name | string | **yes** | Business name |
| phone | string | no | Business phone number |
| email | string | no | Business email address |
| website | string | no | Business website URL |
| address | string | no | Business street address |
| city | string | no | Business city |
| state | string | no | Business state |
| postalCode | string | no | Business postal/zip code |
| country | string | no | Business country |
| description | string | no | Business description |
| logoUrl | string | no | URL to business logo image |

### update_business `WRITE`

Update an existing business

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| businessId | string | **yes** | The business ID to update |
| locationId | string | no | Location ID (uses default if not provided) |
| name | string | no | Business name |
| phone | string | no | Business phone number |
| email | string | no | Business email address |
| website | string | no | Business website URL |
| address | string | no | Business street address |
| city | string | no | Business city |
| state | string | no | Business state |
| postalCode | string | no | Business postal/zip code |
| country | string | no | Business country |
| description | string | no | Business description |
| logoUrl | string | no | URL to business logo image |

### delete_business `DELETE`

Delete a business from a location

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| businessId | string | **yes** | The business ID to delete |
| locationId | string | no | Location ID (uses default if not provided) |

## Calendar

### disable_calendar_group `READ`

Enable or disable a calendar group

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| groupId | string | **yes** | Calendar group ID |
| isActive | boolean | **yes** | Whether to enable (true) or disable (false) the group |

### get_appointment `READ`

Get detailed information about a specific appointment by ID

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| appointmentId | string | **yes** | The unique ID of the appointment to retrieve |

### get_appointment_notes `READ`

Get notes for an appointment

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| appointmentId | string | **yes** | Appointment ID |
| limit | number | no | Maximum number of notes to return |
| offset | number | no | Number of notes to skip |

### get_blocked_slots `READ`

Get blocked time slots for a location

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| userId | string | no | Filter by user ID |
| calendarId | string | no | Filter by calendar ID |
| groupId | string | no | Filter by group ID |
| startTime | string | **yes** | Start time for the query range |
| endTime | string | **yes** | End time for the query range |

### get_calendar `READ`

Get detailed information about a specific calendar by ID

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| calendarId | string | **yes** | The unique ID of the calendar to retrieve |

### get_calendar_events `READ`

Get appointments/events from calendars within a date range

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| startTime | string | **yes** | Start time in milliseconds or ISO date (e.g., "2024-01-01" or "1704067200000") |
| endTime | string | **yes** | End time in milliseconds or ISO date (e.g., "2024-01-31" or "1706745599999") |
| calendarId | string | no | Filter events by specific calendar ID |
| userId | string | no | Filter events by assigned user ID |
| groupId | string | no | Filter events by calendar group ID |

### get_calendar_groups `READ`

Get all calendar groups in the GoHighLevel location

_No parameters._

### get_calendar_notification `READ`

Get specific calendar notification

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| calendarId | string | **yes** | Calendar ID |
| notificationId | string | **yes** | Notification ID |

### get_calendar_notifications `READ`

Get calendar notifications

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| calendarId | string | **yes** | Calendar ID |
| isActive | boolean | no | Filter by active status |
| deleted | boolean | no | Include deleted notifications |
| limit | number | no | Maximum number to return |
| skip | number | no | Number to skip |

### get_calendar_resource_equipment `READ`

Get specific equipment resource details

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| resourceId | string | **yes** | Equipment resource ID |

### get_calendar_resource_room `READ`

Get specific room resource details

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| resourceId | string | **yes** | Room resource ID |

### get_calendar_resources_equipments `READ`

Get calendar equipment resources

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| limit | number | no | Maximum number to return |
| skip | number | no | Number to skip |

### get_calendar_resources_rooms `READ`

Get calendar room resources

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| limit | number | no | Maximum number to return |
| skip | number | no | Number to skip |

### get_calendars `READ`

Get all calendars in the GoHighLevel location with optional filtering

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| groupId | string | no | Filter calendars by group ID |
| showDrafted | boolean | no | Include draft calendars (default: true) |

### get_free_slots `READ`

Get available time slots for booking appointments on a specific calendar

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| calendarId | string | **yes** | The calendar ID to check availability for |
| startDate | string | **yes** | Start date for availability check (YYYY-MM-DD format or milliseconds) |
| endDate | string | **yes** | End date for availability check (YYYY-MM-DD format or milliseconds) |
| timezone | string | no | Timezone for the results (e.g., "America/New_York") |
| userId | string | no | Specific user ID to check availability for |

### validate_group_slug `READ`

Validate if a calendar group slug is available

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| slug | string | **yes** | Slug to validate |
| locationId | string | no | Location ID |

### create_appointment `WRITE`

Create a new appointment/booking in GoHighLevel

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| calendarId | string | **yes** | The calendar ID to book the appointment in |
| contactId | string | **yes** | The contact ID for whom to book the appointment |
| startTime | string | **yes** | Start time in ISO format (e.g., "2024-01-15T10:00:00-05:00") |
| endTime | string | no | End time in ISO format (optional, will be calculated from slot duration if not provided) |
| title | string | no | Title/subject of the appointment |
| appointmentStatus | string | no | Initial status of the appointment Values: `new` \| `confirmed` |
| assignedUserId | string | no | User ID to assign this appointment to |
| address | string | no | Meeting location or address |
| meetingLocationType | string | no | Type of meeting location Values: `custom` \| `zoom` \| `gmeet` \| `phone` \| `address` |
| ignoreDateRange | boolean | no | Ignore minimum scheduling notice and date range restrictions |
| toNotify | boolean | no | Send notifications for this appointment |

### create_appointment_note `WRITE`

Create a note for an appointment

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| appointmentId | string | **yes** | Appointment ID |
| body | string | **yes** | Note content |
| userId | string | no | User ID creating the note |

### create_block_slot `WRITE`

Create a blocked time slot to prevent bookings during specific times

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| startTime | string | **yes** | Start time of the block in ISO format (e.g., "2024-01-15T10:00:00-05:00") |
| endTime | string | **yes** | End time of the block in ISO format (e.g., "2024-01-15T12:00:00-05:00") |
| title | string | no | Title/reason for the block (e.g., "Lunch Break", "Meeting") |
| calendarId | string | no | Specific calendar to block (optional, blocks all if not specified) |
| assignedUserId | string | no | User ID to apply the block for |

### create_calendar `WRITE`

Create a new calendar in GoHighLevel

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| name | string | **yes** | Name of the calendar |
| description | string | no | Description of the calendar |
| calendarType | string | **yes** | Type of calendar to create Values: `round_robin` \| `event` \| `class_booking` \| `collective` \| `service_booking` \| `personal` |
| groupId | string | no | Calendar group ID to organize the calendar |
| slotDuration | number | no | Duration of appointment slots in minutes (default: 30) |
| slotDurationUnit | string | no | Unit for slot duration Values: `mins` \| `hours` |
| autoConfirm | boolean | no | Automatically confirm appointments (default: true) |
| allowReschedule | boolean | no | Allow clients to reschedule appointments (default: true) |
| allowCancellation | boolean | no | Allow clients to cancel appointments (default: true) |
| isActive | boolean | no | Make calendar active immediately (default: true) |

### create_calendar_group `WRITE`

Create a new calendar group

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| name | string | **yes** | Group name |
| description | string | **yes** | Group description |
| slug | string | **yes** | URL slug for the group |
| isActive | boolean | no | Whether group is active |

### create_calendar_notifications `WRITE`

Create calendar notifications

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| calendarId | string | **yes** | Calendar ID |
| notifications | array\<object\> | **yes** | Array of notification configurations |

### create_calendar_resource_equipment `WRITE`

Create a calendar equipment resource

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| name | string | **yes** | Equipment name |
| description | string | **yes** | Equipment description |
| quantity | number | **yes** | Total quantity available |
| outOfService | number | **yes** | Number currently out of service |
| capacity | number | **yes** | Capacity per unit |
| calendarIds | array\<string\> | **yes** | Associated calendar IDs |

### create_calendar_resource_room `WRITE`

Create a calendar room resource

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| name | string | **yes** | Room name |
| description | string | **yes** | Room description |
| quantity | number | **yes** | Total quantity available |
| outOfService | number | **yes** | Number currently out of service |
| capacity | number | **yes** | Room capacity |
| calendarIds | array\<string\> | **yes** | Associated calendar IDs |

### update_appointment `WRITE`

Update an existing appointment in GoHighLevel

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| appointmentId | string | **yes** | The unique ID of the appointment to update |
| title | string | no | Updated title/subject of the appointment |
| appointmentStatus | string | no | Updated status of the appointment Values: `new` \| `confirmed` \| `cancelled` \| `showed` \| `noshow` |
| assignedUserId | string | no | Updated assigned user ID |
| address | string | no | Updated meeting location or address |
| startTime | string | no | Updated start time in ISO format |
| endTime | string | no | Updated end time in ISO format |
| toNotify | boolean | no | Send notifications for this update |

### update_appointment_note `WRITE`

Update an appointment note

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| appointmentId | string | **yes** | Appointment ID |
| noteId | string | **yes** | Note ID |
| body | string | **yes** | Updated note content |
| userId | string | no | User ID updating the note |

### update_block_slot `WRITE`

Update an existing blocked time slot

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| blockSlotId | string | **yes** | The unique ID of the block slot to update |
| startTime | string | no | Updated start time in ISO format |
| endTime | string | no | Updated end time in ISO format |
| title | string | no | Updated title/reason for the block |
| calendarId | string | no | Updated calendar ID for the block |
| assignedUserId | string | no | Updated assigned user ID |

### update_calendar `WRITE`

Update an existing calendar in GoHighLevel

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| calendarId | string | **yes** | The unique ID of the calendar to update |
| name | string | no | Updated name of the calendar |
| description | string | no | Updated description of the calendar |
| slotDuration | number | no | Updated duration of appointment slots in minutes |
| autoConfirm | boolean | no | Updated auto-confirm setting |
| allowReschedule | boolean | no | Updated reschedule permission setting |
| allowCancellation | boolean | no | Updated cancellation permission setting |
| isActive | boolean | no | Updated active status |

### update_calendar_group `WRITE`

Update calendar group details

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| groupId | string | **yes** | Calendar group ID |
| name | string | **yes** | Group name |
| description | string | **yes** | Group description |
| slug | string | **yes** | URL slug for the group |

### update_calendar_notification `WRITE`

Update calendar notification

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| calendarId | string | **yes** | Calendar ID |
| notificationId | string | **yes** | Notification ID |
| receiverType | string | no | Who receives the notification Values: `contact` \| `guest` \| `assignedUser` \| `emails` |
| channel | string | no | Notification channel Values: `email` \| `inApp` |
| notificationType | string | no | Type of notification Values: `booked` \| `confirmation` \| `cancellation` \| `reminder` \| `followup` \| `reschedule` |
| isActive | boolean | no | Whether notification is active |
| deleted | boolean | no | Whether notification is deleted |
| templateId | string | no | Template ID |
| body | string | no | Notification body |
| subject | string | no | Notification subject |

### update_calendar_resource_equipment `WRITE`

Update equipment resource details

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| resourceId | string | **yes** | Equipment resource ID |
| name | string | no | Equipment name |
| description | string | no | Equipment description |
| quantity | number | no | Total quantity available |
| outOfService | number | no | Number currently out of service |
| capacity | number | no | Capacity per unit |
| calendarIds | array\<string\> | no | Associated calendar IDs |
| isActive | boolean | no | Whether resource is active |

### update_calendar_resource_room `WRITE`

Update room resource details

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| resourceId | string | **yes** | Room resource ID |
| name | string | no | Room name |
| description | string | no | Room description |
| quantity | number | no | Total quantity available |
| outOfService | number | no | Number currently out of service |
| capacity | number | no | Room capacity |
| calendarIds | array\<string\> | no | Associated calendar IDs |
| isActive | boolean | no | Whether resource is active |

### delete_appointment `DELETE`

Cancel/delete an appointment from GoHighLevel

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| appointmentId | string | **yes** | The unique ID of the appointment to delete |

### delete_appointment_note `DELETE`

Delete an appointment note

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| appointmentId | string | **yes** | Appointment ID |
| noteId | string | **yes** | Note ID |

### delete_calendar `DELETE`

Delete a calendar from GoHighLevel

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| calendarId | string | **yes** | The unique ID of the calendar to delete |

### delete_calendar_group `DELETE`

Delete a calendar group

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| groupId | string | **yes** | Calendar group ID |

### delete_calendar_notification `DELETE`

Delete calendar notification

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| calendarId | string | **yes** | Calendar ID |
| notificationId | string | **yes** | Notification ID |

### delete_calendar_resource_equipment `DELETE`

Delete an equipment resource

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| resourceId | string | **yes** | Equipment resource ID |

### delete_calendar_resource_room `DELETE`

Delete a room resource

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| resourceId | string | **yes** | Room resource ID |

## Campaigns

### get_campaign `READ`

Get a specific campaign by ID

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| campaignId | string | **yes** | Campaign ID |
| locationId | string | no | Location ID |

### get_campaign_recipients `READ`

Get all recipients of a campaign

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| campaignId | string | **yes** | Campaign ID |
| locationId | string | no | Location ID |
| status | string | no | Filter by recipient status Values: `sent` \| `delivered` \| `opened` \| `clicked` \| `bounced` \| `unsubscribed` |
| limit | number | no | Max results |
| offset | number | no | Pagination offset |

### get_campaign_stats `READ`

Get statistics for a campaign (opens, clicks, bounces, etc.)

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| campaignId | string | **yes** | Campaign ID |
| locationId | string | no | Location ID |

### get_campaigns `READ`

Get all campaigns (email/SMS) for a location

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| status | string | no | Filter by campaign status Values: `draft` \| `scheduled` \| `running` \| `completed` \| `paused` |
| limit | number | no | Max results |
| offset | number | no | Pagination offset |

### get_scheduled_messages `READ`

Get all scheduled messages in campaigns

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| contactId | string | no | Filter by contact ID |
| campaignId | string | no | Filter by campaign ID |

### pause_campaign `READ`

Pause a running campaign

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| campaignId | string | **yes** | Campaign ID |
| locationId | string | no | Location ID |

### resume_campaign `READ`

Resume a paused campaign

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| campaignId | string | **yes** | Campaign ID |
| locationId | string | no | Location ID |

### start_campaign `READ`

Start/launch a campaign

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| campaignId | string | **yes** | Campaign ID |
| locationId | string | no | Location ID |

### cancel_scheduled_campaign_message `WRITE`

Cancel a scheduled campaign message for a contact

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| messageId | string | **yes** | Scheduled message ID |
| locationId | string | no | Location ID |

### create_campaign `WRITE`

Create a new campaign

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| name | string | **yes** | Campaign name |
| type | string | **yes** | Campaign type Values: `email` \| `sms` \| `voicemail` |
| status | string | no | Initial status Values: `draft` \| `scheduled` |

### update_campaign `WRITE`

Update a campaign

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| campaignId | string | **yes** | Campaign ID |
| locationId | string | no | Location ID |
| name | string | no | Campaign name |
| status | string | no | Campaign status Values: `draft` \| `scheduled` \| `paused` |

### delete_campaign `DELETE`

Delete a campaign

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| campaignId | string | **yes** | Campaign ID |
| locationId | string | no | Location ID |

## Contacts

### get_contact `READ`

Get detailed information about a specific contact

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| contactId | string | **yes** | Contact ID |

### get_contact_appointments `READ`

Get all appointments for a contact

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| contactId | string | **yes** | Contact ID |

### get_contact_note `READ`

Get a specific note for a contact

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| contactId | string | **yes** | Contact ID |
| noteId | string | **yes** | Note ID |

### get_contact_notes `READ`

Get all notes for a contact

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| contactId | string | **yes** | Contact ID |

### get_contact_task `READ`

Get a specific task for a contact

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| contactId | string | **yes** | Contact ID |
| taskId | string | **yes** | Task ID |

### get_contact_tasks `READ`

Get all tasks for a contact

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| contactId | string | **yes** | Contact ID |

### get_contacts_by_business `READ`

Get contacts associated with a specific business

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| businessId | string | **yes** | Business ID |
| limit | number | no | Maximum number of results |
| skip | number | no | Number of results to skip |
| query | string | no | Search query |

### get_duplicate_contact `READ`

Check for duplicate contacts by email or phone

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| email | string | no | Email to check for duplicates |
| phone | string | no | Phone to check for duplicates |

### search_contacts `READ`

Search for contacts with advanced filtering options

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| query | string | no | Search query string |
| email | string | no | Filter by email address |
| phone | string | no | Filter by phone number |
| limit | number | no | Maximum number of results (default: 25) |

### add_contact_followers `WRITE`

Add followers to a contact

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| contactId | string | **yes** | Contact ID |
| followers | array\<string\> | **yes** | Array of user IDs to add as followers |

### add_contact_tags `WRITE`

Add tags to a contact

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| contactId | string | **yes** | Contact ID |
| tags | array\<string\> | **yes** | Tags to add |

### add_contact_to_campaign `WRITE`

Add contact to a marketing campaign

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| contactId | string | **yes** | Contact ID |
| campaignId | string | **yes** | Campaign ID |

### add_contact_to_workflow `WRITE`

Add contact to a workflow

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| contactId | string | **yes** | Contact ID |
| workflowId | string | **yes** | Workflow ID |
| eventStartTime | string | no | Event start time (ISO format) |

### bulk_update_contact_business `WRITE`

Bulk update business association for multiple contacts

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| contactIds | array\<string\> | **yes** | Array of contact IDs |
| businessId | string | no | Business ID (null to remove from business) |

### bulk_update_contact_tags `WRITE`

Bulk add or remove tags from multiple contacts

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| contactIds | array\<string\> | **yes** | Array of contact IDs |
| tags | array\<string\> | **yes** | Tags to add or remove |
| operation | string | **yes** | Operation to perform Values: `add` \| `remove` |
| removeAllTags | boolean | no | Remove all existing tags before adding new ones |

### create_contact `WRITE`

Create a new contact in GoHighLevel

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| firstName | string | no | Contact first name |
| lastName | string | no | Contact last name |
| email | string | **yes** | Contact email address |
| phone | string | no | Contact phone number |
| tags | array\<string\> | no | Tags to assign to contact |
| source | string | no | Source of the contact |

### create_contact_note `WRITE`

Create a new note for a contact

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| contactId | string | **yes** | Contact ID |
| body | string | **yes** | Note content |
| userId | string | no | User ID creating the note |

### create_contact_task `WRITE`

Create a new task for a contact

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| contactId | string | **yes** | Contact ID |
| title | string | **yes** | Task title |
| body | string | no | Task description |
| dueDate | string | **yes** | Due date (ISO format) |
| completed | boolean | no | Task completion status |
| assignedTo | string | no | User ID to assign task to |

### remove_contact_followers `WRITE`

Remove followers from a contact

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| contactId | string | **yes** | Contact ID |
| followers | array\<string\> | **yes** | Array of user IDs to remove as followers |

### remove_contact_from_all_campaigns `WRITE`

Remove contact from all campaigns

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| contactId | string | **yes** | Contact ID |

### remove_contact_from_campaign `WRITE`

Remove contact from a specific campaign

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| contactId | string | **yes** | Contact ID |
| campaignId | string | **yes** | Campaign ID |

### remove_contact_from_workflow `WRITE`

Remove contact from a workflow

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| contactId | string | **yes** | Contact ID |
| workflowId | string | **yes** | Workflow ID |
| eventStartTime | string | no | Event start time (ISO format) |

### remove_contact_tags `WRITE`

Remove tags from a contact

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| contactId | string | **yes** | Contact ID |
| tags | array\<string\> | **yes** | Tags to remove |

### update_contact `WRITE`

Update contact information

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| contactId | string | **yes** | Contact ID |
| firstName | string | no | Contact first name |
| lastName | string | no | Contact last name |
| email | string | no | Contact email address |
| phone | string | no | Contact phone number |
| tags | array\<string\> | no | Tags to assign to contact |

### update_contact_note `WRITE`

Update a note for a contact

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| contactId | string | **yes** | Contact ID |
| noteId | string | **yes** | Note ID |
| body | string | **yes** | Note content |
| userId | string | no | User ID updating the note |

### update_contact_task `WRITE`

Update a task for a contact

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| contactId | string | **yes** | Contact ID |
| taskId | string | **yes** | Task ID |
| title | string | no | Task title |
| body | string | no | Task description |
| dueDate | string | no | Due date (ISO format) |
| completed | boolean | no | Task completion status |
| assignedTo | string | no | User ID to assign task to |

### update_task_completion `WRITE`

Update task completion status

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| contactId | string | **yes** | Contact ID |
| taskId | string | **yes** | Task ID |
| completed | boolean | **yes** | Completion status |

### upsert_contact `WRITE`

Create or update contact based on email/phone (smart merge)

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| firstName | string | no | Contact first name |
| lastName | string | no | Contact last name |
| email | string | no | Contact email address |
| phone | string | no | Contact phone number |
| tags | array\<string\> | no | Tags to assign to contact |
| source | string | no | Source of the contact |
| assignedTo | string | no | User ID to assign contact to |

### delete_contact `DELETE`

Delete a contact from GoHighLevel

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| contactId | string | **yes** | Contact ID |

### delete_contact_note `DELETE`

Delete a note for a contact

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| contactId | string | **yes** | Contact ID |
| noteId | string | **yes** | Note ID |

### delete_contact_task `DELETE`

Delete a task for a contact

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| contactId | string | **yes** | Contact ID |
| taskId | string | **yes** | Task ID |

## Conversations

### download_transcription `READ`

Download call transcription as a text file

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| messageId | string | **yes** | The unique ID of the call message to download transcription for |

### get_conversation `READ`

Get detailed conversation information including message history

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| conversationId | string | **yes** | The unique ID of the conversation to retrieve |
| limit | number | no | Maximum number of messages to return (default: 20) |
| messageTypes | array\<string\> | no | Filter messages by type (optional) |

### get_email_message `READ`

Get detailed email message information by email message ID

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| emailMessageId | string | **yes** | The unique ID of the email message to retrieve |

### get_message `READ`

Get detailed message information by message ID

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| messageId | string | **yes** | The unique ID of the message to retrieve |

### get_message_recording `READ`

Get call recording audio for a message

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| messageId | string | **yes** | The unique ID of the call message to get recording for |

### get_message_transcription `READ`

Get call transcription text for a message

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| messageId | string | **yes** | The unique ID of the call message to get transcription for |

### get_recent_messages `READ`

Get recent messages across all conversations for monitoring

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| limit | number | no | Maximum number of conversations to check (default: 10) |
| status | string | no | Filter by conversation status Values: `all` \| `unread` |

### live_chat_typing `READ`

Send typing indicator for live chat conversations

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| visitorId | string | **yes** | Unique visitor ID for the live chat session |
| conversationId | string | **yes** | The conversation ID for the live chat |
| isTyping | boolean | **yes** | Whether the agent is currently typing |

### search_conversations `READ`

Search conversations in GoHighLevel with various filters

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| contactId | string | no | Filter conversations for a specific contact |
| query | string | no | Search query to filter conversations |
| status | string | no | Filter conversations by read status Values: `all` \| `read` \| `unread` \| `starred` \| `recents` |
| limit | number | no | Maximum number of conversations to return (default: 20, max: 100) |
| assignedTo | string | no | Filter by user ID assigned to conversations |

### add_inbound_message `WRITE`

Manually add an inbound message to a conversation

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| type | string | **yes** | Type of inbound message to add Values: `SMS` \| `Email` \| `WhatsApp` \| `GMB` \| `IG` \| `FB` \| `Custom` \| `WebChat` \| `Live_Chat` \| `Call` |
| conversationId | string | **yes** | The conversation to add the message to |
| conversationProviderId | string | **yes** | Conversation provider ID for the message |
| message | string | no | Message content (for text-based messages) |
| attachments | array\<string\> | no | Array of attachment URLs |
| html | string | no | HTML content for email messages |
| subject | string | no | Subject line for email messages |
| emailFrom | string | no | From email address |
| emailTo | string | no | To email address |
| emailCc | array\<string\> | no | CC email addresses |
| emailBcc | array\<string\> | no | BCC email addresses |
| emailMessageId | string | no | Email message ID for threading |
| altId | string | no | External provider message ID |
| date | string | no | Date of the message (ISO format) |
| call | object | no | Call details for call-type messages |

### add_outbound_call `WRITE`

Manually add an outbound call record to a conversation

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| conversationId | string | **yes** | The conversation to add the call to |
| conversationProviderId | string | **yes** | Conversation provider ID for the call |
| to | string | **yes** | Called phone number |
| from | string | **yes** | Caller phone number |
| status | string | **yes** | Call completion status Values: `pending` \| `completed` \| `answered` \| `busy` \| `no-answer` \| `failed` \| `canceled` \| `voicemail` |
| attachments | array\<string\> | no | Array of attachment URLs |
| altId | string | no | External provider call ID |
| date | string | no | Date of the call (ISO format) |

### cancel_scheduled_email `WRITE`

Cancel a scheduled email before it is sent

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| emailMessageId | string | **yes** | The unique ID of the scheduled email to cancel |

### cancel_scheduled_message `WRITE`

Cancel a scheduled message before it is sent

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| messageId | string | **yes** | The unique ID of the scheduled message to cancel |

### create_conversation `WRITE`

Create a new conversation with a contact

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| contactId | string | **yes** | The unique ID of the contact to create conversation with |

### send_email `WRITE`

Send an email message to a contact in GoHighLevel

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| contactId | string | **yes** | The unique ID of the contact to send email to |
| subject | string | **yes** | Email subject line |
| message | string | no | Plain text email content |
| html | string | no | HTML email content (optional, takes precedence over message) |
| emailFrom | string | no | Optional: Email address to send from (must be configured in GHL) |
| attachments | array\<string\> | no | Optional: Array of attachment URLs |
| emailCc | array\<string\> | no | Optional: Array of CC email addresses |
| emailBcc | array\<string\> | no | Optional: Array of BCC email addresses |

### send_sms `WRITE`

Send an SMS message to a contact in GoHighLevel

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| contactId | string | **yes** | The unique ID of the contact to send SMS to |
| message | string | **yes** | The SMS message content to send |
| fromNumber | string | no | Optional: Phone number to send from (must be configured in GHL) |

### update_conversation `WRITE`

Update conversation properties (star, mark read, etc.)

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| conversationId | string | **yes** | The unique ID of the conversation to update |
| starred | boolean | no | Star or unstar the conversation |
| unreadCount | number | no | Set the unread message count (0 to mark as read) |

### update_message_status `WRITE`

Update the delivery status of a message

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| messageId | string | **yes** | The unique ID of the message to update |
| status | string | **yes** | New status for the message Values: `delivered` \| `failed` \| `pending` \| `read` |
| error | object | no | Error details if status is failed |
| emailMessageId | string | no | Email message ID if updating email status |
| recipients | array\<string\> | no | Email delivery status for additional recipients |

### upload_message_attachments `WRITE`

Upload file attachments for use in messages

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| conversationId | string | **yes** | The conversation ID to upload attachments for |
| attachmentUrls | array\<string\> | **yes** | Array of file URLs to upload as attachments |

### delete_conversation `DELETE`

Delete a conversation permanently

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| conversationId | string | **yes** | The unique ID of the conversation to delete |

## Courses

### enroll_contact_in_course `READ`

Enroll a contact in a course

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| courseId | string | **yes** | Course ID |
| contactId | string | **yes** | Contact ID to enroll |
| locationId | string | no | Location ID |

### get_course `READ`

Get a specific course by ID

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| courseId | string | **yes** | Course ID |
| locationId | string | no | Location ID |

### get_course_categories `READ`

Get all course categories

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| limit | number | no | Max results |
| offset | number | no | Pagination offset |

### get_course_enrollments `READ`

Get all enrollments for a course

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| courseId | string | **yes** | Course ID |
| locationId | string | no | Location ID |
| limit | number | no | Max results |
| offset | number | no | Pagination offset |

### get_course_importers `READ`

Get list of all course import jobs/processes

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID (uses default if not provided) |
| limit | number | no | Max results to return |
| offset | number | no | Offset for pagination |

### get_course_instructors `READ`

Get all instructors for a course

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| courseId | string | **yes** | Course ID |
| locationId | string | no | Location ID |

### get_course_offers `READ`

Get all offers (pricing tiers) for a course product

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| productId | string | **yes** | Course product ID |
| locationId | string | no | Location ID |

### get_course_post `READ`

Get a specific course post/lesson

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| courseId | string | **yes** | Course ID |
| postId | string | **yes** | Post/Lesson ID |
| locationId | string | no | Location ID |

### get_course_posts `READ`

Get all posts/lessons in a course

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| courseId | string | **yes** | Course ID |
| locationId | string | no | Location ID |
| limit | number | no | Max results |
| offset | number | no | Pagination offset |

### get_course_product `READ`

Get a specific course product by ID

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| productId | string | **yes** | Course product ID |
| locationId | string | no | Location ID |

### get_course_products `READ`

Get all course products (purchasable course bundles)

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| limit | number | no | Max results |
| offset | number | no | Pagination offset |

### get_courses `READ`

Get all courses

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| limit | number | no | Max results |
| offset | number | no | Pagination offset |
| categoryId | string | no | Filter by category |

### get_student_progress `READ`

Get a student's progress in a course

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| courseId | string | **yes** | Course ID |
| contactId | string | **yes** | Contact/Student ID |
| locationId | string | no | Location ID |

### add_course_instructor `WRITE`

Add an instructor to a course

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| courseId | string | **yes** | Course ID |
| locationId | string | no | Location ID |
| userId | string | no | User ID of instructor |
| name | string | no | Instructor display name |
| bio | string | no | Instructor bio |

### create_course `WRITE`

Create a new course

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| title | string | **yes** | Course title |
| description | string | no | Course description |
| thumbnailUrl | string | no | Course thumbnail URL |
| visibility | string | no | Course visibility Values: `published` \| `draft` |
| categoryId | string | no | Category ID to place course in |

### create_course_category `WRITE`

Create a new course category

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| title | string | **yes** | Category title |

### create_course_importer `WRITE`

Create a new course import job to import courses from external sources

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| name | string | **yes** | Import job name |
| sourceUrl | string | no | Source URL to import from |
| type | string | no | Import type |

### create_course_offer `WRITE`

Create a new offer for a course product

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| productId | string | **yes** | Course product ID |
| locationId | string | no | Location ID |
| name | string | **yes** | Offer name |
| price | number | **yes** | Price in cents |
| currency | string | no | Currency code (e.g., USD) |
| type | string | no | Payment type Values: `one-time` \| `subscription` |
| interval | string | no | Subscription interval (if subscription) Values: `month` \| `year` |

### create_course_post `WRITE`

Create a new course post/lesson

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| courseId | string | **yes** | Course ID |
| locationId | string | no | Location ID |
| title | string | **yes** | Post/lesson title |
| contentType | string | no | Content type Values: `video` \| `text` \| `quiz` \| `assignment` |
| content | string | no | Post content (text/HTML) |
| videoUrl | string | no | Video URL (if video type) |
| visibility | string | no | Visibility Values: `published` \| `draft` |

### create_course_product `WRITE`

Create a new course product

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| title | string | **yes** | Product title |
| description | string | no | Product description |
| imageUrl | string | no | Product image URL |
| statementDescriptor | string | no | Payment statement descriptor |

### remove_course_enrollment `WRITE`

Remove a contact from a course

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| courseId | string | **yes** | Course ID |
| contactId | string | **yes** | Contact ID |
| locationId | string | no | Location ID |

### update_course `WRITE`

Update a course

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| courseId | string | **yes** | Course ID |
| locationId | string | no | Location ID |
| title | string | no | Course title |
| description | string | no | Course description |
| thumbnailUrl | string | no | Course thumbnail URL |
| visibility | string | no | Course visibility Values: `published` \| `draft` |

### update_course_category `WRITE`

Update a course category

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| categoryId | string | **yes** | Category ID |
| locationId | string | no | Location ID |
| title | string | **yes** | Category title |

### update_course_offer `WRITE`

Update a course offer

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| productId | string | **yes** | Course product ID |
| offerId | string | **yes** | Offer ID |
| locationId | string | no | Location ID |
| name | string | no | Offer name |
| price | number | no | Price in cents |

### update_course_post `WRITE`

Update a course post/lesson

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| courseId | string | **yes** | Course ID |
| postId | string | **yes** | Post/Lesson ID |
| locationId | string | no | Location ID |
| title | string | no | Post/lesson title |
| content | string | no | Post content |
| videoUrl | string | no | Video URL |
| visibility | string | no | Visibility Values: `published` \| `draft` |

### update_course_product `WRITE`

Update a course product

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| productId | string | **yes** | Course product ID |
| locationId | string | no | Location ID |
| title | string | no | Product title |
| description | string | no | Product description |
| imageUrl | string | no | Product image URL |

### update_lesson_completion `WRITE`

Mark a lesson as complete/incomplete for a student

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| courseId | string | **yes** | Course ID |
| postId | string | **yes** | Post/Lesson ID |
| contactId | string | **yes** | Contact/Student ID |
| locationId | string | no | Location ID |
| completed | boolean | **yes** | Whether lesson is completed |

### delete_course `DELETE`

Delete a course

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| courseId | string | **yes** | Course ID |
| locationId | string | no | Location ID |

### delete_course_category `DELETE`

Delete a course category

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| categoryId | string | **yes** | Category ID |
| locationId | string | no | Location ID |

### delete_course_offer `DELETE`

Delete a course offer

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| productId | string | **yes** | Course product ID |
| offerId | string | **yes** | Offer ID |
| locationId | string | no | Location ID |

### delete_course_post `DELETE`

Delete a course post/lesson

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| courseId | string | **yes** | Course ID |
| postId | string | **yes** | Post/Lesson ID |
| locationId | string | no | Location ID |

### delete_course_product `DELETE`

Delete a course product

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| productId | string | **yes** | Course product ID |
| locationId | string | no | Location ID |

## Custom Fields

### ghl_get_custom_field_by_id `READ`

Get a custom field or folder by its ID. Supports custom objects and company (business) fields.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| id | string | **yes** | The ID of the custom field or folder to retrieve |

### ghl_get_custom_fields_by_object_key `READ`

Get all custom fields and folders for a specific object key (e.g., custom object or company).

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| objectKey | string | **yes** | Object key to get fields for. Format: "custom_object.{objectKey}" for custom objects. Example: "custom_object.pet" |
| locationId | string | no | GoHighLevel location ID (will use default if not provided) |

### ghl_create_custom_field `WRITE`

Create a new custom field for custom objects or company (business). Supports various field types including text, number, options, date, file upload, etc.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | GoHighLevel location ID (will use default if not provided) |
| name | string | no | Field name (optional for some field types) |
| description | string | no | Description of the field |
| placeholder | string | no | Placeholder text for the field |
| showInForms | boolean | no | Whether the field should be shown in forms |
| options | array\<object\> | no | Options for the field (required for SINGLE_OPTIONS, MULTIPLE_OPTIONS, RADIO, CHECKBOX, TEXTBOX_LIST types) |
| acceptedFormats | string | no | Allowed file formats for uploads (only for FILE_UPLOAD type) Values: `.pdf` \| `.docx` \| `.doc` \| `.jpg` \| `.jpeg` \| `.png` \| `.gif` \| `.csv` \| `.xlsx` \| `.xls` \| `all` |
| dataType | string | **yes** | Type of field to create Values: `TEXT` \| `LARGE_TEXT` \| `NUMERICAL` \| `PHONE` \| `MONETORY` \| `CHECKBOX` \| `SINGLE_OPTIONS` \| `MULTIPLE_OPTIONS` \| `DATE` \| `TEXTBOX_LIST` \| `FILE_UPLOAD` \| `RADIO` \| `EMAIL` |
| fieldKey | string | **yes** | Field key. Format: "custom_object.{objectKey}.{fieldKey}" for custom objects. Example: "custom_object.pet.name" |
| objectKey | string | **yes** | The object key. Format: "custom_object.{objectKey}" for custom objects. Example: "custom_object.pet" |
| maxFileLimit | number | no | Maximum file limit for uploads (only for FILE_UPLOAD type) |
| allowCustomOption | boolean | no | Allow users to add custom option values for RADIO type fields |
| parentId | string | **yes** | ID of the parent folder for organization |

### ghl_create_custom_field_folder `WRITE`

Create a new custom field folder for organizing fields within an object.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| objectKey | string | **yes** | Object key for the folder. Format: "custom_object.{objectKey}" for custom objects. Example: "custom_object.pet" |
| name | string | **yes** | Name of the folder |
| locationId | string | no | GoHighLevel location ID (will use default if not provided) |

### ghl_update_custom_field `WRITE`

Update an existing custom field by ID. Can modify name, description, options, and other properties.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| id | string | **yes** | The ID of the custom field to update |
| locationId | string | no | GoHighLevel location ID (will use default if not provided) |
| name | string | no | Updated field name |
| description | string | no | Updated description of the field |
| placeholder | string | no | Updated placeholder text for the field |
| showInForms | boolean | no | Whether the field should be shown in forms |
| options | array\<object\> | no | Updated options (replaces all existing options - include all options you want to keep) |
| acceptedFormats | string | no | Updated allowed file formats for uploads Values: `.pdf` \| `.docx` \| `.doc` \| `.jpg` \| `.jpeg` \| `.png` \| `.gif` \| `.csv` \| `.xlsx` \| `.xls` \| `all` |
| maxFileLimit | number | no | Updated maximum file limit for uploads |

### ghl_update_custom_field_folder `WRITE`

Update the name of an existing custom field folder.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| id | string | **yes** | The ID of the folder to update |
| name | string | **yes** | New name for the folder |
| locationId | string | no | GoHighLevel location ID (will use default if not provided) |

### ghl_delete_custom_field `DELETE`

Delete a custom field by ID. This will permanently remove the field and its data.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| id | string | **yes** | The ID of the custom field to delete |

### ghl_delete_custom_field_folder `DELETE`

Delete a custom field folder. This will also affect any fields within the folder.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| id | string | **yes** | The ID of the folder to delete |
| locationId | string | no | GoHighLevel location ID (will use default if not provided) |

## Custom Menus

### get_custom_menu `READ`

Get a single custom menu link by ID. Returns the custom menu configuration including structure, items, and relevant metadata.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| customMenuId | string | **yes** | Unique identifier of the custom menu |

### list_custom_menus `READ`

Get a list of custom menu links. Returns custom menu configurations including menu items, categories, and associated metadata.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Unique identifier of the location (uses default if not provided) |
| skip | number | no | Number of items to skip for pagination (default: 0) |
| limit | number | no | Maximum number of items to return (default: 20) |
| query | string | no | Search query to filter custom menus by name (supports partial or full names) |
| showOnCompany | boolean | no | Filter to show only agency-level menu links. When omitted, fetches both agency and sub-account menu links. Ignored if locationId is provided. |

### create_custom_menu `WRITE`

Create a new custom menu link for a company. For icon usage details refer to GHL documentation.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| title | string | **yes** | Title of the custom menu |
| url | string | **yes** | URL of the custom menu |
| order | number | no | Display order of the custom menu |
| showOnCompany | boolean | no | Whether the menu should be shown at the agency level |
| showOnLocation | boolean | no | Whether the menu should be displayed for sub-accounts level |
| showToAllLocations | boolean | no | Whether the menu should be displayed to all sub-accounts |
| locations | array\<string\> | no | List of sub-account IDs where the menu should be shown (applicable only when showOnLocation is true and showToAllLocations is false) |
| openMode | string | no | Mode for opening the menu link Values: `iframe` \| `new_tab` \| `current_tab` |
| userRole | string | no | Which user roles should the menu be accessible to Values: `all` \| `admin` \| `user` |
| allowCamera | boolean | no | Whether camera access is allowed for this menu |
| allowMicrophone | boolean | no | Whether microphone access is allowed for this menu |
| icon | object | no | Icon information for the menu item |

### update_custom_menu `WRITE`

Update an existing custom menu link for a given company.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| customMenuId | string | **yes** | ID of the custom menu to update |
| title | string | no | Title of the custom menu |
| url | string | no | URL of the custom menu |
| order | number | no | Display order of the custom menu |
| showOnCompany | boolean | no | Whether the menu should be shown at the agency level |
| showOnLocation | boolean | no | Whether the menu should be displayed for sub-accounts level |
| showToAllLocations | boolean | no | Whether the menu should be displayed to all sub-accounts |
| locations | array\<string\> | no | List of sub-account IDs where the menu should be shown |
| openMode | string | no | Mode for opening the menu link Values: `iframe` \| `new_tab` \| `current_tab` |
| userRole | string | no | Which user roles should the menu be accessible to Values: `all` \| `admin` \| `user` |
| allowCamera | boolean | no | Whether camera access is allowed for this menu |
| allowMicrophone | boolean | no | Whether microphone access is allowed for this menu |
| icon | object | no | Icon information for the menu item |

### delete_custom_menu `DELETE`

Delete a specific custom menu link from the system. The custom menu is identified by its unique ID.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| customMenuId | string | **yes** | ID of the custom menu to delete |

## Deals

### get_opportunity `READ`

Get detailed information about a specific opportunity by ID

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| opportunityId | string | **yes** | The unique ID of the opportunity to retrieve |

### get_pipelines `READ`

Get all sales pipelines configured in GoHighLevel

_No parameters._

### search_opportunities `READ`

Search for opportunities in GoHighLevel CRM using various filters like pipeline, stage, contact, status, etc.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| query | string | no | General search query (searches name, contact info) |
| pipelineId | string | no | Filter by specific pipeline ID |
| pipelineStageId | string | no | Filter by specific pipeline stage ID |
| contactId | string | no | Filter by specific contact ID |
| status | string | no | Filter by opportunity status Values: `open` \| `won` \| `lost` \| `abandoned` \| `all` |
| assignedTo | string | no | Filter by assigned user ID |
| limit | number | no | Maximum number of opportunities to return (default: 20, max: 100) |

### add_opportunity_followers `WRITE`

Add followers to an opportunity for notifications and tracking

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| opportunityId | string | **yes** | The unique ID of the opportunity |
| followers | array\<string\> | **yes** | Array of user IDs to add as followers |

### create_opportunity `WRITE`

Create a new opportunity in GoHighLevel CRM

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| name | string | **yes** | Name/title of the opportunity |
| pipelineId | string | **yes** | ID of the pipeline this opportunity belongs to |
| contactId | string | **yes** | ID of the contact associated with this opportunity |
| status | string | no | Initial status of the opportunity (default: open) Values: `open` \| `won` \| `lost` \| `abandoned` |
| monetaryValue | number | no | Monetary value of the opportunity in dollars |
| assignedTo | string | no | User ID to assign this opportunity to |

### remove_opportunity_followers `WRITE`

Remove followers from an opportunity

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| opportunityId | string | **yes** | The unique ID of the opportunity |
| followers | array\<string\> | **yes** | Array of user IDs to remove as followers |

### update_opportunity `WRITE`

Update an existing opportunity with new details (full update)

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| opportunityId | string | **yes** | The unique ID of the opportunity to update |
| name | string | no | Updated name/title of the opportunity |
| pipelineId | string | no | Updated pipeline ID |
| pipelineStageId | string | no | Updated pipeline stage ID |
| status | string | no | Updated status of the opportunity Values: `open` \| `won` \| `lost` \| `abandoned` |
| monetaryValue | number | no | Updated monetary value in dollars |
| assignedTo | string | no | Updated assigned user ID |

### update_opportunity_status `WRITE`

Update the status of an opportunity (won, lost, etc.)

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| opportunityId | string | **yes** | The unique ID of the opportunity |
| status | string | **yes** | New status for the opportunity Values: `open` \| `won` \| `lost` \| `abandoned` |

### upsert_opportunity `WRITE`

Create or update an opportunity based on contact and pipeline (smart merge)

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| name | string | no | Name/title of the opportunity |
| pipelineId | string | **yes** | ID of the pipeline this opportunity belongs to |
| contactId | string | **yes** | ID of the contact associated with this opportunity |
| status | string | no | Status of the opportunity Values: `open` \| `won` \| `lost` \| `abandoned` |
| pipelineStageId | string | no | Pipeline stage ID |
| monetaryValue | number | no | Monetary value of the opportunity in dollars |
| assignedTo | string | no | User ID to assign this opportunity to |

### delete_opportunity `DELETE`

Delete an opportunity from GoHighLevel CRM

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| opportunityId | string | **yes** | The unique ID of the opportunity to delete |

## Email

### get_email_campaigns `READ`

Get a list of email campaigns from GoHighLevel.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| status | string | no | Filter campaigns by status. Values: `active` \| `pause` \| `complete` \| `cancelled` \| `retry` \| `draft` \| `resend-scheduled` |
| limit | number | no | Maximum number of campaigns to return. |
| offset | number | no | Number of campaigns to skip for pagination. |

### get_email_templates `READ`

Get a list of email templates from GoHighLevel.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| limit | number | no | Maximum number of templates to return. |
| offset | number | no | Number of templates to skip for pagination. |

### verify_email `READ`

Verify email address deliverability and get risk assessment. Charges will be deducted from the specified location wallet.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | **yes** | Location ID - charges will be deducted from this location wallet |
| type | string | **yes** | Verification type: "email" for direct email verification, "contact" for contact ID verification Values: `email` \| `contact` |
| verify | string | **yes** | Email address to verify (if type=email) or contact ID (if type=contact) |

### create_email_template `WRITE`

Create a new email template in GoHighLevel.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| title | string | **yes** | Title of the new template. |
| html | string | **yes** | HTML content of the template. |
| isPlainText | boolean | no | Whether the template is plain text. |

### update_email_template `WRITE`

Update an existing email template in GoHighLevel.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| templateId | string | **yes** | The ID of the template to update. |
| html | string | **yes** | The updated HTML content of the template. |
| previewText | string | no | The updated preview text for the template. |

### delete_email_template `DELETE`

Delete an email template from GoHighLevel.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| templateId | string | **yes** | The ID of the template to delete. |

## Email Isv

### ghl_get_domain_dns_records `READ`

Get the required DNS records (DKIM, SPF, DMARC) for a sending domain. Returns records you need to add to your DNS provider.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID (uses default if not provided) |
| domainId | string | **yes** | The ID of the domain to get DNS records for |

### ghl_get_email_stats `READ`

Get email deliverability statistics for a location including sent, delivered, bounced, spam complaints, and open/click rates.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID to get stats for (uses default if not provided) |
| domainId | string | no | Filter stats by specific sending domain |
| startDate | string | no | Start date for stats period (YYYY-MM-DD format) |
| endDate | string | no | End date for stats period (YYYY-MM-DD format) |

### ghl_list_email_domains `READ`

List all connected email sending domains for a location. Shows verification status, DKIM/SPF/DMARC configuration, and default domain.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID to list domains for (uses default if not provided) |

### ghl_list_email_providers `READ`

List all ISV (integrated service vendor) email providers connected to a location (e.g., Mailgun, SendGrid, Postmark).

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID to list providers for (uses default if not provided) |

### ghl_add_email_domain `WRITE`

Add a new sending domain to a location. After adding, DNS records must be configured and the domain verified.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID to add the domain to (uses default if not provided) |
| domain | string | **yes** | The domain name to add (e.g., "mail.example.com") |

### ghl_set_default_email_provider `WRITE`

Set the default email provider for a location. All outbound emails will use this provider unless overridden.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID (uses default if not provided) |
| providerId | string | **yes** | The ID of the email provider to set as default |

### ghl_verify_email_domain `WRITE`

Trigger DNS verification check for an email sending domain. Returns whether DKIM, SPF, and DMARC records are correctly configured.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID (uses default if not provided) |
| domainId | string | **yes** | The ID of the domain to verify |

### ghl_delete_email_domain `DELETE`

Remove a sending domain from a location. Emails using this domain will no longer be sent after removal.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID (uses default if not provided) |
| domainId | string | **yes** | The ID of the domain to remove |

## Forms

### get_form_by_id `READ`

Get a specific form by its ID

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| formId | string | **yes** | The form ID to retrieve |
| locationId | string | no | Location ID (uses default if not provided) |

### get_form_submissions `READ`

Get all submissions for a specific form. Returns lead data collected through the form.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| formId | string | **yes** | Form ID to get submissions for |
| locationId | string | no | Location ID (uses default if not provided) |
| startAt | string | no | Start date for filtering submissions (ISO 8601 format) |
| endAt | string | no | End date for filtering submissions (ISO 8601 format) |
| skip | number | no | Number of records to skip for pagination |
| limit | number | no | Maximum number of submissions to return (default: 20, max: 100) |
| page | number | no | Page number for pagination |

### get_forms `READ`

Get all forms for a location. Forms are used to collect leads and information from contacts.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID (uses default if not provided) |
| skip | number | no | Number of records to skip for pagination |
| limit | number | no | Maximum number of forms to return (default: 20, max: 100) |
| type | string | no | Filter by form type (e.g., "form", "survey") |

### upload_form_custom_files `WRITE`

Upload custom files for a form field (e.g. file upload fields in form submissions)

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | **yes** | Location ID (uses default if not provided) |
| contactId | string | **yes** | Contact ID associated with the upload |
| formId | string | **yes** | Form ID the file belongs to |
| fieldId | string | **yes** | Field ID within the form for the file upload |
| fileUrl | string | **yes** | Publicly accessible URL of the file to upload |
| fileName | string | no | Name of the file being uploaded |
| mimeType | string | no | MIME type of the file (e.g. "application/pdf", "image/png") |

## Funnels

### count_funnel_pages `READ`

Get the total count of pages for a funnel

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| funnelId | string | **yes** | The funnel ID |
| locationId | string | no | Location ID (uses default if not provided) |

### get_funnel `READ`

Get a specific funnel by ID with all its pages

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| funnelId | string | **yes** | The funnel ID to retrieve |
| locationId | string | no | Location ID (uses default if not provided) |

### get_funnel_pages `READ`

Get all pages for a specific funnel

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| funnelId | string | **yes** | The funnel ID to get pages for |
| locationId | string | no | Location ID (uses default if not provided) |
| skip | number | no | Number of records to skip |
| limit | number | no | Maximum number of pages to return |

### get_funnel_redirects `READ`

List all redirects for a funnel

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| funnelId | string | **yes** | The funnel ID |
| locationId | string | no | Location ID (uses default if not provided) |
| skip | number | no | Number of records to skip |
| limit | number | no | Maximum number of redirects to return |

### get_funnels `READ`

Get all funnels for a location. Funnels are multi-page sales/marketing flows.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID (uses default if not provided) |
| skip | number | no | Number of records to skip for pagination |
| limit | number | no | Maximum number of funnels to return (default: 10) |
| name | string | no | Filter by funnel name (partial match) |
| category | string | no | Filter by category |
| parentId | string | no | Filter by parent folder ID |
| type | string | no | Filter by type (funnel or website) Values: `funnel` \| `website` |

### create_funnel_redirect `WRITE`

Create a URL redirect for a funnel

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| funnelId | string | **yes** | The funnel ID |
| locationId | string | no | Location ID (uses default if not provided) |
| target | string | **yes** | Target URL to redirect to |
| action | string | **yes** | Redirect action type Values: `funnel` \| `website` \| `url` \| `all` |
| pathName | string | no | Source path for the redirect |

### update_funnel_redirect `WRITE`

Update an existing funnel redirect

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| funnelId | string | **yes** | The funnel ID |
| redirectId | string | **yes** | The redirect ID to update |
| locationId | string | no | Location ID (uses default if not provided) |
| target | string | no | Target URL to redirect to |
| action | string | no | Redirect action type Values: `funnel` \| `website` \| `url` \| `all` |
| pathName | string | no | Source path for the redirect |

### delete_funnel_redirect `DELETE`

Delete a funnel redirect

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| funnelId | string | **yes** | The funnel ID |
| redirectId | string | **yes** | The redirect ID to delete |
| locationId | string | no | Location ID (uses default if not provided) |

## General

### get_companies `READ`

Get all companies for a location. Companies represent business entities in B2B scenarios.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID (uses default if not provided) |
| skip | number | no | Number of records to skip for pagination |
| limit | number | no | Maximum number of companies to return |
| query | string | no | Search query to filter companies |

### get_company `READ`

Get a specific company by ID

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| companyId | string | **yes** | The company ID to retrieve |
| locationId | string | no | Location ID (uses default if not provided) |

### create_company `WRITE`

Create a new company record

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID (uses default if not provided) |
| name | string | **yes** | Company name |
| phone | string | no | Company phone number |
| email | string | no | Company email address |
| website | string | no | Company website URL |
| address1 | string | no | Street address line 1 |
| address2 | string | no | Street address line 2 |
| city | string | no | City |
| state | string | no | State/Province |
| postalCode | string | no | Postal/ZIP code |
| country | string | no | Country |
| industry | string | no | Industry/vertical |
| employeeCount | number | no | Number of employees |
| annualRevenue | number | no | Annual revenue |
| description | string | no | Company description |
| customFields | array\<object\> | no | Custom field values |
| tags | array\<string\> | no | Tags to apply to the company |

### update_company `WRITE`

Update an existing company record

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| companyId | string | **yes** | The company ID to update |
| locationId | string | no | Location ID (uses default if not provided) |
| name | string | no | Company name |
| phone | string | no | Company phone number |
| email | string | no | Company email address |
| website | string | no | Company website URL |
| address1 | string | no | Street address line 1 |
| city | string | no | City |
| state | string | no | State/Province |
| postalCode | string | no | Postal/ZIP code |
| country | string | no | Country |
| industry | string | no | Industry/vertical |
| employeeCount | number | no | Number of employees |
| annualRevenue | number | no | Annual revenue |
| description | string | no | Company description |
| customFields | array\<object\> | no | Custom field values |
| tags | array\<string\> | no | Tags to apply to the company |

### delete_company `DELETE`

Delete a company record

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| companyId | string | **yes** | The company ID to delete |
| locationId | string | no | Location ID (uses default if not provided) |

## Invoices

### generate_estimate_number `READ`

Generate a unique estimate number

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| altId | string | no | Location ID |

### generate_invoice_number `READ`

Generate a unique invoice number

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| altId | string | no | Location ID |

### get_invoice `READ`

Get invoice by ID

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| invoiceId | string | **yes** | Invoice ID |
| altId | string | no | Location ID |

### get_invoice_schedule `READ`

Get invoice schedule by ID

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| scheduleId | string | **yes** | Schedule ID |
| altId | string | no | Location ID |

### get_invoice_template `READ`

Get invoice template by ID

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| templateId | string | **yes** | Template ID |
| altId | string | no | Location ID |

### list_estimates `READ`

List all estimates

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| altId | string | no | Location ID |
| limit | string | **yes** | Number of results per page |
| offset | string | **yes** | Offset for pagination |
| status | string | no | Filter by status Values: `all` \| `draft` \| `sent` \| `accepted` \| `declined` \| `invoiced` \| `viewed` |
| contactId | string | no | Filter by contact ID |
| search | string | no | Search term |

### list_invoice_schedules `READ`

List all invoice schedules

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| altId | string | no | Location ID |
| limit | string | **yes** | Number of results per page |
| offset | string | **yes** | Offset for pagination |
| status | string | no | Filter by status |
| search | string | no | Search term |

### list_invoice_templates `READ`

List all invoice templates

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| altId | string | no | Location ID |
| limit | string | **yes** | Number of results per page |
| offset | string | **yes** | Offset for pagination |
| status | string | no | Filter by status |
| search | string | no | Search term |
| paymentMode | string | no | Payment mode Values: `default` \| `live` \| `test` |

### list_invoices `READ`

List all invoices

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| altId | string | no | Location ID |
| limit | string | **yes** | Number of results per page |
| offset | string | **yes** | Offset for pagination |
| status | string | no | Filter by status |
| contactId | string | no | Filter by contact ID |
| search | string | no | Search term |

### create_estimate `WRITE`

Create a new estimate

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| altId | string | no | Location ID |
| contactId | string | **yes** | Contact ID |
| title | string | **yes** | Estimate title |
| currency | string | no | Currency code |
| issueDate | string | no | Issue date |
| validUntil | string | no | Valid until date |

### create_invoice `WRITE`

Create a new invoice

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| altId | string | no | Location ID |
| contactId | string | **yes** | Contact ID |
| title | string | **yes** | Invoice title |
| currency | string | no | Currency code |
| issueDate | string | no | Issue date |
| dueDate | string | no | Due date |
| items | array | no | Invoice items |

### create_invoice_from_estimate `WRITE`

Create an invoice from an estimate

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| estimateId | string | **yes** | Estimate ID |
| altId | string | no | Location ID |
| issueDate | string | no | Invoice issue date |
| dueDate | string | no | Invoice due date |

### create_invoice_schedule `WRITE`

Create a new invoice schedule

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| altId | string | no | Location ID |
| name | string | **yes** | Schedule name |
| templateId | string | **yes** | Template ID |
| contactId | string | **yes** | Contact ID |
| frequency | string | no | Schedule frequency |

### create_invoice_template `WRITE`

Create a new invoice template

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| altId | string | no | Location ID |
| altType | string | no |  Values: `location` |
| name | string | **yes** | Template name |
| title | string | no | Invoice title |
| currency | string | no | Currency code |
| issueDate | string | no | Issue date |
| dueDate | string | no | Due date |

### send_estimate `WRITE`

Send an estimate to customer

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| estimateId | string | **yes** | Estimate ID |
| altId | string | no | Location ID |
| emailTo | string | no | Email address to send to |
| subject | string | no | Email subject |
| message | string | no | Email message |

### send_invoice `WRITE`

Send an invoice to customer

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| invoiceId | string | **yes** | Invoice ID |
| altId | string | no | Location ID |
| emailTo | string | no | Email address to send to |
| subject | string | no | Email subject |
| message | string | no | Email message |

### update_invoice_template `WRITE`

Update an existing invoice template

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| templateId | string | **yes** | Template ID |
| altId | string | no | Location ID |
| name | string | no | Template name |
| title | string | no | Invoice title |
| currency | string | no | Currency code |

### delete_invoice_template `DELETE`

Delete an invoice template

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| templateId | string | **yes** | Template ID |
| altId | string | no | Location ID |

## Links

### get_link `READ`

Get a specific trigger link by ID

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| linkId | string | **yes** | The link ID to retrieve |
| locationId | string | no | Location ID (uses default if not provided) |

### get_links `READ`

Get all trigger links for a location. Trigger links are trackable URLs that can trigger automations.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID (uses default if not provided) |
| skip | number | no | Number of records to skip for pagination |
| limit | number | no | Maximum number of links to return |

### search_links `READ`

Search trigger links by name or query string within a location

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID (uses default if not provided) |
| query | string | no | Search term to filter links by name |
| skip | number | no | Number of records to skip for pagination |
| limit | number | no | Maximum number of links to return |

### create_link `WRITE`

Create a new trigger link

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID (uses default if not provided) |
| name | string | **yes** | Link name for identification |
| redirectTo | string | **yes** | Target URL to redirect to when clicked |
| fieldKey | string | no | Custom field key to update on click |
| fieldValue | string | no | Value to set for the custom field |

### update_link `WRITE`

Update an existing trigger link

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| linkId | string | **yes** | The link ID to update |
| locationId | string | no | Location ID (uses default if not provided) |
| name | string | no | Link name for identification |
| redirectTo | string | no | Target URL to redirect to when clicked |
| fieldKey | string | no | Custom field key to update on click |
| fieldValue | string | no | Value to set for the custom field |

### delete_link `DELETE`

Delete a trigger link

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| linkId | string | **yes** | The link ID to delete |
| locationId | string | no | Location ID (uses default if not provided) |

## Locations

### get_location `READ`

Get detailed information about a specific location/sub-account by ID

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | **yes** | The unique ID of the location to retrieve |

### get_location_custom_field `READ`

Get a specific custom field by ID

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | **yes** | The location ID |
| customFieldId | string | **yes** | The custom field ID to retrieve |

### get_location_custom_fields `READ`

Get custom fields for a location, optionally filtered by model type

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | **yes** | The location ID |
| model | string | no | Filter by model type (default: all) Values: `contact` \| `opportunity` \| `all` |

### get_location_custom_value `READ`

Get a specific custom value by ID

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | **yes** | The location ID |
| customValueId | string | **yes** | The custom value ID to retrieve |

### get_location_custom_values `READ`

Get all custom values for a location

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | **yes** | The location ID |

### get_location_tag `READ`

Get a specific location tag by ID

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | **yes** | The location ID |
| tagId | string | **yes** | The tag ID to retrieve |

### get_location_tags `READ`

Get all tags for a specific location

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | **yes** | The location ID to get tags from |

### get_location_templates `READ`

Get SMS/Email templates for a location

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | **yes** | The location ID |
| originId | string | **yes** | Origin ID (required parameter) |
| deleted | boolean | no | Include deleted templates (default: false) |
| skip | number | no | Number to skip for pagination (default: 0) |
| limit | number | no | Maximum number to return (default: 25) |
| type | string | no | Filter by template type Values: `sms` \| `email` \| `whatsapp` |

### get_recurring_task `READ`

Get a specific recurring task by ID

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | **yes** | The location ID |
| taskId | string | **yes** | The recurring task ID |

### get_timezones `READ`

Get available timezones for location configuration

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Optional location ID |

### search_location_tasks `READ`

Search tasks within a location with advanced filtering

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | **yes** | The location ID to search tasks in |
| contactId | array\<string\> | no | Filter by specific contact IDs |
| completed | boolean | no | Filter by completion status |
| assignedTo | array\<string\> | no | Filter by assigned user IDs |
| query | string | no | Search query for task content |
| limit | number | no | Maximum number of tasks to return (default: 25) |
| skip | number | no | Number of tasks to skip for pagination (default: 0) |
| businessId | string | no | Business ID filter |

### search_locations `READ`

Search for locations/sub-accounts in GoHighLevel with filtering options

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| companyId | string | no | Company/Agency ID to filter locations |
| skip | number | no | Number of results to skip for pagination (default: 0) |
| limit | number | no | Maximum number of locations to return (default: 10) |
| order | string | no | Order of results (default: asc) Values: `asc` \| `desc` |
| email | string | no | Filter by email address |

### create_location `WRITE`

Create a new sub-account/location in GoHighLevel (Agency Pro plan required)

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| name | string | **yes** | Name of the sub-account/location |
| companyId | string | **yes** | Company/Agency ID |
| phone | string | no | Phone number with country code (e.g., +1410039940) |
| address | string | no | Business address |
| city | string | no | City where business is located |
| state | string | no | State where business operates |
| country | string | no | 2-letter country code (e.g., US, CA, GB) |
| postalCode | string | no | Postal/ZIP code |
| website | string | no | Business website URL |
| timezone | string | no | Business timezone (e.g., US/Central) |
| prospectInfo | object | no | Prospect information for the location |
| snapshotId | string | no | Snapshot ID to load into the location |

### create_location_custom_field `WRITE`

Create a new custom field for a location

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | **yes** | The location ID |
| name | string | **yes** | Name of the custom field |
| dataType | string | **yes** | Data type of the field (TEXT, NUMBER, DATE, etc.) |
| placeholder | string | no | Placeholder text for the field |
| model | string | no | Model to create the field for Values: `contact` \| `opportunity` |
| position | number | no | Position/order of the field (default: 0) |

### create_location_custom_value `WRITE`

Create a new custom value for a location

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | **yes** | The location ID |
| name | string | **yes** | Name of the custom value field |
| value | string | **yes** | Value to assign |

### create_location_tag `WRITE`

Create a new tag for a location

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | **yes** | The location ID to create tag in |
| name | string | **yes** | Name of the tag to create |

### create_recurring_task `WRITE`

Create a new recurring task template for a location

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | **yes** | The location ID |
| title | string | **yes** | Title of the recurring task |
| description | string | no | Description of the recurring task |
| dueDate | string | no | Due date for the task (ISO 8601) |
| assignedTo | string | no | User ID to assign the task to |
| recurrence | object | no | Recurrence configuration |

### update_location `WRITE`

Update an existing sub-account/location in GoHighLevel

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | **yes** | The unique ID of the location to update |
| name | string | no | Updated name of the sub-account/location |
| companyId | string | **yes** | Company/Agency ID |
| phone | string | no | Updated phone number |
| address | string | no | Updated business address |
| city | string | no | Updated city |
| state | string | no | Updated state |
| country | string | no | Updated 2-letter country code |
| postalCode | string | no | Updated postal/ZIP code |
| website | string | no | Updated website URL |
| timezone | string | no | Updated timezone |

### update_location_custom_field `WRITE`

Update an existing custom field

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | **yes** | The location ID |
| customFieldId | string | **yes** | The custom field ID to update |
| name | string | **yes** | Updated name of the custom field |
| placeholder | string | no | Updated placeholder text |
| position | number | no | Updated position/order |

### update_location_custom_value `WRITE`

Update an existing custom value

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | **yes** | The location ID |
| customValueId | string | **yes** | The custom value ID to update |
| name | string | **yes** | Updated name |
| value | string | **yes** | Updated value |

### update_location_tag `WRITE`

Update an existing location tag

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | **yes** | The location ID |
| tagId | string | **yes** | The tag ID to update |
| name | string | **yes** | Updated name for the tag |

### update_recurring_task `WRITE`

Update an existing recurring task

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | **yes** | The location ID |
| taskId | string | **yes** | The recurring task ID to update |
| title | string | no | Updated title |
| description | string | no | Updated description |
| dueDate | string | no | Updated due date (ISO 8601) |
| assignedTo | string | no | Updated assigned user ID |
| recurrence | object | no | Updated recurrence configuration |

### delete_location `DELETE`

Delete a sub-account/location from GoHighLevel

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | **yes** | The unique ID of the location to delete |
| deleteTwilioAccount | boolean | **yes** | Whether to delete associated Twilio account |

### delete_location_custom_field `DELETE`

Delete a custom field from a location

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | **yes** | The location ID |
| customFieldId | string | **yes** | The custom field ID to delete |

### delete_location_custom_value `DELETE`

Delete a custom value from a location

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | **yes** | The location ID |
| customValueId | string | **yes** | The custom value ID to delete |

### delete_location_tag `DELETE`

Delete a location tag

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | **yes** | The location ID |
| tagId | string | **yes** | The tag ID to delete |

### delete_location_template `DELETE`

Delete a template from a location

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | **yes** | The location ID |
| templateId | string | **yes** | The template ID to delete |

### delete_recurring_task `DELETE`

Delete a recurring task by ID

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | **yes** | The location ID |
| taskId | string | **yes** | The recurring task ID to delete |

## Marketplace

### check_billing_funds `READ`

Check if a location account has sufficient funds in its wallet for billing. Returns a boolean indicating fund availability.

_No parameters._

### get_billing_charge `READ`

Get specific wallet charge details by charge ID. Returns full charge information including amount, currency, meter ID, and metadata.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| chargeId | string | **yes** | ID of the charge to retrieve |

### list_billing_charges `READ`

Get all wallet charges for a location. Returns a list of billing charges with details like amount, currency, meter ID, and transaction type.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| meterId | string | no | Billing Meter ID (found on your app's pricing page on the developer portal) |
| eventId | string | no | Event ID / Transaction ID to filter by |
| userId | string | no | Filter results by User ID that your server passed via API when the charge was created |
| startDate | string | no | Filter results AFTER a specific date (e.g., "2025-03-26"). Use with endDate to filter a time window. |
| endDate | string | no | Filter results BEFORE a specific date (e.g., "2025-03-26"). Use with startDate to filter a time window. |
| skip | number | no | Number of records to skip for pagination |
| limit | number | no | Maximum number of records to return |

### list_marketplace_installations `READ`

Get installer details for a specific app. Fetches information about the company, location, user, and installation details associated with the current OAuth token.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| appId | string | **yes** | ID of the app to get installer details for |
| isInstalled | boolean | no | Filter by installation status |
| companyId | string | no | Company ID to filter installations |
| locationId | string | no | Location ID to filter installations (uses default if not provided) |
| planId | string | no | Plan ID to filter installations |
| skip | number | no | Number of records to skip for pagination |
| limit | number | no | Maximum number of records to return |

### create_billing_charge `WRITE`

Create a new wallet charge for a location. Used to bill sub-accounts for usage-based features in your marketplace app.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| meterId | string | **yes** | Billing Meter ID (found on your app's pricing page on the developer portal) |
| units | number | **yes** | Number of units to charge the sub-account for |
| description | string | no | Description of the charge |
| eventId | string | no | Unique event / transaction ID for idempotency |
| eventTime | string | no | Timestamp when the billable event occurred (ISO 8601) |
| userId | string | no | User ID associated with this charge |

### delete_billing_charge `DELETE`

Delete a wallet charge by charge ID. This removes/refunds the specified charge.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| chargeId | string | **yes** | ID of the charge to delete |

### delete_marketplace_installation `DELETE`

Uninstall an application from your company or a specific location. This will remove the application's access and stop all its functionalities.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| appId | string | **yes** | The application ID to uninstall |
| locationId | string | no | Location ID to uninstall from (uses default if not provided). If not provided, uninstalls from the company. |
| companyId | string | no | Company ID to uninstall from |

## Media

### get_media_files `READ`

Get list of files and folders from the media library with filtering and search capabilities

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| offset | number | no | Number of files to skip in listing |
| limit | number | no | Number of files to show in the listing (max 100) |
| sortBy | string | no | Field to sort the file listing by (e.g., createdAt, name, size) |
| sortOrder | string | no | Direction to sort files (asc or desc) Values: `asc` \| `desc` |
| type | string | no | Filter by type (file or folder) Values: `file` \| `folder` |
| query | string | no | Search query text to filter files by name |
| altType | string | no | Context type (location or agency) Values: `location` \| `agency` |
| altId | string | no | Location or Agency ID (uses default location if not provided) |
| parentId | string | no | Parent folder ID to list files within a specific folder |

### bulk_update_media_files `WRITE`

Move multiple media files to a different folder in bulk

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| fileIds | array\<string\> | **yes** | Array of file IDs to move |
| altType | string | no | Context type (location or agency) Values: `location` \| `agency` |
| altId | string | no | Location or Agency ID (uses default location if not provided) |
| parentId | string | no | Destination parent folder ID |

### create_media_folder `WRITE`

Create a new folder in the media library

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| name | string | **yes** | Name of the folder to create |
| altType | string | no | Context type (location or agency) Values: `location` \| `agency` |
| altId | string | no | Location or Agency ID (uses default location if not provided) |
| parentId | string | no | Parent folder ID to create the folder inside |

### update_media_file `WRITE`

Update metadata (name, parent folder) of an existing media file

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| id | string | **yes** | ID of the file to update |
| altType | string | no | Context type (location or agency) Values: `location` \| `agency` |
| altId | string | no | Location or Agency ID (uses default location if not provided) |
| name | string | no | New name for the file |
| parentId | string | no | New parent folder ID to move the file into |

### upload_media_file `WRITE`

Upload a file to the media library or add a hosted file URL (max 25MB for direct uploads)

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| file | string | no | File data (binary) for direct upload |
| hosted | boolean | no | Set to true if providing a fileUrl instead of direct file upload |
| fileUrl | string | no | URL of hosted file (required if hosted=true) |
| name | string | no | Custom name for the uploaded file |
| parentId | string | no | Parent folder ID to upload file into |
| altType | string | no | Context type (location or agency) Values: `location` \| `agency` |
| altId | string | no | Location or Agency ID (uses default location if not provided) |

### bulk_delete_media_files `DELETE`

Delete multiple media files in bulk

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| fileIds | array\<string\> | **yes** | Array of file IDs to delete |
| altType | string | no | Context type (location or agency) Values: `location` \| `agency` |
| altId | string | no | Location or Agency ID (uses default location if not provided) |

### delete_media_file `DELETE`

Delete a specific file or folder from the media library

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| id | string | **yes** | ID of the file or folder to delete |
| altType | string | no | Context type (location or agency) Values: `location` \| `agency` |
| altId | string | no | Location or Agency ID (uses default location if not provided) |

## Objects

### get_all_objects `READ`

Get all objects (custom and standard) for a location including contact, opportunity, business, and custom objects

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID (uses default if not provided) |

### get_object_record `READ`

Get a specific record by ID from a custom or standard object

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| schemaKey | string | **yes** | Schema key of the object |
| recordId | string | **yes** | ID of the record to retrieve |

### get_object_schema `READ`

Get object schema details by key including all fields and properties for custom or standard objects

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| key | string | **yes** | Object key (e.g., "custom_objects.pet" for custom objects, "contact" for standard objects) |
| locationId | string | no | Location ID (uses default if not provided) |
| fetchProperties | boolean | no | Whether to fetch all standard/custom fields of the object |

### search_object_records `READ`

Search records within a custom or standard object using searchable properties

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| schemaKey | string | **yes** | Schema key of the object to search in |
| query | string | **yes** | Search query using searchable properties (e.g., "name:Buddy" to search for records with name Buddy) |
| locationId | string | no | Location ID (uses default if not provided) |
| page | number | no | Page number for pagination |
| pageLimit | number | no | Number of records per page |
| searchAfter | array\<string\> | no | Cursor for pagination (returned from previous search) |

### create_object_record `WRITE`

Create a new record in a custom or standard object with properties, owner, and followers

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| schemaKey | string | **yes** | Schema key of the object (e.g., "custom_objects.pet", "business") |
| properties | object | **yes** | Record properties as key-value pairs (e.g., {"name": "Buddy", "breed": "Golden Retriever"}) |
| locationId | string | no | Location ID (uses default if not provided) |
| owner | array\<string\> | no | Array of user IDs who own this record (limited to 1, only for custom objects) |
| followers | array\<string\> | no | Array of user IDs who follow this record (limited to 10) |

### create_object_schema `WRITE`

Create a new custom object schema with labels, key, and primary display property

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| labels | object | **yes** | Singular and plural names for the custom object |
| key | string | **yes** | Unique key for the object (e.g., "custom_objects.pet"). The "custom_objects." prefix is added automatically if not included |
| description | string | no | Description of the custom object |
| locationId | string | no | Location ID (uses default if not provided) |
| primaryDisplayPropertyDetails | object | **yes** | Primary property configuration for display |

### update_object_record `WRITE`

Update an existing record in a custom or standard object

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| schemaKey | string | **yes** | Schema key of the object |
| recordId | string | **yes** | ID of the record to update |
| properties | object | no | Updated record properties as key-value pairs |
| locationId | string | no | Location ID (uses default if not provided) |
| owner | array\<string\> | no | Updated array of user IDs who own this record |
| followers | array\<string\> | no | Updated array of user IDs who follow this record |

### update_object_schema `WRITE`

Update object schema properties including labels, description, and searchable fields

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| key | string | **yes** | Object key to update |
| labels | object | no | Updated singular and plural names (optional) |
| description | string | no | Updated description |
| locationId | string | no | Location ID (uses default if not provided) |
| searchableProperties | array\<string\> | **yes** | Array of field keys that should be searchable (e.g., ["custom_objects.pet.name", "custom_objects.pet.breed"]) |

### delete_object_record `DELETE`

Delete a record from a custom or standard object

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| schemaKey | string | **yes** | Schema key of the object |
| recordId | string | **yes** | ID of the record to delete |

## Payments

### disconnect_custom_provider_config `READ`

Disconnect existing payment config for a location

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | **yes** | Location ID |
| liveMode | boolean | **yes** | Whether to disconnect live or test mode config |

### get_coupon `READ`

Get coupon details by ID or code

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| altId | string | **yes** | Location ID |
| altType | string | **yes** | Alt Type Values: `location` |
| id | string | **yes** | Coupon ID |
| code | string | **yes** | Coupon code |

### get_custom_provider_config `READ`

Fetch existing payment config for a location

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | **yes** | Location ID |

### get_order_by_id `READ`

Get a specific order by its ID

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| orderId | string | **yes** | ID of the order to retrieve |
| locationId | string | no | Location ID (sub-account ID) |
| altId | string | **yes** | Alt ID (unique identifier like location ID) |
| altType | string | **yes** | Alt Type (type of identifier) |

### get_order_notes `READ`

Get notes for a specific order

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| orderId | string | **yes** | ID of the order to get notes for |
| altId | string | **yes** | Alt ID (unique identifier like location ID) |
| altType | string | **yes** | Alt Type Values: `location` |

### get_subscription_by_id `READ`

Get a specific subscription by its ID

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| subscriptionId | string | **yes** | ID of the subscription to retrieve |
| altId | string | **yes** | Alt ID (unique identifier like location ID) |
| altType | string | **yes** | Alt Type Values: `location` |

### get_transaction_by_id `READ`

Get a specific transaction by its ID

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| transactionId | string | **yes** | ID of the transaction to retrieve |
| locationId | string | no | Location ID (sub-account ID) |
| altId | string | **yes** | Alt ID (unique identifier like location ID) |
| altType | string | **yes** | Alt Type (type of identifier) |

### list_coupons `READ`

List all coupons for a location with optional filtering

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| altId | string | **yes** | Location ID |
| altType | string | **yes** | Alt Type Values: `location` |
| limit | number | no | Maximum number of coupons to return |
| offset | number | no | Number of coupons to skip for pagination |
| status | string | no | Filter coupons by status Values: `scheduled` \| `active` \| `expired` |
| search | string | no | Search term to filter coupons by name or code |

### list_order_fulfillments `READ`

List all fulfillments for an order

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| orderId | string | **yes** | ID of the order |
| altId | string | **yes** | Location ID or Agency ID |
| altType | string | **yes** | Alt Type Values: `location` |

### list_orders `READ`

List orders with optional filtering and pagination

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID (sub-account ID) |
| altId | string | **yes** | Alt ID (unique identifier like location ID) |
| altType | string | **yes** | Alt Type (type of identifier) |
| status | string | no | Order status filter |
| paymentMode | string | no | Mode of payment (live/test) |
| startAt | string | no | Starting date interval for orders (YYYY-MM-DD) |
| endAt | string | no | Ending date interval for orders (YYYY-MM-DD) |
| search | string | no | Search term for order name |
| contactId | string | no | Contact ID for filtering orders |
| funnelProductIds | string | no | Comma-separated funnel product IDs |
| limit | number | no | Maximum number of items per page |
| offset | number | no | Starting index for pagination |

### list_subscriptions `READ`

List subscriptions with optional filtering and pagination

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| altId | string | **yes** | Alt ID (unique identifier like location ID) |
| altType | string | **yes** | Alt Type Values: `location` |
| entityId | string | no | Entity ID for filtering subscriptions |
| paymentMode | string | no | Mode of payment (live/test) |
| startAt | string | no | Starting date interval for subscriptions (YYYY-MM-DD) |
| endAt | string | no | Ending date interval for subscriptions (YYYY-MM-DD) |
| entitySourceType | string | no | Source of the subscriptions |
| search | string | no | Search term for subscription name |
| contactId | string | no | Contact ID for the subscription |
| id | string | no | Subscription ID for filtering |
| limit | number | no | Maximum number of items per page |
| offset | number | no | Starting index for pagination |

### list_transactions `READ`

List transactions with optional filtering and pagination

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID (sub-account ID) |
| altId | string | **yes** | Alt ID (unique identifier like location ID) |
| altType | string | **yes** | Alt Type (type of identifier) |
| paymentMode | string | no | Mode of payment (live/test) |
| startAt | string | no | Starting date interval for transactions (YYYY-MM-DD) |
| endAt | string | no | Ending date interval for transactions (YYYY-MM-DD) |
| entitySourceType | string | no | Source of the transactions |
| entitySourceSubType | string | no | Source sub-type of the transactions |
| search | string | no | Search term for transaction name |
| subscriptionId | string | no | Subscription ID for filtering transactions |
| entityId | string | no | Entity ID for filtering transactions |
| contactId | string | no | Contact ID for filtering transactions |
| limit | number | no | Maximum number of items per page |
| offset | number | no | Starting index for pagination |

### list_whitelabel_integration_providers `READ`

List white-label integration providers with optional pagination

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| altId | string | **yes** | Location ID or company ID based on altType |
| altType | string | **yes** | Alt Type Values: `location` |
| limit | number | no | Maximum number of items to return |
| offset | number | no | Starting index for pagination |

### create_coupon `WRITE`

Create a new promotional coupon

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| altId | string | **yes** | Location ID |
| altType | string | **yes** | Alt Type Values: `location` |
| name | string | **yes** | Coupon name |
| code | string | **yes** | Coupon code |
| discountType | string | **yes** | Type of discount Values: `percentage` \| `amount` |
| discountValue | number | **yes** | Discount value |
| startDate | string | **yes** | Start date in YYYY-MM-DDTHH:mm:ssZ format |
| endDate | string | no | End date in YYYY-MM-DDTHH:mm:ssZ format |
| usageLimit | number | no | Maximum number of times coupon can be used |
| productIds | array\<string\> | no | Product IDs that the coupon applies to |
| applyToFuturePayments | boolean | no | Whether coupon applies to future subscription payments |
| applyToFuturePaymentsConfig | object | no | Configuration for future payments application |
| limitPerCustomer | boolean | no | Whether to limit coupon to once per customer |

### create_custom_provider_config `WRITE`

Create new payment config for a location

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | **yes** | Location ID |
| live | object | **yes** | Live payment configuration |
| test | object | **yes** | Test payment configuration |

### create_custom_provider_integration `WRITE`

Create a new custom payment provider integration

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | **yes** | Location ID |
| name | string | **yes** | Name of the custom provider |
| description | string | **yes** | Description of the payment gateway |
| paymentsUrl | string | **yes** | URL to load in iframe for payment session |
| queryUrl | string | **yes** | URL for querying payment events |
| imageUrl | string | **yes** | Public image URL for the payment gateway logo |

### create_order_fulfillment `WRITE`

Create a fulfillment for an order

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| orderId | string | **yes** | ID of the order to fulfill |
| altId | string | **yes** | Location ID or Agency ID |
| altType | string | **yes** | Alt Type Values: `location` |
| trackings | array\<object\> | **yes** | Fulfillment tracking information |
| items | array\<object\> | **yes** | Items being fulfilled |
| notifyCustomer | boolean | **yes** | Whether to notify the customer |

### create_whitelabel_integration_provider `WRITE`

Create a white-label integration provider for payments

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| altId | string | **yes** | Location ID or company ID based on altType |
| altType | string | **yes** | Alt Type Values: `location` |
| uniqueName | string | **yes** | A unique name for the integration provider (lowercase, hyphens only) |
| title | string | **yes** | The title or name of the integration provider |
| provider | string | **yes** | The type of payment provider Values: `authorize-net` \| `nmi` |
| description | string | **yes** | A brief description of the integration provider |
| imageUrl | string | **yes** | The URL to an image representing the integration provider |

### record_order_payment `WRITE`

Record a manual payment for an order

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| orderId | string | **yes** | ID of the order to record payment for |
| altId | string | **yes** | Alt ID (unique identifier like location ID) |
| altType | string | **yes** | Alt Type Values: `location` |
| amount | number | **yes** | Payment amount |
| currency | string | no | Currency code (e.g., USD) |
| paymentMethod | string | no | Payment method used |
| note | string | no | Note about the payment |

### update_coupon `WRITE`

Update an existing coupon

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| id | string | **yes** | Coupon ID |
| altId | string | **yes** | Location ID |
| altType | string | **yes** | Alt Type Values: `location` |
| name | string | **yes** | Coupon name |
| code | string | **yes** | Coupon code |
| discountType | string | **yes** | Type of discount Values: `percentage` \| `amount` |
| discountValue | number | **yes** | Discount value |
| startDate | string | **yes** | Start date in YYYY-MM-DDTHH:mm:ssZ format |
| endDate | string | no | End date in YYYY-MM-DDTHH:mm:ssZ format |
| usageLimit | number | no | Maximum number of times coupon can be used |
| productIds | array\<string\> | no | Product IDs that the coupon applies to |
| applyToFuturePayments | boolean | no | Whether coupon applies to future subscription payments |
| applyToFuturePaymentsConfig | object | no | Configuration for future payments application |
| limitPerCustomer | boolean | no | Whether to limit coupon to once per customer |

### delete_coupon `DELETE`

Delete a coupon permanently

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| altId | string | **yes** | Location ID |
| altType | string | **yes** | Alt Type Values: `location` |
| id | string | **yes** | Coupon ID |

### delete_custom_provider_integration `DELETE`

Delete an existing custom payment provider integration

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | **yes** | Location ID |

## Phone Numbers

### get_caller_ids `READ`

Get verified caller IDs

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |

### get_ivr_menus `READ`

Get all IVR/call menus

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |

### get_phone_number `READ`

Get a specific phone number by ID

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| phoneNumberId | string | **yes** | Phone Number ID |
| locationId | string | no | Location ID |

### get_phone_numbers `READ`

Get all phone numbers for a location

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |

### get_voicemails `READ`

Get voicemail messages

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| phoneNumberId | string | no | Filter by phone number |
| status | string | no | Filter by status Values: `new` \| `read` \| `archived` |
| limit | number | no | Max results |
| offset | number | no | Pagination offset |

### purchase_phone_number `READ`

Purchase a phone number

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| phoneNumber | string | **yes** | Phone number to purchase |
| name | string | no | Friendly name for the number |

### release_phone_number `READ`

Release/delete a phone number

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| phoneNumberId | string | **yes** | Phone Number ID |
| locationId | string | no | Location ID |

### search_available_numbers `READ`

Search for available phone numbers to purchase

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| country | string | **yes** | Country code (e.g., US, CA) |
| areaCode | string | no | Area code to search |
| contains | string | no | Number pattern to search for |
| type | string | no | Number type Values: `local` \| `tollfree` \| `mobile` |

### verify_caller_id `READ`

Submit verification code for caller ID

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| callerIdId | string | **yes** | Caller ID record ID |
| locationId | string | no | Location ID |
| code | string | **yes** | Verification code |

### add_caller_id `WRITE`

Add a caller ID for verification

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| phoneNumber | string | **yes** | Phone number to verify |
| name | string | no | Friendly name |

### create_ivr_menu `WRITE`

Create an IVR/call menu

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| name | string | **yes** | Menu name |
| greeting | string | **yes** | Greeting message (text or URL) |
| options | array\<object\> | no | Menu options |

### get_call_forwarding_settings `WRITE`

Get call forwarding configuration

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| phoneNumberId | string | **yes** | Phone Number ID |
| locationId | string | no | Location ID |

### get_voicemail_settings `WRITE`

Get voicemail settings

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |

### update_call_forwarding `WRITE`

Update call forwarding settings

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| phoneNumberId | string | **yes** | Phone Number ID |
| locationId | string | no | Location ID |
| enabled | boolean | no | Enable forwarding |
| forwardTo | string | no | Number to forward to |
| ringTimeout | number | no | Ring timeout in seconds |
| voicemailEnabled | boolean | no | Enable voicemail on no answer |

### update_ivr_menu `WRITE`

Update an IVR menu

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| menuId | string | **yes** | IVR Menu ID |
| locationId | string | no | Location ID |
| name | string | no | Menu name |
| greeting | string | no | Greeting message |
| options | array | no | Menu options |

### update_phone_number `WRITE`

Update phone number settings

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| phoneNumberId | string | **yes** | Phone Number ID |
| locationId | string | no | Location ID |
| name | string | no | Friendly name |
| forwardingNumber | string | no | Number to forward calls to |
| callRecording | boolean | no | Enable call recording |
| whisperMessage | string | no | Whisper message played to agent |

### update_voicemail_settings `WRITE`

Update voicemail settings

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| enabled | boolean | no | Enable voicemail |
| greeting | string | no | Voicemail greeting (text or URL) |
| transcriptionEnabled | boolean | no | Enable transcription |
| notificationEmail | string | no | Email for voicemail notifications |

### delete_caller_id `DELETE`

Delete a caller ID

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| callerIdId | string | **yes** | Caller ID record ID |
| locationId | string | no | Location ID |

### delete_ivr_menu `DELETE`

Delete an IVR menu

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| menuId | string | **yes** | IVR Menu ID |
| locationId | string | no | Location ID |

### delete_voicemail `DELETE`

Delete a voicemail message

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| voicemailId | string | **yes** | Voicemail ID |
| locationId | string | no | Location ID |

## Phone System

### ghl_get_byoc_trunk `READ`

Get details for a specific BYOC (Bring Your Own Carrier) SIP trunk by ID.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID (uses default if not provided) |
| trunkId | string | **yes** | The unique ID of the BYOC trunk |

### ghl_get_call_recording `READ`

Retrieve a specific call recording by its ID. Returns the recording URL and metadata.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID (uses default if not provided) |
| recordingId | string | **yes** | The unique ID of the call recording |

### ghl_get_phone_number `READ`

Get details for a specific purchased phone number including its settings, capabilities, and forwarding configuration.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID (uses default if not provided) |
| phoneNumberId | string | **yes** | The ID of the phone number to retrieve |

### ghl_get_voicemail `READ`

Get voicemail messages for a specific phone number or location.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID (uses default if not provided) |
| phoneNumberId | string | no | Filter voicemails by phone number ID |
| limit | number | no | Maximum number of voicemails to return (default: 20) |
| skip | number | no | Number of records to skip for pagination |

### ghl_list_byoc_trunks `READ`

List all BYOC (Bring Your Own Carrier) SIP trunks configured for a location.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID to list trunks for (uses default if not provided) |

### ghl_list_call_recordings `READ`

List call recordings for a location with optional date range and phone number filters.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID (uses default if not provided) |
| phoneNumberId | string | no | Filter recordings by phone number ID |
| startDate | string | no | Start date filter (YYYY-MM-DD format) |
| endDate | string | no | End date filter (YYYY-MM-DD format) |
| limit | number | no | Maximum number of recordings to return (default: 20) |
| skip | number | no | Number of records to skip for pagination |

### ghl_list_phone_numbers `READ`

List all purchased phone numbers for a location with their current settings and status.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID to list numbers for (uses default if not provided) |
| limit | number | no | Maximum number of results to return (default: 20) |
| skip | number | no | Number of records to skip for pagination (default: 0) |

### ghl_search_available_numbers `READ`

Search for available phone numbers to purchase. Filter by area code, country, number type (local/toll-free/mobile), and capabilities.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID (uses default if not provided) |
| areaCode | string | no | Area code to search within (e.g., "415") |
| country | string | no | ISO 2-letter country code (default: "US") |
| type | string | no | Type of phone number to search for Values: `local` \| `tollFree` \| `mobile` |
| capabilities | array\<string\> | no | Required capabilities for the number |
| limit | number | no | Maximum results to return (default: 20, max: 50) |

### list_active_numbers_by_location `READ`

List all active phone numbers assigned to a specific location

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID to retrieve active numbers for (uses default if not provided) |

### list_number_pools `READ`

List all phone number pools available in the phone system. Number pools are groups of numbers used for call tracking and rotation.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID to filter number pools (uses default if not provided) |
| companyId | string | no | Company/Agency ID to filter number pools |

### ghl_buy_phone_number `WRITE`

Purchase an available phone number for a location. The number will be billed to the location account.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID to assign the number to (uses default if not provided) |
| phoneNumber | string | **yes** | The phone number to purchase in E.164 format (e.g., "+14155551234") |
| friendlyName | string | no | Optional friendly label for the number |

### ghl_configure_call_forwarding `WRITE`

Configure call forwarding rules for a phone number. Set up sequential or simultaneous ringing, time-based rules, and voicemail fallback.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID (uses default if not provided) |
| phoneNumberId | string | **yes** | The phone number ID to configure forwarding for |
| forwardingNumber | string | no | Primary forwarding destination (E.164 format) |
| forwardingType | string | no | When to forward calls Values: `always` \| `busyOrNoAnswer` \| `scheduled` |
| voicemailEnabled | boolean | no | Enable voicemail as fallback when forwarding fails |
| greetingMessage | string | no | Text for the greeting message (used with TTS if no recording) |

### ghl_create_byoc_trunk `WRITE`

Create a new BYOC (Bring Your Own Carrier) SIP trunk for a location. Allows using an external carrier instead of the built-in provider.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID to create the trunk for (uses default if not provided) |
| friendlyName | string | **yes** | Display name for the BYOC trunk |
| sipDomain | string | **yes** | SIP domain/hostname of the carrier (e.g., "sip.carrier.com") |
| sipUsername | string | no | SIP authentication username |
| sipPassword | string | no | SIP authentication password |
| sipPort | number | no | SIP port (default: 5060) |

### ghl_update_phone_number `WRITE`

Update settings for a purchased phone number including forwarding rules, messaging, and friendly name.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID (uses default if not provided) |
| phoneNumberId | string | **yes** | The ID of the phone number to update |
| friendlyName | string | no | Friendly display label for the number |
| forwardingNumber | string | no | Phone number to forward calls to (E.164 format) |
| messagingEnabled | boolean | no | Enable or disable SMS/MMS messaging for this number |
| voiceEnabled | boolean | no | Enable or disable voice calls for this number |

### ghl_release_phone_number `DELETE`

Release (remove) a purchased phone number from a location. This will stop billing for the number.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID (uses default if not provided) |
| phoneNumberId | string | **yes** | The ID of the phone number to release |

## Products

### ghl_get_product `READ`

Get a specific product by ID

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| productId | string | **yes** | Product ID to retrieve |
| locationId | string | no | GHL Location ID (optional, uses default if not provided) |

### ghl_list_inventory `READ`

List inventory items with stock levels

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | GHL Location ID (optional, uses default if not provided) |
| limit | number | no | Maximum number of items to return |
| offset | number | no | Number of items to skip |
| search | string | no | Search term for inventory items |

### ghl_list_prices `READ`

List prices for a product

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| productId | string | **yes** | Product ID to list prices for |
| locationId | string | no | GHL Location ID (optional, uses default if not provided) |
| limit | number | no | Maximum number of prices to return |
| offset | number | no | Number of prices to skip |

### ghl_list_product_collections `READ`

List product collections

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | GHL Location ID (optional, uses default if not provided) |
| limit | number | no | Maximum number of collections to return |
| offset | number | no | Number of collections to skip |
| name | string | no | Search by collection name |

### ghl_list_products `READ`

List products with optional filtering

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | GHL Location ID (optional, uses default if not provided) |
| limit | number | no | Maximum number of products to return |
| offset | number | no | Number of products to skip |
| search | string | no | Search term for product names |
| storeId | string | no | Filter by store ID |
| includedInStore | boolean | no | Filter by store inclusion status |
| availableInStore | boolean | no | Filter by store availability |

### ghl_bulk_edit_products `WRITE`

Bulk edit multiple products in a single request (e.g. update availability, store inclusion, or other fields for many products at once)

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | GHL Location ID (optional, uses default if not provided) |
| ids | array\<string\> | **yes** | Array of product IDs to update |
| availableInStore | boolean | no | Set store availability for all specified products |
| includedInStore | boolean | no | Set store inclusion for all specified products |

### ghl_create_price `WRITE`

Create a price for a product

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| productId | string | **yes** | Product ID to create price for |
| name | string | **yes** | Price name/variant name |
| type | string | **yes** | Price type Values: `one_time` \| `recurring` |
| currency | string | **yes** | Currency code (e.g., USD) |
| amount | number | **yes** | Price amount in cents |
| locationId | string | no | GHL Location ID (optional, uses default if not provided) |
| compareAtPrice | number | no | Compare at price (for discounts) |

### ghl_create_product `WRITE`

Create a new product in GoHighLevel

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | GHL Location ID (optional, uses default if not provided) |
| name | string | **yes** | Product name |
| productType | string | **yes** | Type of product Values: `DIGITAL` \| `PHYSICAL` \| `SERVICE` \| `PHYSICAL/DIGITAL` |
| description | string | no | Product description |
| image | string | no | Product image URL |
| availableInStore | boolean | no | Whether product is available in store |
| slug | string | no | Product URL slug |

### ghl_create_product_collection `WRITE`

Create a new product collection

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | GHL Location ID (optional, uses default if not provided) |
| name | string | **yes** | Collection name |
| slug | string | **yes** | Collection URL slug |
| image | string | no | Collection image URL |
| seo | object | no |  |

### ghl_update_product `WRITE`

Update an existing product

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| productId | string | **yes** | Product ID to update |
| locationId | string | no | GHL Location ID (optional, uses default if not provided) |
| name | string | no | Product name |
| productType | string | no | Type of product Values: `DIGITAL` \| `PHYSICAL` \| `SERVICE` \| `PHYSICAL/DIGITAL` |
| description | string | no | Product description |
| image | string | no | Product image URL |
| availableInStore | boolean | no | Whether product is available in store |

### ghl_delete_product `DELETE`

Delete a product by ID

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| productId | string | **yes** | Product ID to delete |
| locationId | string | no | GHL Location ID (optional, uses default if not provided) |

## Proposals

### list_proposal_templates `READ`

List proposal/contract templates for a location. Supports filtering by type, name, and date range.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID (uses default if not provided) |
| dateFrom | string | no | Start date filter (ISO 8601 format) |
| dateTo | string | no | End date filter (ISO 8601 format) |
| type | string | no | Comma-separated template types: proposal, estimate, contentLibrary |
| name | string | no | Filter templates by name |
| isPublicDocument | boolean | no | Filter for public DocForm templates |
| userId | string | no | User ID (required when isPublicDocument is true) |
| limit | string | no | Maximum number of records to return |
| skip | string | no | Number of records to skip for pagination |

### list_proposals_documents `READ`

List proposal/contract documents for a location. Supports filtering by status, payment status, and date range.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID (uses default if not provided) |
| status | string | no | Document status filter (comma-separated): draft, sent, viewed, completed, accepted |
| paymentStatus | string | no | Payment status filter (comma-separated): waiting_for_payment, paid, no_payment |
| limit | number | no | Maximum number of records to return |
| skip | number | no | Number of records to skip for pagination |
| query | string | no | Search string to filter documents by name |
| dateFrom | string | no | Start date filter (ISO 8601 format). Must be provided with dateTo. |
| dateTo | string | no | End date filter (ISO 8601 format). Must be provided with dateFrom. |

### send_proposal_document `WRITE`

Send a proposal/contract document to a client via email or link.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID (uses default if not provided) |
| documentId | string | **yes** | Document ID to send |
| documentName | string | no | Display name of the document |
| medium | string | no | Delivery medium: link or email |
| sentBy | string | **yes** | User ID of the sender (required) |
| ccRecipients | array\<object\> | no | CC recipients for the document |
| notificationSettings | object | no | Notification settings including sender info and email template |

### send_proposal_template `WRITE`

Send a proposal/contract template to a contact, creating a document from the template.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID (uses default if not provided) |
| templateId | string | **yes** | Template ID to send (required) |
| userId | string | **yes** | User ID of the sender (required) |
| contactId | string | **yes** | Contact ID to send the template to (required) |
| opportunityId | string | no | Opportunity ID to associate with the document |
| sendDocument | boolean | no | Whether to immediately send the document after creation |

## Reputation

### connect_google_business `READ`

Initiate Google Business Profile connection

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |

### disconnect_review_platform `READ`

Disconnect a review platform

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| platform | string | **yes** | Platform to disconnect Values: `google` \| `facebook` \| `yelp` |

### get_connected_review_platforms `READ`

Get connected review platforms (Google, Facebook, etc.)

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |

### get_review `READ`

Get a specific review by ID

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| reviewId | string | **yes** | Review ID |
| locationId | string | no | Location ID |

### get_review_links `READ`

Get direct review links for platforms

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |

### get_review_requests `READ`

Get sent review requests

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| contactId | string | no | Filter by contact |
| status | string | no | Status filter Values: `sent` \| `clicked` \| `reviewed` \| `all` |
| limit | number | no | Max results |
| offset | number | no | Pagination offset |

### get_review_stats `READ`

Get review statistics/summary

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| platform | string | no | Platform filter Values: `google` \| `facebook` \| `yelp` \| `all` |
| startDate | string | no | Start date |
| endDate | string | no | End date |

### get_reviews `READ`

Get all reviews for a location from various platforms

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| platform | string | no | Filter by platform Values: `google` \| `facebook` \| `yelp` \| `all` |
| rating | number | no | Filter by minimum rating (1-5) |
| status | string | no | Filter by reply status Values: `replied` \| `unreplied` \| `all` |
| startDate | string | no | Start date (YYYY-MM-DD) |
| endDate | string | no | End date (YYYY-MM-DD) |
| limit | number | no | Max results |
| offset | number | no | Pagination offset |

### reply_to_review `READ`

Reply to a review

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| reviewId | string | **yes** | Review ID |
| locationId | string | no | Location ID |
| reply | string | **yes** | Reply text |

### get_review_widget_settings `WRITE`

Get review widget embed settings

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |

### send_review_request `WRITE`

Send a review request to a contact

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| contactId | string | **yes** | Contact ID to request review from |
| platform | string | **yes** | Platform to request review on Values: `google` \| `facebook` \| `yelp` |
| method | string | **yes** | Delivery method Values: `sms` \| `email` \| `both` |
| message | string | no | Custom message (optional) |

### update_review_links `WRITE`

Update custom review links

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| googleLink | string | no | Custom Google review link |
| facebookLink | string | no | Custom Facebook review link |
| yelpLink | string | no | Custom Yelp review link |

### update_review_reply `WRITE`

Update a review reply

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| reviewId | string | **yes** | Review ID |
| locationId | string | no | Location ID |
| reply | string | **yes** | Updated reply text |

### update_review_widget_settings `WRITE`

Update review widget settings

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| enabled | boolean | no | Enable widget |
| minRating | number | no | Minimum rating to display |
| platforms | array\<string\> | no | Platforms to show |
| layout | string | no | Widget layout Values: `grid` \| `carousel` \| `list` |

### delete_review_reply `DELETE`

Delete a review reply

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| reviewId | string | **yes** | Review ID |
| locationId | string | no | Location ID |

## Saas

### enable_saas_location `READ`

Enable or disable SaaS features for a location

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| companyId | string | **yes** | Company/Agency ID |
| locationId | string | **yes** | Location ID |
| enabled | boolean | **yes** | Whether to enable (true) or disable (false) SaaS |

### get_saas_agency_plans `READ`

Get all SaaS plans available for the agency

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| companyId | string | **yes** | Company/Agency ID |

### get_saas_location `READ`

Get a specific sub-account/location by ID at the agency level

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| companyId | string | **yes** | Company/Agency ID |
| locationId | string | **yes** | Location ID to retrieve |

### get_saas_locations `READ`

Get all sub-accounts/locations for a SaaS agency. Requires agency-level access.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| companyId | string | **yes** | Company/Agency ID |
| skip | number | no | Number of records to skip |
| limit | number | no | Maximum number of locations to return (default: 10, max: 100) |
| order | string | no | Sort order Values: `asc` \| `desc` |
| isActive | boolean | no | Filter by active status |

### get_saas_plan `READ`

Get details of a specific SaaS plan by plan ID

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| companyId | string | **yes** | Company/Agency ID |
| planId | string | **yes** | SaaS plan ID to retrieve |

### get_saas_subscription `READ`

Get the SaaS subscription details for a specific location

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| companyId | string | **yes** | Company/Agency ID |
| locationId | string | **yes** | Location ID to retrieve subscription for |

### list_saas_locations_by_company `READ`

List all SaaS-enabled locations under a company

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| companyId | string | **yes** | Company/Agency ID |
| limit | number | no | Maximum records to return |
| skip | number | no | Number of records to skip |

### pause_saas_location `READ`

Pause a SaaS sub-account/location

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| companyId | string | **yes** | Company/Agency ID |
| locationId | string | **yes** | Location ID to pause |
| paused | boolean | **yes** | Whether to pause (true) or unpause (false) |

### bulk_disable_saas `WRITE`

Disable SaaS for multiple locations in bulk

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| companyId | string | **yes** | Company/Agency ID |
| locationIds | array\<string\> | **yes** | Array of location IDs to disable SaaS for |

### bulk_enable_saas `WRITE`

Enable SaaS for multiple locations in bulk

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| companyId | string | **yes** | Company/Agency ID |
| locationIds | array\<string\> | **yes** | Array of location IDs to enable SaaS for |
| planId | string | no | SaaS plan ID to assign |

### rebilling_update `WRITE`

Update rebilling configuration for agency

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| companyId | string | **yes** | Company/Agency ID |
| product | string | no | Product to configure rebilling for |
| markup | number | no | Markup percentage |
| enabled | boolean | no | Whether rebilling is enabled |

### update_saas_subscription `WRITE`

Update SaaS subscription settings for a location

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| companyId | string | **yes** | Company/Agency ID |
| locationId | string | **yes** | Location ID |
| subscriptionId | string | no | Subscription ID |
| status | string | no | Subscription status Values: `active` \| `paused` \| `cancelled` |

## Smartlists

### duplicate_smart_list `READ`

Duplicate/clone a smart list

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| smartListId | string | **yes** | Smart List ID to duplicate |
| locationId | string | no | Location ID |
| name | string | no | Name for the duplicate |

### get_smart_list `READ`

Get a specific smart list by ID

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| smartListId | string | **yes** | Smart List ID |
| locationId | string | no | Location ID |

### get_smart_list_contacts `READ`

Get contacts that match a smart list's criteria

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| smartListId | string | **yes** | Smart List ID |
| locationId | string | no | Location ID |
| limit | number | no | Max results |
| offset | number | no | Pagination offset |

### get_smart_list_count `READ`

Get the count of contacts matching a smart list

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| smartListId | string | **yes** | Smart List ID |
| locationId | string | no | Location ID |

### get_smart_lists `READ`

Get all smart lists (saved contact filters/segments)

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| limit | number | no | Max results |
| offset | number | no | Pagination offset |

### create_smart_list `WRITE`

Create a new smart list with filter criteria

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| name | string | **yes** | Smart list name |
| filters | array\<object\> | **yes** | Filter conditions |
| filterOperator | string | no | How to combine filters Values: `AND` \| `OR` |

### update_smart_list `WRITE`

Update a smart list

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| smartListId | string | **yes** | Smart List ID |
| locationId | string | no | Location ID |
| name | string | no | Smart list name |
| filters | array | no | Filter conditions |
| filterOperator | string | no | How to combine filters Values: `AND` \| `OR` |

### delete_smart_list `DELETE`

Delete a smart list

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| smartListId | string | **yes** | Smart List ID |
| locationId | string | no | Location ID |

## Snapshots

### get_latest_snapshot_push `READ`

Get the latest snapshot push for a location

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| snapshotId | string | **yes** | The snapshot ID |
| companyId | string | **yes** | Company/Agency ID |
| locationId | string | **yes** | Target location ID |

### get_snapshot `READ`

Get a specific snapshot by ID

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| snapshotId | string | **yes** | The snapshot ID to retrieve |
| companyId | string | **yes** | Company/Agency ID |

### get_snapshot_push_status `READ`

Check the status of a snapshot push operation

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| snapshotId | string | **yes** | The snapshot ID |
| companyId | string | **yes** | Company/Agency ID |
| pushId | string | no | The push operation ID |

### get_snapshots `READ`

Get all snapshots for a company/agency. Snapshots are templates that can be used to set up new locations.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| companyId | string | **yes** | Company/Agency ID |
| skip | number | no | Number of records to skip |
| limit | number | no | Maximum number of snapshots to return |

### push_snapshot_to_subaccounts `READ`

Push/deploy a snapshot to one or more sub-accounts

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| snapshotId | string | **yes** | The snapshot ID to push |
| companyId | string | **yes** | Company/Agency ID |
| locationIds | array\<string\> | **yes** | Array of location IDs to push the snapshot to |
| override | object | no | What to override vs skip |

### create_snapshot `WRITE`

Create a new snapshot from a location (backs up location settings)

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| companyId | string | **yes** | Company/Agency ID |
| locationId | string | **yes** | Source location ID to create snapshot from |
| name | string | **yes** | Name for the snapshot |
| description | string | no | Description of the snapshot |

### create_snapshot_share_link `WRITE`

Generate a shareable link for a snapshot so it can be distributed or imported by other agencies

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| snapshotId | string | **yes** | The snapshot ID to create a share link for |
| companyId | string | **yes** | Company/Agency ID |
| shareType | string | no | Type of share link to generate (link = temporary, permanent_link = never expires) Values: `link` \| `permanent_link` |
| expiryTime | string | no | Expiry date/time for the share link (ISO 8601 format, for non-permanent links) |

## Social Media

### get_platform_accounts `READ`

Get available accounts for a specific platform after OAuth

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| platform | string | **yes** | Social media platform Values: `google` \| `facebook` \| `instagram` \| `linkedin` \| `twitter` \| `tiktok` \| `tiktok-business` |
| accountId | string | **yes** | OAuth account ID |

### get_social_accounts `READ`

Get all connected social media accounts and groups

_No parameters._

### get_social_categories `READ`

Get social media post categories

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| searchText | string | no | Search for categories |
| limit | number | no | Number to return |
| skip | number | no | Number to skip |

### get_social_category `READ`

Get a specific social media category by ID

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| categoryId | string | **yes** | Category ID |

### get_social_media_statistics `READ`

Get social media posting statistics for accounts

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| accountIds | array\<string\> | no | Array of social media account IDs to get statistics for |
| fromDate | string | **yes** | Start date (ISO format) |
| toDate | string | **yes** | End date (ISO format) |
| postType | string | no | Type of post to get statistics for Values: `post` \| `story` \| `reel` |

### get_social_post `READ`

Get details of a specific social media post

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| postId | string | **yes** | Social media post ID |

### get_social_tags `READ`

Get social media post tags

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| searchText | string | no | Search for tags |
| limit | number | no | Number to return |
| skip | number | no | Number to skip |

### get_social_tags_by_ids `READ`

Get specific social media tags by their IDs

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| tagIds | array\<string\> | **yes** | Array of tag IDs |

### search_social_posts `READ`

Search and filter social media posts across all platforms

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| type | string | no | Filter posts by status Values: `recent` \| `all` \| `scheduled` \| `draft` \| `failed` \| `in_review` \| `published` \| `in_progress` \| `deleted` |
| accounts | string | no | Comma-separated account IDs to filter by |
| skip | number | no | Number of posts to skip |
| limit | number | no | Number of posts to return |
| fromDate | string | **yes** | Start date (ISO format) |
| toDate | string | **yes** | End date (ISO format) |
| includeUsers | boolean | no | Include user data in response |
| postType | string | no | Type of post to search for Values: `post` \| `story` \| `reel` |

### start_social_oauth `READ`

Start OAuth process for social media platform

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| platform | string | **yes** | Social media platform Values: `google` \| `facebook` \| `instagram` \| `linkedin` \| `twitter` \| `tiktok` \| `tiktok-business` |
| userId | string | **yes** | User ID initiating OAuth |
| page | string | no | Page context |
| reconnect | boolean | no | Whether this is a reconnection |

### create_social_post `WRITE`

Create a new social media post for multiple platforms

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| accountIds | array\<string\> | **yes** | Array of social media account IDs to post to |
| summary | string | **yes** | Post content/text |
| media | array\<object\> | no | Media attachments |
| status | string | no | Post status Values: `draft` \| `scheduled` \| `published` |
| scheduleDate | string | no | Schedule date for post (ISO format) |
| followUpComment | string | no | Follow-up comment |
| type | string | **yes** | Type of post Values: `post` \| `story` \| `reel` |
| tags | array\<string\> | no | Tag IDs to associate with post |
| categoryId | string | no | Category ID |
| userId | string | no | User ID creating the post |

### get_csv_upload_status `WRITE`

Get status of CSV uploads

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| skip | number | no | Number to skip |
| limit | number | no | Number to return |
| includeUsers | boolean | no | Include user data |
| userId | string | no | Filter by user ID |

### set_csv_accounts `WRITE`

Set accounts for CSV import processing

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| accountIds | array\<string\> | **yes** | Account IDs for CSV import |
| filePath | string | **yes** | CSV file path |
| rowsCount | number | **yes** | Number of rows to process |
| fileName | string | **yes** | CSV file name |
| approver | string | no | Approver user ID |
| userId | string | no | User ID |

### set_social_media_accounts `WRITE`

Set/configure social media accounts for a location

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | **yes** | The location ID to set social media accounts for |
| accountIds | array\<string\> | **yes** | Array of social media account IDs to associate with the location |
| companyId | string | no | Company/Agency ID |

### update_social_post `WRITE`

Update an existing social media post

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| postId | string | **yes** | Social media post ID |
| summary | string | no | Updated post content |
| status | string | no | Updated post status Values: `draft` \| `scheduled` \| `published` |
| scheduleDate | string | no | Updated schedule date |
| tags | array\<string\> | no | Updated tag IDs |

### upload_social_csv `WRITE`

Upload CSV file for bulk social media posts

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| file | string | **yes** | CSV file data (base64 or file path) |

### bulk_delete_social_posts `DELETE`

Delete multiple social media posts at once (max 50)

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| postIds | array\<string\> | **yes** | Array of post IDs to delete |

### delete_social_account `DELETE`

Delete a social media account connection

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| accountId | string | **yes** | Account ID to delete |
| companyId | string | no | Company ID |
| userId | string | no | User ID |

### delete_social_post `DELETE`

Delete a social media post

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| postId | string | **yes** | Social media post ID to delete |

## Stores

### ghl_get_available_shipping_rates `READ`

Get available shipping rates for an order based on destination and order details

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | GHL Location ID (optional, uses default if not provided) |
| country | string | **yes** | Destination country code |
| address | object | **yes** | Shipping address details |
| totalOrderAmount | number | **yes** | Total order amount |
| totalOrderWeight | number | **yes** | Total order weight |
| products | array\<object\> | **yes** | Array of products in the order |

### ghl_get_shipping_carrier `READ`

Get details of a specific shipping carrier

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | GHL Location ID (optional, uses default if not provided) |
| shippingCarrierId | string | **yes** | ID of the shipping carrier to retrieve |

### ghl_get_shipping_rate `READ`

Get details of a specific shipping rate

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | GHL Location ID (optional, uses default if not provided) |
| shippingZoneId | string | **yes** | ID of the shipping zone |
| shippingRateId | string | **yes** | ID of the shipping rate to retrieve |

### ghl_get_shipping_zone `READ`

Get details of a specific shipping zone

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | GHL Location ID (optional, uses default if not provided) |
| shippingZoneId | string | **yes** | ID of the shipping zone to retrieve |
| withShippingRate | boolean | no | Include shipping rates in response (optional) |

### ghl_get_store_setting `READ`

Get current store settings

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | GHL Location ID (optional, uses default if not provided) |

### ghl_list_shipping_carriers `READ`

List all shipping carriers for a location

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | GHL Location ID (optional, uses default if not provided) |

### ghl_list_shipping_rates `READ`

List all shipping rates for a specific shipping zone

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | GHL Location ID (optional, uses default if not provided) |
| shippingZoneId | string | **yes** | ID of the shipping zone |

### ghl_list_shipping_zones `READ`

List all shipping zones for a location

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | GHL Location ID (optional, uses default if not provided) |
| limit | number | no | Number of zones to return (optional) |
| offset | number | no | Number of zones to skip (optional) |
| withShippingRate | boolean | no | Include shipping rates in response (optional) |

### ghl_create_shipping_carrier `WRITE`

Create a new shipping carrier for dynamic rate calculation

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | GHL Location ID (optional, uses default if not provided) |
| name | string | **yes** | Name of the shipping carrier |
| callbackUrl | string | **yes** | Callback URL for carrier rate requests |
| services | array\<object\> | **yes** | Array of available services |

### ghl_create_shipping_rate `WRITE`

Create a new shipping rate for a shipping zone

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | GHL Location ID (optional, uses default if not provided) |
| shippingZoneId | string | **yes** | ID of the shipping zone |
| name | string | **yes** | Name of the shipping rate |
| currency | string | **yes** | Currency code (e.g., USD) |
| amount | number | **yes** | Shipping rate amount |
| conditionType | string | **yes** | Condition type for rate calculation |

### ghl_create_shipping_zone `WRITE`

Create a new shipping zone with specific countries and states

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | GHL Location ID (optional, uses default if not provided) |
| name | string | **yes** | Name of the shipping zone |
| countries | array\<object\> | **yes** | Array of countries with optional state restrictions |

### ghl_create_store_setting `WRITE`

Create or update store settings including shipping origin and notifications

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | GHL Location ID (optional, uses default if not provided) |
| shippingOrigin | object | **yes** | Shipping origin address details |

### ghl_update_shipping_carrier `WRITE`

Update a shipping carrier's properties

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | GHL Location ID (optional, uses default if not provided) |
| shippingCarrierId | string | **yes** | ID of the shipping carrier to update |

### ghl_update_shipping_rate `WRITE`

Update a shipping rate's properties

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | GHL Location ID (optional, uses default if not provided) |
| shippingZoneId | string | **yes** | ID of the shipping zone |
| shippingRateId | string | **yes** | ID of the shipping rate to update |

### ghl_update_shipping_zone `WRITE`

Update a shipping zone's name or countries

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | GHL Location ID (optional, uses default if not provided) |
| shippingZoneId | string | **yes** | ID of the shipping zone to update |
| name | string | no | New name for the shipping zone (optional) |
| countries | array\<object\> | no | Updated array of countries with optional state restrictions (optional) |

### ghl_delete_shipping_carrier `DELETE`

Delete a shipping carrier

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | GHL Location ID (optional, uses default if not provided) |
| shippingCarrierId | string | **yes** | ID of the shipping carrier to delete |

### ghl_delete_shipping_rate `DELETE`

Delete a shipping rate

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | GHL Location ID (optional, uses default if not provided) |
| shippingZoneId | string | **yes** | ID of the shipping zone |
| shippingRateId | string | **yes** | ID of the shipping rate to delete |

### ghl_delete_shipping_zone `DELETE`

Delete a shipping zone and all its associated shipping rates

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | GHL Location ID (optional, uses default if not provided) |
| shippingZoneId | string | **yes** | ID of the shipping zone to delete |

## Surveys

### ghl_get_survey `READ`

Get details for a specific survey by its ID.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID. Uses default if not provided. |
| surveyId | string | **yes** | The unique ID of the survey to retrieve |

### ghl_get_survey_stats `READ`

Get analytics and statistics for a survey including response counts, completion rate, and field-level breakdowns.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID. Uses default if not provided. |
| surveyId | string | **yes** | The survey ID to get statistics for |
| startDate | string | no | Start of the reporting period (YYYY-MM-DD) |
| endDate | string | no | End of the reporting period (YYYY-MM-DD) |

### ghl_get_survey_submission `READ`

Get a single survey submission by its ID.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID. Uses default if not provided. |
| surveyId | string | **yes** | The survey ID the submission belongs to |
| submissionId | string | **yes** | The unique ID of the submission to retrieve |

### ghl_get_survey_submissions `READ`

Retrieve survey submissions with advanced filtering and pagination. Get responses from contacts who have completed surveys.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | The location ID to get submissions for. If not provided, uses the default location from configuration. |
| page | number | no | Page number for pagination (default: 1) |
| limit | number | no | Number of submissions per page (max: 100, default: 20) |
| surveyId | string | no | Filter submissions by specific survey ID |
| q | string | no | Search by contact ID, name, email, or phone number |
| startAt | string | no | Start date for filtering submissions (YYYY-MM-DD format) |
| endAt | string | no | End date for filtering submissions (YYYY-MM-DD format) |

### ghl_get_surveys `READ`

Retrieve all surveys for a location. Surveys are used to collect information from contacts through forms and questionnaires.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | The location ID to get surveys for. If not provided, uses the default location from configuration. |
| skip | number | no | Number of records to skip for pagination (default: 0) |
| limit | number | no | Maximum number of surveys to return (max: 50, default: 10) |
| type | string | no | Filter surveys by type (e.g., "folder") |

### ghl_list_survey_submissions `READ`

Get all submissions for a specific survey with filtering and pagination.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID. Uses default if not provided. |
| surveyId | string | **yes** | The survey ID to get submissions for |
| page | number | no | Page number (default: 1) |
| limit | number | no | Submissions per page (max: 100, default: 20) |
| startAt | string | no | Start date filter (YYYY-MM-DD) |
| endAt | string | no | End date filter (YYYY-MM-DD) |

### ghl_create_survey `WRITE`

Create a new survey for a location. Returns the created survey with its ID.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | The location ID to create the survey in. Uses default if not provided. |
| name | string | **yes** | Display name for the survey |
| fields | array\<object\> | no | Array of survey field/question objects |
| thankYouMessage | string | no | Message shown after submission |

### ghl_update_survey `WRITE`

Update survey configuration including name, fields, and thank-you message.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID. Uses default if not provided. |
| surveyId | string | **yes** | The unique ID of the survey to update |
| name | string | no | New display name for the survey |
| fields | array\<object\> | no | Updated array of survey field/question objects |
| thankYouMessage | string | no | Updated message shown after submission |

### ghl_delete_survey `DELETE`

Permanently delete a survey and all its data. This action is irreversible.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID. Uses default if not provided. |
| surveyId | string | **yes** | The unique ID of the survey to delete |

## Templates

### get_sms_template `READ`

Get a specific SMS template

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| templateId | string | **yes** | SMS Template ID |
| locationId | string | no | Location ID |

### get_sms_templates `READ`

Get all SMS templates

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| limit | number | no | Max results |
| offset | number | no | Pagination offset |

### get_snippets `READ`

Get canned response snippets

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| type | string | no | Snippet type Values: `sms` \| `email` \| `all` |

### get_social_templates `READ`

Get social media post templates

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| limit | number | no | Max results |
| offset | number | no | Pagination offset |

### get_voicemail_templates `READ`

Get all voicemail drop templates

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |

### get_whatsapp_templates `READ`

Get WhatsApp message templates (must be pre-approved)

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| status | string | no | Template status Values: `approved` \| `pending` \| `rejected` \| `all` |

### create_sms_template `WRITE`

Create a new SMS template

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| name | string | **yes** | Template name |
| body | string | **yes** | SMS message body (can include merge fields like {{contact.first_name}}) |

### create_snippet `WRITE`

Create a canned response snippet

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| name | string | **yes** | Snippet name |
| shortcut | string | no | Keyboard shortcut (e.g., /thanks) |
| content | string | **yes** | Snippet content |
| type | string | no | Snippet type Values: `sms` \| `email` \| `both` |

### create_social_template `WRITE`

Create a social media post template

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| name | string | **yes** | Template name |
| content | string | **yes** | Post content |
| mediaUrls | array\<string\> | no | Media URLs |
| platforms | array\<string\> | no | Target platforms |

### create_voicemail_template `WRITE`

Create a voicemail drop template

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| name | string | **yes** | Template name |
| audioUrl | string | **yes** | URL to audio file |

### create_whatsapp_template `WRITE`

Create a WhatsApp template (submits for approval)

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| name | string | **yes** | Template name |
| category | string | **yes** | Template category Values: `marketing` \| `utility` \| `authentication` |
| language | string | **yes** | Language code (e.g., en_US) |
| components | array | **yes** | Template components (header, body, footer, buttons) |

### update_sms_template `WRITE`

Update an SMS template

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| templateId | string | **yes** | SMS Template ID |
| locationId | string | no | Location ID |
| name | string | no | Template name |
| body | string | no | SMS message body |

### update_snippet `WRITE`

Update a snippet

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| snippetId | string | **yes** | Snippet ID |
| locationId | string | no | Location ID |
| name | string | no | Snippet name |
| shortcut | string | no | Keyboard shortcut |
| content | string | no | Snippet content |

### delete_sms_template `DELETE`

Delete an SMS template

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| templateId | string | **yes** | SMS Template ID |
| locationId | string | no | Location ID |

### delete_snippet `DELETE`

Delete a snippet

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| snippetId | string | **yes** | Snippet ID |
| locationId | string | no | Location ID |

### delete_social_template `DELETE`

Delete a social template

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| templateId | string | **yes** | Template ID |
| locationId | string | no | Location ID |

### delete_voicemail_template `DELETE`

Delete a voicemail template

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| templateId | string | **yes** | Template ID |
| locationId | string | no | Location ID |

### delete_whatsapp_template `DELETE`

Delete a WhatsApp template

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| templateId | string | **yes** | Template ID |
| locationId | string | no | Location ID |

## Triggers

### disable_trigger `READ`

Disable/deactivate a trigger

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| triggerId | string | **yes** | Trigger ID |
| locationId | string | no | Location ID |

### duplicate_trigger `READ`

Duplicate/clone a trigger

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| triggerId | string | **yes** | Trigger ID to duplicate |
| locationId | string | no | Location ID |
| name | string | no | Name for the duplicate |

### enable_trigger `READ`

Enable/activate a trigger

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| triggerId | string | **yes** | Trigger ID |
| locationId | string | no | Location ID |

### get_trigger `READ`

Get a specific trigger by ID

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| triggerId | string | **yes** | Trigger ID |
| locationId | string | no | Location ID |

### get_trigger_logs `READ`

Get execution logs for a trigger

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| triggerId | string | **yes** | Trigger ID |
| locationId | string | no | Location ID |
| status | string | no | Execution status filter Values: `success` \| `failed` \| `all` |
| startDate | string | no | Start date |
| endDate | string | no | End date |
| limit | number | no | Max results |
| offset | number | no | Pagination offset |

### get_trigger_types `READ`

Get all available trigger types and their configurations

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |

### get_triggers `READ`

Get all automation triggers for a location

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| type | string | no | Filter by trigger type |
| status | string | no | Status filter Values: `active` \| `inactive` \| `all` |
| limit | number | no | Max results |
| offset | number | no | Pagination offset |

### test_trigger `READ`

Test a trigger with sample data

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| triggerId | string | **yes** | Trigger ID |
| locationId | string | no | Location ID |
| testData | object | no | Sample data to test with |

### create_trigger `WRITE`

Create a new automation trigger

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| name | string | **yes** | Trigger name |
| type | string | **yes** | Trigger type/event Values: `contact_created` \| `contact_tag_added` \| `contact_tag_removed` \| `form_submitted` \| `appointment_booked` \| `appointment_cancelled` \| `opportunity_created` \| `opportunity_status_changed` \| `opportunity_stage_changed` \| `invoice_paid` \| `order_placed` \| `call_completed` \| `email_opened` \| `email_clicked` \| `sms_received` \| `webhook` |
| filters | array\<object\> | no | Conditions that must be met |
| actions | array\<object\> | no | Actions to perform when triggered |

### update_trigger `WRITE`

Update an existing trigger

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| triggerId | string | **yes** | Trigger ID |
| locationId | string | no | Location ID |
| name | string | no | Trigger name |
| filters | array | no | Filter conditions |
| actions | array | no | Actions to perform |
| status | string | no | Trigger status Values: `active` \| `inactive` |

### delete_trigger `DELETE`

Delete a trigger

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| triggerId | string | **yes** | Trigger ID |
| locationId | string | no | Location ID |

## Users

### filter_users_by_email `READ`

Filter/look up users by email address within a location

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| email | string | **yes** | Email address to search for |
| locationId | string | no | Location ID to filter within (uses default if not provided) |

### get_user `READ`

Get a specific user by their ID

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| userId | string | **yes** | The user ID to retrieve |
| locationId | string | no | Location ID (uses default if not provided) |

### get_users `READ`

Get all users/team members for a location. Returns team members with their roles and permissions.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID (uses default if not provided) |
| skip | number | no | Number of records to skip for pagination |
| limit | number | no | Maximum number of users to return (default: 25, max: 100) |
| type | string | no | Filter by user type |
| role | string | no | Filter by role (e.g., "admin", "user") |
| ids | string | no | Comma-separated list of user IDs to filter |
| sort | string | no | Sort field |
| sortDirection | string | no | Sort direction Values: `asc` \| `desc` |

### search_users `READ`

Search for users across a company/agency by email, name, or other criteria

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| companyId | string | no | Company ID to search within |
| query | string | no | Search query string |
| skip | number | no | Records to skip |
| limit | number | no | Max records to return |

### create_user `WRITE`

Create a new user/team member for a location

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID (uses default if not provided) |
| firstName | string | **yes** | User first name |
| lastName | string | **yes** | User last name |
| email | string | **yes** | User email address |
| phone | string | no | User phone number |
| type | string | no | User type (e.g., "account") |
| role | string | no | User role (e.g., "admin", "user") |
| permissions | object | no | User permissions object |
| scopes | array\<string\> | no | OAuth scopes for the user |
| scopesAssignedToOnly | array\<string\> | no | Scopes only assigned to this user |

### update_user `WRITE`

Update an existing user/team member

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| userId | string | **yes** | The user ID to update |
| locationId | string | no | Location ID (uses default if not provided) |
| firstName | string | no | User first name |
| lastName | string | no | User last name |
| email | string | no | User email address |
| phone | string | no | User phone number |
| type | string | no | User type |
| role | string | no | User role |
| permissions | object | no | User permissions object |

### delete_user `DELETE`

Delete a user/team member from a location

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| userId | string | **yes** | The user ID to delete |
| locationId | string | no | Location ID (uses default if not provided) |

## Voice Ai

### get_voice_ai_action `READ`

Retrieve details of a specific voice AI agent action.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| actionId | string | **yes** | Unique action identifier |
| locationId | string | no | Location ID (uses default if not provided) |

### get_voice_ai_agent `READ`

Retrieve detailed configuration and settings for a specific voice AI agent.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| agentId | string | **yes** | Unique agent identifier |
| locationId | string | no | Location ID (uses default if not provided) |

### get_voice_ai_call_log `READ`

Retrieve details of a specific voice AI call log entry.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| callId | string | **yes** | Unique call log identifier |
| locationId | string | no | Location ID (uses default if not provided) |

### list_voice_ai_agents `READ`

Retrieve a paginated list of voice AI agents for a location.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID (uses default if not provided) |
| page | number | no | Page number starting from 1 (default: 1) |
| pageSize | number | no | Number of items per page, max 50 (default: 10) |
| query | string | no | Search query to filter agents by name |

### list_voice_ai_call_logs `READ`

Retrieve a paginated list of voice AI call logs for a location.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID (uses default if not provided) |
| agentId | string | no | Filter call logs by agent ID |
| contactId | string | no | Filter call logs by contact ID |
| callType | string | no | Filter by call type (e.g., inbound, outbound) |
| startDate | string | no | Start date filter (ISO 8601 format) |
| endDate | string | no | End date filter (ISO 8601 format) |
| actionType | string | no | Filter by action type taken during call |
| sortBy | string | no | Field to sort results by |
| sort | string | no | Sort direction: asc or desc |
| page | number | no | Page number starting from 1 (default: 1) |
| pageSize | number | no | Number of items per page (default: 10) |

### create_voice_ai_action `WRITE`

Create a new action for a voice AI agent. Actions define specific behaviors and capabilities during calls.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| agentId | string | **yes** | ID of the agent this action belongs to |
| locationId | string | no | Location ID (uses default if not provided) |
| actionType | string | **yes** | Type of action to create (e.g., transfer_call, book_appointment) |
| name | string | **yes** | Name of the action |
| actionParameters | object | **yes** | Parameters specific to the action type |

### create_voice_ai_agent `WRITE`

Create a new voice AI agent configuration and settings.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID (uses default if not provided) |
| agentName | string | no | Name of the voice AI agent |
| businessName | string | no | Business name associated with the agent |
| welcomeMessage | string | no | Welcome message spoken at the start of a call |
| agentPrompt | string | no | System prompt defining agent behavior |
| voiceId | string | no | Voice ID to use for text-to-speech |
| language | string | no | Language code for the agent (e.g., en-US) |
| patienceLevel | string | no | Agent patience level setting |
| maxCallDuration | number | no | Maximum call duration in seconds |
| inboundNumber | string | no | Inbound phone number for the agent |
| timezone | string | no | Timezone for agent working hours (e.g., America/New_York) |

### update_voice_ai_action `WRITE`

Update an existing voice AI agent action.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| actionId | string | **yes** | Unique action identifier |
| locationId | string | no | Location ID (uses default if not provided) |
| agentId | string | no | ID of the agent this action belongs to |
| actionType | string | no | Type of action |
| name | string | no | Name of the action |
| actionParameters | object | no | Parameters specific to the action type |

### update_voice_ai_agent `WRITE`

Partially update an existing voice AI agent configuration.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| agentId | string | **yes** | Unique agent identifier |
| locationId | string | no | Location ID (uses default if not provided) |
| agentName | string | no | Name of the voice AI agent |
| businessName | string | no | Business name associated with the agent |
| welcomeMessage | string | no | Welcome message spoken at the start of a call |
| agentPrompt | string | no | System prompt defining agent behavior |
| voiceId | string | no | Voice ID to use for text-to-speech |
| language | string | no | Language code for the agent (e.g., en-US) |
| maxCallDuration | number | no | Maximum call duration in seconds |
| timezone | string | no | Timezone for agent working hours |

### delete_voice_ai_action `DELETE`

Delete a voice AI agent action.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| actionId | string | **yes** | Unique action identifier |
| locationId | string | no | Location ID (uses default if not provided) |

### delete_voice_ai_agent `DELETE`

Delete a voice AI agent and all its configurations.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| agentId | string | **yes** | Unique agent identifier |
| locationId | string | no | Location ID (uses default if not provided) |

## Webhooks

### get_webhook `READ`

Get a specific webhook by ID

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| webhookId | string | **yes** | Webhook ID |
| locationId | string | no | Location ID |

### get_webhook_events `READ`

Get list of all available webhook event types

_No parameters._

### get_webhook_logs `READ`

Get webhook delivery logs/history

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| webhookId | string | **yes** | Webhook ID |
| locationId | string | no | Location ID |
| limit | number | no | Max results |
| offset | number | no | Pagination offset |
| status | string | no | Filter by delivery status Values: `success` \| `failed` \| `pending` |

### get_webhooks `READ`

Get all webhooks for a location

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |

### retry_webhook `READ`

Retry a failed webhook delivery

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| webhookId | string | **yes** | Webhook ID |
| logId | string | **yes** | Webhook log entry ID to retry |
| locationId | string | no | Location ID |

### test_webhook `READ`

Send a test event to a webhook

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| webhookId | string | **yes** | Webhook ID |
| locationId | string | no | Location ID |
| eventType | string | **yes** | Event type to test |

### create_webhook `WRITE`

Create a new webhook subscription

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID |
| name | string | **yes** | Webhook name |
| url | string | **yes** | Webhook URL to receive events |
| events | array\<string\> | **yes** | Events to subscribe to (e.g., contact.created, opportunity.updated) |
| secret | string | no | Secret key for webhook signature verification |

### update_webhook `WRITE`

Update a webhook

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| webhookId | string | **yes** | Webhook ID |
| locationId | string | no | Location ID |
| name | string | no | Webhook name |
| url | string | no | Webhook URL |
| events | array\<string\> | no | Events to subscribe to |
| active | boolean | no | Whether webhook is active |

### delete_webhook `DELETE`

Delete a webhook

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| webhookId | string | **yes** | Webhook ID |
| locationId | string | no | Location ID |

## Workflows

### ghl_get_workflow `READ`

Get full details for a specific workflow by ID, including all triggers, actions/steps, and configuration.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID. Uses default if not provided. |
| workflowId | string | **yes** | The unique ID of the workflow to retrieve |

### ghl_get_workflow_executions `READ`

Get execution history for a workflow showing which contacts have run through it, their current step, and completion status.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID. Uses default if not provided. |
| workflowId | string | **yes** | The unique ID of the workflow to get executions for |
| contactId | string | no | Filter executions by a specific contact ID |
| status | string | no | Filter by execution status Values: `active` \| `completed` \| `cancelled` \| `failed` |
| startDate | string | no | Start date filter (YYYY-MM-DD) |
| endDate | string | no | End date filter (YYYY-MM-DD) |
| limit | number | no | Maximum number of execution records to return (default: 20) |
| skip | number | no | Records to skip for pagination |

### ghl_get_workflow_full `READ`

Get a single workflow with full detail: all action nodes (workflowData.templates), triggers, version, status, and metadata. Use this to inspect workflow structure before updating.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| workflowId | string | **yes** | The workflow ID to retrieve |

### ghl_get_workflows `READ`

Retrieve all workflows for a location. Workflows represent automation sequences that can be triggered by various events in the system.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | The location ID to get workflows for. If not provided, uses the default location from configuration. |

### ghl_list_workflows `READ`

List all workflows in a location with status, trigger type, and step counts. Alias for ghl_get_workflows with additional filter options.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID. Uses default if not provided. |
| status | string | no | Filter workflows by status Values: `active` \| `inactive` \| `draft` |
| limit | number | no | Maximum number of workflows to return (default: 50) |
| skip | number | no | Number of records to skip for pagination |

### ghl_list_workflows_full `READ`

List all workflows with names, IDs, and statuses via the internal API. Returns more data than the public API including workflow counts and status breakdown. Supports pagination via limit/offset.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| limit | number | no | Max workflows to return (default 50) |
| offset | number | no | Pagination offset (default 0) |
| sortBy | string | no | Sort field: name, createdAt, updatedAt (default name) |
| sortOrder | string | no | Sort order (default asc) Values: `asc` \| `desc` |

### ghl_clone_workflow `WRITE`

Duplicate an existing workflow with a new name. Clones all actions and triggers with remapped IDs. The clone starts as a draft. Returns the new workflow with its ID and full action data.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| workflowId | string | **yes** | The source workflow ID to clone |
| newName | string | no | Name for the cloned workflow (default: "{original name} (copy)") |

### ghl_create_workflow `WRITE`

Create a new GHL workflow with optional trigger and actions. Actions are chained automatically via next/parentKey unless you provide explicit linkage (for branching). Returns the created workflow with ID, status, and action details. Trigger types: contact_tag, contact_created, form_submission, customer_reply, appointment, inbound_webhook, payment_received, etc. Action types: sms, email, add_contact_tag, wait, if_else, webhook, create_opportunity, custom_code, etc.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| name | string | **yes** | Workflow name (required) |
| trigger | object | no | Optional trigger. Properties: type (string, required), name (string), data (object with trigger-specific config like tagName, tagEvent) |
| actions | array\<object\> | no | Array of action objects. Each has: type (string, required), name (string, required), attributes (object). For branching, set id, next (array of IDs), parentKey, cat, nodeType. |
| publish | boolean | no | If true, publish the workflow immediately after creation (default: draft) |

### ghl_publish_workflow `WRITE`

Publish a draft workflow, making it active and able to be triggered. Equivalent to flipping status from "draft" to "published". Returns the updated workflow state.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| workflowId | string | **yes** | The workflow ID to publish |

### ghl_trigger_workflow `WRITE`

Manually trigger a workflow for a specific contact. Useful for testing workflows or manually enrolling contacts.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID. Uses default if not provided. |
| workflowId | string | **yes** | The unique ID of the workflow to trigger |
| contactId | string | **yes** | The ID of the contact to enroll in the workflow |

### ghl_update_workflow_actions `WRITE`

Add or replace actions (and optionally triggers) in an existing workflow. Automatically handles version tracking (GETs current version before PUT). Actions are auto-chained unless explicit next/parentKey is provided for branching. Can also update workflow name and status.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| workflowId | string | **yes** | The workflow ID to update |
| name | string | no | New workflow name (optional) |
| actions | array\<object\> | no | New actions array — replaces all existing actions |
| triggers | array\<object\> | no | New triggers — replaces existing triggers |
| status | string | no | Set workflow status Values: `draft` \| `published` |

### ghl_update_workflow_status `WRITE`

Enable or disable a workflow. Active workflows process contacts; inactive ones are paused.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID. Uses default if not provided. |
| workflowId | string | **yes** | The unique ID of the workflow to update |
| status | string | **yes** | New status for the workflow Values: `active` \| `inactive` |

### ghl_delete_workflow `DELETE`

Permanently delete a workflow. All contacts currently in the workflow will be removed from it.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| locationId | string | no | Location ID. Uses default if not provided. |
| workflowId | string | **yes** | The unique ID of the workflow to delete |

### ghl_delete_workflow `DELETE`

Permanently delete a workflow by ID. This cannot be undone. Returns confirmation of deletion.

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| workflowId | string | **yes** | The workflow ID to delete |
