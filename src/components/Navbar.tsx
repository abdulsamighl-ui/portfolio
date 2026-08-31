import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import MobileMenu from "./MobileMenu";

const PHOTO_URL =
  "https://assets.cdn.filesafe.space/iOGsmaqdn9RhVgUvj3fD/media/6a791be303343f290f7f4c24.png";

type NavLink = { label: string; href: string };

// Primary links always visible on desktop
const PRIMARY_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

// Secondary links grouped under "More"
const MORE_LINKS: NavLink[] = [
  { label: "Certificates", href: "#certificates" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQs", href: "#faqs" },
];

const ALL_LINKS: NavLink[] = [...PRIMARY_LINKS, ...MORE_LINKS];
const MORE_HREFS = new Set(MORE_LINKS.map((l) => l.href));

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const moreTimeout = useRef<number | null>(null);

  // While a programmatic (click-triggered) smooth scroll is in progress,
  // scroll-spy is locked so the active pill doesn't flicker through the
  // intermediate sections the page passes on its way to the target.
  const lockRef = useRef(false);
  const lockClearRef = useRef<number | null>(null);
  const lastScrollYRef = useRef(0);
  const settleRef = useRef<number | null>(null);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    if (mobileOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [mobileOpen]);

  const navRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Record<string, HTMLElement | null>>({});
  const [highlight, setHighlight] = useState({
    left: 0,
    width: 0,
    visible: false,
  });

  useEffect(() => {
    let rafId = 0;
    const sections = ALL_LINKS.map((l) => l.href);

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 12);

        // While a click-driven scroll is locked, ignore scroll-spy updates so
        // the active pill doesn't flicker through intermediate sections.
        if (lockRef.current) {
          // Detect when the programmatic scroll has settled (position stops
          // changing), then release the lock and resume live scroll-spy.
          if (lockClearRef.current) window.clearTimeout(lockClearRef.current);
          lockClearRef.current = window.setTimeout(() => {
            lockRef.current = false;
            lockClearRef.current = null;
          }, 140);
          lastScrollYRef.current = y;
          return;
        }

        // Scroll-spy: find the section whose top is closest above the trigger line.
        const trigger = 140; // a bit below the navbar
        let current = sections[0];
        let bestDistance = Infinity;
        for (const id of sections) {
          const el = document.querySelector(id) as HTMLElement | null;
          if (!el) continue;
          const top = el.getBoundingClientRect().top;
          // distance from trigger line (negative = already passed)
          const dist = Math.abs(top - trigger);
          if (top <= trigger && dist < bestDistance) {
            bestDistance = dist;
            current = id;
          }
        }
        setActive(current);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
      if (lockClearRef.current) window.clearTimeout(lockClearRef.current);
      if (settleRef.current) window.clearTimeout(settleRef.current);
    };
  }, []);

  // The highlight pill sits behind the ACTIVE link only (never on hover).
  const refKey = MORE_HREFS.has(active) ? "#more" : active;

  const measure = useCallback(() => {
    const el = linkRefs.current[refKey];
    const nav = navRef.current;
    if (el && nav) {
      const elRect = el.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();
      if (navRect.width > 0 && elRect.width > 0) {
        setHighlight({
          left: elRect.left - navRect.left,
          width: elRect.width,
          visible: true,
        });
        return;
      }
    }
    setHighlight((h) => ({ ...h, visible: false }));
  }, [refKey]);

  useLayoutEffect(() => {
    measure();
  }, [measure, scrolled]);

  useEffect(() => {
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    // Re-measure once fonts/layout settle.
    const t = window.setTimeout(measure, 300);
    return () => {
      window.removeEventListener("resize", onResize);
      window.clearTimeout(t);
    };
  }, [measure]);

  const openMore = () => {
    if (moreTimeout.current) window.clearTimeout(moreTimeout.current);
    setMoreOpen(true);
  };
  const closeMore = () => {
    moreTimeout.current = window.setTimeout(() => setMoreOpen(false), 120);
  };

  const handleNav = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    setMoreOpen(false);
    setHovered(null);

    // Move the active pill to the clicked link INSTANTLY and lock scroll-spy
    // so it doesn't flicker through intermediate sections during the scroll.
    lockRef.current = true;
    if (lockClearRef.current) window.clearTimeout(lockClearRef.current);
    if (settleRef.current) window.clearTimeout(settleRef.current);
    setActive(href);
    scrollTo(href);

    // Safety net: release the lock after the scroll is expected to finish,
    // in case no further scroll events fire to clear it.
    settleRef.current = window.setTimeout(() => {
      lockRef.current = false;
      settleRef.current = null;
    }, 900);
  };

  const isLinkActive = (href: string) => active === href;

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
    >
      <nav
        className={cn(
          "flex w-full max-w-5xl items-center justify-between gap-3 rounded-full border px-3 py-2.5 transition-all duration-300 sm:px-4",
          scrolled
            ? "border-black/5 bg-white/80 shadow-[0_4px_8px_-2px_rgba(20,24,27,0.10),0_12px_40px_-8px_rgba(20,24,27,0.18)] backdrop-blur-xl"
            : "border-black/[0.04] bg-white/55 shadow-[0_2px_4px_-1px_rgba(20,24,27,0.06),0_8px_24px_-8px_rgba(20,24,27,0.12)] backdrop-blur-md",
        )}
      >
        {/* Avatar + wordmark */}
        <a
          href="#home"
          onClick={(e) => handleNav(e, "#home")}
          className="group flex items-center gap-2.5 pl-1"
        >
          <span
            className="relative h-9 w-9 overflow-hidden rounded-full ring-2 transition-transform duration-300 group-hover:scale-105"
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
              decoding="async"
              width={36}
              height={36}
            />
          </span>
          <span className="font-display text-[15px] font-bold tracking-tight text-hero-ink">
            Abdul Sami
          </span>
        </a>

        {/* Center nav links */}
        <div
          ref={navRef}
          className="relative hidden items-center gap-0.5 md:flex"
        >
          {/* Sliding highlight — single shared element */}
          <motion.div
            className="pointer-events-none absolute rounded-full"
            style={{
              top: 0,
              bottom: 0,
              backgroundColor: "hsl(193 62% 45% / 0.10)",
            }}
            animate={{
              left: highlight.left,
              width: highlight.width,
              opacity: highlight.visible ? 1 : 0,
            }}
            transition={{
              type: "tween",
              duration: 0.2,
              ease: [0.4, 0, 0.2, 1],
            }}
            aria-hidden
          />

          {PRIMARY_LINKS.map((link) => {
            const isActive = isLinkActive(link.href);
            return (
              <a
                key={link.href}
                href={link.href}
                ref={(el) => {
                  linkRefs.current[link.href] = el;
                }}
                onClick={(e) => handleNav(e, link.href)}
                onMouseEnter={() => setHovered(link.href)}
                onMouseLeave={() => setHovered(null)}
                className={cn(
                  "relative rounded-full px-3 py-1.5 text-[12.5px] font-medium transition-colors duration-200",
                  isActive
                    ? "text-hero-ink"
                    : "text-hero-muted hover:text-[hsl(193_62%_45%)]",
                )}
              >
                <span className="relative">{link.label}</span>
              </a>
            );
          })}

          {/* More dropdown */}
          <div
            className="relative"
            onMouseEnter={openMore}
            onMouseLeave={closeMore}
          >
            <button
              type="button"
              ref={(el) => {
                linkRefs.current["#more"] = el;
              }}
              onClick={(e) => {
                e.preventDefault();
                setMoreOpen((v) => !v);
              }}
              onMouseEnter={() => setHovered("#more")}
              onMouseLeave={() => setHovered(null)}
              className={cn(
                "relative flex items-center gap-1 rounded-full px-3 py-1.5 text-[12.5px] font-medium transition-colors duration-200",
                MORE_HREFS.has(active)
                  ? "text-hero-ink"
                  : "text-hero-muted hover:text-[hsl(193_62%_45%)]",
              )}
            >
              <span className="relative">More</span>
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                className={cn(
                  "relative transition-transform duration-200",
                  moreOpen && "rotate-180",
                )}
              >
                <path
                  d="M6 9l6 6 6-6"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute right-0 top-full mt-2 w-44 overflow-hidden rounded-2xl border border-black/5 bg-white/95 p-1.5 shadow-[0_8px_30px_-8px_rgba(20,24,27,0.20)] backdrop-blur-xl"
                >
                  {MORE_LINKS.map((link) => {
                    const isActive = isLinkActive(link.href);
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => handleNav(e, link.href)}
                        onMouseEnter={() => setHovered(link.href)}
                        onMouseLeave={() => setHovered("#more")}
                        className={cn(
                          "block rounded-xl px-3.5 py-2 text-[13px] font-medium transition-colors duration-200",
                          isActive
                            ? "text-hero-ink"
                            : "text-hero-muted hover:bg-black/[0.03] hover:text-hero-ink",
                        )}
                      >
                        {link.label}
                      </a>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right side: CTA + mobile toggle */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            onClick={(e) => handleNav(e, "#contact")}
            className="group hidden shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full py-2 text-[13px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 active:scale-95 md:inline-flex"
            style={{
              backgroundColor: "hsl(var(--hero-emerald))",
              boxShadow:
                "0 2px 4px -1px hsl(193 62% 45% / 0.30), 0 8px 24px -6px hsl(193 62% 45% / 0.50)",
              paddingLeft: "18px",
              paddingRight: "18px",
            }}
          >
            Let's Talk
            <svg
              width="14"
              height="14"
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

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-black/5 bg-white/60 text-hero-ink transition-colors md:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              {mobileOpen ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile full-screen overlay menu */}
      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={ALL_LINKS}
        active={active}
        onNavigate={(href) => {
          setActive(href);
          scrollTo(href);
        }}
      />
    </motion.header>
  );
};

export default Navbar;
