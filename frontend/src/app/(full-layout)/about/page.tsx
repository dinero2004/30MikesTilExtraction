import { ArrowUpRight, Blocks, Code2, Gamepad2 } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "8 Slice Games",
  description: "Meet the student team building 30 Mikes 'Til Extraction.",
};

const disciplines = [
  {
    icon: Code2,
    count: "02",
    title: "Programmers",
    text: "Gameplay systems, enemy behavior, and the machinery behind every run.",
  },
  {
    icon: Blocks,
    count: "03",
    title: "Artists",
    text: "World building, characters, weapons, atmosphere, and the game's visual identity.",
  },
  {
    icon: Gamepad2,
    count: "02",
    title: "Web developers",
    text: "The public face of the project, tools, publishing, and community touchpoints.",
  },
] as const;

export default function AboutPage() {
  return (
    <section className="relative overflow-hidden bg-[#070809]">
      <div className="site-grid absolute inset-0 opacity-30" />

      <div className="relative mx-auto w-full max-w-[1500px] px-6 pb-24 pt-18 sm:px-8 sm:pb-32 sm:pt-24">
        <header className="hero-entry grid gap-10 border-b border-white/10 pb-14 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-[#d7a53d]">
              Studio file / 8 Slice Games
            </p>
            <h1 className="mt-6 text-[clamp(3.4rem,8vw,8.4rem)] font-black uppercase leading-[0.82] tracking-[-0.06em] text-white">
              Small team.
              <span className="block text-[#d7a53d]">Big threat.</span>
            </h1>
          </div>
          <p className="max-w-xl text-base leading-7 text-white/52 lg:justify-self-end lg:text-lg lg:leading-8">
            Seven students in Switzerland came together around one idea: build the kind of
            tense, replayable game we would want to discover ourselves.
          </p>
        </header>

        <div className="scroll-reveal grain relative mt-12 aspect-[4/3] overflow-hidden border border-white/10 sm:aspect-[16/8]">
          <Image
            src="/images/about_us_image.png"
            alt="The 8 Slice Games team working together"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-6 sm:p-9">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#d7a53d]">
                Team capture / Switzerland
              </span>
              <h2 className="mt-2 text-2xl font-bold uppercase tracking-[-0.02em] text-white sm:text-4xl">
                8 Slice Games
              </h2>
            </div>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-white/45 sm:block">
              Crew size / 07
            </span>
          </div>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div className="scroll-reveal">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.26em] text-[#d7a53d]">
              Why we started
            </p>
            <h2 className="mt-5 text-[clamp(2.6rem,5vw,5rem)] font-black uppercase leading-[0.92] tracking-[-0.045em] text-white">
              Make the game. Learn everything.
            </h2>
          </div>
          <div className="scroll-reveal space-y-6 text-base leading-8 text-white/55 sm:text-lg">
            <p>
              We formed 8 Slice Games for our bachelor project. The team includes two
              programmers, three artists, and two web developers, each bringing a different
              way of looking at the same problem.
            </p>
            <p>
              30 Mikes &apos;Til Extraction became our chance to combine those disciplines into
              one cohesive experience: a compact horror shooter where atmosphere, systems,
              and player decisions carry equal weight.
            </p>
            <p className="border-l border-[#d7a53d] pl-6 text-white/82">
              We believe ambitious work is the fastest way to grow—and the best reason to
              keep showing up when the solution is not obvious yet.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-3">
          {disciplines.map((discipline) => {
            const Icon = discipline.icon;
            return (
              <article key={discipline.title} className="scroll-reveal bg-[#0b0d0e] p-8 sm:p-10">
                <div className="flex items-start justify-between">
                  <Icon className="size-6 text-[#d7a53d]" />
                  <span className="font-mono text-xs tracking-[0.2em] text-white/25">
                    {discipline.count}
                  </span>
                </div>
                <h3 className="mt-14 text-2xl font-bold uppercase tracking-[-0.02em] text-white">
                  {discipline.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-white/45">{discipline.text}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="scroll-reveal relative min-h-[420px] overflow-hidden border border-white/10">
            <Image
              src="/images/about_us_image2.jpg"
              alt="8 Slice Games team photo"
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="scroll-reveal flex flex-col justify-between border border-[#d7a53d]/35 bg-[#d7a53d] p-8 text-black sm:p-10">
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-black/55">
                Our direction
              </p>
              <h2 className="mt-5 text-4xl font-black uppercase leading-[0.95] tracking-[-0.04em] sm:text-6xl">
                Build with the community, not behind a curtain.
              </h2>
            </div>
            <a
              href="https://store.steampowered.com/app/4329510/30_Mikes_Til_Extraction_Demo/?beta=0"
              target="_blank"
              rel="noreferrer"
              className="group mt-10 inline-flex items-center gap-3 self-start text-xs font-bold uppercase tracking-[0.18em]"
            >
              Play the current build
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
