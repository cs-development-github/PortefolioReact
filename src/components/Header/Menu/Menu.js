import React from 'react';
import './Menu.css';

function Menu({ isOpen, onClose }) {
  return (
    <div className={`menu-overlay ${isOpen ? 'open' : ''}`}>
      <div className="menu">
        <div className="menu-content">
          <ul>
            <li><a className='menu-items' href="#home">Index</a></li>
            <li><a className='menu-items' href="#about">About</a></li>
            <li><a className='menu-items' href="#portfolio">Projets</a></li>
            <li><a className='menu-items' href="#contact">Contact</a></li>
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
