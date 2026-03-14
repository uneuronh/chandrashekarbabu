"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";

export function BuyStrip() {
  return (
    <section id="buy" className="py-12 border-y border-white/5 bg-dark-surface/50 relative z-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-6 md:gap-12 lg:gap-16"
        >
          {siteData.retailers.map((retailer) => (
            <motion.a
              key={retailer.name}
              href={retailer.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-text-muted hover:text-white transition-colors duration-300 font-sans tracking-wider text-sm uppercase flex px-4 py-2 rounded-full border border-transparent hover:border-white/10 hover:bg-white/5"
            >
              {retailer.name}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
