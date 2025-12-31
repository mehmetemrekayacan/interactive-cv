import { useState } from "react";
import { CV } from "./components/CV";
import { ErasmusCV } from "./components/ErasmusCV";

export default function App() {
  const [view, setView] = useState<"cv" | "erasmus">("cv");

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="bg-white/90 backdrop-blur border-b border-slate-200 sticky top-0 z-10 print:hidden">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-3">
          <h1 className="text-lg font-semibold text-slate-900">CV Seçimi</h1>
          <div className="flex gap-2">
            <button
              onClick={() => setView("cv")}
              className={`px-3 py-1.5 rounded-md text-sm font-medium border transition-colors ${
                view === "cv"
                  ? "bg-slate-900 text-white border-slate-900"
                  : "bg-white text-slate-800 border-slate-200 hover:bg-slate-50"
              }`}
            >
              Normal CV
            </button>
            <button
              onClick={() => setView("erasmus")}
              className={`px-3 py-1.5 rounded-md text-sm font-medium border transition-colors ${
                view === "erasmus"
                  ? "bg-slate-900 text-white border-slate-900"
                  : "bg-white text-slate-800 border-slate-200 hover:bg-slate-50"
              }`}
            >
              Erasmus CV
            </button>
          </div>
        </div>
      </div>

      <main className="pb-8">
        {view === "cv" ? <CV /> : <ErasmusCV />}
      </main>
    </div>
  );
}