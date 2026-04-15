import React from "react";
import Section from "../components/Section";

const experiences = [
  {
    role: "Production Operator",
    company: "PT Gajah Tunggal, Tbk.",
    year: "2017 - 2026",
  },
  {
    role: "Production Planing Inventory and Control",
    company: "Wijaya Foam",
    year: "2017",
  },
  {
    role: "IT Support (Internship) ",
    company: "PT Kumatex",
    year: "2016",
  },
  {
    role: "Mechanical Engineer (Prakerin)",
    company: "PT Bintang Surya Sejati Sukses (BSSS)",
    year: "2015",
  },
];

const Experience = () => {
  return (
    <Section id="experience" title="Experience">
      <div className="relative border-l-4 border-gray-300 ml-6">
        {experiences.map((exp, i) => (
          <div key={i} className="mb-8 ml-6">
            {/* Bulatan di garis timeline */}
            <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2.5 border-2 border-white"></div>

            {/* Konten */}
            <h3 className="font-bold text-gray-800">{exp.role}</h3>
            <p className="text-gray-600">{exp.company}</p>
            <p className="text-sm text-gray-500">{exp.year}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
