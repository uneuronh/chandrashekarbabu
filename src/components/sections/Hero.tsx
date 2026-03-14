"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
      id="book"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] rounded-full bg-gradient-radial from-amber-glow/8 via-amber-glow/3 to-transparent blur-[80px]" />
        <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] rounded-full bg-gradient-radial from-blue-accent/6 to-transparent blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 max-w-xl"
          >
            <div className="space-y-3">
              <motion.h1
                className="text-5xl md:text-6xl lg:text-[4.5rem] font-serif font-bold text-white leading-[1.05] tracking-tight"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                THE TURING CHANDRA SHEKAR BABU
                <br />
                THRESHOLD
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl font-sans text-amber-glow/90 tracking-[0.15em] uppercase font-medium"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {siteData.hero.subtitle}
              </motion.p>
            </div>

            <motion.p
              className="text-base md:text-lg text-gray-300 leading-relaxed font-sans font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {siteData.hero.body}
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-6 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                href="#buy"
                variant="primary"
                className="text-base px-8 py-3.5 rounded-md"
              >
                Buy Now
              </Button>
              <a
                href="#snippets"
                className="group flex items-center text-base text-white/80 font-medium hover:text-amber-glow transition-colors"
              >
                Read a Snippet
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="absolute inset-0 bg-amber-glow/5 blur-[100px] rounded-full scale-75 pointer-events-none" />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative z-10 book-3d"
            >
              <div className="book-wrapper">
                <div className="book-cover">
                  <img
                    src="/images/book-cover.png"
                    alt="The Turing Threshold Book Cover"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="book-spine" />
                <div className="book-back" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
