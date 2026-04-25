import { Layers } from "lucide-react";

const features = [
  {
    title: "Licensed with Shopify",
    description:
      "Zero store bans to date. Fully approved for selling digital products. Built to keep your store in good standing so you never get banned.",
  },
  {
    title: "Sell While You Sleep",
    description:
      "AI chatbot answers customer questions 24/7. Handles objections and closes deals automatically.",
  },
  {
    title: "Convert More Visitors",
    description:
      "Live visitor counts, faked purchase popups, countdown timers, and sale badges that create real urgency and turn browsers into buyers.",
  },
  {
    title: "Boost Your AOV",
    description:
      "Bundle builder with automatic discounts. Customers spend more when they can build deals.",
  },
  {
    title: "Build Trust Fast",
    description:
      "Photo reviews, live viewer counts, recent purchase notifications, and trust badges.",
  },
  {
    title: "Dead Simple Setup",
    description:
      "Customize everything through Shopify's editor -- colors, sections, products. Step-by-step guides for every part of your store.",
  },
];

export function FeaturesSection() {
  return (
    <section className="min-h-screen py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden flex items-center">
      {/* Background dot pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.4] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative w-full">
        {/* Section header */}
        <div className="text-center mb-16 sm:mb-24">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 shadow-sm mb-6">
            <Layers className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-900">
              Built for Your Success
            </span>
          </div>
          {/* Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            Everything A Reseller
            <br />
            Needs to Win
          </h2>
          <p className="text-slate-600 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto font-medium leading-relaxed">
            Features your store needs to outsell the competition
          </p>
        </div>

        {/* 6 feature cards in 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="group relative h-full">
              <div className="relative h-full tile-3d p-8 overflow-hidden">
                {/* Hover glow effect */}
                <div className="absolute -right-20 -top-20 w-60 h-60 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-blue-600" />
                <div className="relative z-10 flex flex-col h-full">
                  {/* Gradient bar */}
                  <div className="w-12 h-1.5 rounded-full mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-80" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
