import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { MiniForm } from "@/components/mini-form";
import hcBreast from "../../../public/img/hc-breast.jpg";
import hcSpeaker from "../../../public/img/hc-youth-speaker.jpg";
import hcYouth from "../../../public/img/hc-youth.jpg";

export const metadata: Metadata = {
  title: "Health Connect",
  description: "RADFIRST Health Connect: a monthly webinar where a health professional leads a topic and answers your questions live.",
};

export default function HealthConnect() {
  return (
    <>
      <div className="phead"><div className="wrap two" style={{ alignItems: "center" }}>
        <div className="head">
          <span className="crumb"><Link href="/">Home</Link> / <Link href="/programmes">Programmes</Link> / Health Connect</span>
          <h1 className="d1">Health <span className="lt">Connect.</span></h1>
          <p className="lead">Our monthly webinar series. Each month we choose a health topic, invite a qualified speaker, and give you the space to learn and ask questions directly.</p>
          <div className="btn-row"><a className="btn btn-red" href="#next-session">Get the next date</a><Link className="link" href="/stories">Suggest a topic</Link></div>
        </div>
        <div className="poster"><Image src={hcSpeaker} alt="Health Connect speaker card for Ummi Umar Musa" preload sizes="(max-width: 920px) 100vw, 560px" /></div>
      </div></div>

      <section className="sec-sm sunk"><div className="wrap">
        <div className="head"><span className="eb">How each session works</span><h2 className="d3">One topic. One expert. Your questions.</h2></div>
        <ol className="path path-4">
          <li className="step"><span className="no">01</span><h3 className="d4">A chosen topic</h3><p>Relevant to young people and the public, from breast health to health myths.</p></li>
          <li className="step"><span className="no">02</span><h3 className="d4">An invited expert</h3><p>A health professional leads the conversation.</p></li>
          <li className="step"><span className="no">03</span><h3 className="d4">Practical information</h3><p>What it means for you and what to do next.</p></li>
          <li className="step"><span className="no">04</span><h3 className="d4">Live Q&amp;A</h3><p>Ask the speaker directly and get real answers.</p></li>
        </ol>
      </div></section>

      <section className="sec"><div className="wrap">
        <div className="head-row"><div className="head"><span className="eb">Past sessions</span><h2 className="d2">From the <span className="lt">archive.</span></h2></div><span className="mono muted">150+ attendees so far</span></div>
        <div className="grid2 rail" style={{ marginTop: 48 }}>
          <article className="card">
            <div className="ph" style={{ aspectRatio: "1/1" }}><Image src={hcYouth} alt="Poster: I am too young for that" style={{ objectPosition: "50% 40%" }} sizes="(max-width: 640px) 100vw, 600px" /></div>
            <div className="bd"><span className="meta"><span>Sat 22 Aug 2026</span><span>Google Meet</span><span>Youth health</span></span><h3 className="d3">“I am too young for that”: health myths young people need to stop believing</h3><p>With Ummi Umar Musa, public health and cancer-control advocate, radiotherapist, and founder of Call Off Cancer Initiative and UHealth Africa.</p></div>
          </article>
          <article className="card">
            <div className="ph" style={{ aspectRatio: "1/1" }}><Image src={hcBreast} alt="Poster: The Role of Mammography in Breast Cancer" style={{ objectPosition: "50% 30%" }} sizes="(max-width: 640px) 100vw, 600px" /></div>
            <div className="bd"><span className="meta"><span>Fri 31 Oct 2025</span><span>Google Meet</span><span>Breast health</span></span><h3 className="d3">The role of mammography in breast cancer</h3><p>With Harriet Nwogo, Senior Radiographer and Mammographer at HSE Ireland. Hosted by Zainab Saba as a Millennium Fellowship project.</p></div>
          </article>
        </div>
        <p className="rail-hint" aria-hidden="true">Swipe for more <Icon name="arrow" /></p>
      </div></section>

      <section className="sec band" id="next-session"><div className="wrap two" style={{ alignItems: "center" }}>
        <div className="head"><span className="eb">Next session</span><h2 className="d2">Be there <span className="lt">next month.</span></h2><p className="lead">We’ll send you the topic, speaker and joining link as soon as they’re confirmed.</p></div>
        <MiniForm variant="band" id="hc-email" />
      </div></section>
    </>
  );
}
