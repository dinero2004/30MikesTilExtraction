import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "../navigation/navigation";

const STEAM_URL =
  "https://store.steampowered.com/app/4329510/30_Mikes_Til_Extraction_Demo/?beta=0";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050606]/88 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] w-full max-w-[1500px] items-center gap-5 px-5 sm:px-8">
        <Link
          href="/"
          aria-label="30 Mikes 'Til Extraction home"
          className="group relative z-10 mr-auto block w-[190px] shrink-0 sm:w-[260px]"
        >
          <Image
            src="/images/primary-logo.png"
            alt="30 Mikes 'Til Extraction"
            width={1134}
            height={115}
            priority
            className="h-auto w-full transition-transform duration-300 group-hover:scale-[1.015]"
          />
        </Link>

        <Navigation />

        <a
          href={STEAM_URL}
          target="_blank"
          rel="noreferrer"
          className="group hidden items-center gap-2 border border-[#d7a53d] bg-[#d7a53d] px-4 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-black transition hover:bg-[#f0c25d] lg:inline-flex"
        >
          Play demo
          <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </header>
  );
};
