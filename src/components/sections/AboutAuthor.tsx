"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";

export function AboutAuthor() {
  return (
    <section className="py-24 md:py-32 relative bg-black border-y border-white/5" id="author">
      {/* Background glow behind author area */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-amber-glow/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-center">
          
          {/* Author Image Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white/10 p-2">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-[#111] to-[#050505] flex items-center justify-center relative overflow-hidden">
                {/* Fallback pattern since we don't have a headshot */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-glow/40 via-transparent to-transparent" />
                <span className="text-6xl font-serif text-white/10 uppercase tracking-widest text-center leading-none">
                  {siteData.meta.author.split(' ').map(n => n[0]).join('')}
                </span>
                {/* Image placeholder slot */}
                {/* <img src="/author-image.jpg" alt={siteData.meta.author} className="absolute inset-0 w-full h-full object-cover rounded-full mix-blend-luminosity opacity-80" /> */}
              </div>
            </div>
          </motion.div>

          {/* Author Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 max-w-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-serif text-white">
              About the Author
            </h2>
            <div className="w-16 h-1 bg-amber-glow rounded-full" />
            <div className="space-y-6 pt-4">
              <p className="text-lg md:text-xl font-sans font-light text-text-secondary leading-relaxed">
                {siteData.author.bio}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
