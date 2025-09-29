import React from "react";
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";

import slide1 from "../assets/img/HeroSection1.jpeg";
import slide2 from "../assets/img/HeroSection2.jpeg";
import slide3 from "../assets/img/HeroSection3.jpeg";
import slide4 from "../assets/img/scooter1.png";

// Example hero images
const aboutHero = slide2;
import servicesHero from "../assets/img/Bikers-Cafe-image.jpg";
const projectsHero = slide1;
const careersHero = slide4;

const slides = [
  {
    image: slide1,
    title: "Comprehensive Electrical & MEP Solutions",
    description: "Expert in electrical design, estimation, and supervision.",
    buttonText: "Get Started",
    buttonLink: "/services",
  },
  {
    image: slide2,
    title: "Hospital & Infrastructure Projects",
    description: "Reliable systems for hospitals and large institutions.",
    buttonText: "Learn More",
    buttonLink: "/services",
  },
  {
    image: slide3,
    title: "Project Management Excellence",
    description: "Ensuring smooth execution and on-time delivery.",
    buttonText: "Discover",
    buttonLink: "/about",
  },
  {
    image: slide4,
    title: "Diverse Project Portfolio",
    description: "Trusted by clients across sectors nationwide.",
    buttonText: "Explore",
    buttonLink: "/about",
  },
];

const HeroSection = () => {
  const location = useLocation();

  // 🔹 If not homepage, show static hero instead of slider
  if (location.pathname !== "/") {
    let bgImage = "";
    let title = "";
    let subtitle = "";

    switch (location.pathname) {
      case "/about":
        bgImage = aboutHero;
        title = "About Us";
        subtitle = "Learn more about Trip Engineering";
        break;
      case "/services":
        bgImage = servicesHero;
        title = "Our Services";
        subtitle = "What we offer to our clients";
        break;
      case "/projects":
        bgImage = projectsHero;
        title = "Our Projects";
        subtitle = "Showcasing our successful work";
        break;
      case "/careers":
        bgImage = careersHero;
        title = "Careers";
        subtitle = "Join our growing team";
        break;
      default:
        bgImage = slide1;
        title = "Trip Engineering";
        subtitle = "Innovating with passion";
    }

    return (
      <section
        className="relative w-full h-[100vh] flex items-center justify-center text-center text-[#FFFDD0] -mt-[70px]"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg lg:text-xl">{subtitle}</p>
        </div>

        {/* ✅ Bottom gradient */}
        <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-[#0b1320] via-[#0b1320] to-[#0b1320]/0"></div>
      </section>
    );
  }

  // 🔹 Homepage Hero: show slider
  return (
    <section className="relative w-full h-screen -mt-[70px] shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-[#FFFDD0] px-4">
                <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="mb-6 text-lg lg:text-2xl">{slide.description}</p>
                {slide.buttonText && (
                  <Link
                    to={slide.buttonLink}
                    className="bg-red-600 hover:bg-red-700 transition-colors text-[#FFFDD0] py-3 px-6 rounded-md"
                  >
                    {slide.buttonText}
                  </Link>
                )}
              </div>

              {/* Bottom gradient */}
              <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-[#0b1320] via-[#0b1320] to-[#0b1320]/0"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
