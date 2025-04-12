import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Users, Lock } from 'lucide-react';

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
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1588508065123-287b28e013da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Equipo de profesionales de ciberseguridad" 
                className="rounded-xl shadow-lg glass-card"
              />
              <motion.div 
                className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary opacity-10 rounded-xl"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
              />
              <motion.div 
                className="absolute -top-4 -left-4 w-32 h-32 bg-primary opacity-10 rounded-xl"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 3, delay: 1.5 }}
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
