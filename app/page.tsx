"use client";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import PortfolioSection from "../components/PortfolioSection";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import EducationSection from "@/components/Education";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen overflow-hidden bg-[#080a0f] text-white">
        <div className="pointer-events-none fixed inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(45,212,191,0.18),transparent_32%),radial-gradient(circle_at_80%_5%,rgba(250,204,21,0.14),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent_30%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />
        </div>
        <Hero />
        <Services />
        <EducationSection />
        <PortfolioSection />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
