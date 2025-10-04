import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Users, Building, Target } from 'lucide-react';

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

const AboutTeam: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="about-team relative z-10">
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
          EXPLORERS OF
          <br />
          <span className="text-nebula-400">INTELLIGENCE</span>
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
            We are <span className="text-cosmic-400 font-semibold">elite researchers</span> and 
            <span className="text-cosmic-400 font-semibold"> systems engineers</span> from NASA, MIT, and SpaceX, 
            united by a singular mission: to push the boundaries of artificial intelligence 
            beyond our planet's atmosphere.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-cosmic-300 font-light leading-relaxed max-w-4xl mx-auto mb-8">
            Our team combines decades of experience in <span className="text-nebula-400 font-semibold">quantum machine learning</span>, 
            <span className="text-nebula-400 font-semibold"> astrophysical data analysis</span>, and 
            <span className="text-nebula-400 font-semibold"> space systems engineering</span>. We believe that advanced AI 
            holds the key to unlocking the deepest mysteries of the cosmos.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-cosmic-300 font-light leading-relaxed max-w-4xl mx-auto mb-8">
            Every algorithm we develop, every neural network we train, serves one purpose: 
            <span className="text-cosmic-400 font-medium"> expanding human knowledge</span> and 
            <span className="text-cosmic-400 font-medium"> discovering worlds</span> that were once beyond our computational reach.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="data-grid grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-16 max-w-6xl mx-auto"
        >
          <DataPoint
            number="15+"
            label="Years Experience"
            icon={<GraduationCap className="w-8 h-8" />}
          />
          <DataPoint
            number="PhD"
            label="Team Credentials"
            icon={<Users className="w-8 h-8" />}
          />
          <DataPoint
            number="NASA"
            label="Background"
            icon={<Building className="w-8 h-8" />}
          />
          <DataPoint
            number="∞"
            label="Ambition"
            icon={<Target className="w-8 h-8" />}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutTeam;
