"use client";

import { useState } from "react";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ResellerCarousel } from "@/components/ResellerCarousel";
import { ImageGeneratorSection } from "@/components/ImageGeneratorSection";
import { AICustomizerSection } from "@/components/AICustomizerSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { ChatBubble } from "@/components/ChatBubble";

export default function Home() {
  const [announcementVisible, setAnnouncementVisible] = useState(true);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-500/20 selection:text-blue-900 overflow-x-hidden">
      <AnnouncementBar onVisibilityChange={setAnnouncementVisible} />
      <Navbar announcementVisible={announcementVisible} />
      <HeroSection />
      <FeaturesSection />
      <ResellerCarousel />
      <ImageGeneratorSection />
      <AICustomizerSection />
      <PricingSection />
      <FAQSection />
      <Footer />
      <ChatBubble />
    </div>
  );
}
