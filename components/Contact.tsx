import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative pb-20 pt-10 px-6 bg-paper text-ink overflow-hidden z-10">
      
      <div className="max-w-5xl mx-auto relative z-10 text-center mt-10">
        
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <div className="inline-block mb-8">
                <div className="w-16 h-1 bg-ink mx-auto mb-2"></div>
                <div className="w-16 h-1 bg-ink mx-auto"></div>
            </div>

            <h2 className="text-6xl md:text-9xl font-serif font-black mb-12 leading-[0.9]">
                Обсудим <br/>
                <span className="relative inline-block px-4">
                    <span className="relative z-10">Проект</span>
                    <span className="absolute bottom-4 left-0 w-full h-8 bg-neon-yellow -z-0 transform -skew-x-12 opacity-100 mix-blend-multiply"></span>
                </span>
            </h2>

            <p className="text-xl md:text-2xl font-mono text-ink/70 mb-16 max-w-3xl mx-auto leading-relaxed">
                Я создаю тексты, которые резонируют с людьми. Блоги, статьи, рассылки, Голос Бренда.
            </p>

            <div className="relative flex flex-col md:flex-row justify-center gap-6 mb-24">
                {/* Neon Stamp Decor */}
                <div className="absolute -top-16 right-[10%] hidden md:block transform rotate-12 opacity-80 animate-pulse">
                     <div className="w-32 h-32 border-4 border-neon-blue rounded-full flex items-center justify-center shadow-[4px_4px_0px_#111]">
                        <span className="font-black text-neon-blue uppercase text-lg leading-tight text-center -rotate-12">Напиши<br/>мне</span>
                     </div>
                </div>

                <a href="https://vk.com/samicrew" target="_blank" rel="noopener noreferrer" className="group relative px-10 py-6 bg-ink text-white rounded-full text-xl font-bold overflow-hidden shadow-[8px_8px_0px_#ccff00] hover:translate-y-1 hover:shadow-none transition-all">
                    <span className="relative z-10 group-hover:text-ink transition-colors duration-300">ВКонтакте</span>
                    <div className="absolute inset-0 bg-neon-yellow transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>
                </a>
                <a href="https://t.me/trumkopi" target="_blank" rel="noopener noreferrer" className="px-10 py-6 border-4 border-ink text-ink rounded-full text-xl font-bold hover:bg-ink hover:text-white transition-colors flex items-center justify-center gap-2 group shadow-[8px_8px_0px_#111] hover:shadow-none hover:translate-y-1">
                    Telegram <ArrowUpRight className="text-ink group-hover:text-white transition-colors" />
                </a>
            </div>

            <div className="grid md:grid-cols-3 gap-12 border-t-4 border-ink pt-12 text-left text-sm tracking-widest uppercase relative">
                {/* Decorative Square */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-ink rotate-45 border-4 border-white"></div>

                <div>
                    <h4 className="font-bold text-ink mb-4 bg-neon-yellow inline-block px-1">Формат</h4>
                    <p className="font-mono text-ink/80 font-bold mt-2">Удаленка</p>
                    <p className="font-mono text-ink/80 font-bold">Работаю везде</p>
                </div>
                <div>
                    <h4 className="font-bold text-ink mb-4 bg-neon-blue inline-block px-1 text-white">Соцсети / Связь</h4>
                    <div className="flex flex-col gap-3 mt-2">
                        <a href="https://t.me/trumkopi" target="_blank" rel="noopener noreferrer" className="text-ink hover:text-neon-blue transition-colors font-bold flex items-center gap-2">
                            <span className="w-2 h-2 bg-ink rounded-full"></span> Telegram
                        </a>
                        <a href="mailto:kopitrum@yandex.ru" className="text-ink hover:text-neon-pink transition-colors font-bold flex items-center gap-2">
                             <span className="w-2 h-2 bg-ink rounded-full"></span> Email
                        </a>
                        <a href="tel:+79992949636" className="text-ink hover:text-neon-yellow transition-colors font-bold flex items-center gap-2">
                             <Phone size={14} strokeWidth={3} /> +7 (999) 294-96-36
                        </a>
                    </div>
                </div>
                <div>
                    <h4 className="font-bold text-ink mb-4 border border-ink inline-block px-1">Локация</h4>
                    <p className="text-ink font-bold mt-2">Петрозаводск, Россия</p>
                    <p className="text-ink/40 mt-4 normal-case tracking-normal font-medium">
                        created by <a href="https://t.me/fooxyj" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors underline decoration-1 underline-offset-2">fooxyj</a>
                    </p>
                </div>
            </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;