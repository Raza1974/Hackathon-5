"use client";

import Link from "next/link";






const Header = () => {
 
  return (
    
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
    
                         <li>
              <Link
                href="/product"
                className="hover:underline hover:text-blue-500"
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                href="/priceng"
                className="hover:underline hover:text-blue-500"
              >
                Pricing
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
                <a
              href="./login"
              className="text-blue-500 hover:underline hover:text-black"
            >
              Login
            </a>
            <button className="bg-blue-500 text-white py-3 px-8 text-lg rounded-lg hover:bg-blue-600 transition">Become a member</button>
             </div>
        </div>
      </nav>

  );
};

export default Header;
