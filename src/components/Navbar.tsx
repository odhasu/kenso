"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, User, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/theme", label: "Home" },
  { href: "/theme/pricing", label: "Pricing" },
  { href: "/theme/docs", label: "Docs" },
  { href: "/theme/support", label: "Support" },
  { href: "/theme/news", label: "News" },
];

export function Navbar({
  announcementVisible,
}: {
  announcementVisible: boolean;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-sm"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/theme" className="flex items-center gap-2 shrink-0">
            <Image
              src="/seo/favicon.webp"
              alt="Kenso"
              width={28}
              height={28}
              className="h-7 w-7 rounded-lg"
            />
            <Image
              src="/images/kenso-logo.png"
              alt="Kenso"
              width={80}
              height={20}
              className="h-5 w-auto object-contain invert opacity-80"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link
              href="/theme/login"
              className="hidden md:flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
              <User className="w-4 h-4" />
              Login
            </Link>
            <Link
              href="#purchase"
              className="hidden md:flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Get Started
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-slate-200/60 space-y-2">
              <Link
                href="/theme/login"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-1.5 px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                <User className="w-4 h-4" />
                Login
              </Link>
              <Link
                href="#purchase"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
