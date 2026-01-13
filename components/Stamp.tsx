import React from 'react';

interface StampProps {
  text: string;
  variant?: 'red' | 'black';
  className?: string;
  rotation?: string;
}

const Stamp: React.FC<StampProps> = ({ text, variant = 'red', className = '', rotation = '-rotate-12' }) => {
  const colorClass = variant === 'red' ? 'text-alert border-alert' : 'text-ink border-ink';
  
  return (
    <div className={`
      absolute z-10 opacity-80 pointer-events-none select-none mix-blend-multiply
      border-4 border-double rounded-lg px-4 py-1 text-center font-bold uppercase tracking-widest
      ${colorClass} ${rotation} ${className} stamp-box
    `}>
      {text}
    </div>
  );
};

export default Stamp;
