"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";
import { X } from "lucide-react";

export function FeatureColumns() {
  return (
    <section
      className="py-20 md:py-28 relative z-10 border-b border-white/5"
      id="about"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
          {/* About the Book */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-serif text-white">
              {siteData.aboutBook.title}
            </h2>
            <div className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
              <div className="flex gap-3">
                <span className="text-4xl font-serif text-amber-glow/60 leading-none shrink-0">
                  &ldquo;
                </span>
                <p className="text-base font-serif italic text-gray-300 leading-relaxed">
                  {siteData.aboutBook.quote}
                </p>
              </div>
            </div>
          </motion.div>

          {/* What It Is */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-serif text-white">
              {siteData.whatItIs.title}
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {siteData.whatItIs.items.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <X className="w-4 h-4 text-gray-500 shrink-0" />
                  <span className="text-base font-sans text-gray-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* About the Author */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
            id="author"
          >
            <h2 className="text-2xl md:text-3xl font-serif text-white">
              About the Author
            </h2>
            <div className="flex gap-4 items-start">
              <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 border border-white/10">
                <img
                  src={siteData.author.image}
                  alt={siteData.author.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-serif text-white font-medium">
                  {siteData.author.name}
                </h3>
                <p className="text-sm font-sans text-gray-400 leading-relaxed">
                  {siteData.author.bio}
                </p>
                <p className="text-xs font-sans text-gray-500 flex items-center gap-1.5">
                  <span className="inline-block w-3 h-3 rounded-full border border-gray-600 flex items-center justify-center text-[8px]">
                    ◎
                  </span>
                  {siteData.author.credentials}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
