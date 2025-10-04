import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star, ArrowDown } from 'lucide-react';

interface ScrollAnimationsProps {
  className?: string;
}

const ScrollAnimations: React.FC<ScrollAnimationsProps> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry) {
          // Handle intersection if needed
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className}`}>

      {/* Particle System */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          style={{
            x: useTransform(scrollYProgress, [0, 1], [Math.random() * window.innerWidth, Math.random() * window.innerWidth]),
            y: useTransform(scrollYProgress, [0, 1], [Math.random() * window.innerHeight, Math.random() * window.innerHeight]),
            opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]),
          }}
          className="fixed z-30"
        >
          <motion.div
            animate={{
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className={`w-2 h-2 rounded-full ${
              i % 4 === 0 ? 'bg-blue-400' :
              i % 4 === 1 ? 'bg-purple-400' :
              i % 4 === 2 ? 'bg-pink-400' : 'bg-cyan-400'
            } shadow-lg`}
          />
        </motion.div>
      ))}

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300 cursor-pointer"
        >
          <span className="text-sm font-medium mb-2">Scroll to Explore</span>
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.div>

      {/* Cosmic Background Effects */}
      <motion.div
        style={{
          scale: useTransform(scrollYProgress, [0, 1], [1, 1.5]),
          opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.3, 0.3, 0]),
        }}
        className="fixed inset-0 pointer-events-none z-10"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-yellow-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-green-500/20 rounded-full blur-3xl" />
      </motion.div>

      {/* Floating Stars */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={`star-${i}`}
          style={{
            x: useTransform(scrollYProgress, [0, 1], [Math.random() * window.innerWidth, Math.random() * window.innerWidth]),
            y: useTransform(scrollYProgress, [0, 1], [Math.random() * window.innerHeight, Math.random() * window.innerHeight]),
            opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]),
          }}
          className="fixed z-20"
        >
          <motion.div
            animate={{
              scale: [0, 1, 0],
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            className="text-white/60"
          >
            <Star className="w-3 h-3" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default ScrollAnimations;