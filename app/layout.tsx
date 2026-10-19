import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://gaddyh.dev"),
  title: {
    default: "Gaddy Heineken — Independent AI Engineer & Product Builder",
    template: "%s — Gaddy Heineken",
  },
  description: "I design, build, and ship AI-powered software that works in the real world.",
  openGraph: {
    title: "Gaddy Heineken — Independent AI Engineer & Product Builder",
    description: "Complete AI products, reliable backends, and intelligent automation.",
    url: "https://gaddyh.dev",
    siteName: "Gaddy Heineken",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
