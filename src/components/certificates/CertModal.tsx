import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { BLUE, BLUE_DEEP, AMBER, INK } from "@/components/projects/colors";

export interface Certificate {
  name: string;
  issuer: string;
  image: string;
  category?: string;
}

const CertModal = ({
  cert,
  onClose,
}: {
  cert: Certificate | null;
  onClose: () => void;
}) => {
  useEffect(() => {
    if (!cert) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [cert, onClose]);

  return (
    <AnimatePresence>
      {cert && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: "rgba(8,12,20,0.82)",
              backdropFilter: "blur(4px)",
            }}
            onClick={onClose}
            aria-hidden
          />

          {/* Dialog */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={cert.name}
            className="relative z-10 w-full max-w-xl overflow-hidden rounded-3xl border bg-white"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            style={{
              borderColor: `${BLUE}30`,
              boxShadow:
                "0 24px 60px -20px rgba(8,12,20,0.5), 0 60px 120px -40px rgba(14,165,233,0.35)",
            }}
          >
            {/* Top gradient bar */}
            <div
              className="h-[5px] w-full rounded-t-3xl"
              style={{
                background: `linear-gradient(90deg, ${BLUE}, ${BLUE_DEEP} 45%, ${AMBER})`,
              }}
              aria-hidden
            />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-30 flex h-9 w-9 items-center justify-center rounded-full border bg-white/90 transition-transform hover:scale-105"
              style={{ borderColor: `${BLUE}30`, color: INK }}
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex flex-col items-center p-6 sm:p-8">
              {/* Large badge image */}
              <div
                className="flex w-full items-center justify-center overflow-hidden rounded-2xl"
                style={{
                  maxWidth: 540,
                  padding: 24,
                  background: `radial-gradient(closest-side, ${BLUE}10, transparent 75%), #f8fafc`,
                }}
              >
                <img
                  src={cert.image}
                  alt={`${cert.name} — ${cert.issuer}`}
                  className="block max-h-[460px] w-auto max-w-full object-contain"
                  style={{ imageRendering: "-webkit-optimize-contrast" }}
                />
              </div>

              {/* Name */}
              <h3
                className="mt-6 text-center font-display text-xl font-bold leading-tight tracking-tight sm:text-2xl"
                style={{ color: INK }}
              >
                {cert.name}
              </h3>

              {/* Issuer */}
              <div className="mt-2 flex items-center justify-center gap-1.5">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: AMBER }}
                  aria-hidden
                />
                <span
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: BLUE_DEEP }}
                >
                  {cert.issuer}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CertModal;
