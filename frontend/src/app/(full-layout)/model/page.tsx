import { Move3d, RotateCw, ScanLine } from "lucide-react";
import type { Metadata } from "next";
import ObjViewer from "@/components/three/ObjViewer";

export const metadata: Metadata = {
  title: "Enemy Archive",
  description: "Inspect enemy prototypes from 30 Mikes 'Til Extraction.",
};

export default function ModelPage() {
  return (
    <section className="relative overflow-hidden bg-[#070809]">
      <div className="micro-grid absolute inset-0 opacity-30" />
      <div className="relative mx-auto w-full max-w-[1500px] px-6 pb-24 pt-18 sm:px-8 sm:pb-32 sm:pt-24">
        <header className="hero-entry grid gap-10 border-b border-white/10 pb-14 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.26em] text-[#e6493f]">
              <ScanLine className="size-4" />
              Restricted enemy archive
            </div>
            <h1 className="mt-6 text-[clamp(3.2rem,7vw,7.6rem)] font-black uppercase leading-[0.82] tracking-[-0.06em] text-white">
              Prototype
              <span className="block text-[#d7a53d]">SR-42.</span>
            </h1>
          </div>
          <p className="max-w-xl text-base leading-7 text-white/52 lg:justify-self-end lg:text-lg lg:leading-8">
            Rotate the recovered model to inspect the armor profile, silhouette, and
            construction of the Stahlritter heavy unit.
          </p>
        </header>

        <div className="scroll-reveal mt-12 grid overflow-hidden border border-white/10 bg-[#0a0c0d] lg:grid-cols-[1.25fr_0.75fr]">
          <div className="scan-line relative min-h-[560px] border-b border-white/10 lg:min-h-[720px] lg:border-b-0 lg:border-r">
            <div className="absolute left-5 top-5 z-10 flex items-center gap-2 border border-white/10 bg-black/45 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.18em] text-white/45 backdrop-blur-sm">
              <span className="signal-dot size-1.5 rounded-full bg-[#e6493f]" />
              Live object scan
            </div>
            <ObjViewer />
          </div>

          <aside className="site-grid relative flex flex-col justify-between p-7 sm:p-10 lg:p-12">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#d7a53d]">
                Unit identification
              </p>
              <h2 className="mt-5 text-4xl font-black uppercase tracking-[-0.04em] text-white sm:text-6xl">
                Stahlritter-42
              </h2>
              <p className="mt-6 text-sm leading-7 text-white/50 sm:text-base">
                A heavy suppression unit built to control long corridors and punish exposed
                movement. Its frontal armor makes direct engagements expensive.
              </p>

              <dl className="mt-10 space-y-4">
                {[
                  ["Class", "Heavy suppressor"],
                  ["Mobility", "Medium"],
                  ["Armor", "Reinforced"],
                  ["Threat", "Severe"],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between gap-6 border-b border-white/10 pb-4">
                    <dt className="text-xs text-white/35">{label}</dt>
                    <dd className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/80">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10">
              <div className="bg-black/40 p-4">
                <RotateCw className="size-4 text-[#d7a53d]" />
                <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.16em] text-white/45">
                  Drag to rotate
                </p>
              </div>
              <div className="bg-black/40 p-4">
                <Move3d className="size-4 text-[#d7a53d]" />
                <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.16em] text-white/45">
                  Scroll to zoom
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
