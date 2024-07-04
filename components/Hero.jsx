import Image from "next/image";
import React from "react";
import profileImg from "../images/Profile picture.png";

function Hero() {
  return (
    <div className="bg-bg-clr shadow-xl">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center lg:gap-0 gap-10 pt-5 pb-7 lg:pb-14 lg:px-0 px-3">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl lg:text-6xl text-white">
              I&apos;m{" "}
              <span className="capitalize text-gold-color">harun tahid</span>
            </h2>
            <p className="text-xl lg:text-2xl text-txt-white mt-2 lg:mt-5">
              Passionate Junior Web Developer
            </p>
            <a href="#contact">
              <button className="lg:text-xl px-3 lg:px-6 py-2 text-gold-color mt-3 lg:mt-5 rounded-lg bg-transparent border-2 border-gold-color">
                Contact Me
              </button>
            </a>
          </div>
          <div>
            <Image
              src={profileImg}
              className="rounded-full"
              width={600}
              height={500}
              alt="Profile Picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
