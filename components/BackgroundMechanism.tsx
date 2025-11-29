import React from 'react';
import { motion } from 'framer-motion';

const BackgroundMechanism: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-paper">
      {/* 
         PERFORMANCE FIX: 
         Animated blurry orbs are hidden on mobile (hidden md:block) 
         to prevent frame drops and battery drain. 
      */}
      
      {/* Gradient Orb 1 */}
      <motion.div 
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="hidden md:block absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-neon-yellow rounded-full mix-blend-multiply filter blur-[80px] opacity-20 will-change-transform" 
      />
      
      {/* Gradient Orb 2 */}
      <motion.div 
        animate={{ 
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="hidden md:block absolute top-[40%] left-[-10%] w-[35vw] h-[35vw] bg-neon-blue rounded-full mix-blend-multiply filter blur-[80px] opacity-10 will-change-transform" 
      />

      {/* Gradient Orb 3 */}
      <motion.div 
        animate={{ 
          x: [0, 50, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="hidden md:block absolute bottom-[-10%] right-[20%] w-[30vw] h-[30vw] bg-neon-pink rounded-full mix-blend-multiply filter blur-[80px] opacity-10 will-change-transform" 
      />
      
      {/* Static gradient mesh for mobile (lighter alternative) */}
      <div className="md:hidden absolute top-0 right-0 w-[80vw] h-[80vw] bg-neon-yellow/10 rounded-full filter blur-[60px] translate-x-1/2 -translate-y-1/2"></div>
      <div className="md:hidden absolute bottom-0 left-0 w-[80vw] h-[80vw] bg-neon-blue/10 rounded-full filter blur-[60px] -translate-x-1/2 translate-y-1/2"></div>

      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
            backgroundImage: `linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
        }}
      ></div>
    </div>
  );
};

export default BackgroundMechanism;