"use client";

import { motion } from "framer-motion";

interface NameDisplayProps {
  firstName: string;
  middleName?: string;
  lastName: string;
}

export default function NameDisplay({
  firstName,
  middleName,
  lastName,
}: NameDisplayProps) {
  const nameVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    hover: { scale: 1.05 },
  };

  return (
    <div className="relative">
      <div className="flex flex-wrap items-baseline gap-2 md:gap-3 max-w-[95vw] sm:max-w-[500px] md:max-w-[600px]">
        <motion.div
          className="group"
          initial="initial"
          animate="animate"
          whileHover="hover">
          <motion.span
            variants={nameVariants}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent inline-block group-hover:from-purple-500 group-hover:to-primary transition-colors duration-300">
            {firstName}
          </motion.span>
        </motion.div>

        {middleName && (
          <motion.div
            className="group"
            initial="initial"
            animate="animate"
            whileHover="hover">
            <motion.span
              variants={nameVariants}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent inline-block group-hover:from-blue-600 group-hover:to-primary transition-colors duration-300">
              {middleName}
            </motion.span>
          </motion.div>
        )}

        <motion.div
          className="group"
          initial="initial"
          animate="animate"
          whileHover="hover">
          <motion.span
            variants={nameVariants}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-foreground to-primary bg-clip-text text-transparent inline-block group-hover:from-blue-400 group-hover:to-blue-600 transition-colors duration-300">
            {lastName}
          </motion.span>
        </motion.div>
      </div>
      <div className="h-[2px] w-full bg-gradient-to-r from-primary via-blue-500 to-primary-foreground mt-1 opacity-60"></div>
    </div>
  );
}
