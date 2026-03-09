import React, { useState, useEffect } from "react";
import client1 from "../assets/Images/client 1.jpg";
import client2 from "../assets/Images/client 2.jpg";
import client3 from "../assets/Images/client 3.jpg";
import client4 from "../assets/Images/client 4.jpg";

const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "JavaScript", level: 90 },
      { name: "Java", level: 50 },
      { name: "C#", level: 55 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React", level: 80 },
      { name: "React Native", level: 20 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Bootstrap", level: 85 },
      { name: "Sequalize", level: 60 },
    ],
  },
  {
    category: "Tools & Technologies",
    items: [
      { name: "Git", level: 100 },
      { name: "GitHub", level: 100 },
      { name: "VS Code", level: 100 },
      { name: "Figma", level: 85 },
      { name: "Firebase", level: 60 },
      { name: "MySQL", level: 80 },
    ],
  },
];

const clients = [
  {
    name: "Algebrun",
    logo: client1,
  },
  {
    name: "Algebra Quest",
    logo: client2,
  },
  {
    name: "Paraboland",
    logo: client3,
  },
  {
    name: "LingGo",
    logo: client4,
  },
];

const interests = [
  {
    title: "UI/UX Design",
    description:
      "Passionate about creating intuitive and beautiful user interfaces that enhance user experience.",
  },
  {
    title: "Mobile Development",
    description:
      "Focused on building cross-platform mobile applications with modern frameworks and tools.",
  },
  {
    title: "E-commerce Solutions",
    description:
      "Specializing in developing scalable and secure e-commerce platforms with modern features.",
  },
];

export default function Others() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Clients Gallery Carousel */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Our Clients
          </h2>
          <div
            className="relative rounded-xl shadow-lg overflow-hidden h-96 md:h-screen max-h-96 flex flex-col items-center justify-center bg-cover bg-center"
            style={{
              backgroundImage: `url(${clients[currentIndex].logo})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Text on top of image */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-8 flex-1">
              <h3 className="text-7xl font-bold text-white mb-4">
                {clients[currentIndex].name}
              </h3>
              <p className="text-white text-base max-w-2xl">
                {clients[currentIndex].description}
              </p>
            </div>

            {/* Dots Indicator at Bottom */}
            <div className="relative z-10 flex gap-2 pb-6">
              {clients.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-white w-8" : "bg-white/50 w-2"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Skills & Interests
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, certifications, and
            professional interests.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  {skillGroup.category}
                </h3>
                <div className="space-y-6">
                  {skillGroup.items.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm font-semibold text-gray-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2.5">
                        <div
                          className="h-2.5 rounded-full bg-gradient-to-r from-green-500 to-green-600 transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interests Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Professional Interests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {interests.map((interest) => (
              <div
                key={interest.title}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {interest.title}
                </h3>
                <p className="text-gray-600">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
