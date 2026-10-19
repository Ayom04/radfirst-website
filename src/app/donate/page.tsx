import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate",
  description: "Fund a diagnostic case, adopt a scan, sponsor a campaign or give to RADFIRST's Emergency Diagnostic Support Fund.",
};

export default function Donate() {
  return (
    <div className="opt-intro"><p>Choose an option above to see the questions. Each takes about three minutes.</p></div>
  );
}
