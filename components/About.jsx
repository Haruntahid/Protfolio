import React from "react";

function About() {
  return (
    <>
      <div
        className="container mx-auto text-txt-white mt-12 lg:mt-24 lg:px-0 px-3"
        id="about"
      >
        <h2 className="text-3xl lg:text-5xl font-semibold mb-8 lg:mb-12">
          About
        </h2>
        <p className="">
          <span className="inline-block items-center w-20 h-1 bg-gold-color mr-2"></span>
          Passionate Junior Web Developer eager to create user-friendly websites
          and continually learn new skills. Known for writing clean, efficient
          code and bringing fresh, creative ideas to development projects.
          Committed to delivering exceptional user experiences.
        </p>
      </div>
    </>
  );
}

export default About;
