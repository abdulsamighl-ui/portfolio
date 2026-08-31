import { SectionHeader } from "@/components/sections/SectionHeader";

export const DevLabel = ({ label }: { label: string }) => (
  <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">
    {label}
  </p>
);

export const FaqHeader = () => (
  <SectionHeader
    eyebrow="Questions"
    heading="Frequently asked questions"
    support="Everything you might want to know before we start working together."
    align="center"
  />
);
