import type { Metadata } from "next";
import Image from "next/image";
import { Icon } from "@/components/icons";
import { PageHead } from "@/components/page-head";
import { StepForm } from "@/components/step-form";
import { SOCIALS } from "@/lib/content";
import { FORMS } from "@/lib/forms";
import tiktokFrame from "../../../public/img/tiktok-frame.jpg";

export const metadata: Metadata = {
  title: "Stories",
  description: "Real experiences of seeking a diagnosis, and how to share yours with RADFIRST.",
};

const SLOTS = [
  { kind: "Patient stories", title: "Getting the scan, and what came after", text: "Stories from people who got a diagnosis with RADFIRST’s support. Coming soon." },
  { kind: "Volunteer stories", title: "Why young people give their time", text: "Our volunteers on outreach, content and patient support. Coming soon." },
  { kind: "From professionals", title: "What radiographers wish you knew", text: "Short pieces from the professionals who work with us. Coming soon." },
];

export default function Stories() {
  return (
    <>
      <PageHead current="Stories" title="Stories." lead="Real experiences of seeking a diagnosis, from the people we support, our volunteers and the professionals who work with us." />

      <section className="wrap" style={{ paddingBottom: 72 }}>
        <a className="feature-story" href={SOCIALS.tiktok} target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
          <div className="vid"><Image src={tiktokFrame} alt="" sizes="(max-width: 920px) 100vw, 680px" /><span className="stamp">From our channel</span><span className="play"><Icon name="play" /></span></div>
          <div className="bd"><span className="meta"><span>Video</span><span>33.6K views</span></span><h2 className="d2">“Why do radiographers leave the room?”</h2><p className="muted">Zainab answers one of the questions patients ask most, and explains what it says about radiation safety.</p><span className="link" style={{ justifySelf: "start" }}>Watch on TikTok <Icon name="arrow" /></span></div>
        </a>
        <div className="grid3 rail" style={{ marginTop: 24 }}>
          {SLOTS.map((s) => (
            <div className="slot" key={s.kind}>
              <span className="ic"><Icon name="play" /></span>
              <span className="mono muted" style={{ textTransform: "uppercase" }}>{s.kind}</span>
              <h3 className="d4">{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
        <p className="rail-hint" aria-hidden="true">Swipe for more <Icon name="arrow" /></p>
      </section>

      <section className="sec sunk"><div className="wrap story-wrap">
        <div className="head" style={{ alignContent: "start" }}>
          <span className="eb">Share your story</span>
          <h2 className="d2">Your experience <span className="lt">could help someone act sooner.</span></h2>
          <p className="muted">Tell us about a time you or someone close to you sought a diagnosis. You choose whether and how we share it. We’ll always ask again before anything is published.</p>
        </div>
        <StepForm name="story" {...FORMS.story} />
      </div></section>
    </>
  );
}
