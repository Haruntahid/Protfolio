import Image from "next/image";
import React from "react";
import profileImg from "../images/333656727_167009719446859_8833736956427744550_n-modified-removebg-preview.png";

function Hero() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-6xl text-white">
            I&apos;m{" "}
            <span className="capitalize text-gold-color">harun tahid</span>
          </h2>
          <p className="text-2xl text-[#fafafa] mt-5">
            Passionate Junior Web Developer
          </p>
          <button className="text-xl px-6 py-2 text-gold-color mt-5 rounded-lg bg-transparent border-2 border-gold-color">
            Contact Me
          </button>
        </div>
        <div>
          <Image
            src={profileImg}
            width={600}
            height={500}
            alt="Profile Picture"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
