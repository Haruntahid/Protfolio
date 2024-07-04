import Image from "next/image";
import React from "react";
import needBlood from "../images/projects/Need Blood.png";
import restutrant from "../images/projects/Vix Restaurant.png";
import bookStore from "../images/projects/Vix-BookStore.png";
import ticket from "../images/projects/Vix-ticket.png";
import villa from "../images/projects/vix-villa Home.png";
import vixCareer from "../images/projects/Vix-Career Home.png";

function Projects() {
  const projects = [
    {
      id: 1,
      name: "Need Blood",
      slug: "",
      image: needBlood,
      link: "https://need-blood-8367e.web.app",
    },
    {
      id: 2,
      name: "Vix Career",
      slug: "",
      image: vixCareer,
      link: "https://vix-career.web.app/",
    },
    {
      id: 3,
      name: "Vix Restaurant",
      slug: "",
      image: restutrant,
      link: "https://vix-restaurant.netlify.app/",
    },
    {
      id: 4,
      name: "Vix BookStore",
      slug: "",
      image: bookStore,
      link: "https://vix-bookstore.netlify.app",
    },
    {
      id: 5,
      name: "Vix Ticket",
      slug: "",
      image: ticket,
      link: "https://vix-ticket.netlify.app",
    },
    {
      id: 6,
      name: "Vix Villa",
      slug: "",
      image: villa,
      link: "https://vix-villa.netlify.app",
    },
  ];
  return (
    <>
      <div className="container mx-auto mt-12 lg:mt-24" id="projects">
        <h2 className="text-3xl lg:text-5xl font-semibold mb-8 lg:mb-12 text-center text-txt-white">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 px-3 lg:px-0">
          {projects.map((project) => (
            <div
              className="p-2 lg:p-5 border-2 rounded-lg bg-[#3d3e42] border-gold-color"
              key={project.id}
            >
              <div className="relative overflow-hidden h-64 lg:h-96 w-full">
                <div className="parallax">
                  <a href={project.link} target="_blank">
                    <Image
                      src={project.image}
                      layout="responsive"
                      height={200}
                      width={400}
                      alt={project.name}
                    />
                  </a>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-txt-white font-bold text-xl">
                  {project.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
