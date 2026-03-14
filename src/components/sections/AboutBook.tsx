"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";

export function AboutBook() {
  return (
    <section className="py-24 md:py-32 relative bg-dark-bg" id="about">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-8 md:p-16 rounded-2xl relative overflow-hidden"
        >
          {/* Subtle glow behind card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-accent/5 blur-[100px] rounded-full pointer-events-none" />
          
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 relative z-10">
            {siteData.aboutBook.title}
          </h2>
          
          <div className="w-16 h-1 bg-amber-glow relative z-10 mb-8 rounded-full" />

          <p className="text-lg md:text-2xl font-sans font-light leading-relaxed text-text-secondary relative z-10">
            {siteData.aboutBook.content}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
