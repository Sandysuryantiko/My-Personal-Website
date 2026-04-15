import React, { useState } from "react";
import Section from "../components/Section";
import {
  FaReact,
  FaGithub,
  FaGlobe,
  FaNetworkWired,
  FaTools,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiPhp,
  SiMysql,
  SiHtml5,
  SiJavascript,
  SiFirebase,
} from "react-icons/si";

// Import gambar lokal
import monitoring1 from "../assets/img/monitoring1.PNG";
import monitoring2 from "../assets/img/monitoring2.PNG";
import monitoring3 from "../assets/img/monitoring3.PNG";
import monitoring4 from "../assets/img/monitoring4.PNG";

// Data project
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
    icons: [<FaNetworkWired key="net" className="text-teal-600 text-2xl" />],
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
    icons: [<FaTools key="tools" className="text-gray-600 text-2xl" />],
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
    icons: [<FaReact key="react" className="text-blue-500 text-2xl" />],
    github: "https://github.com/Sandysuryantiko/monitoring-produksi",
    demo: "https://monitoringproduksi.netlify.app/",
  },

  {
    title: "Company Profile Website",
    desc: "Company profile website for legal services.",
    role: "Frontend Developer",
    functions: ["Profile pages", "Service info", "Contact form"],
    images: [monitoring4],
    icons: [<SiHtml5 key="html" className="text-orange-500 text-2xl" />],
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
    images: [monitoring1], // fallback biar tidak error
    icons: [
      <FaNetworkWired key="trouble" className="text-teal-600 text-2xl" />,
    ],
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
  };

  const closeModal = () => setSelectedProject(null);

  const nextImage = () => {
    setCurrentImg((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevImage = () => {
    setCurrentImg(
      (prev) =>
        (prev - 1 + selectedProject.images.length) %
        selectedProject.images.length,
    );
  };

  return (
    <Section id="projects" title="Projects">
      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            onClick={() => openModal(p)}
            className="bg-white rounded-xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-1 cursor-pointer overflow-hidden"
          >
            <img
              src={p.images?.[0]}
              alt={p.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h3 className="font-bold text-gray-800">{p.title}</h3>
              <p className="text-gray-600 text-sm line-clamp-2">{p.desc}</p>

              <div className="flex space-x-2 mt-3">{p.icons}</div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-2 sm:p-4"
          onClick={closeModal}
        >
          <div
            className="
        bg-white rounded-xl w-full 
        max-w-lg sm:max-w-2xl lg:max-w-4xl
        max-h-[90vh] overflow-y-auto
        p-4 sm:p-6 relative shadow-2xl
      "
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-xl hover:text-red-600"
            >
              ✕
            </button>

            {/* IMAGE */}
            <div className="flex items-center justify-between gap-2">
              <button onClick={prevImage} className="text-lg sm:text-2xl px-2">
                ◀
              </button>

              <img
                src={selectedProject.images[currentImg]}
                alt=""
                className="
            max-h-[200px] sm:max-h-[400px] 
            object-contain rounded-lg
          "
              />

              <button onClick={nextImage} className="text-lg sm:text-2xl px-2">
                ▶
              </button>
            </div>

            <p className="text-center text-xs sm:text-sm mt-2">
              {currentImg + 1} / {selectedProject.images.length}
            </p>

            {/* DETAIL */}
            <div className="mt-4">
              <h3 className="text-lg sm:text-2xl font-bold">
                {selectedProject.title}
              </h3>

              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                {selectedProject.desc}
              </p>

              <p className="mt-2 text-sm sm:text-base">
                <b>Role:</b> {selectedProject.role}
              </p>

              <ul className="list-disc ml-5 mt-2 text-gray-700 text-sm">
                {selectedProject.functions?.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>

              <div className="flex space-x-2 mt-3">{selectedProject.icons}</div>

              {/* LINK */}
              <div className="flex space-x-3 mt-5">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 sm:p-3 bg-gray-800 text-white rounded-full"
                  >
                    <FaGithub />
                  </a>
                )}

                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 sm:p-3 bg-blue-600 text-white rounded-full"
                  >
                    <FaGlobe />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

export default Projects;
