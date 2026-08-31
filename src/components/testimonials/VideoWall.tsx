import { useState } from "react";
import { motion } from "framer-motion";
import { BLUE, BLUE_DEEP, INK, MUTED } from "@/components/projects/colors";
import { TESTIMONIALS } from "@/components/testimonials/data";
import {
  SectionHeader,
  VideoFrame,
  AmbientGlow,
} from "@/components/testimonials/shared";

const VideoWall = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden pt-14 sm:pt-12 lg:pt-14 pb-4 sm:pb-8 lg:pb-10"
    >
      <AmbientGlow />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              className="flex flex-col overflow-hidden rounded-2xl bg-white"
              style={{
                boxShadow:
                  "0 1px 3px -1px rgba(15,23,42,0.06), 0 18px 40px -20px rgba(15,23,42,0.22)",
                border: `1px solid ${BLUE}1f`,
              }}
            >
              <VideoFrame
                testimonial={t}
                isActive={active === i}
                onActivate={() => setActive(active === i ? null : i)}
                aspect="aspect-video"
              />

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                {/* PLACEHOLDER: replace with a short real quote pulled from each video */}
                <p
                  className="font-display text-[15px] font-medium italic leading-snug"
                  style={{ color: INK }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="mt-auto flex items-center gap-3 pt-5">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-base font-bold text-white"
                    style={{
                      background: `linear-gradient(135deg, ${BLUE}, ${BLUE_DEEP})`,
                    }}
                    aria-hidden
                  >
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p
                      className="font-display text-base font-bold leading-tight"
                      style={{ color: INK }}
                    >
                      {t.name}
                    </p>
                    {/* PLACEHOLDER: replace with real role/business for {t.name} */}
                    <p
                      className="text-xs font-medium leading-tight"
                      style={{ color: MUTED }}
                    >
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoWall;
