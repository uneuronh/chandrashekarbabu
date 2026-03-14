"use client";

import { motion } from "framer-motion";

const logos = [
  "THE WALL STREET JOURNAL",
  "WIRED",
  "THE ATLANTIC",
  "NATURE",
  "HARVARD BUSINESS REVIEW",
];

export function LogoStrip() {
  return (
    <section className="py-12 border-y border-white/5 bg-black/20 backdrop-blur-sm relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <p className="text-center text-xs font-sans tracking-[0.2em] text-gray-500 uppercase mb-8">
          Featured & Discussed In
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-sm md:text-base font-serif font-bold tracking-wider text-gray-400 grayscale transition-all hover:grayscale-0 hover:text-white cursor-default"
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
