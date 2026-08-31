import { useState } from "react";
import { motion, Variants, useReducedMotion } from "framer-motion";
import {
  TOOLS,
  BLUE,
  BLUE_DEEP,
  AMBER,
  AMBER_DEEP,
  INK,
  MUTED,
} from "@/components/platforms/data";
import { TabList, PreviewPanel } from "@/components/platforms/TabSelector";

/* ── Animation variants ────────────────────────────────────── */
const fadeRise: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

const chipRise: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.95 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ── Main component ────────────────────────────────────────── */
const Platforms = () => {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);

  return (
    <section
      id="services"
      className="relative overflow-hidden pt-20 sm:pt-16 lg:pt-20 pb-4 sm:pb-8 lg:pb-10 scroll-mt-24"
    >
      {/* Ambient section glows */}
      <div
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full opacity-60"
        style={{
          background: `radial-gradient(closest-side, ${BLUE}22, transparent 75%)`,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-32 h-80 w-80 rounded-full opacity-50"
        style={{
          background: `radial-gradient(closest-side, ${AMBER}1C, transparent 75%)`,
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          variants={fadeRise}
          custom={0}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12 mx-auto max-w-2xl text-center"
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
              Platforms & Skills
            </span>
          </div>
          <h2
            className="font-display font-bold leading-[1.05] tracking-tight [font-size:clamp(1.75rem,4vw,3rem)]"
            style={{ color: INK }}
          >
            What I can build inside{" "}
            <span
              style={{
                background: `linear-gradient(135deg, ${BLUE}, ${BLUE_DEEP})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              GHL
            </span>
            .
          </h2>
          <div
            className="mx-auto mt-4 h-[3px] w-28 rounded-full"
            style={{ background: `linear-gradient(90deg, ${BLUE}, ${AMBER})` }}
          />
        </motion.div>

        {/* ── TAB SELECTOR — one unified container ── */}
        <motion.div
          variants={fadeRise}
          custom={1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="relative grid grid-cols-1 gap-4 overflow-hidden rounded-3xl border-2 lg:grid-cols-12 lg:items-stretch lg:gap-0"
          style={{
            borderColor: `${BLUE}40`,
            background: "#fffdf7",
            boxShadow:
              "0 1px 3px -1px rgba(15,23,42,0.08), 0 60px 120px -45px rgba(14,165,233,0.40), 0 24px 50px -24px rgba(15,23,42,0.18)",
          }}
        >
          {/* Continuous top gradient bar — one unbroken line across both columns */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[5px]"
            style={{
              background: `linear-gradient(90deg, ${BLUE}, ${BLUE_DEEP} 45%, ${AMBER})`,
            }}
            aria-hidden
          />

          {/* LEFT — tab list (dark blue-black surface, mixes black into branding) */}
          <div
            className="relative flex lg:col-span-4 xl:col-span-3"
            style={{
              background:
                "linear-gradient(180deg, #0A0F1A 0%, #0C1426 55%, #0E1A30 100%)",
            }}
          >
            {/* subtle blue glow inside the dark list */}
            <div
              className="pointer-events-none absolute -left-10 top-1/3 h-48 w-48 rounded-full opacity-40"
              style={{
                background: `radial-gradient(closest-side, ${BLUE}33, transparent 75%)`,
              }}
              aria-hidden
            />
            <div className="relative h-full w-full lg:pl-0 lg:pr-0">
              <TabList active={active} setActive={setActive} />
            </div>
          </div>

          {/* RIGHT — preview panel (light cream surface) */}
          <div
            className="relative flex lg:col-span-8 xl:col-span-9"
            style={{ background: "#fffdf7" }}
          >
            <PreviewPanel active={active} reduced={reduced} />
          </div>
        </motion.div>

        {/* "Also fluent in" — centered below */}
        <motion.div
          variants={fadeRise}
          custom={10}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-14 flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-3">
            <span
              className="h-px w-12"
              style={{
                background: `linear-gradient(90deg, transparent, ${AMBER}80)`,
              }}
            />
            <span
              className="text-xs font-bold uppercase tracking-[0.20em]"
              style={{ color: AMBER_DEEP }}
            >
              Also fluent in
            </span>
            <span
              className="h-px w-12"
              style={{
                background: `linear-gradient(90deg, ${AMBER}80, transparent)`,
              }}
            />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {TOOLS.map((tool, i) => (
              <motion.div
                key={tool.name}
                variants={chipRise}
                custom={i}
                initial="hidden"
                whileInView="show"
                whileHover={{ y: -3 }}
                className="flex items-center gap-2 rounded-full border bg-white px-4 py-2"
                style={{
                  borderColor: `${BLUE}30`,
                  boxShadow: "0 1px 3px -1px rgba(15,23,42,0.06)",
                }}
              >
                <span style={{ color: BLUE_DEEP }}>
                  <tool.Icon />
                </span>
                <span className="text-xs font-semibold" style={{ color: INK }}>
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Platforms;
