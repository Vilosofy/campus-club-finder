import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">Campus Club Finder</div>
          <div className="space-x-6">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? "font-bold border-b-2 border-white" : "hover:text-blue-200"
              }
              end
            >
              Home
            </NavLink>
            <NavLink 
              to="/clubs" 
              className={({ isActive }) => 
                isActive ? "font-bold border-b-2 border-white" : "hover:text-blue-200"
              }
            >
              Clubs
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive ? "font-bold border-b-2 border-white" : "hover:text-blue-200"
              }
            >
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;