import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/icons";
import { PageHead } from "@/components/page-head";
import zainab from "../../../public/img/zainab.jpg";

export const metadata: Metadata = {
  title: "About",
  description: "Why RADFIRST exists, our mission, vision and values, and where we're heading.",
};

export default function About() {
  return (
    <>
      <PageHead
        current="About"
        title={<>Diagnosis <span className="lt">first.</span></>}
        lead="RADFIRST (Radiography Awareness and Diagnosis First) is a youth-led health advocacy initiative working to make early diagnosis easier to reach. We raise awareness of diagnostic scans, support access to affordable services, and connect communities to the right care."
      />

      <section className="sec-sm"><div className="wrap two">
        <div className="portrait"><Image src={zainab} alt="Zainab Olamide Saba" sizes="(max-width: 920px) 100vw, 560px" /><div className="tag"><span>Founder &amp; Lead</span><span>Lagos</span></div></div>
        <div className="stack" style={{ gap: 28 }}>
          <span className="eb">Why RADFIRST exists</span>
          <h2 className="d2">The gap between knowing <span className="lt">and getting diagnosed.</span></h2>
          <div className="prose">
            <p>People hear about diseases and the importance of healthcare, and still delay getting checked. Fear of procedures, misinformation, cost, cultural beliefs and not knowing where to go all stand in the way.</p>
            <p>Our founder, Zainab Olamide Saba, saw this first-hand as a radiography student at Lagos State University College of Medicine. Too many patients arrived after their condition had already progressed. That shifted her focus from treating illness to asking how people could be encouraged to come earlier.</p>
            <p>RADFIRST launched in October 2025 in Lagos State. It started with radiology literacy: videos, infographics, webinars and community education that made imaging easier to understand. It then moved toward affordable access through partnerships, and toward referral and patient navigation.</p>
          </div>
          <div className="btn-row"><Link className="btn btn-ink" href="/team">Meet the team <Arrow /></Link></div>
        </div>
      </div></section>

      <section className="sec sunk"><div className="wrap two">
        <div className="stack" style={{ gap: 22 }}>
          <span className="eb">Mission</span>
          <h2 className="d3">What RADFIRST works to do</h2>
          <ul className="list-ticks">
            <li>Increase awareness of essential diagnostic scans.</li>
            <li>Promote a culture of preventive healthcare and early diagnosis.</li>
            <li>Improve access to essential diagnostic services through community projects and collaborations.</li>
            <li>Educate young people and communities through school, youth and faith-based outreach.</li>
            <li>Bring screening opportunities closer to underserved communities.</li>
            <li>Partner with diagnostic centres and other stakeholders to make diagnostic services more affordable.</li>
          </ul>
        </div>
        <div className="stack" style={{ gap: 22 }}>
          <span className="eb">Vision</span>
          <p className="big-quote">A future where early diagnosis is <b>accessible to everyone</b>, and people are empowered to make informed, preventive health decisions.</p>
          <p className="muted">Over time, we want RADFIRST to grow into a national and then pan-African early-detection ecosystem, working toward a continent where people do not die from conditions that could have been detected early.</p>
        </div>
      </div></section>

      <section className="sec"><div className="wrap">
        <div className="head"><span className="eb">Values</span><h2 className="d2">What guides <span className="lt">the work.</span></h2></div>
        <div className="values">
          <div><h3 className="d4">Early action</h3><p>Encouraging people to act before preventable conditions become more serious.</p></div>
          <div><h3 className="d4">Accessibility</h3><p>Making health information and diagnostic opportunities easier to reach.</p></div>
          <div><h3 className="d4">Health literacy</h3><p>Making complex medical information understandable.</p></div>
          <div><h3 className="d4">Equity</h3><p>Reducing the financial and informational barriers to care.</p></div>
          <div><h3 className="d4">Youth leadership</h3><p>Young people as active health advocates and changemakers.</p></div>
          <div><h3 className="d4">Collaboration</h3><p>Working with health professionals, communities, institutions, sponsors and partners.</p></div>
          <div><h3 className="d4">Integrity &amp; evidence</h3><p>Health information that is accurate, responsible and evidence-informed.</p></div>
          <div><h3 className="d4">Compassion</h3><p>Keeping the real experiences of patients and communities at the centre.</p></div>
        </div>
      </div></section>

      <section className="sec sunk"><div className="wrap two">
        <div className="head sticky-head">
          <span className="eb">Milestones</span>
          <h2 className="d2">Year one.</h2>
          <p className="muted">From a radiography student’s idea to a growing early-diagnosis model.</p>
        </div>
        <ol className="timeline">
          <li className="tl-item"><span className="when">Oct 2025</span><div><h3 className="d4">RADFIRST launches in Lagos State</h3><p>A youth-led initiative focused on radiology literacy and diagnostic awareness.</p></div></li>
          <li className="tl-item"><span className="when">Oct 2025</span><div><h3 className="d4">First breast-health webinar</h3><p>“The Role of Mammography in Breast Cancer” with Harriet Nwogo, Senior Radiographer and Mammographer, HSE Ireland. Run as a Millennium Fellowship project.</p></div></li>
          <li className="tl-item"><span className="when">Nov 2025</span><div><h3 className="d4">First diagnostic-access partnership</h3><p>For World Radiography Day, a partner diagnostic centre offered 30% off scans, lab tests and wellness screenings for a month.</p></div></li>
          <li className="tl-item"><span className="when">2025–26</span><div><h3 className="d4">One million people reached online</h3><p>Our educational content passed 1M cumulative reach, with one video reaching 180,000+ views.</p></div></li>
          <li className="tl-item"><span className="when">May 2026</span><div><h3 className="d4">Ashoka Young Changemaker</h3><p>Zainab Saba elected to the Ashoka Young Changemakers community.</p></div></li>
          <li className="tl-item now"><span className="when">2026</span><div><h3 className="d4">RADFIRST Health Connect</h3><p>Our webinar series becomes a named monthly programme, starting with youth health myths.</p></div></li>
        </ol>
      </div></section>

      <section className="sec"><div className="wrap">
        <div className="head"><span className="eb">The next three years</span><h2 className="d2">Where we’re <span className="lt">heading.</span></h2></div>
        <div className="targets">
          <div><b>5M+</b><span>people reached through digital diagnostic literacy</span></div>
          <div><b>10,000</b><span>students reached through school and campus education</span></div>
          <div><b>5,000</b><span>subsidised or sponsored diagnostic scans facilitated</span></div>
          <div><b>20</b><span>diagnostic-centre partnerships</span></div>
          <div><b>15</b><span>institutions with RADFIRST Health Clubs or campus ambassadors</span></div>
          <div><b>100</b><span>youth ambassadors trained</span></div>
        </div>
        <ul className="list-ticks" style={{ marginTop: 40, gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", display: "grid", gap: "14px 32px" }}>
          <li>Develop the Emergency Diagnostic Support Fund</li>
          <li>Strengthen diagnosis-to-treatment referral pathways</li>
          <li>Launch the RADFIRST Youth Fellowship and Ambassador Programme</li>
          <li>Build relationships with public-health institutions and government</li>
        </ul>
      </div></section>
    </>
  );
}
