import React from "react";

function Header() {
  return (
    <>
      <div className="container mx-auto py-8 flex items-center justify-between">
        <h2 className="text-gold-color text-3xl font-bold">
          {"<haruntahid />"}
        </h2>
        <div>
          <ul className="flex text-xl space-x-14 text-txt-clr">
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <button className="px-8 py-2 bg-gold-color rounded-full">
            Resume
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
