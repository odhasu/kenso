"use client";

import { useState } from "react";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ResellerCarousel } from "@/components/ResellerCarousel";
import { AICustomizerSection } from "@/components/AICustomizerSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { ChatBubble } from "@/components/ChatBubble";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
  const [announcementVisible, setAnnouncementVisible] = useState(true);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-500/20 selection:text-blue-900 overflow-x-hidden">
      <AnnouncementBar onVisibilityChange={setAnnouncementVisible} />
      <Navbar announcementVisible={announcementVisible} />
      <HeroSection />
      <ScrollReveal animation="fade-up">
        <FeaturesSection />
      </ScrollReveal>
      <ScrollReveal animation="fade">
        <ResellerCarousel />
      </ScrollReveal>
      <ScrollReveal animation="scale-up">
        <AICustomizerSection />
      </ScrollReveal>
      <PricingSection />
      <ScrollReveal animation="fade-up">
        <FAQSection />
      </ScrollReveal>
      <Footer />
      <ChatBubble />
    </div>
  );
}
