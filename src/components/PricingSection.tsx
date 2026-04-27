"use client";

import { ArrowRight, CircleCheckBig } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";

const liteFeatures = [
  "Full theme with 140+ features",
  "1 store license -- transfer to a new store if banned",
  "Product image generator",
  "Product list generator",
  "Built-in setup support",
  "Complete documentation",
  "Lifetime updates",
];

const proFeatures = [
  "Everything in Lite, plus:",
  "1-on-1 full store setup",
  "5 store licenses -- use on 5 stores at the same time",
  "Private Kenso community",
];

export function PricingSection() {
  return (
    <section
      id="purchase"
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-4">
              Choose Your Plan
            </h2>
            <p className="text-slate-600 text-lg sm:text-xl font-medium">
              One time price. Yours for life.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* LITE Card */}
          <ScrollReveal animation="slide-right" delay={100}>
            <div className="relative group h-full">
              <div className="relative tile-3d-solid overflow-hidden h-full flex flex-col">
                <div className="relative bg-gradient-to-br from-slate-100 via-slate-50 to-white px-8 sm:px-10 pt-6 pb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/70 mb-3">
                    <span className="text-xs font-bold text-slate-600 tracking-wide">
                      LITE
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">
                    Kenso Lite
                  </h3>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-lg text-slate-500">$</span>
                    <span className="text-5xl sm:text-6xl font-bold text-slate-900">
                      179
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 font-medium">one time</p>
                  <p className="text-slate-400 text-sm mt-1">
                    Everything you need to launch
                  </p>
                </div>
                <div className="px-8 sm:px-10 py-6 flex-grow">
                  <div className="space-y-3">
                    {liteFeatures.map((f) => (
                      <div className="flex items-center gap-3" key={f}>
                        <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-slate-100">
                          <CircleCheckBig className="w-3.5 h-3.5 text-slate-500" />
                        </div>
                        <span className="text-slate-600 font-medium text-sm sm:text-base">
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="px-8 sm:px-10 pb-8">
                  <button className="w-full font-bold text-lg px-8 py-4 rounded-xl inline-flex items-center justify-center gap-2 btn-3d-dark bg-slate-900 hover:bg-slate-800 text-white">
                    Get Started
                    <ArrowRight className="w-4 h-4 text-white/70" />
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* PRO Card */}
          <ScrollReveal animation="slide-left" delay={200}>
            <div className="relative group h-full">
              <div className="relative tile-3d-solid overflow-hidden h-full flex flex-col">
                <div className="relative bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 px-8 sm:px-10 pt-8 pb-10">
                  <img
                    src="/images/pro-badge.png"
                    alt="Pro badge"
                    className="absolute top-6 sm:top-12 right-8 w-36 h-36 sm:w-44 sm:h-44 object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)]"
                  />
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                    <span className="text-xs font-bold text-white tracking-wide">
                      SAVE $200
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    Kenso Pro
                  </h3>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-lg text-white/70">$</span>
                    <span className="text-5xl sm:text-6xl font-bold text-white">
                      379
                    </span>
                  </div>
                  <p className="text-sm text-white/80 font-medium">one time</p>
                  <p className="text-white/70 text-sm mt-2">
                    Scale without limits
                  </p>
                </div>
                <div className="px-8 sm:px-10 py-8 flex-grow">
                  <div className="space-y-4">
                    {proFeatures.map((f) => (
                      <div className="flex items-center gap-3" key={f}>
                        <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-blue-100">
                          <CircleCheckBig className="w-3.5 h-3.5 text-blue-600" />
                        </div>
                        <span className="text-slate-900 font-semibold text-sm sm:text-base">
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="px-8 sm:px-10 pb-8">
                  <button className="w-full font-bold text-lg px-8 py-4 rounded-xl inline-flex items-center justify-center gap-2 btn-3d bg-blue-600 hover:bg-blue-500 text-white">
                    Get Started
                    <ArrowRight className="w-4 h-4 text-white/70" />
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal animation="fade-up" delay={300}>
          <div className="flex justify-center mt-8">
            <Link
              href="/theme/pricing"
              className="inline-flex items-center gap-2 text-lg text-slate-500 hover:text-blue-600 font-medium transition-colors"
            >
              Compare all features
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
