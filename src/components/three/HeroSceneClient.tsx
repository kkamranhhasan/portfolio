"use client";

import dynamic from "next/dynamic";

const HeroSceneLazy = dynamic(
  () => import("./HeroScene").then((m) => m.HeroScene),
  {
    ssr: false,
    loading: () => (
      <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-950">
        <div className="glass-panel flex flex-col items-center gap-4 rounded-2xl px-10 py-6">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-cyan-400 border-t-transparent" />
          <p className="text-sm tracking-wide text-slate-300">
            Initializing 3D space…
          </p>
        </div>
      </div>
    )
  }
);

export function HeroSceneClient() {
  return <HeroSceneLazy />;
}

