import React from "react";

const services = [
  { title: "Electrical Engineering & Design", desc: "Comprehensive solutions for electrical layouts and safety compliance." },
  { title: "MEP (Mechanical, Electrical & Plumbing) Solutions", desc: "End-to-end MEP services under one umbrella." },
  { title: "Project Management & Consultancy", desc: "Seamless planning, execution, and supervision." },
  { title: "Industrial & Institutional Projects", desc: "Tailored engineering solutions for large-scale facilities." },
  { title: "Automation & Smart Systems", desc: "Smart automation for modern infrastructures." },
  { title: "Specialized Engineering Solutions", desc: "Customized designs for complex requirements." },
];

const sectors = [
  "Government Institutions",
  "Hospitals & Healthcare Facilities",
  "Corporate Offices",
  "Industrial Plants & Factories",
  "Hotels & Hospitality",
  "Residential & Housing Projects",
];

const Services = () => {
  return (
    <section className="bg-[#0b1320] text-[#FFFDD0] py-16 px-6 md:px-12 lg:px-20">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-3xl md:text-5xl font-bold">Comprehensive Services for Every Space</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Image Frame (keeps natural size) */}
        <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg group">
          <img
            src="\src\assets\img\service1.jpeg" // 🔥 Replace with your own image
            alt="Engineering Services"
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
          {/* Dark overlay on hover */}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
        </div>

        {/* Right: Services List */}
        <div className="flex flex-col space-y-6 mb-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="border-b border-gray-700 pb-4 hover:bg-gray-900 px-4 py-3 rounded-lg transition"
            >
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="text-lg text-gray-400">{service.desc}</p>
            </div>
          ))}

          {/* Sectors */}
          <div className="mt-6">
            <h3 className="text-2xl font-semibold mb-6">Sectors Served:</h3>
            <ul className="text-lg space-y-2 text-gray-300 list-disc list-inside">
              {sectors.map((sector, i) => (
                <li key={i}>{sector}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
