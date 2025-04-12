import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Users, Lock } from 'lucide-react';
import { DFILogo } from '@/assets/logo';
import { useState, useEffect } from 'react';

// Componente para texto tipo terminal
const TerminalText = ({ text, className, delay = 0.05 }: { text: string, className?: string, delay?: number }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, delay * 1000);
      
      return () => clearTimeout(timeout);
    } else {
      // Cuando termina de escribir, parpadea el cursor
      const interval = setInterval(() => {
        setCursorVisible(prev => !prev);
      }, 500);
      
      return () => clearInterval(interval);
    }
  }, [currentIndex, text, delay]);
  
  return (
    <div className={className}>
      <span>{displayText}</span>
      {currentIndex < text.length || cursorVisible ? (
        <span className="text-primary">|</span>
      ) : (
        <span> </span>
      )}
    </div>
  );
};

const About = () => {
  return (
    <section id="sobre-nosotros" className="py-20 relative">
      <div className="container mx-auto px-6 z-10 relative">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-12 md:mb-0 md:pr-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative flex items-center justify-center w-full h-full">
              <div className="rounded-xl p-16 shadow-lg relative flex flex-col items-center justify-center w-full bg-black">
                <motion.div
                  className="relative"
                  animate={{
                    opacity: [0.9, 1, 0.9]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut"
                  }}
                >
                  {/* Capas múltiples de efectos de resplandor */}
                  <div className="absolute inset-0 opacity-50" style={{ 
                    filter: 'blur(30px)',
                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, rgba(76, 29, 149, 0.2) 50%, rgba(0, 0, 0, 0) 100%)'
                  }}></div>
                  
                  <div className="absolute inset-0 opacity-70" style={{ 
                    filter: 'blur(15px)',
                    background: 'radial-gradient(circle, rgba(167, 139, 250, 0.5) 0%, rgba(139, 92, 246, 0.2) 60%, rgba(0, 0, 0, 0) 100%)'
                  }}></div>
                  
                  {/* Logo con efecto neón brillante */}
                  <div className="relative z-10" style={{ 
                    filter: 'drop-shadow(0 0 8px rgba(167, 139, 250, 0.9)) drop-shadow(0 0 20px rgba(139, 92, 246, 0.5))'
                  }}>
                    <motion.div
                      animate={{
                        filter: ['drop-shadow(0 0 8px rgba(167, 139, 250, 0.9))', 'drop-shadow(0 0 12px rgba(167, 139, 250, 1))', 'drop-shadow(0 0 8px rgba(167, 139, 250, 0.9))']
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut"
                      }}
                    >
                      <DFILogo className="h-64 w-64" />
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* Texto DFI grande con efecto neón */}
                <motion.div 
                  className="mt-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <motion.h2 
                    className="text-6xl font-bold tracking-widest mt-4"
                    style={{ 
                      color: 'white',
                      textShadow: '0 0 10px rgba(167, 139, 250, 0.8), 0 0 20px rgba(139, 92, 246, 0.6)'
                    }}
                    animate={{
                      textShadow: [
                        '0 0 10px rgba(167, 139, 250, 0.8), 0 0 20px rgba(139, 92, 246, 0.6)',
                        '0 0 15px rgba(167, 139, 250, 1), 0 0 30px rgba(139, 92, 246, 0.8)',
                        '0 0 10px rgba(167, 139, 250, 0.8), 0 0 20px rgba(139, 92, 246, 0.6)'
                      ]
                    }}
                    transition={{
                      repeat: Infinity, 
                      duration: 2.5,
                      ease: "easeInOut"
                    }}
                  >
                    DFI
                  </motion.h2>
                </motion.div>
                
                <motion.div 
                  className="text-center mt-8 pt-4 px-2 max-w-sm"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <h4 className="text-white font-mono font-bold mb-3">
                    $ <span className="text-green-400">cat</span> <span className="text-primary">zorro_guardian.txt</span>
                  </h4>
                  <div className="bg-black bg-opacity-60 p-3 rounded-md border border-slate-800 font-mono">
                    <TerminalText 
                      text="Como el zorro, nos movemos sigilosos y astutos en el ámbito digital, detectando amenazas antes de que ataquen. Combinamos inteligencia, adaptabilidad y perspicacia para proteger lo que más importa."
                      className="text-gray-300 text-xs text-left leading-relaxed" 
                      delay={0.02}
                    />
                  </div>
                </motion.div>
              </div>
              <motion.div 
                className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary opacity-20 rounded-xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 4 }}
              />
              <motion.div 
                className="absolute -top-4 -left-4 w-32 h-32 bg-primary opacity-20 rounded-xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 4, delay: 2 }}
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold font-inter mb-6">
              Sobre <span className="gradient-text">DarkFortress Intelligence</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              En DarkFortress Intelligence, somos especialistas en servicios avanzados de ciberseguridad e inteligencia OSINT. Nuestro equipo de profesionales altamente capacitados combina experiencia técnica con conocimiento profundo de las amenazas cibernéticas actuales.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Nuestra misión es proteger la información crítica de las organizaciones mediante la aplicación de metodologías innovadoras y tecnologías de vanguardia en el campo de la inteligencia y seguridad digital.
            </p>
            
            {/* Valores clave */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <motion.div 
                className="flex items-start space-x-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="bg-primary bg-opacity-20 p-2 rounded-full flex items-center justify-center mt-1">
                  <ShieldCheck className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold font-inter">Protección Integral</h3>
                  <p className="text-muted-foreground text-sm">Seguridad completa para todos los vectores de ataque.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start space-x-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="bg-primary bg-opacity-20 p-2 rounded-full flex items-center justify-center mt-1">
                  <TrendingUp className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold font-inter">Innovación Constante</h3>
                  <p className="text-muted-foreground text-sm">Adoptamos tecnologías emergentes para anticipar amenazas.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start space-x-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="bg-primary bg-opacity-20 p-2 rounded-full flex items-center justify-center mt-1">
                  <Users className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold font-inter">Equipo Especializado</h3>
                  <p className="text-muted-foreground text-sm">Profesionales con certificaciones internacionales.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start space-x-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <div className="bg-primary bg-opacity-20 p-2 rounded-full flex items-center justify-center mt-1">
                  <Lock className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold font-inter">Confidencialidad</h3>
                  <p className="text-muted-foreground text-sm">Máxima discreción en todos nuestros servicios.</p>
                </div>
              </motion.div>
            </div>
            
            <Button 
              className="bg-primary hover:bg-primary/80"
              onClick={() => {
                const element = document.querySelector('#contacto');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contáctanos
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
