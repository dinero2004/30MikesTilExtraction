import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import { ReactNode } from "react";


interface HomeLayoutProps {
  children: ReactNode;
}
export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#050606]">
      <Header />
      <div className="w-full flex-1">{children}</div>
      <Footer />
    </main>
  );
}
