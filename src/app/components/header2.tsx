"use client";

import Link from "next/link";

const Header2 = () => {
 
  return (
    
    <nav className="header2 ">
    <div className="max-w-[1320px] mr-20 flex items-center justify-between">
      <div className=" ml-16 font-montserrat font-bold text-[24px] sm:text-[24px]  text-gray-900">Bandage</div>
          {/* Logo */}
         

          {/* Navigation Links */}
          <ul className="flex space-x-6 text-base font-medium">
            <li>
              <Link href="/" className="hover:underline hover:text-blue-500">
                Home
              </Link>
            </li>
    
                         <li>
              <Link
                href="/DesktopProduct"
                className="hover:underline hover:text-blue-500"
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
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
           
          </ul>

          {/* Icons and Links */}
        
             <div className="hidden md:flex items-center gap-4">
            <a
              href="#"
              className="text-sm font-medium text-blue-500 hover:underline"
            >
              Login
            </a>
            <button className="px-5 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg shadow-md hover:bg-blue-600 transition">
              Become a member →
            </button>
          </div>
        </div>
      </nav>

  );
};

export default Header2;
