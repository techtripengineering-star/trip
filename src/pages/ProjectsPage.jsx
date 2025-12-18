import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import ChatBot from "../components/ChatBot";
import ProjectSection from "../components/ProjectSection";

const ProjectsPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ChatBot />
      <ProjectSection />

      <Footer />
    </>
  );
};

export default ProjectsPage;
