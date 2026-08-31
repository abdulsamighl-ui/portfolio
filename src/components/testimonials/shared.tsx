import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  BLUE,
  BLUE_DEEP,
  AMBER,
  INK,
  MUTED,
} from "@/components/projects/colors";
import {
  EYEBROW,
  HEADING,
  SUPPORT,
  type Testimonial,
} from "@/components/testimonials/data";

export const PlayIcon = ({ className = "h-7 w-7" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path d="M8 5.5v13l11-6.5z" fill="white" />
  </svg>
);

export const SectionHeader = () => {
  const words = HEADING.split(" ");
  const head = words.slice(0, -1).join(" ");
  const tail = words.slice(-1).join(" ");
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="mb-12 mx-auto max-w-2xl text-center"
    >
      <div className="mb-4 flex items-center justify-center gap-3">
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
        className="mx-auto mt-5 h-[3px] w-28 rounded-full"
        style={{ background: `linear-gradient(90deg, ${BLUE}, ${AMBER})` }}
      />
    </motion.div>
  );
};

export const VideoFrame = ({
  testimonial,
  isActive,
  onActivate,
  rounded = "rounded-none",
  playSize = "h-16 w-16",
  aspect = "aspect-video",
}: {
  testimonial: Testimonial;
  isActive: boolean;
  onActivate: () => void;
  rounded?: string;
  playSize?: string;
  aspect?: string;
}) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (isActive) {
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  }, [isActive]);

  return (
    <div
      className={`relative ${aspect} w-full overflow-hidden bg-slate-900 ${rounded}`}
    >
      {isActive ? (
        <video
          ref={ref}
          src={testimonial.src}
          preload="metadata"
          playsInline
          controls
          autoPlay
          className="h-full w-full object-cover"
        />
      ) : (
        <button
          type="button"
          onClick={onActivate}
          aria-label={`Play ${testimonial.name} testimonial`}
          className="group absolute inset-0 cursor-pointer"
        >
          <img
            src={testimonial.poster}
            alt={`${testimonial.name} testimonial`}
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </button>
      )}
    </div>
  );
};

export const AmbientGlow = () => (
  <div className="pointer-events-none absolute inset-0" aria-hidden>
    <div
      className="absolute -left-24 top-10 h-72 w-72 rounded-full blur-3xl"
      style={{ background: `${BLUE}12` }}
    />
    <div
      className="absolute -right-24 bottom-0 h-80 w-80 rounded-full blur-3xl"
      style={{ background: `${AMBER}10` }}
    />
  </div>
);
