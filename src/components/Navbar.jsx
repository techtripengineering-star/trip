import React, { useState } from "react";
import logo from "../assets/img/logo1.png";
import { navItems } from "../constants";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; // 👈 import HashLink

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Scroll to top when navigating
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "instant" }); 
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 border-b border-neutral bg-[#001f3f]/50">
      <div className="container px-4 mx-auto relative text-lg">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" onClick={handleNavClick} className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-3xl tracking-tight font-bold text-[#FFFDD0]">
              <span className="text-[#0b1399]">Trip</span>{" "}
              <span className="text-[#990000]">Engineering</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex ml-auto space-x-8 items-center">
            {navItems.map((item, index) => (
              <li key={index}>
                {item.label === "Contact Us" ? (
                  <HashLink
                    smooth
                    to="/#contact" // 👈 force homepage + contact section
                    className="flex items-center bg-[#990000] text-[#FFFDD0] py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-200"
                  >
                    {item.label}
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </HashLink>
                ) : (
                  <Link
                    to={item.href}
                    onClick={handleNavClick}
                    className="text-[#FFFDD0] font-medium hover:text-gray-300 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger Button */}
          <button
            className="lg:hidden text-[#FFFDD0] ml-auto"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 bg-[#001f3f] rounded-md shadow-md">
            <ul className="flex flex-col space-y-4 p-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  {item.label === "Contact Us" ? (
                    <HashLink
                      smooth
                      to="/#contact" // 👈 works from any page
                      onClick={() => setIsOpen(false)}
                      className="w-full flex justify-between items-center bg-[#990000] text-[#FFFDD0] py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-200"
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </HashLink>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={handleNavClick}
                      className="block text-[#FFFDD0] font-medium hover:text-gray-300 transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
