import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Satellite, Globe, Database, Target } from 'lucide-react';

interface DataPointProps {
  number: string;
  label: string;
  icon: React.ReactNode;
}

const DataPoint: React.FC<DataPointProps> = ({ number, label, icon }) => {
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
      className="data-point group"
    >
      <div className="flex justify-center mb-4 text-cosmic-400">
        {icon}
      </div>
      <div className="data-number group-hover:text-cosmic-300 transition-colors duration-300">
        {number}
      </div>
      <div className="data-label group-hover:text-cosmic-200 transition-colors duration-300">
        {label}
      </div>
    </motion.div>
  );
};

const SatellitesPage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="satellites-page relative z-10 min-h-screen flex items-center justify-center">
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
          SATELLITE
          <br />
          <span className="text-nebula-400">ANALYSIS</span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-full h-0.5 bg-gradient-to-r from-transparent via-nebula-500 to-transparent mb-8"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="section-content"
        >
          <p className="text-xl md:text-2xl lg:text-3xl text-cosmic-200 font-light leading-relaxed max-w-4xl mx-auto mb-8">
            Our <span className="text-nebula-400 font-semibold">satellite-based exoplanet detection</span> 
            leverages data from space missions like JWST, CHEOPS, and future missions to identify 
            exoplanets through advanced spectroscopic analysis.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-cosmic-300 font-light leading-relaxed max-w-4xl mx-auto mb-8">
            Using <span className="text-cosmic-400 font-semibold">deep learning models</span>, 
            we process atmospheric data, temperature variations, and orbital mechanics 
            from satellite observations to detect planetary signatures.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-cosmic-300 font-light leading-relaxed max-w-4xl mx-auto mb-8">
            Our AI systems can analyze <span className="text-nebula-400 font-semibold">multi-wavelength data</span> 
            from different satellite instruments, providing comprehensive planetary characterization 
            and habitability assessment.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="data-grid grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-16 max-w-6xl mx-auto"
        >
          <DataPoint
            number="JWST"
            label="Space Telescope"
            icon={<Satellite className="w-8 h-8" />}
          />
          <DataPoint
            number="CHEOPS"
            label="ESA Mission"
            icon={<Globe className="w-8 h-8" />}
          />
          <DataPoint
            number="AI"
            label="Detection Method"
            icon={<Database className="w-8 h-8" />}
          />
          <DataPoint
            number="∞"
            label="Possibilities"
            icon={<Target className="w-8 h-8" />}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-nebula-500 to-cosmic-500 text-white text-lg font-semibold rounded-full hover:from-nebula-400 hover:to-cosmic-400 transition-all duration-300"
          >
            Explore Satellite Data
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SatellitesPage;
