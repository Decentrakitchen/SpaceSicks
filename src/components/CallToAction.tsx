import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Globe, Clock, Star } from 'lucide-react';

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

const CallToAction: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="call-to-action relative z-10">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black leading-none mb-8 text-white"
        >
          READY TO
          <br />
          <span className="text-nebula-400">EXPLORE?</span>
        </motion.h2>
        
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
          <p className="text-xl md:text-2xl lg:text-3xl text-cosmic-200 font-light leading-relaxed max-w-4xl mx-auto mb-12">
            The universe is vast, but our potential is infinite. 
            <span className="text-cosmic-400 font-semibold"> Join the mission</span> to discover 
            new worlds and expand human knowledge beyond Earth's boundaries.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="cta-buttons flex flex-wrap justify-center gap-6 mb-16"
          >
            <a href="#join" className="cta-button">
              Join the Mission
            </a>
            <a href="#explore" className="cta-button">
              Start Exploring
            </a>
            <a href="#build" className="cta-button">
              Build With Us
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="data-grid grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-16 max-w-6xl mx-auto"
        >
          <DataPoint
            number="100+"
            label="Researchers"
            icon={<Users className="w-8 h-8" />}
          />
          <DataPoint
            number="50+"
            label="Countries"
            icon={<Globe className="w-8 h-8" />}
          />
          <DataPoint
            number="24/7"
            label="Support"
            icon={<Clock className="w-8 h-8" />}
          />
          <DataPoint
            number="∞"
            label="Future"
            icon={<Star className="w-8 h-8" />}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CallToAction;
