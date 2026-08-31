import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wrench,
  Clock,
  DollarSign,
  MessageSquare,
  LifeBuoy,
  Settings2,
  FileText,
  Wallet,
} from "lucide-react";
import { BLUE, BLUE_DEEP, INK, MUTED } from "@/components/projects/colors";
import { SectionHeader } from "@/components/sections/SectionHeader";

const ICONS = [
  Wrench, // platforms
  Clock, // timeline
  DollarSign, // hourly vs fixed
  Settings2, // fix existing
  LifeBuoy, // ongoing support
  MessageSquare, // communication
  FileText, // what you need
  Wallet, // payments
];

const FAQS = [
  {
    q: "What platforms do you specialize in?",
    a: "GoHighLevel is my core focus, alongside Zapier, n8n, Meta Pixel and Conversions API, Google Tag Manager, GA4, and Google Ads tracking.",
  },
  {
    q: "How long does a typical project take?",
    a: "It depends on scope. Simple automations can take a few days; full website or funnel builds typically take 1-3 weeks.",
  },
  {
    q: "Do you work hourly or on fixed-price projects?",
    a: "Both. Small tasks and ongoing support work well hourly, while defined builds are usually quoted as a fixed project price.",
  },
  {
    q: "Can you fix or improve an existing GoHighLevel setup?",
    a: "Yes, a lot of my work is auditing and cleaning up existing sub-accounts, fixing broken automations, and improving tracking accuracy.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Yes, through the retainer option, or on an as-needed hourly basis if something needs adjusting later.",
  },
  {
    q: "How do we communicate during the project?",
    a: "Typically over email or your preferred messaging platform, with regular updates and screenshots at each milestone.",
  },
  {
    q: "What do you need from me to get started?",
    a: "Access to your GoHighLevel sub-account (or relevant platforms), a clear idea of the goal, and any existing brand assets if it's a website or funnel build.",
  },
  {
    q: "How do payments work?",
    a: "Project-based work is typically split into a deposit and a final payment on delivery; hourly and retainer work is billed on an agreed schedule.",
  },
];

// Distribute 8 items into 2 columns, top-to-bottom (4 + 4)
const colCount = 2;
const columns: number[][] = Array.from({ length: colCount }, () => []);
FAQS.forEach((_, i) => columns[i % colCount].push(i));

const Faqs = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faqs" className="relative overflow-hidden py-20 sm:py-24">
      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Questions"
          heading="Frequently asked questions"
          support="Everything you might want to know before we start working together."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {columns.map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-5 md:gap-6">
              {col.map((i, idx) => {
                const item = FAQS[i];
                const isOpen = open === i;
                const Icon = ICONS[i] ?? MessageSquare;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.45,
                      delay: idx * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={
                      isOpen
                        ? undefined
                        : {
                            y: -4,
                            boxShadow: "0 18px 40px -24px rgba(15,23,42,0.28)",
                          }
                    }
                    className="group overflow-hidden rounded-2xl bg-white transition-shadow duration-300"
                    style={{
                      border: `1px solid ${isOpen ? BLUE : "#ece8e0"}`,
                      boxShadow: isOpen
                        ? `0 1px 3px -1px rgba(15,23,42,0.06), 0 22px 48px -26px ${BLUE}66`
                        : "0 1px 3px -1px rgba(15,23,42,0.05), 0 10px 24px -20px rgba(15,23,42,0.18)",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
                    >
                      <span
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                        style={{
                          background: isOpen
                            ? `linear-gradient(135deg, ${BLUE}, ${BLUE_DEEP})`
                            : `${BLUE}14`,
                          color: isOpen ? "#fff" : BLUE,
                        }}
                      >
                        <Icon className="h-5 w-5" strokeWidth={2.2} />
                      </span>

                      <span
                        className="flex-1 font-display text-[15px] font-bold leading-snug sm:text-[17px]"
                        style={{ color: INK }}
                      >
                        {item.q}
                      </span>

                      <span
                        className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors"
                        style={{
                          background: isOpen
                            ? `linear-gradient(135deg, ${BLUE}, ${BLUE_DEEP})`
                            : `${BLUE}12`,
                        }}
                      >
                        <span
                          className="absolute h-[2px] w-3.5 rounded-full transition-colors"
                          style={{ background: isOpen ? "#fff" : BLUE }}
                        />
                        <motion.span
                          animate={{
                            rotate: isOpen ? 90 : 0,
                            opacity: isOpen ? 0 : 1,
                          }}
                          transition={{ duration: 0.25 }}
                          className="absolute h-[2px] w-3.5 rounded-full"
                          style={{ background: BLUE }}
                        />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        >
                          <p
                            className="px-5 pb-5 pl-[5.5rem] text-[14px] font-medium leading-relaxed sm:px-6 sm:pl-[5.75rem]"
                            style={{ color: MUTED }}
                          >
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
