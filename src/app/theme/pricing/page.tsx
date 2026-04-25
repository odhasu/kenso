"use client";

import { ArrowRight, CircleCheckBig, Check, Minus } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const comparisonFeatures = [
  { name: "Full Kenso Theme (140+ features)", lite: true, pro: true },
  { name: "Store Licenses", lite: "1 Store", pro: "5 Stores" },
  { name: "Store Transfer if Banned", lite: true, pro: true },
  { name: "1-on-1 Full Store Setup", lite: false, pro: true },
  { name: "Private Kenso Community", lite: false, pro: true },
  { name: "Product Image Generator", lite: true, pro: true },
  { name: "Product List Generator", lite: true, pro: true },
  { name: "Built-in Setup Support", lite: true, pro: true },
  { name: "Complete Documentation", lite: true, pro: true },
  { name: "Lifetime Updates", lite: true, pro: true },
  { name: "Live Chat Support", lite: "Standard", pro: "Priority" },
];

const liteIdeal = [
  "New resellers launching their first store",
  "Testing the market before scaling",
  "DIY entrepreneurs who prefer self-setup",
];

const proIdeal = [
  "Serious resellers wanting done-for-you setup",
  "Multi-store operators running multiple brands",
  "Those who want maximum support & community",
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true)
    return (
      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mx-auto">
        <Check className="w-3.5 h-3.5 text-emerald-600" />
      </div>
    );
  if (value === false)
    return <Minus className="w-4 h-4 text-slate-300 mx-auto" />;
  return (
    <span className="text-sm font-semibold text-slate-700">{value}</span>
  );
}

export default function PricingPage() {
  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="pt-12 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal animation="fade-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-4">
            Choose Your Plan
          </h1>
          <p className="text-slate-600 text-lg sm:text-xl font-medium max-w-2xl mx-auto">
            One time price. Yours for life.
          </p>
        </ScrollReveal>
      </section>

      {/* Pricing Cards */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <ScrollReveal animation="slide-right" delay={100}>
            <div className="tile-3d-solid overflow-hidden flex flex-col h-full">
              <div className="bg-gradient-to-br from-slate-100 via-slate-50 to-white px-8 sm:px-10 pt-6 pb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/70 mb-3">
                  <span className="text-xs font-bold text-slate-600 tracking-wide">LITE</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">Kenso Lite</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-lg text-slate-500">$</span>
                  <span className="text-5xl sm:text-6xl font-bold text-slate-900">179</span>
                </div>
                <p className="text-sm text-slate-500 font-medium">one time</p>
                <p className="text-slate-400 text-sm mt-1">Everything you need to launch</p>
              </div>
              <div className="px-8 sm:px-10 py-6 flex-grow">
                <div className="space-y-3">
                  {["Full theme with 140+ features", "1 store license", "Product image generator", "Product list generator", "Built-in setup support", "Complete documentation", "Lifetime updates"].map((f) => (
                    <div className="flex items-center gap-3" key={f}>
                      <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                        <CircleCheckBig className="w-3.5 h-3.5 text-slate-500" />
                      </div>
                      <span className="text-slate-600 font-medium text-sm sm:text-base">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-8 sm:px-10 pb-8">
                <button className="w-full font-bold text-lg px-8 py-4 rounded-xl btn-3d-dark bg-slate-900 hover:bg-slate-800 text-white inline-flex items-center justify-center gap-2">
                  Get Started <ArrowRight className="w-4 h-4 text-white/70" />
                </button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="slide-left" delay={200}>
            <div className="tile-3d-solid overflow-hidden flex flex-col h-full">
              <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 px-8 sm:px-10 pt-8 pb-10 relative">
                <img src="/images/pro-badge.png" alt="" className="absolute top-6 sm:top-12 right-8 w-36 h-36 sm:w-44 sm:h-44 object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)]" />
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                  <span className="text-xs font-bold text-white tracking-wide">SAVE $200</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">Kenso Pro</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-lg text-white/70">$</span>
                  <span className="text-5xl sm:text-6xl font-bold text-white">379</span>
                </div>
                <p className="text-sm text-white/80 font-medium">one time</p>
                <p className="text-white/70 text-sm mt-2">Scale without limits</p>
              </div>
              <div className="px-8 sm:px-10 py-8 flex-grow">
                <div className="space-y-4">
                  {["Everything in Lite, plus:", "1-on-1 full store setup", "5 store licenses", "Private Kenso community"].map((f) => (
                    <div className="flex items-center gap-3" key={f}>
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                        <CircleCheckBig className="w-3.5 h-3.5 text-blue-600" />
                      </div>
                      <span className="text-slate-900 font-semibold text-sm sm:text-base">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-8 sm:px-10 pb-8">
                <button className="w-full font-bold text-lg px-8 py-4 rounded-xl btn-3d bg-blue-600 hover:bg-blue-500 text-white inline-flex items-center justify-center gap-2">
                  Get Started <ArrowRight className="w-4 h-4 text-white/70" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <ScrollReveal animation="fade-up">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-10 tracking-tight">
              Compare Plans
            </h2>
            <div className="tile-3d-solid overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-4 px-6 text-sm font-semibold text-slate-500">Feature</th>
                      <th className="text-center py-4 px-4 text-sm font-bold text-slate-900">Lite — $179</th>
                      <th className="text-center py-4 px-4 text-sm font-bold text-blue-600">Pro — $379</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((f, i) => (
                      <tr key={f.name} className={i < comparisonFeatures.length - 1 ? "border-b border-slate-100" : ""}>
                        <td className="py-4 px-6 text-sm font-medium text-slate-700">{f.name}</td>
                        <td className="py-4 px-4 text-center"><CellValue value={f.lite} /></td>
                        <td className="py-4 px-4 text-center bg-blue-50/30"><CellValue value={f.pro} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Ideal For */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <ScrollReveal animation="slide-right" delay={100}>
            <div className="tile-3d p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Kenso Lite is ideal for</h3>
              <div className="space-y-3">
                {liteIdeal.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-slate-500" />
                    </div>
                    <span className="text-slate-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="slide-left" delay={200}>
            <div className="tile-3d p-8 border-blue-200/50">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Kenso Pro is ideal for</h3>
              <div className="space-y-3">
                {proIdeal.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-blue-600" />
                    </div>
                    <span className="text-slate-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
