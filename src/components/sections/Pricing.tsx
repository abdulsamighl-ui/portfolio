import { motion } from "framer-motion";
import {
  BLUE,
  BLUE_DEEP,
  INK,
  MUTED,
  CHARCOAL,
} from "@/components/projects/colors";
import { SectionHeader } from "@/components/sections/SectionHeader";

type Plan = {
  name: string;
  price: string;
  priceUnit?: string;
  detail: string;
  blurb: string;
  bullets: string[];
  cta: string;
  popular?: boolean;
  icon: React.ReactNode;
};

const PLANS: Plan[] = [
  {
    name: "Hourly",
    price: "$16",
    priceUnit: "/hr",
    detail: "No minimum commitment",
    blurb: "Best for quick fixes, audits, or ongoing small tasks.",
    bullets: [
      "Pay only for time worked",
      "No long-term commitment",
      "Ideal for one-off automations or troubleshooting",
    ],
    cta: "Get a Quote",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Project-Based",
    price: "Custom",
    priceUnit: "Quote",
    detail: "Avg. turnaround: 1-3 weeks",
    blurb: "Best for a defined build: a website, funnel, or automation system.",
    bullets: [
      "Fixed scope and timeline",
      "Clear deliverables agreed upfront",
      "GHL, CRM, tracking, or automation builds",
    ],
    cta: "Start a Project",
    popular: true,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          d="M3 7l9-4 9 4-9 4-9-4z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 7v10l9 4 9-4V7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M12 11v10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Retainer",
    price: "Custom",
    priceUnit: "Monthly",
    detail: "Starts at 10 hrs/month",
    blurb: "Best for ongoing support across your GoHighLevel account.",
    bullets: [
      "Dedicated monthly hours",
      "Priority turnaround",
      "Automations, tracking, and CRM maintenance",
    ],
    cta: "Get a Quote",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          d="M21 12a9 9 0 11-3-6.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M21 4v5h-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const scrollToContact = () => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
};

const Pricing = () => (
  <section
    id="pricing"
    className="relative pt-14 sm:pt-12 lg:pt-14 pb-4 sm:pb-8 lg:pb-10"
  >
    {/* Single soft glow — cheap, no blur-3xl stack */}
    <div
      className="pointer-events-none absolute left-1/2 top-10 h-[420px] w-[820px] -translate-x-1/2 opacity-50"
      aria-hidden
      style={{
        background: `radial-gradient(closest-side, ${BLUE}14, transparent 70%)`,
      }}
    />

    <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
      <SectionHeader
        eyebrow="Engagement"
        heading="Ways to work together"
        support="Flexible ways to bring me onto your project, from quick fixes to full builds."
        align="center"
      />

      {/* Trust bar */}
      <div className="mt-7 flex items-center justify-center gap-3">
        <span
          className="h-px w-8 sm:w-12"
          style={{ background: `${MUTED}33` }}
        />
        <span
          className="text-[11px] font-bold uppercase tracking-[0.22em]"
          style={{ color: MUTED }}
        >
          Trusted across 30+ client engagements
        </span>
        <span
          className="h-px w-8 sm:w-12"
          style={{ background: `${MUTED}33` }}
        />
      </div>

      <div className="mt-14 grid grid-cols-1 gap-7 lg:mt-16 lg:grid-cols-3 lg:items-stretch">
        {PLANS.map((plan, i) => {
          const isPopular = !!plan.popular;
          return (
            <div
              key={plan.name}
              className={`relative ${isPopular ? "lg:-mt-4 lg:mb-4" : ""}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  boxShadow: isPopular
                    ? `0 2px 6px -2px rgba(15,23,42,0.35), 0 40px 76px -26px ${BLUE}aa`
                    : "0 2px 6px -2px rgba(15,23,42,0.1), 0 30px 60px -24px rgba(15,23,42,0.3)",
                  transition: { duration: 0.22, ease: "easeOut" },
                }}
                className="group relative z-10 flex h-full flex-col overflow-hidden rounded-3xl p-7 sm:p-8"
                style={{
                  background: isPopular
                    ? `linear-gradient(165deg, ${CHARCOAL} 0%, #0d1b2a 55%, ${BLUE_DEEP} 130%)`
                    : `linear-gradient(165deg, #ffffff 0%, #f4f9fc 100%)`,
                  boxShadow: isPopular
                    ? `0 2px 6px -2px rgba(15,23,42,0.3), 0 24px 50px -28px ${BLUE}88`
                    : "0 1px 3px -1px rgba(15,23,42,0.06), 0 14px 30px -20px rgba(15,23,42,0.18)",
                  border: isPopular
                    ? `1.5px solid ${BLUE}66`
                    : `1px solid ${BLUE}1a`,
                }}
              >
                {/* Soft radial spotlight that fades in on hover */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden
                  style={{
                    background: isPopular
                      ? `radial-gradient(60% 50% at 50% 0%, ${BLUE}22, transparent 70%)`
                      : `radial-gradient(60% 50% at 50% 0%, ${BLUE}14, transparent 70%)`,
                  }}
                />
                {/* Hover border glow ring */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden
                  style={{ boxShadow: `inset 0 0 0 1.5px ${BLUE}55` }}
                />
                {/* Decorative top accent bar */}
                <div
                  className="absolute inset-x-0 top-0 h-1.5"
                  style={{
                    background: `linear-gradient(90deg, ${BLUE}, ${BLUE_DEEP})`,
                  }}
                />

                {isPopular && (
                  <span
                    className="absolute right-5 top-6 z-10 flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${BLUE}, ${BLUE_DEEP})`,
                      boxShadow: `0 6px 18px -6px ${BLUE}cc`,
                    }}
                  >
                    <svg
                      viewBox="0 0 20 20"
                      className="h-3 w-3"
                      fill="currentColor"
                    >
                      <path d="M10 1l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.8 4.8 17.1l1-5.8L1.5 7.2l5.9-.9L10 1z" />
                    </svg>
                    Most Popular
                  </span>
                )}

                {/* Icon badge */}
                <div
                  className="relative flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-500 ease-out group-hover:scale-105"
                  style={{
                    background: isPopular
                      ? `linear-gradient(135deg, ${BLUE}44, ${BLUE_DEEP}22)`
                      : `${BLUE}14`,
                    color: isPopular ? "#fff" : BLUE_DEEP,
                    boxShadow: isPopular
                      ? "inset 0 0 0 1px rgba(255,255,255,0.22)"
                      : "none",
                  }}
                >
                  <span className="h-7 w-7">{plan.icon}</span>
                </div>

                <h3
                  className="mt-5 font-display text-xl font-bold"
                  style={{ color: isPopular ? "#fff" : INK }}
                >
                  {plan.name}
                </h3>
                <p
                  className="mt-1.5 text-sm font-medium leading-snug"
                  style={{
                    color: isPopular ? "rgba(255,255,255,0.82)" : MUTED,
                  }}
                >
                  {plan.blurb}
                </p>

                {/* Price */}
                <div className="mt-6 flex items-end gap-1.5">
                  <span
                    className="font-display text-4xl font-bold tracking-tight"
                    style={{ color: isPopular ? "#fff" : INK }}
                  >
                    {plan.price}
                  </span>
                  {plan.priceUnit && (
                    <span
                      className="mb-1 text-sm font-bold"
                      style={{
                        color: isPopular ? "rgba(255,255,255,0.7)" : MUTED,
                      }}
                    >
                      {plan.priceUnit}
                    </span>
                  )}
                </div>

                {/* Micro-detail */}
                <p
                  className="mt-2 text-xs font-medium"
                  style={{ color: isPopular ? "rgba(255,255,255,0.6)" : MUTED }}
                >
                  {plan.detail}
                </p>

                {/* Divider */}
                <div
                  className="mt-5 h-px w-full"
                  style={{
                    background: isPopular
                      ? "rgba(255,255,255,0.16)"
                      : `${BLUE}14`,
                  }}
                />

                <ul className="mt-6 flex flex-col gap-3.5">
                  {plan.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <span
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                        style={{
                          background: isPopular
                            ? `linear-gradient(135deg, ${BLUE}66, ${BLUE_DEEP}33)`
                            : `${BLUE}14`,
                        }}
                      >
                        <svg
                          viewBox="0 0 20 20"
                          className="h-3 w-3"
                          aria-hidden
                        >
                          <path
                            d="M5 10.5l3.2 3.2L15 7"
                            fill="none"
                            stroke={isPopular ? "#fff" : BLUE}
                            strokeWidth="2.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span
                        className="text-sm font-medium leading-snug"
                        style={{
                          color: isPopular ? "rgba(255,255,255,0.92)" : INK,
                        }}
                      >
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={scrollToContact}
                  className={
                    isPopular
                      ? "group/btn mt-8 w-full rounded-xl px-5 py-3.5 font-display text-sm font-bold transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 hover:shadow-xl"
                      : "group/btn mt-8 w-full rounded-xl border-[1.5px] px-5 py-3.5 font-display text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  }
                  style={
                    isPopular
                      ? {
                          background: `linear-gradient(135deg, ${BLUE}, ${BLUE_DEEP})`,
                          color: "#fff",
                          boxShadow: `0 10px 24px -10px ${BLUE}cc`,
                        }
                      : {
                          background: `${BLUE}12`,
                          color: BLUE_DEEP,
                          borderColor: `${BLUE}55`,
                        }
                  }
                >
                  <span className="inline-flex items-center gap-2">
                    {plan.cta}
                    <svg
                      viewBox="0 0 20 20"
                      className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <path
                        d="M4 10h11M11 6l4 4-4 4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Reassurance strip */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-10 text-center text-sm font-medium"
        style={{ color: MUTED }}
      >
        Not sure which fits?{" "}
        <button
          type="button"
          onClick={scrollToContact}
          className="font-bold underline-offset-2 hover:underline"
          style={{ color: BLUE_DEEP }}
        >
          Tell me about your project
        </button>{" "}
        and I'll recommend the right one.
      </motion.p>
    </div>
  </section>
);

export default Pricing;
