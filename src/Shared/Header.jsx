import React, { useState, useEffect } from 'react';

/**
 * Header Component
 * A responsive navigation header with mobile menu support and scroll-based effects
 * Features:
 * - Transparent to glassmorphic transition on scroll
 * - Active section tracking
 * - Mobile-responsive design
 * - Animated navigation items
 * - Gradient effects and modern UI elements
 */
function Header() {
  // State management for mobile menu, scroll effects, and active section
  const [menuOpen, setMenuOpen] = useState(false);        // Controls mobile menu visibility
  const [hasShadow, setHasShadow] = useState(false);      // Controls header shadow on scroll
  const [activeSection, setActiveSection] = useState('home'); // Tracks current active section
  const [isHovered, setIsHovered] = useState(null);       // Tracks hovered navigation item

  // Smooth scroll handler
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 80; // Adjust this value based on your header height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Scroll event handler to update header appearance and active section
  useEffect(() => {
    const handleScroll = () => {
      // Add shadow when scrolled past 10px
      setHasShadow(window.scrollY > 10);
      
      // Find the current section in view
      const sections = ['home', 'about', 'project', 'others'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      // Update active section if found
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    // Add and remove scroll event listener
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items array
  const navItems = ['Home', 'About', 'Project', 'Others'];

  return (
    // Header container with dynamic background and shadow
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500
        bg-white/90 backdrop-blur-lg shadow-lg py-3
        md:${hasShadow ? 'bg-white/90 backdrop-blur-lg shadow-lg py-3' : 'bg-transparent py-5'}
      `}
    >
      <nav className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo with gradient and hover effects */}
          <a 
            href="#home" 
            onClick={(e) => handleSmoothScroll(e, 'home')}
            className="group relative text-2xl font-bold"
          >
            <span className="relative z-10 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 bg-clip-text text-transparent bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500">
              BretzPort
            </span>
            <span className="text-black group-hover:scale-110 transition-transform duration-300">.</span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-500 group-hover:w-full transition-all duration-300"></div>
          </a>

          {/* Desktop Navigation Menu */}
          <ul className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const itemLower = item.toLowerCase();
              const isActive = activeSection === itemLower;
              
              return (
                <li key={item}>
                  <a
                    href={`#${itemLower}`}
                    onClick={(e) => handleSmoothScroll(e, itemLower)}
                    onMouseEnter={() => setIsHovered(itemLower)}
                    onMouseLeave={() => setIsHovered(null)}
                    className={`relative px-5 py-2.5 text-sm font-medium transition-all duration-300 rounded-full
                      ${isActive 
                        ? 'text-white' 
                        : 'text-gray-600 hover:text-black'
                      }`}
                  >
                    <span className="relative z-10">{item}</span>
                    
                    {/* Background effect for hover and active states */}
                    <div className={`absolute inset-0 rounded-xl transition-all duration-300
                      ${isActive 
                        ? 'bg-black scale-100' 
                        : isHovered === itemLower
                          ? 'bg-gray-100 scale-100'
                          : 'scale-0'
                      }`}
                    ></div>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden relative w-10 h-10 focus:outline-none group"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {/* Animated hamburger menu lines */}
            <div className={`absolute w-6 h-0.5 bg-black transform transition-all duration-300 
              ${menuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}></div>
            <div className={`absolute w-6 h-0.5 bg-black transform transition-all duration-300 
              ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
            <div className={`absolute w-6 h-0.5 bg-black transform transition-all duration-300 
              ${menuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}></div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden
          ${menuOpen ? 'max-h-60 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <ul className="flex flex-col space-y-2 py-2">
            {navItems.map((item) => {
              const itemLower = item.toLowerCase();
              const isActive = activeSection === itemLower;
              
              return (
                <li key={item}>
                  <a
                    href={`#${itemLower}`}
                    onClick={(e) => {
                      handleSmoothScroll(e, itemLower);
                      setMenuOpen(false);
                    }}
                    className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300
                      ${isActive 
                        ? 'text-white bg-gradient-to-r from-purple-600 to-blue-500' 
                        : 'text-gray-600 hover:text-black hover:bg-gray-100'
                      }`}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
