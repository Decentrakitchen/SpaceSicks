import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Star, BarChart3 } from 'lucide-react';

interface DataPointProps {
  number: string;
  label: string;
  icon: React.ReactNode;
  description?: string;
}

const DataPoint: React.FC<DataPointProps> = ({ number, label, icon, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="group bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-white/20 transition-all duration-300 h-48 flex flex-col justify-center"
    >
      <div className="flex justify-center mb-4 text-blue-400">
        {icon}
      </div>
      <div className="group-hover:text-blue-300 transition-colors duration-300 text-white text-3xl font-bold mb-2">
        {number}
      </div>
      <div className="group-hover:text-gray-200 transition-colors duration-300 text-gray-300 text-sm font-medium mb-2">
        {label}
      </div>
      {description && (
        <div className="text-gray-400 text-xs">
          {description}
        </div>
      )}
    </motion.div>
  );
};

const TelescopePage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="telescope-page relative z-10 min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="text-center w-full px-4"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black leading-none mb-8 text-white"
          >
            AI MODEL
            <br />
            <span className="text-purple-400">EXOPLANET DETECTION</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-12"
          />

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-200 font-light leading-relaxed max-w-4xl mx-auto mb-12"
          >
            Our <span className="text-purple-400 font-semibold">trained AI model</span>
            processes telescope data to predict exoplanets
            through machine learning and deep neural networks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="data-grid grid grid-cols-3 gap-6 md:gap-8 mt-16 max-w-6xl mx-auto"
          >
            <DataPoint
              number="5000+"
              label="Exoplanets Found"
              icon={<Star className="w-8 h-8" />}
              description="Total discoveries"
            />
            <DataPoint
              number="92%"
              label="Accuracy Rate"
              icon={<Target className="w-8 h-8" />}
              description="AI detection"
            />
            <DataPoint
              number="24/7"
              label="Monitoring"
              icon={<BarChart3 className="w-8 h-8" />}
              description="Continuous analysis"
            />
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
};

export default TelescopePage;