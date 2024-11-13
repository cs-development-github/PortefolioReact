import React from 'react';
import HeroBanner from '../components/Header/HeroBanner/HeroBanner';
import HERO_BANER from '../assets/hero-banner.jpg'

function HomePage() {
  return (
    <div>
      <HeroBanner src={HERO_BANER} alt="Hero Banner" />
    </div>
  );
}

export default HomePage;