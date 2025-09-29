import React from "react";
import { motion } from "framer-motion";

// Import all logos individually
import logo1 from "../assets/img/trustLogo/trustedby1.png";
import logo2 from "../assets/img/trustLogo/trustedby2.jpg";
import logo3 from "../assets/img/trustLogo/trustedby3.png";
import logo4 from "../assets/img/trustLogo/trustedby4.jpg";
import logo5 from "../assets/img/trustLogo/trustedby5.png";
import logo6 from "../assets/img/trustLogo/trustedby6.png";
import logo7 from "../assets/img/trustLogo/trustedby7.jpg";
import logo8 from "../assets/img/trustLogo/trustedby8.jpg";
import logo9 from "../assets/img/trustLogo/trustedby9.jpg";
import logo10 from "../assets/img/trustLogo/trustedby10.jpg";
import logo11 from "../assets/img/trustLogo/trustedby11.jpg";
import logo12 from "../assets/img/trustLogo/trustedby12.jpg";
import logo13 from "../assets/img/trustLogo/trustedby13.jpg";
import logo14 from "../assets/img/trustLogo/trustedby14.jpg";
import logo15 from "../assets/img/trustLogo/trustedby15.jpg";
import logo16 from "../assets/img/trustLogo/trustedby16.png";
import logo17 from "../assets/img/trustLogo/trustedby17.jpg";
import logo18 from "../assets/img/trustLogo/trustedby18.jpg";
import logo19 from "../assets/img/trustLogo/trustedby19.jpg";
import logo20 from "../assets/img/trustLogo/trustedby20.png";
import logo21 from "../assets/img/trustLogo/trustedby21.jpg";
import logo22 from "../assets/img/trustLogo/trustedby22.png";
import logo23 from "../assets/img/trustLogo/trustedby23.png";
import logo24 from "../assets/img/trustLogo/trustedby24.jpg";
import logo25 from "../assets/img/trustLogo/trustedby25.jpg";
import logo26 from "../assets/img/trustLogo/trustedby26.png";
import logo27 from "../assets/img/trustLogo/trustedby27.jpg";
import logo28 from "../assets/img/trustLogo/trustedby28.png";
import logo29 from "../assets/img/trustLogo/trustedby29.jpg";
import logo30 from "../assets/img/trustLogo/trustedby30.jpg";

// Store all logos in an array
const logos = [
  logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8,
  logo9, logo10, logo11, logo12, logo13, logo14, logo15, logo16,
  logo17, logo18, logo19, logo20, logo21, logo22, logo23, logo24,
  logo25, logo26, logo27, logo28, logo29, logo30,
];

const TrustedBy = () => {
  return (
    <section className="bg-[#0b1315] py-20 overflow-hidden">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-5xl font-bold text-[#FFFDD0] mb-20">
        Trusted By
      </h2>

      <div className="space-y-[100px]">
        {/* Row 1 (Clockwise) */}
        <motion.div
          className="flex gap-[130px] items-center"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        >
          {[...logos, ...logos].map((logo, idx) => (
            <img
              key={`row1-${idx}`}
              src={logo}
              alt={`trusted-logo-${idx}`}
              className="h-32 w-auto object-contain rounded-lg"
            />
          ))}
        </motion.div>

        {/* Row 2 (Anti-Clockwise) */}
        <motion.div
          className="flex gap-[130px] items-center"
          animate={{ x: ["-100%", "0%"] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        >
          {[...logos, ...logos].map((logo, idx) => (
            <img
              key={`row2-${idx}`}
              src={logo}
              alt={`trusted-logo-${idx}`}
              className="h-32 w-auto object-contain rounded-lg"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;
