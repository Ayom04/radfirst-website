import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/icons";
import { FEATURED_ARTICLE as A } from "@/lib/content";

export const metadata: Metadata = { title: A.title, description: A.excerpt };

export default function Article() {
  return (
    <>
      <div className="phead"><div className="wrap narrow"><div className="head">
        <span className="crumb"><Link href="/">Home</Link> / <Link href="/journal">Journal</Link> / {A.category}</span>
        <h1 className="d2">{A.title}</h1>
        <p className="lead">{A.excerpt}</p>
        <div className="byline"><span className="av">RF</span><span><b style={{ color: "var(--ink)" }}>RADFIRST Research &amp; Health Education</b><br />{A.minutes} min read</span></div>
      </div></div></div>
      <div className="wrap narrow" style={{ paddingBottom: 96 }}>
        <div className="article-body">
          <p>If you’ve had an X-ray, you’ve probably seen it: the radiographer positions you carefully, then walks out of the room or steps behind a screen before the image is taken. It’s one of the questions we get asked most. Many people assume it means the scan is harmful. It doesn’t.</p>
          <h3>One scan versus thousands</h3>
          <p>A single chest X-ray gives a very small dose of radiation, roughly what you receive from natural background radiation over about ten days of everyday life. For you, that one exposure is a tiny cost for useful information about your health.</p>
          <p>A radiographer, though, may take dozens of X-rays every working day for decades. If they stood beside every patient, those small doses would add up. Stepping away is how they keep their own lifetime exposure as low as possible.</p>
          <p className="pull">The radiographer leaves because they do this every day, not because your scan is unsafe.</p>
          <h3>The principle behind it</h3>
          <p>Radiation protection follows a simple rule: keep every dose as low as reasonably achievable. For patients, that means only taking the images that are needed and using the lowest dose that still gives a clear picture. For staff, it means time, distance and shielding.</p>
          <ul>
            <li><b>Time:</b> the exposure itself lasts a fraction of a second.</li>
            <li><b>Distance:</b> radiation drops off quickly the further away you are.</li>
            <li><b>Shielding:</b> walls and screens in X-ray rooms are designed to block it.</li>
          </ul>
          <h3>What this means for you</h3>
          <p>If a doctor has recommended an X-ray, the benefit of finding out what’s going on almost always outweighs the small risk. If you’re pregnant or might be, tell the radiographer before the scan. And if you’re unsure why you need a scan, ask. That’s exactly what RADFIRST is here for.</p>
          <div className="review">This is a sample article written for the website design. Final articles will be reviewed by RADFIRST’s Head of Research &amp; Health Education before publication.</div>
          <div className="help-strip" style={{ marginTop: 16 }}>
            <div className="stack" style={{ gap: 6 }}><h3 className="d4">Have a question about a scan?</h3><p>Join our next Health Connect session and ask a professional directly.</p></div>
            <Link className="btn btn-ink" href="/health-connect">Health Connect <Arrow /></Link>
          </div>
        </div>
      </div>
    </>
  );
}
