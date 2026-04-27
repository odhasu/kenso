"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CircleCheckBig } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const featurePills = ["140+ Features", "No coding", "One time fee"];

const stats = [
  { value: "$5M+", label: "Combined Sales" },
  { value: "150K+", label: "Customers Served" },
  { value: "4.9", label: "Average Rating" },
];

export function HeroSection() {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 max-w-4xl mx-auto hero-stagger">
          {/* H1 heading */}
          <h1
            className="font-bold text-slate-900 leading-[1.08] tracking-tight"
            style={{
              fontFamily:
                "var(--font-clash-grotesk), 'Clash Grotesk', sans-serif",
              fontSize: "clamp(2.25rem, 7vw, 4.25rem)",
            }}
          >
            The <span className="text-blue-600">#1</span> Shopify Theme
            <br className="hidden sm:block" />
            For Digital Products
          </h1>

          {/* Paragraph */}
          <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Join 1,000+ resellers building profitable businesses selling vendor
            links. Get your professional store live in under 15 minutes.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
            <Link
              href="#purchase"
              className="group btn-3d inline-flex items-center justify-center gap-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 px-7 py-3.5 rounded-xl"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="https://discord.com/invite/hPCDXWpP4A"
              className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Community
            </Link>
          </div>

          {/* Feature pills */}
          <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-6 pt-4 text-sm text-slate-500">
            {featurePills.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <CircleCheckBig className="w-4 h-4 text-blue-600" />
                <span className="font-medium text-slate-600">{feature}</span>
              </div>
            ))}
          </div>

          {/* Store screenshots */}
          <div className="pt-12 sm:pt-16">
            <div className="relative grid grid-cols-3 gap-2 sm:gap-5 md:gap-8 px-4 max-w-[480px] sm:max-w-xl md:max-w-2xl mx-auto">
              <ScrollReveal animation="pop" delay={100}>
                <div className="self-end origin-bottom">
                  <Image
                    src="/images/stores/store-1.png"
                    alt="Reseller store example"
                    width={400}
                    height={700}
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal animation="pop" delay={0}>
                <div className="self-end origin-bottom mb-6 sm:mb-8">
                  <Image
                    src="/images/stores/store-2.png"
                    alt="Reseller store example"
                    width={400}
                    height={700}
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal animation="pop" delay={200}>
                <div className="self-end origin-bottom">
                  <Image
                    src="/images/stores/store-3.png"
                    alt="Reseller store example"
                    width={400}
                    height={700}
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Stats row */}
            <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-8 max-w-md mx-auto">
              {stats.map((stat, i) => (
                <ScrollReveal
                  key={stat.label}
                  animation="fade-up"
                  delay={i * 120}
                >
                  <div className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-slate-900 mb-0.5">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
