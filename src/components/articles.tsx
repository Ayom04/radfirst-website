"use client";

import Link from "next/link";
import { useState } from "react";
import type { Article } from "@/lib/content";

export function ArticleCard({ a }: { a: Article }) {
  const body = (
    <div className="bd">
      <span className="meta"><span>{a.category}</span><span>{a.minutes} min read</span></span>
      <h3 className="d3">{a.title}</h3>
      <p>{a.excerpt}</p>
    </div>
  );
  if (a.published) {
    return (
      <Link className="card" href={`/journal/${a.slug}`}>
        {body}
        <div className="ft"><span className="link" style={{ border: 0, padding: 0 }}>Read <svg className="i-arrow"><use href="#i-arrow" /></svg></span></div>
      </Link>
    );
  }
  // Not written yet: shown so readers see what's coming, but not a link.
  return (
    <article className="card">
      {body}
      <div className="ft"><span className="chip">Coming soon</span></div>
    </article>
  );
}

export function JournalGrid({ articles, lead }: { articles: Article[]; lead: React.ReactNode }) {
  const cats = ["All", ...new Set(articles.map((a) => a.category))];
  const [cat, setCat] = useState("All");
  const shown = articles.filter((a) => cat === "All" || a.category === cat);
  return (
    <>
      <div className="filters">
        {cats.map((c) => (
          <button key={c} type="button" aria-pressed={c === cat} onClick={() => setCat(c)}>{c}</button>
        ))}
      </div>
      {lead}
      <div className="grid3" style={{ marginBlock: "24px 96px" }}>
        {shown.map((a) => <ArticleCard key={a.slug} a={a} />)}
      </div>
    </>
  );
}
