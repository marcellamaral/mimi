
import React from 'react';

const Confetti: React.FC = () => {
  const confetti = Array.from({ length: 100 }, (_, i) => i);
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {confetti.map((i) => {
        const isGold = i % 2 === 0;
        const left = `${Math.random() * 100}%`;
        const delay = `${Math.random() * 5}s`;
        const duration = `${3 + Math.random() * 7}s`;
        const size = `${3 + Math.random() * 5}px`;
        
        return (
          <div
            key={i}
            className={`absolute rounded-full ${isGold ? 'bg-festa-ouro' : 'bg-white'} opacity-70`}
            style={{
              left,
              top: '-20px',
              width: size,
              height: size,
              animation: `float ${duration} ease-in-out infinite`,
              animationDelay: delay,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default Confetti;
