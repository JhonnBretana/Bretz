import React, { useEffect, useState } from 'react'
import Picture from '../assets/Images/Picture2.png'
import VC from '../assets/VC/Bretaña, Jhonn Michael B CV.pdf'


export default function AboutPage() {
  const [expandedItems, setExpandedItems] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleExpand = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  useEffect(() => {
    // Initial animation
    setIsVisible(true);

    // Scroll animation handler
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      id: 1,
      title: 'Front-End Developer',
      period: '2023 - Present',
      description: 'Developing and maintaining web applications using HTML, CSS, Tailwind CSS, React.js and JavaScript.',
      details: [
        'Building responsive and interactive user interfaces',
        'Implementing modern web design principles',
        'Working with React.js for dynamic web applications',
        'Creating clean and maintainable code'
      ]
    },
    
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-5xl mx-auto'>
        {/* Profile Section with Scroll Animation */}
        <div className='text-center mb-16'>
          <div 
            className={`transform transition-all duration-1000 ease-out ${
              scrollPosition > 100 
                ? 'translate-y-0 opacity-100 scale-100' 
                : 'translate-y-[100vh] opacity-0 scale-75'
            }`}
          >
            <div className='relative inline-block'>
              <img 
                src={Picture}
                alt="Profile" 
                className='w-48 h-48 rounded-full object-cover border-4 border-white shadow-xl'
              />
            </div>
            <h1 className='mt-6 text-4xl font-bold text-gray-900'>Jhonn Michael Bretaña</h1>
            <p className='mt-2 text-xl text-gray-600'>Aspiring Web Developer</p>
            {/* CTA Buttons */}
            <div className='flex flex-col md:flex-row justify-center items-center gap-6 mt-8 animate-fadeIn delay-500'>
              <button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = VC;
                  link.download = 'Bretaña, Jhonn Michael B CV';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="group relative flex justify-center w-48 items-center bg-black text-white px-8 py-4 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Download VC</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </button>
              <a
                href="#contact"
                className="group relative flex justify-center w-48 items-center bg-black text-white px-8 py-4 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10 group-hover:text-white">Contact Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Introduction Card */}
          <div className={`transform transition-all duration-1000 ease-out ${
            scrollPosition > 150 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className='bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300'>
              <h2 className='text-2xl font-semibold text-gray-800 mb-4 flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Introduction
              </h2>
              <p className='text-gray-600 leading-relaxed'>
              Freelance Front-End Web Developer and current Information Technology student at Pamantasan ng Lungsod ng Valenzuela, Philippines. I specialize in creating responsive, user-friendly interfaces and have completed a variety of freelance projects alongside academic and personal work. Passionate about web technologies and continuously building my skills through real-world experience.
              </p>
            </div>
          </div>

          {/* Skills Card */}
          <div className={`transform transition-all duration-1000 ease-out ${
            scrollPosition > 200 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className='bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300'>
              <h2 className='text-2xl font-semibold text-gray-800 mb-4 flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Skills
              </h2>
              <div className='space-y-4'>
                <div className='bg-gray-50 rounded-lg p-4'>
                  <h3 className='font-medium text-gray-800 mb-2'>Front-End Development</h3>
                  <div className='flex flex-wrap gap-2'>
                    {[
                      'HTML5',
                      'CSS3',
                      'JavaScript',
                      'React.js',
                      'Tailwind CSS',
                      'Bootstrap',
                      'Responsive Design'
                    ].map((skill) => (
                      <span key={skill} className='px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm'>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className='bg-gray-50 rounded-lg p-4'>
                  <h3 className='font-medium text-gray-800 mb-2'>Tools & Technologies</h3>
                  <div className='flex flex-wrap gap-2'>
                    {[
                      'GitHub',
                      'VS Code',
                      'Chrome DevTools',
                      'npm',
                      'Figma'
                    ].map((skill) => (
                      <span key={skill} className='px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm'>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className={`mt-8 transform transition-all duration-1000 ease-out ${
          scrollPosition > 250 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className='bg-white rounded-xl shadow-lg p-8'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6 flex items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Experience
            </h2>
            <div className='space-y-6'>
              {experiences.map((exp) => (
                <div key={exp.id} className='relative pl-8 border-l-4 border-blue-500 hover:border-blue-600 transition-colors'>
                  <div className='absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full'></div>
                  <div className='bg-gray-50 rounded-lg p-6'>
                    <div className='flex justify-between items-start'>
                      <div>
                        <h3 className='text-xl font-medium text-gray-800'>{exp.title}</h3>
                        <p className='text-blue-600 font-medium'>{exp.period}</p>
                        <p className='text-gray-600 mt-2'>{exp.description}</p>
                      </div>
                      <button
                        onClick={() => toggleExpand(exp.id)}
                        className='ml-4 p-2 rounded-full hover:bg-gray-200 transition-colors focus:outline-none'
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-6 w-6 text-gray-600 transform transition-transform duration-300 ${
                            expandedItems[exp.id] ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                    
                    {/* Expandable Content */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        expandedItems[exp.id] ? 'max-h-96 mt-4' : 'max-h-0'
                      }`}
                    >
                      <div className='border-t border-gray-200 pt-4 mt-4'>
                        <ul className='space-y-2'>
                          {exp.details.map((detail, index) => (
                            <li key={index} className='flex items-start'>
                              <svg
                                className='h-5 w-5 text-blue-500 mr-2 mt-1'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                              >
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  strokeWidth={2}
                                  d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                                />
                              </svg>
                              <span className='text-gray-600'>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

