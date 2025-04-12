import { motion } from 'framer-motion';
import { SearchIcon, Database, BrainCircuit, Globe } from 'lucide-react';

// Dashboard mockup component
const DashboardMockup = () => {
  return (
    <motion.div 
      className="glass-card rounded-xl p-4 mb-16 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-background p-6 rounded-lg">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-mono text-xl font-bold">Security Operations Dashboard</h3>
          <div className="flex space-x-2">
            <div className="h-3 w-3 rounded-full bg-destructive"></div>
            <div className="h-3 w-3 rounded-full bg-primary"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <motion.div 
            className="glass p-4 rounded-lg"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <h4 className="font-mono text-sm mb-2">Threat Level</h4>
            <div className="flex items-end space-x-2">
              <span className="text-3xl font-bold text-primary">Medium</span>
              <span className="text-primary text-sm">+5.2%</span>
            </div>
            <div className="h-2 w-full bg-background mt-2 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '66.7%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-primary rounded-full"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="glass p-4 rounded-lg"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <h4 className="font-mono text-sm mb-2">Active Threats</h4>
            <div className="flex items-end space-x-2">
              <span className="text-3xl font-bold text-destructive">27</span>
              <span className="text-destructive text-sm">+12.8%</span>
            </div>
            <div className="h-2 w-full bg-background mt-2 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '75%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
                className="h-full bg-destructive rounded-full"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="glass p-4 rounded-lg"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <h4 className="font-mono text-sm mb-2">Security Score</h4>
            <div className="flex items-end space-x-2">
              <span className="text-3xl font-bold text-green-500">76.4%</span>
              <span className="text-green-500 text-sm">+2.3%</span>
            </div>
            <div className="h-2 w-full bg-background mt-2 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '76.4%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.7 }}
                className="h-full bg-green-500 rounded-full"
              />
            </div>
          </motion.div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="glass p-4 rounded-lg lg:w-2/3">
            <h4 className="font-mono text-sm mb-4">Threat Activity Timeline</h4>
            <div className="h-40 w-full">
              {/* Chart mockup */}
              <div className="h-full w-full flex items-end justify-around px-2">
                {[25, 40, 60, 80, 100, 75, 66, 40, 60, 50, 58, 60].map((height, index) => (
                  <motion.div
                    key={index}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.05 * index }}
                    className={`w-6 ${index === 4 ? 'bg-destructive' : 'bg-primary'} rounded-t-sm`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="glass p-4 rounded-lg lg:w-1/3">
            <h4 className="font-mono text-sm mb-4">Recent Alerts</h4>
            <ul className="space-y-3">
              {[
                { alert: 'Brute Force Attack', time: '2m ago', severity: 'high' },
                { alert: 'Suspicious Login', time: '15m ago', severity: 'medium' },
                { alert: 'Data Exfiltration Attempt', time: '27m ago', severity: 'medium' },
                { alert: 'Firewall Update', time: '43m ago', severity: 'low' }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.15 * index + 1 }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <div 
                      className={`h-2 w-2 rounded-full mr-2 ${
                        item.severity === 'high' ? 'bg-destructive' : 
                        item.severity === 'medium' ? 'bg-primary' : 'bg-green-500'
                      }`}
                    />
                    <span className="font-mono text-xs">{item.alert}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{item.time}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const capabilities = [
  {
    id: 1,
    icon: <SearchIcon className="text-2xl text-primary" />,
    title: 'OSINT Avanzado',
    description: 'Obtención y análisis de información de fuentes abiertas con herramientas especializadas.'
  },
  {
    id: 2,
    icon: <Database className="text-2xl text-primary" />,
    title: 'Big Data Analytics',
    description: 'Análisis masivo de datos para identificar patrones y tendencias de seguridad.'
  },
  {
    id: 3,
    icon: <BrainCircuit className="text-2xl text-primary" />,
    title: 'IA & Machine Learning',
    description: 'Algoritmos de inteligencia artificial para la detección proactiva de amenazas.'
  },
  {
    id: 4,
    icon: <Globe className="text-2xl text-primary" />,
    title: 'Cobertura Global',
    description: 'Monitoreo de amenazas en múltiples idiomas y regiones geográficas.'
  }
];

const Capabilities = () => {
  return (
    <section id="capacidades" className="py-20 relative bg-secondary">
      <div className="container mx-auto px-6 z-10 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-inter mb-4 gradient-text">Nuestras Capacidades</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Utilizamos tecnologías de última generación y metodologías avanzadas para ofrecer servicios de inteligencia de élite.
          </p>
        </motion.div>
        
        <div className="relative">
          <DashboardMockup />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.id}
                className="glass-card rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary bg-opacity-20 mb-4">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-bold font-inter mb-2">{capability.title}</h3>
                <p className="text-muted-foreground">
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
