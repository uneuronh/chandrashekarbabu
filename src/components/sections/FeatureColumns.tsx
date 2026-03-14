"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";

const features = [
  {
    title: "THE PARADIGM SHIFT",
    description: "Intelligence is no longer confined to biological substrates. Understand the fundamental physics and information theory driving the emergence of non-biological cognition."
  },
  {
    title: "SYSTEMIC REVOLUTION",
    description: "It is not merely a technological upgrade but a complete reorganization of planetary infrastructure, redefining labor, value, and governance at a holistic level."
  },
  {
    title: "POST-HUMAN ECONOMICS",
    description: "Discover the new macro-economic principles governing a society where intellectual labor trends toward zero marginal cost, and human purpose is radically redefined."
  }
];

export function FeatureColumns() {
  return (
    <section className="py-24 relative z-10 border-b border-white/5 bg-gradient-to-b from-transparent to-black/40" id="about">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="mb-16 max-w-3xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-sans tracking-[0.2em] text-amber-glow uppercase mb-4"
          >
            Core Theses
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-serif text-white leading-tight"
          >
            {siteData.meta.subtitle}
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
              className="space-y-4"
            >
              <h4 className="text-lg font-sans font-medium text-white tracking-widest uppercase border-b border-white/10 pb-4">
                {feature.title}
              </h4>
              <p className="text-gray-400 font-sans font-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
