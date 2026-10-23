import Image from "next/image";
import Link from "next/link";
import { ArticleCard } from "@/components/articles";
import { Arrow, Ecg, Icon } from "@/components/icons";
import { MiniForm } from "@/components/mini-form";
import { ARTICLES, FEATURED_ARTICLE } from "@/lib/content";
import hcYouth from "../../public/img/hc-youth.jpg";
import partner30 from "../../public/img/partner-30.jpg";
import ribs from "../../public/img/ribs.png";
import tiktokFrame from "../../public/img/tiktok-frame.jpg";
import zainab from "../../public/img/zainab.jpg";

const arrow18 = { width: 18, height: 18 };

export function Home() {
  return (
    <>
      <div className="hero">
        <div className="wrap">
          <div className="hero-grid">
            <div className="hero-copy">
              <span className="eb">Youth-led health initiative · Lagos, Nigeria</span>
              <h1 className="d1">Saving lives through <span className="lt">early diagnosis.</span></h1>
              <p className="lead">Many people learn about a disease long before they get the scan that would find it. RADFIRST closes that gap. We explain diagnostic imaging in plain language, connect people to affordable scans, and stay with them after the result.</p>
              <div className="btn-row">
                <Link className="btn btn-red" href="/get-involved">Support RADFIRST <Arrow /></Link>
                <Link className="btn btn-line" href="/get-help">I need help getting a scan</Link>
              </div>
              <div className="proof">
                <div><b>1M+</b><span>people reached online</span></div>
                <div><b>10+</b><span>confirmed follow-ups</span></div>
                <div><b>2026</b><span>Ashoka Young Changemaker</span></div>
              </div>
            </div>
            <figure className="hero-figure" style={{ margin: 0 }}>
              <div className="film" role="img" aria-label="An X-ray style image of a ribcage on a lightbox, from the RADFIRST logo">
                <Image className="ribs" src={ribs} alt="" preload sizes="(max-width: 920px) 64vw, 300px" />
                <div className="scan" />
                <div className="ruler" />
                <div className="fc tl"><span>RADFIRST · Lagos</span><span>Chest · PA</span></div>
                <div className="fc tr"><span className="lm">R</span></div>
                <div className="fc bl"><span>Seen early</span><span>Treated early</span></div>
                <div className="fc br"><span>Since Oct 2025</span></div>
              </div>
              <figcaption className="film-cap"><span>Radiography Awareness and Diagnosis First</span><span className="hide-sm">Fig. 01</span></figcaption>
            </figure>
          </div>
        </div>
        <Ecg />
      </div>

      <section className="sec">
        <div className="wrap">
          <div className="head">
            <span className="eb">The gap we work in</span>
            <h2 className="d2">Knowing you need a scan is <span className="lt">only the first step.</span></h2>
            <p className="lead">Early diagnosis depends on more than hospitals and machines. People put off care for reasons that have little to do with medicine.</p>
          </div>
          <div className="gap-grid">
            <div className="barriers">
              <div><h3 className="d4">Fear of the procedure</h3><p>Worry that a scan will hurt, or that all radiation is dangerous.</p></div>
              <div><h3 className="d4">Misinformation</h3><p>Myths shared online that delay care until symptoms get worse.</p></div>
              <div><h3 className="d4">Cost</h3><p>A mammogram costs about ₦30,000–₦40,000. For many families, that settles it.</p></div>
              <div><h3 className="d4">Not understanding imaging</h3><p>Not knowing what an X-ray, ultrasound or MRI is for, or what to expect.</p></div>
              <div><h3 className="d4">Cultural beliefs and stigma</h3><p>Beliefs that make people wait. Men in particular rarely screen early.</p></div>
              <div><h3 className="d4">Not knowing where to go</h3><p>No clear route to a trusted diagnostic centre or the right specialist.</p></div>
            </div>
            <aside className="callout">
              <span className="num">&lt;150</span>
              <p>mammography machines serve more than 100 million women and girls in Nigeria.</p>
              <span className="src">Source: National Institutes of Health (NIH)</span>
            </aside>
          </div>
        </div>
      </section>

      <section className="sec sunk">
        <div className="wrap">
          <div className="head-row">
            <div className="head">
              <span className="eb">How RADFIRST works</span>
              <h2 className="d2">One pathway, from first question <span className="lt">to follow-up.</span></h2>
            </div>
            <Link className="link" href="/programmes">See our programmes <Icon name="arrow" /></Link>
          </div>
          <ol className="path">
            <li className="step"><span className="no">01</span><h3 className="d4">Education</h3><p>Videos, infographics, webinars and talks that make medical imaging easy to understand.</p><span className="chip live">Active</span></li>
            <li className="step"><span className="no">02</span><h3 className="d4">Access</h3><p>Partnerships with diagnostic centres for discounted or free scans.</p><span className="chip pilot">Piloting</span></li>
            <li className="step"><span className="no">03</span><h3 className="d4">Screening</h3><p>Community screening drives for breast, cervical and men’s health.</p><span className="chip">In development</span></li>
            <li className="step"><span className="no">04</span><h3 className="d4">Referral</h3><p>Connecting people with abnormal results to the right specialist or hospital.</p><span className="chip">In development</span></li>
            <li className="step"><span className="no">05</span><h3 className="d4">Follow-up</h3><p>Checking in after a scan so nobody is left alone with a result.</p><span className="chip live">Active</span></li>
          </ol>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="head-row">
            <div className="head">
              <span className="eb">Programmes</span>
              <h2 className="d2">What we’re doing <span className="lt">right now.</span></h2>
            </div>
            <Link className="link" href="/programmes">All programmes and 2026 initiatives <Icon name="arrow" /></Link>
          </div>
          <div className="grid3 rail" style={{ marginTop: 48 }}>
            <Link className="card" href="/programmes">
              <div className="ph"><Image src={tiktokFrame} alt="RADFIRST founder Zainab Saba explaining radiography in a short video" sizes="(max-width: 640px) 100vw, 400px" /></div>
              <div className="bd"><span className="meta"><span>Since 2025</span><span>Online</span></span><h3 className="d3">Health Education &amp; Digital Awareness</h3><p>Short videos and infographics that explain scans, symptoms and health myths in plain language.</p></div>
              <div className="ft"><span className="mono muted">1M+ reached</span><Icon name="arrow" style={arrow18} /></div>
            </Link>
            <Link className="card" href="/health-connect">
              <div className="ph"><Image src={hcYouth} alt="Poster for RADFIRST Health Connect, a monthly webinar series" style={{ objectPosition: "50% 30%" }} sizes="(max-width: 640px) 100vw, 400px" /></div>
              <div className="bd"><span className="meta"><span>Monthly</span><span>Virtual</span></span><h3 className="d3">RADFIRST Health Connect</h3><p>A monthly webinar where a health professional leads a conversation and answers your questions live.</p></div>
              <div className="ft"><span className="mono muted">150+ attendees</span><Icon name="arrow" style={arrow18} /></div>
            </Link>
            <Link className="card" href="/programmes">
              <div className="ph"><Image src={partner30} alt="Announcement of a 30% diagnostic discount partnership for November 2025" style={{ objectPosition: "50% 60%" }} sizes="(max-width: 640px) 100vw, 400px" /></div>
              <div className="bd"><span className="meta"><span>Since Nov 2025</span><span>Lagos</span></span><h3 className="d3">Diagnostic Access &amp; Referral Support</h3><p>Helping people reach discounted scans through partner diagnostic centres, then following up.</p></div>
              <div className="ft"><span className="mono muted">10–15 people supported</span><Icon name="arrow" style={arrow18} /></div>
            </Link>
          </div>
          <p className="rail-hint" aria-hidden="true">Swipe for more <Icon name="arrow" /></p>
        </div>
      </section>

      <section className="sec band">
        <div className="wrap">
          <div className="head-row">
            <div className="head">
              <span className="eb">Impact so far</span>
              <h2 className="d2">Year one, <span className="lt">in numbers.</span></h2>
            </div>
            <Link className="btn btn-line" style={{ color: "var(--band-ink)", borderColor: "color-mix(in srgb,var(--band-ink) 35%,transparent)" }} href="/impact">Full impact report <Arrow /></Link>
          </div>
          <div className="stats">
            <div className="stat"><b>1M+</b><span>people reached across social media</span></div>
            <div className="stat"><b>180K+</b><span>views on our most-watched video</span></div>
            <div className="stat"><b>150+</b><span>people reached through our webinars</span></div>
            <div className="stat"><b>10–15<sup>*</sup></b><span>people supported with discounted or free diagnostics</span></div>
            <div className="stat"><b>10+</b><span>confirmed follow-ups after diagnostic support</span></div>
            <div className="stat"><b>20</b><span>volunteers powering the work</span></div>
          </div>
          <p className="foot-note">* Through our diagnostic-centre partnership (30% discount, November 2025). All figures are from RADFIRST’s own records.</p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap founder">
          <div className="portrait">
            <Image src={zainab} alt="Zainab Olamide Saba, founder of RADFIRST" sizes="(max-width: 920px) 100vw, 480px" />
            <div className="tag"><span>Zainab Olamide Saba</span><span>Founder</span></div>
          </div>
          <div className="stack" style={{ gap: 28 }}>
            <span className="eb">Our story</span>
            <p className="big-quote">As a radiography student, Zainab kept meeting patients whose conditions had <b>already progressed</b> by the time they came in for a scan.</p>
            <p className="lead">RADFIRST started in October 2025 with one question: what would it take for people to come earlier? It began with explaining medical imaging online and has grown into a model that links education, access, referral and follow-up.</p>
            <div className="btn-row"><Link className="btn btn-ink" href="/about">Read our story <Arrow /></Link><Link className="link" href="/team">Meet the team</Link></div>
          </div>
        </div>
        <div className="wrap" style={{ marginTop: 72 }}>
          <div className="recog">
            <div><span className="mono muted">Recognition · May 2026</span><b>Ashoka Young Changemaker</b><span>Zainab Saba, elected by the Ashoka community</span></div>
            <div><span className="mono muted">Fellowship</span><b>Millennium Fellowship Project</b><span>United Nations Academic Impact &amp; Millennium Campus Network</span></div>
            <div><span className="mono muted">Diagnostic access · Nov 2025</span><b>First diagnostic-centre partnership</b><span>30% off scans, lab tests and wellness screenings for World Radiography Day</span></div>
          </div>
        </div>
      </section>

      <section className="sec sunk">
        <div className="wrap hc">
          <div className="poster"><Image src={hcYouth} alt="Health Connect poster: I am too young for that — health myths young people need to stop believing" sizes="(max-width: 920px) 100vw, 480px" /></div>
          <div className="stack" style={{ gap: 24 }}>
            <span className="eb">RADFIRST Health Connect</span>
            <h2 className="d2">A health conversation, <span className="lt">every month.</span></h2>
            <p className="lead">We pick a topic, invite a qualified speaker, and open the floor. You learn, ask your questions, and leave knowing what to do next.</p>
            <dl className="kv">
              <dt>Latest</dt><dd>“I am too young for that”: health myths young people need to stop believing</dd>
              <dt>Speaker</dt><dd>Ummi Umar Musa, public health and cancer-control advocate</dd>
              <dt>Next</dt><dd>Date to be announced</dd>
            </dl>
            <MiniForm variant="inline" id="hc-email-home" />
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="head">
            <span className="eb">Get involved</span>
            <h2 className="d2">Move from learning <span className="lt">to doing.</span></h2>
            <p className="lead">RADFIRST grows when people who care about early diagnosis take part. Pick the way that suits you.</p>
          </div>
          <div className="tiles">
            <Link className="tile hot" href="/donate"><span className="k">01</span><h3 className="d3">Donate</h3><p>Fund a scan, support an urgent case, or give to the Emergency Diagnostic Support Fund.</p><span className="go">Support diagnostic access <Icon name="arrow" /></span></Link>
            <Link className="tile" href="/partner"><span className="k">02</span><h3 className="d3">Partner</h3><p>Diagnostic centres, hospitals, companies, schools and NGOs working with us on access and education.</p><span className="go">Partner with us <Icon name="arrow" /></span></Link>
            <Link className="tile" href="/volunteer"><span className="k">03</span><h3 className="d3">Volunteer</h3><p>Join 20+ young people creating content, running outreach and supporting patients.</p><span className="go">Volunteer <Icon name="arrow" /></span></Link>
            <Link className="tile" href="/donate/campaign"><span className="k">04</span><h3 className="d3">Support a campaign</h3><p>Take health conversations off social media and into communities, schools and workplaces.</p><span className="go">Sponsor a campaign <Icon name="arrow" /></span></Link>
          </div>
          <div className="minor">
            <Link className="link" href="/expertise">Share your expertise <Icon name="arrow" /></Link>
            <Link className="link" href="/health-connect">Join a programme <Icon name="arrow" /></Link>
            <Link className="link" href="/stories">Share your health story <Icon name="arrow" /></Link>
          </div>
          <div className="help-strip" style={{ marginTop: 56 }}>
            <div className="stack" style={{ gap: 6 }}><h3 className="d3">Need help getting a scan?</h3><p>Tell us what you need. We’ll see whether we can support you, connect you to a service, or refer you to someone who can.</p></div>
            <Link className="btn btn-ink" href="/get-help">Get help from RADFIRST <Arrow /></Link>
          </div>
        </div>
      </section>

      <section className="sec sunk">
        <div className="wrap">
          <div className="head-row">
            <div className="head"><span className="eb">Journal</span><h2 className="d2">Straight answers <span className="lt">about scans.</span></h2></div>
            <Link className="link" href="/journal">All articles <Icon name="arrow" /></Link>
          </div>
          <div className="grid3 rail" style={{ marginTop: 48 }}>
            {[FEATURED_ARTICLE, ...ARTICLES.slice(0, 2)].map((a) => <ArticleCard key={a.slug} a={a} />)}
          </div>
          <p className="rail-hint" aria-hidden="true">Swipe for more <Icon name="arrow" /></p>
        </div>
      </section>
    </>
  );
}
