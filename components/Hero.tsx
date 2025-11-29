import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Asterisk } from 'lucide-react';

interface HeroProps {
  onOpenPortfolio: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenPortfolio }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const rotate = useTransform(scrollY, [0, 500], [0, 10]);
  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Updated to only loop "СТРАТЕГИЯ" as requested
  const marqueeWord = "СТРАТЕГИЯ";

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 pb-20">
      
      {/* Left Side Scroll Rail - Desktop Only */}
      <div className="absolute left-6 top-0 bottom-0 hidden xl:flex flex-col items-center justify-end pb-12 z-20 w-12 mix-blend-darken pointer-events-none">
         <div className="absolute top-32">
             <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
             >
                <Asterisk size={24} className="text-ink/30" />
             </motion.div>
         </div>

         <div className="relative w-[1px] h-[60vh] bg-ink/10 overflow-hidden">
             <motion.div
                animate={{ y: [-100, 800] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent via-neon-blue to-transparent opacity-80"
             />
         </div>

         <div className="mt-8 writing-vertical-rl transform -rotate-180">
             <p className="font-mono font-bold text-[10px] tracking-[0.3em] text-ink uppercase flex items-center gap-4 opacity-60">
                <span className="w-1 h-1 bg-ink rounded-full"></span>
                Листай вниз
             </p>
         </div>
      </div>

      {/* Decorative Shapes - Simplified for performance */}
      <div className="hidden md:block absolute top-[10%] right-[5%] w-32 h-32 border-[10px] border-neon-yellow rounded-full z-0 opacity-50 animate-spin-slow" />
      <div className="hidden md:block absolute top-[20%] left-[5%] w-16 h-16 bg-neon-blue transform rotate-45 z-0" />
      <div className="hidden md:block absolute bottom-[10%] left-[10%] w-24 h-24 bg-ink rounded-full mix-blend-multiply opacity-5 z-0" />

      {/* Marquee Background - Single Word Loop */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 opacity-[0.06] pointer-events-none overflow-hidden z-0">
        <div className="flex whitespace-nowrap animate-marquee">
          {/* Creating a long seamless strip */}
          {[...Array(8)].map((_, i) => (
             <span key={i} className="text-[15vw] font-black uppercase mx-8 text-ink font-serif">
               {marqueeWord}
             </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 order-2 lg:order-1">
                 <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                 >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ink/10 bg-white/50 backdrop-blur-sm mb-8 shadow-sm">
                        <span className="w-2 h-2 bg-neon-blue rounded-full animate-pulse"></span>
                        <span className="text-xs font-bold tracking-widest uppercase font-mono">Открыт к предложениям</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black leading-[1.1] tracking-tight mb-8 text-ink relative">
                        Вячеслав <br/>
                        <span className="block mt-2 text-ink transition-colors duration-300 relative inline-block">
                            Бобович
                            <span className="absolute bottom-2 left-0 w-full h-6 bg-neon-yellow -z-10 transform -skew-x-12 opacity-60"></span>
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-ink/80 font-mono max-w-xl leading-relaxed mb-10">
                        Вшиваю <span className="bg-ink text-white px-2 py-0.5 font-bold shadow-[4px_4px_0px_#ccff00] transform -skew-x-6 inline-block mr-1">ДНК</span> в текст. Делаю так, чтобы бренд перестал кричать в пустоту и начал разговаривать с людьми.
                    </p>

                    <div className="flex flex-wrap gap-6">
                        <button onClick={onOpenPortfolio} className="group relative px-8 py-4 bg-ink text-white text-lg font-medium overflow-hidden rounded-full shadow-lg hover:shadow-xl transition-all">
                            <span className="relative z-10 group-hover:text-ink transition-colors duration-300 font-bold font-serif tracking-wide">Смотреть работы</span>
                            <div className="absolute inset-0 bg-neon-yellow transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                        </button>
                        <a href="https://t.me/trumkopi" target="_blank" rel="noopener noreferrer" className="group px-8 py-4 bg-white border-2 border-ink/10 text-ink text-lg font-medium rounded-full hover:border-ink transition-colors shadow-sm hover:shadow-md font-serif tracking-wide">
                            Написать мне
                        </a>
                    </div>
                 </motion.div>
            </div>

            <motion.div 
                style={isMobile ? {} : { y: y2, rotate: rotate }}
                className="lg:col-span-5 order-1 lg:order-2 flex justify-center relative mt-10 lg:mt-0"
            >
                 <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative z-10 w-72 md:w-96 aspect-[3/4]"
                 >
                    <div className="absolute -top-8 -right-8 w-full h-full border-[3px] border-neon-blue rounded-full rounded-br-none"></div>
                    <div className="absolute -bottom-8 -left-8 w-full h-full bg-neon-yellow rounded-full rounded-tl-none shadow-[10px_10px_0px_rgba(0,0,0,0.1)]"></div>
                    
                    <div className="absolute top-1/2 -right-12 w-0 h-0 border-l-[20px] border-l-transparent border-b-[30px] border-b-neon-pink border-r-[20px] border-r-transparent transform rotate-45"></div>

                    <div className="absolute inset-0 overflow-hidden rounded-t-full rounded-b-none border-[3px] border-ink bg-[#1a1a1a] shadow-2xl z-20">
                         <img 
                            src="https://i.postimg.cc/zv2pCLGr/photo-2025-11-07-105.jpg" 
                            alt="Вячеслав Бобович"
                            className="w-full h-full object-cover object-[center_top] grayscale hover:grayscale-0 transition-all duration-700"
                            loading="eager"
                        />
                    </div>

                    <motion.div 
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-10 -left-12 bg-white p-4 shadow-[8px_8px_0px_#111] border-2 border-ink rounded-lg max-w-[200px] rotate-[-3deg] z-30 hidden md:block"
                    >
                        <p className="text-[10px] font-bold uppercase tracking-widest text-neon-blue mb-1 font-mono">Экспертиза</p>
                        <p className="text-sm font-serif font-bold italic text-ink leading-tight">"Слова, которые продают. Истории, которые живут."</p>
                    </motion.div>
                 </motion.div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;