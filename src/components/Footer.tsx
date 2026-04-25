"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Footer() {
  const [contactOpen, setContactOpen] = useState(true);
  const [legalOpen, setLegalOpen] = useState(true);

  return (
    <section className="py-16 px-4 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-2xl mx-auto">
          {/* Contact & Support column */}
          <div>
            <button
              onClick={() => setContactOpen(!contactOpen)}
              className="flex items-center justify-between w-full text-left cursor-pointer hover:opacity-70 transition-opacity"
            >
              <h3 className="text-lg font-bold text-slate-900">
                Contact &amp; Support
              </h3>
              <ChevronDown
                className={cn(
                  "w-5 h-5 text-slate-400 transition-transform duration-300",
                  contactOpen && "rotate-180"
                )}
              />
            </button>
            {contactOpen && (
              <div className="space-y-2 text-sm text-slate-500 mt-4">
                <p>
                  <Link
                    href="/theme/support"
                    className="text-blue-600 hover:text-blue-500 underline decoration-blue-600/30"
                  >
                    Contact Support
                  </Link>
                </p>
                <p>
                  <span className="font-semibold text-slate-700">Hours:</span>{" "}
                  Mon-Sun, 9 AM - 10 PM PST
                </p>
              </div>
            )}
          </div>

          {/* Legal & Policies column */}
          <div>
            <button
              onClick={() => setLegalOpen(!legalOpen)}
              className="flex items-center justify-between w-full text-left cursor-pointer hover:opacity-70 transition-opacity"
            >
              <h3 className="text-lg font-bold text-slate-900">
                Legal &amp; Policies
              </h3>
              <ChevronDown
                className={cn(
                  "w-5 h-5 text-slate-400 transition-transform duration-300",
                  legalOpen && "rotate-180"
                )}
              />
            </button>
            {legalOpen && (
              <div className="space-y-2 text-sm mt-4">
                <Link
                  href="/theme/privacy"
                  className="block text-blue-600 hover:text-blue-500 hover:underline decoration-blue-600/30"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/theme/terms"
                  className="block text-blue-600 hover:text-blue-500 hover:underline decoration-blue-600/30"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/theme/refund"
                  className="block text-blue-600 hover:text-blue-500 hover:underline decoration-blue-600/30"
                >
                  Refund Policy
                </Link>
                <Link
                  href="/theme/disclosures"
                  className="block text-blue-600 hover:text-blue-500 hover:underline decoration-blue-600/30"
                >
                  Disclosures
                </Link>
                <div className="pt-2 mt-2 border-t border-slate-200">
                  <p className="text-xs text-slate-500 leading-relaxed">
                    All sales are final. No refunds under any circumstances.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-200 pt-8">
          <div className="text-center">
            <p className="text-sm text-slate-500 mb-2">
              &copy; 2026 Shand Enterprises LLC. All rights reserved.
            </p>
            <p className="text-xs text-slate-400">
              Kenso and associated logos are trademarks of Shand Enterprises LLC.
              Unauthorized use is prohibited.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
