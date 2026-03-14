"use client";

import { siteData } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-12 border-t border-white/5 relative z-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h3 className="text-xl font-serif text-white opacity-90 mb-2">{siteData.meta.title}</h3>
            <p className="text-sm font-sans text-text-muted">By {siteData.meta.author}</p>
          </div>

          <ul className="flex flex-wrap justify-center gap-6 text-sm font-sans">
            {siteData.nav.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="text-text-muted hover:text-white transition-colors duration-200">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex grid-cols-1 md:grid-cols-2 text-xs text-text-muted font-sans font-light justify-between text-center md:text-left">
          <p>© {currentYear} {siteData.meta.author}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
