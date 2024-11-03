import React from 'react';
import useToggle from './hooks/useToggle';
import Menu from './components/Menu/Menu';
import './styles/index.css';

function App() {
  const [isMenuOpen, toggleMenu] = useToggle(false);

  return (
    <div className="App">
      <p className="menu-button" onClick={toggleMenu}>
        {isMenuOpen ? 'CLOSE' : 'MENU'}
      </p>
      <Menu isOpen={isMenuOpen} onClose={toggleMenu} />
    </div>
  );
}

export default App;
