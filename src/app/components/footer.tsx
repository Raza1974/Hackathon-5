import React from "react";
import "font-awesome/css/font-awesome.min.css"; // Ensure this import is here

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 dark:bg-gray-900 dark:text-gray-200">
      <div className="container mx-auto px-6 py-10">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-start space-y-6 md:space-y-0">
          {/* Logo and Social Icons */}
          <div>
            
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Bandage</h2>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-blue-500 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                title="Facebook"
              >
                <i className="fa fa-facebook"></i>
              </a>

              <a
                href="#"
                className="text-blue-400 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                title="Twitter"
              >
                <i className="fa fa-twitter"></i>
              </a>

              <a
                href="#"
                className="text-pink-500 hover:text-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-300"
                title="Instagram"
              >
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap space-x-16">
            {/* Column 1 */}
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100">Company Info</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    We are hiring
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            {/* Column 2 */}
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            {/* Column 3 */}
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100">Features</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    Business Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    User Analytics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    Live Chat
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    Unlimited Support
                  </a>
                </li>
              </ul>
            </div>
            {/* Column 4 */}
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    iOS & Android
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    Watch a Demo
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    Customers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    API
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-100">Get In Touch</h3>
            <form className="mt-4">
              <div className="flex flex-col md:flex-row">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-2 w-full md:w-auto border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-blue-300"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 mt-2 md:mt-0 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  Subscribe
                </button>
              </div>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t pt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          Made with ❤️ by Finland. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
