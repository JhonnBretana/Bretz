import React, { useEffect, useState } from 'react'
import Header from '../Shared/Header'
import Picture from '../assets/Images/Picture2.png'
import VC from '../assets/VC/Bretaña, Jhonn Michael B CV.pdf'  // Import your VC file

export default function HomePage() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const downloadVC = () => {
    // Create a link element
    const link = document.createElement('a');
    // Use the imported VC file
    link.href = VC;
    // Set the download attribute
    link.download = 'Bretaña, Jhonn Michael B CV';
    // Append to the document
    document.body.appendChild(link);
    // Trigger the download
    link.click();
    // Clean up
    document.body.removeChild(link);
  };

  return (
    <main className='min-h-screen bg-gradient-to-b from-white to-gray-50 text-center relative px-4 md:px-10 overflow-hidden'>
      {/* Hero Section */}
      <div className='flex flex-col md:flex-row justify-between items-center relative min-h-[90vh] pt-20'>
        {/* Text Content */}
        <div className='space-y-6 z-10 md:w-1/2 text-left'>
          <h3 className='text-xl font-semibold text-gray-600 animate-fadeIn'>Hello, I'm</h3>
          <h1 className='text-6xl md:text-8xl font-bold bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent animate-slideUp'>
            Jhonn Michael Bretana
          </h1>
          <h2 className='text-4xl md:text-6xl font-bold text-gray-800 animate-slideUp delay-200'>
            Future Web Developer
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl animate-fadeIn delay-300'>
            A passionate third-year student dedicated to creating beautiful and functional web experiences
          </p>
        </div>

        {/* Profile Image Container */}
        <div className={`relative md:w-1/2 mt-10 md:mt-0 transition-all duration-1000 ease-out ${
          scrollPosition > 100 ? 'opacity-0 scale-75 translate-y-[-100vh]' : 'opacity-100 scale-100 translate-y-0'
        }`}>
          <div className='relative w-[400px] h-[400px] mx-auto'>
            {/* Decorative Elements */}
            <div className='absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse'></div>
            <div className='absolute -inset-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full animate-spin-slow'></div>
            
            {/* Main Image */}
            <div className='relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl transform hover:scale-105 transition-transform duration-500'>
              <img 
                src={Picture} 
                alt="Jhonn Michael Bretana" 
                className='w-full h-full object-cover object-center'
              />
            </div>

            {/* Floating Elements */}
            <div className='absolute -top-4 -right-4 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-float'></div>
            <div className='absolute -bottom-4 -left-4 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-float-delayed'></div>
          </div>
        </div>
      </div>
      
      {/* CTA Buttons */}
      <div className='flex flex-col md:flex-row justify-center items-center gap-6 mt-10 mb-20 animate-fadeIn delay-500'>
        <button
          onClick={downloadVC}
          className="group relative flex justify-center w-48 items-center bg-black text-white px-8 py-4 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
        >
          <span className="relative z-10">Download VC</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
        </button>
        <a
          href="#contact"
          className="group relative flex justify-center w-48 items-center border-2 border-black px-8 py-4 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
        >
          <span className="relative z-10 group-hover:text-white">Contact Me</span>
          <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
        </a>
      </div>
    </main>
  )
}

