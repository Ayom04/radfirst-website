import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, Icon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Get involved",
  description: "Donate, partner, volunteer, sponsor a campaign or share your expertise with RADFIRST.",
};

export default function GetInvolved() {
  return (
    <div className="phead"><div className="wrap">
      <div className="head">
        <span className="crumb"><Link href="/">Home</Link> / Get involved</span>
        <h1 className="d1">Support <span className="lt">RADFIRST.</span></h1>
        <p className="lead">Our growth depends on people moving from learning about early diagnosis to taking part in it. Choose how you’d like to help.</p>
      </div>
      <div className="ways">
        <Link className="way hot" href="/donate"><span className="k">01</span><h2 className="d3">Donate</h2><p>Fund a diagnostic case, adopt a scan, support a group, or give to the Emergency Diagnostic Support Fund.</p><span className="go">Support diagnostic access <Icon name="arrow" /></span></Link>
        <Link className="way" href="/partner"><span className="k">02</span><h2 className="d3">Partner</h2><p>For diagnostic centres, hospitals, foundations, companies, schools and NGOs that want a structured collaboration.</p><span className="go">Partner with RADFIRST <Icon name="arrow" /></span></Link>
        <Link className="way" href="/volunteer"><span className="k">03</span><h2 className="d3">Volunteer</h2><p>Give your time to outreach, content, events, research or patient support.</p><span className="go">Become a volunteer <Icon name="arrow" /></span></Link>
        <Link className="way" href="/donate/campaign"><span className="k">04</span><h2 className="d3">Support a campaign</h2><p>Help us plan, deliver and amplify health education on early diagnosis and preventive care.</p><span className="go">Sponsor a campaign <Icon name="arrow" /></span></Link>
      </div>
      <div className="small-ways">
        <Link className="sw" href="/expertise"><h3 className="d4">Share your expertise</h3><p>Mentor, advise, train or open your network.</p></Link>
        <Link className="sw" href="/health-connect"><h3 className="d4">Join a programme</h3><p>Attend Health Connect, our monthly webinar.</p></Link>
        <Link className="sw" href="/contact"><h3 className="d4">Apply for opportunities</h3><p>Ambassador and fellowship roles, opening soon.</p></Link>
        <Link className="sw" href="/stories"><h3 className="d4">Share your story</h3><p>Help someone else act sooner.</p></Link>
      </div>
      <div className="help-strip" style={{ marginBlock: "56px 96px" }}>
        <div className="stack" style={{ gap: 6 }}><h3 className="d3">Looking for help instead?</h3><p>If you or someone you know is struggling to access diagnostic care, tell us what you need.</p></div>
        <Link className="btn btn-ink" href="/get-help">Get help from RADFIRST <Arrow /></Link>
      </div>
    </div></div>
  );
}
