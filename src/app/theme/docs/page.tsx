"use client";

import Link from "next/link";
import {
  Rocket,
  Key,
  Palette,
  Sparkles,
  Wrench,
  FileText,
  ArrowRight,
  Search,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const categories = [
  {
    title: "Getting Started",
    description: "Purchase to live store in 15 minutes",
    icon: Rocket,
    articles: [
      "Quick Start Guide",
      "Downloading Your Theme",
      "Installing in Shopify",
      "License Key Entry",
      "After Purchase Steps",
    ],
  },
  {
    title: "License & Domain",
    description: "Activation, transfers, and how domains work",
    icon: Key,
    articles: [
      "Understanding Licenses",
      "License Activation",
      "Domain Transfers",
    ],
  },
  {
    title: "Theme Customization",
    description: "Colors, branding, and layout",
    icon: Palette,
    articles: ["Colors & Branding", "Theme Editor", "Language Options"],
  },
  {
    title: "Feature Guides",
    description: "Chatbot, spin wheel, image generator, AI customizer",
    icon: Sparkles,
    articles: [
      "AI Chatbot Setup",
      "Bundle Builder",
      "Product Image Generator",
      "AI Store Customizer",
      "Urgency Elements",
      "Product Grids",
      "Reviews & Testimonials",
    ],
  },
  {
    title: "Troubleshooting",
    description: "Common issues and fixes",
    icon: Wrench,
    articles: ["Overview", "License Issues", "Account Access"],
  },
  {
    title: "Plans & Policies",
    description: "Lite vs Pro, refunds, and support",
    icon: FileText,
    articles: [
      "Plan Comparison",
      "Store Ban Policy",
      "Multiple Stores",
      "Refunds",
      "Support Contact",
    ],
  },
];

const popularArticles = [
  "Quick Start Guide",
  "myshopify.com Domains",
  "License Activation",
  "AI Chatbot Setup",
  "Troubleshooting",
];

export default function DocsPage() {
  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="pt-12 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal animation="fade-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Documentation
          </h1>
          <p className="text-slate-600 text-lg sm:text-xl font-medium max-w-2xl mx-auto mb-8">
            Everything you need to get your store up and running
          </p>

          {/* Search bar */}
          <div className="max-w-xl mx-auto">
            <div className="flex items-center gap-3 px-4 py-3 border border-slate-200 rounded-xl bg-white shadow-sm">
              <Search className="w-5 h-5 text-slate-400 shrink-0" />
              <input
                type="text"
                placeholder="Search documentation..."
                className="flex-1 text-sm text-slate-900 placeholder-slate-400 bg-transparent outline-none"
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Popular Articles */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <ScrollReveal animation="fade-up">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
              Popular Articles
            </h2>
            <div className="flex flex-wrap gap-2">
              {popularArticles.map((article) => (
                <span
                  key={article}
                  className="inline-flex items-center px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-100 text-sm font-medium text-blue-800 hover:bg-blue-100 transition-colors cursor-pointer"
                >
                  {article}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Category Grid */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <ScrollReveal key={cat.title} animation="pop" delay={i * 80}>
                <div className="tile-3d p-6 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-violet-700 flex items-center justify-center shadow-md shadow-violet-600/25">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-slate-500">{cat.description}</p>
                    </div>
                  </div>
                  <div className="space-y-1.5 flex-1 mt-2">
                    {cat.articles.map((article) => (
                      <div
                        key={article}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer group"
                      >
                        <span className="text-sm text-slate-600 group-hover:text-slate-900 flex-1">
                          {article}
                        </span>
                        <ArrowRight className="w-3 h-3 text-slate-300 group-hover:text-slate-500 transition-colors" />
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200/60">
                    <span className="text-sm font-medium text-blue-600 inline-flex items-center gap-1 cursor-pointer hover:text-blue-500">
                      View all <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Support CTA */}
      <section className="px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="max-w-3xl mx-auto text-center tile-3d p-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Can&apos;t find what you need?
            </h2>
            <p className="text-slate-600 mb-6">
              Our team is available Mon-Sun, 9am-10pm PST with average response
              times under 15 minutes.
            </p>
            <Link
              href="/theme/support"
              className="btn-3d inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500"
            >
              Contact Support
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
