import Link from "next/link";
import { Fragment } from "react";

type Crumb = { href: string; label: string };

/** Breadcrumb, headline and lead at the top of every inner page. */
export function PageHead({ crumbs, current, title, lead, children }: {
  crumbs?: Crumb[];
  current: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div className="phead">
      <div className="wrap">
        <div className="head">
          <span className="crumb">
            <Link href="/">Home</Link> /{" "}
            {crumbs?.map((c) => (
              <Fragment key={c.href}><Link href={c.href}>{c.label}</Link> /{" "}</Fragment>
            ))}
            {current}
          </span>
          <h1 className="d1">{title}</h1>
          {lead && <p className="lead">{lead}</p>}
          {children}
        </div>
      </div>
    </div>
  );
}

export const INVOLVED: Crumb = { href: "/get-involved", label: "Get involved" };
