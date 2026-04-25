"use client";

import Link from "next/link";
import { Calendar, ArrowRight, Megaphone, Shield, Newspaper, Cpu } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const articles = [
  {
    date: "April 10, 2026",
    title: "Kenso V3 Is Here — Rebuilt From the Ground Up",
    excerpt:
      "The biggest update in Kenso history. V3 introduces a completely redesigned theme engine, new AI-powered features, and dramatically improved performance across the board.",
    icon: Megaphone,
    tag: "Launch",
    tagColor: "bg-blue-50 text-blue-700 border-blue-100",
  },
  {
    date: "April 1, 2026",
    title: "Scam Alert: Unauthorized Resellers Are Overcharging You",
    excerpt:
      "We've identified unauthorized sellers distributing Kenso at inflated prices. Learn how to verify you're buying from an official source and protect yourself.",
    icon: Shield,
    tag: "Alert",
    tagColor: "bg-red-50 text-red-700 border-red-100",
  },
  {
    date: "March 23, 2026",
    title: "Introducing the Kenso News Page",
    excerpt:
      "Stay up to date with the latest Kenso updates, feature releases, and community announcements — all in one place.",
    icon: Newspaper,
    tag: "Update",
    tagColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
  },
  {
    date: "March 20, 2026",
    title: "AI Customizer Upgraded to Opus 4.6",
    excerpt:
      "Our AI Store Customizer now runs on Anthropic's latest Opus 4.6 model — faster responses, smarter suggestions, and better understanding of your brand.",
    icon: Cpu,
    tag: "Feature",
    tagColor: "bg-violet-50 text-violet-700 border-violet-100",
  },
];

export default function NewsPage() {
  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="pt-12 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal animation="fade-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-4">
            News & Updates
          </h1>
          <p className="text-slate-600 text-lg sm:text-xl font-medium max-w-2xl mx-auto">
            The latest from the Kenso team
          </p>
        </ScrollReveal>
      </section>

      {/* Articles */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-6">
          {articles.map((article, i) => {
            const Icon = article.icon;
            return (
              <ScrollReveal key={article.title} animation="fade-up" delay={i * 80}>
                <article className="tile-3d-solid p-6 sm:p-8 group cursor-pointer hover:border-blue-200/60 transition-colors">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-violet-700 flex items-center justify-center shadow-md shadow-violet-600/25 shrink-0 mt-1">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border ${article.tagColor}`}>
                          {article.tag}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                          <Calendar className="w-3 h-3" />
                          {article.date}
                        </span>
                      </div>
                      <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight">
                        {article.title}
                      </h2>
                      <p className="text-sm text-slate-500 leading-relaxed mb-3">
                        {article.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:gap-2.5 transition-all">
                        Read more <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}
