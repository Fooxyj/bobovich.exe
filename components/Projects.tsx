import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, FolderOpen } from 'lucide-react';

const clients = [
  "Aliento Sculpt", "Womenson", "Blomberg Studio", "ГК Нордик", "Личные Блоги", "Telegram Каналы",
  "Aliento Sculpt", "Womenson", "Blomberg Studio", "ГК Нордик", "Личные Блоги", "Telegram Каналы"
];

interface ProjectsProps {
  onOpenPortfolio: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onOpenPortfolio }) => {
  return (
    <section id="projects" className="py-32 bg-paper-off relative overflow-hidden flex flex-col items-center justify-center">
      
      {/* Geometric Background shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-neon-blue rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-neon-yellow rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-pulse"></div>

      {/* Dynamic Marquee Background */}
      <div className="absolute inset-0 flex flex-col justify-center gap-20 opacity-5 pointer-events-none select-none">
         <div className="flex whitespace-nowrap animate-marquee">
            {clients.map((client, i) => (
                <span key={i} className="text-9xl font-serif font-black text-ink mx-12 uppercase">
                    {client}
                </span>
            ))}
         </div>
         <div className="flex whitespace-nowrap animate-marquee" style={{ animationDirection: 'reverse' }}>
            {clients.map((client, i) => (
                <span key={i} className="text-9xl font-serif font-black text-ink mx-12 uppercase">
                    {client}
                </span>
            ))}
         </div>
      </div>

      {/* Glass Card */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-5xl mx-4 w-full mt-10 mb-20"
      >
        <div className="glass-panel p-12 md:p-24 rounded-[3rem] text-center border-2 border-white shadow-2xl relative overflow-hidden group bg-white/60 backdrop-blur-xl">
            
            <div className="relative z-10 flex flex-col items-center">
                <div className="inline-block mb-6 px-6 py-2 rounded-full border-2 border-ink bg-white shadow-[4px_4px_0px_#111]">
                    <span className="font-bold uppercase tracking-widest text-xs">Проекты</span>
                </div>

                <h2 className="text-6xl md:text-8xl font-serif font-black text-ink mb-8 leading-[0.9]">
                    Смотреть <br/>
                    <span className="relative inline-block">
                        Портфолио
                        <svg className="absolute w-full h-4 -bottom-2 left-0 text-neon-blue" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                        </svg>
                    </span>
                </h2>

                <p className="text-xl md:text-2xl text-ink/70 font-mono mb-12 max-w-2xl mx-auto leading-relaxed">
                    Подробные кейсы, примеры текстов и результаты работы с брендами. Соцсети, SEO, Push-уведомления.
                </p>

                <button 
                    onClick={onOpenPortfolio}
                    className="
                        group relative px-12 py-6 w-full sm:w-auto
                        bg-neon-blue text-white 
                        text-xl font-bold rounded-full 
                        border-2 border-transparent
                        shadow-[8px_8px_0px_#111]
                        transition-all duration-200 ease-out
                        hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]
                        hover:bg-neon-yellow hover:text-ink hover:border-ink
                        inline-flex items-center justify-center gap-3
                    "
                >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                        Открыть архив работ
                        <FolderOpen size={24} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </span>
                </button>
            </div>
        </div>
      </motion.div>

      {/* Bottom Transition: Massive White Arch rising from the next section */}
      <div className="absolute bottom-0 left-0 w-full h-24 md:h-40 bg-paper rounded-t-[50%] scale-x-110 z-20 border-t-[3px] border-neon-blue"></div>

    </section>
  );
};

export default Projects;