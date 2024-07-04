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
        <p className="lg:text-xl">
          <span className="inline-block items-center w-20 h-1 bg-gold-color mr-2"></span>
          I am Harun Tahid, a dedicated Junior Web Developer from Bangladesh.
          With a meticulous eye for detail and a commitment to creating
          user-friendly websites, I am more passionate about web development,
          tech enthusiasts and adopting new technologies. Eager to explore and
          integrate new technologies into my projects, My approach to
          development is driven by a passion for innovation and excellence.
          Thriving in collaborative environments, I am known for bringing fresh,
          creative ideas to the table.
        </p>
      </div>
    </>
  );
}

export default About;
