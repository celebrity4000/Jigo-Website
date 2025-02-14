"use client";

import React from "react";
import { Menu, X, MapPin, Calculator, Infinity } from "lucide-react";
import HeaderText from "./HeaderText";
import { FaLocationDot } from "react-icons/fa6";
import { BsBrowserEdge } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
const menuItems = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
];

const locations = [
  {
    title: "Kolkata Office",
    timings: "www.jigoindia.com",
    call: "+91 83360 22220",
    address: "32, Ezra Street Room No-518 Calcutta, W.B 700001",
  },

  {
    title: "Email & Phone",
    timings: "1800-120-3456",
    address: "hirawat@jigoindia.com",
  },
];

const ContactUs = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="mx-auto max-w-7xl px-4">
        <HeaderText first={"CONTACT"} sec={"US"} />
        <div className=" max-w-7xl py-12 md:py-24">
          <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2 sm:grid-cols-1 ">
            {/* contact from */}
            <div
              className="flex items-center justify-center"
              style={{
                boxShadow: "10px 10px 30px #9E9E9E",
                padding: 20,
                borderRadius: 12,
                paddingBottom: 40,
                paddingTop: 40,
                justifyContent: "center",
                display: "flex",
              }}
            >
              <div className="px-2 md:px-12">
                <p className="text-2xl font-bold text-gray-900 md:text-4xl">
                  Get in touch
                </p>
                <p className="mt-4 text-lg text-gray-600">
                  Our friendly team would love to hear from you.
                </p>
                <form action="" className="mt-8 space-y-4">
                  <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="first_name"
                      >
                        First Name
                      </label>
                      <input
                        style={{ color: "#555" }}
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900 text-gray-900"
                        type="text"
                        id="first_name"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="last_name"
                      >
                        Last Name
                      </label>
                      <input
                        style={{ color: "#555" }}
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        id="last_name"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      style={{ color: "#555" }}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="text"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="phone_number"
                    >
                      Phone number
                    </label>
                    <input
                      style={{ color: "#555" }}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="tel"
                      id="phone_number"
                      placeholder="Phone number"
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      style={{ color: "#555" }}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      id="message"
                      placeholder="Leave us a message"
                      cols={3}
                    />
                  </div>
                  <button
                    type="button"
                    className="w-full rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    style={{ backgroundColor: "#4B0891" }}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <div
              className="my-8 flex flex-col gap-y-6 md:flex-row lg:justify-around"
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
                style={{
                  border: 0,
                  height: 340,
                  marginTop: 25,
                  borderRadius: 15,
                }}
                aria-hidden="false"
              ></iframe>
              <div className="my-4 flex flex-col gap-y-8 md:flex-row lg:justify-around">
                {locations.map((location) => (
                  <div
                    key={location.title}
                    className="flex flex-col space-y-2 md:w-2/4 lg:w-1/8 "
                  >
                    <Infinity className="h-5 w-5" />
                    <p className="w-full text-xl font-semibold  text-gray-900 pt-2">
                      {location.title}
                    </p>
                    {location.call && (
                      <div className="flex-row flex ">
                        <FaPhoneAlt style={{ marginRight: 5 }} />
                        <p className="text-sm font-medium flex-row">
                          {location.call}
                        </p>
                      </div>
                    )}
                    <div className="flex-row flex items-center ">
                      {location.timings == "1800-120-3456" ? (
                        <FaPhoneAlt style={{ marginRight: 5 }} />
                      ) : (
                        <BsBrowserEdge style={{ marginRight: 5 }} />
                      )}

                      <p className="w-full text-base text-gray-700">
                        {location.timings}
                      </p>
                    </div>
                    <div className="flex-row flex ">
                      <FaLocationDot style={{ marginRight: 5 }} />
                      <p className="text-sm font-medium flex-row">
                        {location.address}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Address */}

      {/* locations */}

      <hr className="mt-6" />
    </div>
  );
};

export default ContactUs;
