"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

interface ScaleInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export default function ScaleIn({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
  once = true,
}: ScaleInProps) {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: Math.min(duration, 0.5), // Limit maximum duration
        delay: Math.min(delay, 0.3), // Limit maximum delay
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-10%" }}
      variants={variants}
      className={className}
      style={{ willChange: "opacity, transform" }}>
      {children}
    </motion.div>
  );
}
