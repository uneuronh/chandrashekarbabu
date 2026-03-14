"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";
import { X, Check } from "lucide-react";

export function Comparison() {
  return (
    <section className="py-24 relative bg-dark-surface/30 border-y border-white/5" id="concept">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          
          {/* What It Is Not */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="p-8 lg:p-12 border border-white/5 rounded-2xl bg-black/50"
          >
            <h3 className="text-xl md:text-2xl font-sans tracking-widest text-text-muted uppercase mb-8 pb-4 border-b border-white/5">
              {siteData.comparison.whatIsNot.title}
            </h3>
            <ul className="space-y-6">
              {siteData.comparison.whatIsNot.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 mt-1 flex items-center justify-center bg-red-500/10 rounded-full p-1 mr-4">
                    <X className="w-4 h-4 text-red-400" />
                  </span>
                  <span className="text-lg text-text-secondary font-light">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* What It Is */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 lg:p-12 border border-amber-glow/20 rounded-2xl glass-panel relative overflow-hidden"
          >
            {/* Glow accent */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-amber-glow/5 to-transparent pointer-events-none" />

            <h3 className="text-xl md:text-2xl font-sans tracking-widest text-amber-glow uppercase mb-8 pb-4 border-b border-white/10 relative z-10">
              {siteData.comparison.whatItIs.title}
            </h3>
            <ul className="space-y-6 relative z-10">
              {siteData.comparison.whatItIs.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 mt-1 flex items-center justify-center bg-amber-glow/10 rounded-full p-1 mr-4">
                    <Check className="w-4 h-4 text-amber-glow" />
                  </span>
                  <span className="text-lg text-white font-light">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
