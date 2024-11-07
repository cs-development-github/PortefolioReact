import React from 'react';
import useToggle from '../hooks/useToggle';
import Menu from '../components/Header/Menu/Menu';
import RealTimeClock from '../components/Header/RealTimeClock/RealTimeClock';
import '../styles/index.css';

function HomePage() {
  const [isMenuOpen, toggleMenu] = useToggle(false);

  return (
    <div className="HomePage">
      <div className="header">
        <div className="current-time">
          <RealTimeClock />
        </div>
        <p className="menu-button" onClick={toggleMenu}>
          {isMenuOpen ? 'CLOSE' : 'MENU'}
        </p>
      </div>
      <Menu isOpen={isMenuOpen} onClose={toggleMenu} />
    </div>
  );
}

export default HomePage;
