import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import ChatBot from "../components/ChatBot";

const jobs = [
  // 🌟 Open Role
  {
    title: "Open Role – Brilliant Minds Welcome",
    isOpenRole: true,
    requirements: [
      "Passion for engineering, innovation, and problem-solving",
      "Strong willingness to learn, adapt, and contribute meaningfully",
      "Ability to think independently and work collaboratively in a team",
      "Interest in making real-world impact through engineering solutions",
      "Freshers, experienced professionals, and cross-domain talent are welcome",
    ],
  },
];

const benefits = [
  "Work on government, hospital, corporate & commercial mega projects",
  "Career growth based on performance, not age",
  "Friendly and collaborative team culture",
  "Training opportunities including AutoCAD, HSI, Safety Programs",
  "Competitive salary & performance bonuses",
  "Opportunities to work with industry experts",
];

const faqs = [
  {
    q: "How do I apply?",
    a: "Click the Apply button on any job listing and send your resume through email.",
  },
  {
    q: "Do you hire freshers?",
    a: "Yes, for draftsman and trainee engineer positions depending on openings.",
  },
  {
    q: "Where is the office located?",
    a: "Kathmandu, Nepal.",
  },
  {
    q: "How long is the hiring process?",
    a: "Typically 5–10 days depending on the number of applicants.",
  },
];

const CareersSection = () => {
  const hrEmail = "projects.tripepl@gmail.com";

  const handleApply = (jobTitle) => {
    const subject = `Application for ${jobTitle}`;
    const body = `Dear HR Team,%0D%0A%0D%0A
I would like to apply for the position of ${jobTitle} at Trip Engineering Pvt. Ltd.%0D%0A%0D%0A
Please find my resume and cover letter attached.%0D%0A%0D%0A
Best regards,%0D%0A[Your Name]%0D%0A[Your Contact Info]`;

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = `mailto:${hrEmail}?subject=${encodeURIComponent(
        subject
      )}&body=${body}`;
    } else {
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

      {/* MAIN CAREER PAGE */}
      <section className="py-16 px-6 bg-[#0b1320] text-[#FFFDD0] w-full">

        {/* TITLE */}
        <h1 className="text-4xl font-bold mb-6 text-center">Careers at Trip Engineering</h1>
        <p className="max-w-5xl mx-auto text-lg text-center mb-12 leading-relaxed">
          Join one of Nepal’s fastest-growing engineering companies delivering electrical, HVAC, and MEP 
          solutions to top government, hospital, commercial, and industrial projects.
        </p>

        {/* COMPANY STORY */}
        <div className="max-w-5xl mx-auto bg-[#112240] p-8 rounded-xl shadow-lg mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="leading-relaxed mb-4">
            Trip Engineering Pvt. Ltd. is led by <strong>Raushan Kumar Gupta</strong>, a highly experienced 
            Electrical & Electronics Engineer and MEP Design Specialist. Over the past decade, he has led and 
            delivered more than <strong>60+ major MEP projects</strong> in Nepal including government buildings, 
            hospitals, corporate offices, hotels, industrial plants, and residential complexes.
          </p>
          <p className="leading-relaxed">
            We combine engineering excellence, strong project management, and technical innovation to deliver 
            reliable and sustainable solutions for our clients. Our team values integrity, teamwork, and 
            continuous learning—reflecting a culture where engineers grow and excel.
          </p>
        </div>

        {/* BENEFITS */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">Why Work With Us?</h2>
          <ul className="grid sm:grid-cols-2 gap-5">
            {benefits.map((benefit, i) => (
              <li key={i} className="bg-[#112240] p-4 rounded-lg shadow">
                ✓ {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* CULTURE */}
        <div className="max-w-5xl mx-auto bg-[#112240] p-8 rounded-xl shadow-lg mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Culture & Values</h2>
          <ul className="space-y-3">
            <li>• Ownership — Engineers own their projects from design to delivery</li>
            <li>• Integrity — We believe in transparency and ethical execution</li>
            <li>• Innovation — Smarter designs, efficient systems, lower costs</li>
            <li>• Team Spirit — We learn, grow, and succeed together</li>
            <li>• Continuous Learning — Real project exposure every week</li>
          </ul>
        </div>

        {/* JOB LISTINGS */}
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Open Positions</h2>

          <div className="space-y-8">
            {jobs.map((job, index) => (
              <div
                key={`${job.title}-${index}`}
                className="bg-[#112240] p-6 rounded-lg shadow-lg"
              >
                <h2 className="text-2xl font-semibold mb-3">{job.title}</h2>

                <ul className="list-disc list-inside space-y-1 mb-4">
                  {job.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>

                <button
                  className="bg-yellow-400 text-[#001f3f] font-bold py-2 px-5 rounded hover:bg-yellow-300 transition w-full sm:w-auto"
                  onClick={() => handleApply(job.title)}
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* HIRING PROCESS */}
        <div className="max-w-5xl mx-auto bg-[#112240] p-8 rounded-xl shadow-lg mb-16">
          <h2 className="text-3xl font-bold mb-4">Hiring Process</h2>
          <ol className="space-y-3 list-decimal list-inside">
            <li>Submit your application</li>
            <li>HR Screening Call</li>
            <li>Technical Test / Practical Assessment</li>
            <li>Final Interview with Senior Team</li>
            <li>Offer Letter</li>
          </ol>
        </div>

        {/* FAQ SECTION */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((item, i) => (
              <div key={i} className="bg-[#112240] p-5 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CareersSection;
