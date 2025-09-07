import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2c2c2c] text-gray-300 text-sm mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 space-y-8">

        

        {/* Logo Section */}
        <div className="flex items-center justify-center">
          <h2 className="text-white text-xl font-bold">
            book<span className="text-pink-500">My</span>Movie
          </h2>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 text-gray-400">
          <FaFacebookF className="hover:text-white cursor-pointer" />
          <FaTwitter className="hover:text-white cursor-pointer" />
          <FaInstagram className="hover:text-white cursor-pointer" />
          <FaYoutube className="hover:text-white cursor-pointer" />
          <FaPinterest className="hover:text-white cursor-pointer" />
          <FaLinkedin className="hover:text-white cursor-pointer" />
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-500 border-t border-gray-700 pt-4">
          Copyright 2025 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.  
          The content and images on this site are copyright protected. Unauthorized use is punishable by law.
        </div>
      </div>
    </footer>
  );
}
