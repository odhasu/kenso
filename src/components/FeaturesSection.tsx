"use client";

import {
  Layers,
  Store,
  TrendingUp,
  ShoppingCart,
  ShieldCheck,
  Wand2,
  Shield,
  Zap,
  ArrowRight,
  Copy,
  Code2,
  type LucideIcon,
} from "lucide-react";

interface FeatureBullet {
  icon: LucideIcon;
  label: string;
}

interface Feature {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  description: string;
  bullets: FeatureBullet[];
}

const features: Feature[] = [
  {
    title: "Sell While You Sleep",
    subtitle: "Automated selling around the clock",
    icon: Store,
    description:
      "AI chatbot answers customer questions 24/7. Handles objections and closes deals automatically while you focus on what matters.",
    bullets: [
      { icon: Copy, label: "AI Chatbot Included" },
      { icon: Code2, label: "24/7 Automation" },
      { icon: Wand2, label: "Handles Objections" },
      { icon: Zap, label: "Closes Deals for You" },
    ],
  },
  {
    title: "Convert More Visitors",
    subtitle: "Turn browsers into buyers",
    icon: TrendingUp,
    description:
      "Built-in urgency tools, social proof, and checkout optimization designed to maximize your conversion rate from day one.",
    bullets: [
      { icon: Copy, label: "Urgency Timers" },
      { icon: Code2, label: "Social Proof Widgets" },
      { icon: Wand2, label: "Checkout Optimizer" },
      { icon: Zap, label: "Scarcity Alerts" },
    ],
  },
  {
    title: "Boost Your AOV",
    subtitle: "Make every order count more",
    icon: ShoppingCart,
    description:
      "Bundle builder with automatic discounts. Customers spend more when they can build custom deals and save.",
    bullets: [
      { icon: Copy, label: "Bundle Builder" },
      { icon: Code2, label: "Auto Discounts" },
      { icon: Wand2, label: "Upsell Prompts" },
      { icon: Zap, label: "Cart Optimization" },
    ],
  },
  {
    title: "Build Trust Fast",
    subtitle: "Look like a premium brand",
    icon: ShieldCheck,
    description:
      "Photo reviews, live viewer counts, recent purchase notifications, and trust badges that make first-time buyers feel safe.",
    bullets: [
      { icon: Copy, label: "Photo Reviews" },
      { icon: Code2, label: "Live Viewer Count" },
      { icon: Wand2, label: "Purchase Popups" },
      { icon: Zap, label: "Trust Badges" },
    ],
  },
  {
    title: "No Coding Required",
    subtitle: "Set up in under 15 minutes",
    icon: Wand2,
    description:
      "Customize everything through Shopify's built-in editor. No developers needed — just drag, drop, and publish.",
    bullets: [
      { icon: Copy, label: "Visual Editor" },
      { icon: Code2, label: "Drag & Drop" },
      { icon: Wand2, label: "One-Click Setup" },
      { icon: Zap, label: "Step-by-Step Guides" },
    ],
  },
  {
    title: "Stay Compliant",
    subtitle: "Built to keep your store safe",
    icon: Shield,
    description:
      "Officially licensed for digital products. Built specifically so you don't get banned — even when competitors do.",
    bullets: [
      { icon: Copy, label: "TOS Compliant" },
      { icon: Code2, label: "Ban-Proof Design" },
      { icon: Wand2, label: "Licensed Assets" },
      { icon: Zap, label: "Regular Audits" },
    ],
  },
];

function DecorativeLines() {
  return (
    <div className="flex flex-col items-center gap-2 px-6 pt-6">
      <div className="h-2.5 w-[85%] rounded-full bg-violet-200/60" />
      <div className="h-2.5 w-[70%] rounded-full bg-violet-200/50" />
      <div className="h-2.5 w-[90%] rounded-full bg-violet-200/40" />
      <div className="h-2.5 w-[60%] rounded-full bg-violet-100/60" />
      <div className="h-2.5 w-[75%] rounded-full bg-violet-100/40" />
    </div>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = feature.icon;

  return (
    <div className="feature-card h-[340px] sm:h-[360px]">
      <div className="feature-card-inner">
        {/* Front face — default */}
        <div className="feature-card-front bg-white border border-slate-200/80 shadow-md shadow-slate-200/40 overflow-hidden flex flex-col">
          {/* Decorative area */}
          <div className="flex-1 flex flex-col justify-center relative bg-gradient-to-b from-slate-50 to-white">
            <DecorativeLines />
            {/* Icon centered */}
            <div className="flex justify-center mt-4 mb-2">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-violet-700 flex items-center justify-center shadow-lg shadow-violet-600/30">
                <Icon className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
          {/* Bottom: title + subtitle */}
          <div className="px-5 pb-5 pt-3 flex items-end justify-between gap-2">
            <div>
              <h3 className="text-lg font-bold text-slate-900 leading-tight">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-500 mt-0.5">{feature.subtitle}</p>
            </div>
            <Zap className="w-5 h-5 text-violet-600 shrink-0" />
          </div>
        </div>

        {/* Back face — hover detail */}
        <div className="feature-card-back bg-white border border-slate-200/80 shadow-md shadow-slate-200/40 overflow-hidden flex flex-col p-6">
          {/* Icon + title */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-violet-700 flex items-center justify-center shadow-md shadow-violet-600/25 shrink-0">
              <Code2 className="w-4.5 h-4.5 text-white" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-500 leading-relaxed mb-5">
            {feature.description}
          </p>

          {/* Bullet items */}
          <div className="space-y-3 flex-1">
            {feature.bullets.map((bullet) => {
              const BulletIcon = bullet.icon;
              return (
                <div key={bullet.label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center shrink-0">
                    <BulletIcon className="w-4 h-4 text-violet-600" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800">
                    {bullet.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Explore link */}
          <div className="border-t border-slate-100 pt-4 mt-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-900">
                Explore feature
              </span>
              <ArrowRight className="w-4 h-4 text-violet-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.4] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative w-full">
        <div className="text-center mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 shadow-sm mb-6">
            <Layers className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-900">
              Built for Your Success
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Everything A Reseller
            <br />
            Needs to Win
          </h2>
          <p className="text-slate-600 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto font-medium leading-relaxed">
            Features your store needs to outsell the competition
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
