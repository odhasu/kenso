"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is Kenso and who is it for?",
    answer:
      "Kenso is a premium Shopify theme designed specifically for resellers who sell digital products like vendor lists and supplier links. It's built for entrepreneurs who want a professional, high-converting online store without any coding knowledge.",
  },
  {
    question: "Will my store get banned on Shopify?",
    answer:
      "No. Kenso is fully licensed with Shopify and approved for selling digital products. We have zero store bans to date. The theme is built to keep your store in good standing.",
  },
  {
    question: "What's the difference between Lite and Pro?",
    answer:
      "Lite includes the full theme with 140+ features and 1 store license. Pro includes everything in Lite plus 1-on-1 full store setup, 5 store licenses, and access to the private Kenso community.",
  },
  {
    question: "What happens after I buy?",
    answer:
      "After purchase, you'll receive immediate access to download the theme, step-by-step setup guides, and access to our support team. Pro users also get a scheduled 1-on-1 setup session.",
  },
  {
    question: "How long does it take to set up?",
    answer:
      "Most users have their store live in under 15 minutes. The theme comes with everything pre-configured, and our step-by-step guides walk you through every part of the setup process.",
  },
  {
    question: "Do I need a Shopify store already?",
    answer:
      "You'll need a Shopify account to use Kenso. If you don't have one yet, you can sign up for a free trial on Shopify's website and install the theme right away.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "All sales are final. We do not offer refunds under any circumstances. We encourage you to review our documentation and demo stores before making a purchase.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-base sm:text-lg">
            Everything you need to know before getting started
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-100 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 group"
              >
                <span className="text-[15px] font-medium text-slate-800 group-hover:text-slate-900 transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-300",
                    openIndex === i && "rotate-180"
                  )}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-4">
                  <p className="text-sm text-slate-500 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link
            href="/theme/faq"
            className="inline-flex items-center gap-2 text-lg text-slate-500 hover:text-blue-600 font-medium transition-colors"
          >
            View all FAQs
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="mt-12 text-center tile-3d p-10">
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            Still have questions?
          </h3>
          <p className="text-slate-600 mb-6">
            Our team is available 7 days a week and happy to help.
          </p>
          <Link
            href="/theme/support"
            className="btn-3d inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
}
