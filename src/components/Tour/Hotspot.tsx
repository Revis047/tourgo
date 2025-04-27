
import { useState } from 'react';
import { HotspotType } from '@/lib/constants';

interface HotspotProps {
  hotspot: HotspotType;
  onNavigate: (sceneId: string) => void;
}

const Hotspot = ({ hotspot, onNavigate }: HotspotProps) => {
  const [showLabel, setShowLabel] = useState(false);
  const { position, destinationSceneId, label } = hotspot;

  const handleClick = () => {
    onNavigate(destinationSceneId);
  };

  return (
    <div 
      className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
      style={{ 
        left: `${position.x}%`, 
        top: `${position.y}%` 
      }}
      onMouseEnter={() => setShowLabel(true)}
      onMouseLeave={() => setShowLabel(false)}
    >
      <div 
        className="hotspot"
        onClick={handleClick}
      >
        <span className="text-white text-xs">→</span>
      </div>
      
      {showLabel && label && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-black/80 text-white text-xs whitespace-nowrap rounded">
          {label}
        </div>
      )}
    </div>
  );
};

export default Hotspot;
