"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import facebook from "../images/social/facebook (1).png";
import linkedin from "../images/social/linkedin (1).png";
import github from "../images/social/github (1).png";
import discord from "../images/social/discord (1).png";
import Image from "next/image";
import { SiGmail } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import toast from "react-hot-toast";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ushncnb", "template_tn9ahun", form.current, {
        publicKey: "ZaZo0zuwMo2nBrzHu",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Successfully Send Message!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div
      className="container mx-auto text-txt-white mt-12 lg:mt-24 px-3 lg:px-0"
      id="contact"
    >
      <h2 className="text-3xl lg:text-5xl font-semibold mb-8 lg:mb-12 text-center">
        Contact Me
      </h2>
      <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-0 items-center bg-[#3d3e42] rounded-lg p-5 lg:p-10">
        {/* first section */}
        <div className="space-y-5">
          <div className="flex items-center gap-2 bg-bg-clr px-5 py-2 rounded-full mx-auto lg:mx-0">
            <SiGmail />
            <p className="text-gold-color">tahidtaha997@gmail.com</p>
          </div>
          <div className="flex items-center w-fit gap-2 bg-bg-clr px-5 py-2 rounded-full mx-auto lg:mx-0">
            <FaPhone />
            <p className="text-gold-color">+880 1676 782636</p>
          </div>
          <div className="flex items-center w-fit gap-2 bg-bg-clr px-5 py-2 rounded-full mx-auto lg:mx-0">
            <FaLocationDot />
            <p className="text-gold-color">Dinajpur, Bangladesh</p>
          </div>
        </div>
        {/* middle section */}
        <div className="text-center space-y-3">
          <h2 className="text-4xl lg:text-5xl font-semibold text-gold-color">
            Harun Tahid
          </h2>
          <p className="text-xl lg:text-2xl tracking-wider">
            Junior Web Developer
          </p>
          <div>
            <a
              href="https://drive.google.com/file/d/1z0NI5iDgvpOf-kYF9pv_EeWBRGyJykGA/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-8 lg:px-12 mt-3 lg:mt-5 py-2 text-black lg:text-xl bg-gold-color rounded-full">
                Resume
              </button>
            </a>
          </div>
        </div>
        {/* end section */}
        <div className="flex gap-3 lg:gap-4">
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

      {/* New section for sharing opinion and form */}
      <div className="mt-3 lg:mt-6">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24 items-center bg-[#3d3e42] rounded-lg p-5 lg:p-10">
          {/* Text section */}
          <div className="text-center lg:text-left lg:w-1/2">
            <h2 className="text-2xl lg:text-4xl font-semibold text-gold-color mb-4">
              Let&apos;s share your opinion
            </h2>
            <p className="lg:text-2xl tracking-wider">
              I would love to hear your thoughts and feedback.
            </p>
          </div>

          {/* Form section */}
          <div className="lg:w-1/2">
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs lg:text-xl mb-2 text-txt-white"
                >
                  Your Name
                </label>
                <input
                  name="name"
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-xl text-black"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs lg:text-xl mb-2 text-txt-white"
                >
                  Your Email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-xl text-black"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs lg:text-xl mb-2 text-txt-white"
                >
                  Send Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="w-full px-4 py-2 rounded-2xl text-black"
                  rows="5"
                  placeholder="Enter your message"
                />
              </div>
              <button
                type="submit"
                className="px-8 lg:px-12 py-2 text-black lg:text-xl bg-gold-color rounded-xl"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
