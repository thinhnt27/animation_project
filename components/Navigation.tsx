"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROCESS_STEPS } from "../constants";

const Navigation: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hiện nav sau khi rời hero
      setShowNav(window.scrollY > window.innerHeight * 0.5);

      // Điểm kiểm tra scroll (tránh nhảy sớm)
      const scrollPosition = window.scrollY + window.innerHeight * 0.3;

      let currentIndex = -1;

      PROCESS_STEPS.forEach((step, index) => {
        const element = document.getElementById(step.id);
        if (!element) return;

        const top = element.offsetTop;

        if (scrollPosition >= top) {
          currentIndex = index;
        }
      });

      // OFFSET -1 (đúng yêu cầu của bạn)
      setActiveIndex(Math.max(currentIndex - 1, 0));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // chạy lần đầu để sync state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <AnimatePresence>
        {showNav && (
          <motion.nav
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="fixed left-6 md:left-12 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4"
          >
            {PROCESS_STEPS.map((step, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={step.id}
                  onClick={() => scrollToSection(step.id)}
                  className="group relative flex items-center"
                >
                  {/* Tooltip */}
                  <span className="absolute left-8 px-2 py-1 bg-white/10 backdrop-blur-md text-white text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap rounded">
                    {step.title}
                  </span>

                  {/* Dot */}
                  <div className="relative flex items-center justify-center w-3 h-3">
                    {isActive && (
                      <motion.div
                        layoutId="nav-glow"
                        className="absolute inset-0 bg-brand-gold rounded-full blur-[2px]"
                      />
                    )}

                    <div
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-brand-gold scale-125"
                          : "bg-white/30 group-hover:bg-white"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Top Left Branding */}
      <div className="fixed top-8 left-8 md:left-12 z-50 mix-blend-difference pointer-events-none">
        <span className="font-serif font-bold text-white text-xl tracking-wider">
          Animation<span className="text-brand-gold">.</span>
        </span>
      </div>
    </>
  );
};

export default Navigation;
