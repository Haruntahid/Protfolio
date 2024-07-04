"use client";
import React, { useState } from "react";

function NavLinks() {
  const [activeSection, setActiveSection] = useState("");

  const handleSetActiveSection = (section) => {
    setActiveSection(section);
  };
  return (
    <>
      <li>
        <a
          onClick={() => handleSetActiveSection("about")}
          href="#about"
          className={activeSection === "about" ? "text-gold-color" : ""}
        >
          About
        </a>
      </li>
      <li>
        <a
          onClick={() => handleSetActiveSection("skills")}
          href="#skills"
          className={activeSection === "skills" ? "text-gold-color" : ""}
        >
          Skills
        </a>
      </li>
      <li>
        <a
          onClick={() => handleSetActiveSection("projects")}
          href="#projects"
          className={activeSection === "projects" ? "text-gold-color" : ""}
        >
          Projects
        </a>
      </li>
      <li>
        <a
          onClick={() => handleSetActiveSection("contact")}
          href="#contact"
          className={activeSection === "contact" ? "text-gold-color" : ""}
        >
          Contact
        </a>
      </li>
    </>
  );
}

export default NavLinks;
