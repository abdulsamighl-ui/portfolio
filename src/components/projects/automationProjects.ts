import type { Project } from "./data";

const para = (s: string) => s;

export const AUTOMATION_PROJECTS: Project[] = [
  {
    id: "hcp-sync",
    title: "HouseCall Pro Customer Sync with Branching Built in n8n",
    cardTitle: "HouseCall Pro Customer Sync (n8n)",
    category: "automation",
    tag: "n8n workflow",
    role: "Automation Developer: n8n workflow, custom JavaScript, conditional branching, API integration",
    description: [
      para(
        "Leads coming through this business's webhook needed to reach HouseCall Pro without creating duplicate customer records every time someone submitted twice.",
      ),
      para(
        "I built a workflow in n8n that parses the incoming webhook with custom JavaScript, searches HouseCall Pro for an existing customer, then branches: if found, it updates that record, if not, it creates a new one, each path formatted with its own JavaScript step before hitting the API.",
      ),
      para("No duplicate customers, whether the lead is new or returning."),
    ],
    skills: [
      "n8n",
      "API Integration",
      "JavaScript",
      "CRM Automation",
      "Automated Workflow",
    ],
    image:
      "https://assets.cdn.filesafe.space/iOGsmaqdn9RhVgUvj3fD/media/6a938a830914f1121513023e.png",
    modalImageFit: "contain",
  },
  {
    id: "db-ghl-sync",
    title: "Scheduled Database to GoHighLevel Sync Built with n8n",
    cardTitle: "Scheduled Database to GHL Sync (n8n)",
    category: "automation",
    tag: "n8n workflow",
    role: "Automation Developer: scheduled n8n workflow, SQL query, custom JavaScript, API integration",
    description: [
      para(
        "This business had customer data sitting in a separate database that never made it into GoHighLevel unless someone exported and uploaded it manually.",
      ),
      para(
        "I built a scheduled workflow in n8n that runs automatically on a timer, pulls fresh records with a SQL query, reshapes the data with custom JavaScript, and pushes it straight into GoHighLevel through the API. No manual exports, no missed updates.",
      ),
      para(
        "The CRM now stays current on its own, on a schedule, with zero manual work.",
      ),
    ],
    skills: [
      "n8n",
      "API Integration",
      "JavaScript",
      "CRM Automation",
      "Automated Workflow",
    ],
    image:
      "https://assets.cdn.filesafe.space/iOGsmaqdn9RhVgUvj3fD/media/6a938a8a934a62aec888a7aa.png",
    modalImageFit: "contain",
  },
  {
    id: "meta-capi",
    title: "Meta Conversions API Pipeline Built with n8n and JavaScript",
    cardTitle: "Meta Conversions API Pipeline (n8n)",
    category: "automation",
    tag: "n8n workflow",
    role: "Automation Developer: n8n workflow, custom JavaScript event formatting, Meta CAPI integration",
    description: [
      para(
        "Browser-based Meta Pixel tracking alone misses conversions to ad blockers, iOS privacy settings, and browser restrictions, leaving real sales invisible to ad platforms.",
      ),
      para(
        "I built a server-side pipeline in n8n that receives events through a webhook, uses custom JavaScript to format each event into Meta's required structure, hashes the customer data, and sends it directly to the Facebook Graph API as a server-side event.",
      ),
      para(
        "Conversions ad platforms can actually see, no matter what the browser blocks.",
      ),
    ],
    skills: [
      "n8n",
      "API Integration",
      "JavaScript",
      "Tracking Pixel",
      "CRM Automation",
    ],
    image:
      "https://assets.cdn.filesafe.space/iOGsmaqdn9RhVgUvj3fD/media/6a938a83a90361de8b4501e3.png",
    modalImageFit: "contain",
  },
  {
    id: "ghl-ads-offline",
    title: "GoHighLevel Pipeline Stage to Google Ads Offline Conversions",
    cardTitle: "GHL Pipeline to Google Ads Offline Conversions",
    category: "automation",
    tag: "Zapier",
    role: "Automation Developer: Zapier integration, pipeline-triggered offline conversion tracking",
    description: [
      para(
        "This business ran Google Ads but had no way to tell which ad spend actually led to closed deals. Every conversion Google saw was a form fill, not a sale.",
      ),
      para(
        "I built a Zap that triggers whenever a GoHighLevel opportunity moves to a specific pipeline stage, filters for the stages that matter, and sends that event to Google Ads as an offline conversion. Ad spend now gets credited against real sales outcomes instead of surface-level leads.",
      ),
      para("Google Ads optimizes toward closed deals, not just form fills."),
    ],
    skills: [
      "Google Ads",
      "HighLevel",
      "Zapier",
      "CRM Automation",
      "Lead Generation",
    ],
    image:
      "https://assets.cdn.filesafe.space/iOGsmaqdn9RhVgUvj3fD/media/6a938a83a90361de8b4501ae.png",
    modalImageFit: "contain",
  },
  {
    id: "dripjobs-ghl",
    title: "DripJobs to GoHighLevel Lead Sync via Zapier",
    cardTitle: "DripJobs to GHL Lead Sync",
    category: "automation",
    tag: "Zapier",
    role: "Automation Developer: Zapier integration, lead filtering, pipeline and stage mapping",
    description: [
      para(
        "This business ran DripJobs for lead capture but leads sat there disconnected from their GoHighLevel sales pipeline, with no automatic next step.",
      ),
      para(
        "I built a Zap that catches every new DripJobs lead, filters out incomplete submissions, and pushes clean leads into GoHighLevel using Add/Update Opportunity. Each lead lands directly in the correct pipeline and stage, tagged by source, with city, state, and zip mapped automatically, no manual contact matching required.",
      ),
      para("Every DripJobs lead becomes a tracked opportunity, instantly."),
    ],
    skills: [
      "HighLevel",
      "Lead Generation",
      "CRM Automation",
      "API Integration",
      "Zapier",
    ],
    image:
      "https://assets.cdn.filesafe.space/iOGsmaqdn9RhVgUvj3fD/media/6a938a83a90361de8b4501b6.png",
    modalImageFit: "contain",
  },
  {
    id: "servicetitan-sync",
    title: "ServiceTitan Customer Sync with Branching Logic via Zapier",
    cardTitle: "ServiceTitan Customer Sync (Zapier)",
    category: "automation",
    tag: "Zapier",
    role: "Automation Developer: 11-step Zap, conditional path branching, custom JavaScript, API mapping",
    description: [
      para(
        "This business needed leads to reach ServiceTitan without creating duplicate customer records every time the same person submitted a form twice.",
      ),
      para(
        "I built an 11-step Zap that searches ServiceTitan for an existing customer before doing anything else. If the customer already exists, it adds a note to their record. If not, it creates a new customer, runs a custom JavaScript step to process the data, then logs a note. A Filter and Formatter step upstream keep only clean, valid submissions moving through the flow.",
      ),
      para(
        "No duplicate customers, and every submission lands in the right place.",
      ),
    ],
    skills: [
      "Zapier",
      "API Integration",
      "CRM Automation",
      "JavaScript",
      "Automation",
    ],
    image:
      "https://assets.cdn.filesafe.space/iOGsmaqdn9RhVgUvj3fD/media/6a938a8a0914f112151302b0.png",
    modalImageFit: "contain",
  },
  {
    id: "ghl-hcp-sync",
    title: "GoHighLevel to HouseCall Pro Customer Sync via Zapier",
    cardTitle: "GHL to HouseCall Pro Customer Sync",
    category: "automation",
    tag: "Zapier",
    role: "Automation Developer: Zapier integration, webhook parsing, HouseCall Pro API mapping",
    description: [
      para(
        "New leads in GoHighLevel needed to become customers in HouseCall Pro automatically, tags, service address, and all, without anyone re-typing the same details twice.",
      ),
      para(
        "I built a Zap connecting a GoHighLevel webhook to HouseCall Pro. A Formatter step cleans and restructures the incoming data, then a Create Customer action pushes it into HouseCall Pro with tags and address details mapped correctly.",
      ),
      para(
        "A new lead in GHL becomes a ready customer record in HouseCall Pro, automatically.",
      ),
    ],
    skills: [
      "HighLevel",
      "Zapier",
      "API Integration",
      "CRM Automation",
      "Automation Anywhere",
    ],
    image:
      "https://assets.cdn.filesafe.space/iOGsmaqdn9RhVgUvj3fD/media/6a938a87a90361de8b45021b.png",
    modalImageFit: "contain",
  },
  {
    id: "a2p-10dlc",
    title: "A2P 10DLC Compliance Setup for SMS Delivery in GoHighLevel",
    cardTitle: "A2P 10DLC Compliance Setup",
    category: "automation",
    tag: "GoHighLevel",
    role: "GoHighLevel Developer: A2P brand and campaign registration, SMS deliverability setup",
    description: [
      para(
        "This client's SMS messages were at risk of failing outright. US carriers block unregistered business texting under A2P 10DLC rules, and most GHL accounts never get properly registered.",
      ),
      para(
        "I completed the full A2P registration in GoHighLevel: verifying the business brand, registering the messaging campaign, and confirming approval through the Trust Center. With both brand and campaign verified, every SMS and MMS sent from the account now reaches US numbers reliably instead of getting silently filtered by carriers.",
      ),
      para("Messages that actually arrive, not messages that vanish."),
    ],
    skills: [
      "HighLevel",
      "CRM Automation",
      "Compliance",
      "Email Deliverability",
      "Marketing Consulting",
    ],
    image:
      "https://assets.cdn.filesafe.space/iOGsmaqdn9RhVgUvj3fD/media/6a938a8303b6820c462a40c8.png",
    modalImageFit: "contain",
  },
  {
    id: "voice-ai-setup",
    title: "Voice AI Phone Receptionist Setup in GoHighLevel",
    cardTitle: "Voice AI Phone Receptionist Setup",
    category: "automation",
    tag: "GoHighLevel",
    role: "GoHighLevel Developer: voice agent configuration, call workflows, availability and routing",
    description: [
      para(
        "This business needed an AI agent that could actually answer the phone, not just chat, and know when to hand a caller off to a real person.",
      ),
      para(
        "I configured a GoHighLevel Voice AI agent with a custom persona and prompt, connected to a dedicated knowledge base for accurate answers. I built call-triggered workflow actions, so the agent sends an appointment link mid-call when a caller wants to book, and set up call transfer rules, working hours, and phone number routing so calls land correctly around the clock.",
      ),
      para("Callers get answered instantly, and routed correctly every time."),
    ],
    skills: [
      "HighLevel",
      "Conversational AI",
      "CRM Automation",
      "Chatbot Development",
      "Customer Support",
    ],
    image:
      "https://assets.cdn.filesafe.space/iOGsmaqdn9RhVgUvj3fD/media/6a938a92934a62aec888a858.png",
    modalImageFit: "contain",
  },
  {
    id: "ai-chatbot-setup",
    title: "AI Chatbot Setup with Custom Training in GoHighLevel",
    cardTitle: "AI Chatbot Setup (GoHighLevel)",
    category: "automation",
    tag: "GoHighLevel",
    role: "GoHighLevel Developer: bot configuration, knowledge base training, tone and goal setup",
    description: [
      para(
        "This business needed a chatbot that felt genuinely appropriate for a sensitive, emotional audience, not a generic customer service script.",
      ),
      para(
        "I configured a GoHighLevel AI bot across SMS, Instagram, Facebook, WhatsApp, and live chat, writing custom conversation goals covering tone, response length, and specific do-not-say rules for a business dealing with grief and memory. I trained the bot on a dedicated knowledge base with FAQs and reference content, then set auto-pilot behavior including response timing and human handover.",
      ),
      para("A chatbot that knows exactly how, and how much, to say."),
    ],
    skills: [
      "HighLevel",
      "Conversational AI",
      "Chatbot Development",
      "Customer Support",
      "Prompt Engineering",
    ],
    image:
      "https://assets.cdn.filesafe.space/iOGsmaqdn9RhVgUvj3fD/media/6a938a83934a62aec888a732.png",
    modalImageFit: "contain",
  },
  {
    id: "hcp-ghl-two-way",
    title: "HouseCall Pro to GoHighLevel Two-Way Sync Automation System",
    cardTitle: "HouseCall Pro to GHL Two-Way Sync",
    category: "automation",
    tag: "Automated Workflow",
    role: "Automation Developer: multi-branch webhook workflow, opportunity sync, tag-based routing logic",
    description: [
      para(
        "This business ran HouseCall Pro for job management and GoHighLevel for CRM, but the two systems never talked to each other. Every job update meant manual re-entry on both sides.",
      ),
      para(
        "I built a two-way sync using inbound webhooks, with conditional branches routing each event by type and creating or updating opportunities, contacts, and tags automatically across dozens of parallel paths. One job update in either system now reflects everywhere else.",
      ),
      para("No more double entry, no more mismatched records."),
    ],
    skills: [
      "HighLevel",
      "API Integration",
      "CRM Automation",
      "Automated Workflow",
      "API Development",
    ],
    image:
      "https://assets.cdn.filesafe.space/iOGsmaqdn9RhVgUvj3fD/media/6a938a8b934a62aec888a7e0.png",
    modalImageFit: "contain",
  },
  {
    id: "typeform-ghl-api",
    title: "Custom Typeform-to-GHL API Integration with Webhook Automation",
    cardTitle: "Typeform to GHL API Integration",
    category: "automation",
    tag: "GoHighLevel",
    role: "Automation Developer: webhook setup, custom JavaScript code, conditional branching, CRM sync",
    description: [
      para(
        "A client was collecting leads through Typeform, but the submissions were sitting in Typeform's dashboard instead of the CRM, with no automatic follow-up.",
      ),
      para(
        "I built a custom webhook integration in GoHighLevel that captures every Typeform submission in real time. A custom JavaScript action parses the raw form response, matches each answer to its original question by field ID, and extracts clean, structured data like name and phone number.",
      ),
      para(
        "Every form submission becomes a structured, followed-up contact automatically.",
      ),
    ],
    skills: [
      "HighLevel",
      "API Integration",
      "JavaScript",
      "CRM Automation",
      "Web API",
    ],
    image:
      "https://assets.cdn.filesafe.space/iOGsmaqdn9RhVgUvj3fD/media/6a938a8f0914f112151302e8.png",
    modalImageFit: "contain",
  },
  {
    id: "nurture-sequence",
    title: "Appointment & Sales Nurture Sequence System in GoHighLevel",
    cardTitle: "Nurture Sequence System (GoHighLevel)",
    category: "automation",
    tag: "GoHighLevel",
    role: "GoHighLevel Developer: multi-stage nurture workflows, no-show recovery, onboarding automation",
    description: [
      para(
        "This client was losing bookings after the calendar invite. No-shows got no follow-up, and new sales had no structured onboarding path.",
      ),
      para(
        "I built nurture workflows in GoHighLevel covering the full lifecycle: appointment confirmation and reminders, no-show recovery for sales and onboarding calls, and an onboarding sequence once a sale closes. Each workflow triggers off specific events like a Zoom link click, so contacts get only what's relevant to their stage.",
      ),
      para("No-shows and drop-offs now get worked automatically."),
    ],
    skills: [
      "HighLevel",
      "CRM Automation",
      "Email Marketing",
      "Appointment Setting",
      "Lead-Nurturing Email",
    ],
    image:
      "https://assets.cdn.filesafe.space/iOGsmaqdn9RhVgUvj3fD/media/6a938a8ac71cb92aefeb5703.png",
    modalImageFit: "contain",
  },
  {
    id: "gtm-dedup",
    title: "GTM Pixel Deduplication Setup with Custom Event ID Generation",
    cardTitle: "GTM Pixel Deduplication Setup",
    category: "automation",
    tag: "GTM",
    role: "Tracking Specialist: Google Tag Manager configuration, custom JavaScript variables, event deduplication",
    description: [
      para(
        "This client's Meta Pixel and Conversions API were firing the same events independently, browser and server, so the same purchase or lead was being counted twice on Meta's side.",
      ),
      para(
        "I built a custom JavaScript variable in Google Tag Manager that generates a unique event ID per event, storing and reusing it from a cookie so the same ID gets attached to both the browser pixel event and the matching server-side CAPI event. That shared ID is passed into the Meta tags so Meta can match and merge the two into a single event.",
      ),
      para(
        "Purchase, Lead, and PageView events now fire once each, with zero duplicates.",
      ),
    ],
    skills: [
      "Google Tag Manager",
      "JavaScript",
      "Tracking Pixel",
      "API Integration",
      "CRM Automation",
    ],
    image:
      "https://assets.cdn.filesafe.space/iOGsmaqdn9RhVgUvj3fD/media/6a94a30b0914f112152524ce.png",
    modalImageFit: "contain",
  },
  {
    id: "ga4-tracking",
    title: "GA4 Event Tracking Implementation for Lead and Form Activity",
    cardTitle: "GA4 Tracking Implementation",
    category: "automation",
    tag: "GA4",
    role: "Tracking Specialist: GA4 event configuration, key event setup, cross-form tracking",
    description: [
      para(
        "This client had Google Analytics installed but almost no visibility into what visitors actually did on the site, which forms converted, which pages drove calls, or which submissions mattered.",
      ),
      para(
        "I configured GA4 to track every meaningful interaction as a named event: form submissions across landing pages, phone call clicks, service plan requests, and quote requests, then marked the ones that matter as key events so they surface clearly in reporting.",
      ),
      para(
        "The client can now see exactly which pages and forms are driving real leads, not just pageviews.",
      ),
    ],
    skills: [
      "Google Analytics",
      "Google Tag Manager",
      "Tracking Pixel",
      "CRM Automation",
      "Marketing Consulting",
    ],
    image:
      "https://assets.cdn.filesafe.space/iOGsmaqdn9RhVgUvj3fD/media/6a94a30bc71cb92aeffd7f0d.png",
    modalImageFit: "contain",
  },
  {
    id: "meta-capi-pixel",
    title: "Meta Event Tracking: CAPI and Pixel Integration",
    cardTitle: "Meta CAPI + Pixel Integration",
    category: "automation",
    tag: "Meta Ads",
    role: "Tracking Specialist: Meta Pixel setup, Conversions API integration, event match quality optimization",
    description: [
      para(
        "This client's Meta ad account was only seeing browser-side Pixel events, so any conversion blocked by ad blockers, Safari's privacy settings, or iOS restrictions never reached Meta at all, hurting campaign optimization.",
      ),
      para(
        "I connected both Meta Pixel and Conversions API as active integrations on the same dataset, mapped Purchase, Lead, and Initiate Checkout events across both sources, and hashed the customer data sent server-side so Meta could reliably match and deduplicate events.",
      ),
      para(
        "Event Match Quality now sits well above average, with browser and server events merging into a single accurate signal for ad optimization.",
      ),
    ],
    skills: [
      "Meta Ads",
      "Tracking Pixel",
      "API Integration",
      "CRM Automation",
      "Marketing Consulting",
    ],
    image:
      "https://assets.cdn.filesafe.space/iOGsmaqdn9RhVgUvj3fD/media/6a94a30b7fb05fdeb804a2cc.png",
    modalImageFit: "contain",
  },
];
