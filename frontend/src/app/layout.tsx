import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { ReactNode } from "react";
import "./globals.css";
import localFont from "next/font/local";

const captureIt = localFont({
  src: "../public/fonts/Capture_It.ttf",
  display: "swap",
  variable: "--font-capture",
});

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await auth();

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
