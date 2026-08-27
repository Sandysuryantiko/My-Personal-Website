import React, { useState } from "react";
import Section from "../components/Section";
import { FaImages, FaTimes } from "react-icons/fa";

// Import Swiper React components & styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const experiences = [
  // {
  //   id: 1,
  //   role: "IT Support",
  //   company: "PT Wirawan Group Corporation",
  //   year: "2026 - Present",
  //   description:
  //     "Responsible for Active Directory management, Kerio Control firewall, Synology NAS backup routines, Print Server setup, VPN administration, and end-user IT support.",
  //   images: [
  //     "https://via.placeholder.com/600x400?text=IT+Support+Setup+1", // Ganti dengan path foto kamu (misal: /assets/img/exp1-1.jpg)
  //     "https://via.placeholder.com/600x400?text=Network+Rack+Maintenance",
  //     "https://via.placeholder.com/600x400?text=NAS+and+Server+Backup",
  //   ],
  // },
  {
    id: 2,
    role: "Desktop Support Engineer (Freelance)",
    company: "PT Berca Hardayaperkasa",
    year: "2026",
    description:
      "Handled PC deployment, hardware/software troubleshooting, and network installation for client projects.",
    images: [
      "https://via.placeholder.com/600x400?text=Desktop+Support+Activity",
    ],
  },
  {
    id: 3,
    role: "Production Operator",
    company: "PT Gajah Tunggal, Tbk.",
    year: "2017 - 2026",
    description:
      "Managed production machinery operations and operational troubleshooting under high-pressure manufacturing environment.",
    images: ["https://via.placeholder.com/600x400?text=Production+Operations"],
  },
  {
    id: 4,
    role: "Production Planning Inventory & Control",
    company: "Wijaya Foam",
    year: "2017",
    description:
      "Controlled raw material inventory stock and planned production schedules.",
    images: [],
  },
  {
    id: 5,
    role: "IT Support (Internship)",
    company: "PT Kumatex",
    year: "2016",
    description:
      "Assisted in local network cabling, hardware assembly, and basic user support.",
    images: [],
  },
  {
    id: 6,
    role: "Mechanical Engineer (Prakerin)",
    company: "PT Bintang Surya Sejati Sukses (BSSS)",
    year: "2015",
    description:
      "Conducted mechanical machinery inspections and preventive maintenance.",
    images: [],
  },
];

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(null);

  return (
    <Section id="experience" title="Experience">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8">
        <div className="relative border-l-2 border-blue-600 ml-2 sm:ml-6">
          {experiences.map((exp) => (
            <div key={exp.id} className="mb-6 last:mb-0 ml-4 sm:ml-6 relative">
              {/* Bulatan Timeline */}
              <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-[23px] sm:-left-[31px] top-2 border-2 border-white shadow-sm"></div>

              {/* Card Ringkas */}
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 hover:shadow-sm transition">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="font-bold text-base sm:text-lg text-gray-800">
                    {exp.role}
                  </h3>
                  <span className="text-[11px] sm:text-xs font-semibold bg-blue-100 text-blue-700 px-2.5 py-0.5 rounded-full w-fit">
                    {exp.year}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-gray-600 mt-0.5 mb-3">
                  {exp.company}
                </p>

                {/* Tombol Detail & Galeri */}
                <button
                  onClick={() => setSelectedExp(exp)}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-md transition"
                >
                  <FaImages /> Detail & Photos
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pop-up Modal Detail & Galeri */}
      {selectedExp && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl animate-fade-in relative flex flex-col max-h-[90vh]">
            {/* Header Modal */}
            <div className="flex justify-between items-start p-4 border-b">
              <div>
                <h3 className="font-bold text-lg text-gray-800">
                  {selectedExp.role}
                </h3>
                <p className="text-xs text-blue-600 font-semibold">
                  {selectedExp.company} ({selectedExp.year})
                </p>
              </div>
              <button
                onClick={() => setSelectedExp(null)}
                className="p-1.5 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition"
              >
                <FaTimes className="text-lg" />
              </button>
            </div>

            {/* Isi Modal: Slider Foto & Deskripsi */}
            <div className="p-4 overflow-y-auto space-y-4">
              {/* Slider Foto (Swipeable) */}
              {selectedExp.images && selectedExp.images.length > 0 ? (
                <div className="rounded-xl overflow-hidden shadow-inner bg-black">
                  <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    className="w-full h-56 sm:h-64"
                  >
                    {selectedExp.images.map((imgSrc, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={imgSrc}
                          alt={`${selectedExp.role} photo ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              ) : (
                <div className="bg-gray-100 p-8 rounded-xl text-center text-gray-400 text-xs italic">
                  No photos available for this experience.
                </div>
              )}

              {/* Deskripsi Pengalaman */}
              <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  Job Description
                </h4>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-justify">
                  {selectedExp.description}
                </p>
              </div>
            </div>

            {/* Footer Modal */}
            <div className="p-3 border-t bg-gray-50 text-right">
              <button
                onClick={() => setSelectedExp(null)}
                className="px-4 py-1.5 bg-gray-800 text-white rounded-lg text-xs font-semibold hover:bg-gray-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

export default Experience;
