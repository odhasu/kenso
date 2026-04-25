import { Check, ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const backgrounds = [
  { src: "/images/backgrounds/dark-waves.webp", name: "Dark Waves" },
  { src: "/images/backgrounds/royal-symmetry.webp", name: "Royal Symmetry" },
  { src: "/images/backgrounds/midnight-crest.webp", name: "Midnight Crest" },
  { src: "/images/backgrounds/futuristic.webp", name: "Futuristic" },
  { src: "/images/backgrounds/grainy-clouds.webp", name: "Grainy Clouds" },
];

const checkItems = [
  "Curated backgrounds for every niche",
  "Drop in product icons with one click",
  "Bold fonts that match your brand",
];

export function ImageGeneratorSection() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 shadow-sm mb-6">
              <ImageIcon className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-900">
                Image Generator
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-4 leading-[1.1]">
              Create Product
              <br className="hidden sm:block" />
              Images Instantly
            </h2>
            <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-lg">
              Pick a background, drop in your product, and style your text.
              Professional product images in three clicks.
            </p>
            <div className="mt-8 space-y-3">
              {checkItems.map((text) => (
                <div className="flex items-center gap-3" key={text}>
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-blue-600" />
                  </div>
                  <span className="text-slate-600 font-medium text-sm sm:text-base">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image preview mockup */}
          <div>
            <div className="rounded-lg border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden bg-white">
              {/* Main image area */}
              <div className="relative aspect-square bg-black overflow-hidden">
                {backgrounds.map((bg, i) => (
                  <div
                    key={i}
                    className="absolute inset-0"
                    style={{ opacity: i === 0 ? 1 : 0 }}
                  >
                    <img
                      src={bg.src}
                      alt={bg.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              {/* Bottom controls area */}
              <div className="p-3 sm:p-4 space-y-3 border-t border-slate-100">
                {/* Step indicators (3 steps) */}
                <div className="flex items-center justify-center gap-2">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="flex items-center gap-2">
                      <div
                        className={cn(
                          "w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold",
                          step === 1
                            ? "bg-blue-600 text-white"
                            : "bg-slate-100 text-slate-400"
                        )}
                      >
                        {step}
                      </div>
                      {step < 3 && (
                        <div className="w-6 sm:w-8 h-0.5 rounded-full bg-slate-200" />
                      )}
                    </div>
                  ))}
                </div>
                {/* Bottom text area */}
                <div className="h-12 sm:h-14 relative overflow-hidden rounded-xl border border-slate-100 bg-slate-50/50">
                  <div className="flex items-center justify-center h-full text-xs text-slate-400">
                    Scroll to start
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
