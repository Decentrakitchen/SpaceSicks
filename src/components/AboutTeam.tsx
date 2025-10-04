import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Users, Building, Target } from 'lucide-react';


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
            We are <span className="text-cosmic-400 font-semibold">elite students</span> from 
            <span className="text-cosmic-400 font-semibold"> NIS KhBN G Almaty</span>, 
            Grade 10, united by our passion for technology and space exploration.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-cosmic-300 font-light leading-relaxed max-w-4xl mx-auto mb-8">
            Our team combines expertise in <span className="text-nebula-400 font-semibold">machine learning</span>, 
            <span className="text-nebula-400 font-semibold"> full-stack development</span>, and 
            <span className="text-nebula-400 font-semibold"> frontend engineering</span>. We're not just programmers - 
            we're <span className="text-cosmic-400 font-semibold">sports programmers</span> who excel in competitive coding.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-cosmic-300 font-light leading-relaxed max-w-4xl mx-auto mb-8">
            Having participated in hackathons before, we bring real-world experience and 
            <span className="text-cosmic-400 font-medium"> innovative thinking</span> to solve complex problems 
            in <span className="text-cosmic-400 font-medium">space technology</span> and AI.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="team-members grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-16 max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="team-member bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Азамат Байганин</h3>
            <p className="text-cosmic-300 text-sm">ML Expert</p>
            <p className="text-cosmic-400 text-xs mt-2">Machine Learning Specialist</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="team-member bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Даниял Талгатов</h3>
            <p className="text-cosmic-300 text-sm">Full-Stack Developer</p>
            <p className="text-cosmic-400 text-xs mt-2">Backend & Frontend</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="team-member bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Адильжан Байдалин</h3>
            <p className="text-cosmic-300 text-sm">ML Expert</p>
            <p className="text-cosmic-400 text-xs mt-2">Machine Learning Specialist</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="team-member bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Нурасыл Курманкул</h3>
            <p className="text-cosmic-300 text-sm">Frontend Developer</p>
            <p className="text-cosmic-400 text-xs mt-2">UI/UX & Full-Stack</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutTeam;
