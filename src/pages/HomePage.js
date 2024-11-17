import React from 'react';
import ParticlesComponent from '../components/Particles/ParticlesComponent';

function HomePage() {
  return (
    <div style={{position: "absolute", display:'flex', width: "80%", height: "100%", zIndex: -1 }}>
      <ParticlesComponent id="particles" />
    </div>
  );
}

export default HomePage;