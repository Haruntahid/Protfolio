"use client";
import Image from "next/image";
import React from "react";

import html from "../images/icons/html.png";
import css from "../images/icons/css.png";
import bootstrap from "../images/icons/bootstrap.png";
import js from "../images/icons/js.png";
import ts from "../images/icons/typescript.png";
import java from "../images/icons/java.png";
import react from "../images/icons/react.png";
import mongodb from "../images/icons/mongodb.png";
import express from "../images/icons/express-js.png";
import node from "../images/icons/node-js.png";
import github from "../images/icons/github.png";
import git from "../images/icons/git.png";
import firebase from "../images/icons/firebase.png";
import next from "../images/icons/next.png";
import spring_boot from "../images/icons/spring-boot-logo.png";
import postman from "../images/icons/postman.png";
import sql from "../images/icons/sql.png";

const skills = [
  { id: 1, name: "HTML", img: html },
  { id: 2, name: "CSS", img: css },
  // { id: 3, name: "Bootstrap", img: bootstrap },
  { id: 4, name: "JavaScript", img: js },
  { id: 17, name: "TypeScript", img: ts },
  { id: 5, name: "Java", img: java },
  { id: 14, name: "React", img: react },
  { id: 6, name: "MongoDB", img: mongodb },
  { id: 7, name: "Express.js", img: express },
  { id: 8, name: "Node.js", img: node },
  { id: 9, name: "GitHub", img: github },
  { id: 10, name: "Git", img: git },
  { id: 11, name: "Firebase", img: firebase },
  { id: 12, name: "Next.js", img: next },
  { id: 13, name: "Spring Boot", img: spring_boot },
  { id: 15, name: "Postman", img: postman },
  { id: 16, name: "SQL", img: sql },
];

const Skills = () => {
  return (
    <div
      className="container mx-auto text-white mt-12 lg:mt-24 px-4"
      id="skills"
    >
      <h2 className="text-3xl lg:text-5xl font-bold mb-10 text-center text-[#cca35c]">
        Skills
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 justify-center">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="bg-[#2f2f33] p-5 rounded-2xl shadow-md hover:shadow-lg flex flex-col items-center justify-center transition duration-300 hover:bg-[#cca35c]/90 hover:scale-105"
          >
            <div className="w-[60px] h-[60px] flex items-center justify-center">
              <Image
                src={skill.img}
                alt={`Logo of ${skill.name}`}
                width={45}
                height={45}
                className="object-contain"
              />
            </div>
            <p className="mt-3 text-base font-semibold text-center">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
