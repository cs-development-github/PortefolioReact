import React, { useState } from 'react';

const HeroBanner = ({ src, alt }) => {

  return (
    <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '',
        }}
      />
    </div>
  );
};

export default HeroBanner;