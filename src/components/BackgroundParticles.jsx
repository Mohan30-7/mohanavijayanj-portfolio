import React from 'react';

const BackgroundParticles = () => {
  const particles = Array.from({ length: 40 });

  return (
    <div className="background-particles" aria-hidden="true">
      {particles.map((_, index) => (
        <span
          key={index}
          className="particle"
          style={{
            '--x': `${Math.random() * 100}%`,
            '--y': `${Math.random() * 100}%`,
            '--delay': `${Math.random() * 10}s`,
            '--duration': `${10 + Math.random() * 20}s`,
            '--size': `${2 + Math.random() * 4}px`
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundParticles;

