import React from "react";
import {
  Home,
  Info,
  BarChart2,
  Database,
  Bell,
  Folder,
  LineChart,
  FileText,
  Users,
  Settings,
  LogOut,
} from "lucide-react";

const MenuItem = ({ icon: Icon, label, badge, href = "#" }) => (
  <a
    href={href}
    className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
  >
    <Icon className="w-5 h-5 mr-2" />
    <span className="flex-grow">{label}</span>
    {badge && (
      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ml-3">
        {badge}
      </span>
    )}
  </a>
);

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen bg-white border-r">
      <div className="flex items-center justify-between p-4">
        <img
          src="https://res.cloudinary.com/speedwares/image/upload/v1659284687/windframe-logo-main_daes7r.png"
          alt="Logo"
          className="h-8"
        />
        <div className="flex items-center">
          <div className="relative mr-2">
            <input
              type="search"
              placeholder="Search"
              className="pl-8 pr-2 py-1 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <Home className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>
          <button className="p-1 rounded-full hover:bg-gray-100">
            <Bell className="w-5 h-5 text-gray-500" />
          </button>
          <img
            src="https://static01.nyt.com/images/2019/11/08/world/08quebec/08quebec-superJumbo.jpg"
            alt="Profile"
            className="w-8 h-8 rounded-full ml-2"
          />
        </div>
      </div>

      <nav className="flex-grow p-4">
        <div className="mb-4">
          <MenuItem icon={Home} label="Dashboard" />
          <MenuItem icon={Info} label="About" />
          <MenuItem icon={BarChart2} label="Hero" />
        </div>

        <div className="mb-4">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Data
          </h3>
          <MenuItem icon={Folder} label="Folders" />
          <MenuItem icon={Bell} label="Alerts" />
          <MenuItem icon={LineChart} label="Statistics" badge="New" />
        </div>

        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Contact
          </h3>
          <MenuItem icon={FileText} label="Forms" badge="15" />
          <MenuItem icon={Users} label="Agents" />
          <MenuItem icon={Users} label="Customers" />
        </div>
      </nav>

      <div className="p-4 border-t">
        <MenuItem icon={Settings} label="Settings" />
        <MenuItem icon={LogOut} label="Logout" />
      </div>
    </div>
  );
};

export default Sidebar;
