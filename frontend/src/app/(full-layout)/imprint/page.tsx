import type { Metadata } from "next";

export const metadata: Metadata = { title: "Imprint" };

export default function ImprintPage() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-[#070809]">
      <div className="site-grid absolute inset-0 opacity-30" />
      <div className="relative mx-auto w-full max-w-5xl px-6 pb-24 pt-18 sm:px-8 sm:pt-24">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.26em] text-[#d7a53d]">
          Legal record / CH
        </p>
        <h1 className="mt-5 border-b border-white/10 pb-10 text-[clamp(3.2rem,7vw,7rem)] font-black uppercase leading-[0.85] tracking-[-0.055em] text-white">
          Imprint<span className="text-[#d7a53d]">.</span>
        </h1>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <section className="border border-white/10 bg-[#0b0d0e] p-7 sm:p-9">
            <h2 className="text-lg font-bold uppercase tracking-[0.02em] text-white">
              Responsible for the content
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/50">
              8 Slice Games / Lazar Minkov
              <br />
              Scheunerweg 38
              <br />
              3063 Ittigen
              <br />
              Switzerland
            </p>
          </section>

          <section className="border border-white/10 bg-[#0b0d0e] p-7 sm:p-9">
            <h2 className="text-lg font-bold uppercase tracking-[0.02em] text-white">Contact</h2>
            <p className="mt-5 text-sm leading-7 text-white/50">
              Email: 8slicegames@gmail.com
              <br />
              Phone: +41 78 234 80 28
            </p>
          </section>

          <section className="border border-white/10 bg-[#0b0d0e] p-7 sm:col-span-2 sm:p-9">
            <h2 className="text-lg font-bold uppercase tracking-[0.02em] text-white">Disclaimer</h2>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/50">
              The contents of this website are created with the greatest possible care.
              However, we do not guarantee the accuracy, completeness, or timeliness of the
              content.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
