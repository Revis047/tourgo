
export const APP_NAME = "VR WanderExplore";
export const APP_DESCRIPTION = "Immersive virtual reality tours of the world's most fascinating destinations";

export type SceneType = {
  id: string;
  name: string;
  image: string;
  description: string;
};

export type HotspotType = {
  id: string;
  position: { x: number; y: number };
  destinationSceneId: string;
  label?: string;
};

export type InfoPointType = {
  id: string;
  position: { x: number; y: number };
  title: string;
  description: string;
  image?: string;
};

export type TourType = {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  featured: boolean;
  scenes: SceneType[];
  hotspots: Record<string, HotspotType[]>;
  infoPoints: Record<string, InfoPointType[]>;
};
