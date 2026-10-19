import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/icons";
import { THANKS_SLUGS, thanksFor } from "@/lib/forms";

export function generateStaticParams() {
  return THANKS_SLUGS.map((slug) => ({ slug }));
}

export const metadata: Metadata = { title: "Thank you", robots: { index: false } };

export default async function Thanks({ params }: PageProps<"/thanks/[slug]">) {
  const t = thanksFor((await params).slug);
  if (!t) notFound();
  return (
    <section className="sec"><div className="wrap"><div className="thanks">
      <span className="tick"><Icon name="check" /></span>
      <h1 className="d2">{t.heading}</h1>
      <p className="lead">{t.text}</p>
      {t.next && (
        <div className="stack" style={{ gap: 14 }}>
          <span className="eb">What happens next</span>
          <ol className="next">{t.next.map((s, i) => <li key={s}><span>0{i + 1}</span>{s}</li>)}</ol>
        </div>
      )}
      {t.alert && (
        <div className="alert"><Icon name="info" /><span><b>If things get worse, don’t wait for us.</b>Go to the nearest hospital or call 112.</span></div>
      )}
      <div className="btn-row"><Link className="btn btn-ink" href="/">Back to home</Link><Link className="link" href="/journal">Read the journal <Icon name="arrow" className="i-arrow" /></Link></div>
    </div></div></section>
  );
}
