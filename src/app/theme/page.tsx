"use client";

import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ResellerCarousel } from "@/components/ResellerCarousel";
import { AICustomizerSection } from "@/components/AICustomizerSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { ChatBubble } from "@/components/ChatBubble";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function ThemePage() {
  return (
    <>
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
      <ChatBubble />
    </>
  );
}
