import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

// Typage des props pour le composant Menu
interface MenuProps {
  isOpen: boolean;
  onClose: () => void; // onClose est une fonction sans arguments qui retourne void
}

const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    // Ajoute ou enlève la classe `no-scroll` en fonction de l'état `isOpen`
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    // Nettoyage pour éviter tout effet résiduel
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  return (
    <div className={`menu-overlay ${isOpen ? 'open' : ''}`}>
      <div className="menu">
        <div className="menu-content">
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'menu-items active' : 'menu-items')}
                to="/"
                onClick={onClose}
              >
                Index
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'menu-items active' : 'menu-items')}
                to="/about"
                onClick={onClose}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'menu-items active' : 'menu-items')}
                to="/projects"
                onClick={onClose}
              >
                Projets
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? 'menu-items active' : 'menu-items')}
                to="/contact"
                onClick={onClose}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="sub-menu">
          <ul>
            <li>
              <a className="sub-menu-items" href="">
                LinkedIn
              </a>
            </li>
            <li>
              <a className="sub-menu-items" href="">
                Instagram
              </a>
            </li>
            <li>
              <a className="sub-menu-items" href="">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;