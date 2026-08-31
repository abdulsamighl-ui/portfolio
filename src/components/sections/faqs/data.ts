import {
  Wrench,
  Clock,
  DollarSign,
  Settings2,
  LifeBuoy,
  MessageSquare,
  FileText,
  Wallet,
  Workflow,
  BarChart3,
  BookOpen,
  RefreshCw,
  PiggyBank,
} from "lucide-react";

export type FaqCategory = "Platform" | "Process" | "Payment";

export interface Faq {
  q: string;
  a: string;
  category: FaqCategory;
  icon: typeof Wrench;
}

export const FAQS: Faq[] = [
  // ── Platform (5) ──
  {
    q: "What platforms do you specialize in?",
    a: "GoHighLevel is my core focus, alongside Zapier, n8n, Meta Pixel and Conversions API, Google Tag Manager, GA4, and Google Ads tracking.",
    category: "Platform",
    icon: Wrench,
  },
  {
    q: "Can you fix or improve an existing GoHighLevel setup?",
    a: "Yes, a lot of my work is auditing and cleaning up existing sub-accounts, fixing broken automations, and improving tracking accuracy.",
    category: "Platform",
    icon: Settings2,
  },
  {
    q: "What do you need from me to get started?",
    a: "Access to your GoHighLevel sub-account (or relevant platforms), a clear idea of the goal, and any existing brand assets if it's a website or funnel build.",
    category: "Platform",
    icon: FileText,
  },
  {
    q: "Do you build custom automations beyond GoHighLevel's native features?",
    a: "Yes, I use n8n and Zapier for complex logic, API integrations, and connecting GoHighLevel to third-party tools like HouseCall Pro, ServiceTitan, and DripJobs.",
    category: "Platform",
    icon: Workflow,
  },
  {
    q: "Can you set up accurate tracking for my ads?",
    a: "Yes, I set up Meta Pixel and Conversions API, Google Tag Manager, GA4, and Google Ads conversion tracking so your ad platforms see accurate, deduplicated data.",
    category: "Platform",
    icon: BarChart3,
  },

  // ── Process (5) ──
  {
    q: "How long does a typical project take?",
    a: "It depends on scope. Simple automations can take a few days; full website or funnel builds typically take 1-3 weeks.",
    category: "Process",
    icon: Clock,
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Yes, through the retainer option, or on an as-needed hourly basis if something needs adjusting later.",
    category: "Process",
    icon: LifeBuoy,
  },
  {
    q: "How do we communicate during the project?",
    a: "Typically over email or your preferred messaging platform, with regular updates and screenshots at each milestone.",
    category: "Process",
    icon: MessageSquare,
  },
  {
    q: "Do you provide documentation or training after the build?",
    a: "Yes, I can provide a walkthrough or written documentation covering how the system works and how to make basic changes yourself.",
    category: "Process",
    icon: BookOpen,
  },
  {
    q: "What if I need changes after the project is delivered?",
    a: "Minor revisions during the project are included. Larger changes after delivery are handled hourly or through a small follow-up project.",
    category: "Process",
    icon: RefreshCw,
  },

  // ── Payment (3) ──
  {
    q: "Do you work hourly or on fixed-price projects?",
    a: "Both. Small tasks and ongoing support work well hourly, while defined builds are usually quoted as a fixed project price.",
    category: "Payment",
    icon: DollarSign,
  },
  {
    q: "How do payments work?",
    a: "Project-based work is typically split into a deposit and a final payment on delivery; hourly and retainer work is billed on an agreed schedule.",
    category: "Payment",
    icon: Wallet,
  },
  {
    q: "Do you require a deposit?",
    a: "Yes, project-based work typically starts with a deposit before work begins, with the balance due on delivery.",
    category: "Payment",
    icon: PiggyBank,
  },
];

export const CATEGORIES: FaqCategory[] = ["Platform", "Process", "Payment"];
