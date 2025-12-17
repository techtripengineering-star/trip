import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import ChatBot from "../components/ChatBot";
import Testimonials from "../components/Testimonials";
import ProjectsShowcase from "../components/Aproach";
import { FaTools, FaCogs, FaBuilding, FaHandshake, FaDraftingCompass } from "react-icons/fa";
import { MdElectricalServices } from "react-icons/md";
import { GiFireExtinguisher } from "react-icons/gi";
import { BsGearWideConnected } from "react-icons/bs";
import img1 from "../assets/img/services&projects/img1.jpeg";
import img2 from "../assets/img/services&projects/Health.jpeg";
import img3 from "../assets/img/services&projects/Embark College/embark.jpeg";

import { useState } from "react";
import Aproach from "../components/Aproach";
const ITEMS_PER_PAGE = 4;

const services = [
  {
    icon: <MdElectricalServices className="text-4xl text-blue-600" />,
    title: "Electrical Engineering & Design",
    desc: "We deliver complete electrical engineering solutions covering load analysis, power distribution, lighting design, earthing, surge protection, panel sizing, and ELV systems. Backed by hands-on experience in major institutional, hospital, commercial, and industrial projects, our designs ensure maximum safety, energy efficiency, and seamless compliance. From classrooms and auditoriums to multispecialty hospitals and corporate offices, we provide end-to-end drawings, BOQs, estimation, and supervision for reliable electrical infrastructure.",
    link: "/services/electrical"
  },
  {
    icon: <FaTools className="text-4xl text-blue-600" />,
    title: "HVAC Solutions",
    desc: "Our team provides HVAC designs tailored for climate efficiency, indoor air quality, and system longevity. With experience designing cooling systems for hospitals, resorts, data centers, and large academic blocks, we focus on proper heat-load calculation, duct routing, ventilation planning, and equipment selection. Every layout ensures optimal comfort, reduced operational cost, and compliance with safety and airflow standards essential for high-occupancy buildings.",
    link: "/services/hvac"
  },
  {
    icon: <FaCogs className="text-4xl text-blue-600" />,
    title: "Plumbing & Sanitary Solutions",
    desc: "We design comprehensive plumbing and sanitation systems covering water supply, drainage, rainwater management, and sewage planning. Our solutions are structured around practical site conditions—such as those demonstrated in the Global School buildings—ensuring smooth water distribution, hygienic waste disposal, and long-term functionality. Detailed layouts for toilets, kitchens, utility spaces, and service shafts are prepared with precision to meet institutional and commercial needs.",
    link: "/services/plumbing"
  },
  {
    icon: <GiFireExtinguisher className="text-4xl text-blue-600" />,
    title: "Fire-Fighting & Fire Suppression Systems",
    desc: "We provide fire safety engineering that includes hydrant line routing, sprinkler design, alarm systems, emergency exit planning, and high-risk zone protection. Our fire-fighting plans are developed based on real building structures, as seen in academic blocks, auditoriums, and multi-storey facilities. Each system is engineered for rapid response, maximum hazard control, and adherence to national and international fire-safety guidelines.",
    link: "/services/firefighting"
  },
  {
    icon: <BsGearWideConnected className="text-4xl text-blue-600" />,
    title: "MEPF Integrated Solutions",
    desc: "Our multidisciplinary expertise enables us to deliver fully coordinated MEPF solutions integrating Mechanical, Electrical, Plumbing, Fire, and allied systems. With experience overseeing complex projects—such as hospitals, colleges, hostels, resorts, office spaces, and multi-storey academic towers—we ensure every service runs seamlessly without clashes. We provide consolidated drawings, BOQs, 3D coordination, and on-site technical support for smooth construction execution.",
    link: "/services/mepf"
  },
  {
    icon: <FaTools className="text-4xl text-blue-600" />,
    title: "Software & Digital Solutions",
    desc: "We deliver modern, intelligent, and automation-driven digital solutions powered by advanced AI, machine learning, full-stack development, and data-driven technologies. With strong expertise in Python, Java, AI/ML frameworks, FastAPI/Flask backend systems, OpenCV, LLM integration, and cloud-based workflows, we develop tools that enhance operational efficiency and support engineering innovation. Our capabilities include AI-powered automation, data analytics dashboards, backend APIs, OCR and vision systems, smart monitoring tools, and intelligent assistants—built using technologies like TensorFlow, PyTorch, Scikit-Learn, OpenAI API, and Google Gemini API.",
    link: "/services/software"
  },
  {
    icon: <FaHandshake className="text-4xl text-blue-600" />,
    title: "Project Management & Consultancy",
    desc: "We provide structured project management services covering planning, scheduling, vendor coordination, quality audits, bid management, site supervision, and regulatory compliance. With experience supervising government-funded hospitals, academic buildings, and large renovation works, we ensure timely project delivery and cost-effective execution. Our consultancy approach focuses on risk reduction, transparent communication, and strong technical oversight.",
    link: "/services/project-management"
  },
  {
    icon: <FaBuilding className="text-4xl text-blue-600" />,
    title: "Industrial & Institutional Projects",
    desc: "We offer end-to-end engineering solutions for industries, colleges, hospitals, corporate offices, cold stores, manufacturing plants, and data centers. From electrical and HVAC design to fire systems and plumbing networks, our services ensure functionality, safety, and scalability. Our work portfolio includes major institutions such as Global College, Manipal Hospitals, Samsung Corporate Office, Lumbini Provincial Assembly, and multiple government establishments.",
    link: "/services/industrial"
  },
  {
    icon: <FaCogs className="text-4xl text-blue-600" />,
    title: "Automation & Smart Systems",
    desc: "We design and integrate smart automation systems that enhance building performance—covering intelligent lighting control, monitoring dashboards, automation panels, and energy-efficient controls. With exposure to modern campuses, corporate offices, and industrial units, we ensure that automation increases user convenience, reduces energy consumption, and supports future-ready infrastructure.",
    link: "/services/automation"
  }
];

const workflow = [
  {
    title: "Requirement Analysis",
    desc: "We begin with a detailed understanding of project needs, site conditions, safety standards, and client expectations to establish a clear technical roadmap."
  },
  {
    title: "Concept & Preliminary Design",
    desc: "Our team develops initial engineering concepts, feasibility studies, and system layouts to validate design direction before advancing to detailed planning."
  },
  {
    title: "Detailed Engineering & Modeling",
    desc: "Using advanced software, BIM integration, and multi-disciplinary coordination, we produce accurate, compliant, and execution-ready engineering designs."
  },
  {
    title: "Execution Support & Quality Review",
    desc: "We provide continuous site coordination, technical supervision, and quality validation to ensure flawless implementation and project completion."
  }
];

const testimonials = [
  {
    name: "John Doe",
    company: "XYZ Pvt. Ltd.",
    location: "Kathmandu, Nepal",
    text: "The integrated MEPF approach drastically improved our project's performance. Highly recommended!",
    img: "https://via.placeholder.com/100",
    rating: 5
  },
  {
    name: "Sarah Lee",
    company: "XYZ Inc.",
    location: "Lalitpur, Nepal",
    text: "Amazing team with great coordination and timely delivery. Extremely satisfied with the final output!",
    img: "https://via.placeholder.com/100",
    rating: 5
  },
  {
    name: "Michael Raj",
    company: "XYZ Info Solutions",
    location: "Biratnagar, Nepal",
    text: "Professional, efficient, and experienced team. Their engineering precision is truly exceptional.",
    img: "https://via.placeholder.com/100",
    rating: 5
  },
  {
    name: "Priya Sharma",
    company: "XYZ Builders",
    location: "Pokhara, Nepal",
    text: "Their technical depth and execution quality exceeded expectations. A reliable engineering partner!",
    img: "https://via.placeholder.com/100",
    rating: 5
  },
  {
    name: "Piyush Agrawal",
    company: "ABC Pvt. Ltd.",
    location: "Kathmandu, Nepal",
    text: "The integrated MEPF approach drastically improved our project's performance. Highly recommended!",
    img: "https://via.placeholder.com/100",
    rating: 5
  },
  {
    name: "Bibek Chaudhry",
    company: "ABC Inc.",
    location: "Lalitpur, Nepal",
    text: "Amazing team with great coordination and timely delivery. Extremely satisfied with the final output!",
    img: "https://via.placeholder.com/100",
    rating: 5
  },
  {
    name: "Prem Sah",
    company: "XYZ Infra Solutions",
    location: "Biratnagar, Nepal",
    text: "Professional, efficient, and experienced team. Their engineering precision is truly exceptional.",
    img: "https://via.placeholder.com/100",
    rating: 5
  },
  {
    name: "Pransish Kumar",
    company: "ABC Builders",
    location: "Pokhara, Nepal",
    text: "Their technical depth and execution quality exceeded expectations. A reliable engineering partner!",
    img: "https://via.placeholder.com/100",
    rating: 5
  },
  {
    name: "Prabhat Gupta",
    company: "MNO Pvt. Ltd.",
    location: "Kathmandu, Nepal",
    text: "The integrated MEPF approach drastically improved our project's performance. Highly recommended!",
    img: "https://via.placeholder.com/100",
    rating: 5
  },
  {
    name: "Prakash Chaurasiya",
    company: "MNO Inc.",
    location: "Lalitpur, Nepal",
    text: "Amazing team with great coordination and timely delivery. Extremely satisfied with the final output!",
    img: "https://via.placeholder.com/100",
    rating: 5
  },
  {
    name: "Kumar Chaudhary",
    company: "MNO Infra Solutions",
    location: "Biratnagar, Nepal",
    text: "Professional, efficient, and experienced team. Their engineering precision is truly exceptional.",
    img: "https://via.placeholder.com/100",
    rating: 5
  },
  {
    name: "Sagar Chaudhary",
    company: "MNO Builders",
    location: "Pokhara, Nepal",
    text: "Their technical depth and execution quality exceeded expectations. A reliable engineering partner!",
    img: "https://via.placeholder.com/100",
    rating: 5
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ChatBot />
      <div className="w-full font-sans">
        {/* ---------------- SERVICES GRID ---------------- */}
        <section className="py-16 bg-[#0b1320] px-8 text-[#FFFDD0]">

          {/* Title */}
          <h1 className="heading-primary text-center">
            Our Engineering & Services
          </h1>

          {/* Subtitle */}
          <p className="heading-secondary mb-12 text-center">
            Delivering Integrated, Innovative and Reliable Engineering Solutions
          </p>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 w-full px-0">
            {services.map((srv, i) => (
              <div
                key={i}
                className="
                  h-80 w-full 
                  bg-[#0b1320]/60 
                  border border-[#FFFDD0]/20 
                  text-[#FFFDD0] 
                  p-6 
                  rounded-xl 
                  shadow-md 
                  transition-all duration-300
                  flex flex-col items-center justify-between
                  hover:scale-105
                  hover:shadow-[0_0_25px_rgba(255,220,150,0.4)]
                  hover:border-transparent
                  hover:bg-gradient-to-b hover:from-[#143055] hover:to-[#0b1320]
                "
              >
                {/* Icon */}
                <div className="text-8xl mb-4 text-[#FFFDD0] flex justify-center">
                  {srv.icon}
                </div>

                {/* Title */}
                <h3 className="heading-card text-center text-lg font-semibold mb-2">
                  {srv.title}
                </h3>

                {/* Description (Expandable) */}
                <p
                  id={`desc-${i}`}
                  className="
                    body-text 
                    text-[#d6d4b8] 
                    text-center 
                    max-h-20 
                    overflow-y-hidden 
                    transition-all duration-300
                  "
                >
                  {srv.desc}
                </p>

                {/* Learn More Button */}
                <button
                  className="
                    text-[#FFFDD0] 
                    font-semibold 
                    underline-offset-4 
                    hover:underline 
                    transition 
                    mt-2
                  "
                  onClick={() => {
                    const el = document.getElementById(`desc-${i}`);
                    const isOpen = el.style.maxHeight === "200px";

                    el.style.maxHeight = isOpen ? "80px" : "200px";
                    el.style.overflowY = isOpen ? "hidden" : "auto";   // enable scrolling
                  }}
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------- WHY CHOOSE US SECTION ---------------- */}
        <section className="w-full py-24 bg-[#0b1320] text-[#FFFDD0]">

          {/* MAX WIDTH CONTENT WRAPPER */}
          <div className="w-full px-6 lg:px-12">

            {/* HEADER */}
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
              Why Choose <span className="text-orange-500">Trip Engineering?</span>
            </h2>

            {/* GRID */}
            <div className="grid lg:grid-cols-2 gap-16 items-stretch">

              {/* IMAGE */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  src={img2}
                  alt="Engineering & Building Design"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* CONTENT */}
              <div className="flex flex-col justify-center space-y-10">

                {/* INTRO */}
                <p className="text-lg md:text-xl leading-relaxed text-justify">
                  At <span className="font-semibold text-[#DC143C]">Trip Engineering Pvt. Ltd.</span>,
                  we deliver end-to-end engineering solutions driven by precision, innovation,
                  and regulatory compliance. Our expertise spans government institutions,
                  hospitals, universities, industrial plants, data centers, and high-rise
                  commercial developments across Nepal.
                </p>

                {/* BULLET GRID */}
                <div className="grid sm:grid-cols-2 gap-6">

                  {[
                    {
                      title: "Comprehensive MEPF Expertise",
                      desc: "Electrical, HVAC, Plumbing, Sanitary, Fire-Fighting & Fire Suppression systems under one roof."
                    },
                    {
                      title: "Advanced Electrical Engineering",
                      desc: "Substations, SAS systems, panel design, transformers, earthing & lightning protection."
                    },
                    {
                      title: "Smart Buildings & Automation",
                      desc: "IoT integration, energy monitoring, building automation & AI-enabled solutions."
                    },
                    {
                      title: "Data Centers & IT Facilities",
                      desc: "Redundant power design, server rooms, precision cooling & uptime-focused planning."
                    },
                    {
                      title: "Government & Institutional Projects",
                      desc: "Hospitals, ministries, parliament buildings, universities & public infrastructure."
                    },
                    {
                      title: "Software & Digital Engineering",
                      desc: "Web platforms, automation tools, backend APIs & AI-driven applications."
                    },
                    {
                      title: "Sustainable & Green Design",
                      desc: "Energy-efficient systems, solar-ready layouts & optimized HVAC performance."
                    },
                    {
                      title: "Quality, Safety & Compliance",
                      desc: "Strict adherence to NEC, IEC, NFPA and international engineering standards."
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="
                        flex items-start gap-4 p-5 rounded-xl
                        bg-[#0f1b2d]/80 border border-[#FFFDD0]/10
                        hover:border-orange-500/40
                        hover:shadow-[0_0_25px_rgba(255,165,0,0.15)]
                        transition-all duration-300
                      "
                    >
                      <span className="text-orange-500 text-xl mt-1">✔</span>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                        <p className="text-sm text-[#FFFDD0]/80 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <button
                    className="
                      px-8 py-4 rounded-xl font-semibold text-white
                      bg-orange-500 hover:bg-orange-600
                      shadow-lg hover:shadow-orange-500/40
                      transition-all duration-300
                    "
                  >
                    Explore Our Case Studies
                  </button>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ---------------- ENGINEERING PRECISION ---------------- */}
        <section className="w-full py-24 bg-[#0b1320] text-[#FFFDD0]">

          {/* CONTENT WRAPPER */}
          <div className="w-full px-6 lg:px-12">

            {/* HEADER */}
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
              Engineering Precision <span className="text-orange-500">That Delivers Results</span>
            </h2>

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* IMAGE */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  src={img1}
                  alt="Engineering precision on site"
                  className="
                    w-full h-full object-cover
                    transform transition-transform duration-700
                    group-hover:scale-105
                  "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* CONTENT */}
              <div className="space-y-8">

                {/* PARAGRAPH */}
                <p className="text-lg md:text-xl leading-relaxed text-[#FFFDD0]/90 text-justify">
                  At <span className="font-semibold text-[#DC143C]">Trip Engineering Pvt. Ltd.</span>,
                  precision is embedded into every stage of our engineering workflow from
                  concept design, detailed load calculations, and system modeling to execution,
                  testing, and final commissioning. Our engineering approach emphasizes
                  accuracy, safety, and long-term operational reliability, ensuring every system
                  performs efficiently under real-world conditions.
                  <br /><br />
                  Our team has successfully delivered high-complexity projects across
                  government buildings, hospitals, substations, data centers, industrial plants,
                  and academic institutions throughout Nepal. This includes safety-critical
                  environments such as ICU and OT electrical systems, parliament and ministry
                  buildings, transformer and panel design, SAS-based substations, server rooms,
                  and large-scale MEPF infrastructure where zero-failure tolerance is essential.
                  <br /><br />
                  By combining on-site execution experience with advanced design tools,
                  standards compliance (NEC, IEC, NFPA), and accurate BOQs and estimations,
                  we ensure seamless coordination between design intent and site reality
                  delivering engineering solutions that are robust, scalable, and future-ready.
                </p>


                {/* PRECISION POINTS */}
                <div className="grid sm:grid-cols-2 gap-6">

                  {[
                    {
                      title: "Design Accuracy & Compliance",
                      desc: "Detailed electrical, HVAC, plumbing and fire-fighting designs strictly aligned with NEC, IEC & NFPA standards."
                    },
                    {
                      title: "Field-Tested Engineering",
                      desc: "Hands-on supervision and execution experience in live facilities such as hospitals, ministries and parliament buildings."
                    },
                    {
                      title: "Advanced Electrical Systems",
                      desc: "Substations, SAS, transformer & panel design, redundancy planning and safe power distribution."
                    },
                    {
                      title: "Data-Driven Decision Making",
                      desc: "Accurate BOQs, load studies, estimation, and cost optimization based on real project data."
                    },
                    {
                      title: "Safety-Critical Environments",
                      desc: "Proven expertise in OT rooms, ICUs, server rooms and mission-critical infrastructures."
                    },
                    {
                      title: "End-to-End Project Control",
                      desc: "From design validation to testing, commissioning, and as-built documentation."
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="
                        flex items-start gap-4 p-5 rounded-xl
                        bg-[#0f1b2d]/80 border border-[#FFFDD0]/10
                        hover:border-orange-500/40
                        hover:shadow-[0_0_25px_rgba(255,165,0,0.15)]
                        transition-all duration-300
                      "
                    >
                      <span className="text-orange-500 text-xl mt-1">✔</span>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                        <p className="text-sm text-[#FFFDD0]/80 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <button
                    className="
                      px-8 py-4 rounded-xl font-semibold text-white
                      bg-orange-500 hover:bg-orange-600
                      shadow-lg hover:shadow-orange-500/40
                      transition-all duration-300
                    "
                  >
                    View Engineering Case Studies
                  </button>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ---------------- TECHNOLOGY SECTION ---------------- */}
        <section className="w-full py-24 bg-[#0b1320] text-[#FFFDD0]">

          {/* WRAPPER */}
          <div className="w-full px-6 lg:px-12">

            {/* HEADER */}
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
              State-of-the-Art Technology <span className="text-orange-500">& Advanced Engineering Tools</span>
            </h2>

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* TEXT SECTION */}
              <div className="space-y-8">

                {/* PARAGRAPH 1 */}
                <p className="text-lg md:text-xl leading-relaxed text-[#FFFDD0]/90 text-justify">
                  At <span className="font-semibold text-[#DC143C]">Trip Engineering Pvt. Ltd.</span>,
                  technology is a core enabler of engineering precision and execution excellence.
                  We utilize industry-proven software platforms, advanced design methodologies,
                  and data-driven workflows to deliver complex electrical, MEPF, and infrastructure
                  projects with accuracy and regulatory compliance.
                </p>

                {/* PARAGRAPH 2 */}
                <p className="text-lg md:text-xl leading-relaxed text-[#FFFDD0]/90 text-justify">
                  Our project portfolio demonstrates extensive use of detailed AutoCAD-based
                  electrical and architectural drawings, substation layouts, panel schedules,
                  transformer designs, BOQs, and as-built documentation for hospitals,
                  government institutions, academic campuses, data centers, and industrial facilities.
                  These tools allow precise coordination between design intent and on-site execution.
                </p>

                {/* PARAGRAPH 3 */}
                <p className="text-lg md:text-xl leading-relaxed text-[#FFFDD0]/90 text-justify">
                  From Substation Automation Systems (SAS) and redundancy planning to HVAC load
                  calculations, fire-fighting layouts, and energy-efficient system modeling,
                  our technology-driven approach minimizes risk, improves constructability,
                  and ensures long-term system performance in safety-critical environments
                  such as ICUs, OTs, server rooms, and high-occupancy public buildings.
                </p>

                {/* FEATURE GRID */}
                <div className="grid sm:grid-cols-2 gap-6 pt-4">

                  {[
                    {
                      title: "Advanced Design & Drafting",
                      desc: "AutoCAD-based electrical, HVAC, plumbing & fire-fighting drawings with precise coordination and clash avoidance."
                    },
                    {
                      title: "Substation & Power Systems",
                      desc: "Transformer sizing, panel design, SAS integration, earthing & lightning protection analysis."
                    },
                    {
                      title: "MEPF Coordination",
                      desc: "Integrated workflows across electrical, HVAC, plumbing and fire systems for constructible designs."
                    },
                    {
                      title: "Testing & Validation Tools",
                      desc: "Load calculations, safety verification, redundancy analysis & commissioning documentation."
                    },
                    {
                      title: "As-Built & BOQ Accuracy",
                      desc: "Detailed as-built drawings, quantity take-offs and cost estimation aligned with site conditions."
                    },
                    {
                      title: "Future-Ready Engineering",
                      desc: "Energy-efficient designs, solar-ready systems, smart monitoring & automation integration."
                    },
                    {
                      title: "Software & Web Engineering",
                      desc: "Design and development of secure web platforms, backend APIs, automation dashboards, and data-driven applications to support engineering workflows, monitoring systems, and client-facing solutions."
                    },
                    {
                      title: "AI & Intelligent Automation",
                      desc: "Integration of AI-driven analytics, predictive maintenance logic, energy monitoring insights, and smart automation to enhance operational efficiency and decision-making in complex engineering systems."
                    }
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="
                        flex items-start gap-4 p-5 rounded-xl
                        bg-[#0f1b2d]/80 border border-[#FFFDD0]/10
                        hover:border-orange-500/40
                        hover:shadow-[0_0_25px_rgba(255,165,0,0.15)]
                        transition-all duration-300
                      "
                    >
                      <span className="text-orange-500 text-xl mt-1">✔</span>
                      <div>
                        <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                        <p className="text-sm text-[#FFFDD0]/80 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* IMAGE SECTION */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  src={img3}
                  alt="Advanced Engineering Tools & Design Systems"
                  className="
                    w-full h-full object-cover
                    transform transition-transform duration-700
                    group-hover:scale-105
                  "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

            </div>
          </div>
        </section>

        {/* ---------------- PROCESS & WORKFLOW ---------------- */}
        <section className="py-16 bg-[#0b1320] text-[#FFFDD0] px-8">
          <h2 className="text-center text-3xl font-bold mb-10">Process & Workflow</h2>

          <div className="flex flex-col md:flex-row justify-center gap-10 w-full px-0">
            {workflow.map((step, i) => (
              <div key={i} className="text-center max-w-xs">
                <div className="w-20 h-20 rounded-full bg-blue-100 mx-auto flex items-center justify-center mb-4">
                  <FaDraftingCompass className="text-3xl text-blue-600" />
                </div>
                <h4 className="font-semibold text-xl">{step.title}</h4>
                <p className="text-[#9c9b7d] mt-1">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------- TESTIMONIALS ---------------- */}
        <Testimonials testimonials={testimonials} />

      </div>
      <Aproach />
      <Footer />
    </>
  );
}