import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className=" text-2xl font-bold text-gray-900">
          Flow<span className="text-primary">Task</span>
        </div>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
            Features
          </a>

          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
            Pricing
          </a>

          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
            About
          </a>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="hidden px-4 py-2 text-sm font-medium text-gray-700 sm:block cursor-pointer" onClick={() => navigate("/login")}>
            Login
          </button>

          <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-background-hover">
            Get Started
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;