import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Zap, Database, Target, Search, Star, BarChart3, ExternalLink } from 'lucide-react';

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

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="data-grid grid grid-cols-3 gap-6 md:gap-8 mt-16 max-w-6xl mx-auto items-stretch"
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

      {/* AI Model Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold text-center text-white mb-16"
          >
            AI <span className="text-purple-400">Model</span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-black/40 backdrop-blur-lg border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Brain className="w-8 h-8 text-purple-400 mr-3" />
                  Model Architecture
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Database className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Deep Neural Network</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Transformer-based Architecture</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Search className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Real-time telescope data processing</span>
                  </div>
                </div>
              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center"
            >
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                  <Brain className="w-40 h-40 text-purple-400" />
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-purple-400/30 animate-pulse"></div>
                <div className="absolute inset-4 rounded-full border border-blue-400/20 animate-ping"></div>
              </div>
            </motion.div>
          </div>

          {/* Hugging Face Space Link */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 max-w-5xl mx-auto"
          >
            <div className="bg-black/40 backdrop-blur-lg border border-white/10 rounded-3xl p-10">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Try Our AI Model
                </h3>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Experience our Kepler exoplanet detection model live on Hugging Face. 
                  Upload telescope data and get instant predictions.
                </p>
              </div>
              
              <div className="flex flex-col items-center space-y-6">
                <motion.a
                  href="https://huggingface.co/spaces/Adilbai/Kepler-automated-detection"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-2xl font-bold rounded-full shadow-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300 flex items-center justify-center"
                >
                  <ExternalLink className="w-7 h-7 mr-3" />
                  Open Model on Hugging Face
                </motion.a>
                
                <p className="text-gray-400 text-sm">
                  Opens in a new tab • Powered by Hugging Face
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-purple-400 text-2xl font-bold mb-2">Real-time</div>
                  <div className="text-gray-300 text-sm">Instant predictions</div>
                </div>
                <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-blue-400 text-2xl font-bold mb-2">Interactive</div>
                  <div className="text-gray-300 text-sm">Upload your data</div>
                </div>
                <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                  <div className="text-green-400 text-2xl font-bold mb-2">Accurate</div>
                  <div className="text-gray-300 text-sm">92% accuracy rate</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TelescopePage;