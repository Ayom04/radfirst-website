import { Home } from "@/components/home";
import { Reveal } from "@/components/reveal";
import { INTRO_SCRIPT } from "@/lib/intro";

export default function HomePage() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: INTRO_SCRIPT }} />
      <Reveal mode="intro" />
      <Home />
    </>
  );
}
