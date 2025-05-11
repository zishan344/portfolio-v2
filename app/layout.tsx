import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../styles/mobile-fixes.css";
import "../styles/scroll-fix.css"; // Import our scroll fix CSS

import { ThemeProvider } from "@/components/theme-provider";
import PageTransition from "@/components/animations/page-transition";
import ScrollRestoration from "@/components/scroll-restoration";
import MobileScrollFix from "@/components/mobile-scroll-fix";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MMI.Zishan | Full Stack Software Engineer",
  description:
    "Personal portfolio and blog of mohammad marouful islam Zishan, a full stack software Engineer specializing in modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </head>
      <body
        className={`${inter.className} antialiased h-full`}
        suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <ScrollRestoration />
          <MobileScrollFix />
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
