import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Radio, Globe, Database, Target } from 'lucide-react';

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

const SatellitesPage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="satellites-page relative z-10">
    <section className="min-h-screen flex items-center justify-center">
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
          <span className="text-purple-400">ANALYSIS</span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-8"
        />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="section-content"
        >
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 font-light leading-relaxed max-w-4xl mx-auto mb-8">
            Our <span className="text-purple-400 font-semibold">satellite-based exoplanet detection</span> 
            leverages data from space missions like JWST, CHEOPS, and future missions to identify 
            exoplanets through advanced spectroscopic analysis.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto mb-8">
            Using <span className="text-blue-400 font-semibold">deep learning models</span>, 
            we process atmospheric data, temperature variations, and orbital mechanics 
            from satellite observations to detect planetary signatures.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto mb-8">
            Our AI systems can analyze <span className="text-purple-400 font-semibold">multi-wavelength data</span> 
            from different satellite instruments, providing comprehensive planetary characterization 
            and habitability assessment.
          </p>
        </motion.div>
        
        <div className="mt-16 flex justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full max-w-6xl"
          >
          <DataPoint
            number="JWST"
            label="Space Telescope"
            icon={<Radio className="w-8 h-8" />}
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
        </div>
        
      </motion.div>
    </section>

    {/* Hugging Face Full-Width Section */}
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full py-16 bg-black/30 backdrop-blur-md border-t border-b border-white/10"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mb-10 px-4"
      >
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-center mb-4">
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 text-transparent bg-clip-text animate-pulse">
            TOI NASA Classification
          </span>
        </h3>
        <p className="text-center text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
          Classify <span className="text-blue-400 font-semibold">TOI exoplanets</span> with our advanced AI system
        </p>
      </motion.div>
      <div className="w-full px-4 md:px-8 lg:px-16">
        <div className="w-full h-[85vh] max-w-[1800px] mx-auto">
          <iframe
            src="https://adilbai-toi-nasa-exoplanets-classification.hf.space"
            width="100%"
            height="100%"
            style={{ border: 'none', borderRadius: '12px' }}
            title="TOI NASA Exoplanets Classification"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          ></iframe>
        </div>
      </div>
    </motion.section>
    </div>
  );
};

export default SatellitesPage;
