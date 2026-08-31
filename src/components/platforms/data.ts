import {
  FunnelIcon,
  NodesIcon,
  ChatIcon,
  MicIcon,
  LayersIcon,
  DocIcon,
  PlugIcon,
  GridIcon,
  DashboardIcon,
  ChartSmall,
  TagSmall,
  MetaSmall,
  TargetSmall,
} from "@/components/platforms/icons";

/* ── Colors ──────────────────────────────────────────────────── */
export const BLUE = "#0EA5E9"; // sharper, more vivid sky blue
export const BLUE_DEEP = "#0369A1"; // deep blue for depth/contrast
export const AMBER = "#F59E0B"; // richer amber-orange
export const AMBER_DEEP = "#D97706";
export const INK = "#0F172A"; // deeper ink for stronger contrast
export const MUTED = "#475569"; // slightly darker muted for readability

/* ── Placeholder preview image (shared across skills for now) ── */
export const IMG_PLACEHOLDER =
  "https://vibe.filesafe.space/1786325294182304607/assets/eb79e870-22fa-4034-8be9-992edf9aec3c.png";

/* ── Real dashboard screenshots (for the Custom Dashboards skill) ── */
export const DASHBOARD_IMAGES = [
  "https://assets.cdn.filesafe.space/iOGsmaqdn9RhVgUvj3fD/media/6a9390900914f112151358f0.png",
  "https://assets.cdn.filesafe.space/iOGsmaqdn9RhVgUvj3fD/media/6a939090934a62aec888fb48.png",
];
export const DASHBOARD_CAPTIONS = [
  "Pipeline & Lead Overview",
  "Automation & Workflow",
];

/* ── Data ─────── */
export type Skill = {
  title: string;
  short: string;
  desc: string;
  Icon: typeof FunnelIcon;
  images?: string[];
  captions?: string[];
  imgPos?: string[];
  mockup?: boolean; // full composite device-mockup image → use object-contain
};

export const SKILLS: Skill[] = [
  {
    title: "Custom Dashboards",
    short: "Dashboards",
    desc: "Dashboards & reporting built inside the platform, with pipeline overviews, conversion tracking, and automation reporting all in one place. Custom widgets, filters, and value tracking tailored to how your business reads its numbers.",
    Icon: DashboardIcon,
    images: DASHBOARD_IMAGES,
    captions: DASHBOARD_CAPTIONS,
  },
  {
    title: "Pipelines & CRM",
    short: "Pipelines & CRM",
    desc: "Structuring sub-accounts, pipelines, and stages so every lead has a clear, trackable path to close. Custom fields, opportunity stages, and value tracking built around how your business actually sells.",
    Icon: FunnelIcon,
    images: [
      "https://assets.cdn.filesafe.space/iOGsmaqdn9RhVgUvj3fD/media/6a938f08c71cb92aefeb9a63.png",
      "https://assets.cdn.filesafe.space/iOGsmaqdn9RhVgUvj3fD/media/6a938f080914f11215134659.png",
    ],
    captions: ["Pipeline", "CRM"],
  },
  {
    title: "Workflow Automation",
    short: "Workflow Automation",
    desc: "Multi-step automations for nurture, follow-up, appointment booking, and review requests. Built to run without manual work, with conditional logic that adapts to each lead's behavior.",
    Icon: NodesIcon,
    images: [
      "https://assets.cdn.filesafe.space/iOGsmaqdn9RhVgUvj3fD/media/6a938a8e0914f112151302de.jpg",
      "https://assets.cdn.filesafe.space/iOGsmaqdn9RhVgUvj3fD/media/6a938a8bc71cb92aefeb571f.png",
    ],
    captions: ["Workflow Builder", "Automation Flow"],
  },
  {
    title: "Conversation AI",
    short: "Conversation AI",
    desc: "AI-driven chat and SMS responses that qualify and engage leads in real time. Trained on your offer and FAQs, so conversations stay on-brand and book appointments automatically.",
    Icon: ChatIcon,
    images: [
      "https://assets.cdn.filesafe.space/iOGsmaqdn9RhVgUvj3fD/media/6a938a83934a62aec888a732.png",
    ],
    captions: ["Conversation AI"],
    mockup: true,
  },
  {
    title: "AI Voice Agents",
    short: "AI Voice Agents",
    desc: "Voice AI to handle calls, bookings, and follow-up conversations automatically. Natural-sounding agents that answer, qualify, and schedule without a human on the line.",
    Icon: MicIcon,
    images: [
      "https://assets.cdn.filesafe.space/iOGsmaqdn9RhVgUvj3fD/media/6a938a92934a62aec888a858.png",
    ],
    captions: ["Voice Agent"],
    mockup: true,
  },
  {
    title: "Integrations (Zapier & n8n)",
    short: "Integrations",
    desc: "Connecting GHL to outside tools and custom workflows when native automations aren't enough. Two-way sync with your stack via Zapier, n8n, webhooks, and the API.",
    Icon: PlugIcon,
    images: [
      "https://assets.cdn.filesafe.space/iOGsmaqdn9RhVgUvj3fD/media/6a938a830914f1121513022d.png",
      "https://assets.cdn.filesafe.space/iOGsmaqdn9RhVgUvj3fD/media/6a938a8aa90361de8b450259.jpg",
    ],
    captions: ["n8n", "Zapier"],
  },
  {
    title: "SaaS Mode",
    short: "SaaS Mode",
    desc: "Packaging GHL as a white-labeled product for agencies who want to resell it under their own brand. Pricing, onboarding, and sub-account provisioning set up end to end.",
    Icon: LayersIcon,
    images: [
      "https://assets.cdn.filesafe.space/iOGsmaqdn9RhVgUvj3fD/media/6a93a164934a62aec889fbe9.png",
      "https://assets.cdn.filesafe.space/iOGsmaqdn9RhVgUvj3fD/media/6a93a1640914f11215145822.png",
    ],
    captions: ["White-label", "SaaS Dashboard"],
  },
  {
    title: "Documents & Contracts",
    short: "Documents & Contracts",
    desc: "Building proposal, contract, and e-signature flows directly inside GHL, tied to the pipeline. Documents that trigger automations and update opportunity status on signature.",
    Icon: DocIcon,
    images: [
      "https://assets.cdn.filesafe.space/iOGsmaqdn9RhVgUvj3fD/media/6a93a05f0914f11215144a95.png",
      "https://assets.cdn.filesafe.space/iOGsmaqdn9RhVgUvj3fD/media/6a93a05f934a62aec889eb87.png",
    ],
    captions: ["Document Builder", "E-signature"],
    imgPos: ["center", "center bottom"],
  },
  {
    title: "Sub-Account & Client Management",
    short: "Sub-Account Mgmt",
    desc: "Managing multiple GHL sub-accounts cleanly, so agencies and multi-location businesses stay organized. Snapshot rollouts, permission roles, and bulk updates across accounts.",
    Icon: GridIcon,
    images: [
      "https://assets.cdn.filesafe.space/iOGsmaqdn9RhVgUvj3fD/media/6a93a238c71cb92aefecb4e1.png",
    ],
    captions: ["Sub-Accounts"],
  },
];

export const TOOLS = [
  { name: "GA4", Icon: ChartSmall },
  { name: "Google Tag Manager", Icon: TagSmall },
  { name: "Meta Ads", Icon: MetaSmall },
  { name: "Google Ads", Icon: TargetSmall },
];
