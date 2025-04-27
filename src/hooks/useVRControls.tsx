
import { useEffect, useState, useRef, RefObject } from 'react';

interface VRControlsProps {
  containerRef: RefObject<HTMLDivElement>;
  sensitivity?: number;
  enableZoom?: boolean;
  maxZoom?: number;
  minZoom?: number;
}

export const useVRControls = ({
  containerRef,
  sensitivity = 0.3,
  enableZoom = true,
  maxZoom = 3,
  minZoom = 1
}: VRControlsProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const lastPosition = useRef({ x: 0, y: 0 });
  const lastMousePosition = useRef({ x: 0, y: 0 });

  // Initialize touch tracking
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Mouse Events
    const handleMouseDown = (e: MouseEvent) => {
      setIsDragging(true);
      lastMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      
      const deltaX = (e.clientX - lastMousePosition.current.x) * sensitivity;
      const deltaY = (e.clientY - lastMousePosition.current.y) * sensitivity;
      
      setPosition(prev => ({
        x: (prev.x + deltaX) % 360,
        y: Math.max(-90, Math.min(90, prev.y + deltaY))
      }));
      
      lastMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    // Touch Events
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        setIsDragging(true);
        lastMousePosition.current = { 
          x: e.touches[0].clientX, 
          y: e.touches[0].clientY 
        };
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      
      const deltaX = (e.touches[0].clientX - lastMousePosition.current.x) * sensitivity;
      const deltaY = (e.touches[0].clientY - lastMousePosition.current.y) * sensitivity;
      
      setPosition(prev => ({
        x: (prev.x + deltaX) % 360,
        y: Math.max(-90, Math.min(90, prev.y + deltaY))
      }));
      
      lastMousePosition.current = { 
        x: e.touches[0].clientX, 
        y: e.touches[0].clientY 
      };
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
    };

    // Wheel Event for Zoom
    const handleWheel = (e: WheelEvent) => {
      if (!enableZoom) return;
      
      e.preventDefault();
      const newZoom = zoom - (e.deltaY * 0.001);
      setZoom(Math.max(minZoom, Math.min(maxZoom, newZoom)));
    };

    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    
    container.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
    
    if (enableZoom) {
      container.addEventListener('wheel', handleWheel);
    }

    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      
      container.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      
      if (enableZoom) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, [containerRef, isDragging, sensitivity, zoom, enableZoom, maxZoom, minZoom]);

  const zoomIn = () => {
    if (zoom < maxZoom) {
      setZoom(prev => Math.min(maxZoom, prev + 0.1));
    }
  };

  const zoomOut = () => {
    if (zoom > minZoom) {
      setZoom(prev => Math.max(minZoom, prev - 0.1));
    }
  };

  const resetView = () => {
    setPosition({ x: 0, y: 0 });
    setZoom(1);
  };

  return { position, zoom, isDragging, zoomIn, zoomOut, resetView };
};

export default useVRControls;
