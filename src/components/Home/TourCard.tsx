
import { Link } from "react-router-dom";
import { TourType } from "@/lib/constants";

interface TourCardProps {
  tour: TourType;
}

const TourCard = ({ tour }: TourCardProps) => {
  const { id, name, description, thumbnail, scenes } = tour;
  const firstSceneId = scenes.length > 0 ? scenes[0].id : '';

  return (
    <Link 
      to={`/tour/${id}/${firstSceneId}`}
      className="tour-card block bg-white dark:bg-vr-dark rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="relative h-48">
        <img
          src={thumbnail}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-4">{description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">{scenes.length} scenes</span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-vr-primary/20 text-vr-primary">
            Explore
          </span>
        </div>
      </div>
    </Link>
  );
};

export default TourCard;
