import React from 'react';
import ParticlesComponent from '../components/Particles/ParticlesComponent';

function HomePage() {
  return (
    <div style={{position: "absolute", zIndex: -1 }}>
      <ParticlesComponent id="particles" />
    </div>
  );
}

export default HomePage;