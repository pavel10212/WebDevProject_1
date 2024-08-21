import { Link } from "react-router-dom";
import { Home, BarChart2, Star, LayoutDashboard } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="bg-gradient-to-r from-red-800 to-red-500 text-gray-100 fixed left-0 top-0 h-full w-64 flex flex-col overflow-y-auto">
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
          />
          <SidebarLink to="cars" icon={<Home size={20} />} text="Cars" />
          <SidebarLink
            to="statistics"
            icon={<BarChart2 size={20} />}
            text="Statistics"
          />
          <SidebarLink
            to="highlightedCars"
            icon={<Star size={20} />}
            text="Highlighted Cars"
          />
        </ul>
      </nav>
    </div>
  );
};

const SidebarLink = ({ to, icon, text }) => (
  <li>
    <Link
      to={to}
      className="flex items-center p-3 rounded-lg hover:bg-zinc-900  transition-colors duration-200"
    >
      {icon}
      <span className="ml-3">{text}</span>
    </Link>
  </li>
);

export default Sidebar;
