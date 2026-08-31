import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import { fadeRise } from "./shared";
import { GhlLogo } from "./icons";

export const PrimaryGhlCard = () => {
  const reduced = useReducedMotion();
  return (
    <motion.div
      variants={fadeRise}
      custom={1}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="col-span-2"
    >
      <div className="group relative">
        {/* The card — clean, prominent, light, straight */}
        <div
          className="relative z-10 overflow-hidden rounded-2xl transition-transform duration-500 ease-out group-hover:-translate-y-1"
          style={{
            background:
              "linear-gradient(135deg, hsl(0 0% 100%) 0%, hsl(193 60% 98%) 55%, hsl(38 90% 98%) 100%)",
            boxShadow:
              "0 1px 3px -1px rgba(20,24,27,0.06), 0 28px 56px -22px hsl(193 62% 45% / 0.22), 0 0 0 1px hsl(193 62% 45% / 0.12)",
          }}
        >
          {/* Gradient top border */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-[3px] z-20"
            style={{
              background:
                "linear-gradient(90deg, hsl(193 62% 50%), hsl(193 55% 55%) 40%, hsl(38 90% 58%))",
            }}
            aria-hidden
          />

          {/* Soft ambient glows inside the card */}
          <div
            className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full"
            style={{
              background:
                "radial-gradient(closest-side, hsl(193 62% 52% / 0.14), transparent 75%)",
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-14 -left-10 h-40 w-40 rounded-full"
            style={{
              background:
                "radial-gradient(closest-side, hsl(38 90% 56% / 0.12), transparent 75%)",
            }}
            aria-hidden
          />

          {/* Content */}
          <div className="relative z-10 flex h-full min-h-[300px] flex-col p-8 sm:p-10">
            <div className="mb-4 flex items-center gap-3">
              <span
                className="flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(0 0% 100%) 0%, hsl(193 60% 98%) 100%)",
                  boxShadow:
                    "0 6px 16px -4px hsl(193 62% 52% / 0.18), inset 0 0 0 1px hsl(193 62% 45% / 0.18)",
                }}
              >
                <GhlLogo size={26} />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-about-muted">
                Primary
              </span>
              <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-about-emerald">
                {!reduced && (
                  <span className="h-1.5 w-1.5 rounded-full bg-about-emerald animate-[dotpulse_1.5s_ease-in-out_infinite]" />
                )}
                Active
              </span>
            </div>
            <h3 className="font-display text-3xl font-bold tracking-tight text-about-ink sm:text-4xl">
              GoHighLevel
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-about-muted">
              CRM, pipelines, workflows, automations. 4+ years.
            </p>

            {/* Footer row — fills height to align with left column */}
            <div className="mt-auto pt-6">
              <div
                className="h-px w-full"
                style={{
                  background:
                    "linear-gradient(90deg, hsl(193 62% 50% / 0.55), hsl(38 90% 56% / 0.25), transparent)",
                }}
                aria-hidden
              />
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.12em] text-about-muted">
                <span className="flex items-center gap-2">
                  <span
                    className="h-1 w-1 rounded-full bg-about-emerald"
                    aria-hidden
                  />
                  Pipelines
                </span>
                <span className="h-3 w-px bg-about-border" aria-hidden />
                <span className="flex items-center gap-2">
                  <span
                    className="h-1 w-1 rounded-full bg-about-emerald"
                    aria-hidden
                  />
                  Workflows
                </span>
                <span className="h-3 w-px bg-about-border" aria-hidden />
                <span className="flex items-center gap-2">
                  <span
                    className="h-1 w-1 rounded-full bg-about-emerald"
                    aria-hidden
                  />
                  Automations
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
