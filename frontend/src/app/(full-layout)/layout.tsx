import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import { ReactNode } from "react";
import localFont from "next/font/local";

interface HomeLayoutProps {
  children: ReactNode;
}

const capture = localFont({
  src: "../../fonts/Capture_it.ttf",
  display: "swap",
});

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <main className={`w-full h-svh flex flex-col ${capture.className}`}>
      <Header />
      <div className="w-full flex-1">{children}</div>
      <Footer />
    </main>
  );
}