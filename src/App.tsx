import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import RealTimeClock from './components/Header/RealTimeClock/RealTimeClock';
import './styles/index.css';
import useToggle from './hooks/useToggle';
import Menu from './components/Header/Menu/Menu';
import { GameProvider } from './contexts/GameContext'; // Assure-toi que l'import est correct

function App() {
  const [isMenuOpen, toggleMenu] = useToggle(false);

  return (
    <Router>
      <div className="App">
        <div className="header">
          <div className="current-time">
            <RealTimeClock />
          </div>
          <p
            className="menu-button"
            onClick={toggleMenu}
          >
            {isMenuOpen ? 'CLOSE' : 'MENU'}
          </p>
        </div>
        <Menu isOpen={isMenuOpen} onClose={toggleMenu} />
        <div className="page-content">
          <Routes>
            {/* Enveloppe HomePage avec GameProvider */}
            <Route
              path="/"
              element={
                <GameProvider>
                  <HomePage />
                </GameProvider>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;