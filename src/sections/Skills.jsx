import React from "react";
import Section from "../components/Section";
import {
  FaNetworkWired,
  FaTools,
  FaServer,
  FaPrint,
  FaShieldAlt,
  FaLock,
  FaDatabase,
  FaPhp,
  FaPython,
} from "react-icons/fa";

import {
  SiMysql,
  SiTailwindcss,
  SiGit,
  SiWireshark,
  SiCisco,
  SiSynology,
} from "react-icons/si";

const skillCategories = [
  {
    title: "System & Server Administration",
    skills: [
      {
        name: "Active Directory",
        icon: <FaServer className="text-blue-600 text-3xl" />,
      },
      {
        name: "Synology NAS",
        icon: <SiSynology className="text-gray-700 text-3xl" />,
      },
      {
        name: "Print Server Setup",
        icon: <FaPrint className="text-emerald-600 text-3xl" />,
      },
      {
        name: "ERP Server Backup",
        icon: <FaDatabase className="text-amber-600 text-3xl" />,
      },
    ],
  },
  {
    title: "Networking & Security",
    skills: [
      {
        name: "Kerio Control",
        icon: <FaShieldAlt className="text-red-600 text-3xl" />,
      },
      {
        name: "VPN Management",
        icon: <FaLock className="text-indigo-600 text-3xl" />,
      },
      {
        name: "VLAN & Subnetting",
        icon: <FaNetworkWired className="text-teal-600 text-3xl" />,
      },
      {
        name: "Routing & ACL",
        icon: <FaNetworkWired className="text-teal-600 text-3xl" />,
      },
    ],
  },
  {
    title: "IT Support & Operations",
    skills: [
      {
        name: "Hardware/Software Support",
        icon: <FaTools className="text-gray-600 text-3xl" />,
      },
      {
        name: "Windows & Linux OS",
        icon: <FaTools className="text-gray-600 text-3xl" />,
      },
      {
        name: "System Troubleshooting",
        icon: <FaTools className="text-gray-600 text-3xl" />,
      },
    ],
  },
  {
    title: "Tools & Development",
    skills: [
      {
        name: "Cisco Packet Tracer",
        icon: <SiCisco className="text-blue-600 text-3xl" />,
      },
      {
        name: "Wireshark",
        icon: <SiWireshark className="text-blue-500 text-3xl" />,
      },
      { name: "Git", icon: <SiGit className="text-red-600 text-3xl" /> },
      { name: "PHP", icon: <FaPhp className="text-indigo-600 text-3xl" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-700 text-3xl" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-sky-500 text-3xl" />,
      },
      {
        name: "Python",
        icon: <FaPython className="text-yellow-600 text-3xl" />,
      },
      {
        name: "SQL Management",
        icon: <FaDatabase className="text-amber-600 text-3xl" />,
      },
    ],
  },
];

const Skills = () => {
  return (
    <Section id="skills" title="Skills">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">
        {/* Subheading */}
        <p className="text-center text-gray-600 mb-8 font-medium">
          Focused on Systems Administration, Network Infrastructure, and
          Enterprise IT Operations
        </p>

        {skillCategories.map((category, index) => (
          <div key={index} className="mb-8 last:mb-0">
            {/* Category Title */}
            <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">
              {category.title}
            </h3>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
              {category.skills.map((skill, i) => (
                <div
                  key={i}
                  className="p-5 bg-gray-50 rounded-xl shadow-sm text-center text-gray-700 
                  hover:shadow-md hover:scale-105 transform transition duration-300 flex flex-col items-center justify-center gap-2"
                >
                  {skill.icon}
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
