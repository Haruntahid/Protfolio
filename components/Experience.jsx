"use client";
import React from "react";
import Image from "next/image";
import cmed from "../images/projects/cmed.png";
import cmed_logo from "../images/projects/CMED-logo.png";

function Experience() {
  return (
    <div
      className="container mx-auto text-txt-white mt-12 lg:mt-24 lg:px-0 px-3"
      id="experience"
    >
      <h2 className="text-3xl lg:text-5xl text-center font-semibold mb-8 lg:mb-12">
        Experience
      </h2>

      <div className="relative border-l-4 border-gold-color pl-6 ml-4">
        {/* Timeline Item */}
        <div className="mb-10">
          <div className="absolute w-4 h-4 bg-gold-color rounded-full left-[-10px] top-1.5"></div>
          <h3 className="text-xl lg:text-2xl font-bold">Backend Intern</h3>
          <div>
            <Image
              src={cmed_logo}
              alt="CMED Health"
              width={150}
              height={40}
              className="my-5"
            />
            <p className="text-2xl">CMED Health</p>
          </div>
          <span className="text-sm text-gray-400">
            Level 4, House 460, Road 31, New DOHS, Mohakhali, Dhaka-1206 <br />
            November 1, 2024 – April 27, 2025
          </span>
          <p className="mt-2 text-base lg:text-lg text-gray-300">
            Contributed to the development and maintenance of robust backend
            services utilizing Java Spring Boot. Responsibilities included
            seamless API integration, performance optimization of database
            queries, and active collaboration within cross-functional teams to
            ensure the delivery of scalable and efficient healthcare solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
