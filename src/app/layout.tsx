import type { Metadata } from "next";
import { siteData } from "@/lib/data";
import Starfield from "@/components/ui/Starfield";
import "./globals.css";

export const metadata: Metadata = {
  title: `${siteData.meta.title} | ${siteData.meta.author}`,
  description: siteData.hero.body,
  openGraph: {
    title: siteData.meta.title,
    description: siteData.hero.body,
    url: "https://chandrashekarbabu.com", // Assuming this is the real domain
    siteName: siteData.meta.title,
    images: [
      {
        url: "/og-image.jpg", // We will recommend they add this image
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
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans antialiased text-text-primary bg-transparent min-h-screen`}>
        <Starfield />
        {children}
      </body>
    </html>
  );
}
