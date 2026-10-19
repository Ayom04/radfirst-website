import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JournalGrid } from "@/components/articles";
import { Icon } from "@/components/icons";
import { ARTICLES, FEATURED_ARTICLE as F } from "@/lib/content";
import tiktokFrame from "../../../public/img/tiktok-frame.jpg";

export const metadata: Metadata = {
  title: "Journal",
  description: "Plain-language articles on scans, symptoms and health myths from the RADFIRST research and health education team.",
};

export default function Journal() {
  return (
    <div className="phead"><div className="wrap">
      <div className="head">
        <span className="crumb"><Link href="/">Home</Link> / Journal</span>
        <h1 className="d1">Journal.</h1>
        <p className="lead">Plain-language articles on scans, symptoms and health myths, written and reviewed by the RADFIRST research and health education team.</p>
        <span className="sample">Sample articles · final content from the RADFIRST team</span>
      </div>
      <JournalGrid
        articles={ARTICLES}
        lead={
          <Link className="art-lead" href={`/journal/${F.slug}`}>
            <div className="ph"><Image src={tiktokFrame} alt="" sizes="(max-width: 920px) 100vw, 680px" /></div>
            <div className="bd"><span className="meta"><span>{F.category}</span><span>{F.minutes} min read</span></span><h2 className="d2">{F.title}</h2><p className="muted">{F.excerpt}</p><span className="link" style={{ justifySelf: "start" }}>Read article <Icon name="arrow" /></span></div>
          </Link>
        }
      />
    </div></div>
  );
}
