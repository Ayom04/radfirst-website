"use client";

import { useRef, useState } from "react";

export function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  // Fall back to selecting the text beside the button when the clipboard is unavailable.
  function selectNear() {
    const dd = ref.current?.previousElementSibling;
    if (!dd) return;
    const range = document.createRange();
    range.selectNodeContents(dd);
    const sel = getSelection();
    sel?.removeAllRanges();
    sel?.addRange(range);
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      selectNear();
    }
  }

  return (
    <button ref={ref} type="button" className="copy" onClick={copy}>
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
