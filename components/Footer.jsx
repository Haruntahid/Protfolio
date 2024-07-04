import React from "react";
import NavLinks from "./NavLinks";

function Footer() {
  return (
    <div className="container mx-auto mt-20">
      <div className="block items-center w-5/6 mx-auto h-[2px] bg-gold-color"></div>
      <h2 className="text-gold-color text-3xl font-semibold text-center mt-10">
        {"<haruntahid />"}
      </h2>
      <div>
        <ul className="flex justify-center mt-4 mb-6 text-xl space-x-14 text-txt-clr">
          <NavLinks />
        </ul>
      </div>
      <p className="text-center text-txt-white pb-8">
        @copyright 2024 <span>haruntahid</span>. All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
