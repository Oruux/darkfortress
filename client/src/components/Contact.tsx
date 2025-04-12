import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Por favor complete todos los campos requeridos.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "¡Mensaje enviado!",
        description: "Gracias por contactarnos. Le responderemos lo antes posible.",
      });
      setFormData({ name: '', email: '', service: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contacto" className="py-20 relative">
      <div className="container mx-auto px-6 z-10 relative">
        <motion.div 
          className="max-w-4xl mx-auto glass-card rounded-xl p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-inter mb-4 gradient-text">Contacte con Nosotros</h2>
            <p className="text-lg text-muted-foreground">
              ¿Necesita servicios de ciberseguridad e inteligencia? Nuestro equipo está listo para ayudarle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Su nombre"
                    className="w-full p-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="su@email.com"
                    className="w-full p-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="service">Servicio de Interés</Label>
                  <Select value={formData.service} onValueChange={handleSelectChange}>
                    <SelectTrigger id="service" className="w-full p-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary">
                      <SelectValue placeholder="Seleccione un servicio" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="osint">OSINT Investigations</SelectItem>
                      <SelectItem value="threat">Threat Intelligence</SelectItem>
                      <SelectItem value="risk">Cyber Risk Assessment</SelectItem>
                      <SelectItem value="forensics">Digital Forensics</SelectItem>
                      <SelectItem value="monitoring">Security Monitoring</SelectItem>
                      <SelectItem value="training">Security Training</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="¿Cómo podemos ayudarle?"
                    className="w-full p-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/80"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </Button>
              </form>
            </div>
            
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold font-inter mb-6">Información de Contacto</h3>
                <ul className="space-y-4">
                  <motion.li 
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="bg-primary bg-opacity-20 p-2 rounded-full flex items-center justify-center mt-1">
                      <Mail className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold font-inter">Email</h4>
                      <p className="text-muted-foreground">contacto@darkfortress.com</p>
                    </div>
                  </motion.li>
                  
                  <motion.li 
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <div className="bg-primary bg-opacity-20 p-2 rounded-full flex items-center justify-center mt-1">
                      <Phone className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold font-inter">Teléfono</h4>
                      <p className="text-muted-foreground">+34 912 456 789</p>
                    </div>
                  </motion.li>
                  
                  <motion.li 
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <div className="bg-primary bg-opacity-20 p-2 rounded-full flex items-center justify-center mt-1">
                      <MapPin className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold font-inter">Ubicación</h4>
                      <p className="text-muted-foreground">Madrid, España</p>
                    </div>
                  </motion.li>
                </ul>
                
                <motion.div 
                  className="mt-8"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <h4 className="font-bold font-inter mb-3">Conecte con nosotros</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="bg-primary bg-opacity-20 p-2 rounded-full text-primary hover:bg-primary hover:text-white transition duration-300"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a 
                      href="#" 
                      className="bg-primary bg-opacity-20 p-2 rounded-full text-primary hover:bg-primary hover:text-white transition duration-300"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a 
                      href="#" 
                      className="bg-primary bg-opacity-20 p-2 rounded-full text-primary hover:bg-primary hover:text-white transition duration-300"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                className="glass mt-8 p-4 rounded-lg"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse mr-2"></div>
                  <span className="text-sm">Estamos disponibles 24/7 para emergencias de ciberseguridad</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
