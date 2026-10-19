import type { Metadata } from "next";
import { CopyButton } from "@/components/copy-button";
import { Icon } from "@/components/icons";
import { PageHead } from "@/components/page-head";
import { StepForm } from "@/components/step-form";
import { CONTACT, SOCIALS } from "@/lib/content";
import { FORMS } from "@/lib/forms";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact RADFIRST about partnerships, media, programmes or general questions.",
};

export default function Contact() {
  return (
    <>
      <PageHead current="Contact" title={<>Talk to <span className="lt">us.</span></>} lead="For partnerships, media, programmes or general questions. We usually reply within two working days." />
      <section className="wrap contact-grid" style={{ paddingBottom: 96 }}>
        <div className="stack" style={{ gap: 28 }}>
          <dl className="cinfo">
            <div><dt>Email</dt><dd>{CONTACT.email}</dd><CopyButton value={CONTACT.email} /></div>
            <div><dt>Phone / WhatsApp</dt><dd>{CONTACT.phone}</dd><CopyButton value={CONTACT.phoneRaw} /></div>
            <div><dt>Based in</dt><dd>{CONTACT.location}</dd><span /></div>
          </dl>
          <div className="stack" style={{ gap: 12 }}>
            <span className="mono muted" style={{ textTransform: "uppercase" }}>Follow</span>
            <div className="btn-row follow">
              <a className="btn btn-line btn-sm" href={SOCIALS.tiktok} target="_blank" rel="noopener"><Icon name="tt" />TikTok</a>
              <a className="btn btn-line btn-sm" href={SOCIALS.instagram} target="_blank" rel="noopener"><Icon name="ig" />Instagram</a>
              <a className="btn btn-line btn-sm" href={SOCIALS.facebook} target="_blank" rel="noopener"><Icon name="fb" />Facebook</a>
            </div>
          </div>
        </div>
        <StepForm name="contact" {...FORMS.contact} />
      </section>
    </>
  );
}
