import Image from "next/image";
import Link from "next/link";
import { FooterLinks } from "../footer-links/footer-links";

const socialLinks = [
  {
    label: "Steam",
    href: "https://store.steampowered.com/app/4329510/30_Mikes_Til_Extraction_Demo/?beta=0",
    icon: "/social-icons/SteamIcon.svg",
  },
  {
    label: "GitHub",
    href: "https://github.com/dinero2004/30_Mikes_Til_Extraction",
    icon: "/social-icons/GithubIcon.svg",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lazar-minkov-b0494b22a/",
    icon: "/social-icons/LinkedinIcon.svg",
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: "/social-icons/YoutubeIcon.svg",
  },
] as const;

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#080a0b]">
      <div className="site-grid absolute inset-0 opacity-30" />
      <div className="relative mx-auto w-full max-w-[1500px] px-6 py-14 sm:px-8 lg:py-18">
        <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <div>
            <Link href="/" aria-label="Home" className="block w-full max-w-[470px]">
              <Image
                src="/images/primary-logo.png"
                alt="30 Mikes 'Til Extraction"
                width={1134}
                height={115}
                className="h-auto w-full"
              />
            </Link>
            <p className="mt-6 max-w-lg text-sm leading-6 text-white/50">
              A single-player extraction horror game built by 8 Slice Games in
              Switzerland. Loot the compound. Outsmart the machines. Leave alive.
            </p>
          </div>

          <FooterLinks />
        </div>

        <div className="flex flex-col gap-6 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="flex size-10 items-center justify-center border border-white/10 bg-white/[0.025] transition hover:border-[#d7a53d]/60 hover:bg-[#d7a53d]/10"
              >
                <Image
                  src={link.icon}
                  alt=""
                  width={20}
                  height={20}
                  className="size-5 opacity-75"
                />
              </a>
            ))}
          </div>

          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
            © {new Date().getFullYear()} 8 Slice Games · All systems nominal
          </p>
        </div>
      </div>
    </footer>
  );
};
