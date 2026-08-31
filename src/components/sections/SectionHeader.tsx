import { motion } from "framer-motion";
import {
  BLUE,
  BLUE_DEEP,
  AMBER,
  INK,
  MUTED,
} from "@/components/projects/colors";

export const SectionHeader = ({
  eyebrow,
  heading,
  support,
  align = "left",
}: {
  eyebrow: string;
  heading: string;
  support: string;
  align?: "left" | "center";
}) => {
  const words = heading.split(" ");
  const head = words.slice(0, -1).join(" ");
  const tail = words.slice(-1).join(" ");
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <div
        className={`mb-4 flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}
      >
        <span
          className="h-1.5 w-10 rounded-full"
          style={{ background: `linear-gradient(90deg, ${BLUE}, ${AMBER})` }}
        />
        <span
          className="text-xs font-bold uppercase tracking-[0.24em]"
          style={{ color: BLUE_DEEP }}
        >
          {eyebrow}
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
        {support}
      </p>
      <div
        className={`mt-5 h-[3px] w-28 rounded-full ${align === "center" ? "mx-auto" : ""}`}
        style={{ background: `linear-gradient(90deg, ${BLUE}, ${AMBER})` }}
      />
    </motion.div>
  );
};
