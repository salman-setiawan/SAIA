import React from 'react';

const AboutConnector = () => {  
  const paths = [
    // Idea (merah)
    { d: "M 880 258 L 940 258 L 940 308", color: "rgb(255, 119, 119)" },
    // Vision (merah)
    { d: "M 832 346 L 940 346 L 950 340", color: "rgb(255, 119, 119)" },
    // Problem (merah)
    { d: "M 912 420 L 950 420 L 950 340", color: "rgb(255, 119, 119)" },
    // Solution (hijau)
    { d: "M 970 328 L 1060 328 L 1060 294", color: "rgb(185, 255, 179)" },
    // Apps (hijau)
    { d: "M 980 342 L 1038 342 L 1038 388", color: "rgb(185, 255, 179)" }
  ];

  return (
    <svg
      className='absolute pointer-events-none'
      style={{ minWidth: '1890px', minHeight: '680px', zIndex: 1 }}
    >
      <defs>
        <filter id="connector-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <style>{`
        .about-connector-path {
          stroke-width: 2;
          fill: none;
          opacity: 0.15;
          stroke-linecap: round;
          stroke-dasharray: 0.8 0.8;
          stroke-linejoin: round;
        }

        .about-connector-glow {
          stroke-width: 2;
          fill: none;
          stroke-linecap: round;
          stroke-dasharray: 1.2 4;
          filter: url(#connector-glow);
          opacity: 0.65;
          animation: snakeTrail 12s linear infinite;
        }

        @keyframes snakeTrail {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -200; }
        }
      `}</style>
      
      {paths.map((path, index) => (
        <g key={index}>
          <path
            d={path.d}
            pathLength="100"
            className="about-connector-path"
            style={{ stroke: path.color }}
          />
          <path
            d={path.d}
            pathLength="100"
            className="about-connector-glow"
            style={{
              stroke: path.color,
              animationDelay: `${index * 0.8}s`
            }}
          />
        </g>
      ))}
    </svg>
  );
};

export default AboutConnector;

