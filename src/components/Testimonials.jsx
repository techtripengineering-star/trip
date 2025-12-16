import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ITEMS_PER_PAGE = 4;

export default function Testimonials({ testimonials }) {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE);

  const prevPage = () => {
    if (page > 0) setPage(page - 1);
  };

  const nextPage = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  const start = page * ITEMS_PER_PAGE;
  const visibleTestimonials = testimonials.slice(start, start + ITEMS_PER_PAGE);

  return (
    <section className="py-20">
      <h2 className="text-center text-3xl font-bold text-[#FFFDD0] mb-12">
        Testimonials
      </h2>

      <div className="w-full mx-auto px-6 relative">

        {/* ------- LEFT ARROW ------- */}
        <button
          onClick={prevPage}
          disabled={page === 0}
          className={`absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full 
          bg-[#3c5a7a] text-white shadow-md hover:bg-[#2c465e] transition
          ${page === 0 ? "opacity-40 cursor-not-allowed" : ""}`}
        >
          <FiChevronLeft size={28} />
        </button>

        {/* ------- RIGHT ARROW ------- */}
        <button
          onClick={nextPage}
          disabled={page === totalPages - 1}
          className={`absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full 
          bg-[#3c5a7a] text-white shadow-md hover:bg-[#2c465e] transition
          ${page === totalPages - 1 ? "opacity-40 cursor-not-allowed" : ""}`}
        >
          <FiChevronRight size={28} />
        </button>

        {/* ------ Cards Grid ------ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-500">
          {visibleTestimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-3xl p-6 bg-gradient-to-b from-[#3c5a7a] to-[#1f3347]
              text-white shadow-xl hover:shadow-[0_0_25px_rgba(255,180,80,0.6)]
              hover:scale-[1.05] transition-all duration-300"
            >
              {/* Avatar */}
              <div className="flex justify-center mb-4">
                <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-300 shadow-md">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold text-center">{t.name}</h3>
              <p className="text-center text-gray-200 text-sm">{t.company}</p>
              <p className="text-center text-gray-300 text-xs mb-3">{t.location}</p>

              {/* Rating */}
              <div className="flex justify-center mb-3">
                {[...Array(t.rating)].map((_, idx) => (
                  <span key={idx} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>

              {/* Message */}
              <p className="text-center text-gray-100 text-sm italic">“{t.text}”</p>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-10 space-x-3">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setPage(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === page ? "bg-gray-700 scale-125" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
