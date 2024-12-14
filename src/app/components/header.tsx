"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  Instagram,
  Youtube,
  Facebook,
  Twitter
} from "lucide-react";
import Image from "next/image";
import { CiSearch, CiHeart } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";

import { Button } from "./ui/button";

const Header = () => {
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);

  return (
    <header className="bg-green-700 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2 text-sm">
          <div className="flex items-center space-x-4">
            <a href="tel:+12255550118" className="flex items-center">
              <Phone size={16} className="mr-2" />
              (225) 555-0118
            </a>
            <a
              href="mailto:michelle.rivera@example.com"
              className="flex items-center"
            >
              <Mail size={16} className="mr-2" />
              michelle.rivera@example.com
            </a>
          </div>
          <div>
            <p>Follow Us and get a chance to win 80% off</p>
          </div>
          <div className="flex items-center space-x-5">
            <span>Follow Us :</span>
            <div className="flex space-x-1">
              <a href="#" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Youtube">
                <Youtube size={18} />
              </a>
              <a href="#" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav className="bg-white text-black py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-semibold">
            Bandage
          </Link>

          {/* Navigation Links */}
          <ul className="flex space-x-6 text-base font-medium">
            <li>
              <Link href="/" className="hover:underline hover:text-blue-500">
                Home
              </Link>
            </li>
            <li className="relative">
              <Button
                className="flex items-center text-slate-600 hover:text-blue-500"
                onClick={() => setIsShopDropdownOpen(!isShopDropdownOpen)}
              >
                Shop
                <RiArrowDropDownLine className="ml-2 text-slate-600 text-xl" />
              </Button>
              {isShopDropdownOpen && (
                <div className="absolute top-full mt-1 bg-white shadow-md rounded-md">
                  <a
                    href="/shop"
                    className="block px-4 py-2 text-slate-600 hover:bg-slate-100 hover:text-blue-500"
                  >
                    Shop
                  </a>
                  <a
                    href="/Shop1"
                    className="block px-4 py-2 text-slate-600 hover:bg-slate-100 hover:text-blue-500"
                  >
                    Shop1
                  </a>
                  <a
                    href="/Shop2"
                    className="block px-4 py-2 text-slate-600 hover:bg-slate-100 hover:text-blue-500"
                  >
                    Shop2
                  </a>
                </div>
              )}
            </li>
            <li>
              <Link
                href="/about"
                className="hover:underline hover:text-blue-500"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:underline hover:text-blue-500"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:underline hover:text-blue-500"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/pages"
                className="hover:underline hover:text-blue-500"
              >
                Pages
              </Link>
            </li>
          </ul>

          {/* Icons and Links */}
          <div className="hidden md:flex items-center space-x-3 text-sm">
            <Image src="/icn contact.jpg" alt="hero" width={16} height={16} />
            <a
              href="./login"
              className="text-blue-500 hover:underline hover:text-black"
            >
              Login
            </a>
            <span className="text-gray-400">/</span>
            <a
              href="./register"
              className="text-blue-500 hover:underline hover:text-black"
            >
              Register
            </a>
            <CiSearch className="text-blue-300 text-xl cursor-pointer hover:text-black" />
            <CiHeart className="text-xl text-blue-300 hover:text-black cursor-pointer" />
            <IoCartOutline className="text-xl text-blue-300 hover:text-black cursor-pointer" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
