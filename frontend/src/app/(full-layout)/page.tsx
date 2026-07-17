import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Clock3,
  Crosshair,
  Radio,
  ScanLine,
  ShieldAlert,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const STEAM_URL =
  "https://store.steampowered.com/app/4329510/30_Mikes_Til_Extraction_Demo/?beta=0";

const missionSteps = [
  {
    number: "01",
    icon: Radio,
    title: "Enter the silence",
    text: "Cross into a ruined border town where every dark corridor hides supplies—or something hunting for you.",
  },
  {
    number: "02",
    icon: Crosshair,
    title: "Loot under pressure",
    text: "Search fast, choose what matters, and build a route before thirty minutes disappear from the clock.",
  },
  {
    number: "03",
    icon: ShieldAlert,
    title: "Extract or lose it",
    text: "Fight, hide, or leave early. The only loot that counts is the loot you carry across the extraction line.",
  },
] as const;

const enemies = [
  {
    code: "SK-39",
    name: "Sturmknecht",
    role: "Patrol infantry",
    image: "/images/Sturmknecht_39.png",
    threat: "Moderate",
  },
  {
    code: "SR-42",
    name: "Stahlritter",
    role: "Heavy suppressor",
    image: "/images/SR-42_thin.png",
    threat: "Severe",
  },
  {
    code: "EF-45",
    name: "Eisenfaust",
    role: "Armored hunter",
    image: "/images/EF-45_thin.png",
    threat: "Critical",
  },
] as const;

const weapons = [
  {
    index: "A-01",
    name: "Service pistol",
    description: "Light, quick, and reliable when the hallway gets too narrow.",
    image: "/images/30_Mikes_Pistol.png",
  },
  {
    index: "A-04",
    name: "Automatic rifle",
    description: "Built for controlled bursts when stealth is no longer an option.",
    image: "/images/30_Mikes_auto_rifle.png",
  },
  {
    index: "A-07",
    name: "Heavy rifle",
    description: "Slower handling. Decisive stopping power against armored machines.",
    image: "/images/30_Mikes_heavy_rifle.png",
  },
] as const;

export default function Home() {
  return (
    <>
      <section className="grain relative flex min-h-[calc(100svh-76px)] items-end overflow-hidden border-b border-white/10 bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-Image.png"
          className="absolute inset-0 size-full object-cover object-center"
        >
          <source src="/videos/30_Mikes_Trailer.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,4,4,0.96)_0%,rgba(3,4,4,0.7)_42%,rgba(3,4,4,0.16)_78%),linear-gradient(0deg,#050606_0%,transparent_48%,rgba(0,0,0,0.48)_100%)]" />
        <div className="site-grid absolute inset-0 opacity-30" />

        <div className="relative z-10 mx-auto grid w-full max-w-[1500px] gap-14 px-6 pb-12 pt-20 sm:px-8 md:pb-16 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-end lg:pb-20">
          <div className="max-w-4xl">
            <div className="hero-entry mb-6 inline-flex items-center gap-3 border border-white/12 bg-black/35 px-3 py-2 backdrop-blur-sm">
              <span className="signal-dot size-2 rounded-full bg-[#e6493f]" />
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-white/70">
                Demo available now · Steam
              </span>
            </div>

            <Image
              src="/images/primary-logo.png"
              alt="30 Mikes 'Til Extraction"
              width={1134}
              height={115}
              priority
              className="hero-entry hero-entry-delay-1 h-auto w-full max-w-[900px]"
            />

            <h1 className="hero-entry hero-entry-delay-2 mt-8 max-w-3xl text-[clamp(2.6rem,6vw,6.6rem)] font-black uppercase leading-[0.86] tracking-[-0.055em] text-white">
              Thirty minutes.
              <span className="block text-[#d7a53d]">One way out.</span>
            </h1>

            <p className="hero-entry hero-entry-delay-2 mt-7 max-w-2xl text-base leading-7 text-white/62 sm:text-lg">
              A single-player extraction horror game set inside a dead border town.
              Scavenge what you can, survive what woke up, and decide when enough is enough.
            </p>

            <div className="hero-entry hero-entry-delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={STEAM_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex min-h-13 items-center justify-center gap-3 bg-[#d7a53d] px-6 text-sm font-bold uppercase tracking-[0.16em] text-black transition hover:bg-[#f0c25d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d7a53d]"
              >
                Play the demo
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <Link
                href="#mission"
                className="group inline-flex min-h-13 items-center justify-center gap-3 border border-white/18 bg-black/25 px-6 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:border-white/40 hover:bg-white/[0.06] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                View mission brief
                <ArrowDown className="size-4 transition-transform group-hover:translate-y-1" />
              </Link>
            </div>
          </div>

          <aside className="hud-corners hero-entry hero-entry-delay-3 hidden bg-black/45 p-6 backdrop-blur-sm lg:block">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#d7a53d]">
              Field status
            </p>
            <div className="mt-5 space-y-4">
              {[
                ["Location", "CH / DE border"],
                ["Window", "30:00 minutes"],
                ["Hostiles", "Autonomous"],
                ["Survival", "Uncertain"],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between gap-6 border-b border-white/10 pb-3">
                  <span className="text-xs text-white/38">{label}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/80">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section id="mission" className="relative overflow-hidden bg-[#080a0b] py-24 sm:py-32">
        <div className="site-grid absolute inset-0 opacity-40" />
        <div className="relative mx-auto w-full max-w-[1500px] px-6 sm:px-8">
          <div className="scroll-reveal grid gap-10 border-b border-white/10 pb-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-[#d7a53d]">
                Mission brief / 001
              </p>
              <h2 className="mt-5 max-w-3xl text-[clamp(2.5rem,5vw,5.4rem)] font-black uppercase leading-[0.92] tracking-[-0.045em] text-white">
                The clock is your real enemy.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-white/55 lg:justify-self-end lg:text-lg lg:leading-8">
              You enter with almost nothing. Somewhere inside the compound are food,
              ammunition, tools, and answers. Every extra room could improve your score—or
              erase the run completely.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-3">
            {missionSteps.map((step) => {
              const Icon = step.icon;
              return (
                <article
                  key={step.number}
                  className="scroll-reveal group relative min-h-[330px] bg-[#0b0d0e] p-7 transition-colors hover:bg-[#101315] sm:p-9"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-xs tracking-[0.2em] text-white/28">
                      {step.number}
                    </span>
                    <Icon className="size-6 text-[#d7a53d] transition-transform duration-500 group-hover:rotate-[-6deg] group-hover:scale-110" />
                  </div>
                  <h3 className="mt-20 max-w-xs text-2xl font-bold uppercase tracking-[-0.02em] text-white">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-sm text-sm leading-6 text-white/48">{step.text}</p>
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#d7a53d] transition-all duration-500 group-hover:w-full" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="grain scan-line relative min-h-[760px] overflow-hidden border-y border-white/10">
        <Image
          src="/images/section2.png"
          alt="A scavenger faces a towering armored machine"
          fill
          sizes="100vw"
          className="object-cover object-[64%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050606_0%,rgba(5,6,6,0.88)_35%,rgba(5,6,6,0.18)_74%),linear-gradient(0deg,rgba(5,6,6,0.78),transparent_45%)]" />

        <div className="relative z-10 mx-auto flex min-h-[760px] w-full max-w-[1500px] items-center px-6 py-24 sm:px-8">
          <div className="scroll-reveal max-w-xl border-l border-[#d7a53d] pl-7 sm:pl-10">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-[#d7a53d]">
              Contact report / Unknown unit
            </p>
            <h2 className="mt-5 text-[clamp(2.7rem,5vw,5.6rem)] font-black uppercase leading-[0.9] tracking-[-0.045em] text-white">
              You were never alone.
            </h2>
            <p className="mt-7 text-base leading-7 text-white/62 sm:text-lg sm:leading-8">
              The town looks abandoned because the people are gone. The machines are still
              here—and they are learning how you move.
            </p>
            <Link
              href="#threats"
              className="group mt-9 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white"
            >
              Open threat database
              <ArrowRight className="size-4 text-[#d7a53d] transition-transform group-hover:translate-x-1.5" />
            </Link>
          </div>
        </div>
      </section>

      <section id="threats" className="relative overflow-hidden bg-[#070809] py-24 sm:py-32">
        <div className="micro-grid absolute inset-0 opacity-25" />
        <div className="relative mx-auto w-full max-w-[1500px] px-6 sm:px-8">
          <div className="scroll-reveal flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-[#e6493f]">
                Threat database / 03 known classes
              </p>
              <h2 className="mt-5 text-[clamp(2.6rem,5vw,5.2rem)] font-black uppercase leading-[0.92] tracking-[-0.045em] text-white">
                Know what hunts you.
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-6 text-white/48 sm:text-base sm:leading-7">
              Each machine patrols differently. Read the silhouette, listen for the motor,
              and decide whether the loot is worth the ammunition.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {enemies.map((enemy) => (
              <article
                key={enemy.code}
                className="threat-card scroll-reveal group relative overflow-hidden border border-white/10 bg-[linear-gradient(180deg,#141719_0%,#090a0b_100%)]"
              >
                <div className="micro-grid absolute inset-0 opacity-35" />
                <div className="relative flex h-[520px] items-end justify-center overflow-hidden pt-12">
                  <div className="absolute left-6 top-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                    <ScanLine className="size-4 text-[#e6493f]" />
                    {enemy.code}
                  </div>
                  <Image
                    src={enemy.image}
                    alt={`${enemy.name} enemy unit`}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-contain object-bottom px-6 pt-16"
                  />
                </div>
                <div className="relative border-t border-white/10 bg-black/55 p-6 backdrop-blur-sm">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#d7a53d]">
                        {enemy.role}
                      </p>
                      <h3 className="mt-2 text-2xl font-bold uppercase tracking-[-0.02em] text-white">
                        {enemy.name}
                      </h3>
                    </div>
                    <div className="text-right">
                      <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-white/32">
                        Threat
                      </span>
                      <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.16em] text-[#e6493f]">
                        {enemy.threat}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 text-right">
            <Link
              href="/model"
              className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-white/65 transition hover:text-white"
            >
              Inspect 3D prototype
              <ArrowRight className="size-4 text-[#d7a53d] transition-transform group-hover:translate-x-1.5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/10 bg-[#0a0c0d] py-24 sm:py-32">
        <Image
          src="/images/section5.png"
          alt="Dark interior of the extraction compound"
          fill
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#080a0b_0%,rgba(8,10,11,0.74)_45%,rgba(8,10,11,0.5)_100%)]" />

        <div className="relative mx-auto w-full max-w-[1500px] px-6 sm:px-8">
          <div className="scroll-reveal grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-[#d7a53d]">
                Loadout / Choose carefully
              </p>
              <h2 className="mt-5 text-[clamp(2.6rem,5vw,5.2rem)] font-black uppercase leading-[0.92] tracking-[-0.045em] text-white">
                Every bullet has a cost.
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-6 text-white/52 lg:justify-self-end sm:text-base sm:leading-7">
              Weapons create options, not safety. Balance weight, noise, and stopping power
              against the supplies you still need to carry home.
            </p>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {weapons.map((weapon) => (
              <article
                key={weapon.index}
                className="weapon-card scroll-reveal panel-cut border border-white/12 bg-black/55 p-5 backdrop-blur-sm sm:p-6"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-white/[0.025]">
                  <Image
                    src={weapon.image}
                    alt={weapon.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-contain p-4"
                  />
                </div>
                <div className="flex items-start gap-4 pt-6">
                  <span className="font-mono text-[10px] tracking-[0.18em] text-[#d7a53d]">
                    {weapon.index}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold uppercase tracking-[0.02em] text-white">
                      {weapon.name}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-white/45">{weapon.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grain relative overflow-hidden bg-black py-28 sm:py-36">
        <Image
          src="/images/hero-Image.png"
          alt="An armored machine towers over a scavenger"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_35%,transparent_0%,rgba(0,0,0,0.52)_40%,#050606_82%)]" />

        <div className="relative mx-auto w-full max-w-[1500px] px-6 sm:px-8">
          <div className="scroll-reveal max-w-3xl">
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-[#d7a53d]">
              <Clock3 className="size-4" />
              Extraction window open
            </div>
            <h2 className="mt-6 text-[clamp(3rem,7vw,7rem)] font-black uppercase leading-[0.86] tracking-[-0.055em] text-white">
              How much can you carry in thirty minutes?
            </h2>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={STEAM_URL}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex min-h-13 items-center justify-center gap-3 bg-[#d7a53d] px-6 text-sm font-bold uppercase tracking-[0.16em] text-black transition hover:bg-[#f0c25d]"
              >
                Start the demo
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <Link
                href="/news"
                className="group inline-flex min-h-13 items-center justify-center gap-3 border border-white/18 bg-black/35 px-6 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:border-white/40"
              >
                Read development news
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
