import React, { useState } from "react";
import Section from "../components/Section";
import { FaReact, FaGithub, FaGlobe,  } from "react-icons/fa";
import { SiTailwindcss, SiPhp, SiMysql, SiHtml5, SiJavascript} from "react-icons/si";

// Import gambar lokal
import kas from "../assets/img/kas.png";
import kas1 from "../assets/img/kas1.png";
import tb from "../assets/img/tb.png";
import tb1 from "../assets/img/tb1.png";
import tb2 from "../assets/img/tb2.png";
import price1 from "../assets/img/price1.png";
import price2 from "../assets/img/price2.png";
import price3 from "../assets/img/price3.png";
import login1 from "../assets/img/login1.png";
import login2 from "../assets/img/login2.png";
import login3 from "../assets/img/login3.png";

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
      <FaReact key="react" className="text-indigo-700 text-2xl" />,
      <SiTailwindcss key="tw" className="text-blue-700 text-2xl" />,
    ],
    github: "https://github.com/yourgithub/tb-lawyer",
    demo: "https://tbabdulfatah.netlify.app",
  },
  {
    title: "Pricing Plan ",
    desc: "UI Pricing Plan Interactive for Website cloud services.",
    role: "Frontend Developer",
    functions: [
      "Card Interaktif",
      "UI color pallete",
      "Frame animasi",
    ],
    stack: ["HTML5", "CSS", "Javascript"],
    images:[price1, price2, price3],
    icons: [<SiHtml5 key="rn" className="text-orange-500 text-2xl"/>, 
    <SiTailwindcss key="rn" className="text-blue-500 text-2xl" />, 
    <SiJavascript key="rn" className="text-yellow-500 text-2xl"/>],
    github: "https://github.com/yourgithub/attendance",
    demo: "https://pricinginteractive.netlify.app/",
  },
  {
    title: "Login Page  ",
    desc: "UI Login Page interactive using native language.",
    role: "Frontend Developer",
    functions: [
      "Card Interaktif",
      "UI Responsive",
      "Slider Animation",
    ],
    stack: ["HTML5", "CSS", "Javascript"],
    images:[login1, login2, login3],
    icons: [<SiHtml5 key="rn" className="text-orange-500 text-2xl"/>, 
    <SiTailwindcss key="rn" className="text-blue-500 text-2xl" />, 
    <SiJavascript key="rn" className="text-yellow-500 text-2xl"/>],
    github: "https://github.com/yourgithub/attendance",
    demo: "https://loginpageinteractive.netlify.app/",
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
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-2 sm:p-4 animate-fadeIn"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full relative p-6 shadow-xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()} // ⛔ mencegah modal tertutup saat klik isi
          >
            {/* Close button */}
            <button
              className="absolute top-3 right-3 text-gray-700 hover:text-red-600 text-2xl"
              onClick={closeModal}
            >
              ✕
            </button>

            {/* Image Slider */}
            <div className="flex items-center justify-between">
              <button
                className="text-2xl p-2 text-gray-600 hover:text-black"
                onClick={prevImage}
              >
                ◀
              </button>
              <img
                src={selectedProject.images[currentImg]}
                alt={selectedProject.title}
                className="w-full max-h-[70vh] object-contain rounded transition-transform duration-300"
              />
              <button
                className="text-2xl p-2 text-gray-600 hover:text-black"
                onClick={nextImage}
              >
                ▶
              </button>
            </div>

            {/* Image Counter */}
            <div className="text-center text-sm text-gray-500 mt-2">
              {currentImg + 1} / {selectedProject.images.length}
            </div>

            {/* Detail */}
            <div className="mt-6">
              <h3 className="font-bold text-2xl">{selectedProject.title}</h3>
              <p className="text-gray-600 mt-2">{selectedProject.desc}</p>

              <p className="mt-3">
                <span className="font-semibold">Role:</span>{" "}
                {selectedProject.role}
              </p>

              <div className="mt-3">
                <span className="font-semibold">Features:</span>
                <ul className="list-disc ml-6 mt-1 text-gray-700 text-sm">
                  {selectedProject.functions?.map((f, idx) => (
                    <li key={idx}>{f}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-3 flex items-center space-x-2">
                <span className="font-semibold">Stack:</span>
                <div className="flex space-x-2">{selectedProject.icons}</div>
              </div>

              {/* Links */}
              <div className="flex space-x-3 mt-6">
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
