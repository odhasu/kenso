import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CircleCheckBig } from "lucide-react";

const featurePills = ["140+ Features", "No coding", "One time Fee"];

const stats = [
  { value: "$5M+", label: "Combined Sales" },
  { value: "150K+", label: "Customers Served" },
  { value: "4.9★", label: "Average Rating" },
];

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 lg:pt-48 lg:pb-40 overflow-hidden">
      {/* Background gradient overlays */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-[15%] h-full bg-gradient-to-r from-blue-500/20 via-blue-400/10 to-transparent" />
        <div className="absolute top-0 right-0 w-[15%] h-full bg-gradient-to-l from-indigo-500/20 via-indigo-400/10 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-[20%] bg-gradient-to-b from-white to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 max-w-5xl mx-auto hero-stagger">
          {/* 1. Sales badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-blue-50 border border-blue-100 shadow-sm">
              <span className="text-sm text-slate-500 font-medium">
                Theme Store Sales:
              </span>
              <span className="text-sm font-bold text-emerald-600 tabular-nums">
                Loading...
              </span>
            </div>
          </div>

          {/* 2. H1 heading */}
          <h1
            className="font-bold text-slate-900 leading-[1.1] tracking-tight"
            style={{
              fontFamily: "'Clash Grotesk', sans-serif",
              fontSize: "clamp(2.25rem, 8vw, 4.5rem)",
            }}
          >
            The <span className="text-blue-600">#1</span> Shopify Theme For
            Digital Products
          </h1>

          {/* 3. Paragraph */}
          <p className="text-lg sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-snug sm:leading-normal font-medium">
            Join 1,000+ resellers building profitable businesses selling vendor
            links. Get your professional store live in under 15 minutes.
          </p>

          {/* 4. CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Link
              href="#purchase"
              className="group btn-3d inline-flex items-center justify-center gap-3 text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-lg"
            >
              Use Kenso
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/30 group-hover:bg-white/30 transition">
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              href="https://discord.com/invite/hPCDXWpP4A"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors shadow-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Kenso Community
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* 5. Feature pills */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 pt-6 sm:pt-10 text-sm text-slate-500">
            {featurePills.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 text-blue-600">
                  <CircleCheckBig className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* 6. Social proof section */}
          <div className="pt-12 sm:pt-16">
            <h2
              className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2"
              style={{ fontFamily: "'Clash Grotesk', sans-serif" }}
            >
              Used by the Biggest Names in Reselling
            </h2>
            <p className="text-slate-500 text-base sm:text-lg">
              Join successful resellers making 6-figures with our theme
            </p>

            {/* Store screenshots */}
            <div className="grid grid-cols-3 gap-1 sm:gap-5 md:gap-8 px-4 sm:px-4 max-w-[500px] sm:max-w-2xl md:max-w-3xl mx-auto mt-10">
              <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200/60">
                <Image
                  src="/images/stores/store-1.png"
                  alt="Store example 1"
                  width={400}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="mb-8 sm:mb-10 rounded-xl overflow-hidden shadow-lg border border-slate-200/60">
                <Image
                  src="/images/stores/store-2.png"
                  alt="Store example 2"
                  width={400}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200/60">
                <Image
                  src="/images/stores/store-3.png"
                  alt="Store example 3"
                  width={400}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Stats row */}
            <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
