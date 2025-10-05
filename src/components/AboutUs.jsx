import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="w-full bg-[#0b1320] text-[#FFFDD0] py-20 px-6 md:px-16 text-center">
      {/* Heading */}
      <h3 className="text-3xl tracking-widest uppercase mb-6 md:text-5xl font-bold">About Us</h3>

      {/* Main Title */}
      <h2 className="text-2xl font-semibold mb-2  text-[#DC143C]  w-full">
        Over a decade of engineering & build excellence helping you envision,<br></br>
        design, and deliver extraordinary projects.
      </h2>

      {/* Description */}
      <p className="mt-6 text-base md:text-2xl text-[#FFFDD0] w-full leading-relaxed">
        At Trip Engineering, we believe in transforming every project into an
        enduring masterpiece. Backed by years of expertise, our in-house team
        delivers turnkey solutions that blend precision engineering, modern
        innovation, and uncompromised quality – ensuring functionality and
        sustainability in every build.
      </p>

      {/* Read More */}
      <div className="mt-10">
        <Link 
          to="/about" 
          className="text-lg font-medium tracking-wide border-b border-white hover:text-gray-300 hover:border-gray-300 transition"
        >
          READ MORE
        </Link>
      </div>
    </section>
  );
};

export default AboutUs;
