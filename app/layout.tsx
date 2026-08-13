import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// GitHub Pages serves this project site from a sub-path, so asset URLs written
// by hand in `metadata` need the base path applied explicitly. Both values fall
// back to the Cloudflare Worker deployment when the static-export build is not
// the one running.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://debayan-roy-product-portfolio.debayan2k.chatgpt.site";
const asset = (path: string) => `${BASE_PATH}${path}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Debayan Roy — Product & Technical Leadership",
    template: "%s · Debayan Roy",
  },
  description:
    "Evidence-led executive portfolio spanning enterprise product strategy, cloud security, edge delivery and production agentic AI.",
  authors: [{ name: "Debayan Roy" }],
  keywords: [
    "product leadership",
    "technical product management",
    "agentic AI",
    "cloud security",
    "enterprise products",
  ],
  openGraph: {
    type: "website",
    title: "Debayan Roy — Product & Technical Leadership",
    description:
      "Enterprise product outcomes, architecture decisions and AI systems—grounded in verified evidence.",
    images: [{ url: asset("/og-portfolio.png"), width: 1200, height: 630, alt: "Debayan Roy product and technical leadership portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Debayan Roy — Product & Technical Leadership",
    description: "Enterprise products, cloud systems and production agentic AI.",
    images: [asset("/og-portfolio.png")],
  },
  icons: {
    icon: asset("/favicon.svg"),
    shortcut: asset("/favicon.svg"),
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
