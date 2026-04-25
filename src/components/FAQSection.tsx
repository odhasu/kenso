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
    question: "What are vendor lists and supplier links?",
    answer:
      "Vendor lists are curated collections of wholesale suppliers and manufacturers that resellers sell to help others find profitable products to flip. Supplier links provide direct access to these wholesale sources.",
  },
  {
    question: "Will my store get banned on Shopify?",
    answer:
      "No. Kenso is fully licensed with Shopify and approved for selling digital products. We have zero store bans to date. The theme is built to keep your store in good standing.",
  },
  {
    question: "Can I see a live store using this theme?",
    answer:
      "Yes! You can view demo stores and examples of successful reseller stores using Kenso in our documentation and community.",
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

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about our Shopify theme
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="tile-3d overflow-hidden">
              <button
                onClick={() => toggle(i)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 group"
              >
                <span className="text-lg font-semibold text-slate-900 pr-8 group-hover:text-blue-600 transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300",
                    openIndex === i && "rotate-180"
                  )}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
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

        <div className="mt-12 text-center p-8 tile-3d">
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            Still have questions?
          </h3>
          <p className="text-slate-600 mb-6 text-base sm:text-[17px]">
            Our team is available 7 days a week and happy to help.
          </p>
          <Link
            href="/theme/support"
            className="btn-3d inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
}
