import React from 'react';
import Hero from '../components/Hero';
import AboutTeam from '../components/AboutTeam';
import AboutChallenge from '../components/AboutChallenge';
import CallToAction from '../components/CallToAction';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Hero />
      <AboutTeam />
      <AboutChallenge />
      <CallToAction />
    </div>
  );
};

export default HomePage;
