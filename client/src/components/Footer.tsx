import { Link } from 'wouter';
import { DFILogo } from '@/assets/logo';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-12 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-6 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <DFILogo className="h-10 w-10" />
              <span className="text-lg font-bold font-inter text-foreground">
                DarkFortress <span className="gradient-text">Intelligence</span>
              </span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Servicios de ciberseguridad e inteligencia OSINT para la protección de su organización.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition duration-300" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition duration-300" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition duration-300" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold font-inter mb-4">Servicios</h4>
            <ul className="space-y-2">
              {[
                { name: 'OSINT Investigations', href: '#servicios' },
                { name: 'Threat Intelligence', href: '#servicios' },
                { name: 'Cyber Risk Assessment', href: '#servicios' },
                { name: 'Digital Forensics', href: '#servicios' },
                { name: 'Security Monitoring', href: '#servicios' },
                { name: 'Security Training', href: '#servicios' }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(link.href);
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-muted-foreground hover:text-primary transition duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold font-inter mb-4">Recursos</h4>
            <ul className="space-y-2">
              {[
                { name: 'Blog', href: '#' },
                { name: 'Guías de Seguridad', href: '#' },
                { name: 'Informes de Amenazas', href: '#' },
                { name: 'Webinars', href: '#' },
                { name: 'Casos de Estudio', href: '#' }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold font-inter mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="text-primary mr-2 h-4 w-4" />
                <span className="text-muted-foreground">contacto@darkfortress.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-primary mr-2 h-4 w-4" />
                <span className="text-muted-foreground">+34 912 456 789</span>
              </li>
              <li className="flex items-center">
                <MapPin className="text-primary mr-2 h-4 w-4" />
                <span className="text-muted-foreground">Madrid, España</span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} DarkFortress Intelligence. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition duration-300">
              Política de Privacidad
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition duration-300">
              Términos de Servicio
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition duration-300">
              Política de Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
