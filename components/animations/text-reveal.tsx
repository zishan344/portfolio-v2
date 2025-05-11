"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

interface TextRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
}

export default function TextReveal({
  children,
  delay = 0,
  className = "",
  once = true,
}: TextRevealProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.015,
        delayChildren: delay,
      },
    },
  };

  const childVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.3,
      },
    },
  };

  // Only animate word groups instead of individual characters for better performance
  const renderContent = () => {
    if (typeof children === "string") {
      // Split by words and preserve spaces
      return children.split(/(\s+)/).map((word, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          className="inline-block whitespace-pre">
          {word}
        </motion.span>
      ));
    }
    return children;
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-10%" }}
      variants={containerVariants}
      className={className}
      style={{ willChange: "opacity, transform" }}>
      {renderContent()}
    </motion.div>
  );
}
