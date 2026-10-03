import type { Metadata } from "next";
import { Inter, Manrope, Bona_Nova } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const bonaNova = Bona_Nova({
  subsets: ["latin"],
  variable: "--font-bonanova",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "RechtLens",
  description: "AI Contract Intelligence Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${inter.variable} ${bonaNova.variable} bg-slate-950 text-white font-[family:var(--font-logo)]`}
      >
        {children}
      </body>
    </html>
  );
}