"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { INTRO_KEY } from "@/lib/intro";
import logoDark from "../../public/img/logo-dark.png";
import ribs from "../../public/img/ribs.png";

type Phase = "hold" | "play" | "done";

const noop = () => () => {};
function introSeen() {
  try {
    return !!localStorage.getItem(INTRO_KEY) || matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return false;
  }
}

/**
 * The launch reveal: a heartbeat draws across a dark lightbox, settles into the logo,
 * then a scan bar sweeps down and the page develops underneath.
 * - "intro" plays once per browser on the home page.
 * - "unveil" waits on a holding screen until someone presses Unveil (or a presentation clicker).
 */
export function Reveal({ mode }: { mode: "intro" | "unveil" }) {
  const [phase, setPhase] = useState<Phase>(mode === "intro" ? "play" : "hold");
  const [fullscreen, setFullscreen] = useState(false);
  // The server always renders the intro; the inline INTRO_SCRIPT hides it until hydration.
  const seen = useSyncExternalStore(noop, introSeen, () => false);

  const finish = useCallback(() => {
    try {
      localStorage.setItem(INTRO_KEY, "1");
    } catch {}
    document.documentElement.dataset.intro = "off";
    if (mode === "unveil") history.replaceState(null, "", "/");
    setPhase("done");
  }, [mode]);

  // Reduced motion switches every animation off site-wide, so skip straight to the page.
  const start = useCallback(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) finish();
    else setPhase("play");
  }, [finish]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (mode === "intro") {
        if (e.key === "Escape") finish();
        return;
      }
      if (e.key === "f" || e.key === "F") {
        document.documentElement.requestFullscreen?.().catch(() => {});
      } else if ([" ", "Enter", "ArrowRight", "PageDown"].includes(e.key)) {
        e.preventDefault();
        if (phase === "hold") start();
      }
    };
    const onFullscreen = () => setFullscreen(!!document.fullscreenElement);
    addEventListener("keydown", onKey);
    document.addEventListener("fullscreenchange", onFullscreen);
    return () => {
      removeEventListener("keydown", onKey);
      document.removeEventListener("fullscreenchange", onFullscreen);
    };
  }, [mode, phase, finish, start]);

  if (phase === "done" || (mode === "intro" && seen)) return null;

  return (
    <div
      className="reveal"
      data-mode={mode}
      data-phase={phase}
      role="dialog"
      aria-modal="true"
      aria-label="RADFIRST: saving lives through early diagnosis"
      onAnimationEnd={(e) => {
        if (e.target === e.currentTarget && e.animationName === "rv-done") finish();
      }}
    >
      <div className="rv-film">
        <Image className="rv-ribs" src={ribs} alt="" preload sizes="(max-width: 640px) 90vw, 520px" />
        <svg className="rv-ecg" viewBox="0 0 1200 120" fill="none" aria-hidden="true">
          <path pathLength={1} d="M0 60H480l20-30 20 70 34-96 38 104 20-48H1200" />
        </svg>
        <div className="rv-brand">
          <Image className="rv-logo" src={logoDark} alt="RADFIRST — Radiography Awareness and Diagnosis First" preload sizes="(max-width: 640px) 80vw, 460px" />
          <p className="rv-tag">Saving lives through early diagnosis</p>
        </div>

        {mode === "unveil" && (
          <div className="rv-hold">
            <span className="rv-eb">RADFIRST · Radiography Awareness and Diagnosis First</span>
            <h1 className="rv-title">Something is <span>developing.</span></h1>
            <button type="button" className="rv-btn" onClick={start} autoFocus>
              Unveil
            </button>
            <div className="rv-flat" aria-hidden="true"><i /><span /><i /></div>
            {!fullscreen && <p className="rv-hint">F for full screen · Space, Enter or a clicker to unveil</p>}
          </div>
        )}
      </div>
      <span className="rv-bar" aria-hidden="true" />
      {mode === "intro" && (
        <button type="button" className="rv-skip" onClick={finish}>
          Skip intro
        </button>
      )}
    </div>
  );
}
