"use client";

import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { ReactNode, useEffect, useState, useRef, useCallback } from "react";

export default function CustomerLayout({ children }: { children: ReactNode }) {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const hideTimer = useRef<NodeJS.Timeout | null>(null);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
      // Scrolling down → hide after 3 seconds
      if (hideTimer.current) {
        clearTimeout(hideTimer.current);
      }
      const timer = setTimeout(() => setIsVisible(false), 3000);
      hideTimer.current = timer;
    } else {
      // Scrolling up → show instantly
      if (hideTimer.current) {
        clearTimeout(hideTimer.current);
        hideTimer.current = null;
      }
      setIsVisible(true);
    }

    lastScrollY.current = currentScrollY;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (hideTimer.current) {
        clearTimeout(hideTimer.current);
      }
    };
  }, [handleScroll]);

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Navbar />
      </header>

      <main className="flex-1 pt-16">{children}</main>

      <footer className="border-t p-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} NOLIMIT Shop. All rights reserved.
      </footer>
    </div>
  );
}