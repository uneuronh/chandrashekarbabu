import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { siteData } from "@/lib/data";
import Starfield from "@/components/ui/Starfield";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteData.meta.title} | ${siteData.meta.author}`,
  description: siteData.hero.body,
  openGraph: {
    title: siteData.meta.title,
    description: siteData.hero.body,
    url: "https://chandrashekarbabu.com",
    siteName: siteData.meta.title,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteData.meta.title,
    description: siteData.hero.body,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased text-text-primary bg-transparent min-h-screen">
        <Starfield />
        {children}
      </body>
    </html>
  );
}
