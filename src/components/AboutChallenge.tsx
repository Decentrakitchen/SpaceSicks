import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Database, Cpu, Clock, Zap } from 'lucide-react';

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

const AboutChallenge: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="about-challenge relative z-10">
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
          THE COSMIC
          <br />
          <span className="text-nebula-400">CHALLENGE</span>
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
          <p className="text-xl md:text-2xl lg:text-3xl text-cosmic-200 font-light leading-relaxed max-w-4xl mx-auto mb-8">
            NASA's treasure trove of <span className="text-nebula-400 font-semibold">exoplanet datasets</span> 
            contains millions of signals waiting to be decoded. Traditional analysis methods 
            can only process a fraction of this cosmic data stream.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-cosmic-300 font-light leading-relaxed max-w-4xl mx-auto mb-8">
            Our <span className="text-cosmic-400 font-semibold">quantum-enhanced algorithms</span> analyze 
            light curves, atmospheric signatures, and orbital mechanics to automatically 
            identify new worlds. We're not just finding planets—we're 
            <span className="text-nebula-400 font-semibold"> mapping the architecture of distant solar systems</span> 
            and predicting their evolutionary pathways.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-cosmic-300 font-light leading-relaxed max-w-4xl mx-auto mb-8">
            Every discovery brings us closer to answering humanity's most profound question: 
            <span className="text-cosmic-400 font-medium"> Are we alone in the universe?</span>
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="data-grid grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-16 max-w-6xl mx-auto"
        >
          <DataPoint
            number="2M+"
            label="Data Points"
            icon={<Database className="w-8 h-8" />}
          />
          <DataPoint
            number="10TB"
            label="Daily Processing"
            icon={<Cpu className="w-8 h-8" />}
          />
          <DataPoint
            number="0.001s"
            label="Detection Time"
            icon={<Clock className="w-8 h-8" />}
          />
          <DataPoint
            number="∞"
            label="Potential"
            icon={<Zap className="w-8 h-8" />}
          />
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-xl md:text-2xl lg:text-3xl text-cosmic-200 font-semibold leading-relaxed max-w-4xl mx-auto mt-12"
        >
          <strong>Join us in building the next generation of cosmic discovery.</strong>
        </motion.p>
      </motion.div>
    </section>
  );
};

export default AboutChallenge;
