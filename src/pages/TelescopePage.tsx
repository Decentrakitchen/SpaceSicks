import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Microscope, Zap, Database, Target, Search, Star, Activity, BarChart3 } from 'lucide-react';

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

interface TelescopeCardProps {
  name: string;
  type: string;
  location: string;
  discoveries: number;
  status: 'active' | 'retired' | 'planned';
}

const TelescopeCard: React.FC<TelescopeCardProps> = ({ name, type, location, discoveries, status }) => {
  const statusColors = {
    active: 'text-green-400',
    retired: 'text-gray-400',
    planned: 'text-yellow-400'
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <span className={`text-xs font-medium ${statusColors[status]}`}>
          {status.toUpperCase()}
        </span>
      </div>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-400">Type:</span>
          <span className="text-white">{type}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Location:</span>
          <span className="text-white">{location}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Exoplanets:</span>
          <span className="text-blue-400 font-semibold">{discoveries}</span>
        </div>
      </div>
    </motion.div>
  );
};

const TelescopePage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedTelescope, setSelectedTelescope] = useState<string>('kepler');

  const telescopes = [
    {
      id: 'kepler',
      name: 'Kepler Space Telescope',
      type: 'Space-based',
      location: 'Heliocentric Orbit',
      discoveries: 2662,
      status: 'retired' as const
    },
    {
      id: 'tess',
      name: 'TESS',
      type: 'Space-based',
      location: 'Highly Elliptical Orbit',
      discoveries: 400,
      status: 'active' as const
    },
    {
      id: 'jwst',
      name: 'James Webb Space Telescope',
      type: 'Space-based',
      location: 'L2 Lagrange Point',
      discoveries: 50,
      status: 'active' as const
    },
    {
      id: 'cheops',
      name: 'CHEOPS',
      type: 'Space-based',
      location: 'Sun-synchronous Orbit',
      discoveries: 30,
      status: 'active' as const
    }
  ];

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
            TELESCOPE
            <br />
            <span className="text-purple-400">DISCOVERY</span>
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
              Our <span className="text-purple-400 font-semibold">AI-powered telescope analysis</span> 
              processes massive datasets from ground-based observatories to identify exoplanets 
              through transit photometry and radial velocity measurements.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light leading-relaxed max-w-4xl mx-auto mb-8">
              Using advanced <span className="text-blue-400 font-semibold">machine learning algorithms</span>, 
              we analyze light curves from telescopes like Kepler, TESS, and ground-based observatories 
              to detect the subtle dimming patterns that indicate planetary transits.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1 }}
            className="data-grid grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-16 max-w-6xl mx-auto"
          >
            <DataPoint
              number="5000+"
              label="Exoplanets Found"
              icon={<Star className="w-8 h-8" />}
              description="Total discoveries"
            />
            <DataPoint
              number="15"
              label="Active Missions"
              icon={<Activity className="w-8 h-8" />}
              description="Space telescopes"
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

      {/* Telescope Selection Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold text-center text-white mb-16"
          >
            Choose Your <span className="text-purple-400">Telescope</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {telescopes.map((telescope) => (
              <motion.div
                key={telescope.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedTelescope(telescope.id)}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedTelescope === telescope.id 
                    ? 'ring-2 ring-purple-400' 
                    : 'hover:ring-1 hover:ring-white/20'
                }`}
              >
                <TelescopeCard {...telescope} />
              </motion.div>
            ))}
          </div>

          {/* Selected Telescope Details */}
          <motion.div
            key={selectedTelescope}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {telescopes.find(t => t.id === selectedTelescope)?.name}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  This telescope has been instrumental in discovering exoplanets through 
                  advanced photometric analysis. Our AI models process its data streams 
                  in real-time to identify potential planetary candidates.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Search className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Real-time data analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Database className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Machine learning detection</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Automated candidate validation</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                  <Microscope className="w-32 h-32 text-purple-400" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Action Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold text-white mb-8"
          >
            Ready to <span className="text-purple-400">Explore</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-12"
          >
            Start analyzing telescope data and discover new worlds beyond our solar system.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-lg font-semibold rounded-full hover:from-purple-400 hover:to-blue-400 transition-all duration-300"
            >
              Start Analysis
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-white/20 text-white text-lg font-semibold rounded-full hover:border-white/40 hover:bg-white/5 transition-all duration-300"
            >
              View Data Archive
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TelescopePage;