import type { Metadata } from "next";
import { INVOLVED, PageHead } from "@/components/page-head";
import { StepForm } from "@/components/step-form";
import { FORMS } from "@/lib/forms";

export const metadata: Metadata = {
  title: "Share your expertise",
  description: "Mentor, advise, train or open your network to support RADFIRST's early-diagnosis work.",
};

const WHO = ["Radiographers", "Doctors", "Nurses", "Sonographers", "Radiation therapists", "Public health", "Researchers", "Social entrepreneurs", "Communications", "Fundraising", "Technology", "Policy", "M&E", "Legal & finance", "Programme management", "Media"];

export default function Expertise() {
  return (
    <>
      <PageHead
        crumbs={[INVOLVED]}
        current="Share your expertise"
        title={<>Share your <span className="lt">expertise.</span></>}
        lead="You don’t have to be a traditional mentor to contribute. Whether you have one hour to speak with our team, a skill you can teach, a network you can open, or years of experience to share, we’d love to hear from you."
      >
        <div className="stack" style={{ gap: 10 }}>
          <span className="mono muted" style={{ textTransform: "uppercase" }}>Who can join</span>
          <ul className="pills">{WHO.map((w) => <li key={w}>{w}</li>)}</ul>
        </div>
      </PageHead>
      <section className="wrap" style={{ paddingBottom: 96 }}><StepForm name="expertise" {...FORMS.expertise} /></section>
    </>
  );
}
