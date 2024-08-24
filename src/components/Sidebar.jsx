import { Link } from "react-router-dom";
import { Home, BarChart2, Star, LayoutDashboard, X } from "lucide-react";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`
        bg-gradient-to-r from-red-800 to-red-500 text-gray-100 
        fixed left-0 top-0 h-full w-64 flex flex-col overflow-y-auto
        transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static z-50
      `}
    >
      {/* Close button for mobile */}
      <button
        onClick={onClose}
        className="lg:hidden absolute top-4 right-4 text-white"
      >
        <X size={24} />
      </button>

      <div className="p-5 border-b border-gray-700">
        <div className="flex justify-center mb-4">
          <img
            src="./logo.png"
            alt="Car Manager Logo"
            className="rounded-full w-24 shadow-lg backdrop-brightness-200"
          />
        </div>
        <h1 className="text-2xl font-bold text-center">Car Manager</h1>
      </div>
      <nav className="flex-grow">
        <ul className="p-4 space-y-2">
          <SidebarLink
            to="dashboard"
            icon={<LayoutDashboard size={20} />}
            text="Dashboard"
            onClose={onClose}
          />
          <SidebarLink
            to="cars"
            icon={<Home size={20} />}
            text="Cars"
            onClose={onClose}
          />
          <SidebarLink
            to="statistics"
            icon={<BarChart2 size={20} />}
            text="Statistics"
            onClose={onClose}
          />
          <SidebarLink
            to="highlightedCars"
            icon={<Star size={20} />}
            text="Highlighted Cars"
            onClose={onClose}
          />
        </ul>
      </nav>
    </div>
  );
};

const SidebarLink = ({ to, icon, text, onClose }) => (
  <li>
    <Link
      to={to}
      className="flex items-center p-3 rounded-lg hover:bg-zinc-900 transition-colors duration-200"
      onClick={onClose} // Call onClose when the link is clicked
    >
      {icon}
      <span className="ml-3">{text}</span>
    </Link>
  </li>
);

export default Sidebar;