import React from "react";
import { Link } from "react-router-dom";
import product from '../assets/latest-product.jpg'

const Aboutus = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <section className="text-gray-600 body-font" style={{ width: "95%" }}>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Us
              <span className="hidden lg:inline-block"> </span>
            </h1>
            <p className="mb-10 leading-relaxed" style={{ textAlign: "left" }}>
              Since 1987, Hirawat Electricals has been a privately held entity
              beginning as a trading company of fuses to the commercial and
              industrial marketplace.Soon, the customer base expanded and
              product portfolio included relays, contactors and the entire range
              of switchgear and allied products.During the early 2000’s, the
              company started importing Cable Glands, Cable Ties, Panel
              Accessories to supply an increasing base of industrial and OEM
              customers.By late 2000’s, Hirawat Electricals was the largest
              importer and distributor of Electricals Products and our brand
              JiGO® has become a force to reckon with.
            </p>
            <div className="flex justify-center">
              <Link to={"/about"}>
                <button
                  className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg hover:scale-105"
                  style={{ backgroundColor: "#4B0891" }}
                >
                  Read More
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 hover:scale-105">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={product}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
