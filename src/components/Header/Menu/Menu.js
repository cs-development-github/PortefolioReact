import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

function Menu({ isOpen, onClose }) {
  return (
    <div className={`menu-overlay ${isOpen ? 'open' : ''}`}>
      <div className="menu">
        <div className="menu-content">
          <ul>
            <li><NavLink className={({ isActive }) => isActive ? 'menu-items active' : 'menu-items'} to="/" onClick={onClose}>Index</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'menu-items active' : 'menu-items'} to="/about" onClick={onClose}>About</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'menu-items active' : 'menu-items'} to="/projects" onClick={onClose}>Projets</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'menu-items active' : 'menu-items'} to="/contact" onClick={onClose}>Contact</NavLink></li>
          </ul>
        </div>
        <div className="sub-menu">
          <ul>
            <li><a className='sub-menu-items' href="">LinkedIn</a></li>
            <li><a className='sub-menu-items' href="">Instagram</a></li>
            <li><a className='sub-menu-items' href="">Privacy policy</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menu;