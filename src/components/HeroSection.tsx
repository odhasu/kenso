"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CircleCheckBig } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const featurePills = ["140+ Features", "No coding", "One time Fee"];

const stats = [
  { value: "$5M+", label: "Combined Sales" },
  { value: "150K+", label: "Customers Served" },
  { value: "4.9★", label: "Average Rating" },
];

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 lg:pt-48 lg:pb-40 overflow-hidden">
      {/* Background gradient overlays */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-[15%] h-full bg-gradient-to-r from-blue-500/20 via-blue-400/10 to-transparent" />
        <div className="absolute top-0 right-0 w-[15%] h-full bg-gradient-to-l from-indigo-500/20 via-indigo-400/10 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-[20%] bg-gradient-to-b from-white to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 max-w-5xl mx-auto hero-stagger">
          {/* Sales badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 shadow-sm">
              <span className="text-sm text-slate-500 font-medium">
                Theme Store Sales:
              </span>
              <span className="text-sm font-bold text-emerald-600 tabular-nums">
                Loading...
              </span>
            </div>
          </div>

          {/* H1 heading */}
          <h1
            className="font-bold text-slate-900 leading-[1.1] tracking-tight"
            style={{
              fontFamily:
                "var(--font-clash-grotesk), 'Clash Grotesk', sans-serif",
              fontSize: "clamp(2.25rem, 8vw, 4.5rem)",
            }}
          >
            The <span className="text-blue-600">#1</span> Shopify Theme For
            Digital Products
          </h1>

          {/* Paragraph */}
          <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-snug sm:leading-normal font-medium">
            Join 1,000+ resellers building profitable businesses selling vendor
            links. Get your professional store live in under 15 minutes.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Link
              href="#purchase"
              className="group btn-3d inline-flex items-center justify-center gap-3 text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-xl"
            >
              Use Kenso
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/30 group-hover:bg-white/30 transition">
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              href="https://discord.com/invite/hPCDXWpP4A"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-slate-600 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors shadow-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Kenso Community
              <ArrowRight className="w-4 h-4 ml-2 text-slate-400" />
            </Link>
          </div>

          {/* Feature pills */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 pt-6 sm:pt-10 text-sm text-slate-500">
            {featurePills.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <CircleCheckBig className="w-3.5 h-3.5 text-blue-600" />
                </div>
                <span className="font-medium text-slate-700">{feature}</span>
              </div>
            ))}
          </div>

          {/* Social proof section */}
          <div className="pt-12 sm:pt-16">
            <ScrollReveal animation="fade-up">
              <div className="text-center mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                  Used by the Biggest Names in Reselling
                </h2>
                <p className="text-slate-500 text-base sm:text-lg">
                  Join successful resellers making 6-figures with our theme
                </p>
              </div>
            </ScrollReveal>

            {/* Store screenshots — phones pop up with staggered timing */}
            <div className="relative grid grid-cols-3 gap-1 sm:gap-5 md:gap-8 px-4 max-w-[500px] sm:max-w-2xl md:max-w-3xl mx-auto">
              <ScrollReveal animation="pop" delay={100}>
                <div className="self-end origin-bottom">
                  <Image
                    src="/images/stores/store-1.png"
                    alt="Top Reseller Store"
                    width={400}
                    height={700}
                    className="w-full h-auto rounded-xl shadow-2xl"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal animation="pop" delay={0}>
                <div className="self-end origin-bottom mb-8 sm:mb-10">
                  <Image
                    src="/images/stores/store-2.png"
                    alt="Featured Reseller Store"
                    width={400}
                    height={700}
                    className="w-full h-auto rounded-xl shadow-2xl"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal animation="pop" delay={200}>
                <div className="self-end origin-bottom">
                  <Image
                    src="/images/stores/store-3.png"
                    alt="Elite Reseller Store"
                    width={400}
                    height={700}
                    className="w-full h-auto rounded-xl shadow-2xl"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Stats row — fade up with stagger */}
            <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto">
              {stats.map((stat, i) => (
                <ScrollReveal
                  key={stat.label}
                  animation="fade-up"
                  delay={i * 150}
                >
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-500 font-medium">
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
