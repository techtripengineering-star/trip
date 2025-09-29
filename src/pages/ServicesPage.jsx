import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import ChatBot from "../components/ChatBot";


const ServicesPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ChatBot />

      {/* Our Services Section */}
      <section className="py-20 px-6 bg-[#111827] text-[#FFFDD0]">
        <div className="max-w-[1750px] mx-auto space-y-16">
          {/* Section Header */}
          <h2 className="text-5xl font-bold text-[#FFFDD0] mb-10 text-center">
            Our Services
          </h2>

          {/* HVAC Services */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-[#DC143C]">HVAC & Climate Control Solutions</h3>
            <p className="text-base md:text-xl leading-relaxed text-justify">
              Our <span className="font-semibold">Heating, Ventilation, and Air Conditioning (HVAC)</span> 
              solutions are designed to provide energy-efficient, reliable, and sustainable climate control 
              systems for residential, commercial, and industrial facilities. We focus on comfort, air quality, 
              and compliance with global standards.
            </p>
            <ul className="list-disc list-inside text-base md:text-lg space-y-2">
              <li>Centralized HVAC system design and supervision</li>
              <li>Energy-efficient chillers, VRF/VRV systems, and ducted air systems</li>
              <li>Indoor air quality monitoring and purification systems</li>
              <li>Green and sustainable HVAC designs with energy savings</li>
              <li>Maintenance and retrofitting for existing HVAC systems</li>
            </ul>
          </div>

          {/* Divider Line */}
          <div className="w-full border-t border-gray-600"></div>

          {/* Electrical Works */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-[#DC143C]">Electrical & Allied Works</h3>
            <p className="text-base md:text-xl leading-relaxed text-justify">
              We provide <span className="font-semibold">comprehensive electrical engineering services</span> 
              to power infrastructures safely and efficiently. From low-voltage installations to 
              advanced smart grids, our solutions meet the highest standards of safety, reliability, and innovation.
            </p>
            <ul className="list-disc list-inside text-base md:text-lg space-y-2">
              <li>Complete electrical layout design and execution</li>
              <li>Power distribution systems (LT/HT panels, transformers, substations)</li>
              <li>Lighting design – energy-efficient and smart lighting systems</li>
              <li>Backup power solutions (UPS, generators, renewable integrations)</li>
              <li>Earthing, lightning protection, and safety audits</li>
              <li>Smart metering and electrical automation</li>
            </ul>
          </div>

          {/* Divider Line */}
          <div className="w-full border-t border-gray-600"></div>

          {/* Plumbing Services */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-[#DC143C]">Plumbing & Sanitary Engineering</h3>
            <p className="text-base md:text-xl leading-relaxed text-justify">
              Our <span className="font-semibold">plumbing and sanitary solutions</span> are focused on ensuring 
              efficiency, hygiene, and durability in every project. We deliver designs that minimize water wastage 
              and maximize sustainability in both residential and industrial infrastructures.
            </p>
            <ul className="list-disc list-inside text-base md:text-lg space-y-2">
              <li>Water supply and distribution network design</li>
              <li>Drainage, stormwater, and rainwater harvesting systems</li>
              <li>Sustainable water recycling and reuse systems</li>
              <li>Design and installation of sanitary fixtures</li>
              <li>Plumbing for industrial and high-rise buildings</li>
              <li>Maintenance and retrofitting of pipelines</li>
            </ul>
          </div>

          {/* Divider Line */}
          <div className="w-full border-t border-gray-600"></div>

          {/* Fire-Fighting */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-[#DC143C]">Fire-Fighting & Life Safety Systems</h3>
            <p className="text-base md:text-xl leading-relaxed text-justify">
              Safety is a cornerstone of our engineering philosophy. We design and implement 
              <span className="font-semibold"> fire-fighting and life safety systems</span> that protect lives 
              and infrastructure while meeting international codes and standards.
            </p>
            <ul className="list-disc list-inside text-base md:text-lg space-y-2">
              <li>Automatic sprinkler and hydrant systems</li>
              <li>Fire alarm and detection systems (conventional & addressable)</li>
              <li>Smoke management and emergency ventilation systems</li>
              <li>Fire extinguishing systems (water, foam, CO₂, FM200, etc.)</li>
              <li>Emergency lighting and exit signage</li>
              <li>Fire safety audits and compliance checks</li>
            </ul>
          </div>

          {/* Divider Line */}
          <div className="w-full border-t border-gray-600"></div>

          {/* Surveillance */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-[#DC143C]">Surveillance & Security Systems</h3>
            <p className="text-base md:text-xl leading-relaxed text-justify">
              We integrate advanced <span className="font-semibold">surveillance and security systems</span> 
              to ensure 24/7 safety for residential, commercial, and industrial facilities. Our designs focus on 
              intelligent monitoring, remote access, and automation for seamless security.
            </p>
            <ul className="list-disc list-inside text-base md:text-lg space-y-2">
              <li>CCTV surveillance systems with AI-based analytics</li>
              <li>Access control systems (RFID, biometrics, smart locks)</li>
              <li>Intrusion detection and perimeter security</li>
              <li>Integrated security dashboards and monitoring platforms</li>
              <li>Remote monitoring and cloud storage solutions</li>
            </ul>
          </div>

          {/* Divider Line */}
          <div className="w-full border-t border-gray-600"></div>

          {/* Factory Automation */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-[#DC143C]">Factory & Industrial Automation</h3>
            <p className="text-base md:text-xl leading-relaxed text-justify">
              We provide <span className="font-semibold">smart automation solutions</span> for factories and 
              industries, enabling efficiency, scalability, and reduced downtime. With IoT, robotics, and AI, 
              we help industries transition into <span className="font-semibold">Industry 4.0</span>.
            </p>
            <ul className="list-disc list-inside text-base md:text-lg space-y-2">
              <li>SCADA and PLC-based automation systems</li>
              <li>IoT-enabled smart factory solutions</li>
              <li>Robotics and process automation</li>
              <li>Predictive maintenance using AI & ML</li>
              <li>Energy management and optimization systems</li>
              <li>Custom automation solutions for industrial processes</li>
            </ul>
          </div>

          {/* Divider Line */}
          <div className="w-full border-t border-gray-600"></div>

          {/* Web Development */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-[#DC143C]">Web Development</h3>
            <p className="text-base md:text-xl leading-relaxed text-justify">
              Our web development division builds <span className="font-semibold">secure, scalable, and engaging websites</span> 
              tailored to business and institutional needs, helping our clients establish a powerful online presence.
            </p>
            <ul className="list-disc list-inside text-base md:text-lg space-y-2">
              <li>Custom business and e-commerce websites</li>
              <li>Responsive, mobile-first web designs</li>
              <li>CMS solutions for easy management</li>
              <li>SEO and performance optimization</li>
            </ul>
          </div>

          {/* Divider Line */}
          <div className="w-full border-t border-gray-600"></div>

          {/* Application Development */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-[#DC143C]">Application Development</h3>
            <p className="text-base md:text-xl leading-relaxed text-justify">
              We deliver <span className="font-semibold">enterprise and consumer-grade applications</span> 
              that enhance efficiency and user engagement. From workflow automation to smart monitoring tools, 
              our applications drive measurable results.
            </p>
            <ul className="list-disc list-inside text-base md:text-lg space-y-2">
              <li>ERP and CRM systems</li>
              <li>Mobile applications for Android and iOS</li>
              <li>Data visualization dashboards</li>
              <li>Cloud-native and serverless applications</li>
            </ul>
          </div>

          {/* Divider Line */}
          <div className="w-full border-t border-gray-600"></div>

          {/* AI & ML */}
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-[#DC143C]">AI & Machine Learning Solutions</h3>
            <p className="text-base md:text-xl leading-relaxed text-justify">
              Our AI team creates <span className="font-semibold">intelligent systems</span> that bring 
              automation, predictive insights, and data-driven decision-making into industries and businesses.
            </p>
            <ul className="list-disc list-inside text-base md:text-lg space-y-2">
              <li>Predictive analytics and smart dashboards</li>
              <li>Natural Language Processing & intelligent assistants</li>
              <li>Computer Vision for industrial and security applications</li>
              <li>Generative AI for automation and content creation</li>
              <li>Custom ML models tailored to industry challenges</li>
            </ul>
          </div>
        </div>
      </section>


      <Footer />
    </>
  );
};

export default ServicesPage;
