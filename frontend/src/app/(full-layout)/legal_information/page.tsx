import type { Metadata } from "next";

export const metadata: Metadata = { title: "Legal Information" };

const sections = [
  {
    title: "8 Slice Games",
    body: (
      <>
        Studio: 8 Slice Games
        <br />
        Project: 30 Mikes &apos;Til Extraction
        <br />
        Scheunerweg 38, 3063 Ittigen, Switzerland
      </>
    ),
  },
  {
    title: "Contact",
    body: (
      <>
        Email: 8slicegames@gmail.com
        <br />
        Phone: +41 78 234 80 28
      </>
    ),
  },
  {
    title: "Liability disclaimer",
    body:
      "The contents of this website have been created with the greatest possible care. However, we do not guarantee the accuracy, completeness, or timeliness of the information provided.",
  },
  {
    title: "Copyright",
    body:
      "All content, graphics, text, and media on this website are subject to copyright law and are intellectual property of 8 Slice Games. Unauthorized reproduction, distribution, or use is prohibited unless explicitly permitted.",
  },
  {
    title: "Third-party content",
    body:
      "This website may contain links to third-party websites. We have no influence over the content of those sites and therefore accept no liability for external content.",
  },
] as const;

export default function LegalInformationPage() {
  return (
    <section className="relative overflow-hidden bg-[#070809]">
      <div className="site-grid absolute inset-0 opacity-30" />
      <div className="relative mx-auto w-full max-w-5xl px-6 pb-24 pt-18 sm:px-8 sm:pt-24">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.26em] text-[#d7a53d]">
          Legal record / Public
        </p>
        <h1 className="mt-5 border-b border-white/10 pb-10 text-[clamp(3rem,7vw,6.7rem)] font-black uppercase leading-[0.85] tracking-[-0.055em] text-white">
          Legal information<span className="text-[#d7a53d]">.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-sm leading-7 text-white/45">
          The following information is provided in accordance with applicable legal
          requirements and will be updated as the project develops.
        </p>

        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {sections.map((section, index) => (
            <section key={section.title} className="grid gap-4 py-8 md:grid-cols-[180px_1fr] md:gap-12">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#d7a53d]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="text-lg font-bold uppercase tracking-[0.02em] text-white">
                  {section.title}
                </h2>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/50">{section.body}</p>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
