"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

interface StaggerContainerProps {
  children: ReactNode;
  delay?: number;
  staggerChildren?: number;
  className?: string;
  once?: boolean;
}

export default function StaggerContainer({
  children,
  delay = 0,
  staggerChildren = 0.1,
  className = "",
  once = true,
}: StaggerContainerProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren: delay,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-10%" }}
      variants={containerVariants}
      className={className}
      style={{ willChange: "opacity" }}>
      {children}
    </motion.div>
  );
}
