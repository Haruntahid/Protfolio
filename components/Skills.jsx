"use client";
import Image from "next/image";
import React from "react";
import html from "../images/icons/html.png";
import css from "../images/icons/css.png";
import bootstrap from "../images/icons/bootstrap.png";
import js from "../images/icons/js.png";
import react from "../images/icons/react.png";
import mongodb from "../images/icons/mongodb.png";
import express from "../images/icons/express-js.png";
import node from "../images/icons/node-js.png";
import github from "../images/icons/github.png";
import git from "../images/icons/git.png";
import firebase from "../images/icons/firebase.png";
import next from "../images/icons/next.png";

function Skills() {
  const skills = [
    {
      id: 1,
      name: "HTML",
      img: html,
    },
    {
      id: 2,
      name: "CSS",
      img: css,
    },
    {
      id: 3,
      name: "Bootstrap",
      img: bootstrap,
    },
    {
      id: 4,
      name: "JavaScript",
      img: js,
    },
    {
      id: 5,
      name: "React",
      img: react,
    },
    {
      id: 6,
      name: "MongoDB",
      img: mongodb,
    },
    {
      id: 7,
      name: "Express.js",
      img: express,
    },
    {
      id: 8,
      name: "Node.js",
      img: node,
    },
    {
      id: 9,
      name: "GitHub",
      img: github,
    },
    {
      id: 10,
      name: "Git",
      img: git,
    },
    {
      id: 11,
      name: "Firebase",
      img: firebase,
    },
    {
      id: 12,
      name: "Next.js",
      img: next,
    },
  ];

  return (
    <>
      <div className="container mx-auto text-txt-white mt-24" id="skills">
        <h2 className="text-5xl font-semibold mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-6 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="p-8 bg-[#3d3e42] flex flex-col items-center justify-center rounded-lg transition duration-2000 transform hover:bg-[#cca35c] hover:scale-105"
              style={{ transition: "background-color 1s, transform 1s" }}
            >
              <Image
                src={skill.img}
                alt={`Logo of ${skill.name}`}
                width={100}
                height={100}
              />
              <p className="mt-6 text-2xl font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
