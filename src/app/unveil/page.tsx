import type { Metadata } from "next";
import { Home } from "@/components/home";
import { Reveal } from "@/components/reveal";

// Private launch-day page: a holding screen with an Unveil button for the live moment.
// Pressing it plays the reveal and leaves the visitor on the home page at "/".
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function Unveil() {
  return (
    <>
      <Reveal mode="unveil" />
      <Home />
    </>
  );
}
