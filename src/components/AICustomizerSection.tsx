import { Send } from "lucide-react";

const mockMessages = [
  { role: "user" as const, text: "Change the hero background to dark blue and make the heading white" },
  { role: "ai" as const, text: "Done. I've updated the hero section with a dark blue gradient background and set the heading color to white. Your store is live with the changes." },
  { role: "user" as const, text: "Add a countdown timer above the buy button" },
];

export function AICustomizerSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left: Text content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4 leading-tight">
              Customize Your Store
              <br className="hidden sm:block" />
              in Seconds
            </h2>
            <p className="text-slate-500 text-base sm:text-lg leading-relaxed max-w-md">
              Describe any change you want and our AI applies it to your live
              store. No code, no developer, no waiting.
            </p>
          </div>

          {/* Right: Chat mockup */}
          <div>
            <div className="rounded-xl border border-slate-200 shadow-md overflow-hidden bg-white flex flex-col h-[340px] sm:h-[360px]">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border-b border-slate-100 shrink-0">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
                </div>
                <span className="text-xs font-medium text-slate-400 ml-2">
                  AI Customizer
                </span>
              </div>
              {/* Chat messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {mockMessages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] px-3.5 py-2.5 rounded-xl text-sm leading-relaxed ${
                        msg.role === "user"
                          ? "bg-blue-600 text-white rounded-br-md"
                          : "bg-slate-100 text-slate-700 rounded-bl-md"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
              {/* Input area */}
              <div className="px-4 pb-3 pt-2 border-t border-slate-100 shrink-0">
                <div className="flex items-center gap-3 px-3.5 py-2 border border-slate-200 rounded-lg bg-slate-50/50">
                  <span className="text-sm text-slate-400 flex-1 select-none">
                    Describe what you want to change...
                  </span>
                  <div className="w-7 h-7 rounded-md bg-blue-600 flex items-center justify-center shrink-0">
                    <Send className="w-3 h-3 text-white" />
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
