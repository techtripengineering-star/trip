import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import ChatBot from "../components/ChatBot";

const jobs = [
  {
    title: "Civil Engineer",
    requirements: [
      "Bachelor's degree in Civil Engineering",
      "2+ years experience in construction projects",
      "Strong knowledge of CAD and project management tools",
    ],
  },
  {
    title: "Mechanical Engineer",
    requirements: [
      "Bachelor's degree in Mechanical Engineering",
      "Experience with machinery design and maintenance",
      "Proficient in CAD software and simulations",
    ],
  },
  {
    title: "Project Manager",
    requirements: [
      "Bachelor's degree in Engineering or Management",
      "3+ years project management experience",
      "Excellent leadership and communication skills",
    ],
  },
  {
    title: "AI Developer",
    requirements: [
      "Bachelor's degree in Engineering or Management",
      "3+ years project management experience",
      "Excellent leadership and communication skills",
    ],
  },
];

const CareersSection = () => {
  const hrEmail = "tech.tripengineering@gmail.com"; // HR email address

  const handleApply = (jobTitle) => {
    const subject = `Application for ${jobTitle}`;
    const body = `Dear HR Team,\n\nI would like to apply for the position of ${jobTitle} at Trip Engineering Pvt. Ltd.\n\nPlease find my resume and cover letter attached.\n\nBest regards,\n[Your Name]\n[Your Contact Info]`;

    // ✅ Open Gmail compose window in a new tab
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      hrEmail
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank");
  };

  return (
    <>
      <Navbar />
      <HeroSection />
      <ChatBot />

      <section className="py-20 px-6 text-[#FFFDD0] bg-[#0b1320]">
        <h1 className="text-4xl font-bold mb-10 text-[#FFFDD0] text-center">Careers</h1>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-center mb-16">
          At Trip Engineering Pvt. Ltd., we welcome passionate individuals to join our dynamic team.
        </p>

        {/* Job Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {jobs.map((job, index) => (
            <div
              key={`${job.title}-${index}`}
              className="bg-[#112240] p-6 rounded-lg shadow-lg flex flex-col justify-between"
            >
              <h2 className="text-2xl font-semibold mb-4">{job.title}</h2>
              <ul className="list-disc list-inside mb-6 space-y-1">
                {job.requirements.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>
              <button
                className="bg-yellow-400 text-[#001f3f] font-bold py-2 px-4 rounded hover:bg-yellow-300 transition"
                onClick={() => handleApply(job.title)}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CareersSection;
