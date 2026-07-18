import { ArrowRight, ArrowUpRight, Radio, ScanLine } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "News",
  description: "Field transmissions and development updates from 8 Slice Games.",
};

const STEAM_URL =
  "https://store.steampowered.com/app/4329510/30_Mikes_Til_Extraction_Demo/?beta=0";

const dispatches = [
  {
    id: "TX-003",
    title: "EF-45 enters the compound",
    label: "Enemy design",
    description:
      "The heaviest known unit is built to close distance, absorb punishment, and force scavengers out of safe positions.",
    image: "/images/news_images/EF-45_thin.webp",
    imageClassName: "object-contain object-bottom p-7 pb-0",
  },
  {
    id: "TX-002",
    title: "Stahlritter patrol logic",
    label: "Systems update",
    description:
      "New behavior work makes the SR-42 less predictable, more territorial, and much harder to ignore.",
    image: "/images/news_images/SR-42_thin.webp",
    imageClassName: "object-contain object-bottom p-7 pb-0",
  },
  {
    id: "TX-001",
    title: "Building the Eisenfaust silhouette",
    label: "Art breakdown",
    description:
      "A look at the shapes, materials, and glowing optics that make a threat readable before it reaches the light.",
    image: "/images/news_images/Eisenfaust_45.webp",
    imageClassName: "object-contain object-bottom p-7 pb-0",
  },
] as const;

export default function NewsPage() {
  return (
    <section className="relative overflow-hidden bg-[#070809]">
      <div className="site-grid absolute inset-0 opacity-30" />

      <div className="relative mx-auto w-full max-w-[1500px] px-6 pb-24 pt-18 sm:px-8 sm:pb-32 sm:pt-24">
        <header className="hero-entry grid gap-10 border-b border-white/10 pb-14 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.26em] text-[#d7a53d]">
              <Radio className="size-4" />
              Field transmissions
            </div>
            <h1 className="mt-6 text-[clamp(3.4rem,8vw,8.8rem)] font-black uppercase leading-[0.8] tracking-[-0.06em] text-white">
              News<span className="text-[#d7a53d]">.</span>
            </h1>
          </div>
          <p className="max-w-xl text-base leading-7 text-white/52 lg:justify-self-end lg:text-lg lg:leading-8">
            Development notes, visual breakdowns, and intercepted reports from inside
            the production of 30 Mikes &apos;Til Extraction.
          </p>
        </header>

        <article className="scroll-reveal mt-12 grid overflow-hidden border border-white/10 bg-[#0c0e0f] lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grain scan-line relative min-h-[390px] overflow-hidden sm:min-h-[520px]">
            <Image
              src="/images/news_images/enemy-robot-image.webp"
              alt="Hostile autonomous robot in the extraction compound"
              fill
              priority
              sizes="(min-width: 1024px) 60vw, 100vw"
              unoptimized
              className="object-cover object-center transition-transform duration-1000 hover:scale-[1.025]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(5,6,6,0.7),transparent_60%)]" />
            <div className="absolute left-6 top-6 flex items-center gap-2 border border-white/15 bg-black/55 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.2em] text-white/65 backdrop-blur-sm">
              <span className="signal-dot size-1.5 rounded-full bg-[#e6493f]" />
              Visual confirmed
            </div>
          </div>

          <div className="relative flex flex-col justify-between p-7 sm:p-10 lg:p-12">
            <div className="micro-grid absolute inset-0 opacity-20" />
            <div className="relative">
              <div className="flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
                <span>TX-004 / Latest</span>
                <ScanLine className="size-4 text-[#e6493f]" />
              </div>
              <p className="mt-16 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-[#d7a53d]">
                Development update
              </p>
              <h2 className="mt-5 text-[clamp(2.2rem,4vw,4.5rem)] font-black uppercase leading-[0.9] tracking-[-0.045em] text-white">
                The machines need to feel dangerous before they move.
              </h2>
              <p className="mt-6 text-sm leading-7 text-white/52 sm:text-base">
                Our latest enemy pass focuses on silhouette, sound, and glowing optics.
                Players should understand the threat in a fraction of a second—even when
                all they can see is a shape at the end of a corridor.
              </p>
            </div>

            <Link
              href="/model"
              className="group relative mt-10 inline-flex items-center gap-3 self-start text-xs font-bold uppercase tracking-[0.18em] text-white"
            >
              Inspect the prototype
              <ArrowRight className="size-4 text-[#d7a53d] transition-transform group-hover:translate-x-1.5" />
            </Link>
          </div>
        </article>

        <div className="mt-18 flex flex-col gap-5 border-b border-white/10 pb-7 sm:flex-row sm:items-end sm:justify-between">
          <div className="scroll-reveal">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#d7a53d]">
              Transmission archive
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-[-0.035em] text-white sm:text-5xl">
              Recent reports
            </h2>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
            03 records recovered
          </span>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {dispatches.map((dispatch) => (
            <article
              key={dispatch.id}
              className="scroll-reveal group overflow-hidden border border-white/10 bg-[#0b0d0e] transition-colors hover:border-[#d7a53d]/42"
            >
              <div className="micro-grid relative h-[390px] overflow-hidden bg-[linear-gradient(180deg,#171a1c,#0a0b0c)]">
                <div className="absolute left-5 top-5 z-10 font-mono text-[9px] uppercase tracking-[0.2em] text-white/35">
                  {dispatch.id}
                </div>
                <Image
                  src={dispatch.image}
                  alt={dispatch.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  unoptimized
                  className={`${dispatch.imageClassName} transition-transform duration-700 group-hover:scale-[1.045]`}
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0b0d0e] to-transparent" />
              </div>
              <div className="p-6 sm:p-7">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#d7a53d]">
                  {dispatch.label}
                </p>
                <h3 className="mt-3 text-2xl font-bold uppercase leading-tight tracking-[-0.025em] text-white">
                  {dispatch.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-white/45">{dispatch.description}</p>
              </div>
            </article>
          ))}
        </div>

        <aside className="scroll-reveal panel-cut relative mt-20 overflow-hidden border border-[#d7a53d]/35 bg-[#d7a53d] p-7 text-black sm:p-10">
          <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.22)_55%,transparent_100%)]" />
          <div className="relative flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-black/55">
                Playable build / Steam
              </p>
              <h2 className="mt-3 text-3xl font-black uppercase tracking-[-0.035em] sm:text-5xl">
                Stop reading. Start extracting.
              </h2>
            </div>
            <a
              href={STEAM_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex min-h-13 shrink-0 items-center justify-center gap-3 bg-black px-6 text-xs font-bold uppercase tracking-[0.17em] text-white transition hover:bg-[#171918]"
            >
              Play the demo
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
