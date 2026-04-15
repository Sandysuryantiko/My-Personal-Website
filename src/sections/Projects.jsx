import React, { useState } from "react";
import Section from "../components/Section";
import {
  FaReact,
  FaGithub,
  FaGlobe,
  FaNetworkWired,
  FaTools,
} from "react-icons/fa";
import { SiHtml5 } from "react-icons/si";

import monitoring1 from "../assets/img/monitoring1.PNG";
import monitoring2 from "../assets/img/monitoring2.PNG";
import monitoring3 from "../assets/img/monitoring3.PNG";
import monitoring4 from "../assets/img/monitoring4.PNG";

const projects = [
  {
    title: "Enterprise Network Infrastructure Simulation",
    desc: "Simulated enterprise network with VLAN, routing, NAT, ACL, and redundancy.",
    role: "Network Engineer (Simulation)",
    functions: [
      "Designed network topology (Core, Distribution, Access)",
      "Configured VLAN & Inter-VLAN Routing",
      "Implemented OSPF dynamic routing",
      "Configured NAT (PAT) for internet access",
      "Applied ACL for traffic filtering",
      "Implemented HSRP for failover",
    ],
    images: [monitoring1],
    icons: [<FaNetworkWired key="net" className="text-teal-600 text-xl" />],
    github: "",
    demo: "",
  },
  {
    title: "IT Helpdesk Ticketing System",
    desc: "Web-based system to manage IT support requests.",
    role: "Fullstack Developer",
    functions: [
      "Ticket creation & tracking",
      "Simulated IT workflow",
      "User reporting system",
    ],
    images: [monitoring2],
    icons: [<FaTools key="tools" className="text-gray-600 text-xl" />],
    github: "",
    demo: "",
  },
  {
    title: "Production Monitoring System",
    desc: "Web-based system for monitoring production data.",
    role: "Fullstack Developer",
    functions: [
      "Real-time monitoring",
      "Dashboard visualization",
      "Reporting system",
    ],
    images: [monitoring3],
    icons: [<FaReact key="react" className="text-blue-500 text-xl" />],
    github: "https://github.com/Sandysuryantiko/monitoring-produksi",
    demo: "https://monitoringproduksi.netlify.app/",
  },
  {
    title: "Company Profile Website",
    desc: "Company profile website for legal services.",
    role: "Frontend Developer",
    functions: ["Profile pages", "Service info", "Contact form"],
    images: [monitoring4],
    icons: [<SiHtml5 key="html" className="text-orange-500 text-xl" />],
    github: "https://github.com/Sandysuryantiko/Company-Profile-Website",
    demo: "https://tbabdulfatah.netlify.app",
  },
  {
    title: "Network Troubleshooting Case Study",
    desc: "Solved network issues in simulated environment.",
    role: "IT Support",
    functions: [
      "Diagnosed DHCP issue",
      "Fixed NAT config",
      "Resolved VLAN communication",
    ],
    images: [monitoring1],
    icons: [<FaNetworkWired key="trouble" className="text-teal-600 text-xl" />],
    github: "",
    demo: "",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImg, setCurrentImg] = useState(0);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImg(0);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "";
  };

  const nextImage = () =>
    setCurrentImg((prev) => (prev + 1) % selectedProject.images.length);

  const prevImage = () =>
    setCurrentImg(
      (prev) =>
        (prev - 1 + selectedProject.images.length) %
        selectedProject.images.length,
    );

  return (
    <Section id="projects" title="Projects">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {projects.map((p, i) => (
          <div
            key={i}
            onClick={() => openModal(p)}
            className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer overflow-hidden flex flex-col"
          >
            <div className="relative w-full h-40 sm:h-44 overflow-hidden bg-gray-100">
              <img
                src={p.images?.[0]}
                alt={p.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex flex-col flex-1">
              <h3 className="font-semibold text-gray-800 text-sm sm:text-base leading-snug mb-1">
                {p.title}
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm line-clamp-2 flex-1">
                {p.desc}
              </p>
              <div className="flex items-center gap-2 mt-3">
                {p.icons}
                <span className="text-xs text-gray-400 ml-auto">{p.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center overflow-hidden"
          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
          onClick={closeModal}
        >
          <div
            className="relative flex flex-col bg-white rounded-t-2xl sm:rounded-xl w-full sm:w-auto sm:mx-4 sm:max-w-xl lg:max-w-3xl max-h-[92vh] sm:max-h-[88vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Handle bar mobile */}
            <div className="flex justify-center pt-3 pb-1 sm:hidden flex-shrink-0">
              <div className="w-10 h-1 rounded-full bg-gray-300" />
            </div>

            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-100 hover:text-red-600 text-gray-500 text-sm transition-colors z-10"
            >
              X
            </button>

            {/* Scrollable area */}
            <div className="overflow-y-auto overflow-x-hidden flex-1 w-full">
              {/* Image slider */}
              <div className="bg-gray-50 w-full">
                <div className="flex items-center justify-between px-2 py-3">
                  <button
                    onClick={prevImage}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow text-gray-600 hover:bg-gray-100 flex-shrink-0"
                  >
                    {"<"}
                  </button>
                  <div className="flex-1 flex items-center justify-center px-2 min-w-0">
                    <img
                      src={selectedProject.images[currentImg]}
                      alt={selectedProject.title}
                      className="h-40 sm:h-64 max-w-full w-auto object-contain rounded-lg"
                    />
                  </div>
                  <button
                    onClick={nextImage}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow text-gray-600 hover:bg-gray-100 flex-shrink-0"
                  >
                    {">"}
                  </button>
                </div>
                {selectedProject.images.length > 1 && (
                  <p className="text-center text-xs text-gray-400 pb-2">
                    {currentImg + 1} / {selectedProject.images.length}
                  </p>
                )}
              </div>

              {/* Detail content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-xl font-bold text-gray-800 leading-snug">
                  {selectedProject.title}
                </h3>
                <span className="inline-block mt-2 text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full font-medium">
                  {selectedProject.role}
                </span>
                <p className="text-gray-600 mt-3 text-sm sm:text-base">
                  {selectedProject.desc}
                </p>
                <div className="mt-4">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                    Highlights
                  </p>
                  <ul className="space-y-1">
                    {selectedProject.functions?.map((f, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-gray-700"
                      >
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center gap-3 mt-5 pt-4 border-t border-gray-100">
                  <div className="flex gap-2 flex-1">
                    {selectedProject.icons}
                  </div>
                  <div className="flex gap-2">
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        <FaGithub />
                        <span>GitHub</span>
                      </a>
                    )}
                    {selectedProject.demo && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 px-3 py-2 bg-blue-600 text-white text-xs rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <FaGlobe />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
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
