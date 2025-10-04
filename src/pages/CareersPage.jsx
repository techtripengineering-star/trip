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
    const body = `Dear HR Team,%0D%0A%0D%0A
I would like to apply for the position of ${jobTitle} at Trip Engineering Pvt. Ltd.%0D%0A%0D%0A
Please find my resume and cover letter attached.%0D%0A%0D%0A
Best regards,%0D%0A[Your Name]%0D%0A[Your Contact Info]`;

    // ✅ Detect mobile device
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      // Open phone's email app
      window.location.href = `mailto:${hrEmail}?subject=${encodeURIComponent(
        subject
      )}&body=${body}`;
    } else {
      // Open Gmail web compose
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        hrEmail
      )}&su=${encodeURIComponent(subject)}&body=${body}`;
      window.open(gmailUrl, "_blank");
    }
  };

  return (
    <>
      <Navbar />
      <HeroSection />
      <ChatBot />

      <section className="py-16 px-6 text-[#FFFDD0] bg-[#0b1320]">
        <h1 className="text-4xl font-bold mb-10 text-[#FFFDD0] text-center">
          Careers
        </h1>
        <p className="max-w-2xl mx-auto text-lg leading-relaxed text-center mb-12">
          At Trip Engineering Pvt. Ltd., we welcome passionate individuals to join our dynamic team.
        </p>

        {/* Job List View */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {jobs.map((job, index) => (
            <div
              key={`${job.title}-${index}`}
              className="bg-[#112240] p-6 rounded-lg shadow-lg flex flex-col space-y-4"
            >
              <h2 className="text-2xl font-semibold">{job.title}</h2>
              <ul className="list-disc list-inside space-y-1">
                {job.requirements.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>
              <button
                className="self-start bg-yellow-400 text-[#001f3f] font-bold py-2 px-5 rounded hover:bg-yellow-300 transition text-center w-full sm:w-auto"
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
