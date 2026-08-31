import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import type { Project } from "./data";
import { BLUE, BLUE_DEEP, AMBER, INK, MUTED } from "./colors";

type Props = {
  project: Project | null;
  onClose: () => void;
};

const ProjectModal = ({ project, onClose }: Props) => {
  /* Close on Escape */
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    /* lock scroll while open */
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: "rgba(8,12,20,0.78)",
              backdropFilter: "blur(4px)",
            }}
            onClick={onClose}
            aria-hidden
          />

          {/* Dialog */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            className="relative z-10 max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-3xl border bg-white"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            style={{
              borderColor: `${BLUE}30`,
              boxShadow:
                "0 24px 60px -20px rgba(8,12,20,0.5), 0 60px 120px -40px rgba(14,165,233,0.35)",
            }}
          >
            {/* Top gradient bar */}
            <div
              className="sticky top-0 z-20 h-[5px] w-full rounded-t-3xl"
              style={{
                background: `linear-gradient(90deg, ${BLUE}, ${BLUE_DEEP} 45%, ${AMBER})`,
              }}
              aria-hidden
            />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-30 flex h-9 w-9 items-center justify-center rounded-full border bg-white/90 transition-transform hover:scale-105"
              style={{ borderColor: `${BLUE}30`, color: INK }}
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="p-6 sm:p-8">
              {/* Category tag */}
              <span
                className="inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider"
                style={{ background: `${BLUE}14`, color: BLUE_DEEP }}
              >
                {project.tag}
              </span>

              {/* Title */}
              <h3
                className="mt-3 font-display font-bold leading-tight tracking-tight [font-size:clamp(1.5rem,3vw,2rem)]"
                style={{ color: INK }}
              >
                {project.title}
              </h3>

              {/* Role */}
              <p className="mt-2 text-sm font-medium" style={{ color: MUTED }}>
                {project.role}
              </p>

              {/* Mockup image */}
              {/* PLACEHOLDER: replace with real project mockup image for {project.title} */}
              <div
                className="mt-6 overflow-hidden rounded-2xl border"
                style={{ borderColor: `${BLUE}22`, background: "#ffffff" }}
              >
                <img
                  src={project.image}
                  alt={`${project.title} mockup`}
                  className="block w-full"
                  loading="lazy"
                />
              </div>

              {/* Description */}
              <div className="mt-6 space-y-4">
                {project.description.map((p, i) => (
                  <p
                    key={i}
                    className="text-[15px] leading-relaxed"
                    style={{ color: MUTED }}
                  >
                    {p}
                  </p>
                ))}
              </div>

              {/* Skills */}
              <div className="mt-6">
                <div
                  className="mb-3 text-xs font-bold uppercase tracking-[0.18em]"
                  style={{ color: BLUE_DEEP }}
                >
                  Skills & deliverables
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold"
                      style={{
                        borderColor: `${BLUE}30`,
                        background: `${BLUE}0a`,
                        color: INK,
                      }}
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ background: AMBER }}
                        aria-hidden
                      />
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer note */}
              <div
                className="mt-8 flex items-center gap-2 border-t pt-5 text-xs font-medium"
                style={{ borderColor: `${BLUE}1a`, color: MUTED }}
              >
                <ArrowUpRight
                  className="h-3.5 w-3.5"
                  style={{ color: BLUE_DEEP }}
                />
                Case study, full details above. No external link for this
                project.
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
