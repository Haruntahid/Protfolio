import React from "react";
import NavLinks from "./NavLinks";

function Header() {
  return (
    <>
      <div className="bg-bg-clr">
        <div className="container mx-auto py-4 lg:py-8 flex items-center justify-between px-3 lg:px-0">
          <h2 className="text-gold-color text-2xl lg:text-3xl font-medium lg:font-bold">
            {"<haruntahid />"}
          </h2>
          <div className="hidden lg:block">
            <ul className="flex text-xl space-x-14 text-txt-clr">
              <NavLinks />
            </ul>
          </div>
          <div>
            <a
              href="https://drive.google.com/file/d/16Aok-gndVq9y-wpzuKQ10ur53Rek3Y1C/view?usp=sharing"
              target="_blank"
            >
              <button className="px-5 lg:px-8 py-1 lg:py-2 lg:text-xl bg-gold-color rounded-full">
                Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
