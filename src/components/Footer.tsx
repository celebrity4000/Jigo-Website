import React from "react";

const Footer = () => {
  return (
    <footer
      className="text-white body-font"
      style={{ backgroundColor: "#4B0891" }}
    >
      <div className="container lg:px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img src="https://jigoindia.com/wp-content/themes/jigomain/images/jigo-logo.png" />
          </a>
          <p className="mt-2 text-sm text-gray-500">
            Air plant banjo lyft occupy retro adaptogen indego
          </p>
        </div>
        <div className="flex md:pl-20 items-center -mb-10 md:mt-0 mt-10 md:text-left">
          <div className="lg:w-1/3 sm:w-1/2 w-full px-4">
            <div className="list-none mb-10  flex flex-col items-start">
              <h2 className="title-font font-bold font-mono text-white-900 tracking-widest mb-3 lg:text-lg ">
                Products
              </h2>
              <li className="">
                <a className="text-white hover:text-xl cursor-pointer">
                  Automation
                </a>
              </li>

              <li>
                <a className="text-white hover:text-xl cursor-pointer">Panel</a>
              </li>

              <li>
                <a className="text-white hover:text-xl cursor-pointer">Fan</a>
              </li>

              <li>
                <a className="text-white hover:text-xl cursor-pointer">Cable</a>
              </li>
            </div>
          </div>

          <div className="lg:w-1/3 w-full px-4">
            <h2 className="title-font font-bold font-mono text-white-900 tracking-widest mb-3 lg:text-lg">
              Social Media
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-white hover:text-xl cursor-pointer">
                  Facebook
                </a>
              </li>
              <li>
                <a className="text-white hover:text-xl cursor-pointer">
                  Linkedin
                </a>
              </li>
              <li>
                <a className="text-white hover:text-xl cursor-pointer">
                  Twitter
                </a>
              </li>
              <li>
                <a className="text-white hover:text-xl cursor-pointer">
                  Instagram
                </a>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/3 px-4 hidden lg:block">
            <h2 className="title-font font-bold font-mono text-white-900 tracking-widest mb-3 text-lg">
              Contact Us
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-white hover:text-gray-800">
                  32, Ezra Street Room No-518 Calcutta, W.B 700001
                </a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">
                  +91 83360 22220
                </a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">
                  www.jigoindia.com
                </a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">
                  hirawat@jigoindia.com
                </a>
              </li>
            </nav>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-5 w-full px-4 lg:hidden">
          <h2 className="title-font font-bold font-mono text-white-900 tracking-widest mb-3 text-lg">
            Contact Us
          </h2>
          <nav className="list-none mb-10 text-center">
            <li>
              <a className="text-white hover:text-gray-800">
                32, Ezra Street Room No-518 Calcutta, W.B 700001
              </a>
            </li>
            <li>
              <a className="text-white hover:text-gray-800">+91 83360 22220</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-800">
                www.jigoindia.com
              </a>
            </li>
            <li>
              <a className="text-white hover:text-gray-800">
                hirawat@jigoindia.com
              </a>
            </li>
          </nav>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            Privacy Policy - Terms & conditions ©jigoindia.com
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
