import { motion, Variants, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import {
  BarChartIcon,
  CertificateIcon,
  CheckSmall,
  Ga4Logo,
  GhlLogo,
  GtmLogo,
  MetaAdsLogos,
  TagIcon,
  TargetIcon,
} from "./icons";

export const CARD_ILLUST =
  "https://vibe.filesafe.space/1786325294182304607/assets/55dc87eb-3626-4aca-a5bc-2689d32b81d5.png";

/* ── Animation variants ────────────────────────────────────── */
export const fadeRise: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const shimmerLine: Variants = {
  hidden: { scaleX: 0 },
  show: (i: number) => ({
    scaleX: 1,
    transition: {
      duration: 0.7,
      delay: i * 0.08 + 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

/* ── Animated counter ── */
export const Counter = ({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      setDisplay(value);
      return;
    }
    let raf = 0;
    let start = 0;
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          const step = (ts: number) => {
            if (!start) start = ts;
            const p = Math.min((ts - start) / 1200, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(Math.round(eased * value));
            if (p < 1) raf = requestAnimationFrame(step);
          };
          raf = requestAnimationFrame(step);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, reduced]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
};

/* ── Data ──────────────────────────────────────────────────── */
export const BULLETS = [
  {
    num: "01",
    label: "CRM & Pipelines",
    desc: "Structure and nurture logic that turn leads into customers",
  },
  {
    num: "02",
    label: "Automations",
    desc: "Appointment and review flows without manual follow-up",
  },
  {
    num: "03",
    label: "Accurate Tracking",
    desc: "Meta, Google Ads & GA4 report real numbers, not guesses",
  },
  {
    num: "04",
    label: "One Platform",
    desc: "Focused on GHL, not spread across a dozen tools",
  },
];

export const CHIPS = [
  { name: "GA4", label: "Tracking & reporting", level: 88, Icon: Ga4Logo },
  {
    name: "Google Tag Manager",
    label: "Tag & event setup",
    level: 92,
    Icon: GtmLogo,
  },
  {
    name: "Meta & Google Ads",
    label: "Conversion delivery",
    level: 85,
    Icon: MetaAdsLogos,
  },
  {
    name: "GHL Certified",
    label: "Admin Specialist · Since 2022",
    level: 100,
    Icon: GhlLogo,
  },
];

/* ── Shared small-card style ────────────────────────────────── */
export const smallCardBase =
  "group relative overflow-hidden rounded-xl border border-about-border p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_16px_-4px_rgba(20,24,27,0.18),0_28px_64px_-16px_rgba(49,159,198,0.22)]";
export const smallCardStyle: CSSProperties = {
  background:
    "linear-gradient(135deg, hsl(0 0% 100% / 0.92), hsl(193 62% 45% / 0.03))",
  boxShadow:
    "0 2px 4px -1px rgba(20,24,27,0.12), 0 16px 36px -12px rgba(20,24,27,0.10), inset 0 1px 0 hsl(0 0% 100% / 0.7)",
};

export const EmeraldTopBorder = () => (
  <span
    className="pointer-events-none absolute inset-x-0 top-0 h-[3px]"
    style={{
      background: "linear-gradient(90deg, hsl(193 62% 45%), hsl(193 55% 50%))",
    }}
    aria-hidden
  />
);

export const CobaltTopBorder = () => (
  <span
    className="pointer-events-none absolute inset-x-0 top-0 h-[3px]"
    style={{
      background: "linear-gradient(90deg, hsl(38 90% 54%), hsl(40 92% 60%))",
    }}
    aria-hidden
  />
);

export const HoverAccentLine = ({ amber = false }: { amber?: boolean }) => (
  <span
    className="pointer-events-none absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full"
    style={{
      background: amber
        ? "linear-gradient(90deg, hsl(38 90% 54%), hsl(40 92% 60%))"
        : "linear-gradient(90deg, hsl(193 62% 45%), hsl(193 55% 50%))",
    }}
    aria-hidden
  />
);

export const ShimmerSweep = () => (
  <span
    className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
    style={{ width: "150%" }}
    aria-hidden
  />
);

export { CheckSmall };
