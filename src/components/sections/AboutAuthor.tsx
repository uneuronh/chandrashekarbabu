"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";

export function AboutAuthor() {
  return (
    <section
      className="py-24 md:py-32 relative bg-black border-y border-white/5"
    >
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-amber-glow/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white/10">
              <img
                src={siteData.author.image}
                alt={siteData.author.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

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
