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
      className="group rounded-2xl bg-white/[0.03] border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_12px_30px_rgba(0,0,0,0.35)] p-6 text-center hover:border-white/20 transition-all duration-300 h-48 flex flex-col justify-center"
    >
      <div className="flex justify-center mb-4 text-fuchsia-400">
        {icon}
      </div>
      <div className="group-hover:text-fuchsia-300 transition-colors duration-300 text-white text-3xl font-bold mb-1">
        {number}
      </div>
      <div className="group-hover:text-white/80 transition-colors duration-300 text-white/70 text-sm font-medium mb-1">
        {label}
      </div>
      {description && (
        <div className="text-white/50 text-xs">
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
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-sm md:text-base tracking-widest text-fuchsia-300/80 mb-3"
          >
            AI MODEL
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl font-black leading-[0.95] text-white mb-4"
          >
            EXOPLANET DETECTION
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="mx-auto mt-4 mb-8 h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-fuchsia-400/45 to-transparent"
          />

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="mx-auto max-w-[70ch] text-lg md:text-xl leading-relaxed text-white/85 mb-8"
          >
            Our trained AI model processes telescope data to predict exoplanets
            through machine learning and deep neural networks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-gradient-to-r from-fuchsia-500 to-sky-500 text-white font-semibold hover:from-fuchsia-400 hover:to-sky-400 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/60"
            >
              Try the Model
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center rounded-full px-6 py-3 border border-white/20 text-white/90 hover:bg-white/5 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              View Datasets
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-10 md:mt-14 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
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