import { motion } from "framer-motion";

const PHOTO_URL =
  "https://assets.cdn.filesafe.space/iOGsmaqdn9RhVgUvj3fD/media/6a791be303343f290f7f4c24.png";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#about" },
  { label: "Skills", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

const UPWORK_URL =
  "https://www.upwork.com/freelancers/~01a71250ea3c3e358f?mp_source=share";

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

const UpworkIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
  >
    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34v-8.4H5.67v8.4h2.67zM7 8.84a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zm11.34 9.5v-4.6c0-2.46-1.32-3.6-3.08-3.6-1.42 0-2.06.78-2.42 1.33v-1.14h-2.67c.04.75 0 8.4 0 8.4h2.67v-4.68c0-.24.02-.48.09-.65.18-.48.62-.98 1.36-.98.96 0 1.35.73 1.35 1.8v4.51h2.7z" />
  </svg>
);

const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: "#1C1F24" }}
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(closest-side, hsl(193 62% 45% / 0.35), transparent 75%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(closest-side, hsl(38 90% 54% / 0.30), transparent 75%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10"
        >
          {/* Column 1 — Identity */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <span
                className="relative h-14 w-14 overflow-hidden rounded-full ring-2"
                style={{ borderColor: "hsl(193 62% 45% / 0.5)" }}
              >
                <img
                  src={PHOTO_URL}
                  alt="Abdul Sami"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width={56}
                  height={56}
                />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-white">
                  Abdul Sami
                </h3>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/40">
                  GHL Certified Expert
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              CRM, Automation &amp; Tracking Specialist building systems that
              capture, nurture, and close leads.
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4
              className="mb-5 text-[11px] font-bold uppercase tracking-[0.22em]"
              style={{ color: "hsl(193 62% 60%)" }}
            >
              Navigate
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="text-sm font-medium text-white/55 transition-colors duration-200 hover:text-[hsl(193_62%_60%)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Get in Touch */}
          <div>
            <h4
              className="mb-5 text-[11px] font-bold uppercase tracking-[0.22em]"
              style={{ color: "hsl(193 62% 60%)" }}
            >
              Connect
            </h4>
            <button
              type="button"
              onClick={() => scrollTo("#contact")}
              className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                backgroundColor: "hsl(38 90% 54%)",
                color: "#1C1F24",
                boxShadow: "0 6px 18px -6px hsl(38 90% 54% / 0.5)",
              }}
            >
              Book a Call
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
            </button>
            <a
              href={UPWORK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-2.5 text-sm font-medium text-white/55 transition-colors duration-200 hover:text-[hsl(193_62%_60%)]"
            >
              <UpworkIcon />
              Upwork Profile
            </a>
          </div>

          {/* Column 4 — Availability */}
          <div>
            <h4
              className="mb-5 text-[11px] font-bold uppercase tracking-[0.22em]"
              style={{ color: "hsl(193 62% 60%)" }}
            >
              Status
            </h4>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
              </span>
              <span className="text-sm font-medium text-white/70">
                Available for new projects
              </span>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-white/40">
              Usually replies within 24 hours.
            </p>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div
          className="mt-14 flex flex-col items-center justify-between gap-4 border-t pt-7 sm:flex-row"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <p className="text-xs font-medium text-white/40">
            © 2026 Abdul Sami. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={UPWORK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Upwork"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/45 transition-all duration-200 hover:border-[hsl(193_62%_60%)] hover:text-[hsl(193_62%_60%)]"
            >
              <UpworkIcon />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/45 transition-all duration-200 hover:border-[hsl(193_62%_60%)] hover:text-[hsl(193_62%_60%)]"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
