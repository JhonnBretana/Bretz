import React, { useEffect, useState, useRef } from "react";
import Header from "../Shared/Header";
import Picture from "../assets/Images/Picture2.png";
import VC from "../assets/VC/Bretaña, Jhonn Michael B CV.pdf";

export default function HomePage() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [typedName, setTypedName] = useState("");
  const nameText = "Jhonn Michael Bretaña";
  const nameChars = [...nameText];

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setTypedName("");
    let interval = null;
    interval = setInterval(() => {
      setTypedName((prev) => {
        if (prev.length < nameChars.length) {
          return prev + nameChars[prev.length];
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  const downloadVC = () => {
    const link = document.createElement("a");
    link.href = VC;
    link.download = "Bretaña, Jhonn Michael B CV";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="min-h-screen bg-white text-center relative px-4 md:px-10 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-between items-center relative min-h-[90vh] pt-20">
        {/* Text Content */}
        <div className="space-y-8 z-10 md:w-1/2 text-left">
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-gray-600 animate-fadeIn">
              Hello, I'm
            </h3>
            <h1 className="text-7xl md:text-8xl font-bold text-black animate-slideUp min-h-[3rem]">
              {typedName}
              <span
                className={`border-r-2 border-black ml-1 ${typedName.length === nameChars.length ? "animate-pulse" : ""}`}
              ></span>
            </h1>
            <h2 className="text-4xl md:text-5xl text-gray-800 animate-slideUp delay-200 font-medium">
              A Junior Software Web Developer
            </h2>
          </div>

          <p className="text-xl text-gray-600 max-w-2xl animate-fadeIn delay-300 leading-relaxed">
            A passionate Fourth-year student dedicated to creating beautiful and
            functional web experiences
          </p>
        </div>

        {/* Profile Image Container */}
        <div
          className={`relative md:w-1/2 mt-10 md:mt-0 transition-all duration-1000 ease-out ${
            scrollPosition > 100
              ? "opacity-0 scale-75 translate-y-[-100vh]"
              : "opacity-100 scale-100 translate-y-0"
          }`}
        >
          <div className="relative w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] mx-auto animate-float">
            {/* Decorative Elements */}
            <div className="absolute inset-0 bg-gray-300 rounded-full blur-3xl animate-pulse opacity-20"></div>
            <div className="absolute -inset-4 bg-gray-400 rounded-full animate-spin-slow opacity-10"></div>

            {/* Main Image */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-black shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img
                src={Picture}
                alt="Jhonn Michael Bretana"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gray-400/20 rounded-full blur-xl animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gray-400/20 rounded-full blur-xl animate-float-delayed"></div>
          </div>
        </div>
      </div>

      {/* Scroll Arrow Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${
          scrollPosition > 100 ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="animate-bounce">
          <svg
            className="w-10 h-10 text-gray-700"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </main>
  );
}
