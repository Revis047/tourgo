
import { Link } from "react-router-dom";
import { TourType } from "@/lib/constants";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FeaturedTourProps {
  tour: TourType;
}

const FeaturedTour = ({ tour }: FeaturedTourProps) => {
  const { id, name, description, thumbnail, scenes } = tour;
  const firstSceneId = scenes.length > 0 ? scenes[0].id : '';

  return (
    <div className="relative h-[500px] rounded-lg overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={thumbnail} 
          alt={name} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>
      
      <div className="relative h-full flex items-end">
        <div className="container mx-auto px-4 pb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-vr-primary/20 text-vr-primary mb-4">
              <Eye className="mr-2 h-4 w-4" />
              Featured Experience
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{name}</h2>
            <p className="text-gray-300 text-lg mb-8">{description}</p>
            
            <Link to={`/tour/${id}/${firstSceneId}`}>
              <Button size="lg" className="bg-vr-primary hover:bg-vr-primary/90">
                Start VR Tour
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedTour;
