import Link from "next/link";
import { CONTACT, SOCIALS } from "@/lib/content";
import { Ecg, Icon } from "./icons";
import { MiniForm } from "./mini-form";

export function Socials() {
  return (
    <div className="socials">
      <a href={SOCIALS.tiktok} target="_blank" rel="noopener" aria-label="RADFIRST on TikTok"><Icon name="tt" /></a>
      <a href={SOCIALS.instagram} target="_blank" rel="noopener" aria-label="RADFIRST on Instagram"><Icon name="ig" /></a>
      <a href={SOCIALS.facebook} target="_blank" rel="noopener" aria-label="RADFIRST on Facebook"><Icon name="fb" /></a>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="ftr">
      <Ecg footer />
      <div className="wrap">
        <div className="top">
          <div>
            <p className="tagline"><b>Saving lives</b> through early diagnosis.</p>
            <MiniForm variant="footer" id="news-email" />
            <Socials />
          </div>
          <div>
            <h4>Organisation</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/team">Team</Link></li>
              <li><Link href="/impact">Impact</Link></li>
              <li><Link href="/stories">Stories</Link></li>
              <li><Link href="/journal">Journal</Link></li>
            </ul>
          </div>
          <div>
            <h4>Get involved</h4>
            <ul>
              <li><Link href="/donate">Donate</Link></li>
              <li><Link href="/partner">Partner</Link></li>
              <li><Link href="/volunteer">Volunteer</Link></li>
              <li><Link href="/expertise">Share your expertise</Link></li>
              <li><Link href="/get-help">Get help</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
              <li><a href={`tel:${CONTACT.phoneRaw}`}>{CONTACT.phone}</a></li>
              <li style={{ fontSize: ".95rem" }}>Lagos, Nigeria</li>
              <li><Link href="/contact">Contact form</Link></li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <span>© 2026 RADFIRST · Radiography Awareness and Diagnosis First</span>
          <span>Health information on this site is educational and does not replace medical advice.</span>
        </div>
      </div>
    </footer>
  );
}
