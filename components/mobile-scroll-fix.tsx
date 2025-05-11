"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
// Fix the import path to avoid ambiguity
import { useIsMobile } from "../hooks/use-mobile";

/**
 * This component ensures content is visible without scrolling on mobile devices
 */
export default function MobileScrollFix() {
  const pathname = usePathname();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!isMobile) return;

    // Fix for iOS and Android positioning issues
    const fixScroll = () => {
      // Immediately try to scroll to top
      window.scrollTo(0, 0);

      // Wait for browser paint and try again
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);

        // Force a reflow to ensure browser recalculates positions
        document.body.style.display = "none";
        const reflow = document.body.offsetHeight;
        document.body.style.display = "";

        // Apply one more scroll for good measure
        window.scrollTo(0, 0);
      });
    };

    // Run on initial navigation
    fixScroll();

    // Run again after a short delay to catch any late layout shifts
    const timer = setTimeout(fixScroll, 100);

    return () => clearTimeout(timer);
  }, [pathname, isMobile]);

  // This component doesn't render anything
  return null;
}
