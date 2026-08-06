import React, { useState, useEffect } from "react";
import Section from "../components/Section";
import {
  FaReact,
  FaGithub,
  FaGlobe,
  FaNetworkWired,
  FaTools,
  FaTimes,
} from "react-icons/fa";
import { SiHtml5 } from "react-icons/si";

// Import Swiper React components & styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import network0 from "../assets/img/network0.PNG";
import network1 from "../assets/img/network1.PNG";
import network2 from "../assets/img/network2.PNG";
import network3 from "../assets/img/network3.PNG";
import help1 from "../assets/img/help1.PNG";
import help2 from "../assets/img/help2.PNG";
import help3 from "../assets/img/help3.PNG";
import help4 from "../assets/img/help4.PNG";
import help5 from "../assets/img/help5.PNG";
import help6 from "../assets/img/help6.PNG";
import help7 from "../assets/img/help7.PNG";
import help8 from "../assets/img/help8.PNG";
import help9 from "../assets/img/help9.PNG";
import comp1 from "../assets/img/comp1.png";
import comp2 from "../assets/img/comp2.PNG";
import comp3 from "../assets/img/comp3.PNG";
import comp4 from "../assets/img/comp4.PNG";
import comp5 from "../assets/img/comp5.PNG";

const projects = [
  {
    title: "Enterprise Network Infrastructure Simulation",
    desc: "Simulated enterprise network topology with VLAN, dynamic routing, NAT, ACL, and HSRP redundancy.",
    role: "Network Engineer (Simulation)",
    functions: [
      "Designed network topology (Core, Distribution, Access)",
      "Configured VLAN & Inter-VLAN Routing",
      "Implemented OSPF dynamic routing protocol",
      "Configured NAT (PAT) for internet access",
      "Applied ACL for traffic filtering and security",
      "Implemented HSRP for router redundancy & failover",
    ],
    images: [network0, network1, network2, network3],
    tech: ["Cisco Packet Tracer", "VLAN", "OSPF", "ACL"],
    icons: [<FaNetworkWired key="net" className="text-teal-600 text-xl" />],
    github: "",
    demo: "",
  },
  {
    title: "IT Helpdesk Ticketing System",
    desc: "Web-based system designed to streamline and manage enterprise IT support requests.",
    role: "Fullstack Developer",
    functions: [
      "Ticket creation, priority assignment & tracking",
      "Simulated IT workflow with status updates",
      "User reporting and activity logs system",
    ],
    images: [help1, help2, help3, help4, help5, help6, help7, help8, help9],
    tech: ["PHP", "Tailwind CSS", "MySQL"],
    icons: [<FaTools key="tools" className="text-gray-600 text-xl" />],
    github: "",
    demo: "",
  },

  {
    title: "Company Profile Website",
    desc: "Responsive company profile website designed for legal and consulting services.",
    role: "Frontend Developer",
    functions: [
      "Interactive company profile pages",
      "Detailed service offering info",
      "Working contact & inquiry form",
    ],
    images: [comp1, comp2, comp3, comp4, comp5],
    tech: ["HTML5", "CSS3", "JavaScript"],
    icons: [<SiHtml5 key="html" className="text-orange-500 text-xl" />],
    github: "https://github.com/Sandysuryantiko/Company-Profile-Website",
    demo: "https://tbabdulfatah.netlify.app",
  },
  {
    title: "Network Troubleshooting Case Study",
    desc: "Solved complex network connectivity issues in a simulated enterprise environment.",
    role: "IT Support",
    functions: [
      "Diagnosed & fixed DHCP IP pool exhaustion issues",
      "Corrected faulty NAT overload configurations",
      "Resolved misconfigured Inter-VLAN communication",
    ],
    images: [network0, network1, network2, network3],
    tech: ["Troubleshooting", "Packet Tracer", "Subnetting"],
    icons: [<FaNetworkWired key="trouble" className="text-teal-600 text-xl" />],
    github: "",
    demo: "",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <Section id="projects" title="Projects">
      {/* Grid Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <div
            key={i}
            onClick={() => openModal(p)}
            className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden flex flex-col group"
          >
            {/* Thumbnail */}
            <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-gray-100">
              <img
                src={p.images?.[0]}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-3 right-3 text-[11px] font-semibold bg-white/90 backdrop-blur-md text-gray-700 px-2.5 py-1 rounded-md shadow-sm">
                {p.role}
              </span>
            </div>

            {/* Info ringkas */}
            <div className="p-4 flex flex-col flex-1">
              <h3 className="font-bold text-gray-800 text-base leading-snug mb-1 group-hover:text-blue-600 transition-colors">
                {p.title}
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm line-clamp-2 flex-1 mb-3">
                {p.desc}
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {p.tech?.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-medium bg-gray-100 text-gray-600 px-2 py-0.5 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-between pt-2 border-t border-gray-100 mt-auto">
                <div className="flex items-center gap-2">{p.icons}</div>
                <span className="text-xs font-semibold text-blue-600 group-hover:underline">
                  View Details &rarr;
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Detail & Gallery */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-sm transition-opacity"
          onClick={closeModal}
        >
          <div
            className="relative flex flex-col bg-white rounded-t-2xl sm:rounded-2xl w-full sm:max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Drag Indicator */}
            <div className="flex justify-center pt-2.5 pb-1 sm:hidden bg-gray-100 flex-shrink-0">
              <div className="w-12 h-1.5 rounded-full bg-gray-300" />
            </div>

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-red-50 hover:text-red-600 text-gray-600 transition shadow"
            >
              <FaTimes />
            </button>

            {/* Modal Scrollable Container */}
            <div className="overflow-y-auto flex-1">
              {/* Swiper Image Gallery */}
              {selectedProject.images && selectedProject.images.length > 0 && (
                <div className="bg-black relative">
                  <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    className="w-full h-56 sm:h-72"
                  >
                    {selectedProject.images.map((imgSrc, idx) => (
                      <SwiperSlide
                        key={idx}
                        className="flex items-center justify-center bg-gray-900"
                      >
                        <img
                          src={imgSrc}
                          alt={`${selectedProject.title} slide ${idx + 1}`}
                          className="w-full h-full object-contain"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}

              {/* Content Detail */}
              <div className="p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-snug">
                    {selectedProject.title}
                  </h3>
                  <span className="text-xs font-semibold bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                    {selectedProject.role}
                  </span>
                </div>

                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {selectedProject.desc}
                </p>

                {/* Key Features */}
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 mb-5">
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Key Features & Implementations
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedProject.functions?.map((f, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs sm:text-sm text-gray-700"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Badges */}
                <div className="mb-5">
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech?.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-semibold bg-blue-100/70 text-blue-800 px-2.5 py-1 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white text-xs font-semibold rounded-lg transition"
                    >
                      <FaGithub className="text-sm" />
                      <span>Repository</span>
                    </a>
                  )}
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition"
                    >
                      <FaGlobe className="text-sm" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

export default Projects;
