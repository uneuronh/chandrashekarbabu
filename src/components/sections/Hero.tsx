"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden" id="book">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 bg-starfield pointer-events-none opacity-40 mix-blend-screen" />
      <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-blue-accent/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-1/3 h-1/3 bg-amber-glow/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 max-w-2xl"
          >
            <div className="space-y-4">
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-sans font-bold text-white leading-tight tracking-tight"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                THE TURING THRESHOLD
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl font-serif text-amber-glow/90 tracking-wide uppercase"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                EVOLUTION'S POINT OF NO RETURN
              </motion.p>
            </div>

            <motion.p 
              className="text-lg md:text-xl text-gray-300 leading-relaxed font-sans font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Chandrashekar Babu explores the profound implications of AGI not as a tool, but as the inevitable next stage of planetary evolution. This is not a warning—it is a map.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 pt-4 items-center sm:items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button href="#buy" variant="primary" className="text-lg px-8 py-4 rounded-md">
                Buy Now
              </Button>
              <a href="#snippets" className="group flex items-center text-lg text-white font-medium hover:text-amber-glow transition-colors mt-2 sm:mt-0 sm:py-4">
                Read a Snippet
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative flex items-center justify-center lg:justify-end mt-12 lg:mt-0"
          >
            {/* Book Glow behind */}
            <div className="absolute inset-0 bg-blue-500/20 blur-[120px] rounded-full scale-75" />
            
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative z-10 w-full max-w-[380px] drop-shadow-[0_25px_35px_rgba(0,0,0,0.8)]"
            >
              <img 
                src="/images/book-cover.jpg" 
                alt="The Turing Threshold Book Cover" 
                className="w-full h-auto rounded-md shadow-2xl object-contain bg-gray-900 min-h-[500px]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x900/111/fff?text=Book+Cover+Missing';
                }}
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
