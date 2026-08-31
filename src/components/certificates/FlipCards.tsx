import { useState } from "react";
import { motion } from "framer-motion";

const useReducedMotion = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

import {
  BLUE,
  BLUE_DEEP,
  AMBER,
  AMBER_DEEP,
  INK,
  MUTED,
} from "@/components/projects/colors";
import CERTIFICATES from "@/components/certificates/data";
import {
  fadeRise,
  BadgeImage,
  IssuerChip,
  CardName,
} from "@/components/certificates/sharedVariants";

const EYEBROW = "Credentials";
const HEADING = "Certified across the tools I use";
const SUPPORT =
  "Ten certifications backing up hands-on GoHighLevel, Google, and compliance work.";

const GROUPS: { label: string; items: typeof CERTIFICATES }[] = [
  {
    label: "GoHighLevel",
    items: CERTIFICATES.filter((c) => c.category === "GoHighLevel"),
  },
  {
    label: "Google Ads",
    items: CERTIFICATES.filter((c) => c.category === "Google Ads"),
  },
  {
    label: "Analytics & Other",
    items: CERTIFICATES.filter((c) => c.category === "Analytics & Other"),
  },
];

const VerifiedSeal = () => (
  <svg
    viewBox="0 0 24 24"
    className="absolute right-2.5 top-2.5 h-6 w-6"
    aria-hidden
  >
    <path
      d="M12 1.5l2.4 1.8 3 .2.9 2.9 2.4 1.8-.9 2.9.9 2.9-2.4 1.8-.9 2.9-3 .2L12 22.5l-2.4-1.8-3-.2-.9-2.9L3.3 16l.9-2.9L3.3 10.2l2.4-1.8.9-2.9 3-.2L12 1.5z"
      fill={`${BLUE}14`}
      stroke={BLUE}
      strokeWidth="1"
    />
    <path
      d="M8.5 12l2.3 2.3 4.7-4.7"
      fill="none"
      stroke={BLUE_DEEP}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FlipCards = () => {
  const [flipped, setFlipped] = useState<number | null>(null);
  const reduced = useReducedMotion();

  const words = HEADING.split(" ");
  const head = words.slice(0, -2).join(" ");
  const tail = words.slice(-2).join(" ");

  return (
    <section
      id="certificates"
      className="relative overflow-hidden pt-14 sm:pt-12 lg:pt-14 pb-4 sm:pb-8 lg:pb-10"
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute -left-24 top-10 h-72 w-72 rounded-full blur-3xl"
          style={{ background: `${BLUE}14` }}
        />
        <div
          className="absolute -right-24 bottom-0 h-80 w-80 rounded-full blur-3xl"
          style={{ background: `${AMBER}12` }}
        />
        {/* Dotted backdrop texture */}
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `radial-gradient(${BLUE}22 1px, transparent 1px)`,
            backgroundSize: "26px 26px",
            maskImage:
              "radial-gradient(70% 60% at 50% 40%, #000 0%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(70% 60% at 50% 40%, #000 0%, transparent 80%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeRise}
          custom={0}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12 flex flex-col items-center justify-center text-center max-w-2xl mx-auto"
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

          {/* Verified stat badge - centered */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.5,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-5 flex items-center gap-3 rounded-2xl border px-5 py-2.5"
            style={{
              borderColor: `${BLUE}33`,
              background: "rgba(255,255,255,0.7)",
              backdropFilter: "blur(8px)",
              boxShadow: `0 12px 30px -18px ${BLUE}55`,
            }}
          >
            <div
              className="flex h-9 w-9 items-center justify-center rounded-xl"
              style={{
                background: `linear-gradient(135deg, ${BLUE}, ${BLUE_DEEP})`,
                boxShadow: `0 8px 20px -8px ${BLUE}88`,
              }}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                <path
                  d="M12 2l2.4 1.8 3 .2.9 2.9 2.4 1.8-.9 2.9.9 2.9-2.4 1.8-.9 2.9-3 .2L12 22l-2.4-1.8-3-.2-.9-2.9L3.3 16l.9-2.9L3.3 10.2l2.4-1.8.9-2.9 3-.2L12 2z"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.4"
                />
                <path
                  d="M8.5 12l2.3 2.3 4.7-4.7"
                  fill="none"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="text-left">
              <p
                className="font-display text-xl font-bold leading-none"
                style={{ color: INK }}
              >
                10
              </p>
              <p
                className="text-[10px] font-bold uppercase tracking-wider"
                style={{ color: MUTED }}
              >
                Verified credentials
              </p>
            </div>
          </motion.div>

          <div
            className="mx-auto mt-5 h-[3px] w-28 rounded-full"
            style={{
              background: `linear-gradient(90deg, ${BLUE}, ${AMBER})`,
            }}
          />
        </motion.div>

        {/* Grouped rows */}
        <div className="flex flex-col gap-10">
          {GROUPS.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: gi * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Category label */}
              <div className="mb-4 flex items-center gap-3">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: AMBER }}
                  aria-hidden
                />
                <h3
                  className="font-display text-sm font-bold uppercase tracking-[0.18em]"
                  style={{ color: BLUE_DEEP }}
                >
                  {group.label}
                </h3>
                <span
                  className="font-mono text-[11px] font-bold"
                  style={{ color: `${BLUE}99` }}
                >
                  {group.items.length}
                </span>
                <span
                  className="h-px flex-1 max-w-[120px]"
                  style={{ background: `${BLUE}33` }}
                  aria-hidden
                />
              </div>

              {/* Cards row — evenly distributed across full width */}
              <div
                className="flex flex-wrap justify-between"
                style={{ perspective: 1400, gap: 16 }}
              >
                {group.items.map((cert) => {
                  const idx = CERTIFICATES.indexOf(cert);
                  const isFlipped = flipped === idx;
                  const count = group.items.length;
                  return (
                    <motion.div
                      key={cert.name}
                      variants={fadeRise}
                      custom={idx}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      whileHover={
                        reduced
                          ? undefined
                          : {
                              y: -6,
                              scale: 1.025,
                              transition: {
                                type: "spring",
                                stiffness: 280,
                                damping: 22,
                              },
                            }
                      }
                      className="group relative h-72 cursor-pointer"
                      style={{
                        transformStyle: "preserve-3d",
                        width: `calc((100% - ${(count - 1) * 16}px) / ${count})`,
                        flexGrow: 1,
                        flexBasis: 0,
                        minWidth: count === 4 ? 200 : 240,
                      }}
                      onClick={() => setFlipped(isFlipped ? null : idx)}
                      onMouseEnter={() => setFlipped(idx)}
                      onMouseLeave={() => setFlipped(null)}
                      animate={{ rotateY: isFlipped ? 180 : 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    >
                      {/* Front */}
                      <div
                        className="absolute inset-0 flex flex-col overflow-hidden rounded-2xl bg-white p-3"
                        style={{
                          backfaceVisibility: "hidden",
                          boxShadow: isFlipped
                            ? `0 22px 44px -18px ${BLUE}55, 0 0 0 1.5px ${BLUE}66`
                            : "0 1px 3px -1px rgba(15,23,42,0.06), 0 14px 30px -16px rgba(15,23,42,0.18)",
                        }}
                      >
                        {/* Gradient border ring */}
                        <div
                          className="pointer-events-none absolute inset-0 rounded-2xl"
                          style={{
                            padding: 1.5,
                            background: `linear-gradient(140deg, ${BLUE}55, ${AMBER}33, transparent 60%)`,
                            WebkitMask:
                              "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                            WebkitMaskComposite: "xor",
                            maskComposite: "exclude",
                          }}
                          aria-hidden
                        />
                        {/* Holographic shine sweep on hover */}
                        <div
                          className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          aria-hidden
                        >
                          <div
                            className="absolute -inset-y-4 -left-1/3 w-1/3 rotate-12 blur-md"
                            style={{
                              background: `linear-gradient(90deg, transparent, ${BLUE}22, transparent)`,
                            }}
                          />
                        </div>
                        {/* Verified seal */}
                        <VerifiedSeal />
                        <BadgeImage cert={cert} />
                        <div className="mt-2 px-1">
                          <CardName name={cert.name} />
                          <IssuerChip issuer={cert.issuer} />
                        </div>
                      </div>
                      {/* Back */}
                      <div
                        className="absolute inset-0 flex flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl p-5 text-center"
                        style={{
                          backfaceVisibility: "hidden",
                          transform: "rotateY(180deg)",
                          background: `linear-gradient(150deg, ${BLUE}, ${BLUE_DEEP})`,
                          boxShadow: `0 18px 40px -18px ${BLUE}66`,
                        }}
                      >
                        {/* Decorative back glow */}
                        <div
                          className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl"
                          style={{ background: `${AMBER}33` }}
                          aria-hidden
                        />
                        {/* Inner glow ring */}
                        <div
                          className="pointer-events-none absolute inset-3 rounded-xl"
                          style={{
                            border: `1px solid ${AMBER}55`,
                            boxShadow: `inset 0 0 24px ${AMBER}22`,
                          }}
                          aria-hidden
                        />
                        <svg
                          viewBox="0 0 24 24"
                          className="relative h-9 w-9"
                          aria-hidden
                        >
                          <path
                            d="M12 2l2.4 1.8 3 .2.9 2.9 2.4 1.8-.9 2.9.9 2.9-2.4 1.8-.9 2.9-3 .2L12 22l-2.4-1.8-3-.2-.9-2.9L3.3 16l.9-2.9L3.3 10.2l2.4-1.8.9-2.9 3-.2L12 2z"
                            fill="none"
                            stroke="white"
                            strokeOpacity="0.9"
                            strokeWidth="1.3"
                          />
                          <path
                            d="M8.5 12l2.3 2.3 4.7-4.7"
                            fill="none"
                            stroke={AMBER}
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <p className="relative font-display text-lg font-bold leading-tight tracking-tight text-white">
                          {cert.name}
                        </p>
                        <span
                          className="relative h-1.5 w-1.5 rounded-full bg-white/80"
                          aria-hidden
                        />
                        <p className="relative text-xs font-semibold uppercase tracking-wider text-white/85">
                          {cert.issuer}
                        </p>
                        <p className="relative mt-1 text-[11px] font-medium leading-relaxed text-white/75">
                          Verified credential, earned through hands-on platform
                          work.
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlipCards;
