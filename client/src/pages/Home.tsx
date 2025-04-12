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
    >
      <NetworkBackground />
      
      <Navbar />
      
      <main>
        <Hero />
        
        <AngledDivider />
        
        <Services />
        
        <AngledDivider direction="up" />
        
        <About />
        
        <Capabilities />
        
        <Contact />
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default Home;
