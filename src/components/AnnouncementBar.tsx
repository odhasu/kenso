"use client";

import { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import Link from "next/link";

export function AnnouncementBar({
  onVisibilityChange,
}: {
  onVisibilityChange?: (visible: boolean) => void;
}) {
  const [visible, setVisible] = useState(true);

  const dismiss = () => {
    setVisible(false);
    onVisibilityChange?.(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed left-0 right-0 z-[60] bg-white border-b border-slate-200/60 transition-all duration-300 ease-in-out top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 py-2.5">
          <Link
            href="/theme/news/kenso-v3-theme-launch"
            className="flex-1 flex items-center justify-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-slate-900 text-white text-[10px] font-bold shrink-0">
              V3
            </span>
            <span className="truncate">
              <span className="hidden sm:inline">
                Kenso V3 is here — completely rebuilt from the ground up.{" "}
              </span>
              <span className="sm:hidden">Kenso V3 just launched. </span>
              <span className="font-semibold text-slate-900 inline-flex items-center gap-1">
                See what&apos;s new
                <ArrowRight className="w-3 h-3" />
              </span>
            </span>
          </Link>
          <button
            onClick={dismiss}
            className="shrink-0 p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Dismiss announcement"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
