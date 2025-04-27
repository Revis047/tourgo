
import { useState } from "react";
import FeaturedTour from "@/components/Home/FeaturedTour";
import TourCard from "@/components/Home/TourCard";
import { TOURS, getFeaturedTours } from "@/lib/tourData";
import { APP_NAME, APP_DESCRIPTION } from "@/lib/constants";
import { Navigation } from "lucide-react";

const Index = () => {
  const featuredTours = getFeaturedTours();
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredTours = searchQuery
    ? TOURS.filter(tour => 
        tour.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        tour.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : TOURS;

  return (
    <div className="animate-fade-in">
      {/* Hero section */}
      <section className="relative bg-gradient-vr text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Navigation className="h-10 w-10 text-vr-primary mr-3 animate-pulse-light" />
              <h1 className="text-4xl font-bold">{APP_NAME}</h1>
            </div>
            <p className="text-xl mb-8 text-gray-200">
              {APP_DESCRIPTION}
            </p>
            
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search for destinations..."
                className="w-full px-5 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-vr-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <button className="bg-vr-primary hover:bg-vr-primary/90 text-white p-2 rounded-full">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Featured tour section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {featuredTours.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-6">Featured Experience</h2>
              <FeaturedTour tour={featuredTours[0]} />
            </div>
          )}

          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Explore Virtual Tours</h2>
            </div>
            
            {filteredTours.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTours.map((tour) => (
                  <TourCard key={tour.id} tour={tour} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-gray-500">No tours found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* How it works section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-10 text-center">How VR WanderExplore Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md text-center">
              <div className="bg-vr-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-vr-primary">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Choose a Destination</h3>
              <p className="text-gray-600 dark:text-gray-300">Browse our collection of stunning virtual reality tours from around the world.</p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md text-center">
              <div className="bg-vr-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-vr-primary">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Explore in VR</h3>
              <p className="text-gray-600 dark:text-gray-300">Immerse yourself in 360° environments, interact with hotspots, and discover information points.</p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md text-center">
              <div className="bg-vr-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-vr-primary">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Navigate Between Scenes</h3>
              <p className="text-gray-600 dark:text-gray-300">Move between different viewpoints and locations within each tour for a complete experience.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
