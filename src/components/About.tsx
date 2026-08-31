import { motion, useReducedMotion } from "framer-motion";
import {
  fadeRise,
  shimmerLine,
  Counter,
  BULLETS,
  CHIPS,
  smallCardBase,
  smallCardStyle,
  EmeraldTopBorder,
  CobaltTopBorder,
  HoverAccentLine,
  ShimmerSweep,
  CheckSmall,
} from "./about/shared";
import { PrimaryGhlCard } from "./about/PrimaryGhlCard";

const About = () => {
  const reduced = useReducedMotion();

  return (
    <section
      id="about"
      className="relative overflow-hidden pt-14 sm:pt-12 lg:pt-14 pb-4 sm:pb-8 lg:pb-10"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* ════════════ UNIFIED OUTER PANEL ════════════ */}
        <motion.div
          variants={fadeRise}
          custom={0}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="relative overflow-hidden rounded-3xl border border-about-border p-8 sm:p-10 lg:p-12"
          style={{
            background:
              "linear-gradient(135deg, hsl(0 0% 100% / 0.88), hsl(193 62% 45% / 0.02))",
            boxShadow:
              "0 4px 12px -3px rgba(20,24,27,0.14), 0 60px 140px -40px rgba(20,24,27,0.18), 0 0 0 1px hsl(193 62% 45% / 0.08), inset 0 1px 0 hsl(0 0% 100% / 0.8)",
          }}
        >
          {/* Static corner glow inside the panel (CSS pulse) */}
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full animate-[glowpulse_6s_ease-in-out_infinite]"
            style={{
              background:
                "radial-gradient(closest-side, hsl(193 55% 50% / 0.25), transparent 75%)",
            }}
            aria-hidden
          />
          {/* Bottom-left soft glow (CSS pulse) */}
          <div
            className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full animate-[glowpulse2_8s_ease-in-out_infinite]"
            style={{
              background:
                "radial-gradient(closest-side, hsl(38 90% 54% / 0.20), transparent 75%)",
            }}
            aria-hidden
          />

          {/* ════════════ 4-COLUMN GRID ════════════ */}
          <div className="relative grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-6">
            {/* ── Row 1, Left: Heading block ── */}
            <div className="col-span-2 flex flex-col justify-start">
              <div className="mb-5 flex items-center gap-3">
                <motion.span
                  variants={shimmerLine}
                  custom={0}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="h-px w-10 origin-left rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, hsl(193 62% 45%), transparent)",
                  }}
                  aria-hidden
                />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-about-emerald">
                  About
                </span>
                {!reduced && (
                  <span className="h-1.5 w-1.5 rounded-full bg-about-emerald animate-[dotpulse_2s_ease-in-out_infinite]" />
                )}
              </div>

              <h2 className="font-display font-bold leading-[1.05] tracking-tight text-about-ink [font-size:clamp(1.75rem,3.5vw,2.75rem)]">
                Four years deep in{" "}
                <span className="relative inline-block">
                  <span
                    className="relative z-10 bg-clip-text text-transparent animate-[gradshift_4s_linear_infinite]"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, hsl(193 62% 45%), hsl(193 55% 50%), hsl(193 62% 45%))",
                      backgroundSize: "200% 100%",
                    }}
                  >
                    one platform
                  </span>
                  <svg
                    className="absolute -bottom-1 left-0 z-0 w-full"
                    viewBox="0 0 200 8"
                    preserveAspectRatio="none"
                    aria-hidden
                  >
                    <path
                      d="M2 6 Q 40 1, 80 4 Q 120 7, 160 3 Q 180 1, 198 4"
                      stroke="hsl(38 90% 54%)"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.5"
                    />
                  </svg>
                </span>
                .
              </h2>

              <p className="mt-5 max-w-md text-base font-medium leading-relaxed text-about-ink">
                Since 2022, I've worked almost exclusively inside GoHighLevel.
              </p>

              <div className="mt-6 flex max-w-md items-center justify-start gap-8">
                <div className="flex flex-col">
                  <span className="font-display text-2xl font-bold text-about-emerald">
                    <Counter value={4} suffix="+" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-about-muted">
                    Years
                  </span>
                </div>
                <span className="h-8 w-px bg-about-border" aria-hidden />
                <div className="flex flex-col">
                  <span className="font-display text-2xl font-bold text-about-ink">
                    <Counter value={40} suffix="+" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-about-muted">
                    Accounts
                  </span>
                </div>
                <span className="h-8 w-px bg-about-border" aria-hidden />
                <div className="flex flex-col">
                  <span className="font-display text-2xl font-bold text-about-ink">
                    <Counter value={100} suffix="+" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-about-muted">
                    Workflows
                  </span>
                </div>
              </div>
            </div>

            {/* ── Row 1, Right: Primary GHL card ── */}
            <PrimaryGhlCard />

            {/* ── Left: 4 bullet cards in 2x2 ── */}
            <div className="col-span-2 grid grid-cols-2 gap-5 lg:gap-6">
              {BULLETS.map((bullet, i) => (
                <motion.div
                  key={bullet.label}
                  variants={fadeRise}
                  custom={2 + i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={reduced ? undefined : { y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className={smallCardBase}
                  style={smallCardStyle}
                >
                  <EmeraldTopBorder />
                  <ShimmerSweep />
                  <HoverAccentLine />
                  <span
                    className="pointer-events-none absolute right-3 top-3 font-mono text-[11px] font-bold tracking-wider"
                    style={{ color: "hsl(193 62% 45% / 0.2)" }}
                    aria-hidden
                  >
                    {bullet.num}
                  </span>
                  <span
                    className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: "hsl(193 62% 45% / 0.08)",
                      color: "hsl(193 62% 45%)",
                    }}
                    aria-hidden
                  >
                    <CheckSmall />
                  </span>
                  <h4 className="font-display text-[15px] font-semibold tracking-tight text-about-ink">
                    {bullet.label}
                  </h4>
                  <p className="mt-1 text-[12.5px] leading-snug text-about-muted">
                    {bullet.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* ── Right: 4 chip cards in 2x2 (amber accent for tracking/tech) ── */}
            <div className="col-span-2 grid grid-cols-2 gap-5 lg:gap-6">
              {CHIPS.map((chip, i) => (
                <motion.div
                  key={chip.name}
                  variants={fadeRise}
                  custom={2 + i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={reduced ? undefined : { y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className={smallCardBase}
                  style={smallCardStyle}
                >
                  <CobaltTopBorder />
                  <ShimmerSweep />
                  <HoverAccentLine amber />
                  <span
                    className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: "hsl(38 90% 54% / 0.08)",
                      color: "hsl(38 90% 54%)",
                    }}
                  >
                    <chip.Icon />
                  </span>
                  <h4 className="font-display text-[15px] font-semibold tracking-tight text-about-ink">
                    {chip.name}
                  </h4>
                  <p className="mt-1 text-[12.5px] leading-snug text-about-muted">
                    {chip.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ════════════ QUICK FACTS FOOTER STRIP ════════════ */}
          <div className="relative mt-8">
            <motion.div
              variants={shimmerLine}
              custom={6}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="h-px w-full origin-left"
              style={{
                background:
                  "linear-gradient(90deg, hsl(193 62% 45% / 0.4), transparent)",
              }}
              aria-hidden
            />
            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.12em] text-about-muted">
              <span className="flex items-center gap-2">
                <span
                  className="h-1 w-1 rounded-full bg-about-emerald"
                  aria-hidden
                />
                Since 2022
              </span>
              <span className="h-3 w-px bg-about-border" aria-hidden />
              <span className="flex items-center gap-2">
                <span
                  className="h-1 w-1 rounded-full bg-about-emerald"
                  aria-hidden
                />
                <Counter value={40} suffix="+" /> Sub-Accounts
              </span>
              <span className="h-3 w-px bg-about-border" aria-hidden />
              <span className="flex items-center gap-2">
                <span
                  className="h-1 w-1 rounded-full bg-about-emerald"
                  aria-hidden
                />
                <Counter value={100} suffix="+" /> Workflows
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
