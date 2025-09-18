import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false); // for mobile dropdown
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false); // Close mobile nav on route change
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-gray-900 shadow-lg" : "bg-gray-900/90 backdrop-blur-sm"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold">
              <span className="text-amber-400">Sparkle</span>
              <span className="text-white">Design</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map(link =>
              link.submenu ? (
                <div key={link.path} className="relative group">
                  <NavLink to={link.path} currentPath={location.pathname}>
                    {link.label} <FiChevronDown className="inline-block ml-1" />
                  </NavLink>
                  <div className="absolute hidden group-hover:block bg-gray-800 rounded-md mt-1 shadow-lg z-10 min-w-[120px]">
                    {link.submenu.map(sublink => (
                      <Link
                        key={sublink.path}
                        to={sublink.path}
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                      >
                        {sublink.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink key={link.path} to={link.path} currentPath={location.pathname}>
                  {link.label}
                </NavLink>
              )
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
      }`}>
        <div className="bg-gray-800 px-2 pt-2 pb-4 space-y-1 shadow-md">
          {navLinks.map(link =>
            link.submenu ? (
              <div key={link.path}>
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className="flex justify-between w-full px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  {link.label}
                  <FiChevronDown className={`ml-2 transform transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
                </button>
                {aboutOpen && (
                  <div className="pl-4">
                    {link.submenu.map(sublink => (
                      <MobileNavLink key={sublink.path} to={sublink.path} currentPath={location.pathname}>
                        {sublink.label}
                      </MobileNavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <MobileNavLink key={link.path} to={link.path} currentPath={location.pathname}>
                {link.label}
              </MobileNavLink>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/services", label: "Services" },
  {
    path: "/about",
    label: "About",
    submenu: [
      { path: "/about", label: "Overview" },
      { path: "/team", label: "Team" },
    ],
  },
  { path: "/blog", label: "Blog" },
  { path: "/testimonials", label: "Testimonials" },
  { path: "/shop", label: "Shop" },
  { path: "/contact", label: "Contact" },
];

// Desktop Link
const NavLink = ({ to, currentPath, children }) => {
  const isActive = currentPath === to;
  return (
    <Link
      to={to}
      className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
        isActive
          ? "bg-gray-800 text-amber-400"
          : "text-gray-300 hover:bg-gray-800 hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
};

// Mobile Link
const MobileNavLink = ({ to, currentPath, children }) => {
  const isActive = currentPath === to;
  return (
    <Link
      to={to}
      className={`block px-3 py-2 rounded-md text-base font-medium ${
        isActive
          ? "bg-gray-700 text-amber-400"
          : "text-gray-300 hover:bg-gray-700 hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
};

export default Nav;
