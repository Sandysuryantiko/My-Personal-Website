import React from "react";
import Section from "../components/Section";
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPhp,
  FaNetworkWired,
  FaTools,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiLaravel, SiNetlify, SiGithub, SiMikrotik, SiGit, SiNginx, SiVuedotjs, SiNextdotjs } from "react-icons/si";
import { FaFlutter } from "react-icons/fa6";

const skills = [
  { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-3xl" /> },
  { name: "React.js", icon: <FaReact className="text-blue-500 text-3xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-3xl" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-500 text-3xl" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-700 text-3xl" /> },
  { name: "Netlify", icon: <SiNetlify className="text-teal-400 text-3xl" /> },

  // tambahan baru
  { name: "PHP", icon: <FaPhp className="text-indigo-600 text-3xl" /> },
  { name: "Laravel", icon: <SiLaravel className="text-red-600 text-3xl" /> },
  { name: "Networking", icon: <FaNetworkWired className="text-teal-600 text-3xl" /> },
  { name: "GitHub", icon: <SiGithub className="text-gray-700 text-3xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black-700 text-3xl" /> },
  { name: "Git", icon: <SiGit className="text-red-700 text-3xl" /> },
  { name: "Nginx", icon: <SiNginx className="text-green-700 text-3xl" /> },
  { name: "Vue.js", icon: <SiVuedotjs className="text-green-700 text-3xl" /> },
];

const Skills = () => {
  return (
    <Section id="skills" title="Skills">
      {/* wrapper card biar sama dengan Hero */}
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="p-6 bg-gray-50 rounded-xl shadow text-center font-regular text-gray-700 
                        hover:shadow-lg hover:scale-105 transform transition duration-300 flex flex-col items-center"
            >
              {skill.icon}
              <span className="mt-2">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
