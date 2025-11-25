import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    
    { path: "/initiatives", label: "Initiatives" },
    { path: "/volunteer", label: "Volunteer" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
    { path: "/about", label: "About" },
  ];

  const isActiveLink = (path) => location.pathname === path;

  const handleCTAClick = () => {
    // Redirect to Join Us page
    window.location.href = "/join-us";
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md border-b border-gray-200"
          : "bg-white border-b border-gray-100"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-5">
          {/* Logo / Brand Name */}
          <div className="logo">
            <Link to="/" className="flex items-center space-x-2 md:space-x-3 group">
              {/* Logo Image (if available) */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-orange-200 overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300">
                <img
                  src="./images/image.png"
                  alt="Founder"
                  className="w-full h-full object-cover object-top "
                />
              </div>
              <img
                src="./images/Anandhlogo.png"
                alt="Anand Logo"
                className="w-8  pl-2 h-10 md:w-10 md:h-12 object-contain"
              />
            </div>
                <div>
                  <h1 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    <span className="text-orange-500">Anand </span>
                    <span className="text-blue-700">Youth</span>
                  </h1>
                  <p className="text-xs text-gray-600 italic hidden md:block">
                    "Dharmo Rakshati Rakshitah"
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:block" aria-label="Main navigation">
            <ul className="flex items-center space-x-1 list-none m-0 p-0">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`px-4 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
                      isActiveLink(item.path)
                        ? "text-blue-700 bg-blue-50 border border-blue-200"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                    aria-current={isActiveLink(item.path) ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <button
              onClick={handleCTAClick}
              className="cta-btn px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Join Us
            </button>
          </div>

          {/* Mobile Menu Icon (Hamburger) */}
          <div className="menu-icon lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav aria-label="Mobile navigation">
              <ul className="space-y-2 list-none m-0 p-0">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                        isActiveLink(item.path)
                          ? "text-blue-700 bg-blue-50 border border-blue-200"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      }`}
                      aria-current={isActiveLink(item.path) ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <button
                    onClick={handleCTAClick}
                    className="cta-btn w-full text-left px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md"
                  >
                    Join Us
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
