import { TourType } from './constants';

export const TOURS: TourType[] = [
  {
    id: "grand-canyon",
    name: "Grand Canyon",
    description: "Experience the majestic views and vast landscapes of one of America's most iconic national parks",
    thumbnail: "https://source.unsplash.com/photo-1426604966848-d7adac402bff",
    featured: true,
    scenes: [
      {
        id: "canyon-rim",
        name: "South Rim",
        image: "https://source.unsplash.com/photo-1426604966848-d7adac402bff",
        description: "Panoramic view from the South Rim, offering breathtaking vistas of the vast canyon landscape."
      },
      {
        id: "bright-angel",
        name: "Bright Angel Trail",
        image: "https://source.unsplash.com/photo-1506744038136-46273834b3fb",
        description: "The winding path of Bright Angel Trail as it descends into the canyon."
      },
      {
        id: "colorado-river",
        name: "Colorado River",
        image: "https://source.unsplash.com/photo-1500375592092-40eb2168fd21",
        description: "The powerful Colorado River that carved the Grand Canyon over millions of years."
      }
    ],
    hotspots: {
      "canyon-rim": [
        {
          id: "to-bright-angel",
          position: { x: 30, y: 55 },
          destinationSceneId: "bright-angel",
          label: "To Bright Angel Trail"
        }
      ],
      "bright-angel": [
        {
          id: "to-rim",
          position: { x: 70, y: 45 },
          destinationSceneId: "canyon-rim",
          label: "Back to South Rim"
        },
        {
          id: "to-river",
          position: { x: 40, y: 60 },
          destinationSceneId: "colorado-river",
          label: "To Colorado River"
        }
      ],
      "colorado-river": [
        {
          id: "to-trail",
          position: { x: 55, y: 40 },
          destinationSceneId: "bright-angel",
          label: "Back to Trail"
        }
      ]
    },
    infoPoints: {
      "canyon-rim": [
        {
          id: "rim-info-1",
          position: { x: 25, y: 45 },
          title: "Geological Formation",
          description: "The Grand Canyon was carved over 6 million years by the Colorado River, exposing rock layers that date back 2 billion years."
        }
      ],
      "bright-angel": [
        {
          id: "trail-info-1",
          position: { x: 60, y: 50 },
          title: "Historic Trail",
          description: "Bright Angel Trail was originally used by Native Americans to access the canyon floor."
        }
      ],
      "colorado-river": [
        {
          id: "river-info-1",
          position: { x: 45, y: 55 },
          title: "River Power",
          description: "The Colorado River flows at an average of 12,000 cubic feet per second."
        }
      ]
    }
  },
  {
    id: "modern-apartment",
    name: "Modern Apartment",
    description: "Explore a beautifully designed contemporary living space with cutting-edge features",
    thumbnail: "https://source.unsplash.com/photo-1721322800607-8c38375eef04",
    featured: true,
    scenes: [
      {
        id: "living-room",
        name: "Living Room",
        image: "https://source.unsplash.com/photo-1721322800607-8c38375eef04",
        description: "Spacious living area with floor-to-ceiling windows offering stunning city views."
      }
    ],
    hotspots: {
      "living-room": []
    },
    infoPoints: {
      "living-room": [
        {
          id: "living-info",
          position: { x: 50, y: 50 },
          title: "Smart Home Features",
          description: "This living room features integrated smart home technology, including voice-controlled lighting and climate systems.",
          image: "https://source.unsplash.com/photo-1488590528505-98d2b5aba04b"
        }
      ]
    }
  },
  {
    id: "starry-night",
    name: "Night Sky Experience",
    description: "Immerse yourself in the beauty of the night sky and celestial wonders",
    thumbnail: "https://source.unsplash.com/photo-1470813740244-df37b8c1edcb",
    featured: false,
    scenes: [
      {
        id: "starry-view",
        name: "Starry Night",
        image: "https://source.unsplash.com/photo-1470813740244-df37b8c1edcb",
        description: "A mesmerizing view of the star-filled night sky."
      },
      {
        id: "forest-night",
        name: "Forest at Night",
        image: "https://source.unsplash.com/photo-1500673922987-e212871fec22",
        description: "Experience the magical atmosphere of a forest under the stars."
      }
    ],
    hotspots: {
      "starry-view": [
        {
          id: "to-forest",
          position: { x: 60, y: 50 },
          destinationSceneId: "forest-night",
          label: "To Forest"
        }
      ],
      "forest-night": [
        {
          id: "to-stars",
          position: { x: 40, y: 50 },
          destinationSceneId: "starry-view",
          label: "Back to Stars"
        }
      ]
    },
    infoPoints: {
      "starry-view": [
        {
          id: "constellation-info",
          position: { x: 50, y: 45 },
          title: "Constellations",
          description: "Look for major constellations visible in the northern hemisphere."
        }
      ],
      "forest-night": [
        {
          id: "forest-info",
          position: { x: 45, y: 55 },
          title: "Nocturnal Forest",
          description: "The forest comes alive at night with unique sounds and activities."
        }
      ]
    }
  }
];

export const getFeaturedTours = (): TourType[] => {
  return TOURS.filter(tour => tour.featured);
};

export const getTourById = (id: string): TourType | undefined => {
  return TOURS.find(tour => tour.id === id);
};

export const getSceneById = (tourId: string, sceneId: string): any => {
  const tour = getTourById(tourId);
  if (!tour) return null;
  return tour.scenes.find(scene => scene.id === sceneId);
};
