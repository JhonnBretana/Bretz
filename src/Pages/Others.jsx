import React from 'react';

const skills = [
  {
    category: "Programming Languages",
    items: ["JavaScript", "HTML", "CSS", ]
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "React Native", "Tailwind CSS", "Bootstrap"]
  },
  {
    category: "Tools & Technologies",
    items: ["Git", "GitHub", "VS Code", "Figma"]
  }
];

const certifications = [];

const interests = [
  {
    title: "UI/UX Design",
    description: "Passionate about creating intuitive and beautiful user interfaces that enhance user experience."
  },
  {
    title: "Mobile Development",
    description: "Focused on building cross-platform mobile applications with modern frameworks and tools."
  },
  {
    title: "E-commerce Solutions",
    description: "Specializing in developing scalable and secure e-commerce platforms with modern features."
  }
];

export default function Others() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Skills & Interests</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, certifications, and professional interests.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Certifications</h2>
          {certifications.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-xl text-gray-600 italic">Makakakuha rin ako neto</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {certifications.map((cert) => (
                <div key={cert.title} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{cert.title}</h3>
                      <p className="text-gray-600">{cert.issuer}</p>
                    </div>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                      {cert.date}
                    </span>
                  </div>
                  <p className="text-gray-600">{cert.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Interests Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Professional Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {interests.map((interest) => (
              <div key={interest.title} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{interest.title}</h3>
                <p className="text-gray-600">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

