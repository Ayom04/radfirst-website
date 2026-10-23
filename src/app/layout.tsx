import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono, Instrument_Sans } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { IconSprite } from "@/components/icons";
import "./globals.css";

const archivo = Archivo({ variable: "--font-archivo", subsets: ["latin"], axes: ["wdth"] });
const instrument = Instrument_Sans({ variable: "--font-instrument", subsets: ["latin"] });
const plexMono = IBM_Plex_Mono({ variable: "--font-plex-mono", subsets: ["latin"], weight: ["400", "500"] });

export const metadata: Metadata = {
  title: {
    default: "RADFIRST — Saving lives through early diagnosis",
    template: "%s · RADFIRST",
  },
  description:
    "RADFIRST (Radiography Awareness and Diagnosis First) is a youth-led health initiative in Lagos, Nigeria. We explain diagnostic imaging in plain language, connect people to affordable scans, and stay with them after the result.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning: the launch-intro script may set data-intro before hydration.
    <html lang="en-NG" suppressHydrationWarning className={`${archivo.variable} ${instrument.variable} ${plexMono.variable}`}>
      <body>
        <IconSprite />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
