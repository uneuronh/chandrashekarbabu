"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";
import { Star } from "lucide-react";

export function Reviews() {
  return (
    <section className="py-24 bg-dark-surface/40 border-y border-white/5" id="reviews">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-sans tracking-[0.2em] text-amber-glow uppercase">
            {siteData.reviews.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {siteData.reviews.items.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl glass-panel relative flex flex-col items-center text-center justify-center min-h-[250px]"
            >
              <div className="flex gap-1 text-amber-glow mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-lg md:text-xl font-sans font-light text-white leading-relaxed">
                &quot;{review.quote}&quot;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
