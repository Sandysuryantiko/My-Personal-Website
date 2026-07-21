import React from "react";
import Section from "../components/Section";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

const educationData = [
  {
    title: "Bachelor of Informatics Engineering",
    place: "Institut Teknologi dan Bisnis Bina Sarana Global",
    year: "Graduated",
    icon: <FaGraduationCap className="text-blue-600 text-2xl" />,
    description:
      "Specialized in software development, computer networks, system administration, and database management.",
  },
  {
    title: "CCNA Bootcamp",
    place: "Course-Net Indonesia",
    year: "Certified / Completed",
    icon: <FaCertificate className="text-emerald-600 text-2xl" />,
    description:
      "Hands-on intensive training covering VLAN configuration, IP Addressing, Subnetting (VLSM), Routing Protocols (OSPF), NAT, ACL, DHCP, and enterprise network troubleshooting using Cisco Packet Tracer.",
  },
  {
    title: "System & Network Administration Practice",
    place: "Independent Study & Hands-on Lab",
    year: "Continuous",
    icon: <FaCertificate className="text-gray-600 text-2xl" />,
    description:
      "Practicing real-world enterprise IT deployment including Active Directory management, firewall setup (Kerio Control), VPN implementation, NAS configuration, and server backup strategies.",
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
              className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="mt-1">{item.icon}</div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="font-semibold text-lg text-gray-800">
                    {item.title}
                  </h3>
                  <span className="text-xs font-medium bg-gray-200 text-gray-700 px-2.5 py-1 rounded-full w-fit">
                    {item.year}
                  </span>
                </div>
                <p className="text-sm font-medium text-gray-500 mt-0.5">
                  {item.place}
                </p>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Education;
