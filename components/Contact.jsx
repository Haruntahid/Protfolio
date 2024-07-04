import React from "react";
import facebook from "../images/social/facebook (1).png";
import linkedin from "../images/social/linkedin (1).png";
import github from "../images/social/github (1).png";
import discord from "../images/social/discord (1).png";
import Image from "next/image";
import { SiGmail } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

function Contact() {
  return (
    <div className="container mx-auto text-txt-white mt-24" id="contact">
      <h2 className="text-5xl font-semibold mb-12 text-center">Contact Me</h2>
      <div className="flex justify-between items-center bg-[#3d3e42] rounded-lg p-10">
        {/* first section */}
        <div>
          <div className="flex items-center gap-2 bg-bg-clr px-5 py-2 rounded-full mt-5">
            <SiGmail />
            <p className="text-gold-color">tahidtaha997@gmail.com</p>
          </div>
          <div className="flex items-center w-fit gap-2 bg-bg-clr px-5 py-2 rounded-full mt-5">
            <FaPhone />
            <p className="text-gold-color">+880 1676 782636</p>
          </div>
          <div className="flex items-center  w-fit gap-2 bg-bg-clr px-5 py-2 rounded-full mt-5">
            <FaLocationDot />
            <p className="text-gold-color">Dinajpur,Bangladesh</p>
          </div>
        </div>
        {/* middle section */}
        <div className="text-center space-y-3">
          <h2 className="text-5xl font-semibold text-gold-color">
            Harun Tahid
          </h2>
          <p className="text-2xl tracking-wider">Junior Web Developer</p>
          <div>
            <a
              href="https://drive.google.com/file/d/16Aok-gndVq9y-wpzuKQ10ur53Rek3Y1C/view?usp=sharing"
              target="_blank"
            >
              <button className="px-12 mt-5 py-2 text-black text-xl bg-gold-color rounded-full">
                Resume
              </button>
            </a>
          </div>
        </div>
        {/* end section */}

        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/Haruntaha997/"
            target="_blank"
            className="p-2 rounded-full hover:bg-[#ffcc6c99] transition duration-600"
          >
            <Image src={facebook} alt={"facebook"} width={50} height={50} />
          </a>
          <a
            href="https://www.linkedin.com/in/haruntahid"
            target="_blank"
            className="p-2 rounded-full hover:bg-[#ffcc6c99] transition duration-600"
          >
            <Image src={linkedin} alt={"linkedin"} width={50} height={50} />
          </a>
          <a
            href="https://discord.gg/9RVZCR9k"
            target="_blank"
            className="p-2 rounded-full hover:bg-[#ffcc6c99] transition duration-600"
          >
            <Image src={discord} alt={"discord"} width={50} height={50} />
          </a>
          <a
            href="https://github.com/Haruntahid"
            target="_blank"
            className="p-2 rounded-full hover:bg-[#ffcc6c99] transition duration-600"
          >
            <Image src={github} alt={"github"} width={50} height={50} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
