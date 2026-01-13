import React, { useState } from 'react';

interface RedactedTextProps {
  text: string;
  alwaysVisible?: boolean;
}

const RedactedText: React.FC<RedactedTextProps> = ({ text, alwaysVisible = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  if (alwaysVisible) {
    return <span>{text}</span>;
  }

  return (
    <span 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative inline-block px-1 cursor-help transition-all duration-300
        ${isHovered ? 'bg-transparent text-ink' : 'bg-ink text-transparent select-none'}
      `}
      title="Hover to declassify"
    >
      {text}
      {!isHovered && (
        <span className="absolute inset-0 bg-ink opacity-90 pointer-events-none"></span>
      )}
    </span>
  );
};

export default RedactedText;
