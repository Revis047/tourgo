
import { useState } from 'react';
import { InfoPointType } from '@/lib/constants';

interface InfoPointProps {
  info: InfoPointType;
}

const InfoPoint = ({ info }: InfoPointProps) => {
  const [showInfo, setShowInfo] = useState(false);
  const { position, title, description, image } = info;

  return (
    <>
      <div 
        className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
        style={{ 
          left: `${position.x}%`, 
          top: `${position.y}%` 
        }}
      >
        <div 
          className="w-6 h-6 rounded-full bg-white bg-opacity-80 cursor-pointer transition-transform duration-300 hover:scale-125 hover:bg-opacity-100 flex items-center justify-center"
          onClick={() => setShowInfo(!showInfo)}
        >
          <span className="text-vr-primary font-bold">i</span>
        </div>
      </div>
      
      {showInfo && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="info-card max-w-md" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <button 
                className="text-gray-300 hover:text-white"
                onClick={() => setShowInfo(false)}
              >
                ✕
              </button>
            </div>
            
            {image && (
              <div className="mb-4">
                <img src={image} alt={title} className="w-full rounded-md" />
              </div>
            )}
            
            <p className="text-gray-200">{description}</p>
          </div>
          
          <div 
            className="absolute inset-0 z-[-1]"
            onClick={() => setShowInfo(false)}
          />
        </div>
      )}
    </>
  );
};

export default InfoPoint;
