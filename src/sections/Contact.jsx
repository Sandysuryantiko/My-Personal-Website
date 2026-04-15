import React from "react";
import Section from "../components/Section";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <Section id="contact" title="Contact">
      <div className="text-center max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <p className="text-gray-600 mb-6">
          I am currently open to opportunities as an IT Support, Network
          Engineer, or Junior IT role. If you are looking for someone who is
          passionate about networking, troubleshooting, and system support, feel
          free to reach out.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* EMAIL */}
          <a
            href="mailto:sandyscoproject@gmail.com"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition"
          >
            <FaEnvelope />
            Email Me
          </a>

          {/* LINKEDIN */}
          <a
            href="https://linkedin.com/in/Sandysuryantiko"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-500 transition"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/Sandysuryantiko"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-black transition"
          >
            <FaGithub />
            GitHub
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
