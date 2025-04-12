import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// Importar los SVGs
import osintSvg from '@/assets/osint.svg';
import threatIntelligenceSvg from '@/assets/threat-intelligence.svg';
import cyberRiskSvg from '@/assets/cyber-risk.svg';
import digitalForensicsSvg from '@/assets/digital-forensics.svg';
import securityMonitoringSvg from '@/assets/security-monitoring.svg';
import securityTrainingSvg from '@/assets/security-training.svg';

const services = [
  {
    id: 1,
    icon: osintSvg,
    title: 'OSINT Investigations',
    description: 'Descubra amenazas y oportunidades mediante técnicas avanzadas de inteligencia de fuentes abiertas.',
    features: [
      'Análisis de perfiles digitales',
      'Monitoreo de presencia web',
      'Detección de información sensible'
    ]
  },
  {
    id: 2,
    icon: threatIntelligenceSvg,
    title: 'Threat Intelligence',
    description: 'Anticipamos y mitigamos amenazas cibernéticas antes de que impacten su organización.',
    features: [
      'Monitoreo de Dark Web',
      'Análisis de actores de amenaza',
      'Reportes de inteligencia'
    ]
  },
  {
    id: 3,
    icon: cyberRiskSvg,
    title: 'Cyber Risk Assessment',
    description: 'Evaluamos sus vulnerabilidades y fortalecemos su postura de seguridad con metodologías avanzadas.',
    features: [
      'Análisis de superficie de ataque',
      'Pruebas de penetración',
      'Recomendaciones de mitigación'
    ]
  },
  {
    id: 4,
    icon: digitalForensicsSvg,
    title: 'Digital Forensics',
    description: 'Investigación y análisis forense digital para la reconstrucción de incidentes y evidencias.',
    features: [
      'Recuperación de datos',
      'Análisis de malware',
      'Investigación de incidentes'
    ]
  },
  {
    id: 5,
    icon: securityMonitoringSvg,
    title: 'Security Monitoring',
    description: 'Vigilancia continua de su infraestructura para detectar y responder a amenazas en tiempo real.',
    features: [
      'Monitoreo 24/7',
      'Detección de amenazas',
      'Respuesta a incidentes'
    ]
  },
  {
    id: 6,
    icon: securityTrainingSvg,
    title: 'Security Training',
    description: 'Capacitación especializada en ciberseguridad e OSINT para su equipo técnico y empleados.',
    features: [
      'Concientización en seguridad',
      'Técnicas avanzadas de OSINT',
      'Respuesta a incidentes'
    ]
  }
];

const serviceVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.5,
    }
  })
};

const Services = () => {
  return (
    <section id="servicios" className="py-20 relative bg-black">
      <div className="container mx-auto px-6 z-10 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-inter mb-4 text-white">Servicios de Inteligencia</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Ofrecemos soluciones avanzadas de ciberseguridad e inteligencia OSINT para proteger su infraestructura y datos críticos.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 h-full flex flex-col hover:border-zinc-700 transition-all duration-300"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={serviceVariants}
            >
              <div className="mb-6">
                <img 
                  src={service.icon} 
                  alt={service.title} 
                  className="w-14 h-14 object-contain" 
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>
              <h3 className="text-xl font-bold font-inter mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400 mb-5 text-sm">
                {service.description}
              </p>
              <ul className="border-t border-zinc-800 pt-4 mt-auto">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-400 text-sm py-1.5">
                    {feature}
                  </li>
                ))}
              </ul>
              <Button 
                variant="ghost" 
                className="text-white hover:text-primary border-none mt-5 p-0 flex items-center justify-start gap-2"
                onClick={() => {
                  const element = document.querySelector('#contacto');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>Solicitar Servicio</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
