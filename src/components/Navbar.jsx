import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import profileImage from "../assets/Nateliso.jpg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <nav className="sticky top-0 bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <div className="flex-shrink-0 flex items-center space-x-2">
            <img
              src={profileImage}
              alt="Nateliso Profile"
              className="profile-image"
            />
            <span className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">
              Nateliso
            </span>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 dark:text-blue-400 font-medium"
                  : "text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 dark:text-blue-400 font-medium"
                  : "text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400"
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 dark:text-blue-400 font-medium"
                  : "text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 dark:text-blue-400 font-medium"
                  : "text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400"
              }
            >
              Contact
            </NavLink>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              />
              <span className="toggle-slider">
                <svg className="moon-icon" viewBox="0 0 24 24">
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
                <svg className="sun-icon" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              </span>
            </label>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <span className="text-2xl">{isOpen ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "block px-4 py-2 text-blue-600 dark:text-blue-400 font-medium"
                : "block px-4 py-2 text-neutral-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            }
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "block px-4 py-2 text-blue-600 dark:text-blue-400 font-medium"
                : "block px-4 py-2 text-neutral-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            }
            onClick={() => setIsOpen(false)}
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "block px-4 py-2 text-blue-600 dark:text-blue-400 font-medium"
                : "block px-4 py-2 text-neutral-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            }
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "block px-4 py-2 text-blue-600 dark:text-blue-400 font-medium"
                : "block px-4 py-2 text-neutral-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            }
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
          <label className="toggle-switch block px-4 py-2">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => {
                setDarkMode(!darkMode);
                setIsOpen(false);
              }}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            />
            <span className="toggle-slider">
              <svg className="moon-icon" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
              <svg className="sun-icon w-6 h-6 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            </span>
          </label>
        </div>
      )}
    </nav>
  );
}
export default Navbar;