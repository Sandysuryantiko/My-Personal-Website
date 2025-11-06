import React, { useState } from "react";
import Section from "../components/Section";
import { FaReact, FaGithub, FaGlobe } from "react-icons/fa";
import firebaseIcon from "../assets/img/firebase-svgrepo-com.svg";
import {
  SiTailwindcss,
  SiPhp,
  SiMysql,
  SiHtml5,
  SiJavascript,
  SiFirebase,
} from "react-icons/si";

// Import gambar lokal
import kas from "../assets/img/kas.png";
import kas1 from "../assets/img/kas1.png";
import tb from "../assets/img/tb.png";
import tb1 from "../assets/img/tb1.png";
import tb2 from "../assets/img/tb2.png";
import price1 from "../assets/img/price1.png";
import price2 from "../assets/img/price2.png";
import price3 from "../assets/img/price3.png";
import monitoring1 from "../assets/img/monitoring1.PNG";
import monitoring2 from "../assets/img/monitoring2.PNG";
import monitoring3 from "../assets/img/monitoring3.PNG";
import monitoring4 from "../assets/img/monitoring4.PNG";
import monitoring5 from "../assets/img/monitoring5.PNG";
import monitoring6 from "../assets/img/monitoring6.PNG";
import monitoring7 from "../assets/img/monitoring7.PNG";

// Data project
const projects = [
  {
    title: "Kas Paguyuban Satelit Air",
    desc: "Web/App manages incoming and outgoing money.",
    role: "Fullstack Developer",
    functions: [
      "CRUD pemasukan & pengeluaran kas",
      "Laporan bulanan otomatis",
      "Role admin & anggota",
    ],
    stack: ["PHP", "TailwindCSS", "MySQL"],
    images: [kas, kas1],
    icons: [
      <SiPhp key="php" className="text-blue-700 text-2xl" />,
      <SiTailwindcss key="tw" className="text-sky-700 text-2xl" />,
      <SiMysql key="mysql" className="text-sky-700 text-2xl" />,
    ],
    github: "https://github.com/yourgithub/kas",
    demo: "https://paguyubansatelit.free.nf",
  },
  {
    title: "TB Abdul Fatah & Rekan",
    desc: "Advokat Website using React.js & TailwindCSS.",
    role: "Frontend Developer",
    functions: [
      "Halaman profil advokat",
      "Layanan konsultasi hukum",
      "Form kontak terintegrasi",
    ],
    stack: ["ReactJS", "TailwindCSS"],
    images: [tb, tb1, tb2],
    icons: [
      <SiHtml5 key="rn" className="text-orange-500 text-2xl" />,
      <SiTailwindcss key="tw" className="text-blue-700 text-2xl" />,
      <SiJavascript key="rn" className="text-yellow-500 text-2xl" />,
    ],
    github: "https://github.com/Sandysuryantiko/Company-Profile-Website",
    demo: "https://tbabdulfatah.netlify.app",
  },
  {
    title: "Pricing Plan ",
    desc: "UI Pricing Plan Interactive for Website cloud services.",
    role: "Frontend Developer",
    functions: ["Card Interaktif", "UI color pallete", "Frame animasi"],
    stack: ["HTML5", "CSS", "Javascript"],
    images: [price1, price2, price3],
    icons: [
      <SiHtml5 key="rn" className="text-orange-500 text-2xl" />,
      <SiTailwindcss key="rn" className="text-blue-500 text-2xl" />,
      <SiJavascript key="rn" className="text-yellow-500 text-2xl" />,
    ],
    github: "https://github.com/Sandysuryantiko/Pricing-plan",
    demo: "https://pricinginteractive.netlify.app/",
  },
  {
    title: "Production Monitoring Website",
    desc: "Production Counter realtime Manufacturing.",
    role: "Fullstack Developer",
    functions: ["Realtime Counter", "UI Chart", "Request Problem Engineering"],
    stack: ["ReactJS", "TailwindCSS", "Firebase"],
    images: [
      monitoring2,
      monitoring1,
      monitoring3,
      monitoring4,
      monitoring5,
      monitoring6,
      monitoring7,
    ],
    icons: [
      <FaReact key="rn" className="text-indigo-500 text-2xl" />,
      <SiTailwindcss key="rn" className="text-blue-500 text-2xl" />,
      <img
        src={firebaseIcon}
        alt="Firebase"
        className="w-6 h-6 inline-block"
      />,
    ],
    github: "https://github.com/Sandysuryantiko/monitoring-produksi",
    demo: "https://monitoringproduksi.netlify.app/",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImg, setCurrentImg] = useState(0);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImg(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImg((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImg(
        (prev) =>
          (prev - 1 + selectedProject.images.length) %
          selectedProject.images.length
      );
    }
  };

  return (
    <Section id="projects" title="Projects">
      {/* Grid Project Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-1 cursor-pointer overflow-hidden"
            onClick={() => openModal(p)}
          >
            <img
              src={p.images[0]}
              alt={p.title}
              className="rounded-t-xl w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-gray-800">{p.title}</h3>
              <p className="text-gray-600 text-sm line-clamp-2">{p.desc}</p>
              <div className="flex space-x-2 mt-3">{p.icons}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-2 sm:p-4 animate-fadeIn overflow-y-auto"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl w-full max-w-3xl sm:max-w-4xl relative p-4 sm:p-6 shadow-2xl animate-scaleIn mx-auto my-8 sm:my-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tombol Close */}
            <button
              className="absolute top-3 right-3 text-gray-700 hover:text-red-600 text-2xl"
              onClick={closeModal}
            >
              ✕
            </button>

            {/* Gambar + Navigasi */}
            <div className="flex items-center justify-between gap-2">
              <button
                className="text-2xl p-2 text-gray-600 hover:text-black"
                onClick={prevImage}
              >
                ◀
              </button>

              <div className="flex-1 flex justify-center items-center">
                <img
                  src={selectedProject.images[currentImg]}
                  alt={selectedProject.title}
                  className="max-w-full max-h-[60vh] sm:max-h-[70vh] object-contain rounded-lg shadow-md border border-gray-200"
                />
              </div>

              <button
                className="text-2xl p-2 text-gray-600 hover:text-black"
                onClick={nextImage}
              >
                ▶
              </button>
            </div>

            {/* Indikator Gambar */}
            <div className="text-center text-sm text-gray-500 mt-3">
              {currentImg + 1} / {selectedProject.images.length}
            </div>

            {/* Detail Project */}
            <div className="mt-5 sm:mt-6">
              <h3 className="font-bold text-xl sm:text-2xl text-gray-800 text-justify sm:text-left">
                {selectedProject.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm sm:text-base text-justify sm:text-left">
                {selectedProject.desc}
              </p>

              <p className="mt-3 text-sm sm:text-base text-justify sm:text-left">
                <span className="font-semibold">Role:</span>{" "}
                {selectedProject.role}
              </p>

              <div className="mt-3">
                <span className="font-semibold text-sm sm:text-base block text-justify sm:text-left">
                  Features:
                </span>
                <ul className="list-disc ml-6 mt-1 text-gray-700 text-sm text-justify">
                  {selectedProject.functions?.map((f, idx) => (
                    <li key={idx}>{f}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-3 flex flex-col sm:flex-row items-justify sm:items-start sm:space-x-2 text-justify sm:text-left">
                <span className="font-semibold text-sm sm:text-base">
                  Stack:
                </span>
                <div className="flex space-x-2 mt-2 sm:mt-0">
                  {selectedProject.icons}
                </div>
              </div>

              {/* Tautan */}
              <div className="flex justify sm:justify-start space-x-3 mt-6">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
                    title="GitHub"
                  >
                    <FaGithub className="text-lg" />
                  </a>
                )}
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition"
                    title="Live Demo"
                  >
                    <FaGlobe className="text-lg" />
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
