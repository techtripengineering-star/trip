import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const achievements = [
  { value: 5, suffix: "+", label: "Years Of Experience" },
  { value: 10, suffix: "+", label: "Professionals In-House" },
  { value: 15, suffix: "+", label: "Projects Completed" },
  { value: 500, suffix: "+", label: "Thousands Sq.Ft Delivered" },
];

const Achievements = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="bg-[#0b1320] py-16 w-full">
      <div className="w-full grid grid-cols-1 md:grid-cols-4">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center text-[#FFFDD0] py-8 px-4 relative border-b md:border-b-0 md:border-r border-gray-600 last:border-none"
          >
            {/* Counter */}
            <h2 className="text-4xl font-bold text-cyan-400 mb-2">
              {inView ? (
                <CountUp end={item.value} duration={3} suffix={item.suffix} />
              ) : (
                `0${item.suffix}`
              )}
            </h2>
            <p className="text-base md:text-2xl">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
