"use client";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { FaAngleDoubleRight } from "react-icons/fa";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <div
        className="min-h-screen relative bg-cover bg-center flex justify-center w-full"
        style={{
          backgroundImage:
            'url("https://i.ibb.co/N7g004k/private-menu-bg-half-trans-1.png")',
        }}
      >
        <div className="xs:w-[90%] sm:w-[90%] md:w-[50%] lg:w-[50%] py-12">
          <div>
            <div>
              <h2 className="md:text-[24px] lg:text-[24px] text-[20px] cus-font text-[#09001f] font-bold text-center">
                Welcome to Emalie&apos;s First Communion
              </h2>
              <h2 className="md:text-[24px] lg:text-[24px] text-[20px] cus-font text-[#09001f] font-bold text-center">
                May 25th, 2024
              </h2>
            </div>
            <div className="mt-8 mb-6">
              <p className="md:text-[24px] lg:text-[24px] text-[20px] cus-font text-[#09001f]">
                Dear friends and family,
              </p>
            </div>
            <div>
              <p className="md:text-[24px] lg:text-[24px] text-[20px] cus-font text-[#09001f] text-justify">
              It brings us great joy to gather together today to celebrate another special milestone in our daughter&apos;s spiritual journey – her first communion. We are grateful to have you all here to join us in this special moment.
              </p>
              <p className="md:text-[24px] lg:text-[24px] text-[20px] cus-font text-[#09001f] text-justify mt-6">
              For us, this is a time to reflect on the growth and maturity of our daughter, both in her faith and as an individual. We are proud of the dedication she has shown in preparing for this important sacrament and we know that she will continue to grow in her relationship with God.
              </p>
              <p className="md:text-[24px] lg:text-[24px] text-[20px] cus-font text-[#09001f] text-justify mt-6">
              We also want to take a moment to thank our family and friends who have been a source of love, support, and guidance for our daughter. Your encouragement and prayers have played a significant role in her spiritual development.
              </p>
              <p className="md:text-[24px] lg:text-[24px] text-[20px] cus-font text-[#09001f] text-justify mt-6">
              As we come together to celebrate, let us remember the significance of this.
              </p>
            </div>
            <div className="flex justify-end">
              <Link href="/private-menu">
              <button
                className="px-8 font-semibold py-2 text-lg rounded-full border border-[#09001f] hover:bg-[#09001f] hover:transition duration-300 text-red-500 hover:text-[white] font-sans mt-12 flex items-center"
              >
                Please click here for the meal selection menu
                <p><FaAngleDoubleRight className="ml-2 mt-1" /></p>
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
