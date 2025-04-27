
import { useState } from 'react';
import { Search, Compass } from "lucide-react";
import TourCard from "@/components/Home/TourCard";
import TourRecommendation from "@/components/Tour/TourRecommendation";
import { TOURS } from "@/lib/tourData";

const ExploreTours = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredTours = searchQuery
    ? TOURS.filter(tour => 
        tour.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        tour.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : TOURS;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Explore Virtual Tours</h1>
        <div className="flex items-center space-x-2">
          <Compass className="text-vr-primary h-6 w-6" />
          <span className="text-lg">Discover Amazing Places</span>
        </div>
      </div>

      <div className="mb-8">
        <TourRecommendation />
      </div>

      <div className="relative max-w-xl mb-12">
        <input
          type="text"
          placeholder="Search for destinations..."
          className="w-full px-5 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 
                   text-gray-900 dark:text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-vr-primary"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <Search className="h-5 w-5 text-gray-500" />
        </div>
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
  );
};

export default ExploreTours;
