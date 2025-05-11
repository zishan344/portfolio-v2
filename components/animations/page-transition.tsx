"use client";

import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
// Fix the import path to avoid ambiguity
import { useIsMobile } from "../../hooks/use-mobile";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  const isMobile = useIsMobile();

  // Ensure we only animate after client-side hydration
  useEffect(() => {
    setIsClient(true);

    // Fix for mobile scrolling issues - reset scroll position on page change
    if (isMobile) {
      // Immediately prevent any animations that might cause flicker
      document.documentElement.classList.add("disable-animations");

      // Force scroll to top
      window.scrollTo(0, 0);

      // Remove animation blocking after a short delay
      const timer = setTimeout(() => {
        document.documentElement.classList.remove("disable-animations");
      }, 300); // Increased timeout to ensure full page load

      return () => clearTimeout(timer);
    }
  }, [pathname, isMobile]);

  if (!isClient) {
    // Return content immediately without animation on first load
    return <>{children}</>;
  }

  // For mobile, use minimal to no animations
  if (isMobile) {
    return <div className="mobile-page-content">{children}</div>;
  }

  // Only use animations for desktop
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0.95 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.95 }}
        transition={{ duration: 0.2 }}
        className="page-container">
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
