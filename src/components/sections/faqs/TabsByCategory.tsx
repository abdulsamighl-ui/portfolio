import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, MessageCircleQuestion } from "lucide-react";
import { FAQS, CATEGORIES, type FaqCategory } from "./data";
import { BLUE, INK, MUTED } from "@/components/projects/colors";
import { FaqHeader } from "./shared";

const CAT_ACCENT: Record<FaqCategory, string> = {
  Platform: BLUE,
  Process: "#FFC541",
  Payment: "#34D399",
};

const TabsByCategory = () => {
  const [active, setActive] = useState<FaqCategory>("Platform");
  const [open, setOpen] = useState<number | null>(null);
  const filtered = FAQS.map((f, i) => ({ ...f, idx: i })).filter(
    (f) => f.category === active,
  );

  return (
    <section
      id="faqs"
      className="relative pt-14 sm:pt-12 lg:pt-14 pb-4 sm:pb-8 lg:pb-10"
    >
      {/* ambient glows */}
      <div
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full opacity-50"
        style={{
          background: `radial-gradient(closest-side, ${BLUE}22, transparent 75%)`,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-32 h-72 w-72 rounded-full opacity-40"
        style={{
          background: `radial-gradient(closest-side, #FFC54122, transparent 75%)`,
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
        <FaqHeader />

        {/* Question list */}
        <div className="mx-auto max-w-2xl space-y-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-3"
            >
              {filtered.map(({ q, a, idx, icon: Icon }, i) => {
                const isOpen = open === idx;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group overflow-hidden rounded-2xl border bg-white transition-all duration-200"
                    style={{
                      borderColor: isOpen ? BLUE : "#e8e3d9",
                      boxShadow: isOpen
                        ? `0 14px 36px -14px ${BLUE}55, 0 2px 8px -2px rgba(15,23,42,0.06)`
                        : "0 1px 3px -1px rgba(15,23,42,0.06)",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : idx)}
                      className="flex w-full items-center gap-4 px-5 py-4 text-left transition-colors duration-200"
                    >
                      {/* icon badge */}
                      <span
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-200"
                        style={{
                          background: isOpen
                            ? `linear-gradient(135deg, ${BLUE}, #1b6f8f)`
                            : "#f4f1ea",
                          color: isOpen ? "#fff" : BLUE,
                        }}
                      >
                        <Icon className="h-[18px] w-[18px]" strokeWidth={2.1} />
                      </span>

                      <span
                        className="flex-1 font-display text-[15.5px] font-bold leading-snug transition-colors duration-200 sm:text-[16.5px]"
                        style={{ color: isOpen ? BLUE : INK }}
                      >
                        {q}
                      </span>

                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                        style={{
                          background: isOpen ? BLUE : "#f4f1ea",
                          color: isOpen ? "#fff" : MUTED,
                        }}
                      >
                        <Plus className="h-4 w-4" strokeWidth={2.6} />
                      </motion.span>
                    </button>

                    <div
                      className="grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
                      style={{
                        gridTemplateRows: isOpen ? "1fr" : "0fr",
                        opacity: isOpen ? 1 : 0,
                      }}
                    >
                      <div className="min-h-0">
                        <div
                          className="ml-[60px] mr-5 mb-4 h-[2px] rounded-full"
                          style={{
                            background: `linear-gradient(90deg, ${BLUE}55, transparent)`,
                          }}
                        />
                        <p
                          className="ml-[60px] mr-5 mb-5 text-[14.5px] font-medium leading-relaxed"
                          style={{ color: MUTED }}
                        >
                          {a}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Category tabs (below the list) */}
        <div className="mt-9 flex flex-col items-center gap-3">
          <span
            className="text-[11px] font-bold uppercase tracking-[0.22em]"
            style={{ color: MUTED }}
          >
            Filter by topic
          </span>
          <div className="flex flex-wrap justify-center gap-2.5">
            {CATEGORIES.map((cat) => {
              const isActive = active === cat;
              const accent = CAT_ACCENT[cat];
              const count = FAQS.filter((f) => f.category === cat).length;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setActive(cat);
                    setOpen(null);
                  }}
                  className="flex items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-bold transition-all duration-200"
                  style={
                    isActive
                      ? {
                          background: accent,
                          color: "#fff",
                          boxShadow: `0 10px 24px -8px ${accent}99`,
                        }
                      : {
                          background: "#fff",
                          color: INK,
                          border: "1px solid #e8e3d9",
                        }
                  }
                >
                  {cat}
                  <span
                    className="flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[11px] font-bold"
                    style={{
                      background: isActive
                        ? "rgba(255,255,255,0.25)"
                        : "#f4f1ea",
                      color: isActive ? "#fff" : MUTED,
                    }}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Still have questions — help card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col items-center justify-between gap-4 overflow-hidden rounded-2xl border p-6 sm:flex-row sm:gap-6"
          style={{
            borderColor: `${BLUE}33`,
            background: "linear-gradient(135deg, #fffdf7 0%, #f6fbfd 100%)",
            boxShadow: "0 12px 32px -16px rgba(15,23,42,0.12)",
          }}
        >
          <div className="flex items-center gap-4">
            <span
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white"
              style={{
                background: `linear-gradient(135deg, ${BLUE}, #1b6f8f)`,
                boxShadow: `0 10px 24px -8px ${BLUE}77`,
              }}
            >
              <MessageCircleQuestion className="h-6 w-6" strokeWidth={2} />
            </span>
            <div>
              <p
                className="font-display text-[15px] font-bold"
                style={{ color: INK }}
              >
                Still have a question?
              </p>
              <p className="text-[13.5px] font-medium" style={{ color: MUTED }}>
                Book a free discovery call and I'll walk you through it.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 rounded-full px-6 py-3 text-[13px] font-bold transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "#FFC541",
              color: "#1C1F24",
              boxShadow: "0 10px 24px -10px #FFC54199",
            }}
          >
            Ask me directly
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TabsByCategory;
