"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MessageCircle,
  BookOpen,
  Clock,
  Zap,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ScrollReveal";

const faqs = [
  {
    question: "Downloading your theme",
    answer:
      "After purchasing, you'll receive access to your portal where you can download the theme file. Upload the .zip file directly to your Shopify admin under Online Store > Themes > Add theme.",
  },
  {
    question: "Activating your license",
    answer:
      "Navigate to Theme Settings in your Shopify editor and enter your license key in the designated field. Your license will activate instantly and link to your store's domain.",
  },
  {
    question: "Changing your store domain",
    answer:
      "You can transfer your license to a new domain through your account portal. This is a self-service process that takes effect immediately.",
  },
  {
    question: "Need customizations?",
    answer:
      "Kenso's built-in editor lets you customize colors, fonts, sections, and more without any code. For advanced changes, our support team can assist you directly.",
  },
  {
    question: "Will my store get banned?",
    answer:
      "Kenso is fully licensed with Shopify for selling digital products. We have zero store bans to date. The theme is built specifically to keep your store in good standing.",
  },
  {
    question: "Upgrading to Pro",
    answer:
      "If you purchased Lite and want to upgrade, contact our support team. You'll receive credit from your Lite purchase towards the Pro upgrade price.",
  },
];

export default function SupportPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="pt-12 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal animation="fade-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-4">
            How can we help?
          </h1>
          <p className="text-slate-600 text-lg sm:text-xl font-medium max-w-2xl mx-auto">
            Chat with the Kenso team for fast support via text follow-ups.
          </p>
        </ScrollReveal>
      </section>

      {/* Support Card */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <ScrollReveal animation="pop">
          <div className="max-w-lg mx-auto tile-3d-solid p-8 text-center">
            <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-600/30">
              <MessageCircle className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-1">
              Michael from Kenso
            </h2>
            <p className="text-sm text-emerald-600 font-medium mb-4">
              Available now &middot; 0 min wait
            </p>

            <div className="grid grid-cols-3 gap-4 mb-6 text-center">
              <div>
                <div className="flex items-center justify-center gap-1.5 text-slate-900 font-bold">
                  <Clock className="w-4 h-4 text-slate-400" />
                  9-10 PST
                </div>
                <p className="text-xs text-slate-500 mt-0.5">Mon-Sun</p>
              </div>
              <div>
                <div className="flex items-center justify-center gap-1.5 text-slate-900 font-bold">
                  <Zap className="w-4 h-4 text-slate-400" />
                  &lt; 15 min
                </div>
                <p className="text-xs text-slate-500 mt-0.5">Response time</p>
              </div>
              <div>
                <div className="flex items-center justify-center gap-1.5 text-slate-900 font-bold">
                  <MessageCircle className="w-4 h-4 text-slate-400" />
                  1-on-1
                </div>
                <p className="text-xs text-slate-500 mt-0.5">Direct via text</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex-1 btn-3d bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-xl inline-flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Chat with us
              </button>
              <Link
                href="/theme/docs"
                className="flex-1 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold py-3 px-6 rounded-xl inline-flex items-center justify-center gap-2 transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                Browse docs
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Quick Answers */}
      <section className="px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-8 tracking-tight">
              Quick Answers
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="tile-3d overflow-hidden">
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === i ? null : i)
                    }
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 group"
                  >
                    <span className="text-base font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300",
                        openIndex === i && "rotate-180"
                      )}
                    />
                  </button>
                  {openIndex === i && (
                    <div className="px-6 pb-4">
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
