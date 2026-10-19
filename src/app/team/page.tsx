import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/icons";
import { PageHead } from "@/components/page-head";
import { TEAM } from "@/lib/content";
import zainab from "../../../public/img/zainab.jpg";

export const metadata: Metadata = {
  title: "Team",
  description: "The radiographers, health professionals, engineers and designers behind RADFIRST.",
};

export default function Team() {
  return (
    <>
      <PageHead
        crumbs={[{ href: "/about", label: "About" }]}
        current="Team"
        title={<>The people <span className="lt">behind RADFIRST.</span></>}
        lead="Radiographers, health professionals, engineers and designers, powered by a growing community of young people who believe everyone deserves to make informed decisions about their health."
      />

      <section className="sec-sm"><div className="wrap lead-member">
        <div className="portrait"><Image src={zainab} alt="Zainab Olamide Saba" sizes="(max-width: 920px) 100vw, 480px" /><div className="tag"><span>Founder &amp; Lead</span><span className="lm" style={{ borderColor: "#fff" }}>R</span></div></div>
        <div className="stack" style={{ gap: 22 }}>
          <span className="eb">Founder &amp; Lead</span>
          <h2 className="d2">Zainab <span className="lt">Olamide Saba</span></h2>
          <div className="prose"><p>Zainab is a radiography and radiation science student, health advocate and public speaker. She founded RADFIRST to promote early diagnosis and improve access to diagnostic healthcare. She is active in youth leadership and changemaking, with experience in advocacy, digital communications and community engagement.</p></div>
          <ul className="creds">
            <li>B.Radiography &amp; Radiation Science, LASUCOM <span>In view</span></li>
            <li>Ashoka Young Changemaker <span>2026</span></li>
            <li>Youth Advisory Panel, The Duke of Edinburgh’s International Award <span>Member</span></li>
            <li>U-Report Campus Ambassador · UNICEF U-Reporter <span>Youth advocacy</span></li>
            <li>Millennium Fellow <span>UN Academic Impact</span></li>
          </ul>
        </div>
      </div></section>

      <section className="sec sunk"><div className="wrap">
        <div className="head"><span className="eb">Leadership &amp; advisers</span><h2 className="d2">The team.</h2></div>
        <div className="team">
          {TEAM.map((m) => (
            <article className="member" key={m.name}>
              <div className="neg" aria-hidden="true"><b>{m.initials}</b><span className="lm">{m.name[0]}</span></div>
              <span className="role">{m.role}</span>
              <h3 className="d3">{m.name}</h3>
              <p>{m.bio}</p>
              {m.background.length > 0 && (
                <details className="more"><summary>Background</summary><ul>{m.background.map((b) => <li key={b}>{b}</li>)}</ul></details>
              )}
            </article>
          ))}
        </div>
      </div></section>

      <section className="sec-sm"><div className="wrap help-strip">
        <div className="stack" style={{ gap: 6 }}><h3 className="d3">Plus 15+ volunteers.</h3><p>Content creators, outreach volunteers and patient supporters across Lagos.</p></div>
        <Link className="btn btn-red" href="/volunteer">Join them <Arrow /></Link>
      </div></section>
    </>
  );
}
