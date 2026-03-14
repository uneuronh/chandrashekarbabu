"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = siteData.nav.filter((item) => item.label !== "Buy");

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass-panel py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <a
          href="#"
          className="text-lg font-serif text-white tracking-[0.25em] uppercase hover:opacity-80 transition-opacity"
        >
          {siteData.meta.author}
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 text-sm font-sans tracking-wide">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-text-secondary hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#buy"
                className="text-text-secondary hover:text-white transition-colors"
              >
                Buy
              </a>
            </li>
          </ul>
          <Button href="#buy" variant="primary" className="px-5 py-2 text-sm">
            Buy the Book
          </Button>
        </nav>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 glass-panel border-t border-white/5 py-6 px-6 shadow-2xl"
          >
            <ul className="flex flex-col space-y-4 text-center">
              {siteData.nav.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-lg font-sans text-text-secondary hover:text-white transition-colors py-2"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <Button href="#buy" variant="primary" className="w-full">
                  Buy the Book Now!
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
