import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, MessageCircle, Search, Bell, CheckCircle2, X } from 'lucide-react';
import Contact from './Contact';

interface PortfolioPageProps {
  onBack: () => void;
}

interface TaskItem {
  id: number;
  title: string;
  task: string;
  tags: string[];
  imageUrl?: string;
}

const SectionHeader = ({ title, icon: Icon, colorClass }: { title: string, icon: any, colorClass: string }) => (
  <div className="flex items-center gap-4 mb-10">
    <div className={`p-3 rounded-full border-2 border-ink bg-white shadow-[4px_4px_0px_#111] ${colorClass}`}>
      <Icon size={24} className="text-ink" />
    </div>
    <h3 className="text-2xl md:text-5xl font-serif font-black text-ink uppercase break-words">{title}</h3>
  </div>
);

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const Card: React.FC<{ item: TaskItem; index: number; onClick: (item: TaskItem) => void }> = ({ item, index, onClick }) => (
  <motion.div 
    variants={cardVariants}
    onClick={() => onClick(item)}
    className="group relative bg-white border-2 border-ink p-6 md:p-8 rounded-[2rem] shadow-[8px_8px_0px_rgba(0,0,0,0.1)] hover:shadow-[12px_12px_0px_#ccff00] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col cursor-pointer md:cursor-none hover:border-neon-blue active:scale-[0.98]"
  >
    <div className="absolute top-6 right-6 text-4xl font-serif font-black text-ink/5 select-none group-hover:text-ink/10 transition-colors">
      {String(index + 1).padStart(2, '0')}
    </div>
    
    <div className="flex flex-wrap gap-2 mb-6 relative z-10 pr-8">
      {item.tags.map((tag: string, i: number) => (
        <span key={i} className="px-3 py-1 bg-paper-off border border-ink/20 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider font-mono text-ink/60 group-hover:border-ink/40 transition-colors">
          {tag}
        </span>
      ))}
    </div>

    <h3 className="text-xl md:text-2xl font-serif font-black text-ink mb-4 leading-tight group-hover:text-neon-blue transition-colors block break-words hyphens-auto">
        {item.title}
    </h3>

    <div className="flex flex-col gap-2 mb-4 flex-grow">
      <span className="bg-ink text-white px-2 py-1 text-[10px] font-bold uppercase rounded-sm self-start tracking-widest">
        Задача
      </span>
      <p className="text-gray-800 font-medium leading-relaxed text-sm font-mono line-clamp-4">
        {item.task}
      </p>
    </div>

    <div className="mt-auto pt-6 border-t border-ink/10 flex justify-between items-center opacity-70 group-hover:opacity-100 transition-opacity duration-300">
      <span className="text-xs font-bold uppercase tracking-widest text-neon-blue flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse"></span>
        Смотреть
      </span>
      <CheckCircle2 size={18} className="text-neon-blue" />
    </div>
  </motion.div>
);

const PortfolioPage: React.FC<PortfolioPageProps> = ({ onBack }) => {
  const [selectedTask, setSelectedTask] = useState<TaskItem | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const socialPosts: TaskItem[] = [
    {
      id: 1,
      title: "Недвижимость в Telegram",
      task: "Написать пост для Telegram-канала в его стиле и тоне, чтобы вовлечь аудиторию и объяснить, какие выгоды клиент получает от покупки панельного дома. Задача состояла в том, чтобы уйти от сухих характеристик к живым сценариям использования.",
      tags: ["Telegram", "Tone of Voice"],
      imageUrl: "https://i.postimg.cc/1RMkw65J/photo-2025-11-07-090-jpeg.webp"
    },
    {
      id: 2,
      title: "Адаптация B2B презентации",
      task: "Изучить презентацию, выделить ключевые УТП и адаптировать их под текст для Telegram-канала — сохранив стиль канала, но переведя формальные преимущества в понятные и привлекательные для подписчиков выгоды.",
      tags: ["УТП", "Адаптация"],
      imageUrl: "https://i.postimg.cc/vmcrqJWr/2.webp"
    },
    {
      id: 3,
      title: "Fashion Storytelling",
      task: "Создавать для бренда женской модульной одежды тексты в социальных сетях, написанные живым, поэтичным языком с использованием метафор и смысловой глубины, чтобы передать ценность и эмоцию продукта.",
      tags: ["Fashion", "Сторителлинг"],
      imageUrl: "https://i.postimg.cc/44zzSb9T/3.webp"
    },
    {
      id: 4,
      title: "Виральный Хук",
      task: "Написать текст для поста, который цепляет с первой фразы и легко читается. Использована техника 'Скользкая горка', где каждое предложение заставляет читать следующее.",
      tags: ["Хук", "Копирайтинг"],
      imageUrl: "https://placehold.co/800x600/ccff00/111?text=Viral+Hook"
    },
    {
      id: 5,
      title: "Личный бренд под ключ",
      task: "Находиться на постоянной связи с заказчиком, выстраивать вести его личный Telegram-канал в соответствии с его тоном и стилистикой, включая проведение исследования, составление контент-плана и написание постов.",
      tags: ["Личный бренд", "Контент-план"],
      imageUrl: "https://placehold.co/800x600/111111/FFF?text=Personal+Brand"
    },
    {
      id: 6,
      title: "eCommerce Описания",
      task: "Создавать описания товаров, избегая сухого продающего стиля, через вовлекающие посты с акцентом на решении болей аудитории и подчеркиванием выгод. Достигнута высокая вовлеченность и рост продаж.",
      tags: ["eCommerce", "Продажи"],
      imageUrl: "https://placehold.co/800x600/e0e0e0/111?text=eCommerce"
    },
    {
      id: 7,
      title: "Вирусный пост для студии",
      task: "Разрабатывать вовлекающие тексты для студии звукозаписи в коротком формате. Пост набрал 50 000 просмотров во «ВКонтакте» и вошёл в топ паблика благодаря инсайтовой теме и провокационному заголовку.",
      tags: ["Viral", "ВКонтакте", "Результат"],
      imageUrl: "https://placehold.co/800x600/ff4500/FFF?text=Viral+Post"
    }
  ];

  const seoTexts: TaskItem[] = [
    {
      id: 1,
      title: "SEO-Копирайтинг",
      task: "Написать короткий и информационный пост, соблюдая структуру и определенное количество ключевых слов, сохраняя при этом человечность и читабельность текста.",
      tags: ["SEO", "Структура"],
      imageUrl: "https://placehold.co/800x600/00bcd4/FFF?text=SEO+Copywriting"
    }
  ];

  const pushNotifications: TaskItem[] = [
    {
      id: 1,
      title: "Push для Тату-студии",
      task: "Разработать цепкие и креативные пуш-уведомления для тату-студии. Результат: поток клиентов увеличился практически в два раза за счет своевременных и дерзких напоминаний.",
      tags: ["Push", "Рост x2"],
      imageUrl: "https://placehold.co/800x600/111/FFF?text=Tattoo+Push"
    },
    {
      id: 2,
      title: "Push для Ресторана",
      task: "Разработать цепкие и креативные пуш-уведомления для ресторана, вызывающие аппетит и желание забронировать столик. Клиенты отметили оригинальность и запоминаемость текстов.",
      tags: ["HoReCa", "Креатив"],
      imageUrl: "https://placehold.co/800x600/ff9800/FFF?text=Restaurant+Push"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#F5F5F5] pt-24 pb-0 relative"
    >
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button 
            onClick={onBack}
            className="pointer-events-auto flex items-center gap-3 px-4 py-2 md:px-6 md:py-3 bg-white border-2 border-ink rounded-full shadow-[4px_4px_0px_#111] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all group"
          >
            <ArrowLeft size={18} className="md:w-5 md:h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold font-mono uppercase tracking-wider text-sm md:text-base">Назад</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="py-12 md:py-32"
        >
            <div>
                <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif font-black text-ink mb-6 md:mb-8 leading-[0.9]">
                    Архив <br/>
                    <span className="relative inline-block px-2">
                        <span className="relative z-10">Задач</span>
                        <span className="absolute bottom-2 md:bottom-4 left-0 w-full h-4 md:h-8 bg-neon-blue -z-0 transform skew-x-12 opacity-100 mix-blend-multiply"></span>
                    </span>
                </h1>
                <p className="text-base md:text-2xl font-mono text-ink/60 max-w-2xl leading-relaxed border-l-4 border-neon-yellow pl-4 md:pl-6">
                    Здесь собраны примеры реальных задач и подходов к их решению. Нажмите на карточку, чтобы узнать подробности.
                </p>
            </div>
        </motion.div>

        {/* Social Media Section */}
        <section className="mb-20 md:mb-32">
            <SectionHeader title="Посты для соцсетей" icon={MessageCircle} colorClass="bg-neon-yellow/20" />
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
            >
                {socialPosts.map((item, idx) => (
                    <Card key={item.id} item={item} index={idx} onClick={setSelectedTask} />
                ))}
            </motion.div>
        </section>

        {/* SEO Section */}
        <section className="mb-20 md:mb-32">
            <SectionHeader title="SEO Тексты" icon={Search} colorClass="bg-neon-blue/20" />
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {seoTexts.map((item, idx) => (
                    <Card key={item.id} item={item} index={idx} onClick={setSelectedTask} />
                ))}
            </motion.div>
        </section>

        {/* Push Section */}
        <section className="mb-20 md:mb-32">
            <SectionHeader title="Push Уведомления" icon={Bell} colorClass="bg-neon-pink/20" />
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {pushNotifications.map((item, idx) => (
                    <Card key={item.id} item={item} index={idx} onClick={setSelectedTask} />
                ))}
            </motion.div>
        </section>

      </div>

      {/* Footer */}
      <div className="relative z-10">
        <Contact />
      </div>

      {/* Task Modal */}
      <AnimatePresence>
        {selectedTask && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedTask(null)}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-ink/80 backdrop-blur-sm"
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 50 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 50 }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white w-full max-w-5xl max-h-[85vh] md:max-h-[90vh] overflow-y-auto rounded-3xl md:rounded-[2.5rem] shadow-2xl relative border-4 border-ink"
                >
                    <button
                        onClick={() => setSelectedTask(null)}
                        className="absolute top-4 right-4 z-20 p-2 md:p-3 bg-white rounded-full border-2 border-ink hover:bg-neon-yellow transition-colors shadow-[2px_2px_0px_#111] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] cursor-pointer"
                    >
                        <X size={20} className="md:w-6 md:h-6 text-ink" strokeWidth={3} />
                    </button>

                    <div className="grid md:grid-cols-2 gap-0">
                        {/* Image Side */}
                        <div className="bg-paper-off border-b-4 md:border-b-0 md:border-r-4 border-ink flex items-center justify-center p-6 md:p-12 min-h-[200px] relative overflow-hidden">
                             <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `radial-gradient(#111 1px, transparent 1px)`, backgroundSize: '20px 20px' }}></div>
                             {selectedTask.imageUrl ? (
                                <img src={selectedTask.imageUrl} alt={selectedTask.title} className="w-full h-auto rounded-xl shadow-[8px_8px_0px_rgba(0,0,0,0.1)] border-2 border-ink relative z-10" />
                             ) : (
                                <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center border-2 border-dashed border-ink/20">
                                    <span className="text-gray-400 font-mono">No Preview</span>
                                </div>
                             )}
                        </div>
                        
                        {/* Content Side */}
                        <div className="p-6 md:p-12 flex flex-col bg-white">
                             <div className="flex flex-wrap gap-2 mb-6">
                                {selectedTask.tags.map((tag, i) => (
                                    <span key={i} className="px-3 py-1 bg-neon-yellow border border-ink rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider font-mono text-ink">
                                    {tag}
                                    </span>
                                ))}
                            </div>
                            
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-black text-ink mb-6 leading-tight break-words hyphens-auto">
                                {selectedTask.title}
                            </h2>
                            
                            <div className="mb-2">
                                <span className="inline-block bg-ink text-white px-2 py-1 text-xs font-bold uppercase rounded-sm tracking-widest mb-3 transform -skew-x-6">
                                    Описание задачи
                                </span>
                            </div>

                            <div className="prose prose-lg text-ink/80 font-mono leading-relaxed mb-8 text-sm md:text-base">
                                <p>{selectedTask.task}</p>
                            </div>
                            
                            <div className="mt-auto pt-8 border-t-2 border-ink/5">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-neon-blue/10 rounded-full text-neon-blue">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-ink uppercase text-sm tracking-wider">Статус</p>
                                        <p className="text-neon-blue font-bold text-xs uppercase tracking-widest">Успешно завершено</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default PortfolioPage;