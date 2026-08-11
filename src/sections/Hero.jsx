import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import me from "../assets/img/me.png";

const Hero = () => {
  return (
    <section id="about" className="flex justify-center px-4 py-12">
      <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 max-w-5xl w-full flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Foto + Sosmed */}
        <div className="flex flex-col items-center order-1 md:order-2">
          {/* Foto dengan efek zoom */}
          <div className="w-48 h-48 md:w-68 md:h-68 rounded-full overflow-hidden shadow">
            <img
              src={me}
              alt="Sandy Suryantiko"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-pointer"
            />
          </div>

          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/Sandysuryantiko"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl hover:text-gray-700 transition" />
            </a>
            <a
              href="https://linkedin.com/in/Sandysuryantiko"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl hover:text-blue-600 transition" />
            </a>
            <a
              href="https://instagram.com/saniscooo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-2xl hover:text-pink-500 transition" />
            </a>
          </div>
        </div>

        {/* Text + Button */}
        <div className="flex-1 text-center md:text-left order-2 md:order-1">
          {/* Nama Utama */}
          <h1 className="text-4xl md:text-4xl font-bold uppercase tracking-wide text-gray-800 text-center md:text-left mb-3">
            SANDY SURYANTIKO
          </h1>

          {/* Subjudul */}
          <h2 className="text-lg md:text-xl tracking-wide font-semibold text-gray-700 mb-5">
            <b>IT Support | Network Infrastructure</b>
          </h2>

          {/* Deskripsi */}
          <p className="text-gray-600 mb-6 leading-relaxed text-justify">
            I am a Bachelor of Informatics Engineering graduate specializing in
            IT Support, Network Infrastructure, and System Administration.
            Hands-on experience in managing enterprise IT operations, including
            Active Directory user and permission management, network firewall
            configuration using Kerio Control, and secure site-to-site/remote
            VPN access.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed text-justify">
            Proficient in configuring Print Servers, implementing reliable ERP
            server backups, and managing network-attached storage via Synology
            NAS. Skilled in network infrastructure management (VLAN, Subnetting,
            Routing) along with end-user hardware, software, and system
            troubleshooting to ensure maximum uptime and operational efficiency.
          </p>

          {/* Tombol */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="mailto:sandyscoproject@gmail.com"
              className="px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition text-center"
            >
              Contact
            </a>
            <a
              href="#projects"
              className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-500 transition text-center"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
