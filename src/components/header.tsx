"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import logo from "../../public/img/logo.png";
import logoDark from "../../public/img/logo-dark.png";
import { Icon } from "./icons";

const NAV = [
  { href: "/about", label: "About" },
  { href: "/programmes", label: "Programmes" },
  { href: "/health-connect", label: "Health Connect" },
  { href: "/impact", label: "Impact" },
  { href: "/stories", label: "Stories" },
  { href: "/journal", label: "Journal" },
];

const MOBILE_NAV = [{ href: "/", label: "Home" }, ...NAV, { href: "/team", label: "Team" }, { href: "/contact", label: "Contact" }];

// Pages that live under another nav item.
const PARENT: Record<string, string> = { "/team": "/about" };

function Logo({ alt, preload }: { alt: string; preload?: boolean }) {
  return (
    <>
      <Image className="logo-l" src={logo} alt={alt} preload={preload} />
      <Image className="logo-d" src={logoDark} alt={alt} />
    </>
  );
}

export function Header() {
  const pathname = usePathname();
  // Each menu remembers the page it was opened on, so navigating closes it.
  const [supportAt, setSupportAt] = useState<string | null>(null);
  const [menuAt, setMenuAt] = useState<string | null>(null);
  const supportOpen = supportAt === pathname;
  const menuOpen = menuAt === pathname;
  const setSupportOpen = (open: boolean) => setSupportAt(open ? pathname : null);
  const setMenuOpen = (open: boolean) => setMenuAt(open ? pathname : null);
  const popRef = useRef<HTMLDivElement>(null);

  const section = "/" + (pathname.split("/")[1] ?? "");
  const current = PARENT[section] ?? section;

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (popRef.current && !popRef.current.contains(e.target as Node)) setSupportAt(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSupportAt(null);
        setMenuAt(null);
      }
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <>
      <header className="hdr">
        <div className="wrap">
          <Link className="brand" href="/" aria-label="RADFIRST home">
            <Logo alt="RADFIRST — Radiography Awareness and Diagnosis First" preload />
          </Link>
          <nav className="nav" aria-label="Main">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} aria-current={current === n.href ? "page" : undefined}>
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="hdr-actions" ref={popRef}>
            <Link className="btn btn-line btn-sm hide-sm" href="/get-help">Get help</Link>
            <button
              className="btn btn-red btn-sm"
              aria-expanded={supportOpen}
              aria-controls="supportPop"
              onClick={() => setSupportOpen(!supportOpen)}
            >
              <span>Support<span className="hide-xs"> RADFIRST</span></span>
            </button>
            <div className="pop" id="supportPop" hidden={!supportOpen}>
              <Link href="/donate"><span className="k">01</span><b>Donate</b><span className="s">Fund a scan, a case or the emergency fund</span></Link>
              <Link href="/partner"><span className="k">02</span><b>Partner</b><span className="s">For organisations and institutions</span></Link>
              <Link href="/volunteer"><span className="k">03</span><b>Volunteer</b><span className="s">Give your time and skills</span></Link>
              <Link href="/donate/campaign"><span className="k">04</span><b>Support a campaign</b><span className="s">Sponsor a health education campaign</span></Link>
              <Link className="all" href="/get-involved">All the ways to get involved →</Link>
            </div>
            <button className="menu-btn" aria-label="Open menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(true)}>
              <Icon name="menu" />
            </button>
          </div>
        </div>
      </header>

      <div className="mnav" hidden={!menuOpen}>
        <div className="mnav-top">
          <Logo alt="RADFIRST" />
          <button className="menu-btn" style={{ display: "grid" }} aria-label="Close menu" onClick={() => setMenuOpen(false)}>
            <Icon name="close" />
          </button>
        </div>
        <nav aria-label="Mobile">
          {MOBILE_NAV.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setMenuOpen(false)}>{n.label}</Link>
          ))}
        </nav>
        <div className="btn-row">
          <Link className="btn btn-red" href="/get-involved" onClick={() => setMenuOpen(false)}>Support RADFIRST</Link>
          <Link className="btn btn-line" href="/get-help" onClick={() => setMenuOpen(false)}>Get help</Link>
        </div>
      </div>
    </>
  );
}
