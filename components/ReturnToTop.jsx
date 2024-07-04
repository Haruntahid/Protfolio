"use client";
import React, { useState, useEffect } from "react";

function ReturnToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button when page is scrolled down
    const toggleVisibility = () => {
      console.log("Scroll position:", window.scrollY);
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-gold-color text-bg-clr lg:h-16 h-10 w-10 lg:w-16 rounded-full shadow-lg font-black text-2xl lg:text-3xl"
        >
          ↑
        </button>
      )}
    </>
  );
}

export default ReturnToTop;
