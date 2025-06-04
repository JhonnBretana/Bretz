import React, { useEffect, useState, useRef } from 'react'
import Header from '../Shared/Header'
import Picture from '../assets/Images/Picture2.png'
import VC from '../assets/VC/Bretaña, Jhonn Michael B CV.pdf'

export default function HomePage() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [typedName, setTypedName] = useState('');
  const nameText = 'Jhonn Michael Bretaña';
  const nameChars = [...nameText];

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setTypedName('');
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
    const link = document.createElement('a');
    link.href = VC;
    link.download = 'Bretaña, Jhonn Michael B CV';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className='min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-center relative px-4 md:px-10 overflow-hidden'>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <div className='flex flex-col md:flex-row justify-between items-center relative min-h-[90vh] pt-20'>
        {/* Text Content */}
        <div className='space-y-8 z-10 md:w-1/2 text-left'>
          <div className="space-y-2">
            <h3 className='text-2xl font-semibold text-gray-600 animate-fadeIn'>Hello, I'm</h3>
            <h1 className='text-7xl md:text-8xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent animate-slideUp min-h-[3rem]'>
              {typedName}
              <span className={`border-r-2 border-purple-400 ml-1 ${typedName.length === nameChars.length ? 'animate-pulse' : ''}`}></span>
            </h1>
            <h2 className='text-4xl md:text-5xl text-gray-800 animate-slideUp delay-200 font-medium'>
              Aspiring Front-End Web Developer
            </h2>
          </div>
          
          <p className='text-xl text-gray-600 max-w-2xl animate-fadeIn delay-300 leading-relaxed'>
            A passionate third-year student dedicated to creating beautiful and functional web experiences
          </p>

          
        </div>

        {/* Profile Image Container */}
        <div className={`relative md:w-1/2 mt-10 md:mt-0 transition-all duration-1000 ease-out ${
          scrollPosition > 100 ? 'opacity-0 scale-75 translate-y-[-100vh]' : 'opacity-100 scale-100 translate-y-0'
        }`}>
          <div className='relative w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] mx-auto animate-float'>
            {/* Decorative Elements */}
            <div className='absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-3xl animate-pulse'></div>
            <div className='absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full animate-spin-slow'></div>
            
            {/* Main Image */}
            <div className='relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl transform hover:scale-105 transition-transform duration-500'>
              <img 
                src={Picture} 
                alt="Jhonn Michael Bretana" 
                className='w-full h-full object-cover object-center'
              />
            </div>

            {/* Floating Elements */}
            <div className='absolute -top-4 -right-4 w-20 h-20 bg-yellow-400/30 rounded-full blur-xl animate-float'></div>
            <div className='absolute -bottom-4 -left-4 w-20 h-20 bg-blue-400/30 rounded-full blur-xl animate-float-delayed'></div>
          </div>
        </div>
      </div>

      {/* Scroll Arrow Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-500 ${
        scrollPosition > 100 ? 'opacity-0' : 'opacity-100'
      }`}>
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
  )
}

