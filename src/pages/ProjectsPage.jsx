import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import ChatBot from "../components/ChatBot";

const ProjectsPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ChatBot />
    <section className="py-20 px-6 text-center text-[#FFFDD0] bg-[#0b1320]">
      <h1 className="text-4xl font-bold mb-6 text-[#FFFDD0]">Our Projects</h1>
      <p className="max-w-3xl mx-auto text-lg leading-relaxed">
        Over the years, Trip Engineering Pvt. Ltd. has successfully executed
        numerous projects in infrastructure, construction, and industrial
        development. Explore some of our highlighted works below.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <div className="p-6 bg-[#112240] rounded-lg shadow-lg">🏗️ Bridge Construction</div>
        <div className="p-6 bg-[#112240] rounded-lg shadow-lg">🏢 Commercial Complex</div>
        <div className="p-6 bg-[#112240] rounded-lg shadow-lg">⚡ Power Plant</div>
      </div>
    </section>
      <Footer />
    </>
  );
};

export default ProjectsPage;
