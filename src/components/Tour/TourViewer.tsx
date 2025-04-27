
import { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ZoomIn, ZoomOut, RotateRight } from 'lucide-react';

import { getTourById } from '@/lib/tourData';
import useVRControls from '@/hooks/useVRControls';
import Hotspot from './Hotspot';
import InfoPoint from './InfoPoint';
import SceneSelector from './SceneSelector';
import { Button } from '@/components/ui/button';

const TourViewer = () => {
  const { tourId, sceneId: initialSceneId } = useParams<{ tourId: string; sceneId: string }>();
  const navigate = useNavigate();
  const [currentSceneId, setCurrentSceneId] = useState<string>(initialSceneId || '');
  const containerRef = useRef<HTMLDivElement>(null);
  const panoramaRef = useRef<HTMLImageElement>(null);

  const tour = getTourById(tourId || '');
  
  useEffect(() => {
    if (!tour) {
      navigate('/');
      return;
    }
    
    if (!currentSceneId && tour.scenes.length > 0) {
      setCurrentSceneId(tour.scenes[0].id);
    }
  }, [tour, currentSceneId, navigate]);

  const currentScene = tour?.scenes.find(scene => scene.id === currentSceneId);
  const hotspots = tour?.hotspots[currentSceneId] || [];
  const infoPoints = tour?.infoPoints[currentSceneId] || [];

  const { position, zoom, zoomIn, zoomOut, resetView } = useVRControls({ 
    containerRef,
    sensitivity: 0.25,
    maxZoom: 3
  });

  const handleNavigate = (newSceneId: string) => {
    setCurrentSceneId(newSceneId);
    navigate(`/tour/${tourId}/${newSceneId}`);
  };

  const handleBackToTours = () => {
    navigate('/');
  };

  if (!tour || !currentScene) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div className="vr-scene relative overflow-hidden">
      <div className="absolute top-4 left-4 z-20">
        <Button 
          variant="outline" 
          size="sm" 
          className="bg-black/40 hover:bg-black/60 text-white border-none" 
          onClick={handleBackToTours}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Tours
        </Button>
      </div>
      
      <SceneSelector 
        scenes={tour.scenes}
        currentSceneId={currentSceneId}
        onSelectScene={handleNavigate}
      />

      <div 
        ref={containerRef}
        className="panorama-container bg-gradient-vr"
      >
        <div 
          className="panorama"
          style={{
            transform: `rotateY(${position.x}deg) rotateX(${-position.y}deg) scale(${zoom})`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <img
            ref={panoramaRef}
            src={currentScene.image}
            alt={currentScene.name}
            className="w-full h-full object-cover"
            style={{ transform: 'rotateZ(0deg)', transformOrigin: 'center center' }}
            draggable={false}
          />
        </div>

        {/* Hotspots are positioned with percentage-based coordinates */}
        {hotspots.map(hotspot => (
          <Hotspot
            key={hotspot.id}
            hotspot={hotspot}
            onNavigate={handleNavigate}
          />
        ))}

        {/* Info points for interesting details */}
        {infoPoints.map(info => (
          <InfoPoint 
            key={info.id}
            info={info}
          />
        ))}
      </div>
      
      {/* VR Controls */}
      <div className="vr-controls">
        <button 
          onClick={zoomIn}
          className="bg-vr-primary/80 hover:bg-vr-primary p-2 rounded-full text-white"
        >
          <ZoomIn size={18} />
        </button>
        <button 
          onClick={zoomOut}
          className="bg-vr-primary/80 hover:bg-vr-primary p-2 rounded-full text-white"
        >
          <ZoomOut size={18} />
        </button>
        <button 
          onClick={resetView}
          className="bg-vr-primary/80 hover:bg-vr-primary p-2 rounded-full text-white"
        >
          <RotateRight size={18} />
        </button>
      </div>
      
      {/* Scene Info */}
      <div className="absolute bottom-20 left-4 max-w-md bg-black/60 backdrop-blur-sm text-white p-4 rounded-lg z-10">
        <h2 className="text-xl font-bold mb-1">{currentScene.name}</h2>
        <p className="text-sm text-gray-200">{currentScene.description}</p>
      </div>
    </div>
  );
};

export default TourViewer;
