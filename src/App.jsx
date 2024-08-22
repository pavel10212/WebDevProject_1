import React, { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { Menu } from "lucide-react";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Mobile menu toggle button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-20 p-2 rounded-md bg-red-500 text-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <div ref={sidebarRef} className="lg:block">
        <Sidebar
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </div>

      {/* Main content */}
      <main className="flex-grow overflow-auto bg-gray-300 w-full">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
