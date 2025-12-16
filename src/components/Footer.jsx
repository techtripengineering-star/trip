import React from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  // Scroll to top for page navigation
  const handlePageNav = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0b1315] text-[#FFFDD0] py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">

        {/* Left: Logo & Name */}
        <div className="flex flex-col items-center space-y-4">
          <img
            src="/logo1.png"
            alt="Trip Engineering Logo"
            className="h-20"
          />

          <span className="text-4xl tracking-tight font-bold text-center">
            <span className="text-[#0b1399]">Trip</span>{" "}
            <span className="text-[#990000]">Engineering</span>
          </span>
        </div>


        {/* Right: Contact & Navigation */}
        <div className="text-lg text-center md:text-right space-y-3">
          <p>
            <span className="font-bold">
              <span className="text-[#0b1399]">Trip</span>{" "}
              <span className="text-[#990000]">Engineering</span>
            </span>{" "}
            Pvt. Ltd., Mahalaxmi Municipality-06, Siddipur, Lalitpur,
            PO Box No: 44600
          </p>

          <p>
            <a
              href="https://www.tripengineering.com.np"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              tripengineering.com.np
            </a>{" "}
            | +977 9824297120
          </p>

          {/* Quick Links */}
          <div className="flex justify-center md:justify-end gap-4 font-semibold flex-wrap">
            <Link to="/" onClick={handlePageNav} className="hover:text-white">
              Home
            </Link>
            |
            <Link to="/about" onClick={handlePageNav} className="hover:text-white">
              About Us
            </Link>
            |
            <Link to="/services" onClick={handlePageNav} className="hover:text-white">
              Services
            </Link>
            |
            <Link to="/projects" onClick={handlePageNav} className="hover:text-white">
              Projects
            </Link>
            |
            <Link to="/careers" onClick={handlePageNav} className="hover:text-white">
              Careers
            </Link>
            |
            <HashLink
              smooth
              to="/#contact"
              className="flex items-center hover:text-white"
            >
              Contact Us
              <ChevronDown className="ml-1 w-4 h-4" />
            </HashLink>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm md:text-base">
        © 2025 Trip Engineering Pvt. Ltd. |{" "}
        <Link
          to="/all-rights-reserved"
          onClick={handlePageNav}
          className="hover:text-white underline-offset-4 hover:underline"
        >
          All Rights Reserved
        </Link>{" "}
        |{" "}
        <Link
          to="/privacy-policy"
          onClick={handlePageNav}
          className="hover:text-white underline-offset-4 hover:underline"
        >
          Privacy Policy
        </Link>{" "}
        |{" "}
        <Link
          to="/terms-and-conditions"
          onClick={handlePageNav}
          className="hover:text-white underline-offset-4 hover:underline"
        >
          Terms & Conditions
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
