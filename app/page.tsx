import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Games from "@/components/Games";
import About from "@/components/About";
import Download from "@/components/Download";
import Payments from "@/components/Payments";
import Compare from "@/components/Compare";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Ec99 Game Download APK 2026 – Pakistan's #1 Real Money Earning App",
  description:
    "Download Ec99 Game APK latest version (v2.26.0, 38 MB) — Pakistan's fastest real money earning app. Play color prediction, K3 lottery, 5D, Dragon Tiger, PG slots & Aviator. Instant JazzCash & Easypaisa withdrawals in 3 minutes. Register free.",
  alternates: { canonical: "/" },
  openGraph: {
    title:
      "Ec99 Game APK Download – Pakistan's #1 Real Money Earning App 2026",
    description:
      "Download Ec99 Game APK latest version. Real money games, JazzCash & Easypaisa withdrawals in 3 minutes. The smarter alternative to 988 Win and AR999.",
    url: "/",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Header />
      <main id="main">
        <Hero />
        <Features />
        <Games />
        <About />
        <Download />
        <Payments />
        <Compare />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
