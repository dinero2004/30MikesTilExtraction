import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "30 Mikes 'Til Extraction",
    template: "%s | 30 Mikes 'Til Extraction",
  },
  description:
    "A single-player extraction horror game by 8 Slice Games. Loot the compound, survive the machines, and get out before the clock hits zero.",
  metadataBase: new URL("https://30-mikes-til-extraction.vercel.app"),
  openGraph: {
    title: "30 Mikes 'Til Extraction",
    description: "Thirty minutes. One way out.",
    images: ["/images/hero-Image.png"],
  },
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();

  return (
    <html lang="en">
      <body className="antialiased">
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
