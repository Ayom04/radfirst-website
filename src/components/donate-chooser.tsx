"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { DONATE, getDonateOption } from "@/lib/forms";
import { StepForm } from "./step-form";

/** Set when a visitor picks an option here, so the form scrolls into view only after a pick, not on a direct visit. */
export const picked = { current: false };

export function DonateChooser() {
  const active = usePathname().split("/")[2];
  return (
    <div className="chooser">
      {DONATE.map((o) => (
        <Link
          key={o.key}
          href={`/donate/${o.key}`}
          scroll={false}
          className="choice"
          aria-current={o.key === active ? "page" : undefined}
          onClick={() => { picked.current = true; }}
        >
          <span className="k">{o.letter}</span>
          <b>{o.title}</b>
          <span className="s">{o.summary}</span>
        </Link>
      ))}
    </div>
  );
}

export function DonateForm({ option }: { option: string }) {
  const o = getDonateOption(option)!;
  const scroll = picked.current;
  useEffect(() => {
    picked.current = false;
  });
  const intro = (
    <div className="opt-intro">
      <span className="mono muted" style={{ textTransform: "uppercase" }}>Option {o.letter}</span>
      <h3 className="d3">{o.intro[0]}</h3>
      <p>{o.intro[1]}</p>
    </div>
  );
  return (
    <StepForm key={o.key} name={`donate-${o.key}`} steps={o.steps} submit="Submit my support request" thanks={`donate-${o.key}`} noAside intro={intro} scrollOnMount={scroll} />
  );
}
