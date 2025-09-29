import React from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ use React Router Link
import { HashLink } from "react-router-hash-link"; // ✅ for smooth scrolling
import { navItems } from "../constants";
const Footer = () => {
  return (
    <footer className="bg-[#0b1315] text-[#FFFDD0] py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        
        {/* Left Logos and Names */}
        <div className="flex flex-col items-center md:items-start space-y-6">
          <div className="flex items-center gap-6">
            <div className="flex flex-col mt-0 items-center">
              <img src="/logo1.png" alt="Trip Engineering Logo" className="h-20" />
              <span className="text-4xl tracking-tight font-bold text-[#FFFDD0]">
                <span className="text-[#0b1399]">Trip</span>{" "}
                <span className="text-[#990000]">Engineering</span>
              </span>
            </div>
          </div>
        </div>

        {/* Right Side Contact Details */}
        <div className="text-lg text-center md:text-right space-y-2 ">
          <p>
            <span className="tracking-tight font-bold text-[#FFFDD0]">
                <span className="text-[#0b1399]">Trip</span>{" "}
                <span className="text-[#990000]">Engineering </span>
              </span>
             Pvt. Ltd., Tinkune, Kathmandu, Bagmati Province No. 01, Nepal - 4440000
          </p>
          <p>
            <a
              href="https://www.tripengineerings.com"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.tripengineerings.com,
              +977 9824297120
            </a>
          </p>

          {/* Quick Links */}
          <div className="flex justify-center md:justify-end gap-4 font-semibold flex-wrap">
            {/* Home → navigate to `/` and scroll smoothly */}
            <HashLink smooth to="/#home" className="hover:text-white">
              Home
            </HashLink>
            |
            <Link to="/about" className="hover:text-white">
              About Us
            </Link>
            |
            <Link to="/services" className="hover:text-white">
              Services
            </Link>
            |
            <Link to="/projects" className="hover:text-white">
              Projects
            </Link>
            |
            <Link to="/careers" className="hover:text-white">
              Careers
            </Link>
            |
            {/* Contact section on homepage */}
            <HashLink smooth to="/#contact" className="flex items-center">
              Contact Us
              <ChevronDown className="ml-1 w-4 h-4" />
            </HashLink>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-lg">
        © 2025 Trip Engineering Pvt. Ltd. | All Rights Reserved | Privacy Policy | Terms & Conditions
      </div>
    </footer>
  );
};

export default Footer;
