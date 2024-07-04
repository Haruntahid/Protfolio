import React from "react";
import NavLinks from "./NavLinks";

function Header() {
  return (
    <>
      <div className="bg-bg-clr">
        <div className="container mx-auto py-8 flex items-center justify-between">
          <h2 className="text-gold-color text-3xl font-bold">
            {"<haruntahid />"}
          </h2>
          <div>
            <ul className="flex text-xl space-x-14 text-txt-clr">
              <NavLinks />
            </ul>
          </div>
          <div>
            <a
              href="https://drive.google.com/file/d/16Aok-gndVq9y-wpzuKQ10ur53Rek3Y1C/view?usp=sharing"
              target="_blank"
            >
              <button className="px-8 py-2 bg-gold-color rounded-full">
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
