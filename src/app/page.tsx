import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { FeatureColumns } from "@/components/sections/FeatureColumns";
import { BuyStrip } from "@/components/sections/BuyStrip";
import { Snippets } from "@/components/sections/Snippets";
import { Reviews } from "@/components/sections/Reviews";
import { AboutAuthor } from "@/components/sections/AboutAuthor";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent selection:bg-amber-glow/30 selection:text-white">
      <Header />
      
      <article>
        <Hero />
        <LogoStrip />
        <FeatureColumns />
        <BuyStrip />
        <Snippets />
        <Reviews />
        <AboutAuthor />
        <FinalCTA />
      </article>

      <Footer />
    </main>
  );
}
