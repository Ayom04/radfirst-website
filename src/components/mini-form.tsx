"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { submitForm } from "@/app/actions";

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const bandInput: React.CSSProperties = {
  background: "transparent",
  color: "var(--band-ink)",
  borderColor: "color-mix(in srgb,var(--band-ink) 30%,transparent)",
};

/** Email-only sign-ups: the Health Connect "notify me" forms and the footer newsletter. */
export function MiniForm({ variant, id }: { variant: "inline" | "band" | "footer"; id: string }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [bad, setBad] = useState(false);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setBad(true);
      return;
    }
    setBusy(true);
    await submitForm({ form: variant === "footer" ? "newsletter" : "health-connect-notify", values: { email, whatsapp } });
    router.push("/thanks/notify");
  }

  const badStyle = bad ? { borderColor: "var(--red)" } : undefined;
  const onEmail = (v: string) => {
    setEmail(v);
    setBad(false);
  };

  if (variant === "band") {
    return (
      <form className="stack" style={{ gap: 14 }} onSubmit={onSubmit} noValidate>
        <label htmlFor={id} className="small" style={{ color: "var(--band-ink-2)" }}>Email address</label>
        <input id={id} type="email" placeholder="you@example.com" required value={email} onChange={(e) => onEmail(e.target.value)} style={{ ...bandInput, ...badStyle }} aria-invalid={bad} />
        <label htmlFor={`${id}-wa`} className="small" style={{ color: "var(--band-ink-2)" }}>WhatsApp number (optional)</label>
        <input id={`${id}-wa`} type="tel" placeholder="+234" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} style={bandInput} />
        <button className="btn btn-red" type="submit" disabled={busy} style={{ justifySelf: "start" }}>Notify me</button>
      </form>
    );
  }

  if (variant === "footer") {
    return (
      <form className="news" onSubmit={onSubmit} noValidate>
        <label htmlFor={id} className="small" style={{ color: "var(--band-ink-2)" }}>Get updates on our programmes and impact</label>
        <div className="inline-form">
          <input id={id} type="email" placeholder="Email address" required value={email} onChange={(e) => onEmail(e.target.value)} style={badStyle} aria-invalid={bad} />
          <button className="btn" type="submit" disabled={busy}>Subscribe</button>
        </div>
      </form>
    );
  }

  return (
    <form className="inline-form" onSubmit={onSubmit} noValidate>
      <label htmlFor={id} className="sr-only">Email address</label>
      <input id={id} type="email" placeholder="Your email address" required value={email} onChange={(e) => onEmail(e.target.value)} style={badStyle} aria-invalid={bad} />
      <button className="btn btn-ink" type="submit" disabled={busy}>Tell me the next date</button>
    </form>
  );
}
