import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ParticleField from './components/ParticleField';
import FloatingNavbar from './components/FloatingNavbar';
import ScrollAnimations from './components/ScrollAnimations';
import HomePage from './pages/HomePage';
import TelescopePage from './pages/TelescopePage';
import SatellitesPage from './pages/SatellitesPage';
import ChallengePage from './pages/ChallengePage';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <FloatingNavbar />
        <ParticleField />
        <ScrollAnimations />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/telescope" element={<TelescopePage />} />
          <Route path="/satellites" element={<SatellitesPage />} />
          <Route path="/challenge" element={<ChallengePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
