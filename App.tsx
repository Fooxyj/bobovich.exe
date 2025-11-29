import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import BackgroundMechanism from './components/BackgroundMechanism';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import PortfolioPage from './components/PortfolioPage';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'portfolio'>('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // If we are on portfolio page, switch to home first
    if (currentView === 'portfolio') {
      setCurrentView('home');
      // Wait a bit for render then scroll
      setTimeout(() => {
        scrollToSection(href);
      }, 100);
    } else {
      scrollToSection(href);
    }
    
    setIsMenuOpen(false);
  };

  const scrollToSection = (href: string) => {
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    
    if (elem) {
      const offset = 100;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      const startPosition = window.scrollY;
      const distance = offsetPosition - startPosition;
      const duration = 1000;
      let start: number | null = null;

      const easeInOutCubic = (t: number) => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutCubic(progress);

        window.scrollTo(0, startPosition + distance * ease);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  };

  return (
    <main className="relative min-h-screen bg-paper text-ink selection:bg-highlighter selection:text-ink font-sans">
      <CustomCursor />
      <BackgroundMechanism />
      <ScrollToTop />
      
      <AnimatePresence mode="wait">
        {currentView === 'home' ? (
          <motion.div 
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Navbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="fixed inset-0 z-40 bg-paper/95 backdrop-blur-xl pt-24 px-6 md:hidden"
                >
                  <div className="flex flex-col space-y-8 text-3xl font-serif font-bold text-ink text-center">
                    <a onClick={(e) => handleScroll(e, '#home')} href="#home" className="hover:text-editor-red italic">Главная</a>
                    <a onClick={(e) => handleScroll(e, '#skills')} href="#skills" className="hover:text-editor-red italic">Навыки</a>
                    <a onClick={(e) => handleScroll(e, '#projects')} href="#projects" className="hover:text-editor-red italic">Кейсы</a>
                    <a onClick={(e) => handleScroll(e, '#contact')} href="#contact" className="hover:text-editor-red italic">Контакты</a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div id="home">
              <Hero onOpenPortfolio={() => setCurrentView('portfolio')} />
            </div>
            
            <Skills />
            <Projects onOpenPortfolio={() => setCurrentView('portfolio')} />
            <Contact />
          </motion.div>
        ) : (
          <PortfolioPage key="portfolio" onBack={() => setCurrentView('home')} />
        )}
      </AnimatePresence>

    </main>
  );
};

export default App;