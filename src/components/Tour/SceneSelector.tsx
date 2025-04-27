
import { useState } from 'react';
import { SceneType } from '@/lib/constants';

interface SceneSelectorProps {
  scenes: SceneType[];
  currentSceneId: string;
  onSelectScene: (sceneId: string) => void;
}

const SceneSelector = ({ scenes, currentSceneId, onSelectScene }: SceneSelectorProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`fixed right-4 top-20 transition-all duration-300 z-10 ${isExpanded ? 'w-64' : 'w-12'}`}>
      <button 
        className="bg-vr-dark text-white p-2 rounded-l-lg absolute -left-12 top-0"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? '→' : '←'}
      </button>
      
      <div className="bg-vr-dark/80 backdrop-blur-sm text-white rounded-lg shadow-lg p-4">
        {isExpanded && (
          <>
            <h3 className="text-lg font-semibold mb-4">Scenes</h3>
            <div className="space-y-3">
              {scenes.map((scene) => (
                <div
                  key={scene.id}
                  className={`flex items-center gap-3 cursor-pointer p-2 rounded-md transition-colors ${
                    scene.id === currentSceneId 
                      ? 'bg-vr-primary/30 border-l-4 border-vr-primary' 
                      : 'hover:bg-vr-dark/50'
                  }`}
                  onClick={() => onSelectScene(scene.id)}
                >
                  <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                    <img 
                      src={scene.image} 
                      alt={scene.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium">{scene.name}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SceneSelector;
