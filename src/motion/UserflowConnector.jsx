import React from 'react';

const UserflowConnector = () => {  
  const paths = [
    // Path 1 -> 2:
    { d: "M 72 270 L 72 632 L 155 632" },
    // Path 2 -> 3:
    { d: "M 188 632 L 400 632 L 400 348 L 525 348" },
    // Path 3 -> 4:
    { d: "M 560 348 L 900 348 L 900 248 L 988 248" },
    // Path 4 -> 5:
    { d: "M 1001 255 L 1001 608 L 1093 608" },
    // Path 5 -> 6:
    { d: "M 1150 608 L 1504 608 L 1504 340"  }
  ];

  return (
    <svg
      className='hidden lg:block absolute pointer-events-none'
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
        .user-connector-path {
          stroke: #60a5fa;
          stroke-width: 2;
          fill: none;
          opacity: 0.2;
          stroke-linecap: round;
          stroke-dasharray: 0.5 0.5;
          stroke-linejoin: round;
        }

        .user-connector-glow {
          stroke:rgb(185, 255, 179);
          stroke-width: 4;
          fill: none;
          stroke-linecap: round;
          stroke-dasharray: 2 6;
          filter: url(#connector-glow);
          opacity: 0.5;
          animation: snakeTrail 12s linear infinite;
        }

        @keyframes snakeTrail {
          from {
            stroke-dashoffset: 0;
          }
          to {
            stroke-dashoffset: -200;
          }
        }
      `}</style>
      
      {paths.map((path, index) => (
        <g key={index}>
          <path d={path.d} className="user-connector-path" pathLength="100" />
          <path d={path.d} className="user-connector-glow" pathLength="100" style={{ animationDelay: `${index * 0.8}s` }} />
        </g>
      ))}
    </svg>
  );
};

export default UserflowConnector;

