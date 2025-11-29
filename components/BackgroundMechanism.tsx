import React from 'react';
import { motion } from 'framer-motion';

const BackgroundMechanism: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-paper">
      {/* Gradient Orbs */}
      <motion.div 
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-neon-yellow rounded-full mix-blend-multiply filter blur-[100px] opacity-20" 
      />
      
      <motion.div 
        animate={{ 
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[40%] left-[-10%] w-[35vw] h-[35vw] bg-neon-blue rounded-full mix-blend-multiply filter blur-[100px] opacity-10" 
      />

      <motion.div 
        animate={{ 
          x: [0, 50, 0],
          y: [0, 50, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[-10%] right-[20%] w-[30vw] h-[30vw] bg-neon-pink rounded-full mix-blend-multiply filter blur-[100px] opacity-10" 
      />
      
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