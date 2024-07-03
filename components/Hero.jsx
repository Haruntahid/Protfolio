import Image from "next/image";
import React from "react";
import profileImg from "../images/Profile picture.png";

function Hero() {
  return (
    <div className="bg-bg-clr shadow-xl">
      <div className="container mx-auto">
        <div className="flex justify-between items-center pt-5 pb-14">
          <div>
            <h2 className="text-6xl text-white">
              I&apos;m{" "}
              <span className="capitalize text-gold-color">harun tahid</span>
            </h2>
            <p className="text-2xl text-txt-white mt-5">
              Passionate Junior Web Developer
            </p>
            <button className="text-xl px-6 py-2 text-gold-color mt-5 rounded-lg bg-transparent border-2 border-gold-color">
              Contact Me
            </button>
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
