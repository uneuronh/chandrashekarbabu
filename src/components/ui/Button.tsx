"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
}

export function Button({
  className,
  variant = "primary",
  href,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-sm px-6 py-3 font-sans text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-amber-glow/50 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-amber-glow text-white hover:bg-amber-glow/90 shadow-[0_0_15px_rgba(217,119,54,0.3)] hover:shadow-[0_0_20px_rgba(217,119,54,0.5)]",
    secondary: "bg-white/10 text-white hover:bg-white/20 border border-white/10 backdrop-blur-sm",
    ghost: "text-text-secondary hover:text-white hover:bg-white/5",
  };

  const renderProps = {
    className: cn(baseStyles, variants[variant], className),
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...(props as any)
  };

  if (href) {
    return (
      <motion.a href={href} {...renderProps}>
        {children}
      </motion.a>
    );
  }
  
  return (
    <motion.button {...renderProps}>
      {children}
    </motion.button>
  );
}
