import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Rocket, Zap, Globe, Infinity } from 'lucide-react';

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

const Hero: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="hero relative z-10 min-h-screen flex items-center justify-center">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="text-center w-full px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black leading-none mb-8 bg-gradient-to-r from-white via-cosmic-300 to-cosmic-500 bg-clip-text text-transparent"
        >
          INTELLIGENCE
          <br />
          <span className="text-nebula-400">BEYOND EARTH</span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-full h-0.5 bg-gradient-to-r from-transparent via-cosmic-500 to-transparent mb-8 animate-scan-line"
        />
        
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="hero-subtitle text-xl md:text-2xl lg:text-3xl text-cosmic-200 font-light leading-relaxed max-w-4xl mx-auto"
        >
          We're engineering <span className="text-nebula-400 font-semibold">next-generation AI systems</span> 
          that analyze cosmic data streams, decode planetary signatures, and 
          <span className="text-cosmic-400 font-medium"> expand humanity's reach into the infinite universe</span>.
        </motion.p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 1.2 }}
        className="data-grid grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-16 max-w-6xl mx-auto"
      >
        <DataPoint
          number="5,000+"
          label="Exoplanets Discovered"
          icon={<Rocket className="w-8 h-8" />}
        />
        <DataPoint
          number="99.7%"
          label="AI Accuracy Rate"
          icon={<Zap className="w-8 h-8" />}
        />
        <DataPoint
          number="24/7"
          label="Continuous Analysis"
          icon={<Globe className="w-8 h-8" />}
        />
        <DataPoint
          number="∞"
          label="Possibilities"
          icon={<Infinity className="w-8 h-8" />}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
