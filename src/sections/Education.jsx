import React from "react";
import Section from "../components/Section";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

const educationData = [
  {
    title: "Bachelor of Informatics Engineering",
    place: "Institut Teknologi dan Bisnis Bina Sarana Global",
    icon: <FaGraduationCap className="text-blue-600 text-2xl" />,
    description:
      "Focused on software development, system analysis, and basic networking concepts.",
  },
  {
    title: "CCNA Bootcamp",
    place: "Course Net Indonesia",
    icon: <FaCertificate className="text-green-600 text-2xl" />,
    description:
      "Hands-on training covering VLAN, IP Addressing, Subnetting, Routing (OSPF), NAT, DHCP, and network troubleshooting using Cisco Packet Tracer.",
  },
  {
    title: "Self Learning & Practice",
    place: "Independent Study",
    icon: <FaCertificate className="text-gray-600 text-2xl" />,
    description:
      "Practicing network configuration, troubleshooting scenarios, and system installation to strengthen IT Support and Networking skills.",
  },
];

const Education = () => {
  return (
    <Section id="education" title="Education & Certification">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <div className="space-y-6">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div>{item.icon}</div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.place}</p>
                <p className="text-gray-600 mt-1 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Education;
