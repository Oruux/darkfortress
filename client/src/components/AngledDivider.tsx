import React from 'react';

interface AngledDividerProps {
  direction?: 'down' | 'up';
  topColor?: string;
  bottomColor?: string;
}

const AngledDivider: React.FC<AngledDividerProps> = ({ 
  direction = 'down', 
  topColor = 'bg-background', 
  bottomColor = 'bg-black' 
}) => {
  const clipPath = direction === 'down' 
    ? 'polygon(0 0, 100% 100%, 100% 100%, 0% 100%)' 
    : 'polygon(0 100%, 100% 0, 100% 0, 0 0)';

  return (
    <div className="relative h-[100px] -mt-[50px] -mb-[50px] z-10">
      <div 
        className={`absolute top-0 left-0 w-full h-full ${direction === 'down' ? topColor : bottomColor}`}
        style={{ clipPath }}
      />
    </div>
  );
};

export default AngledDivider;
