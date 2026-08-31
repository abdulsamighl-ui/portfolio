import { motion, AnimatePresence } from "framer-motion";
import {
  SKILLS,
  BLUE,
  BLUE_DEEP,
  INK,
  MUTED,
  AMBER,
  AMBER_DEEP,
  DASHBOARD_CAPTIONS,
  IMG_PLACEHOLDER,
} from "@/components/platforms/data";

const COUNT = SKILLS.length; // 9
const ROW = `100% / ${COUNT}`;

/* ── LEFT — vertical tab list (desktop) / horizontal pills (mobile) ── */
export const TabList = ({
  active,
  setActive,
}: {
  active: number;
  setActive: (i: number) => void;
}) => {
  return (
    <div className="relative lg:h-full">
      {/* Mobile: horizontal scrollable pills */}
      <div className="flex gap-2 overflow-x-auto pb-2 lg:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {SKILLS.map((s, i) => {
          const isActive = i === active;
          return (
            <button
              key={s.title}
              onClick={() => setActive(i)}
              className="flex shrink-0 cursor-pointer items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-bold transition-all duration-200"
              style={{
                borderColor: isActive ? BLUE : "rgba(15,23,42,0.10)",
                background: isActive
                  ? `linear-gradient(135deg, ${BLUE}, ${BLUE_DEEP})`
                  : "rgba(255,255,255,0.7)",
                color: isActive ? "#fff" : MUTED,
                boxShadow: isActive
                  ? `0 8px 20px -6px ${BLUE}77`
                  : "0 1px 3px -1px rgba(15,23,42,0.06)",
              }}
            >
              <s.Icon size={16} />
              {s.short}
            </button>
          );
        })}
      </div>

      {/* Desktop: vertical list with a sliding active indicator */}
      <div className="relative hidden h-full flex-col lg:flex">
        {/* Sliding active highlight — directly animated (no layoutId/FLIP)
            to avoid the brief collapse/remeasure glitch on row switch. */}
        <motion.div
          className="pointer-events-none absolute left-0 right-0 rounded-none"
          style={{
            height: `${100 / COUNT}%`,
            background: "#fffdf7",
          }}
          animate={{ top: `${(active * 100) / COUNT}%` }}
          transition={{ type: "spring", stiffness: 380, damping: 34 }}
        />

        {SKILLS.map((s, i) => {
          const isActive = i === active;
          return (
            <button
              key={s.title}
              onClick={() => setActive(i)}
              className="group relative flex w-full cursor-pointer items-center gap-3 px-4 text-left transition-colors duration-200"
              style={{ flex: "1 1 0%" }}
            >
              {/* Icon badge — vivid gradient + soft drop shadow */}
              <span
                className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-[transform,opacity] duration-150 ease-out group-hover:scale-105"
                style={{
                  background: isActive
                    ? `linear-gradient(135deg, ${BLUE}, ${BLUE_DEEP})`
                    : `linear-gradient(135deg, ${BLUE}2e, ${BLUE}1a)`,
                  color: isActive ? "#fff" : "#cfe6f5",
                  opacity: isActive ? 1 : 0.8,
                  boxShadow: isActive
                    ? `0 6px 16px -4px ${BLUE}99, inset 0 1px 0 rgba(255,255,255,0.35)`
                    : `0 2px 6px -2px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.12)`,
                }}
              >
                <s.Icon size={16} />
              </span>
              {/* Title */}
              <span
                className="font-display text-sm font-bold tracking-tight"
                style={{ color: isActive ? INK : "#c7d4e2" }}
              >
                {s.title}
              </span>
              {/* Hover arrow — fades in on hover */}
              <span
                className="pointer-events-none ml-auto text-base font-light opacity-0 transition-opacity duration-150 ease-out group-hover:opacity-100"
                style={{ color: BLUE }}
              >
                →
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

/* ── RIGHT — preview panel ── */
export const PreviewPanel = ({
  active,
  reduced,
}: {
  active: number;
  reduced: boolean | null;
}) => {
  const skill = SKILLS[active];
  const imgs = skill.images ?? [];
  const isMulti = imgs.length >= 2;
  const singleSrc = imgs.length === 1 ? imgs[0] : IMG_PLACEHOLDER;
  return (
    <div className="relative flex min-h-[580px] sm:min-h-[640px] lg:min-h-[680px] h-full w-full">
      {/* Ambient gradient wash — top-right, blue */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-2/3 w-2/3 rounded-bl-[140px]"
        style={{
          background: `radial-gradient(120% 90% at 100% 0%, ${BLUE}24 0%, transparent 60%)`,
        }}
        aria-hidden
      />
      {/* Ambient gradient wash — bottom-left, amber */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-1/2 w-1/2 rounded-tr-[140px]"
        style={{
          background: `radial-gradient(120% 90% at 0% 100%, ${AMBER}1C 0%, transparent 60%)`,
        }}
        aria-hidden
      />

      <div className="relative flex h-full w-full flex-col overflow-hidden p-6 sm:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Header: icon + counter + title */}
            <div className="mb-6 flex items-center gap-3.5">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white"
                style={{
                  background: `linear-gradient(135deg, ${BLUE}, ${BLUE_DEEP})`,
                  boxShadow: `0 8px 20px -6px ${BLUE}77, inset 0 1px 0 rgba(255,255,255,0.3)`,
                }}
              >
                <skill.Icon size={20} />
              </span>
              <div className="flex flex-col gap-1">
                <span
                  className="font-mono text-[11px] font-bold uppercase tracking-[0.24em]"
                  style={{ color: AMBER_DEEP }}
                >
                  {String(active + 1).padStart(2, "0")}
                  <span
                    className="mx-1.5 inline-block h-[3px] w-[3px] rounded-full align-middle"
                    style={{ background: AMBER, opacity: 0.7 }}
                    aria-hidden
                  />
                  <span style={{ opacity: 0.55 }}>
                    {String(COUNT).padStart(2, "0")}
                  </span>
                </span>
                <h3
                  className="font-display text-xl font-bold leading-tight tracking-tight sm:text-2xl"
                  style={{ color: INK }}
                >
                  {skill.title}
                </h3>
              </div>
            </div>

            {/* Description */}
            <p
              className="mb-7 max-w-2xl text-sm leading-relaxed sm:text-[15px]"
              style={{ color: MUTED }}
            >
              {skill.desc}
            </p>

            {isMulti ? (
              /* ── Multi-image staggered cascade — clean neutral frames ── */
              <motion.div
                key={active}
                initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                className="relative mx-auto w-full max-w-3xl"
              >
                {/* Soft warm spotlight — mostly amber, minimal blue */}
                <div
                  className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50"
                  style={{
                    background: `radial-gradient(closest-side, ${AMBER}1a 0%, transparent 72%)`,
                  }}
                  aria-hidden
                />
                {/* Subtle continuous ambient float */}
                <motion.div
                  animate={reduced ? undefined : { y: [0, -6, 0] }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative h-[400px] sm:h-[470px] lg:h-[540px]"
                >
                  {skill.images!.map((src, idx) => {
                    const captions = skill.captions ?? DASHBOARD_CAPTIONS;
                    const n = skill.images!.length;
                    /*
                       Staggered cascade: each card offset down + right, minimal tilt
                       (kept low to avoid soft rotated-raster blur on fine screenshot text).
                       Adapts to 2 or 3 images. */
                    const cfg =
                      n === 2
                        ? [
                            {
                              rotate: -2,
                              left: "4%",
                              top: "5%",
                              width: "72%",
                              z: 10,
                              shadow:
                                "0 2px 5px -1px rgba(15,23,42,0.10), 0 20px 40px -18px rgba(15,23,42,0.20)",
                            },
                            {
                              rotate: 2,
                              left: "26%",
                              top: "16%",
                              width: "72%",
                              z: 30,
                              shadow:
                                "0 3px 8px -2px rgba(15,23,42,0.14), 0 40px 70px -24px rgba(15,23,42,0.28), 0 0 0 1px rgba(15,23,42,0.06)",
                            },
                          ][idx]
                        : [
                            {
                              rotate: -2,
                              left: "0%",
                              top: "0%",
                              width: "65%",
                              z: 10,
                              shadow:
                                "0 2px 5px -1px rgba(15,23,42,0.10), 0 20px 40px -18px rgba(15,23,42,0.20)",
                            },
                            {
                              rotate: 0,
                              left: "22%",
                              top: "9%",
                              width: "65%",
                              z: 20,
                              shadow:
                                "0 2px 6px -1px rgba(15,23,42,0.12), 0 28px 52px -20px rgba(15,23,42,0.24)",
                            },
                            {
                              rotate: 2,
                              left: "34%",
                              top: "18%",
                              width: "65%",
                              z: 30,
                              shadow:
                                "0 3px 8px -2px rgba(15,23,42,0.14), 0 40px 70px -24px rgba(15,23,42,0.28), 0 0 0 1px rgba(15,23,42,0.06)",
                            },
                          ][idx];
                    return (
                      <motion.figure
                        key={src}
                        initial={
                          reduced
                            ? { opacity: 0 }
                            : {
                                opacity: 0,
                                y: 20,
                                rotate: cfg.rotate + (idx % 2 ? 6 : -6),
                              }
                        }
                        animate={{ opacity: 1, y: 0, rotate: cfg.rotate }}
                        transition={{
                          duration: 0.5,
                          delay: 0.12 + idx * 0.12,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        whileHover={{
                          y: -10,
                          rotate: 0,
                          scale: 1.04,
                          zIndex: 40,
                          transition: { duration: 0.22, ease: "easeOut" },
                        }}
                        className="group absolute overflow-hidden rounded-2xl border bg-white p-2"
                        style={{
                          width: cfg.width,
                          left: cfg.left,
                          top: cfg.top,
                          zIndex: cfg.z,
                          borderColor: "rgba(15,23,42,0.10)",
                          boxShadow: cfg.shadow,
                          transformOrigin: "center bottom",
                          WebkitBackfaceVisibility: "hidden",
                          backfaceVisibility: "hidden",
                        }}
                      >
                        {/* thin amber top accent on hover */}
                        <div
                          className="pointer-events-none absolute left-2 right-2 top-0 h-[2px] rounded-full opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100"
                          style={{
                            background: `linear-gradient(90deg, transparent, ${AMBER}, transparent)`,
                          }}
                          aria-hidden
                        />
                        <div className="overflow-hidden rounded-xl">
                          <img
                            src={src}
                            alt={`${skill.title} — ${captions[idx] ?? `view ${idx + 1}`}`}
                            className="aspect-[16/11] w-full object-cover"
                            style={{
                              objectPosition: skill.imgPos?.[idx] ?? "center",
                              WebkitBackfaceVisibility: "hidden",
                              backfaceVisibility: "hidden",
                              imageRendering: "auto",
                            }}
                            loading="lazy"
                          />
                        </div>
                        {/* Caption pill — neutral, amber text */}
                        <figcaption
                          className="absolute bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-1 text-[10px] font-bold backdrop-blur-md sm:text-[11px]"
                          style={{
                            background: "rgba(255,255,255,0.92)",
                            color: AMBER_DEEP,
                            border: "1px solid rgba(15,23,42,0.08)",
                            boxShadow: "0 4px 12px -4px rgba(15,23,42,0.18)",
                          }}
                        >
                          {captions[idx] ?? `View ${idx + 1}`}
                        </figcaption>
                      </motion.figure>
                    );
                  })}
                </motion.div>
              </motion.div>
            ) : (
              <>
                {/* Single image area — framed screenshot / mockup feel */}
                <div
                  className={`group/img relative mx-auto overflow-hidden rounded-2xl border-2 ${
                    skill.mockup
                      ? "max-w-2xl bg-[#EBECEE] p-1.5 sm:p-2"
                      : "w-full bg-white p-2.5"
                  }`}
                  style={{
                    borderColor: `${BLUE}33`,
                    boxShadow:
                      "inset 0 1px 4px -1px rgba(15,23,42,0.08), 0 12px 32px -10px rgba(14,165,233,0.22)",
                  }}
                >
                  <motion.div
                    key={active}
                    initial={
                      reduced ? { opacity: 0 } : { opacity: 0, scale: 0.97 }
                    }
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                    className={`relative overflow-hidden rounded-xl ${
                      skill.mockup
                        ? "aspect-[4/3] w-full flex items-center justify-center bg-[#EBECEE]"
                        : "aspect-[16/10] w-full"
                    }`}
                    style={{
                      boxShadow: "inset 0 0 0 1px rgba(14,165,233,0.14)",
                    }}
                  >
                    <img
                      src={singleSrc}
                      alt={`Preview for ${skill.title}`}
                      className={`transition-transform duration-200 ease-out group-hover/img:scale-[1.02] ${
                        skill.mockup
                          ? "h-full w-full object-cover"
                          : "aspect-[16/10] w-full bg-slate-50 object-cover p-1"
                      }`}
                      loading="lazy"
                    />
                    {/* Edge vignette */}
                    <div
                      className="pointer-events-none absolute inset-0 rounded-xl"
                      style={{
                        boxShadow: skill.mockup
                          ? "inset 0 0 16px 2px rgba(15,23,42,0.06)"
                          : "inset 0 0 28px 3px rgba(15,23,42,0.10)",
                      }}
                      aria-hidden
                    />
                    {/* Soft scrim label */}
                    <span
                      className="absolute bottom-3 left-3 rounded-full px-3 py-1 text-[11px] font-bold backdrop-blur-md"
                      style={{
                        background: "rgba(255,255,255,0.92)",
                        color: BLUE_DEEP,
                        border: `1px solid ${BLUE}40`,
                      }}
                    >
                      {skill.title}
                    </span>
                    {/* Expand icon — appears on hover */}
                    <span
                      className="pointer-events-none absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg text-white opacity-0 backdrop-blur-md transition-[transform,opacity] duration-150 ease-out group-hover/img:scale-110 group-hover/img:opacity-100"
                      style={{
                        background: `linear-gradient(135deg, ${BLUE}, ${BLUE_DEEP})`,
                        boxShadow: `0 4px 12px -3px ${BLUE}77`,
                      }}
                      aria-label="Expand preview"
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden
                      >
                        <path
                          d="M15 4h5v5M9 20H4v-5M20 4l-6 6M4 20l6-6"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </motion.div>
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
