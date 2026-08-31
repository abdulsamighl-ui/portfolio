import { useState, useMemo, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  Variants,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpRight, Maximize2, ChevronDown, Sparkles } from "lucide-react";
import {
  PROJECTS,
  FILTERS,
  COUNTS,
  type FilterKey,
  type Project,
} from "@/components/projects/data";
import {
  BLUE,
  BLUE_DEEP,
  AMBER,
  INK,
  MUTED,
} from "@/components/projects/colors";
import ProjectModal from "@/components/projects/ProjectModal";

/* ── Animation variants ───────────────────────────────────── */
const fadeRise: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

const cardRise: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ── Curated order for the "All" tab's first 9 ─────────────── */
const ALL_CURATED_IDS = [
  "web-1", // Memorial Brand Website & Funnels
  "web-2", // AI Voice Receptionist Funnel
  "web-4", // Tour Operator Booking Website
  "a2p-10dlc", // A2P 10DLC Compliance Setup
  "voice-ai-setup", // Voice AI Phone Receptionist Setup
  "ai-chatbot-setup", // AI Chatbot Setup
  "hcp-sync", // HouseCall Pro Customer Sync (n8n)
  "servicetitan-sync", // ServiceTitan Customer Sync (Zapier)
  "meta-capi-pixel", // Meta CAPI + Pixel Integration
];

const INITIAL_COUNT = 9;

/* ── Project card ──────────────────────────────────────────── */
const ProjectCard = ({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) => {
  const reduced = useReducedMotion();
  const previewSkills = project.skills.slice(0, 3);

  return (
    <motion.button
      type="button"
      onClick={onOpen}
      variants={cardRise}
      custom={index}
      initial="hidden"
      animate="show"
      whileHover={reduced ? undefined : { y: -8 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white text-left transition-[box-shadow,border-color] duration-200"
      style={{
        borderColor: `${BLUE}22`,
        boxShadow:
          "0 1px 3px -1px rgba(15,23,42,0.06), 0 12px 28px -14px rgba(15,23,42,0.12)",
      }}
    >
      {/* Thumbnail */}
      {/* PLACEHOLDER: replace with real project mockup image for {project.title} */}
      <div className="relative w-full overflow-hidden bg-[#f8fafc]">
        <img
          src={project.image}
          alt={`${project.title} mockup`}
          className="block w-full transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />

        {/* Top gradient sheen */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `linear-gradient(180deg, ${BLUE}10 0%, transparent 30%, transparent 60%, rgba(8,12,20,0.55) 100%)`,
          }}
          aria-hidden
        />

        {/* "View case study" overlay on hover */}
        <div className="absolute inset-0 flex items-end justify-end p-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-bold text-white"
            style={{ background: BLUE, boxShadow: `0 8px 20px -6px ${BLUE}` }}
          >
            View case study
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>

        {/* Expand icon top-right */}
        <div
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg bg-white/90 opacity-0 backdrop-blur transition-opacity duration-200 group-hover:opacity-100"
          style={{ color: BLUE_DEEP }}
          aria-hidden
        >
          <Maximize2 className="h-4 w-4" />
        </div>

        {/* Index badge top-left */}
        <div
          className="absolute left-3 top-3 flex h-7 items-center rounded-full px-2.5 text-[11px] font-bold text-white/95 backdrop-blur"
          style={{ background: "rgba(8,12,20,0.55)" }}
          aria-hidden
        >
          {String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: AMBER }}
            aria-hidden
          />
          <span
            className="text-[11px] font-bold uppercase tracking-wider"
            style={{ color: BLUE_DEEP }}
          >
            {project.tag}
          </span>
        </div>
        <h3
          className="mt-2 font-display text-[17px] font-bold leading-snug tracking-tight"
          style={{ color: INK }}
        >
          {project.cardTitle ?? project.title}
        </h3>

        {/* Skill preview chips — fixed-height area reserves space for 2 lines */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          <span
            className="inline-flex items-center rounded-md px-2 py-1 text-[11px] font-semibold"
            style={{ background: `${BLUE}0d`, color: BLUE_DEEP }}
          >
            {previewSkills[0]}
          </span>
          {previewSkills[1] && (
            <span
              className="inline-flex items-center rounded-md px-2 py-1 text-[11px] font-semibold"
              style={{ background: `${BLUE}0d`, color: BLUE_DEEP }}
            >
              {previewSkills[1]}
            </span>
          )}
          {project.skills.length > 2 && (
            <span
              className="inline-flex items-center rounded-md px-2 py-1 text-[11px] font-semibold"
              style={{ background: `${AMBER}14`, color: "#B45309" }}
            >
              +{project.skills.length - 2}
            </span>
          )}
        </div>
      </div>

      {/* Hover glow border */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{
          boxShadow: `inset 0 0 0 1.5px ${BLUE}, 0 22px 50px -18px ${BLUE}66`,
        }}
        aria-hidden
      />
    </motion.button>
  );
};

/* ── Main section ──────────────────────────────────────────── */
const Projects = () => {
  const [filter, setFilter] = useState<FilterKey>("website");
  const [active, setActive] = useState<Project | null>(null);
  const [expanded, setExpanded] = useState(false);

  // Reset expand state whenever the filter changes
  useEffect(() => {
    setExpanded(false);
  }, [filter]);

  const { visible, remaining } = useMemo(() => {
    if (filter === "all") {
      const byId = new Map(PROJECTS.map((p) => [p.id, p]));
      const curated = ALL_CURATED_IDS.map((id) => byId.get(id)).filter(
        Boolean,
      ) as Project[];
      const curatedSet = new Set(ALL_CURATED_IDS);
      const rest = PROJECTS.filter((p) => !curatedSet.has(p.id));
      return {
        visible: expanded ? [...curated, ...rest] : curated,
        remaining: rest,
      };
    }

    if (filter === "automation") {
      const auto = PROJECTS.filter((p) => p.category === "automation");
      return {
        visible: expanded ? auto : auto.slice(0, INITIAL_COUNT),
        remaining: auto.slice(INITIAL_COUNT),
      };
    }

    // website — show all, no pagination
    const web = PROJECTS.filter((p) => p.category === "website");
    return { visible: web, remaining: [] as Project[] };
  }, [filter, expanded]);

  const handleFilter = (key: FilterKey) => {
    setFilter(key);
  };

  const showMoreButton = remaining.length > 0;

  return (
    <section
      id="projects"
      className="relative overflow-hidden pt-14 sm:pt-12 lg:pt-14 pb-4 sm:pb-8 lg:pb-10"
    >
      {/* Ambient glows */}
      <div
        className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full opacity-50"
        style={{
          background: `radial-gradient(closest-side, ${BLUE}1c, transparent 75%)`,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-32 h-80 w-80 rounded-full opacity-45"
        style={{
          background: `radial-gradient(closest-side, ${AMBER}18, transparent 75%)`,
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeRise}
          custom={0}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-10 mx-auto max-w-2xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span
              className="h-1.5 w-10 rounded-full"
              style={{
                background: `linear-gradient(90deg, ${BLUE}, ${AMBER})`,
              }}
            />
            <span
              className="text-xs font-bold uppercase tracking-[0.24em]"
              style={{ color: BLUE_DEEP }}
            >
              Projects
            </span>
          </div>
          <h2
            className="font-display font-bold leading-[1.05] tracking-tight [font-size:clamp(1.75rem,4vw,3rem)]"
            style={{ color: INK }}
          >
            Work I've actually{" "}
            <span
              style={{
                background: `linear-gradient(135deg, ${BLUE}, ${BLUE_DEEP})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              shipped
            </span>
            .
          </h2>
          <p
            className="mt-4 text-base font-medium leading-relaxed"
            style={{ color: MUTED }}
          >
            A mix of automations and full website builds. Click any project for
            the full breakdown.
          </p>

          {/* Stat row */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" style={{ color: AMBER }} />
              <span className="text-sm font-bold" style={{ color: INK }}>
                {COUNTS.all}
              </span>
              <span className="text-sm font-medium" style={{ color: MUTED }}>
                projects shipped
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: BLUE }}
              />
              <span className="text-sm font-medium" style={{ color: MUTED }}>
                {COUNTS.automation} automations · {COUNTS.website} sites &
                funnels
              </span>
            </div>
          </div>

          <div
            className="mx-auto mt-5 h-[3px] w-28 rounded-full"
            style={{ background: `linear-gradient(90deg, ${BLUE}, ${AMBER})` }}
          />
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          variants={fadeRise}
          custom={1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-10 flex flex-wrap justify-center gap-2.5"
        >
          {FILTERS.map((f) => {
            const isActive = filter === f.key;
            const count = COUNTS[f.key];
            return (
              <button
                key={f.key}
                type="button"
                onClick={() => handleFilter(f.key)}
                className="relative rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200"
                style={
                  isActive
                    ? { color: "#fff" }
                    : {
                        background: "transparent",
                        color: MUTED,
                        border: `1.5px solid ${BLUE}33`,
                      }
                }
              >
                {isActive && (
                  <motion.span
                    layoutId="projects-filter-pill"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `linear-gradient(135deg, ${BLUE}, ${BLUE_DEEP})`,
                      boxShadow: `0 8px 20px -8px ${BLUE}`,
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">
                  {f.label}{" "}
                  <span
                    className="ml-0.5 text-xs font-bold"
                    style={
                      isActive
                        ? { color: "rgba(255,255,255,0.85)" }
                        : { color: `${BLUE}99` }
                    }
                  >
                    ({count})
                  </span>
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.04,
                }}
              >
                <ProjectCard
                  project={project}
                  index={i}
                  onOpen={() => setActive(project)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* See more / Show less toggle */}
        <AnimatePresence>
          {showMoreButton && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex justify-center"
            >
              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-colors duration-200"
                style={{
                  background: "transparent",
                  color: BLUE_DEEP,
                  border: `1.5px solid ${BLUE}55`,
                }}
              >
                {expanded ? "Show less" : "See more"}
                <ChevronDown
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5"
                  style={{
                    transform: expanded ? "rotate(180deg)" : "none",
                  }}
                />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Modal */}
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
};

export default Projects;
