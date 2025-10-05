import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Landing Page Sections
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Achievment from "./components/Achievment";
import ChatBot from "./components/ChatBot";
import CompanyOverview from "./components/CompanyOverview";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import ProjectsShowcase from "./components/ProjectsShowcase";
import Aproach from "./components/Aproach";
import TrustedBy from "./components/TrustedBy";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";


// Pages
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import CareersPage from "./pages/CareersPage";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Landing Page */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HeroSection
                title="Welcome to Trip Engineering"
                subtitle="Innovating the future with sustainable engineering solutions"
                image="/assets/images/home-hero.jpg"
              />
              <Achievment />
              <ChatBot />
              <CompanyOverview />
              <Services />
              <AboutUs />
              <ProjectsShowcase />
              <Aproach />
              <TrustedBy />
              <ContactSection />
              <Footer />
            </>
          }
        />

        {/* Other Pages */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/careers" element={<CareersPage />} />

        {/* Redirect unknown paths */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
