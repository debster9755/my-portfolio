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

export const metadata: Metadata = {
  metadataBase: new URL("https://debayan-product-portfolio.pages.dev"),
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
    images: [{ url: "/og-portfolio.png", width: 1200, height: 630, alt: "Debayan Roy product and technical leadership portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Debayan Roy — Product & Technical Leadership",
    description: "Enterprise products, cloud systems and production agentic AI.",
    images: ["/og-portfolio.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
