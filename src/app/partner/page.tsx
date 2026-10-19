import type { Metadata } from "next";
import { INVOLVED, PageHead } from "@/components/page-head";
import { StepForm } from "@/components/step-form";
import { FORMS } from "@/lib/forms";

export const metadata: Metadata = {
  title: "Partner with us",
  description: "Partnerships with RADFIRST, from campaign support and diagnostic discounts to outreach, research and long-term collaboration.",
};

export default function Partner() {
  return (
    <>
      <PageHead
        crumbs={[INVOLVED]}
        current="Partner"
        title={<>Let’s make early diagnosis <span className="lt">easier to access.</span></>}
        lead="We work with organisations that care about health education, diagnostic access, preventive healthcare and community impact. Partnerships range from campaign support and diagnostic discounts to outreach, research, media and long-term strategic collaboration."
      />
      <section className="wrap" style={{ paddingBottom: 96 }}><StepForm name="partner" {...FORMS.partner} /></section>
    </>
  );
}
