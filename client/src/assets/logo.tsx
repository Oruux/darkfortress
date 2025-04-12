import React from 'react';
import logoSvg from './logo.svg';

export const DFILogo: React.FC<{ className?: string }> = ({ className = 'h-10 w-10' }) => {
  return (
    <div className={className}>
      <img 
        src={logoSvg} 
        alt="DarkFortress Intelligence Logo" 
        className="w-full h-full object-contain" 
        style={{ 
          filter: 'brightness(0) invert(1)', // Asegura que el logo sea blanco
          maxWidth: '100%',
          maxHeight: '100%' 
        }} 
      />
    </div>
  )
}
