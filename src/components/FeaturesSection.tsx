"use client";

import {
  Zap,
  MessageSquare,
  Bell,
  Clock,
  Smartphone,
  Settings,
  Gauge,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

const features: Feature[] = [
  {
    title: "Conversion-Optimized",
    description:
      "Every element designed to build trust and drive sales with proven conversion patterns.",
    icon: Zap,
  },
  {
    title: "Fake Chat Assistant",
    description:
      "Simulated chat widget that guides visitors to your products and builds credibility.",
    icon: MessageSquare,
  },
  {
    title: "Social Proof Popups",
    description:
      '"John just purchased..." notifications that create urgency and FOMO.',
    icon: Bell,
  },
  {
    title: "Urgency Elements",
    description:
      "Countdown timers, stock counters, and announcement bars to drive action.",
    icon: Clock,
  },
  {
    title: "Mobile-First Design",
    description:
      "Perfect on every device with responsive layouts optimized for mobile shoppers.",
    icon: Smartphone,
  },
  {
    title: "Easy Customization",
    description:
      "No coding required. Full Shopify editor support for complete control.",
    icon: Settings,
  },
  {
    title: "Lightning Fast",
    description:
      "Optimized for speed and Core Web Vitals to maximize SEO and conversions.",
    icon: Gauge,
  },
  {
    title: "Trust Badges",
    description:
      "Built-in trust-building sections with payment badges and guarantees.",
    icon: ShieldCheck,
  },
];

function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = feature.icon;

  return (
    <div className="group relative rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-blue-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/20">
      {/* Icon */}
      <div className="mb-5 w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center transition-colors duration-300 group-hover:bg-white/20 group-hover:border-white/30">
        <Icon className="w-5 h-5 text-blue-600 transition-colors duration-300 group-hover:text-white" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-slate-900 mb-2 transition-colors duration-300 group-hover:text-white">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-slate-500 leading-relaxed transition-colors duration-300 group-hover:text-blue-100">
        {feature.description}
      </p>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
            Everything You Need to Win
          </h2>
          <p className="text-slate-500 text-base sm:text-lg max-w-xl mx-auto">
            140+ features built specifically for digital product resellers
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => (
            <ScrollReveal
              key={feature.title}
              animation="fade-up"
              delay={i * 60}
            >
              <FeatureCard feature={feature} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
