import React, { useState, useEffect } from "react";

import img1 from "../assets/img/overview1.jpeg";
import img2 from "../assets/img/overview2.png";
import img3 from "../assets/img/overview3.jpg";

const CompanyOverview = () => {
  const images = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="bg-[#0b1320] text-[#FFFDD0] py-16 px-6 md:px-12 lg:px-20 w-full">
      {/* Header */}
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-3xl md:text-5xl font-bold">Company Overview</h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Content */}
        <div className="space-y-6">
          <h3 className="text-xl md:text-3xl font-semibold text-[#DC143C]">
            Who We Are
          </h3>

          <div className="space-y-6 text-justify text-base md:text-xl leading-relaxed">
            <p>
              <span className="font-semibold">Trip Engineering Pvt. Ltd.</span> is a
              dynamic and performance-driven engineering company specializing in{" "}
              <span className="font-semibold">
                Electrical, Electronics, and MEP (Mechanical, Electrical, and Plumbing)
              </span>{" "}
              solutions. Since our inception, we have worked to redefine engineering
              excellence with innovative, reliable, and cost-effective services.
            </p>

            <p>
              Over the years, our team has successfully executed a diverse portfolio of
              projects across Nepal, ranging from government institutions, hospitals,
              and universities to industrial complexes, commercial spaces, and modern
              residential infrastructures. Each project comes with its own unique
              challenges, and our ability to adapt strategies, innovate designs, and
              apply the latest technologies has consistently allowed us to deliver
              results that exceed expectations. From critical electrical systems in
              healthcare facilities to large-scale industrial automation setups, and
              from campus-wide energy-efficient lighting solutions to smart residential
              complexes, we have left a mark of quality and dependability in every
              sector we serve.
            </p>

            <p>
              We pride ourselves on precision engineering, uncompromising quality
              standards, and timely delivery of every project. At Trip Engineering,
              safety is not an afterthought but a core principle—all activities are
              carried out under strict safety protocols aligned with international
              engineering standards. Our work methodology is built on detailed planning,
              rigorous testing, and transparent communication with stakeholders. This
              approach has enabled us to earn the trust of government bodies,
              multinational corporations, architects, contractors, and private
              developers, making us the go-to choice for engineering and MEP solutions
              in Nepal.
            </p>

            <p>
              Looking ahead, our mission is clear: to continue driving innovation,
              embracing sustainable and green technologies, and delivering value-driven
              engineering solutions that not only support Nepal’s rapid infrastructure
              development but also positively impact communities for generations to
              come. We envision becoming a leader in sustainable engineering practices,
              integrating renewable energy solutions, smart building technologies, and
              eco-friendly materials into our projects. With every step, we strive to
              contribute toward a future that is technologically advanced,
              environmentally responsible, and socially inclusive.
            </p>
          </div>
        </div>


        {/* Right Image Slider with hover zoom */}
        <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg group">
          <div
            className="flex transition-transform duration-1000 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Slide ${idx + 1}`}
                className="w-full h-full object-cover flex-shrink-0 transform transition-transform duration-500 group-hover:scale-110"
              />
            ))}
          </div>
          {/* Dark overlay on hover */}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
