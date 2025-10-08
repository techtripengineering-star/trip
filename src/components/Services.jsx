import React from "react";
import service1 from "../assets/img/service1.jpeg";

const services = [
  {
    title: "Electrical Engineering & Design",
    desc: "Comprehensive solutions for electrical layouts and safety compliance.",
  },
  {
    title: "HVAC (Heating, Ventilation & Air Conditioning) Solutions",
    desc: "Efficient climate control systems for comfort, safety, and energy savings.",
  },
  {
    title: "Plumbing & Sanitary Solutions",
    desc: "Complete water supply, drainage, and sanitary system design and installation.",
  },
  {
    title: "Fire-Fighting & Fire Suppression Systems",
    desc: "Reliable fire protection systems ensuring safety and compliance with standards.",
  },
  {
    title: "MEPF (Mechanical, Electrical, Plumbing & Fire-Fighting) Solutions",
    desc: "Integrated MEPF services for seamless project execution under one umbrella.",
  },
  {
    title: "Software & Digital Solutions",
    desc: "Web development, software applications, and automation systems that empower businesses through technology.",
  },
  {
    title: "Project Management & Consultancy",
    desc: "Seamless planning, execution, and supervision for timely and cost-effective delivery.",
  },
  {
    title: "Industrial & Institutional Projects",
    desc: "Tailored engineering solutions for large-scale industrial and institutional facilities.",
  },
  {
    title: "Automation & Smart Systems",
    desc: "Smart automation solutions for modern, energy-efficient infrastructures.",
  },
  {
    title: "Specialized Engineering Solutions",
    desc: "Customized designs for complex engineering requirements.",
  },
];

const sectors = [
  "Government Institutions",
  "Hospitals & Healthcare Facilities",
  "Corporate Offices",
  "Industrial Plants & Factories",
  "Hotels & Hospitality",
  "Residential & Housing Projects",
  "Educational Institutions",
  "Stadium Lighting and Power System",
];

const Services = () => {
  return (
    <section className="bg-[#0b1320] text-[#FFFDD0] py-16 px-6 md:px-12 lg:px-20">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-3xl md:text-5xl font-bold">
          Comprehensive Services for Every Space
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Image Frame */}
        <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg group">
          <img
            src={service1}
            alt="Engineering Services"
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
          />
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
