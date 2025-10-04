import React from 'react';
import Hero from './components/Hero';
import AboutTeam from './components/AboutTeam';
import AboutChallenge from './components/AboutChallenge';
import CallToAction from './components/CallToAction';
import ParticleField from './components/ParticleField';
import FloatingNavbar from './components/FloatingNavbar';
import ScrollAnimations from './components/ScrollAnimations';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <FloatingNavbar />
      <ParticleField />
      <ScrollAnimations />
      <Hero />
      <AboutTeam />
      <AboutChallenge />
      <CallToAction />
    </div>
  );
};

export default App;
