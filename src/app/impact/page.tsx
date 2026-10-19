import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHead } from "@/components/page-head";
import { GOALS } from "@/lib/content";
import certAshoka from "../../../public/img/cert-ashoka.jpg";
import certMillennium from "../../../public/img/cert-millennium.jpg";

export const metadata: Metadata = {
  title: "Impact",
  description: "What RADFIRST has done in its first year, measured against its three-year goals.",
};

export default function Impact() {
  return (
    <>
      <PageHead
        current="Impact"
        title={<>Early numbers, <span className="lt">honestly reported.</span></>}
        lead="RADFIRST is one year old. Here is what we’ve done so far, measured against what we’ve committed to."
      />

      <section className="sec-sm band"><div className="wrap">
        <div className="stats" style={{ marginTop: 0 }}>
          <div className="stat"><b>1M+</b><span>people reached across social media</span></div>
          <div className="stat"><b>180K+</b><span>views on our highest-performing video</span></div>
          <div className="stat"><b>3</b><span>Health Connect webinars conducted</span></div>
          <div className="stat"><b>150+</b><span>people reached through our webinars</span></div>
          <div className="stat"><b>100+</b><span>people reached through offline engagement</span></div>
          <div className="stat"><b>10–15<sup>*</sup></b><span>people supported through discounted or free diagnostics</span></div>
          <div className="stat"><b>10+</b><span>confirmed follow-ups</span></div>
          <div className="stat"><b>20</b><span>volunteers, 2 formally trained</span></div>
          <div className="stat"><b>1</b><span>diagnostic-centre partnership</span></div>
        </div>
        <p className="foot-note">* Through our diagnostic-centre partnership (30% discount, November 2025). Figures from RADFIRST records, October 2026.</p>
      </div></section>

      <section className="sec"><div className="wrap">
        <div className="head"><span className="eb">Progress to our 3-year goals</span><h2 className="d2">Where we are, <span className="lt">to scale.</span></h2><p className="muted">Each bar is drawn to scale against its target. Most of the distance is still ahead of us, and that’s where your support goes.</p></div>
        <div className="goals">
          {GOALS.map((g) => {
            const pct = (g.value / g.goal) * 100;
            return (
              <div className="goalrow" key={g.title}>
                <div className="t"><b>{g.title}</b><span>{g.sub ?? `${pct >= 1 ? Math.round(pct) : pct.toFixed(1)}% of goal`}</span></div>
                <div className="bar" role="img" aria-label={g.label}><i className={g.value ? "" : "zero"} style={{ width: `${pct}%` }} /></div>
                <span className="v">{g.label}</span>
              </div>
            );
          })}
        </div>
      </div></section>

      <section className="sec sunk"><div className="wrap">
        <div className="head"><span className="eb">Recognition</span><h2 className="d2">Recognised <span className="lt">early.</span></h2></div>
        <div className="certs">
          <figure className="cert" style={{ margin: 0 }}><Image src={certAshoka} alt="Ashoka Young Changemaker certificate for Zainab Saba, 14 May 2026" sizes="(max-width: 920px) 100vw, 680px" /><figcaption className="bd"><b>Ashoka Young Changemaker</b><span>Zainab Saba · 14 May 2026</span></figcaption></figure>
          <figure className="cert" style={{ margin: 0 }}><Image src={certMillennium} alt="Millennium Fellowship Project certificate issued to Zainab Olamide Saba, RADFIRST" style={{ objectFit: "contain", background: "#fff" }} sizes="(max-width: 920px) 100vw, 560px" /><figcaption className="bd"><b>Millennium Fellowship Project</b><span>United Nations Academic Impact &amp; Millennium Campus Network</span></figcaption></figure>
        </div>
      </div></section>

      <section className="sec"><div className="wrap two">
        <div className="head"><span className="eb">Reports &amp; documents</span><h2 className="d2">Read the <span className="lt">detail.</span></h2><p className="muted">Annual and impact reports will be published here as they’re released.</p></div>
        <div className="docs" style={{ marginTop: 0 }}>
          <div className="doc"><span className="ic">PDF</span><div><b>2026 Projects &amp; Partnership Proposal</b><p>Flagship projects, sponsorship model and long-term vision</p></div><Link className="btn btn-line btn-sm" href="/contact">Request a copy</Link></div>
          <div className="doc"><span className="ic">PDF</span><div><b>Annual Report 2025–26</b><p>Coming soon</p></div><span className="chip">Coming soon</span></div>
          <div className="doc"><span className="ic">PDF</span><div><b>Impact Report: Diagnostic Access Pilot</b><p>Coming soon</p></div><span className="chip">Coming soon</span></div>
        </div>
      </div></section>
    </>
  );
}
