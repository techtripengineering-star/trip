import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaCode,
  FaGlobe,
  FaEnvelope,
  FaPhone
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import ChatBot from "../components/ChatBot";

// Import images
import hall1 from "../assets/img/hall1.jpg";
import project1 from "../assets/img/hall2.jpeg";
import project2 from "../assets/img/hall3.jpg";
import teamLead from "../assets/img/Raushan.jpg";
import techLead from "../assets/img/Prabhat.jpg";
import Krishna from "../assets/img/krishna.png";


const AboutPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ChatBot />

      {/* About the Company Section */}
      <section className="py-20 px-6 bg-[#0b1320] text-[#FFFDD0]">
        <div className="max-w-[1750px] mx-auto space-y-12">
          {/* Section Header */}
          <h2 className="text-5xl font-bold text-[#FFFDD0] mb-16 text-center">
            About the Company
          </h2>

          {/* Row 1 */}
          <div className="flex flex-col md:flex-row items-stretch gap-8">
            {/* Text Left */}
            <div className="md:w-1/2 flex flex-col justify-center space-y-6 text-justify">
              <h3 className="text-3xl font-semibold text-[#DC143C]">Who We Are</h3>
              <p className="text-base md:text-xl leading-relaxed">
                <span className="font-semibold">Trip Engineering Pvt. Ltd.</span> is a forward-thinking, performance-oriented engineering company specializing in{" "}
                <span className="font-semibold">
                  HVAC (Heating, Ventilation, and Air Conditioning), Electrical, Electronics, Plumbing & Sanitary, along with Fire-Fighting and Fire Suppression Systems
                </span>
                . Together, Trip Engineering offers complete{" "}
                <span className="font-semibold">MEPF (Mechanical, Electrical, Plumbing, and Fire-Fighting)</span> solutions.
              </p>

              <p className="text-base md:text-xl leading-relaxed">
                In addition to its core engineering expertise, Trip Engineering has expanded into the{" "}
                <span className="font-semibold">Software and Digital Solutions</span> domain — providing cutting-edge services in{" "}
                <span className="font-semibold">Web Development, Software Development, and Technology Integration</span>. Our software division focuses on creating{" "}
                <span className="font-semibold">custom digital solutions</span> that enhance operational efficiency, enable data-driven decision-making, and support business transformation across industries.
              </p>

              <p className="text-base md:text-xl leading-relaxed">
                From enterprise software applications and automation systems to modern, responsive websites and cloud-based solutions, Trip Engineering delivers technology that empowers businesses to thrive in the digital era.
              </p>

              <p className="text-base md:text-xl leading-relaxed">
                Since its establishment, the company has remained dedicated to setting new benchmarks in engineering and technology excellence through innovative approaches, reliable systems, and cost-efficient services.
              </p>
            </div>


            {/* Image Right */}
            <div className="md:w-1/2">
              <div className="relative group w-full h-full">
                <img
                  src={hall1}
                  alt="Trip Engineering Project 1"
                  className="rounded-lg shadow-xl w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col-reverse md:flex-row items-stretch gap-8">
            {/* Image Left */}
            <div className="md:w-1/2">
              <div className="relative group w-full h-full">
                <img
                  src={project1}
                  alt="Trip Engineering Project 2"
                  className="rounded-lg shadow-xl w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Text Right */}
            <div className="md:w-1/2 flex flex-col justify-center space-y-6 text-justify">
              <p className="text-base md:text-xl leading-relaxed">
                We pride ourselves on precision engineering, uncompromising quality
                standards, and timely delivery of every project. At Trip Engineering,
                safety is not an afterthought but a core principle all activities are
                executed under strict safety protocols aligned with international
                engineering standards. Our team follows a rigorous methodology of
                detailed planning, continuous supervision, and transparent communication,
                which allows us to consistently deliver results that exceed client
                expectations. This commitment has enabled us to become a trusted partner
                for government bodies, multinational corporations, architects, and
                private developers across Nepal.
              </p>
              <p className="text-base md:text-xl leading-relaxed">
                Alongside our core engineering expertise, we have expanded into{" "}
                <span className="font-semibold">
                  Software Development and AI-powered solutions
                </span>
                . Our software division specializes in developing custom applications,
                enterprise systems, data management platforms, and workflow automation
                tools designed to improve operational efficiency. From ERP systems for
                industries to smart dashboards for project monitoring, our software
                solutions are built to scale, integrate seamlessly with existing
                infrastructures, and drive measurable impact for our clients.
              </p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex flex-col md:flex-row items-stretch gap-8">
            {/* Text Left */}
            <div className="md:w-1/2 flex flex-col justify-center space-y-6 text-justify">
              <p className="text-base md:text-xl leading-relaxed">
                Our work methodology is built on detailed planning, rigorous testing, and
                transparent communication with stakeholders. This approach has enabled us
                to earn the trust of government bodies, multinational corporations,
                architects, contractors, and private developers, making us the go-to
                choice for engineering, MEP, and software-driven solutions in Nepal.
              </p>
              <p className="text-base md:text-xl leading-relaxed">
                Looking ahead, our mission is clear: to continue driving innovation,
                embracing sustainable and green technologies, and delivering value-driven
                engineering and digital solutions that not only support Nepal’s rapid
                infrastructure development but also positively impact communities for
                generations to come.
              </p>
              <p className="text-base md:text-xl leading-relaxed">
                We envision becoming a leader in sustainable engineering practices and{" "}
                <span className="font-semibold">digital transformation</span>, integrating
                renewable energy, smart building technologies, eco-friendly materials,
                and AI-powered solutions into our projects.
              </p>
            </div>

            {/* Image Right */}
            <div className="md:w-1/2">
              <div className="relative group w-full h-full">
                <img
                  src={project2}
                  alt="Trip Engineering Project 3"
                  className="rounded-lg shadow-xl w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 px-6 bg-[#111827] text-[#FFFDD0]">
        <div className="max-w-[1750px] mx-auto space-y-12">
          {/* Section Header */}
          <h2 className="text-5xl font-bold text-[#FFFDD0] mb-16 text-center">
            Our Team Leads
          </h2>

          <div className="flex flex-col md:flex-row items-stretch gap-8">
            {/* Image Left */}
            <div className="md:w-1/3 flex justify-center">
              <div className="relative group w-full max-w-sm h-full">
                <img
                  src={teamLead}
                  alt="Raushan Kumar Gupta"
                  className="rounded-lg shadow-lg w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Text Right */}
            <div className="md:w-2/3 flex flex-col justify-center space-y-6 text-justify">
              <h3 className="text-3xl font-semibold text-[#DC143C]">
                Raushan Kumar Gupta <br />
                Managing Director
              </h3>

              {/* Social Links */}
              <div className="flex gap-4 mt-2">
                <a
                  href="https://www.facebook.com/roshan.gupta.273616"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#222] hover:bg-[#1877F2] transition-colors duration-300"
                >
                  <FaFacebookF className="text-xl text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/raushan-kumar-gupta-482499148/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#222] hover:bg-[#0A66C2] transition-colors duration-300"
                >
                  <FaLinkedinIn className="text-xl text-white" />
                </a>
                <a
                  href="https://twitter.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#222] hover:bg-[#1DA1F2] transition-colors duration-300"
                >
                  <FaTwitter className="text-xl text-white" />
                </a>
                <a
                  href="https://www.instagram.com/hello_raushanji/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#222] hover:bg-[#E4405F] transition-colors duration-300"
                >
                  <FaInstagram className="text-xl text-white" />
                </a>
              </div>

              <p className="text-base md:text-xl leading-relaxed">
                Raushan Kumar Gupta is a highly accomplished Electrical & Electronics
                Engineer and the Managing Director of Trip Engineering Pvt. Ltd. With a
                Bachelor’s in Electrical and Electronics Engineering and an MBA, he
                combines technical knowledge with strategic leadership. His career spans
                years of extensive project management, MEP design, and consultancy,
                successfully delivering projects for government bodies, hospitals,
                universities, multinational corporations, and private developers.
              </p>
              <p className="text-base md:text-xl leading-relaxed">
                Under his leadership, Trip Engineering has grown into a performance-driven
                company with a focus on innovation, quality, and sustainable solutions. He
                has overseen high-profile works including renovations of the Prime
                Minister’s Office, hospital expansions, and corporate setups for global
                brands like Samsung. His dedication, technical expertise, and vision for
                sustainable growth continue to inspire the entire team while ensuring
                exceptional value for clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Plumbing & Fire-Fighting Expert Section */}
      <section className="py-20 px-6 bg-[#0b1320] text-[#FFFDD0]">
        <div className="max-w-[1750px] mx-auto space-y-12">

          <div className="flex flex-col md:flex-row items-stretch gap-8">
            {/* Image Left */}
            <div className="md:w-1/3 flex justify-center">
              <div className="relative group w-full max-w-sm h-full">
                <img
                  src={Krishna} // replace with actual photo
                  alt="Krishna Kumar Sah"
                  className="rounded-lg shadow-lg w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Text Right */}
            <div className="md:w-2/3 flex flex-col justify-center space-y-6 text-justify">
              <h3 className="text-3xl font-semibold text-[#DC143C]">
                Krishna Kumar Sah <br />
                Plumbing & Fire-Fighting Expert
              </h3>

              {/* Social Links */}
              <div className="flex gap-4 mt-2">
                <a
                  href="mailto:sahkrishna226@gmail.com"
                  className="p-2 rounded-full bg-[#222] hover:bg-[#D44638] transition-colors duration-300"
                >
                  <FaEnvelope className="text-xl text-white" />
                </a>
                <a
                  href="tel:+9779805917093"
                  className="p-2 rounded-full bg-[#222] hover:bg-[#34B7F1] transition-colors duration-300"
                >
                  <FaPhone className="text-xl text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/your-link" // Replace if he has LinkedIn
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#222] hover:bg-[#0A66C2] transition-colors duration-300"
                >
                  <FaLinkedinIn className="text-xl text-white" />
                </a>
              </div>

              <p className="text-base md:text-xl leading-relaxed">
                Krishna Kumar Sah is a seasoned <span className="font-semibold">Civil Engineer</span> with 
                over 9 years of expertise in <span className="font-semibold">plumbing, sanitary, and fire-fighting design</span>. 
                He has worked on high-profile projects such as <span className="font-semibold">Hotel and Tourism Complex (Thamel), 
                Gorkha Brewery, Yak Brewery, Varnabas Museum Hotel, and Academic Buildings at Professional Educator Ltd</span>. 
                His extensive experience covers structural works, MEP coordination, quality control, and cost estimation.
              </p>
              <p className="text-base md:text-xl leading-relaxed">
                Beyond project execution, Krishna specializes in <span className="font-semibold">designing sanitary 
                and fire-fighting systems</span> for complex infrastructures including hospitals, hotels, colleges, 
                and commercial complexes across Nepal. His portfolio includes projects like <span className="font-semibold">
                Kandara Hotel (Pokhara), San Hospital (Rautahat), Lalbandi Hospital, Terai Crown Hotel, and PHE Building (Kathmandu)</span>. 
              </p>
              <p className="text-base md:text-xl leading-relaxed">
                A registered NEC Civil Engineer, Krishna is proficient in <span className="font-semibold">AutoCAD, AutoCAD MEP, 
                MS Project, and advanced surveying instruments</span>. His strong leadership in site supervision, 
                MEP design coordination, and quality assurance makes him an invaluable asset to Trip Engineering Pvt. Ltd.
              </p>
            </div>
          </div>
        </div>
      </section>

{/* New Tech Lead Section */}
      <section className="py-20 px-6 bg-[#111827] text-[#FFFDD0]">
        <div className="max-w-[1750px] mx-auto space-y-12">
          <div className="flex flex-col md:flex-row items-stretch gap-8">
            {/* Image Left */}
            <div className="md:w-1/3 flex justify-center">
              <div className="relative group w-full max-w-sm h-full">
                <img
                  src={techLead} // replace with actual photo
                  alt="Prabhat Kumar Gupta"
                  className="rounded-lg shadow-lg w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* Text Right */}
            <div className="md:w-2/3 flex flex-col justify-center space-y-6 text-justify">
              <h3 className="text-3xl font-semibold text-[#DC143C]">
                Prabhat Kumar Gupta <br />
                Tech Lead
              </h3>

              {/* Social Links */}
              <div className="flex gap-4 mt-2">
                <a
                  href="https://github.com/gprabhat65"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#222] hover:bg-[#333] transition-colors duration-300"
                >
                  <FaGithub className="text-xl text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/prabhat-kumar-gupta-2b5367257/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#222] hover:bg-[#0A66C2] transition-colors duration-300"
                >
                  <FaLinkedinIn className="text-xl text-white" />
                </a>
                <a
                  href="https://leetcode.com/u/gprabhat65/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#222] hover:bg-[#FFA116] transition-colors duration-300"
                >
                  <FaCode className="text-xl text-white" /> {/* icon for coding */}
                </a>
                <a
                  href="https://www.prabhatkumargupta.com.np/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#222] hover:bg-[#E4405F] transition-colors duration-300"
                >
                  <FaGlobe className="text-xl text-white" /> {/* website icon */}
                </a>
                 <a
                  href="https://www.instagram.com/_mr_kalwar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#222] hover:bg-[#E4405F] transition-colors duration-300"
                >
                  <FaInstagram className="text-xl text-white" />
                </a>
                <a
                  href="https://x.com/gprabhat650"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#222] hover:bg-[#1DA1F2] transition-colors duration-300"
                >
                  <FaTwitter className="text-xl text-white" />
                </a>
                <a
                  href="https://www.facebook.com/gprabhat65"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#222] hover:bg-[#1877F2] transition-colors duration-300"
                >
                  <FaFacebookF className="text-xl text-white" />
                </a>
              </div>

              <p className="text-base md:text-xl leading-relaxed">
                Prabhat Kumar Gupta is an aspiring <span className="font-semibold">AI & Data Science Engineer</span> and the Tech Lead at Trip Engineering Pvt. Ltd. 
                He is currently pursuing his <span className="font-semibold">B.Tech in Artificial Intelligence & Data Science</span> at KPR Institute of Engineering and Technology, Coimbatore. 
                With hands-on expertise in Python, Java, C, TensorFlow, PyTorch, OpenCV, and Generative AI frameworks, he is deeply passionate about creating intelligent and scalable digital solutions.
              </p>
              <p className="text-base md:text-xl leading-relaxed">
                Prabhat has interned at <span className="font-semibold">Yaane Technologies</span> in Machine Learning & Deep Learning 
                and at <span className="font-semibold">Digital Mantras</span> in AI & Backend Development. His works include projects such as 
                <span className="font-semibold"> Crop Recommendation System, Medical Assistance with LLMs, FlightInfoFetcher, and Checkbox Detection</span>, 
                showcasing his ability to merge AI with practical applications.
              </p>
              <p className="text-base md:text-xl leading-relaxed">
                He has earned recognition in international conferences and tech expos, securing awards for innovative AI-driven projects. 
                With strong foundations in <span className="font-semibold">AI, Machine Learning, NLP, and Backend Development</span>, 
                Prabhat brings futuristic insights and technical leadership to the company, driving the adoption of AI-powered automation and intelligent decision-making across projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full border-t border-gray-600"></div>

      {/* Our Mission Section */}
      <section className="py-20 px-6 bg-[#0b1320] text-[#FFFDD0]">
        <div className="max-w-[1750px] mx-auto space-y-12">
          {/* Section Header */}
          <h2 className="text-5xl font-bold text-[#FFFDD0] mb-10 text-center">
            Our Mission
          </h2>

          <div className="text-base md:text-xl leading-relaxed text-justify space-y-6">
            <p>
              At <span className="font-semibold">Trip Engineering Pvt. Ltd.</span>, our mission is to 
              engineer the future with innovation, precision, and responsibility. We are committed to 
              delivering end-to-end engineering, digital, and infrastructure solutions that combine 
              electrical, electronics, and MEP expertise with plumbing, sanitary, and fire-fighting 
              systems. We also harness the power of software, AI, and data-driven solutions to optimize 
              operations, empower businesses, and shape smarter environments.
            </p>

            <p>
              We strive to go beyond conventional engineering by adopting cutting-edge technologies such 
              as Generative AI, IoT, and smart building systems while upholding international safety and 
              quality standards. Our focus extends to building long-term partnerships with governments, 
              industries, and communities, always prioritizing sustainability and green engineering 
              practices to minimize environmental impact.
            </p>

            <p>
              Ultimately, our mission is not only to execute projects but also to transform lives by 
              integrating engineering excellence with digital intelligence, ensuring every solution we 
              deliver drives progress, safety, and sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Divider Line */}

      {/* Our Vision Section */}
      <section className="py-20 px-6 bg-[#111827] text-[#FFFDD0]">
        <div className="max-w-[1750px] mx-auto space-y-12">
          {/* Section Header */}
          <h2 className="text-5xl font-bold text-[#FFFDD0] mb-10 text-center">
            Our Vision
          </h2>

          <div className="text-base md:text-xl leading-relaxed text-justify space-y-6">
            <p>
              We envision <span className="font-semibold">Trip Engineering Pvt. Ltd.</span> as a regional 
              leader and global contender in delivering holistic engineering and AI-powered solutions. 
              Our vision is to revolutionize infrastructure in Nepal and beyond with smart, safe, and 
              sustainable systems, while leading the convergence of engineering and digital innovation 
              to make buildings smarter, industries more efficient, and cities more sustainable.
            </p>

            <p>
              By merging core civil and electrical engineering with artificial intelligence, machine 
              learning, and automation, we aim to create future-ready talent and solutions that are both 
              scalable and impactful. We aspire to be a trusted partner of choice for government bodies, 
              hospitals, universities, industrial complexes, and global corporations.
            </p>

            <p>
              Above all, we are dedicated to continuous innovation in green and resilient engineering by 
              integrating renewable energy, eco-friendly materials, and fire-safe designs. Through 
              visionary leadership, technical mastery, and an unwavering commitment to safety, quality, 
              and client success, we seek to inspire trust and excellence in everything we do.
            </p>

            <p>
              Ultimately, our vision is to become a pioneering hub of sustainable engineering and AI 
              transformation, shaping infrastructures, industries, and communities that thrive for 
              generations to come.
            </p>
          </div>
        </div>
      </section>


      <Footer />
    </>
  );
};

export default AboutPage;
