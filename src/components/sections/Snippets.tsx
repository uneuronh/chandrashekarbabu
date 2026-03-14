"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";

export function Snippets() {
  return (
    <section className="py-32 relative overflow-hidden" id="snippets">
      {/* Background flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-accent/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-serif text-white glow-text"
          >
            {siteData.snippets.title}
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            viewport={{ once: true }}
            className="h-1 bg-amber-glow mx-auto mt-8 rounded-full" 
          />
        </div>

        <div className="grid gap-12 max-w-4xl mx-auto">
          {siteData.snippets.items.map((snippet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative p-10 md:p-14 border border-white/5 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent"
            >
              {/* Decorative quotation mark */}
              <div className="absolute top-8 left-8 text-6xl font-serif text-white/5 pointer-events-none select-none">
                &quot;
              </div>
              
              <blockquote className="relative z-10">
                <p className="text-xl md:text-3xl font-serif italic font-light text-text-primary leading-relaxed text-center">
                  &quot;{snippet.text}&quot;
                </p>
              </blockquote>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
