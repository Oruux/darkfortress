import React from 'react';

export const DFILogo: React.FC<{ className?: string }> = ({ className = 'h-10 w-10' }) => {
  return (
    <svg className={className} viewBox="0 0 258.91 258.91" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          {`
          .circle-outer {
            fill: #000;
            stroke: #fff;
            stroke-width: 4px;
          }
          .circle-inner {
            fill: #000;
            stroke: #fff;
            stroke-width: 2px;
          }
          .fox {
            fill: none;
            stroke: #fff;
            stroke-width: 2px;
          }
          .text {
            fill: #fff;
            font-family: 'Inter', sans-serif;
            font-weight: bold;
          }
          `}
        </style>
      </defs>
      <circle className="circle-outer" cx="129.455" cy="129.455" r="127.455" />
      <circle className="circle-inner" cx="129.455" cy="129.455" r="90" />
      
      {/* Simplified fox outline */}
      <path className="fox" d="M129.455,75 c-10,0 -30,15 -35,40 c-5,25 20,45 35,45 c15,0 40,-20 35,-45 c-5,-25 -25,-40 -35,-40 z 
                           M109.455,100 c0,0 -15,5 -15,15 c0,10 10,10 15,5 z 
                           M144.455,105 c0,0 15,0 15,10 c0,10 -10,10 -15,5 z 
                           M129.455,130 c0,0 -10,5 -10,15 c0,10 20,10 20,0 c0,-10 -10,-15 -10,-15 z" />
      
      {/* Text around the circle */}
      <text className="text" 
            fontSize="20"
            textAnchor="middle"
            dominantBaseline="middle"
            alignmentBaseline="middle"
            transform="rotate(-90, 38, 129.455)">
        DARKFORTRESS
      </text>
      <text className="text" 
            fontSize="20"
            textAnchor="middle"
            dominantBaseline="middle"
            alignmentBaseline="middle"
            transform="rotate(90, 220, 129.455)">
        INTELLIGENCE
      </text>
      <text className="text" 
            fontSize="25"
            textAnchor="middle"
            dominantBaseline="middle"
            alignmentBaseline="middle"
            y="210"
            x="129.455">
        DFI
      </text>
    </svg>
  )
}
