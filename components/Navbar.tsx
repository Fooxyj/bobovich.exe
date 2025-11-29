import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X, SquareTerminal } from 'lucide-react';

interface NavbarProps {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleMenu, isMenuOpen }) => {
  const links = [
    { name: 'Главная', href: '#home' },
    { name: 'Навыки', href: '#skills' },
    { name: 'Кейсы', href: '#projects' },
    { name: 'Контакты', href: '#contact' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    
    if (elem) {
      const offset = 100; // Отступ для фиксированной шапки
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
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none"
    >
      <div className="pointer-events-auto glass-panel rounded-full px-2 py-2 flex items-center shadow-lg shadow-ink/5">
        
        <a 
          href="#home" 
          onClick={(e) => handleScroll(e, '#home')}
          className="px-5 py-2 flex items-center gap-2 text-ink hover:text-neon-blue transition-colors group"
        >
          <SquareTerminal size={20} className="group-hover:rotate-12 transition-transform" />
          <span className="text-base font-serif font-black uppercase tracking-wider">bobovich.exe</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 bg-white/50 rounded-full px-6 py-2 mx-2 border border-white/50">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="relative text-sm font-bold text-ink/60 hover:text-ink transition-colors duration-300 font-mono uppercase tracking-wide group py-1"
            >
              {link.name}
              {/* Neon Underline */}
              <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-neon-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left shadow-[0px_2px_0px_rgba(0,0,0,0.1)]"></span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button onClick={toggleMenu} className="md:hidden ml-4 p-3 bg-ink text-white rounded-full hover:bg-neon-blue transition-colors">
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;