
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Compass } from "lucide-react";
import { TourType } from "@/lib/constants";
import { TOURS } from "@/lib/tourData";

const TourRecommendation = () => {
  const [recommendedTour, setRecommendedTour] = useState<TourType | null>(null);

  useEffect(() => {
    // For now, we'll just randomly select a tour
    // In a real application, this would be based on user preferences and AI recommendations
    const getRecommendation = () => {
      const randomIndex = Math.floor(Math.random() * TOURS.length);
      setRecommendedTour(TOURS[randomIndex]);
    };

    getRecommendation();
  }, []);

  if (!recommendedTour) return null;

  return (
    <Card className="bg-gradient-to-r from-vr-primary/10 to-vr-primary/5">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Compass className="h-6 w-6 text-vr-primary" />
          <CardTitle>Recommended Tour</CardTitle>
        </div>
        <CardDescription>Based on trending destinations</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4">
          <div className="w-32 h-32 rounded-lg overflow-hidden">
            <img
              src={recommendedTour.thumbnail}
              alt={recommendedTour.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">{recommendedTour.name}</h3>
            <p className="text-gray-600 dark:text-gray-300 line-clamp-2">{recommendedTour.description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TourRecommendation;
