import { ArrowRight, Check } from "lucide-react";

interface Reseller {
  handle: string;
  followers: string;
  image: string;
}

const resellers: Reseller[] = [
  { handle: "lucasresellzz", followers: "491K", image: "/images/resellers/lucasresellzz.png" },
  { handle: "ak.movez", followers: "351K", image: "/images/resellers/ak-movez.png" },
  { handle: "flippaplugz", followers: "333K", image: "/images/resellers/flippaplugz.png" },
  { handle: "pia.resell", followers: "170K", image: "/images/resellers/pia-resell.png" },
  { handle: "cashoutmike", followers: "168K", image: "/images/resellers/cashoutmike.png" },
  { handle: "toolduque", followers: "161K", image: "/images/resellers/toolduque.png" },
  { handle: "hmresells", followers: "120K", image: "/images/resellers/hmresells.png" },
  { handle: "nonosellzz", followers: "115K", image: "/images/resellers/nonosellzz.png" },
  { handle: "bryzy.resell", followers: "100K", image: "/images/resellers/bryzy-resell.png" },
  { handle: "izayesflips", followers: "89K", image: "/images/resellers/izayesflips.png" },
  { handle: "daeresells1", followers: "87K", image: "/images/resellers/daeresells1.png" },
];

function ResellerCard({ handle, followers, image }: Reseller) {
  return (
    <div className="flex-shrink-0 w-52 bg-white rounded-xl p-3 border border-slate-200 shadow-sm">
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt={handle}
          className="w-14 h-14 rounded-full border-2 border-slate-100 object-cover shadow-sm"
        />
        <div className="flex-1">
          <div className="flex items-center gap-1">
            <h4 className="text-sm font-bold text-slate-900">{handle}</h4>
            <div className="w-3.5 h-3.5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
              <Check className="w-2 h-2 text-white stroke-[3]" />
            </div>
          </div>
          <span className="text-xs text-slate-500 font-medium">
            {followers} followers
          </span>
        </div>
      </div>
    </div>
  );
}

export function ResellerCarousel() {
  return (
    <section className="pt-20 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            Used by the Biggest Names in Reselling
          </h2>
        </div>

        <div className="scroll-container relative overflow-hidden">
          <div className="scroll-track gap-4">
            {/* 3 copies of the same reseller list for seamless infinite scroll */}
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex gap-4">
                {resellers.map((reseller) => (
                  <ResellerCard
                    key={`${i}-${reseller.handle}`}
                    {...reseller}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-slate-500 font-medium text-lg mt-8">
          and 400+ other resellers...
        </p>

        <div className="flex justify-center mt-8">
          <a
            href="#purchase"
            className="group inline-flex items-center justify-center gap-3 shadow-xl shadow-blue-600/20 transition duration-200 ease-out text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-lg btn-3d"
          >
            Get Started
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/30 group-hover:bg-white/30 transition">
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
