import React from "react";
import Section from "../components/Section";
import { FaNetworkWired, FaTools, FaPhp, FaPython } from "react-icons/fa";

import {
  SiMysql,
  SiTailwindcss,
  SiGit,
  SiWireshark,
  SiCisco,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Networking",
    skills: [
      {
        name: "Subnetting",
        icon: <FaNetworkWired className="text-teal-600 text-3xl" />,
      },
      {
        name: "VLAN",
        icon: <FaNetworkWired className="text-teal-600 text-3xl" />,
      },
      {
        name: "Routing",
        icon: <FaNetworkWired className="text-teal-600 text-3xl" />,
      },
      {
        name: "NAT",
        icon: <FaNetworkWired className="text-teal-600 text-3xl" />,
      },
      {
        name: "ACL",
        icon: <FaNetworkWired className="text-teal-600 text-3xl" />,
      },
      {
        name: "Security",
        icon: <FaNetworkWired className="text-teal-600 text-3xl" />,
      },
    ],
  },
  {
    title: "IT Support",
    skills: [
      {
        name: "Troubleshooting",
        icon: <FaTools className="text-gray-600 text-3xl" />,
      },
      {
        name: "Windows Installation",
        icon: <FaTools className="text-gray-600 text-3xl" />,
      },
      {
        name: "Hardware Support",
        icon: <FaTools className="text-gray-600 text-3xl" />,
      },
      {
        name: "Basic Linux",
        icon: <FaTools className="text-gray-600 text-3xl" />,
      },
    ],
  },
  {
    title: "Tools",
    skills: [
      {
        name: "Cisco Packet Tracer",
        icon: <SiCisco className="text-blue-600 text-3xl" />,
      },
      {
        name: "Wireshark",
        icon: <SiWireshark className="text-blue-500 text-3xl" />,
      },
      { name: "PuTTY", icon: <FaTools className="text-gray-600 text-3xl" /> },
      { name: "Git", icon: <SiGit className="text-red-600 text-3xl" /> },
    ],
  },
  {
    title: "Programming",
    skills: [
      { name: "PHP", icon: <FaPhp className="text-indigo-600 text-3xl" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-700 text-3xl" /> },
      {
        name: "TailwindCSS",
        icon: <SiTailwindcss className="text-indigo-600 text-3xl" />,
      },
      {
        name: "Python",
        icon: <FaPython className="text-yellow blue-700 text-3xl" />,
      },
    ],
  },
];

const Skills = () => {
  return (
    <Section id="skills" title="Skills">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8">
        {/* Subheading */}
        <p className="text-center text-gray-600 mb-8">
          Focused on Networking, IT Support, and System Troubleshooting
        </p>

        {skillCategories.map((category, index) => (
          <div key={index} className="mb-8">
            {/* Category Title */}
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              {category.title}
            </h3>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
              {category.skills.map((skill, i) => (
                <div
                  key={i}
                  className="p-5 bg-gray-50 rounded-xl shadow text-center text-gray-700 
                  hover:shadow-lg hover:scale-105 transform transition duration-300 flex flex-col items-center"
                >
                  {skill.icon}
                  <span className="mt-2 text-sm">{skill.name}</span>
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
