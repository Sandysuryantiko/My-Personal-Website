import React from "react";
import Section from "../components/Section";

const Contact = () => {
  return (
    <Section id="contact" title="Hire Me">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-gray-600 mb-6">
          I’m open for freelance projects or full-time opportunities. 
          If you have a project in mind, need help with development, 
          or just want to say hello, feel free to reach out.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:youremail@example.com"
            className="px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition"
          >
            Contact Me
          </a>
          <a
            href="https://www.upwork.com/freelancers/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-500 transition"
          >
            Hire Me on Upwork
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
