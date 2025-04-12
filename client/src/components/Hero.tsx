import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Shield, Activity } from 'lucide-react';
import heroImage from '@/assets/hero-image.png';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-12 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold font-inter mb-6 leading-tight">
              Protección de <span className="gradient-text text-shadow">Inteligencia</span> para su Organización
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Especialistas en servicios de ciberseguridad e inteligencia OSINT. Protegemos su infraestructura digital con tecnología avanzada y metodologías innovadoras.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/80"
                onClick={() => {
                  const element = document.querySelector('#servicios');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Nuestros Servicios
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="glass hover:bg-white/10"
                onClick={() => {
                  const element = document.querySelector('#contacto');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contactar
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative p-2 glass rounded-xl overflow-hidden animate-float">
              <img 
                src={heroImage} 
                alt="Operaciones de Ciberseguridad e Inteligencia" 
                className="rounded-lg w-full h-auto shadow-lg transform hover:scale-105 transition duration-500"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 glass">
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse mr-2"></div>
                  <span className="font-mono text-sm">Monitoreo global de inteligencia</span>
                </div>
              </div>
            </div>
            
            <motion.div 
              className="absolute -bottom-6 -right-6 z-[-1] h-24 w-24 rounded-full bg-primary opacity-20"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 4 }}
            />
            <motion.div 
              className="absolute -top-6 -left-6 z-[-1] h-16 w-16 rounded-full bg-primary opacity-20"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 4, delay: 1 }}
            />
          </motion.div>
        </div>
      </div>
      
      {/* Animated cyber elements */}
      <motion.div 
        className="absolute top-1/4 left-1/4 h-40 w-40 rounded-full bg-primary opacity-5"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-1/4 h-64 w-64 rounded-full bg-primary opacity-5"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
      />

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <a 
            href="#servicios"
            onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector('#servicios');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-foreground/60 hover:text-primary transition-colors"
          >
            <Shield size={30} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
