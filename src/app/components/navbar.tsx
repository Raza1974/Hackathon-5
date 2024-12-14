"use client";

import React, { useState } from "react";
import { CiSearch, CiHeart } from "react-icons/ci";
import { RiArrowDropDownLine, RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { FaInstagram, FaYoutube, FaFacebookF, FaTwitter } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import Image from "next/image";
import { Button } from "./ui/button";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b w-full fixed top-0 left-0 z-50">
      {/* Announcement Bar */}
      <div className="bg-black text-white py-2 text-sm flex flex-col md:flex-row justify-between items-center px-4 md:px-10">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <FiPhone className="text-lg" />
            <span>(225) 555-0118</span>
          </div>
          <div className="flex items-center space-x-2">
            <Image src="/mail.jpg" alt="hero" width={16} height={16} />
            <span>michelle.rivera@example.com</span>
          </div>
        </div>
        <div className="text-center flex-1 hidden md:block">
          Follow Us and get a chance to win 80% off
        </div>
        <div className="flex items-center space-x-4 mt-2 md:mt-0">
          Follow Us:
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Visit Instagram">
            <FaInstagram className="text-lg hover:text-gray-300 cursor-pointer" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" title="Visit YouTube">
            <FaYoutube className="text-lg hover:text-gray-300 cursor-pointer" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Visit Facebook">
            <FaFacebookF className="text-lg hover:text-gray-300 cursor-pointer" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Visit Twitter">
            <FaTwitter className="text-lg hover:text-gray-300 cursor-pointer" />
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex justify-between items-center px-4 md:px-10 py-4 ">
        <h1 className="text-2xl font-bold text-black">Bandage</h1>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-black text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          title="Toggle Menu"
        >
          {isMobileMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMobileMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 items-center absolute md:static bg-white left-0 right-0 top-full md:top-auto md:bg-transparent p-4 md:p-0`}
        >
          <a href="./" className="text-slate-600 hover:text-black hover:underline">
            Home
          </a>

          {/* Shop Dropdown */}
          <div className="relative">
            <Button
              className="flex items-center text-slate-600 hover:text-black"
              onClick={() => setIsShopDropdownOpen(!isShopDropdownOpen)}
            >
              Shop
              <RiArrowDropDownLine className="ml-2 text-slate-600 text-lg" />
            </Button>
            {isShopDropdownOpen && (
              <div className="absolute top-full mt-1 bg-white shadow-md rounded-md">
                <a
                  href="/shop" // Link to Shop page
                  className="block px-4 py-2 text-slate-600 hover:bg-slate-100 hover:text-black"
                >
                  Shop
                </a>
                <a
                  href="/Shop1" // Link to Shop1 page
                  className="block px-4 py-2 text-slate-600 hover:bg-slate-100 hover:text-black"
                >
                  Shop1
                </a>
                <a
                  href="/Shop2" // Link to Shop2 page
                  className="block px-4 py-2 text-slate-600 hover:bg-slate-100 hover:text-black"
                >
                  Shop2
                </a>
              </div>
            )}
          </div>

          <a href="/about" className="text-slate-600 hover:text-black hover:underline">
            About
          </a>
          <a href="/blog" className="text-slate-600 hover:text-black hover:underline">
            Blog
          </a>
          <a href="/contact" className="text-slate-600 hover:text-black hover:underline">
            Contact
          </a> 
          <a href="/pages/shop-page" className="text-slate-600 hover:text-black hover:underline">
             Pages
          </a> 
         
        </nav>

        {/* Search and Icons */}
        <div className="hidden md:flex items-center space-x-2">
          <Image src="/icn contact.jpg" alt="hero" width={16} height={16} />
          <a href="./login" className="text-blue-300 hover:text-black hover:underline">
            Login
          </a>
          <span>/</span>
          <a href="./register" className="text-blue-300 hover:text-black hover:underline">
            Register
          </a>
          <CiSearch className="text-blue-300 text-xl cursor-pointer hover:text-black" />
          <CiHeart className="text-xl text-blue-300 hover:text-black cursor-pointer" />
          <IoCartOutline className="text-xl text-blue-300 hover:text-black cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
