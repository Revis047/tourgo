
import { Eye } from "lucide-react";
import { APP_NAME } from "@/lib/constants";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Eye className="h-12 w-12 text-vr-primary mr-4" />
          <h1 className="text-4xl font-bold">{APP_NAME}</h1>
        </div>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg text-center mb-12">
            Experience immersive virtual tours of the world's most fascinating destinations from the comfort of your home.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p>
                To make virtual tourism accessible to everyone by providing high-quality, 
                immersive experiences that capture the essence of remarkable destinations 
                around the world.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Technology</h2>
              <p>
                Using cutting-edge VR technology and high-resolution imagery, we create 
                virtual experiences that let you explore destinations as if you were 
                really there.
              </p>
            </div>
          </div>

          <div className="bg-vr-primary/10 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-center">Key Features</h2>
            <ul className="grid md:grid-cols-3 gap-6">
              <li className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">360° Views</h3>
                <p>Immersive panoramic experiences of each location</p>
              </li>
              <li className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Interactive Hotspots</h3>
                <p>Navigate between different viewpoints seamlessly</p>
              </li>
              <li className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Info Points</h3>
                <p>Learn interesting facts about each location</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
