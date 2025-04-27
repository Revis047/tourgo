
import { Link } from "react-router-dom";
import { Eye } from "lucide-react";
import { APP_NAME } from "@/lib/constants";

const Navbar = () => {
  return (
    <nav className="bg-vr-dark text-white shadow-md z-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Eye className="w-6 h-6 text-vr-primary" />
            <span className="font-bold text-xl">{APP_NAME}</span>
          </Link>
          
          <div className="flex space-x-6">
            <Link to="/" className="hover:text-vr-primary transition-colors">
              Home
            </Link>
            <Link to="/explore" className="hover:text-vr-primary transition-colors">
              Explore Tours
            </Link>
            <Link to="/about" className="hover:text-vr-primary transition-colors">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
