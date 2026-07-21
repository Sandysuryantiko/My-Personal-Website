import React from "react";
import Section from "../components/Section";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-2xl mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-lg border border-gray-100 text-center">
        {/* Header/Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
          Let's Work Together!
        </h3>

        {/* Intro Paragraph */}
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 max-w-lg mx-auto">
          I am currently open to opportunities as an{" "}
          <span className="font-semibold text-gray-800">IT Support</span>,{" "}
          <span className="font-semibold text-gray-800">Network Engineer</span>,
          or{" "}
          <span className="font-semibold text-gray-800">
            System Administrator
          </span>
          . Feel free to connect with me through any of the platforms below!
        </p>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* EMAIL */}
          <a
            href="mailto:sandyscoproject@gmail.com"
            className="flex items-center justify-center gap-2 px-5 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs sm:text-sm font-semibold shadow-sm hover:shadow-md transition-all active:scale-95"
          >
            <FaEnvelope className="text-base" />
            <span>Email Me</span>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://linkedin.com/in/Sandysuryantiko"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs sm:text-sm font-semibold shadow-sm hover:shadow-md transition-all active:scale-95"
          >
            <FaLinkedin className="text-base" />
            <span>LinkedIn</span>
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/Sandysuryantiko"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-3 bg-gray-900 hover:bg-black text-white rounded-xl text-xs sm:text-sm font-semibold shadow-sm hover:shadow-md transition-all active:scale-95"
          >
            <FaGithub className="text-base" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
