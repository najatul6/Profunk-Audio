import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-6 md:p-10 md:px-20 rounded-t-[40px]">
      <div className="bg-[#121212] rounded-[40px] p-10 md:p-16 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
          <h1 className="text-[14rem] font-black">PROFUNK AUDIO</h1>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="flex flex-col mb-6 leading-none w-40">
              <img src={logo} alt="Logo" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              With a growing library of over 100,000 free sound effects
              downloads and more than 650 royalty-free music tracks too,
              ZapSplat is one of the largest free SFX libraries online.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="font-semibold mb-6">Quick Link</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <a href="/" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-semibold mb-6">Sound Effects Packs</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Anime Tones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Sci-Fi UI Tones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Dark Cinematic Whooshes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4">
            <h4 className="font-semibold mb-2">Let's talk</h4>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 border-b border-gray-700 pb-2 inline-block">
              info@profunk.team
            </h2>
            <div className="flex justify-between text-sm text-gray-400">
              <p>
                12/4 Azatutyan ave,
                <br />
                Yerevan, Armenia
              </p>
              <p>+374 93 04-67-89</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-16 pt-8 border-t border-gray-800 flex flex-col md:row justify-between items-center gap-4">
          <div className="flex flex-col-reverse md:flex-row items-center space-x-2 justify-between w-full">
            <p className="text-gray-500 text-xs uppercase tracking-widest">
              &#35; Developed by{" "}
              <Link
                to="https://najatul-islam.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline font-bold"
              >
                Najatul Islam
              </Link>
              .
            </p>

            <div className="flex items-center space-x-4">
              <span className="text-sm font-semibold">Quick Link</span>
              <div className="flex space-x-2">
                <a
                  href="#"
                  className="p-2 bg-white text-black rounded-md hover:bg-gray-200 transition"
                >
                  <FaFacebookF size={14} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-white text-black rounded-md hover:bg-gray-200 transition"
                >
                  <FaLinkedinIn size={14} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-white text-black rounded-md hover:bg-gray-200 transition"
                >
                  <FaTwitter size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
