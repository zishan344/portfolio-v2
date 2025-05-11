"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRestoration() {
  const pathname = usePathname();
  useEffect(() => {
    // Immediately scroll to top
    window.scrollTo(0, 0);

    // For mobile devices, more aggressive scroll restoration
    const handleRouteChange = () => {
      // Multiple scroll attempts with increasing delays to ensure scrolling works
      window.scrollTo(0, 0);
      setTimeout(() => window.scrollTo(0, 0), 10);
      setTimeout(() => window.scrollTo(0, 0), 50);
      setTimeout(() => window.scrollTo(0, 0), 100);

      // Force layout recalculation
      document.body.style.display = "none";
      document.body.offsetHeight; // Force reflow
      document.body.style.display = "";
    };

    handleRouteChange();

    // Remove any body overflow locks that might have been applied
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";

    // Add a slight delay to ensure the browser has time to render the new content
    const timer = setTimeout(() => {
      window.scrollTo(0, 0); // One more scroll attempt
      window.dispatchEvent(new CustomEvent("content-loaded"));
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
