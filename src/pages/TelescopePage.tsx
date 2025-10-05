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
      className="group bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-white/20 transition-all duration-300 min-h-[200px] flex flex-col justify-center items-center"
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

          <div className="mt-16 flex justify-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-5xl"
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
          </div>
        </motion.div>
      </section>

      {/* Hugging Face Full-Width Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative w-full py-16 bg-black border-t border-b border-purple-500/20 overflow-hidden"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(147, 51, 234, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)
          `
        }}
      >
        {/* Animated stars background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.7 + 0.3
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10 mb-10 px-4"
        >
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-center mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-transparent bg-clip-text animate-pulse">
              Try Our AI Model
            </span>
          </h3>
          <p className="text-center text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Experience our <span className="text-purple-400 font-semibold">Kepler exoplanet detection</span> model live
          </p>
        </motion.div>
        <div className="relative z-10 w-full px-4 md:px-8 lg:px-16">
          <div className="w-full h-[85vh] max-w-[1800px] mx-auto">
            <iframe
              src="https://adilbai-kepler-automated-detection.hf.space"
              width="100%"
              height="100%"
              style={{ border: 'none', borderRadius: '12px' }}
              title="Kepler Automated Detection"
              allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; microphone; midi; payment; usb; vr; xr-spatial-tracking"
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default TelescopePage;