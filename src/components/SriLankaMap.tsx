import React from 'react';

interface MapDot {
  name: string;
  x: number;
  y: number;
}

const mapDots: MapDot[] = [
  { name: 'Yala National Park', x: 80, y: 85 },
  { name: 'Udawalawe National Park', x: 70, y: 75 },
  { name: 'Wilpattu National Park', x: 40, y: 30 },
  { name: 'Minneriya National Park', x: 60, y: 45 },
  { name: 'Bundala National Park', x: 75, y: 85 },
  { name: 'Colombo', x: 30, y: 60 },
  { name: 'Sigiriya', x: 60, y: 40 },
  { name: 'Dambulla', x: 55, y: 45 },
  { name: 'Kithulgala', x: 45, y: 55 },
  { name: 'Ella', x: 75, y: 65 },
  { name: 'Knuckles Range', x: 65, y: 50 },
  { name: 'Hikkaduwa', x: 35, y: 75 },
  { name: 'Mirissa', x: 50, y: 90 },
  { name: 'Bentota', x: 30, y: 70 },
];

interface SriLankaMapProps {
  selectedActivities: string[];
}

const SriLankaMap: React.FC<SriLankaMapProps> = ({ selectedActivities }) => {
  return (
    <div className="relative w-full h-64 md:h-96">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path
          d="M50 5 C60 10 70 20 75 30 C80 40 82 50 80 60 C78 70 72 80 65 85 C58 90 50 92 40 90 C30 88 22 82 18 75 C14 68 12 60 15 50 C18 40 25 30 35 25 C45 20 48 15 50 5Z"
          fill="#e5e7eb"
          stroke="#4b5563"
          strokeWidth="1"
        />
        {mapDots.map((dot, index) => {
          const isSelected = selectedActivities.some(activity => activity.includes(dot.name));
          return (
            <circle
              key={index}
              cx={dot.x}
              cy={dot.y}
              r="2"
              fill={isSelected ? "#22c55e" : "#9ca3af"}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default SriLankaMap;