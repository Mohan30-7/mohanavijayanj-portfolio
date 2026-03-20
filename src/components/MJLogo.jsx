import React from 'react';

const MJLogo = ({ className = '', size = 42 }) => {
  return (
    <svg 
      width={size * 1.8} 
      height={size} 
      viewBox="0 0 180 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`premium-logo ${className}`}
      style={{ verticalAlign: 'middle' }}
    >
      <defs>
        {/* Main Blue-Cyan Gradient */}
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>

        {/* Glass Shine Gradient */}
        <linearGradient id="shine-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
          <stop offset="50%" stopColor="white" stopOpacity="0.1" />
          <stop offset="51%" stopColor="white" stopOpacity="0" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>

        {/* Outer Glow Filter */}
        <filter id="outer-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Inner Glow / Depth Filter */}
        <filter id="inner-glow">
          <feOffset dx="0" dy="1" />
          <feGaussianBlur stdDeviation="1.5" result="offset-blur" />
          <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
          <feFlood floodColor="white" floodOpacity="0.3" result="color" />
          <feComposite operator="in" in="color" in2="inverse" result="shadow" />
          <feComposite operator="over" in="shadow" in2="SourceGraphic" />
        </filter>
      </defs>

      {/* Background Glow (Invisible, just for filter area) */}
      <g filter="url(#outer-glow)">
        {/* M Letter */}
        <path 
          d="M 15 80 V 20 L 55 60 L 95 20 V 80" 
          stroke="url(#logo-gradient)" 
          strokeWidth="22" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        {/* J Letter */}
        <path 
          d="M 145 20 V 70 Q 145 85 130 85 Q 115 85 115 75" 
          stroke="url(#logo-gradient)" 
          strokeWidth="22" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </g>

      {/* Letter Faces with Inner Glow */}
      <g filter="url(#inner-glow)">
        <path 
          d="M 15 80 V 20 L 55 60 L 95 20 V 80" 
          stroke="url(#logo-gradient)" 
          strokeWidth="22" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
        <path 
          d="M 145 20 V 70 Q 145 85 130 85 Q 115 85 115 75" 
          stroke="url(#logo-gradient)" 
          strokeWidth="22" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </g>

      {/* Shine Overlay (Glass Effect) */}
      <path 
        d="M 15 80 V 20 L 55 60 L 95 20 V 80 M 145 20 V 70 Q 145 85 130 85 Q 115 85 115 75" 
        stroke="url(#shine-gradient)" 
        strokeWidth="22" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        style={{ pointerEvents: 'none' }}
      />
    </svg>
  );
};

export default MJLogo;
