import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const duration = 1200; // 1.2 seconds for a deliberate, premium feel
    const start = window.scrollY;
    const startTime = performance.now();

    // Easing function: easeInOutCubic
    // Starts slow, speeds up in the middle, slows down at the end
    const easeInOutCubic = (t: number) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animateScroll = (currentTime: number) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo({
        top: start * (1 - ease),
        behavior: 'auto' // Explicitly use 'auto' to override global CSS scroll-behavior
      });

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 bg-white border-2 border-ink rounded-full shadow-[4px_4px_0px_#111] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-neon-yellow transition-all duration-200 group flex items-center justify-center md:bottom-8 md:right-8"
          aria-label="Вернуться наверх"
        >
          <ArrowUp className="w-5 h-5 md:w-6 md:h-6 text-ink group-hover:text-ink transition-colors" strokeWidth={3} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;