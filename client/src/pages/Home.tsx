import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Capabilities from '@/components/Capabilities';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AngledDivider from '@/components/AngledDivider';
import NetworkBackground from '@/components/NetworkBackground';
import { motion } from 'framer-motion';

const Home = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-x-hidden"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      {/* Fondo con efecto de red */}
      <NetworkBackground />
      
      {/* Barra de navegación */}
      <header>
        <Navbar />
      </header>
      
      {/* Contenido principal */}
      <main id="main-content" role="main">
        {/* Sección Hero */}
        <section aria-labelledby="hero-heading">
          <Hero />
        </section>
        
        <AngledDivider topColor="bg-background" bottomColor="bg-black" />
        
        {/* Sección de Servicios */}
        <section aria-labelledby="services-heading">
          <Services />
        </section>
        
        <AngledDivider direction="up" topColor="bg-black" bottomColor="bg-background" />
        
        {/* Sección Acerca de */}
        <section aria-labelledby="about-heading">
          <About />
        </section>
        
        {/* Sección de Capacidades */}
        <section aria-labelledby="capabilities-heading">
          <Capabilities />
        </section>
        
        {/* Sección de Contacto */}
        <section aria-labelledby="contact-heading">
          <Contact />
        </section>
      </main>
      
      {/* Pie de página */}
      <footer>
        <Footer />
      </footer>
    </motion.div>
  );
};

export default Home;
