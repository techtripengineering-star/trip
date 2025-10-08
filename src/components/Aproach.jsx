import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // ✅ Import navigation hook
import showcaseImg from "../assets/img/hall123.jpg"; // adjust path if needed

const Aproach = () => {
  const navigate = useNavigate(); // ✅ Initialize navigation

  const handleExploreClick = () => {
    navigate("/projects"); // ✅ Redirect to your Project Page route
  };

  return (
    <section className="relative w-full bg-[#0b1320] text-[#FFFDD0] py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Heading */}
      <div className="flex justify-between items-center mb-16">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold"
        >
          Showcasing Our Remarkable Approach
        </motion.h2>
      </div>

      {/* Image Showcase */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative w-full rounded-lg overflow-hidden shadow-lg group"
      >
        <img
          src={showcaseImg}
          alt="Signature Approach"
          className="w-full h-[750px] object-cover transform transition-transform duration-700 group-hover:scale-105 group-hover:shadow-2xl"
        />

        {/* Overlay text bottom-left */}
        <div className="absolute bottom-6 left-6 text-sm md:text-base font-semibold tracking-wide">
          MANIPAL INTERNATIONAL HOSPITAL VIP CABIN
        </div>

        {/* Explore link bottom-right */}
        <div
          onClick={handleExploreClick}
          className="absolute bottom-6 right-6 text-sm md:text-base uppercase font-medium flex items-center gap-2 cursor-pointer hover:underline hover:text-[#DC143C] transition-colors duration-300"
        >
          Explore <span className="ml-1">&gt;&gt;&gt;</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Aproach;
