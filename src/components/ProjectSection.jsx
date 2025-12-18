import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectSection = () => {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-[#0b1320] text-[#FFFDD0] py-20 px-6 md:px-16">
      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
        Projects
      </h2>

      {/* Project Card */}
      <motion.div
        layout
        className="
          max-w-7xl mx-auto
          bg-[#0b1320]/70
          border border-[#FFFDD0]/20
          rounded-2xl
          p-6 md:p-8
          shadow-lg
          hover:shadow-[0_0_30px_rgba(255,220,150,0.35)]
          transition-all
        "
      >
        {/* Header */}
        <h3 className="text-xl md:text-2xl font-semibold mb-1">
          Prime Minister Office, Singha Durbar
        </h3>
        <p className="text-sm text-[#FFD27F] mb-4">
          Renovation Work (Phase–1) – Electrical & MEP Engineering Works
        </p>

        <p className="text-sm uppercase tracking-wider text-[#FFFDD0]/70 mb-6">
          Picture Gallery
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-5 gap-4 mb-6">
          <div className="col-span-1 flex flex-col gap-4">
            <div className="img-box h-28" />
            <div className="img-box h-48" />
          </div>

          <div className="col-span-1">
            <div className="img-box h-full" />
          </div>

          <div className="col-span-2 flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="img-box h-28" />
              <div className="img-box h-28" />
            </div>
            <div className="img-box h-40" />
          </div>

          <div className="col-span-1">
            <div className="img-box h-full" />
          </div>
        </div>

        {/* Short Description */}
        <p className="text-[#FFFDD0]/80 leading-relaxed text-sm md:text-base">
          The Prime Minister Office Renovation Work (Phase–1) at Singha Durbar,
          Kathmandu, was a high-profile government infrastructure modernization
          project executed within one of Nepal’s most historically significant
          administrative complexes. The project focused on upgrading and
          retrofitting electrical and MEP systems while ensuring uninterrupted
          functionality of the Prime Minister’s Office during execution.
        </p>

        {/* Read More */}
        <button
          onClick={() => setOpen(!open)}
          className="
            mt-6 mx-auto block
            text-[#FFD27F]
            font-semibold
            hover:text-white
            transition
          "
        >
          {open ? "Show Less" : "Read More"}
        </button>

        {/* Expanded Content */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="border-t border-[#FFFDD0]/20 mt-6 pt-6 space-y-4 text-[#FFFDD0]/80 text-sm md:text-base">
                <p>
                  <strong>Project Overview:</strong>  
                  A technically sensitive renovation project aimed at modernizing
                  legacy electrical infrastructure within a high-security,
                  continuously operational government facility, requiring strict
                  adherence to national standards, safety protocols, and security
                  regulations.
                </p>

                <p>
                  <strong>Scope of Work:</strong>
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Assessment and analysis of existing electrical systems</li>
                  <li>Preparation and revision of electrical layouts and as-built drawings</li>
                  <li>Upgradation of power distribution and cabling systems</li>
                  <li>Integration of modern lighting, power, and safety systems</li>
                  <li>Coordination with architectural and MEP services</li>
                  <li>Execution under strict security and operational constraints</li>
                </ul>

                <p>
                  <strong>Key Responsibilities & Contributions:</strong>
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Detailed site inspections and evaluation of legacy installations</li>
                  <li>Preparation and review of electrical drawings and documentation</li>
                  <li>Load calculations, circuit planning, and panel optimization</li>
                  <li>Coordination with government engineers, consultants, and contractors</li>
                  <li>Compliance with Nepal Electrical Codes and safety standards</li>
                  <li>BOQ preparation, bill verification, and progress documentation</li>
                </ul>

                <p>
                  <strong>Technical Highlights:</strong>
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Modernized lighting systems for efficiency and reliability</li>
                  <li>Optimized power distribution within an operational building</li>
                  <li>Enhanced earthing, protection, and safety mechanisms</li>
                  <li>System integration within heritage and architectural constraints</li>
                </ul>

                <p>
                  <strong>Outcome & Impact:</strong>  
                  The project successfully enhanced system reliability, safety, and
                  operational efficiency while delivering accurate as-built records
                  for future maintenance and audits, strengthening expertise in
                  handling nationally significant government infrastructure projects.
                </p>

                <p>
                  <strong>Professional Significance:</strong>  
                  This flagship government assignment demonstrates strong
                  capabilities in compliance-driven engineering, electrical design,
                  and execution within security-sensitive and mission-critical
                  environments.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      {/* ================= BIR HOSPITAL PROJECT ================= */}
    <motion.div
    layout
    className="
        max-w-7xl mx-auto mt-16
        bg-[#0b1320]/70
        border border-[#FFFDD0]/20
        rounded-2xl
        p-6 md:p-8
        shadow-lg
        hover:shadow-[0_0_30px_rgba(255,220,150,0.35)]
        transition-all
    "
    >
    {/* Header */}
    <h3 className="text-xl md:text-2xl font-semibold mb-1">
        BIR Hospital – Surgical Ward
    </h3>
    <p className="text-sm text-[#FFD27F] mb-4">
        Healthcare Electrical Engineering & MEP Support
    </p>

    <p className="text-sm uppercase tracking-wider text-[#FFFDD0]/70 mb-6">
        Picture Gallery
    </p>

    {/* Image Grid */}
    <div className="grid grid-cols-5 gap-4 mb-6">
        <div className="col-span-1 flex flex-col gap-4">
        <div className="img-box h-28" />
        <div className="img-box h-48" />
        </div>

        <div className="col-span-1">
        <div className="img-box h-full" />
        </div>

        <div className="col-span-2 flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
            <div className="img-box h-28" />
            <div className="img-box h-28" />
        </div>
        <div className="img-box h-40" />
        </div>

        <div className="col-span-1">
        <div className="img-box h-full" />
        </div>
    </div>

    {/* Short Description */}
    <p className="text-[#FFFDD0]/80 leading-relaxed text-sm md:text-base">
        The BIR Hospital Surgical Ward Electrical Works project was a critical
        healthcare infrastructure assignment carried out within Nepal’s oldest
        and most prestigious public hospital. The project focused on upgrading
        and supporting electrical systems for surgical wards, where uninterrupted
        power supply, safety, and compliance with medical standards are essential.
    </p>

    {/* Read More */}
    <button
        onClick={() => setOpen(open === "bir" ? null : "bir")}
        className="
        mt-6 mx-auto block
        text-[#FFD27F]
        font-semibold
        hover:text-white
        transition
        "
    >
        {open === "bir" ? "Show Less" : "Read More"}
    </button>

    {/* Expanded Content */}
    <AnimatePresence>
        {open === "bir" && (
        <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
        >
            <div className="border-t border-[#FFFDD0]/20 mt-6 pt-6 space-y-4 text-[#FFFDD0]/80 text-sm md:text-base">
            <p>
                <strong>Scope of Work:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1">
                <li>Electrical design review and execution support for surgical wards</li>
                <li>Power distribution planning for critical medical equipment</li>
                <li>Lighting systems suitable for surgical and clinical environments</li>
                <li>Integration with existing hospital electrical infrastructure</li>
                <li>Coordination with other MEP services</li>
                <li>Compliance with healthcare electrical safety standards</li>
            </ul>

            <p>
                <strong>Key Responsibilities & Contributions:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1">
                <li>Supervised electrical works within live surgical ward environments</li>
                <li>Prepared and verified electrical drawings and layouts</li>
                <li>Supported load calculations and circuit planning</li>
                <li>Coordinated with hospital engineers and contractors</li>
                <li>Ensured uninterrupted hospital operations</li>
                <li>Verified quantities and supported bill verification</li>
            </ul>

            <p>
                <strong>Technical Highlights:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1">
                <li>Reliable power supply for surgical and life-support equipment</li>
                <li>Enhanced earthing and protection systems</li>
                <li>Safe integration with existing hospital systems</li>
            </ul>

            <p>
                <strong>Outcome & Impact:</strong>  
                Improved safety, reliability, and operational efficiency of the
                hospital’s surgical ward electrical systems, while strengthening
                professional expertise in healthcare-focused, safety-critical
                infrastructure projects.
            </p>
            </div>
        </motion.div>
        )}
    </AnimatePresence>
    </motion.div>

    </section>
  );
};

export default ProjectSection;
