import { Send } from "lucide-react";

export function AICustomizerSection() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-4 leading-[1.1]">
              Customize Your
              <br className="hidden sm:block" />
              Store in Seconds
            </h2>
            <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-lg">
              Describe any change you want and our AI applies it to your live
              store. No code, no developer, no waiting.
            </p>
          </div>

          {/* Right: Chat mockup */}
          <div>
            <div className="rounded-lg border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden bg-white flex flex-col h-[360px] sm:h-[380px]">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-50/80 border-b border-slate-200 shrink-0">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                </div>
                <span className="text-xs font-medium text-slate-400 ml-2">
                  AI Customizer
                </span>
              </div>
              {/* Chat area (empty) */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3" />
              {/* Input area */}
              <div className="px-4 sm:px-5 pb-3 sm:pb-4 pt-2 border-t border-slate-100 shrink-0">
                <div className="flex items-center gap-3 px-3.5 py-2 border border-slate-200 rounded-xl bg-slate-50/50">
                  <span className="text-sm text-slate-400 flex-1 select-none">
                    Describe what you want to change...
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center shrink-0">
                    <Send className="w-3.5 h-3.5 text-slate-400" />
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
