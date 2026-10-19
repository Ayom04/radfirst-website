import Link from "next/link";

export default function NotFound() {
  return (
    <section className="sec"><div className="wrap"><div className="thanks">
      <span className="eb">404</span>
      <h1 className="d2">We couldn’t find <span className="lt">that page.</span></h1>
      <p className="lead">It may have moved, or the link may be mistyped.</p>
      <div className="btn-row"><Link className="btn btn-ink" href="/">Back to home</Link><Link className="link" href="/get-help">Get help with a scan</Link></div>
    </div></div></section>
  );
}
