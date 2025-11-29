import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-[9999] p-3 md:p-4 bg-white border-2 border-ink rounded-full shadow-[4px_4px_0px_#111] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-neon-yellow transition-all duration-200 group flex items-center justify-center cursor-pointer"
          aria-label="Вернуться наверх"
        >
          <ArrowUp className="w-6 h-6 text-ink group-hover:text-ink transition-colors" strokeWidth={3} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;