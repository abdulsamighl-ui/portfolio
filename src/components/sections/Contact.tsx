import { motion } from "framer-motion";
import {
  BLUE,
  BLUE_DEEP,
  AMBER,
  INK,
  MUTED,
} from "@/components/projects/colors";
import { SectionHeader } from "@/components/sections/SectionHeader";

const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 01-1.26-4.38c0-4.54 3.7-8.24 8.27-8.24 4.57 0 8.27 3.7 8.27 8.24s-3.7 8.24-8.29 8.24z" />
    <path d="M16.5 14.2c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42-.14 0-.31-.02-.48-.02-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.25 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path
      d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M3 12h18" />
  </svg>
);

type InfoRowProps = {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  interactive?: boolean;
};

const InfoRow = ({ icon, label, value, interactive = false }: InfoRowProps) => {
  const content = (
    <>
      <span
        className="flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110"
        style={{
          background: `linear-gradient(135deg, ${BLUE}22, ${BLUE_DEEP}14)`,
          color: BLUE_DEEP,
          boxShadow: `inset 0 0 0 1px ${BLUE}22`,
        }}
      >
        {icon}
      </span>
      <p
        className="mt-4 text-[10.5px] font-bold uppercase tracking-[0.18em]"
        style={{ color: MUTED }}
      >
        {label}
      </p>
      {typeof value === "string" ? (
        <p
          className="mt-1.5 font-display text-[15.5px] font-bold leading-snug"
          style={{ color: INK }}
        >
          {value}
        </p>
      ) : (
        value
      )}
    </>
  );

  if (interactive) {
    return (
      <a
        tabIndex={-1}
        className="group relative flex flex-col items-center justify-start gap-0 rounded-2xl px-2 py-3 text-center transition-all duration-200 hover:-translate-y-1"
        style={{ textDecoration: "none" }}
      >
        <span
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          style={{ background: `${BLUE}08` }}
          aria-hidden
        />
        {content}
      </a>
    );
  }
  return (
    <div className="flex flex-col items-center justify-start gap-0 rounded-2xl px-2 py-3 text-center">
      {content}
    </div>
  );
};

const GroupLabel = ({ children }: { children: React.ReactNode }) => (
  <span
    className="text-[11px] font-bold uppercase tracking-[0.22em]"
    style={{ color: BLUE_DEEP }}
  >
    {children}
  </span>
);

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden pt-14 sm:pt-12 lg:pt-14 pb-4 sm:pb-8 lg:pb-10"
    >
      {/* Ambient glows */}
      <div
        className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full opacity-50"
        style={{
          background: `radial-gradient(closest-side, ${BLUE}22, transparent 75%)`,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-24 h-80 w-80 rounded-full opacity-40"
        style={{
          background: `radial-gradient(closest-side, ${AMBER}1f, transparent 75%)`,
        }}
        aria-hidden
      />
      {/* Decorative dotted ring */}
      <div
        className="pointer-events-none absolute right-10 top-32 hidden h-40 w-40 rounded-full opacity-30 lg:block"
        style={{
          backgroundImage: `radial-gradient(${BLUE}40 1px, transparent 1px)`,
          backgroundSize: "10px 10px",
          maskImage:
            "radial-gradient(closest-side, transparent 60%, #000 62%, #000 100%)",
          WebkitMaskImage:
            "radial-gradient(closest-side, transparent 60%, #000 62%, #000 100%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          eyebrow="Get in touch"
          heading="Let's build something"
          support="Book a time directly, no forms, no waiting."
          align="center"
        />

        <div className="flex flex-col items-center">
          {/* Intro paragraph with decorative quote mark */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative mt-3 max-w-xl text-center font-display text-lg font-medium leading-relaxed"
            style={{ color: INK }}
          >
            Pick a time that works for you and I'll walk you through your CRM
            setup, automation needs, or project goals, no back-and-forth emails
            needed.
          </motion.p>

          {/* Live availability badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.45,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-5 flex items-center gap-2 rounded-full px-4 py-2"
            style={{
              background: "#dcfce7",
              border: `1px solid #86efac55`,
            }}
          >
            <span className="relative flex h-2 w-2">
              <span
                className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
                style={{ background: "#22c55e" }}
              />
              <span
                className="relative inline-flex h-2 w-2 rounded-full"
                style={{ background: "#22c55e" }}
              />
            </span>
            <span
              className="text-[12px] font-bold uppercase tracking-[0.14em]"
              style={{ color: "#15803d" }}
            >
              Available for new projects
            </span>
          </motion.div>

          {/* Info rows container — premium card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: 0.04,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mt-8 w-full max-w-[720px] overflow-hidden rounded-3xl bg-white px-6 py-7 sm:px-8 sm:py-8"
            style={{
              border: `1px solid ${BLUE}1f`,
              boxShadow:
                "0 1px 3px -1px rgba(15,23,42,0.06), 0 24px 56px -32px rgba(15,23,42,0.18)",
            }}
          >
            {/* Direct contact methods */}
            <div className="mb-5 flex items-center justify-center">
              <GroupLabel>Get in touch directly</GroupLabel>
            </div>
            <div className="grid grid-cols-3 items-start justify-items-center gap-3 sm:justify-between">
              <InfoRow
                label="Email"
                value={
                  <a
                    href="mailto:abdul.sami.ghl@gmail.com"
                    className="mt-1.5 text-center font-display text-[12px] xs:text-[13px] sm:text-[13.5px] md:text-[14.5px] font-bold leading-snug transition-all duration-200 group-hover:text-[#0369A1] [word-break:normal] break-words"
                    style={{ color: INK }}
                  >
                    abdul.sami.ghl@gmail.com
                  </a>
                }
                icon={<MailIcon />}
                interactive
              />
              <InfoRow
                label="WhatsApp"
                value={
                  <a
                    href="https://wa.me/923099573731"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 text-center font-display text-[15.5px] font-bold leading-snug transition-all duration-200 group-hover:text-[#0369A1]"
                    style={{ color: INK }}
                  >
                    +92 309 9573731
                  </a>
                }
                icon={<WhatsAppIcon />}
                interactive
              />
              <InfoRow
                label="Upwork"
                value={
                  <a
                    href="https://www.upwork.com/freelancers/~01a71250ea3c3e358f?mp_source=share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 text-center font-display text-[15.5px] font-bold leading-snug transition-all duration-200 group-hover:text-[#0369A1]"
                    style={{ color: INK }}
                  >
                    View Profile
                  </a>
                }
                icon={<BriefcaseIcon />}
                interactive
              />
            </div>

            {/* Plain divider */}
            <div className="my-7">
              <span
                className="block h-px w-full"
                style={{ background: `${MUTED}1f` }}
              />
            </div>

            {/* Quick info rows */}
            <div className="mb-5 flex items-center justify-center">
              <GroupLabel>What to expect</GroupLabel>
            </div>
            <div className="grid grid-cols-3 items-start justify-items-center gap-3 sm:justify-between">
              <InfoRow
                label="Call length"
                value="15-30 min discovery call"
                icon={
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path
                      d="M12 7v5l3 2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
              />
              <InfoRow
                label="Cost"
                value="Free, no obligation"
                icon={
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M5 12l4 4L19 6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
              />
              <InfoRow
                label="Where"
                value="Google Meet, link sent automatically"
                icon={
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="5" width="14" height="14" rx="2" />
                    <path
                      d="M16 10l6-3v10l-6-3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
              />
            </div>
          </motion.div>

          {/* Calendar embed — premium framed widget */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: 0.16,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative mt-8 w-full overflow-hidden rounded-3xl bg-white"
            style={{
              border: `1px solid ${BLUE}1f`,
              boxShadow:
                "0 1px 3px -1px rgba(15,23,42,0.06), 0 28px 64px -32px rgba(15,23,42,0.22)",
            }}
          >
            {/* Premium header bar */}
            <div
              className="relative flex items-center justify-between gap-3 overflow-hidden px-5 py-3.5 sm:px-7"
              style={{
                background: `linear-gradient(135deg, ${INK} 0%, #0f1a24 100%)`,
              }}
            >
              {/* Sheen sweep */}
              <span
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                  background: `linear-gradient(90deg, transparent 0%, ${BLUE}14 45%, transparent 60%)`,
                }}
                aria-hidden
              />
              <div className="relative flex items-center gap-2.5">
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-lg"
                  style={{
                    background: `linear-gradient(135deg, ${BLUE}, ${BLUE_DEEP})`,
                    boxShadow: `0 4px 12px -4px ${BLUE}aa`,
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path
                      d="M3 9h18M8 2v4M16 2v4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <p className="font-display text-[13px] font-bold text-white">
                    Discovery Call
                  </p>
                  <p
                    className="text-[11px] font-medium"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    Book your slot below
                  </p>
                </div>
              </div>
              <span
                className="relative flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.14em]"
                style={{
                  background: `${AMBER}22`,
                  color: AMBER,
                }}
              >
                <svg
                  viewBox="0 0 20 20"
                  className="h-3 w-3"
                  fill="currentColor"
                >
                  <path d="M10 1l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.8 4.8 17.1l1-5.8L1.5 7.2l5.9-.9L10 1z" />
                </svg>
                Free
              </span>
            </div>

            {/* Calendar iframe */}
            <div className="p-4 sm:p-6">
              <iframe
                src="https://calendar.app.google/8MosBdLa3DSUnvnn6"
                title="Book a discovery call"
                loading="lazy"
                className="h-[680px] w-full rounded-2xl sm:h-[780px]"
                style={{ border: 0 }}
              />
            </div>
          </motion.div>

          {/* Reassurance line */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.45, delay: 0.28 }}
            className="mt-6 text-center text-sm font-medium"
            style={{ color: MUTED }}
          >
            Prefer email? Reach out anytime at{" "}
            <a
              href="mailto:abdul.sami.ghl@gmail.com"
              className="font-bold underline-offset-2 hover:underline"
              style={{ color: BLUE_DEEP }}
            >
              abdul.sami.ghl@gmail.com
            </a>
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
