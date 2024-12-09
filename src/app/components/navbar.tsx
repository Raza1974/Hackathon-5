import React from "react";
import { CiSearch, CiHeart } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { FaInstagram, FaYoutube, FaFacebookF, FaTwitter,} from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import Image from "next/image";
export default function Navbar() {
  return (
    <header className="bg-white shadow-sm border-b mx-auto flex-col center w-full">
      {/* Announcement Bar */}
      <div className="bg-black text-white py-2 text-sm flex justify-between items-center px-10 w-full">
        <div className="flex items-center space-x-6">
          {/* Phone Info */}
          <div className="flex items-center space-x-2">
            
            <FiPhone  className="text-lg"/>
            <span>(225) 555-0118</span>
          </div>
          {/* Email Info */}
          <div className="flex items-center space-x-2">
          <Image
            src={"/icn mail.png"}
            alt="hero"
            width={16}
            height={16}
            p-x-1
            y-136 
            // Adjusted height for better aspect ratio
          />
            <span>michelle.rivera@example.com</span>
          </div>
        </div>
        {/* Announcement Text */}
        <div className="text-center flex-1">
          Follow Us and get a chance to win 80% off
        </div>
        {/* Social Media Icons */}
        
        <div className="flex items-center space-x-6 text-white">
          Follow Us : <br></br>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
            <FaInstagram className="text-lg hover:text-gray-300 cursor-pointer" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" title="YouTube">
            <FaYoutube className="text-lg hover:text-gray-300 cursor-pointer" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
            <FaFacebookF className="text-lg hover:text-gray-300 cursor-pointer" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
            <FaTwitter className="text-lg hover:text-gray-300 cursor-pointer" />
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex justify-between items-center w-1440 h-78px px-2 py-68 mx-auto">
        <h1 className="text-2xl font-bold text-black">Bandage</h1>
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="./" className="text-slate-600 hover:text-black hover:underline">
            Home
          </a>
          {/* Shop Dropdown */}
          <div className="relative group">
            <div className="flex items-center cursor-pointer">
              <span className="text-slate-600 hover:text-black">Shop</span>
              <RiArrowDropDownLine className="text-slate-600 text-lg" />
            </div>
            <div className="absolute top-full mt-1 bg-white shadow-md rounded-md hidden group-hover:flex flex-col">
              <a
                href="./Shop1"
                className="px-4 py-2 text-slate-600 hover:bg-slate-100 hover:text-black"
              >
                Shop1
              </a>
              <a
                href="./Shop2"
                className="px-4 py-2 text-slate-600 hover:bg-slate-100 hover:text-black"
              >
                Shop2
              </a>
            </div>
          </div>
          <a href="./About" className="text-slate-600 hover:text-black hover:underline">
            About
          </a>
          <a href="./Blog" className="text-slate-600 hover:text-black hover:underline">
            Blog
          </a>
          <a href="./Contact" className="text-slate-600 hover:text-black hover:underline">
            Contact
          </a>
          <a href="./Pages" className="text-slate-600 hover:text-black hover:underline">
            Pages
          </a>
        </nav>

        {/* Search and Icons */}
        
        <div className="flex items-center space-x-3">
        <a href="./Contact" className="text-blue-300 hover:text-black hover:underline">
            Login
          </a>
          <a href="./Pages" className="text-blue-300 hover:text-black hover:underline">
            Register
          </a> 
        <Image className="text-blue-300 hover:text-black hover:underline"
            src={"/contact.png"}
            alt="hero"
            width={16}
            height={16}
            p-x-1
            y-136 
            // Adjusted height for better aspect ratio
          />
          <CiSearch className="text-blue-300 text-xl cursor-pointer hover:text-black hover:underline" />
          <CiHeart className="text-xl text-blue-300 hover:text-black cursor-pointer" />
          <IoCartOutline className="text-xl text-blue-300 hover:text-black cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

