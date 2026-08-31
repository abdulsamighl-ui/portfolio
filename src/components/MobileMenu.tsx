import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const PHOTO_URL =
  "https://assets.cdn.filesafe.space/iOGsmaqdn9RhVgUvj3fD/media/6a791be303343f290f7f4c24.png";

export type NavLink = { label: string; href: string };

type Props = {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
  active: string;
  onNavigate: (href: string) => void;
};

const MobileMenu = ({ open, onClose, links, active, onNavigate }: Props) => {
  const handleClick = (href: string) => {
    onNavigate(href);
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[60] md:hidden"
          aria-hidden
        >
          {/* Dark semi-transparent backdrop — tap to close */}
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="absolute inset-0 h-full w-full bg-[hsl(200_20%_8%_/_0.55)] backdrop-blur-[6px]"
          />

          {/* Sliding panel from the right */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col overflow-y-auto bg-[#FAF5EF] px-6 pb-10 pt-6 shadow-[0_0_60px_-10px_rgba(0,0,0,0.35)]"
          >
            {/* Panel header — avatar + close */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span
                  className="h-9 w-9 overflow-hidden rounded-full ring-2"
                  style={{
                    boxShadow: "0 4px 12px -4px hsl(193 62% 45% / 0.5)",
                    borderColor: "hsl(193 62% 45% / 0.4)",
                  }}
                >
                  <img
                    src={PHOTO_URL}
                    alt="Abdul Sami"
                    className="h-full w-full object-cover"
                    loading="eager"
                    width={36}
                    height={36}
                  />
                </span>
                <span className="font-display text-[15px] font-bold tracking-tight text-hero-ink">
                  Abdul Sami
                </span>
              </div>
              <button
                type="button"
                aria-label="Close menu"
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70 text-hero-ink transition-colors hover:bg-white"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* Nav links — stacked, generous touch targets */}
            <nav className="mt-8 flex flex-col">
              {links.map((link) => {
                const isActive = active === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(link.href);
                    }}
                    className={cn(
                      "flex min-h-[52px] items-center rounded-2xl px-4 font-display text-[19px] font-bold tracking-tight transition-colors duration-200",
                      isActive
                        ? "bg-[hsl(193_62%_45%_/_0.10)] text-hero-ink"
                        : "text-hero-muted hover:bg-black/[0.03] hover:text-hero-ink",
                    )}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* CTA — full width at the bottom */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleClick("#contact");
              }}
              className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-[15px] font-semibold text-white transition-all duration-200 active:scale-[0.99]"
              style={{
                backgroundColor: "hsl(var(--hero-emerald))",
                boxShadow:
                  "0 4px 12px -2px hsl(193 62% 45% / 0.35), 0 12px 28px -8px hsl(193 62% 45% / 0.55)",
              }}
            >
              Let's Talk
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
