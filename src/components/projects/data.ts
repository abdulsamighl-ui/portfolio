/* ── Projects data ─────────────────────────────────────────────
   22 projects total — 13 Automation + 9 Websites & Funnels.
   Real copy/images will be dropped in per project later.
   Thumbnails use a shared placeholder; replace via the HTML comment
   above each thumbnail in Projects.tsx.
*/

import { AUTOMATION_PROJECTS } from "./automationProjects";
import { WEBSITE_PROJECTS } from "./websiteProjects";

export type ProjectCategory = "automation" | "website";

export type Project = {
  id: string;
  title: string;
  cardTitle?: string; // shorter title for the grid card (defaults to title)
  category: ProjectCategory;
  tag: string; // small category label, e.g. "n8n workflow"
  role: string; // "My role" line
  description: string[]; // 2-4 short paragraphs
  skills: string[]; // pill tags
  image: string; // mockup image (placeholder for now)
  modalImageFit?: "contain" | "cover"; // how the modal image is fit (default cover)
};

/* Shared placeholder mockup image (laptop + phone composite) */
export const PROJECT_PLACEHOLDER =
  "https://vibe.filesafe.space/1786325294182304607/assets/eb79e870-22fa-4034-8be9-992edf9aec3c.png";

/** Resolve any "PROJECT_PLACEHOLDER" sentinel to the real placeholder URL. */
const resolveImage = (image: string) =>
  image === "PROJECT_PLACEHOLDER" ? PROJECT_PLACEHOLDER : image;

export const PROJECTS: Project[] = [
  ...AUTOMATION_PROJECTS.map((p) => ({ ...p, image: resolveImage(p.image) })),
  ...WEBSITE_PROJECTS.map((p) => ({ ...p, image: resolveImage(p.image) })),
];

export const FILTERS = [
  { key: "all", label: "All" },
  { key: "automation", label: "Automation" },
  { key: "website", label: "Websites & Funnels" },
] as const;

export type FilterKey = (typeof FILTERS)[number]["key"];

export const COUNTS = {
  all: PROJECTS.length,
  automation: PROJECTS.filter((p) => p.category === "automation").length,
  website: PROJECTS.filter((p) => p.category === "website").length,
};
