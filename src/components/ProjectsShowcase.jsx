import React, { useState } from "react";
import { Volume2, VolumeX } from "lucide-react"; // icons for mute/unmute


// Replace with your actual video imports
import vid1 from "../assets/img/vid/BikersCafe_reel.mp4";
import vid2 from "../assets/img/vid/Embark_College_by_golcha_group.mp4";
import vid3 from "../assets/img/vid/Manipal_International_hospital.mp4";


const ProjectsShowcase = () => {
  const [muted, setMuted] = useState([true, true, true]);

  const toggleMute = (index) => {
    const updated = [...muted];
    updated[index] = !updated[index];
    setMuted(updated);
  };

  const projects = [
    {
      id: 1,
      title: "BIKERS CAFE",
      category: "Comercial Building",
      video: vid1,
      location: "Pulchowk, Lalitpur" 
    },
    {
      id: 2,
      title: "EMBARK COLLEGE OF GOLCHA GROUP",
      category: "Educational Building",
      video: vid2,
      location:"Narayanchaur, Naxal, Kathmandu"
    },
    {
      id: 3,
      title: "MANIPAL INTERNATIONAL HOSPITAL",
      category: "Institutional Building",
      video: vid3,
      location: "Narayan Chaur, Kathmandu"
    },
  ];

  return (
    <section className="w-full bg-[#0b1320] text-[#FFFDD0] py-16 px-6 md:px-12 lg:px-20">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold">
          Defining Spaces Across Sectors
        </h2>
        <a
          href="/projects"
          className="text-lg uppercase tracking-wide hover:text-[#FFFDD0] transition"
        >
          More Projects &gt;&gt;
        </a>
      </div>

      {/* Grid */}
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="overflow-hidden rounded-md shadow-lg bg-[#1a1f2b] flex flex-col relative"
          >
            {/* Video */}
            <video
              src={project.video}
              autoPlay
              loop
              muted={muted[index]}
              playsInline
              className="w-full h-[750px] object-cover transform transition-transform duration-700 hover:scale-105"
            />

            {/* Small mute/unmute logo */}
            <div
              onClick={() => toggleMute(index)}
              className="absolute bottom-4 right-4 bg-black/60 p-2 rounded-full cursor-pointer hover:bg-black/80 transition"
            >
              {muted[index] ? (
                <VolumeX size={20} className="text-white" />
              ) : (
                <Volume2 size={20} className="text-white" />
              )}
            </div>

            {/* Text below video */}
            <div className="p-4">
              <h3 className="text-lg md:text-xl font-semibold">{project.title}</h3>
              <p className="text-m md:text-base text-[#FFFDD0] mt-1">{project.category}</p>
              <p className="text-sm md:text-base text-[#FFFDD0] mt-1">{project.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsShowcase;