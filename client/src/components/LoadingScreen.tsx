import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DFILogo } from '@/assets/logo';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

// Animación de texto por letras
const TextReveal = ({ text, className, delay = 0, textColor = "text-white" }: { 
  text: string; 
  className?: string; 
  delay?: number;
  textColor?: string;
}) => {
  return (
    <div className={`${className} overflow-hidden`}>
      <div className="flex">
        {text.split('').map((char, i) => (
          <motion.span
            key={i}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              duration: 0.4, 
              delay: delay + i * 0.05,
              ease: "easeOut"
            }}
            className={`${char === ' ' ? 'mr-2' : ''} ${textColor}`}
          >
            {char}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [showLogo, setShowLogo] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  
  useEffect(() => {
    // Secuencia de animación (reducida en tiempo)
    const timer1 = setTimeout(() => setShowLogo(true), 300);
    const timer2 = setTimeout(() => {
      setShowLoading(false);
      onLoadingComplete();
    }, 3500); // Reducido de 5500 a 3500 ms
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onLoadingComplete]);
  
  return (
    <AnimatePresence>
      {showLoading && (
        <motion.div
          className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Logo principal con glow effect */}
          <div className="relative mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: showLogo ? 1 : 0,
                scale: showLogo ? 1 : 0.8,
              }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut",
              }}
              className="relative"
            >
              <div className="w-24 h-24 relative z-10" style={{ filter: 'drop-shadow(0 0 15px rgba(168, 85, 247, 0.5))' }}>
                <DFILogo className="w-full h-full" />
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-purple-600 opacity-30 rounded-full blur-2xl z-0" />
            </motion.div>
          </div>
          
          {/* Text animation */}
          {showLogo && (
            <div className="mt-4 flex flex-col items-center">
              <div className="font-inter font-bold text-3xl md:text-4xl flex">
                <TextReveal text="Dark" delay={0.6} className="mr-0" textColor="text-white" />
                <TextReveal text="Fortress" delay={0.9} className="mr-0" textColor="text-white" />
              </div>
              <div className="font-inter font-bold text-3xl md:text-4xl flex mt-1">
                <TextReveal text="Intelligence" delay={1.2} textColor="text-primary" />
              </div>
            </div>
          )}
          
          {/* Loading indicators */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="mt-12"
          >
            <div className="flex space-x-3">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="h-2 w-2 rounded-full bg-primary"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "loop",
                    delay: index * 0.2
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;