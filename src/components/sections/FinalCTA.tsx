"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="py-32 relative bg-dark-bg" id="get-book">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-starfield opacity-30 mix-blend-screen pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-accent/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-12 md:p-20 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 glow-text tracking-tight">
            Ready to change your mind?
          </h2>
          <p className="text-xl md:text-2xl font-sans font-light text-text-secondary mb-12 max-w-2xl mx-auto">
            Get your copy of {siteData.meta.title} today and discover the reality behind the illusion.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Button href={siteData.hero.primaryLink} variant="primary" className="text-xl px-12 py-4">
              {siteData.hero.primaryCta}
            </Button>
            <div className="flex items-center gap-4 text-text-muted text-sm font-sans tracking-widest uppercase">
              <span>Available on</span>
              <div className="flex gap-3">
                {siteData.retailers.map(r => (
                  <span key={r.name} className="opacity-70">{r.name}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
