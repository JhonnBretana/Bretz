import React, { useState } from 'react';
import Proj1 from '../assets/Images/Proj1.png'
import Proj2 from '../assets/Images/Proj2.png'
import Proj3 from '../assets/Images/Proj3.png'
import Proj4 from '../assets/Images/Proj4.png'
import Proj5 from '../assets/Images/Proj5.png'
import Proj6 from '../assets/Images/Proj6.png'
import Proj7 from '../assets/Images/Proj7.png'

const projects = [
  {
    id: 1,
    title: "ThreeWanCuties Website",
    description: "A modern e-commerce platform for a fashion brand, featuring product catalog, shopping cart, and secure payment integration. Built with responsive design for optimal viewing across all devices.",
    image: Proj1,
    technologies: [],
    liveLink: "#",
    githubLink: "https://threewancuties.com/?fbclid=IwY2xjawKxPtBleHRuA2FlbQIxMQABHsK2Je7wssqm_P0UnrEg6KoevDRnjkuUXlvg2ff44V9ozhFB9VCFbtTO2m-s_aem_8f5_CK_cEhbvd7C1dnHx_w",
    category: "web"
  },
  {
    id: 2,
    title: "BP Apparel Website",
    description: "A dynamic clothing brand website showcasing seasonal collections, size guides, and customer reviews. Includes an interactive product gallery and real-time inventory management.",
    image: Proj2,
    technologies: [],
    liveLink: "#",
    githubLink: "https://kurtpantaleon.github.io/BP-Website/",
    category: "web"
  },
  {
    id: 3,
    title: "bRAEnQUEST E-learning App",
    description: "An interactive educational platform offering personalized learning paths, progress tracking, and gamified learning experiences. Features include video lessons, quizzes, and achievement systems.",
    image: Proj3,
    technologies: [],
    liveLink: "#",
    githubLink: "https://kurtpantaleon.github.io/AlgebraQuest-Website/",
    category: "app"
  },
  {
    id: 4,
    title: "ALGEBRUN Mobile Game",
    description: "An educational math game that combines algebra problem-solving with endless runner mechanics. Features include multiple difficulty levels, power-ups, and global leaderboards.",
    image: Proj4,
    technologies: [],
    liveLink: "#",
    githubLink: "https://drive.google.com/drive/u/2/folders/1qxvP8_Bi3olf-n_zaTy0eYN9dFT-iLHE",
    category: "app"
  },
  {
    id: 5,
    title: "ASWANG Desktop Gamee",
    description: "This is a top-down horror survival game created as a student project. It uses one-button controls to keep gameplay simple but intense. Players face endless zombie waves that get harder over time. The goal is to survive as long as possible, with your score rising the longer you last. It's a fun and challenging game made to test reflexes, strategy, and timing.",
    image: Proj5,
    technologies: [],
    liveLink: "#",
    githubLink: "https://github.com/kurtpantaleon/OneButtonGame",
    category: "app"
  },
  {
    id: 6,
    title: "PC-Builders Desktop Game",
    description: "A multiplayer tabletop-inspired card game where players race to build a complete PC using component cards based on a given checklist. Each player must collect CPU, GPU, RAM, and more—but watch out! Sabotage cards can slow down your enemies by corrupting their parts or stealing pieces. Strategy, speed, and a bit of luck will determine who becomes the ultimate PC builder.",
    image: Proj6,
    technologies: [],
    liveLink: "#",
    githubLink: "#",
    category: "app"
  } ,
  {
    id: 7,
    title: "TomYang Enrollment System",
    description: "A student-developed enrollment system designed for Tom Yang University. This system allows both students and administrators to log in securely, manage course enrollment, and update records. Features include user authentication, student registration, course listing, and admin-level controls. Built to streamline the enrollment process and make academic data management more efficient.",
    image: Proj7,
    technologies: [],
    liveLink: "#",
    githubLink: "#",
    category: "web"
  }
];

export default function ProjectPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of my recent work and personal projects. Each project is a unique challenge
            that helped me grow as a developer.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-12">
          {['all', 'web', 'app'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${activeFilter === filter
                  ? 'bg-black text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 flex flex-col"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300"
                  style={{
                    transform: hoveredProject === project.id ? 'scale(1.1)' : 'scale(1)'
                  }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300"
                  style={{
                    opacity: hoveredProject === project.id ? 1 : 0
                  }}
                />
              </div>

              {/* Project Info */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Button */}
                <div className="mt-auto">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-4 py-2.5 text-sm font-semibold text-white bg-black rounded-lg hover:bg-gray-800 transition-all duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    View Project
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/*
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">Want to see more of my work?</p>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-black hover:bg-gray-800 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View More on GitHub
          </a>
        </div>
        */}
      </div>
    </div>
  );
}

