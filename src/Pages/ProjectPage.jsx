import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    title: "ThreeWanCuties Website",
    description: "A modern e-commerce platform for a fashion brand, featuring product catalog, shopping cart, and secure payment integration. Built with responsive design for optimal viewing across all devices.",
    image: "/src/assets/Images/Proj.png",
    technologies: [],
    liveLink: "#",
    githubLink: "#",
    category: "web"
  },
  {
    id: 2,
    title: "BP Apparel Website",
    description: "A dynamic clothing brand website showcasing seasonal collections, size guides, and customer reviews. Includes an interactive product gallery and real-time inventory management.",
    image: "/src/assets/Images/Proj2.png",
    technologies: [],
    liveLink: "#",
    githubLink: "#",
    category: "web"
  },
  {
    id: 3,
    title: "bRAEnQUEST E-learning App",
    description: "An interactive educational platform offering personalized learning paths, progress tracking, and gamified learning experiences. Features include video lessons, quizzes, and achievement systems.",
    image: "/src/assets/Images/Proj3.png",
    technologies: [],
    liveLink: "#",
    githubLink: "#",
    category: "app"
  },
  {
    id: 4,
    title: "ALGEBRUN Mobile Game",
    description: "An educational math game that combines algebra problem-solving with endless runner mechanics. Features include multiple difficulty levels, power-ups, and global leaderboards.",
    image: "/src/assets/Images/Proj4.png",
    technologies: [],
    liveLink: "#",
    githubLink: "#",
    category: "app"
  },
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
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
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
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
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
      </div>
    </div>
  );
}

