"use client";
import React, { useState } from "react";
import NavLinks from "./NavLinks";
import Link from "next/link";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-bg-clr">
        <div className="container mx-auto py-4 lg:py-8 flex items-center justify-between px-3 lg:px-0">
          <Link href="/">
            <h2 className="text-gold-color text-2xl lg:text-3xl font-medium lg:font-bold">
              {"<haruntahid />"}
            </h2>
          </Link>
          <div className="hidden lg:block">
            <ul className="flex text-xl space-x-14 text-txt-clr">
              <NavLinks />
            </ul>
          </div>

          <div className="hidden lg:block">
            <a
              href="https://drive.google.com/file/d/16Aok-gndVq9y-wpzuKQ10ur53Rek3Y1C/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-5 lg:px-8 py-1 lg:py-2 lg:text-xl bg-gold-color rounded-full">
                Resume
              </button>
            </a>
          </div>

          {/* Hamburger menu */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? (
                <svg
                  className="w-8 h-8 text-txt-clr"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-8 h-8 text-txt-clr"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden px-3">
            <ul className="flex flex-col items-center lg:text-xl space-y-2 text-txt-clr">
              <NavLinks />
            </ul>
            {/* Resume button */}
            <div className="flex justify-center mt-3">
              <a
                href="https://drive.google.com/file/d/1z0NI5iDgvpOf-kYF9pv_EeWBRGyJykGA/view?usp=sharing"
                target="_blank"
              >
                <button className="px-5 lg:px-8 py-1 lg:py-2 lg:text-xl bg-gold-color rounded-full block">
                  Resume
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
