import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Zap, Database, Target, Search, Star, BarChart3, Play, Download, Github } from 'lucide-react';

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
      className="group bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:border-white/20 transition-all duration-300"
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

  const [isModelRunning, setIsModelRunning] = useState(false);

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
            Our <span className="text-purple-400 font-semibold">advanced AI model</span>
            powered by Hugging Face processes astronomical data to identify exoplanets
            through machine learning and deep neural networks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="data-grid grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-16 max-w-5xl mx-auto"
          >
            <DataPoint
              number="5000+"
              label="Exoplanets Found"
              icon={<Star className="w-8 h-8" />}
              description="Total discoveries"
            />
            <DataPoint
              number="99.7%"
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
            <span className="text-purple-400">Hugging Face</span> Model
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
                    <span className="text-gray-300">Real-time Data Processing</span>
                  </div>
                </div>
              </div>

              <div className="bg-black/40 backdrop-blur-lg border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Model Performance</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">99.7%</div>
                    <div className="text-gray-400 text-sm">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400">0.3s</div>
                    <div className="text-gray-400 text-sm">Inference Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400">5000+</div>
                    <div className="text-gray-400 text-sm">Training Samples</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">24/7</div>
                    <div className="text-gray-400 text-sm">Availability</div>
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

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 flex flex-col md:flex-row gap-6 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModelRunning(!isModelRunning)}
              className="px-10 py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xl font-bold rounded-full shadow-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300 flex items-center justify-center"
            >
              <Play className="w-6 h-6 mr-3" />
              {isModelRunning ? 'Stop Model' : 'Run Model'}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white/10 border border-white/20 text-white text-xl font-semibold rounded-full hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
            >
              <Download className="w-6 h-6 mr-3" />
              Download Model
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,255,255,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white/10 border border-white/20 text-white text-xl font-semibold rounded-full hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
            >
              <Github className="w-6 h-6 mr-3" />
              View on GitHub
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TelescopePage;