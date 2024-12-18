"use client";

import {
  Phone,
  Mail,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import { CiSearch, CiHeart } from "react-icons/ci";
import { RiArrowDropDownLine, RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to handle dropdowns
  const toggleDropdown = (menu: string) => {
    setIsDropdownOpen(isDropdownOpen === menu ? null : menu);
  };

  return (
    <header className="bg-green-700 text-white">
      {/* Top Bar */}
      <div className="container px-6 mx-auto">
        <div className="flex justify-between items-center py-2 text-sm">
          <div className="flex items-center space-x-6">
            <a href="tel:+12255550118" className="flex items-center">
              <Phone size={14} className="mr-2" />
              (225) 555-0118
            </a>
            <a
              href="mailto:michelle.rivera@example.com"
              className="flex items-center"
            >
              <Mail size={14} className="mr-2" />
              michelle.rivera@example.com
            </a>
          </div>
          <p className="hidden md:block">
            Follow Us and get a chance to win 80% off
          </p>
          <div className="flex items-center space-x-3">
            <span>Follow Us:</span>
            <a href="#"><Instagram size={16} /></a>
            <a href="#"><Youtube size={16} /></a>
            <a href="#"><Facebook size={16} /></a>
            <a href="#"><Twitter size={16} /></a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white text-black shadow-md">
        <div className="flex justify-between items-center px-6 py-4 md:px-20">
          {/* Logo */}
          <h1 className="text-2xl font-bold">Bandage</h1>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>

          {/* Navigation Links */}
          <nav
            className={`${
              isMobileMenuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row absolute md:static top-full left-0 right-0 bg-white md:bg-transparent z-10 md:z-auto p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-6`}
          >
            {/* Home */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("home")}
                className="flex items-center hover:text-green-700"
              >
                Home
                <RiArrowDropDownLine size={20} />
              </button>
              {isDropdownOpen === "home" && (
                <div className="absolute bg-white text-black shadow-lg rounded-md mt-2 w-40">
                  <a href="/home-1" className="block px-4 py-2 hover:bg-gray-100">
                    Home 1
                  </a>
                  <a href="/home-2" className="block px-4 py-2 hover:bg-gray-100">
                    Home 2
                  </a>
                </div>
              )}
            </div>

            {/* Shop */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("shop")}
                className="flex items-center hover:text-green-700"
              >
                Shop
                <RiArrowDropDownLine size={20} />
              </button>
              {isDropdownOpen === "shop" && (
                <div className="absolute bg-white text-black shadow-lg rounded-md mt-2 w-40">
                  <a href="/shop" className="block px-4 py-2 hover:bg-gray-100">
                    Shop
                  </a>
                  <a href="/shop-1" className="block px-4 py-2 hover:bg-gray-100">
                    Shop 1
                  </a>
                  <a href="/shop-2" className="block px-4 py-2 hover:bg-gray-100">
                    Shop 2
                  </a>
                </div>
              )}
            </div>

            {/* Other Links */}
            <a href="/about" className="hover:text-green-700">
              About
            </a>
            <a href="/blog" className="hover:text-green-700">
              Blog
            </a>
            <a href="/contact" className="hover:text-green-700">
              Contact
            </a>
            <a href="/pages" className="hover:text-green-700">
              Pages
            </a>
          </nav>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Image src="/icn contact.jpg" alt="hero" width={16} height={16} />
            <a href="./login" className="hover:text-green-700">
              Login
            </a>
            <span>/</span>
            <a href="./register" className="hover:text-green-700">
              Register
            </a>
            <CiSearch className="cursor-pointer hover:text-green-700" />
            <CiHeart className="cursor-pointer hover:text-green-700" />
            <IoCartOutline className="cursor-pointer hover:text-green-700" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
