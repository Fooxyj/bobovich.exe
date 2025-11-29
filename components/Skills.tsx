import React from 'react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const skills = [
    { name: "Контент-стратегия", color: "border-neon-blue hover:bg-neon-blue", textHover: "hover:text-white", textColor: "hover:text-white" },
    { name: "Голос Бренда (ToV)", color: "border-neon-pink hover:bg-neon-pink", textHover: "hover:text-white", textColor: "hover:text-white" },
    { name: "Сторителлинг", color: "border-neon-yellow hover:bg-neon-yellow", textHover: "hover:text-ink", textColor: "hover:text-ink" }, // Black text for contrast
    { name: "SMM & Соцсети", color: "border-orange-500 hover:bg-orange-500", textHover: "hover:text-white", textColor: "hover:text-white" },
    { name: "Email Маркетинг", color: "border-purple-500 hover:bg-purple-500", textHover: "hover:text-white", textColor: "hover:text-white" },
    { name: "Редактура", color: "border-cyan-400 hover:bg-cyan-400", textHover: "hover:text-ink", textColor: "hover:text-ink" }, // Black text for contrast
    { name: "AI & Промптинг", color: "border-green-500 hover:bg-green-500", textHover: "hover:text-ink", textColor: "hover:text-ink" }, // Black text for contrast
    { name: "Сценарии Reels", color: "border-red-500 hover:bg-red-500", textHover: "hover:text-white", textColor: "hover:text-white" }
  ];

  return (
    <section id="skills" className="relative bg-paper z-10">
      
      {/* Top Divider: Juicy Angled Tape */}
      <div className="absolute top-0 left-0 w-full overflow-hidden -translate-y-1/2 z-20 transform -rotate-2">
        <div className="bg-neon-yellow border-y-4 border-ink py-3">
             <div className="flex whitespace-nowrap animate-marquee">
                {[...Array(10)].map((_, i) => (
                    <span key={i} className="text-xl font-bold font-mono text-ink mx-2 uppercase tracking-widest">
                        НАВЫКИ /// МАРКЕТИНГ /// СТРАТЕГИЯ ///
                    </span>
                ))}
             </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-32 md:py-40">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Left Column: Text & Bio */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-5xl md:text-6xl font-serif font-black mb-8 leading-[1.0]">
                    Не просто пишу. <br/>
                    <span className="relative inline-block px-1 mt-2">
                        <span className="relative z-10 text-ink">Я думаю.</span>
                        <span className="absolute bottom-2 left-0 w-full h-4 bg-neon-yellow -z-10"></span>
                    </span>
                </h2>

                <div className="space-y-6 text-lg text-ink/80 font-mono leading-relaxed">
                    <p>
                        Родился в Снежинске, жил музыкой в Петрозаводске. Музыка научила меня ритму, а маркетинг — структуре. 
                    </p>
                    <p>
                        Сегодня я создаю тексты, сочетая понимание психологии и четкий подход. Для меня текст — это не набор букв, а инструмент влияния.
                    </p>
                    
                    {/* Quote - Matching style of bio but slightly emphasized */}
                    <div className="pt-6 pl-6 mt-8 border-l-4 border-ink">
                        <p className="text-lg font-medium text-ink/80 leading-relaxed font-mono">
                            "Лучший копирайтер — тот, кто умеет думать, а не тот, кто знает все правила пунктуации."
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Right Column: Skills Buttons */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
            >
                {/* Decorative Blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gray-50 rounded-full blur-3xl -z-10"></div>
                
                <h3 className="text-xs font-black uppercase tracking-widest mb-8 flex items-center gap-2 font-mono">
                    <span className="w-3 h-3 bg-ink rounded-sm"></span>
                    Инструментарий
                </h3>

                <div className="flex flex-wrap gap-3">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ 
                                scale: 1.05,
                                rotate: Math.random() * 4 - 2
                            }}
                            className={`
                                px-6 py-3
                                bg-white 
                                border-2 ${skill.color}
                                text-ink font-bold 
                                rounded-xl
                                !cursor-none select-none
                                ${skill.textColor}
                                shadow-[4px_4px_0px_rgba(0,0,0,0.1)]
                                hover:shadow-none
                                hover:translate-x-[2px] hover:translate-y-[2px]
                                transition-all duration-200
                            `}
                        >
                            {skill.name}
                        </motion.div>
                    ))}
                </div>
            </motion.div>

        </div>
      </div>

      {/* Bottom Transition: Running Text Strip */}
      <div className="w-full bg-neon-yellow py-4 overflow-hidden transform rotate-1 origin-left scale-105 border-y-4 border-ink">
        <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(10)].map((_, i) => (
                <span key={i} className="text-xl font-bold font-mono text-ink mx-2 uppercase tracking-widest">
                    КЕЙСЫ /// ПОРТФОЛИО /// РАБОТЫ /// ОТЗЫВЫ ///
                </span>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;