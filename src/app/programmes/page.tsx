import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow, Icon } from "@/components/icons";
import { PageHead } from "@/components/page-head";
import { SOCIALS } from "@/lib/content";
import hcBreast from "../../../public/img/hc-breast.jpg";
import partner30 from "../../../public/img/partner-30.jpg";
import tiktokFrame from "../../../public/img/tiktok-frame.jpg";

export const metadata: Metadata = {
  title: "Programmes",
  description: "RADFIRST's running programmes and the 2026 initiatives looking for partners and sponsors.",
};

const INITIATIVES = [
  { chip: "Women’s health", title: "Screen Her First", text: "A year-round women’s health programme, with a Pink October drive of free and subsidised mammograms and breast ultrasounds.", goal: "Goal: screen ~500 women; refer suspected cases for early treatment", cta: "Sponsor this", href: "/donate/campaign" },
  { chip: "Men’s health", title: "Scan & Speak", text: "A Men’s Health Week campaign with scrotal ultrasounds, discounted prostate screening, barbershop and workplace outreach.", goal: "Goal: screen ~500 men", cta: "Sponsor this", href: "/donate/campaign" },
  { chip: "Youth", title: "School & Campus Tour", text: "Diagnostic safety education, demonstrations, career mentoring and health clubs in secondary schools and universities.", goal: "Goal: reach 10,000 students", cta: "Partner on this", href: "/partner" },
  { chip: "Women’s health", title: "Cervical Cancer Awareness", text: "Sensitisation in schools, faith-based groups and markets, with free or discounted screening days and mother–daughter sessions.", goal: "Goal: educate 5,000 women; 500 screenings", cta: "Sponsor this", href: "/donate/campaign" },
  { chip: "Emergency", title: "Emergency Diagnostic Support Fund", text: "A pool of funds for urgent cases: a woman who needs a mammogram, a child who needs an X-ray, a man with prostate symptoms.", goal: "Goal: help 200 urgent cases pay for scans", cta: "Give to the fund", href: "/donate/fund" },
  { chip: "Follow-up", title: "Diagnosis-to-Treatment Support", text: "Clinical referral, a treatment subsidy fund, trained patient-navigation volunteers and partnerships for discounted treatment.", goal: "Follow-up within 48–72 hours of an abnormal result", cta: "Partner on this", href: "/partner" },
  { chip: "Convening", title: "Diagnostic Health Summit", text: "An annual conference for radiographers, clinicians, NGOs, students, sponsors and government, with free mini-screenings.", goal: "Expected attendance: 400–600", cta: "Sponsor the summit", href: "/partner" },
  { chip: "Digital", title: "Media & Digital Awareness Lab", text: "Youth-friendly videos, myth-busting series, testimonials and creator collaborations, made with proper equipment.", goal: "Goal: 500,000+ people reached online", cta: "Give equipment", href: "/donate/inkind" },
  { chip: "Your idea", title: "Fund something specific", text: "Want to fund a project, a population or a scan category? We’ll prepare a tailored budget for you.", goal: "Corporate branding partnerships available", cta: "Start a conversation", href: "/partner" },
];

const mediaSizes = "(max-width: 920px) 100vw, 520px";

export default function Programmes() {
  return (
    <>
      <PageHead
        current="Programmes"
        title={<>Programmes <span className="lt">&amp; projects.</span></>}
        lead="Three programmes are running today. Alongside them, we’re developing a set of larger initiatives that need partners and sponsors to happen."
      />

      <section className="wrap" style={{ paddingBottom: 40 }}>
        <article className="prog">
          <div className="media"><Image src={tiktokFrame} alt="Zainab Saba presenting a RADFIRST educational video" sizes={mediaSizes} /></div>
          <div className="stack" style={{ gap: 24 }}>
            <span className="chip live">Active · our largest programme</span>
            <h2 className="d2">Health Education <span className="lt">&amp; Digital Awareness</span></h2>
            <p className="lead">We use social media to simplify conversations about health, diagnosis and medical imaging, so reliable information is easy for young people and the wider public to understand.</p>
            <dl className="facts">
              <div><dt>Who it serves</dt><dd>The general public, young people, patients and communities</dd></div>
              <div><dt>Where</dt><dd>Online, with community activities planned</dd></div>
              <div><dt>Started</dt><dd>2025</dd></div>
              <div><dt>Reach</dt><dd>1M+ cumulative; top video 180,000+ views</dd></div>
            </dl>
            <div className="stack" style={{ gap: 12 }}>
              <h3 className="mono muted" style={{ textTransform: "uppercase" }}>Topics we cover</h3>
              <ul className="pills"><li>Medical imaging</li><li>Early diagnosis</li><li>Preventive healthcare</li><li>Cancer awareness</li><li>Diagnostic procedures</li><li>Health myths</li><li>When to seek care</li><li>Radiation safety</li></ul>
            </div>
            <div className="btn-row"><a className="btn btn-ink" href={SOCIALS.tiktok} target="_blank" rel="noopener">Watch on TikTok <Arrow /></a><Link className="link" href="/journal">Read the journal</Link></div>
          </div>
        </article>

        <article className="prog">
          <div className="media"><Image src={hcBreast} alt="Poster for the Health Connect breast-health webinar" style={{ objectPosition: "50% 30%" }} sizes={mediaSizes} /></div>
          <div className="stack" style={{ gap: 24 }}>
            <span className="chip live">Active · monthly</span>
            <h2 className="d2">RADFIRST <span className="lt">Health Connect</span></h2>
            <p className="lead">A monthly webinar series that makes health conversations practical and engaging. Each month a qualified speaker leads a topic and answers questions live.</p>
            <dl className="facts">
              <div><dt>Who it serves</dt><dd>Young people, students, patients, caregivers and the public</dd></div>
              <div><dt>Where</dt><dd>Online, join from anywhere</dd></div>
              <div><dt>Named</dt><dd>2026</dd></div>
              <div><dt>Attendance</dt><dd>150+ people so far</dd></div>
            </dl>
            <div className="btn-row"><Link className="btn btn-ink" href="/health-connect">Explore Health Connect <Arrow /></Link></div>
          </div>
        </article>

        <article className="prog">
          <div className="media"><Image src={partner30} alt="RADFIRST 30% diagnostic discount partnership announcement" sizes={mediaSizes} /></div>
          <div className="stack" style={{ gap: 24 }}>
            <span className="chip pilot">Piloting</span>
            <h2 className="d2">Diagnostic Access <span className="lt">&amp; Referral Support</span></h2>
            <p className="lead">We connect health education with practical access. We help people understand which diagnostic services they need and reach them at a lower cost through partner centres.</p>
            <div className="notice"><Icon name="info" /><span>RADFIRST has not yet run its own screening programme. Today, we facilitate access to discounted services through partner diagnostic centres, and we follow up with the people we support.</span></div>
            <dl className="facts">
              <div><dt>Partnership</dt><dd>A partner diagnostic centre, 30% discount, November 2025</dd></div>
              <div><dt>Supported</dt><dd>10–15 people with discounted or free diagnostics</dd></div>
              <div><dt>Follow-ups</dt><dd>10+ confirmed</dd></div>
              <div><dt>Where</dt><dd>Lagos State</dd></div>
            </dl>
            <div className="btn-row"><Link className="btn btn-ink" href="/get-help">Request support <Arrow /></Link><Link className="link" href="/partner">Become a diagnostic partner</Link></div>
          </div>
        </article>
      </section>

      <section className="sec sunk"><div className="wrap">
        <div className="head">
          <span className="eb">In development</span>
          <h2 className="d2">Initiatives looking <span className="lt">for partners.</span></h2>
          <p className="lead">These projects come from our Projects &amp; Partnership Proposal. Each can be funded in full, adopted by population or scan, or supported in kind.</p>
        </div>

        <div className="bus" style={{ marginTop: 48 }}>
          <div className="l">
            <span className="eb">Our biggest project</span>
            <h3 className="d2">The Mobile <span className="lt">Scan Bus.</span></h3>
            <p>A fully branded diagnostic outreach van that travels to markets, schools, workplaces, rural and low-income communities in and outside Lagos, offering free and subsidised scans to people who can’t otherwise reach quality imaging.</p>
            <p>It strengthens every other programme: Pink October, men’s health campaigns, school tours and community outreach.</p>
            <div className="btn-row"><Link className="btn btn-red" href="/partner">Talk to us about the bus <Arrow /></Link></div>
          </div>
          <div className="r">
            <div><h4>Portable ultrasound</h4><p>Breast, abdominal, pelvic, obstetric, thyroid, prostate and scrotal scans.</p></div>
            <div><h4>Mobile X-ray unit</h4><p>Chest X-ray, emergency imaging and musculoskeletal screening.</p></div>
            <div><h4>Where it goes</h4><p>Markets · Schools · Workplaces · Rural and low-income communities</p></div>
          </div>
        </div>

        <div className="init-grid rail">
          {INITIATIVES.map((i) => (
            <div className="init" key={i.title}>
              <span className="chip">{i.chip}</span>
              <h3 className="d3">{i.title}</h3>
              <p>{i.text}</p>
              <p className="goal">{i.goal}</p>
              <Link className="link" href={i.href}>{i.cta} <Icon name="arrow" /></Link>
            </div>
          ))}
        </div>
        <p className="rail-hint" aria-hidden="true">Swipe for more <Icon name="arrow" /></p>
      </div></section>
    </>
  );
}
