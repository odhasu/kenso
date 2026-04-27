"use client";

import { ArrowRight, CircleCheckBig } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";

const liteFeatures = [
  "Full theme with 140+ features",
  "1 store license",
  "Product image generator",
  "Product list generator",
  "Built-in setup support",
  "Complete documentation",
  "Lifetime updates",
];

const proFeatures = [
  "Everything in Lite, plus:",
  "1-on-1 full store setup",
  "5 store licenses",
  "Private Kenso community",
];

export function PricingSection() {
  return (
    <section
      id="purchase"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50"
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-3">
              Choose Your Plan
            </h2>
            <p className="text-slate-500 text-base sm:text-lg">
              One time price. Yours for life.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* LITE */}
          <ScrollReveal animation="slide-right" delay={100}>
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden h-full flex flex-col">
              <div className="px-8 pt-8 pb-6">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                  Lite
                </span>
                <div className="flex items-baseline gap-1 mt-2 mb-1">
                  <span className="text-sm text-slate-400">$</span>
                  <span className="text-5xl font-bold text-slate-900">179</span>
                </div>
                <p className="text-sm text-slate-400">one time payment</p>
              </div>
              <div className="px-8 py-6 flex-grow border-t border-slate-100">
                <div className="space-y-3">
                  {liteFeatures.map((f) => (
                    <div className="flex items-center gap-3" key={f}>
                      <CircleCheckBig className="w-4 h-4 text-slate-400 flex-shrink-0" />
                      <span className="text-sm text-slate-600">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-8 pb-8">
                <button className="w-full py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* PRO */}
          <ScrollReveal animation="slide-left" delay={200}>
            <div className="bg-white rounded-2xl border border-blue-200 overflow-hidden h-full flex flex-col ring-1 ring-blue-100">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 px-8 pt-8 pb-6 relative">
                <img
                  src="/images/pro-badge.png"
                  alt=""
                  className="absolute top-4 right-6 w-28 h-28 object-contain opacity-90"
                />
                <span className="inline-flex px-2.5 py-0.5 rounded-full bg-white/20 text-xs font-bold text-white tracking-wide">
                  MOST POPULAR
                </span>
                <div className="flex items-baseline gap-1 mt-3 mb-1">
                  <span className="text-sm text-white/60">$</span>
                  <span className="text-5xl font-bold text-white">379</span>
                </div>
                <p className="text-sm text-white/60">one time payment</p>
              </div>
              <div className="px-8 py-6 flex-grow">
                <div className="space-y-3">
                  {proFeatures.map((f) => (
                    <div className="flex items-center gap-3" key={f}>
                      <CircleCheckBig className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span className="text-sm font-medium text-slate-700">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-8 pb-8">
                <button className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal animation="fade-up" delay={300}>
          <div className="flex justify-center mt-6">
            <Link
              href="/theme/pricing"
              className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-blue-600 font-medium transition-colors"
            >
              Compare all features
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
