import type { Metadata } from "next";
import { INVOLVED, PageHead } from "@/components/page-head";
import { StepForm } from "@/components/step-form";
import { FORMS } from "@/lib/forms";

export const metadata: Metadata = {
  title: "Volunteer",
  description: "Volunteer with RADFIRST: content, outreach, events, research and patient support. No medical background needed for most roles.",
};

export default function Volunteer() {
  return (
    <>
      <PageHead
        crumbs={[INVOLVED]}
        current="Volunteer"
        title={<>Give your time <span className="lt">to early diagnosis.</span></>}
        lead="Our 20+ volunteers create content, run outreach, support events and help patients find their way. No medical background needed for most roles."
      />
      <section className="wrap" style={{ paddingBottom: 96 }}><StepForm name="volunteer" {...FORMS.volunteer} /></section>
    </>
  );
}
