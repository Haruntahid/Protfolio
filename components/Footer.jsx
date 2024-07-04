import React from "react";
import NavLinks from "./NavLinks";

function Footer() {
  return (
    <div className="container mx-auto mt-10 lg:mt-20">
      <div className="block items-center w-5/6 mx-auto h-[1px] lg:h-[2px] bg-gold-color"></div>
      <h2 className="text-gold-color text-2xl lg:text-3xl font-semibold text-center mt-5 lg:mt-10">
        {"<haruntahid />"}
      </h2>
      <div>
        <ul className="flex justify-center mt-2 lg:mt-4 mb-3 lg:mb-6 lg:text-xl space-x-4 lg:space-x-14 text-txt-clr">
          <NavLinks />
        </ul>
      </div>
      <p className="text-center text-txt-white pb-5 lg:pb-8 text-xs">
        @ Copyright 2024 <span className="text-gold-color">haruntahid</span>.
        All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
