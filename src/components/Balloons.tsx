
import React from 'react';

const Balloons: React.FC = () => {
  const balloons = Array.from({ length: 30 }, (_, i) => i);
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {balloons.map((i) => {
        const isGold = i % 3 === 0;
        const isBlack = i % 3 === 1;
        const left = `${Math.random() * 100}%`;
        const delay = `${Math.random() * 5}s`;
        const duration = `${3 + Math.random() * 7}s`;
        const size = `${30 + Math.random() * 40}px`;
        
        return (
          <div
            key={i}
            className={`absolute balloon ${
              isGold 
                ? 'bg-festa-ouro' 
                : isBlack 
                  ? 'bg-festa-preto border-2 border-festa-ouro' 
                  : 'bg-white/90 border border-festa-ouro'
            }`}
            style={{
              left,
              bottom: '-60px',
              width: size,
              height: `calc(${size} * 1.2)`,
              animationDelay: delay,
              animationDuration: duration,
              opacity: isGold ? 0.9 : 0.8,
            }}
          >
            <div 
              className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-10 ${
                isGold ? 'bg-festa-ouro/80' : 'bg-gray-300'
              }`}
              style={{ width: '1px' }}
            ></div>
          </div>
        );
      })}
    </div>
  );
};

export default Balloons;
