import { motion, Variants, useReducedMotion } from "framer-motion";

const PHOTO_URL =
  "https://assets.cdn.filesafe.space/iOGsmaqdn9RhVgUvj3fD/media/6a791be303343f290f7f4c24.png";

const fadeRise: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: 0.25 + i * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const ArrowIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden
    className="relative transition-transform duration-300 group-hover:translate-x-0.5"
  >
    <path
      d="M5 12h14M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TrendUpIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M3 17l6-6 4 4 7-7M21 8v6h-6"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
    <path
      d="M12 7v5l3 2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Hero = () => {
  const reduced = useReducedMotion();
  const ambient = reduced ? {} : { scale: [1, 1.022, 1] };
  const drift1 = reduced ? {} : { x: [0, 16, -12, 0], y: [0, -14, 10, 0] };
  const drift2 = reduced ? {} : { x: [0, -12, 9, 0], y: [0, 9, -7, 0] };
  const orb1 = reduced ? {} : { x: [0, 34, -24, 0], y: [0, -28, 18, 0] };
  const orb2 = reduced ? {} : { x: [0, -28, 20, 0], y: [0, 22, -14, 0] };
  const orb3 = reduced ? {} : { x: [0, 20, -26, 0], y: [0, -18, 24, 0] };
  const float1 = reduced ? {} : { y: [0, -7, 0] };
  const float2 = reduced ? {} : { y: [0, -6, 0] };
  const floatBadge = reduced ? {} : { y: [0, -5, 0] };

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Slowly drifting ambient gradient orbs — boosted opacity for visible color */}
      <motion.div
        animate={orb1}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, hsl(193 62% 45% / 0.28), transparent 78%)",
          willChange: "transform",
        }}
        aria-hidden
      />
      <motion.div
        animate={orb2}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-10 top-1/3 h-80 w-80 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, hsl(38 90% 54% / 0.25), transparent 78%)",
          willChange: "transform",
        }}
        aria-hidden
      />
      <motion.div
        animate={orb3}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, hsl(193 55% 50% / 0.22), transparent 78%)",
          willChange: "transform",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-36 pb-4 sm:pt-40 sm:pb-8 lg:px-8 lg:pt-44 lg:pb-10">
        <div className="grid items-center gap-12 lg:grid-cols-[64%_36%] lg:gap-10">
          {/* Text column */}
          <div className="order-2 lg:order-1">
            {/* Status indicator */}
            <motion.div
              variants={fadeRise}
              custom={0}
              initial="hidden"
              animate="show"
              className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-black/5 bg-white/70 py-1.5 pl-2.5 pr-3.5 shadow-sm backdrop-blur-md"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
                  style={{ backgroundColor: "hsl(193 62% 45%)" }}
                />
                <span
                  className="relative inline-flex h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: "hsl(193 60% 42%)" }}
                />
              </span>
              <span className="text-[12px] font-medium text-hero-muted">
                Available for new projects
              </span>
            </motion.div>

            <motion.p
              variants={fadeRise}
              custom={1}
              initial="hidden"
              animate="show"
              className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-hero-emerald sm:text-sm"
            >
              <span
                className="h-px w-10 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, hsl(193 62% 45%), transparent)",
                }}
                aria-hidden
              />
              GHL Expert · CRM & Sales Automation
            </motion.p>

            <h1 className="font-display font-bold leading-[1.02] tracking-tight text-hero-ink [font-size:clamp(2.75rem,6vw,4.75rem)]">
              <motion.span
                variants={fadeRise}
                custom={2}
                initial="hidden"
                animate="show"
                className="relative block"
              >
                <span className="relative">I build the systems</span>
              </motion.span>
              <motion.span
                variants={fadeRise}
                custom={3}
                initial="hidden"
                animate="show"
                className="relative block"
                style={{
                  backgroundImage:
                    "linear-gradient(120deg, hsl(38 90% 54%), hsl(36 88% 50%), hsl(40 92% 56%))",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {/* soft glow behind highlight line */}
                <span
                  className="pointer-events-none absolute -inset-x-4 -inset-y-2 -z-10 blur-xl"
                  style={{
                    background:
                      "linear-gradient(120deg, hsl(38 90% 54% / 0.18), hsl(36 88% 50% / 0.12), transparent)",
                  }}
                  aria-hidden
                />
                your sales run on.
                <svg
                  viewBox="0 0 320 14"
                  preserveAspectRatio="none"
                  className="mt-2 h-3.5 w-[320px] max-w-full"
                  fill="none"
                  aria-hidden
                >
                  <motion.path
                    d="M4 8 Q 60 2, 120 6 Q 180 10, 240 5 Q 280 2, 316 7"
                    stroke="hsl(38 90% 54%)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.55"
                    initial={{ pathLength: 0 }}
                    animate={reduced ? {} : { pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.9, ease: "easeInOut" }}
                  />
                </svg>
              </motion.span>
            </h1>

            <motion.p
              variants={fadeRise}
              custom={4}
              initial="hidden"
              animate="show"
              className="mt-7 max-w-xl text-lg leading-relaxed text-hero-muted"
            >
              GoHighLevel workflows, pipelines, and automations that streamline
              how your business captures, nurtures, and closes leads, with clean
              Meta and Google conversion tracking built in.
            </motion.p>

            <motion.div
              variants={fadeRise}
              custom={5}
              initial="hidden"
              animate="show"
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <motion.a
                href="#projects"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 500, damping: 25 }}
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-3.5 text-base font-semibold text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-hero-emerald/60"
                style={{
                  backgroundColor: "hsl(193 62% 45%)",
                  boxShadow:
                    "0 4px 8px -2px hsl(193 62% 45% / 0.35), 0 14px 40px -10px hsl(193 62% 45% / 0.55)",
                }}
              >
                {/* shimmer sweep on hover */}
                <span
                  className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-500 group-hover:translate-x-full"
                  aria-hidden
                />
                {/* glow bloom on hover */}
                <span
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ boxShadow: "0 0 28px 4px hsl(193 55% 50% / 0.45)" }}
                  aria-hidden
                />
                <span className="relative transition-colors duration-300 group-hover:brightness-95">
                  View Case Studies
                </span>
                <ArrowIcon />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 500, damping: 25 }}
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border-2 px-8 py-3.5 text-base font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-hero-emerald/60"
                style={{
                  borderColor: "hsl(var(--hero-emerald))",
                  color: "hsl(var(--hero-emerald))",
                }}
              >
                {/* glow bloom on hover */}
                <span
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    boxShadow: "0 0 24px 2px hsl(193 62% 45% / 0.25) inset",
                  }}
                  aria-hidden
                />
                <span className="relative">Get in Touch</span>
                <ArrowIcon />
              </motion.a>
            </motion.div>

            {/* Trust / stat micro-chips */}
            <motion.div
              variants={fadeRise}
              custom={6}
              initial="hidden"
              animate="show"
              className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[12px] tracking-tight text-hero-muted/80"
            >
              <span className="flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-hero-emerald"
                  aria-hidden
                />
                40+ GHL Sub-Accounts
              </span>
              <span className="h-3 w-px bg-hero-muted/20" aria-hidden />
              <span className="flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-hero-emerald"
                  aria-hidden
                />
                100+ Workflows Built
              </span>
              <span className="h-3 w-px bg-hero-muted/20" aria-hidden />
              <span className="flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-hero-emerald"
                  aria-hidden
                />
                GHL Certified
              </span>
            </motion.div>
          </div>

          {/* Photo column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative order-1 mx-auto w-full max-w-[300px] lg:order-2 lg:max-w-[400px]"
          >
            {/* Rotating conic ring behind photo for dynamic energy */}
            <motion.div
              animate={reduced ? {} : { rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute -inset-8 -z-[6] rounded-[2rem] opacity-60"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0%, hsl(193 55% 50% / 0.25) 20%, transparent 35%, hsl(38 90% 54% / 0.18) 55%, transparent 70%, hsl(193 55% 52% / 0.20) 85%, transparent 100%)",
                filter: "blur(16px)",
                willChange: "transform",
              }}
              aria-hidden
            />
            {/* Drifting blue gradient-glow behind photo (pre-blurred radial, no filter) */}
            <motion.div
              animate={drift1}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -inset-16 -z-10 rounded-[3rem]"
              style={{
                background:
                  "radial-gradient(72% 72% at 58% 34%, hsl(193 55% 50% / 0.45), hsl(193 55% 52% / 0.12) 50%, transparent 78%)",
                willChange: "transform",
              }}
              aria-hidden
            />
            {/* Secondary amber glow for depth contrast (soft radial, no filter) */}
            <motion.div
              animate={drift2}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -bottom-10 -right-8 -z-10 h-48 w-48 rounded-full"
              style={{
                background:
                  "radial-gradient(closest-side, hsl(38 90% 54% / 0.28), transparent 80%)",
                willChange: "transform",
              }}
              aria-hidden
            />

            {/* Stacked-card 3D frame — fanned deck of three layers for real depth */}
            <motion.div
              animate={ambient}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="group relative aspect-[4/5]"
              style={{ willChange: "transform" }}
            >
              {/* Back layer — solid blue-gradient card, rotated -8deg, peeks top-left & bottom-right */}
              <div
                className="absolute inset-0 rounded-[1.5rem] [transform:rotate(-8deg)_translate(-14px,-12px)] transition-transform duration-500 ease-out group-hover:[transform:rotate(-10deg)_translate(-20px,-17px)]"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(193 62% 45%) 0%, hsl(193 55% 50%) 45%, hsl(195 60% 42%) 100%)",
                  boxShadow:
                    "0 2px 6px -2px rgba(20,24,27,0.10), 0 40px 90px -24px hsl(193 62% 40% / 0.30)",
                }}
                aria-hidden
              />
              {/* Middle layer — semi-transparent glass card, thin blue border, rotated -4deg */}
              <div
                className="absolute inset-0 rounded-[1.35rem] bg-white/55 backdrop-blur-sm [transform:rotate(-4deg)_translate(8px,10px)] transition-transform duration-500 ease-out group-hover:[transform:rotate(-2deg)_translate(13px,15px)]"
                style={{
                  boxShadow:
                    "0 2px 5px -2px rgba(20,24,27,0.08), 0 32px 70px -20px hsl(193 62% 45% / 0.20)",
                }}
                aria-hidden
              />
              {/* Front layer — the actual photo, nearly straight, soft ambient lift */}
              <div
                className="absolute inset-0 overflow-hidden rounded-[1.15rem] [transform:rotate(-1deg)] transition-transform duration-500 ease-out group-hover:[transform:rotate(0deg)]"
                style={{
                  boxShadow:
                    "0 1px 3px -1px rgba(20,24,27,0.10), 0 48px 96px -20px rgba(20,24,27,0.22), 0 18px 40px -14px hsl(193 62% 45% / 0.18), 0 0 0 1px hsl(193 62% 45% / 0.08)",
                }}
              >
                <img
                  src={PHOTO_URL}
                  alt="GoHighLevel expert and CRM automation specialist portrait"
                  className="h-full w-full object-cover"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  width={400}
                  height={500}
                />
                {/* emerald-tinted studio backdrop — tints edges, keeps subject clear */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(125% 125% at 50% 38%, transparent 38%, hsl(193 55% 42% / 0.30) 100%)",
                    mixBlendMode: "soft-light",
                  }}
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 50%, hsl(193 55% 38% / 0.14) 100%)",
                  }}
                  aria-hidden
                />
                {/* Top sheen for glass-like premium feel */}
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-1/3"
                  style={{
                    background:
                      "linear-gradient(180deg, hsl(0 0% 100% / 0.12), transparent)",
                  }}
                  aria-hidden
                />
              </div>
            </motion.div>

            {/* Floating glass badge — GHL Certified Admin (enlarged, prominent) */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0, ...floatBadge }}
              transition={{
                opacity: { duration: 0.5, delay: 1.1 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute -bottom-7 -left-6 flex items-center gap-4 rounded-2xl border bg-white/90 px-6 py-5 backdrop-blur-xl sm:-left-10"
              style={{
                borderColor: "hsl(38 90% 54% / 0.30)",
                willChange: "transform",
                boxShadow:
                  "0 4px 8px -2px rgba(20,24,27,0.18), 0 28px 64px -16px hsl(38 90% 54% / 0.40), 0 8px 20px -4px rgba(20,24,27,0.16)",
              }}
            >
              {/* Cobalt glow halo behind badge */}
              <span
                className="pointer-events-none absolute -inset-1.5 -z-10 rounded-2xl opacity-60"
                style={{
                  background:
                    "radial-gradient(closest-side, hsl(38 90% 54% / 0.25), transparent 75%)",
                }}
                aria-hidden
              />
              <div className="relative shrink-0">
                <img
                  src="https://assets.cdn.filesafe.space/iOGsmaqdn9RhVgUvj3fD/media/6a7931c4888087201987bef2.png"
                  alt="GoHighLevel Certified Admin badge"
                  width={52}
                  height={52}
                  loading="lazy"
                  decoding="async"
                  className="h-[52px] w-[52px] rounded-xl object-cover ring-2"
                  style={{ boxShadow: "0 0 0 2px hsl(38 90% 54% / 0.40)" }}
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[18px] font-bold text-hero-ink">
                  GHL Certified
                </span>
                <span
                  className="text-[13px] font-medium"
                  style={{ color: "hsl(38 90% 50%)" }}
                >
                  Admin Specialist
                </span>
              </div>
              {/* Verified checkmark accent — amber */}
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white"
                style={{ backgroundColor: "hsl(38 90% 54%)" }}
                aria-hidden
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </motion.div>

            {/* Floating metric card — top right */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0, ...float1 }}
              transition={{
                opacity: { duration: 0.5, delay: 1.25 },
                x: { duration: 0.5, delay: 1.25 },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute -top-5 -right-3 flex items-center gap-2.5 rounded-2xl border border-black/5 bg-white/85 px-3.5 py-2.5 shadow-[0_4px_8px_-2px_rgba(20,24,27,0.14),0_20px_48px_-12px_rgba(20,24,27,0.22)] backdrop-blur-xl sm:-right-6"
              style={{ willChange: "transform" }}
            >
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-white"
                style={{ backgroundColor: "hsl(193 62% 45%)" }}
              >
                <TrendUpIcon />
              </span>
              <div className="leading-tight">
                <div className="font-display text-[15px] font-bold text-hero-ink">
                  +34%
                </div>
                <div className="text-[10px] font-medium text-hero-muted">
                  Pipeline Conv.
                </div>
              </div>
            </motion.div>

            {/* Floating metric card — mid right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0, ...float2 }}
              transition={{
                opacity: { duration: 0.5, delay: 1.4 },
                x: { duration: 0.5, delay: 1.4 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute top-[42%] -right-2 flex items-center gap-2.5 rounded-2xl border border-black/5 bg-white/85 px-3.5 py-2.5 shadow-[0_4px_8px_-2px_rgba(20,24,27,0.14),0_20px_48px_-12px_rgba(20,24,27,0.22)] backdrop-blur-xl sm:-right-5"
              style={{ willChange: "transform" }}
            >
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-white"
                style={{ backgroundColor: "hsl(38 90% 54%)", color: "white" }}
              >
                <ClockIcon />
              </span>
              <div className="leading-tight">
                <div className="font-display text-[15px] font-bold text-hero-ink">
                  -2.1h
                </div>
                <div className="text-[10px] font-medium text-hero-muted">
                  Reply Time
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
