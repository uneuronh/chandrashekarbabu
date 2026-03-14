"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";

export function LogoStrip() {
  return (
    <section
      id="buy"
      className="py-6 border-y border-white/5 bg-black/30 backdrop-blur-sm relative z-10"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8"
        >
          {siteData.retailers.map((retailer, index) => (
            <motion.a
              key={retailer.name}
              href={retailer.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-sm border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300"
            >
              <span className="text-sm font-sans tracking-wider text-gray-300 hover:text-white transition-colors whitespace-nowrap">
                {retailer.icon && (
                  <span className="inline-block mr-1 font-serif font-bold text-amber-glow">
                    {retailer.icon}
                  </span>
                )}
                {retailer.name}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
