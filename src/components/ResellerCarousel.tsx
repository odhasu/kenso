import { Check } from "lucide-react";

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
    <div className="flex-shrink-0 w-48 bg-white rounded-lg p-3 border border-slate-100">
      <div className="flex items-center gap-3">
        <img
          src={image}
          alt={handle}
          className="w-11 h-11 rounded-full border border-slate-100 object-cover"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1">
            <h4 className="text-sm font-semibold text-slate-900 truncate">{handle}</h4>
            <div className="w-3.5 h-3.5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
              <Check className="w-2 h-2 text-white stroke-[3]" />
            </div>
          </div>
          <span className="text-xs text-slate-400">
            {followers} followers
          </span>
        </div>
      </div>
    </div>
  );
}

export function ResellerCarousel() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm font-medium text-slate-400 uppercase tracking-wider mb-8">
          Trusted by 400+ resellers
        </p>

        <div className="scroll-container relative overflow-hidden">
          <div className="scroll-track gap-4">
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
      </div>
    </section>
  );
}
