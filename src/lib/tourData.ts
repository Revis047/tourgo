
import { TourType } from './constants';

export const TOURS: TourType[] = [
  {
    id: "grand-canyon",
    name: "Grand Canyon",
    description: "Experience the majestic views and vast landscapes of one of America's most iconic national parks",
    thumbnail: "https://source.unsplash.com/photo-1458668383970-8ddd3927deed",
    featured: true,
    scenes: [
      {
        id: "canyon-rim",
        name: "South Rim",
        image: "https://source.unsplash.com/photo-1458668383970-8ddd3927deed",
        description: "Panoramic view from the South Rim, offering breathtaking vistas of the vast canyon landscape."
      },
      {
        id: "bright-angel",
        name: "Bright Angel Trail",
        image: "https://source.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
        description: "The winding path of Bright Angel Trail as it descends into the canyon."
      },
      {
        id: "colorado-river",
        name: "Colorado River",
        image: "https://source.unsplash.com/photo-1426604966848-d7adac402bff",
        description: "The powerful Colorado River that carved the Grand Canyon over millions of years."
      }
    ],
    hotspots: {
      "canyon-rim": [
        {
          id: "to-bright-angel",
          position: { x: 30, y: 55 },
          destinationSceneId: "bright-angel",
          label: "Bright Angel Trail"
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
    id: "ancient-rome",
    name: "Ancient Rome",
    description: "Step back in time to explore the architectural wonders of the Roman Empire",
    thumbnail: "https://source.unsplash.com/photo-1487958449943-2429e8be8625",
    featured: false,
    scenes: [
      {
        id: "colosseum",
        name: "The Colosseum",
        image: "https://source.unsplash.com/photo-1487958449943-2429e8be8625",
        description: "The iconic Colosseum, once host to gladiatorial contests and public spectacles."
      },
      {
        id: "roman-forum",
        name: "Roman Forum",
        image: "https://source.unsplash.com/photo-1473177104440-ffee2f376098",
        description: "The center of Roman public life for centuries, hosting processions, elections, and commerce."
      }
    ],
    hotspots: {
      "colosseum": [
        {
          id: "to-forum",
          position: { x: 60, y: 50 },
          destinationSceneId: "roman-forum",
          label: "To Roman Forum"
        }
      ],
      "roman-forum": [
        {
          id: "to-colosseum",
          position: { x: 40, y: 50 },
          destinationSceneId: "colosseum",
          label: "To Colosseum"
        }
      ]
    },
    infoPoints: {
      "colosseum": [
        {
          id: "colosseum-info",
          position: { x: 50, y: 45 },
          title: "Architectural Marvel",
          description: "Completed in 80 AD, the Colosseum could hold between 50,000-80,000 spectators."
        }
      ],
      "roman-forum": [
        {
          id: "forum-info",
          position: { x: 45, y: 55 },
          title: "Center of Rome",
          description: "For centuries, the Forum was the center of day-to-day life in Rome."
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
          description: "This living room features integrated smart home technology, including voice-controlled lighting and climate systems."
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
