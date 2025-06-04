import React from 'react';

const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "JavaScript", level: 60 },
      { name: "Java", level: 50 },
      { name: "C#", level: 55 }
    ]
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "React", level: 80 },
      { name: "React Native", level: 20 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Bootstrap", level: 85 }
    ]
  },
  {
    category: "Tools & Technologies",
    items: [
      { name: "Git", level: 100 },
      { name: "GitHub", level: 100 },
      { name: "VS Code", level: 100 },
      { name: "Figma", level: 85 },
      { name: "Bitbucket", level:60 }
    ]
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
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Skills & Interests</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, certifications, and professional interests.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">{skillGroup.category}</h3>
                <div className="space-y-6">
                  {skillGroup.items.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-sm font-semibold text-gray-500">{skill.level}%</span>
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

