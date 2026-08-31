import { motion, type Variants } from "framer-motion";
import {
  BLUE,
  BLUE_DEEP,
  AMBER,
  INK,
  MUTED,
} from "@/components/projects/colors";
import type { Certificate } from "@/components/certificates/CertModal";

export const EYEBROW = "Credentials";
export const HEADING = "Certified across the tools I use";
export const SUPPORT =
  "Ten certifications backing up hands-on GoHighLevel, Google, and compliance work.";

export const fadeRise: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const DevLabel = ({ children }: { children: string }) => (
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <p
      className="mt-20 mb-1 text-center text-xs font-bold uppercase tracking-[0.3em]"
      style={{ color: "#94a3b8" }}
    >
      {children}
    </p>
  </div>
);

export const VariantHeader = () => {
  const words = HEADING.split(" ");
  const head = words.slice(0, -2).join(" ");
  const tail = words.slice(-2).join(" ");
  return (
    <motion.div
      variants={fadeRise}
      custom={0}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="mb-12 max-w-2xl"
    >
      <div className="mb-4 flex items-center gap-3">
        <span
          className="h-1.5 w-10 rounded-full"
          style={{ background: `linear-gradient(90deg, ${BLUE}, ${AMBER})` }}
        />
        <span
          className="text-xs font-bold uppercase tracking-[0.24em]"
          style={{ color: BLUE_DEEP }}
        >
          {EYEBROW}
        </span>
      </div>
      <h2
        className="font-display font-bold leading-[1.05] tracking-tight [font-size:clamp(1.6rem,3.6vw,2.6rem)]"
        style={{ color: INK }}
      >
        {head}{" "}
        <span
          style={{
            background: `linear-gradient(135deg, ${BLUE}, ${BLUE_DEEP})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {tail}
        </span>
      </h2>
      <p
        className="mt-4 text-base font-medium leading-relaxed"
        style={{ color: MUTED }}
      >
        {SUPPORT}
      </p>
      <div
        className="mt-5 h-[3px] w-28 rounded-full"
        style={{ background: `linear-gradient(90deg, ${BLUE}, ${AMBER})` }}
      />
    </motion.div>
  );
};

export const BadgeImage = ({ cert }: { cert: Certificate }) => (
  <div
    className="relative flex flex-1 items-center justify-center overflow-hidden rounded-xl"
    style={{
      padding: 16,
      background: `radial-gradient(closest-side, ${BLUE}10, transparent 75%), #f8fafc`,
    }}
  >
    <img
      src={cert.image}
      alt={`${cert.name} — ${cert.issuer}`}
      draggable={false}
      className="relative h-full w-full object-contain"
      style={{ imageRendering: "-webkit-optimize-contrast" }}
    />
  </div>
);

export const IssuerChip = ({ issuer }: { issuer: string }) => (
  <div className="mt-3 flex items-center justify-center gap-1.5 px-1">
    <span
      className="h-1.5 w-1.5 shrink-0 rounded-full"
      style={{ background: AMBER }}
      aria-hidden
    />
    <span
      className="truncate text-[11px] font-semibold uppercase tracking-wider"
      style={{ color: MUTED }}
    >
      {issuer}
    </span>
  </div>
);

export const CardName = ({ name }: { name: string }) => (
  <p
    className="text-center text-[13px] font-bold leading-tight tracking-tight"
    style={{ color: INK }}
  >
    {name}
  </p>
);
