"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { submitForm } from "@/app/actions";
import type { Field, Step } from "@/lib/forms";
import { Arrow, Icon } from "./icons";
import { EMAIL_RE } from "./mini-form";

type Values = Record<string, string | string[]>;

type Props = {
  /** Used for input ids and to label the submission. */
  name: string;
  steps: Step[];
  submit: string;
  /** Slug of the thank-you page to go to after a successful submit. */
  thanks: string;
  side?: { title: string; text: string };
  /** Render without the steps sidebar (the donate page has its own). */
  noAside?: boolean;
  intro?: React.ReactNode;
  /** Scroll the form into view when it mounts. */
  scrollOnMount?: boolean;
};

const asList = (v: Values[string] | undefined) => (Array.isArray(v) ? v : v ? [v] : []);

function isShown(f: Field, values: Values) {
  if (!f.showIf) return true;
  const [dep, wanted] = f.showIf;
  return asList(values[dep]).some((v) => wanted.includes(v));
}

function errorFor(f: Field, values: Values, otherAmounts: Record<string, string>): string {
  if (!f.required) return "";
  const v = values[f.id];
  switch (f.type) {
    case "email": {
      const s = typeof v === "string" ? v.trim() : "";
      if (!s) return "Please enter your email address.";
      return EMAIL_RE.test(s) ? "" : "Enter a valid email address, like name@example.com.";
    }
    case "radio":
    case "amount":
      if (!v) return "Please choose an option.";
      if (f.type === "amount" && v === "other" && !otherAmounts[f.id]?.trim()) return "Enter the amount you’d like to give.";
      return "";
    case "check":
      return asList(v).length ? "" : "Choose at least one option.";
    case "consent":
      return v === "yes" ? "" : "Please confirm to continue.";
    default:
      return typeof v === "string" && v.trim() ? "" : "Please fill this in.";
  }
}

export function StepForm({ name, steps, submit, thanks, side, noAside, intro, scrollOnMount }: Props) {
  const router = useRouter();
  const hostRef = useRef<HTMLDivElement>(null);
  const [cur, setCur] = useState(0);
  const [values, setValues] = useState<Values>({});
  const [otherAmounts, setOtherAmounts] = useState<Record<string, string>>({});
  const [fileNames, setFileNames] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [busy, setBusy] = useState(false);
  const multi = steps.length > 1;
  const last = cur === steps.length - 1;

  useEffect(() => {
    if (scrollOnMount) hostRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [scrollOnMount]);

  function set(id: string, v: string | string[]) {
    setValues((s) => ({ ...s, [id]: v }));
    setErrors((e) => (e[id] ? { ...e, [id]: "" } : e));
  }

  function toggle(id: string, option: string, on: boolean) {
    const list = asList(values[id]);
    set(id, on ? [...list, option] : list.filter((x) => x !== option));
  }

  function validate() {
    const next: Record<string, string> = {};
    let first: string | null = null;
    for (const f of steps[cur].fields) {
      if (!isShown(f, values)) continue;
      const msg = errorFor(f, values, otherAmounts);
      if (msg) {
        next[f.id] = msg;
        first ??= f.id;
      }
    }
    setErrors(next);
    if (first) {
      const el = hostRef.current?.querySelector<HTMLElement>(`[data-id="${first}"]`);
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
      el?.querySelector<HTMLElement>("input,textarea")?.focus({ preventScroll: true });
    }
    return !first;
  }

  function go(step: number) {
    setCur(step);
    hostRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!last) {
      if (validate()) go(cur + 1);
      return;
    }
    if (!validate()) return;
    setBusy(true);
    const payload: Values = { ...values };
    for (const [id, amt] of Object.entries(otherAmounts)) if (payload[id] === "other") payload[id] = amt;
    for (const [id, file] of Object.entries(fileNames)) payload[id] = file;
    await submitForm({ form: name, values: payload });
    router.push(`/thanks/${thanks}`);
  }

  function renderField(f: Field) {
    if (!isShown(f, values)) return null;
    const id = `${name}-${f.id}`;
    const err = errors[f.id] ?? "";
    const req = f.required ? <span className="req" aria-hidden="true">*</span> : null;
    const hint = f.hint ? <p className="hint" id={`${id}-h`}>{f.hint}</p> : null;
    const errEl = <p className="err" id={`${id}-e`} role="alert">{err}</p>;
    const cls = `fld${err ? " bad" : ""}`;
    const describedBy = [f.hint && `${id}-h`, err && `${id}-e`].filter(Boolean).join(" ") || undefined;
    const value = typeof values[f.id] === "string" ? (values[f.id] as string) : "";

    switch (f.type) {
      case "text":
      case "email":
      case "tel":
        return (
          <div className={cls} data-id={f.id} key={f.id}>
            <label htmlFor={id}>{f.label}{req}</label>
            {hint}
            <input id={id} name={f.id} type={f.type} placeholder={f.placeholder} autoComplete={f.autoComplete} style={f.narrow ? { maxWidth: 160 } : undefined}
              value={value} onChange={(e) => set(f.id, e.target.value)} aria-invalid={!!err} aria-describedby={describedBy} />
            {errEl}
          </div>
        );
      case "textarea":
        return (
          <div className={cls} data-id={f.id} key={f.id}>
            <label htmlFor={id}>{f.label}{req}</label>
            {hint}
            <textarea id={id} name={f.id} placeholder={f.placeholder} value={value} onChange={(e) => set(f.id, e.target.value)} aria-invalid={!!err} aria-describedby={describedBy} />
            {errEl}
          </div>
        );
      case "naira":
        return (
          <div className="fld" data-id={f.id} key={f.id}>
            <label htmlFor={id}>{f.label}</label>
            {hint}
            <div className="naira"><input id={id} name={f.id} type="text" inputMode="numeric" placeholder="0" value={value} onChange={(e) => set(f.id, e.target.value)} /></div>
          </div>
        );
      case "radio":
      case "check":
      case "amount": {
        const options = f.options ?? [];
        const isCheck = f.type === "check";
        const selected = asList(values[f.id]);
        const layout = options.some((o) => o.length > 34) ? " long" : options.length > 4 ? " many" : "";
        const all = f.type === "amount" ? [...options, "other"] : options;
        return (
          <fieldset className={cls} data-id={f.id} key={f.id} aria-describedby={describedBy}>
            <legend>{f.label}{req}</legend>
            {hint}
            <div className={`opts${layout}`}>
              {all.map((o, i) => (
                <label className="opt" key={o}>
                  <input type={isCheck ? "checkbox" : "radio"} id={`${id}-${i}`} name={id} value={o} checked={selected.includes(o)}
                    onChange={(e) => (isCheck ? toggle(f.id, o, e.target.checked) : set(f.id, o))} />
                  <span>{o === "other" ? "Other amount" : o}</span>
                </label>
              ))}
            </div>
            {f.type === "amount" && values[f.id] === "other" && (
              <div className="naira">
                <label htmlFor={`${id}-amt`} className="sr-only">Other amount in naira</label>
                <input id={`${id}-amt`} type="text" inputMode="numeric" placeholder="Enter amount" value={otherAmounts[f.id] ?? ""}
                  onChange={(e) => { setOtherAmounts((s) => ({ ...s, [f.id]: e.target.value })); setErrors((x) => ({ ...x, [f.id]: "" })); }} />
              </div>
            )}
            {errEl}
          </fieldset>
        );
      }
      case "file":
        return (
          <div className="fld" data-id={f.id} key={f.id}>
            <span style={{ fontWeight: 600 }}>{f.label}</span>
            <label className="drop" htmlFor={id}>
              <Icon name="up" />
              <b>{fileNames[f.id] || "Choose a file"}</b>
              <span className="small">{f.hint}</span>
              <input id={id} type="file" onChange={(e) => setFileNames((s) => ({ ...s, [f.id]: e.target.files?.[0]?.name ?? "" }))} />
            </label>
          </div>
        );
      case "consent":
        return (
          <div className={cls} data-id={f.id} key={f.id}>
            <label className="consent" htmlFor={id}>
              <input type="checkbox" id={id} name={f.id} checked={values[f.id] === "yes"} onChange={(e) => set(f.id, e.target.checked ? "yes" : "")} />
              <span>{f.label}{req}</span>
            </label>
            {errEl}
          </div>
        );
    }
  }

  const form = (
    <form className="fbox" noValidate onSubmit={onSubmit}>
      {intro}
      <div className="fstep">
        <div className="fstep-h">
          {multi && <span className="mono">Step {cur + 1} of {steps.length}</span>}
          <h2 className="d3">{steps[cur].title}</h2>
          {multi && <div className="prog-bar">{steps.map((_, j) => <i key={j} className={j <= cur ? "on" : ""} />)}</div>}
        </div>
        {steps[cur].fields.map(renderField)}
      </div>
      <div className="fnav">
        <button type="button" className="btn btn-line" hidden={cur === 0} onClick={() => go(cur - 1)}>Back</button>
        <span />
        {last ? (
          <button type="submit" className="btn btn-red" disabled={busy}>{submit}</button>
        ) : (
          <button type="submit" className="btn btn-ink">Continue <Arrow /></button>
        )}
      </div>
    </form>
  );

  return (
    <div ref={hostRef} style={{ scrollMarginTop: 96 }}>
      {multi && !noAside ? (
        <div className="form-wrap">
          <aside>
            <ol className="steps-nav" aria-label="Form steps">
              {steps.map((s, i) => (
                <li key={s.title} className={i === cur ? "on" : i < cur ? "done" : ""}>
                  <span className="n">{i + 1}</span><span className="lbl">{s.title}</span>
                </li>
              ))}
            </ol>
            {side && <div className="side-card"><b>{side.title}</b><span>{side.text}</span></div>}
          </aside>
          {form}
        </div>
      ) : form}
    </div>
  );
}
