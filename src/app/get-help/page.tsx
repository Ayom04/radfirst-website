import type { Metadata } from "next";
import { Icon } from "@/components/icons";
import { PageHead } from "@/components/page-head";
import { StepForm } from "@/components/step-form";
import { FORMS } from "@/lib/forms";

export const metadata: Metadata = {
  title: "Get help",
  description: "Having difficulty accessing a diagnostic scan? Tell RADFIRST what you need and we'll see how we can help.",
};

export default function GetHelp() {
  return (
    <>
      <PageHead
        current="Get help"
        title={<>You don’t have to figure this out <span className="lt">alone.</span></>}
        lead="If you or someone you know is having difficulty accessing diagnostic care, tell us what you need. We’ll review your request and see whether RADFIRST can support you, connect you to a service, or refer you to another organisation."
      >
        <div className="alert">
          <Icon name="info" />
          <span><b>If this is a medical emergency, go to the nearest hospital or call 112.</b>This form is reviewed by our team and is not monitored around the clock. Submitting it does not guarantee financial assistance, a scan, treatment or a referral.</span>
        </div>
      </PageHead>
      <section className="wrap" style={{ paddingBottom: 96 }}><StepForm name="help" {...FORMS.help} /></section>
    </>
  );
}
