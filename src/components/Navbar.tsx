
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Graphic Design', path: '/graphic-design' },
    { name: '3D Modeling', path: '/3d-modeling' },
    { name: 'Web Development', path: '/web-development' },
    { name: 'Game Development', path: '/game-development' },
    { name: 'Digital Art', path: '/digital-art' },
  ];
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md",
        isScrolled 
          ? "bg-background/80 shadow-md shadow-futuristic-blue/10 py-4" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold font-orbitron tracking-wider text-futuristic-blue flex items-center">
          <span className="animate-glow">ZB</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "nav-link",
                location.pathname === link.path && "active"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="block md:hidden text-foreground p-2"
        >
          <div className="w-6 flex flex-col gap-1">
            <span className={cn("block w-full h-0.5 bg-futuristic-blue transition-all duration-300", 
              mobileMenuOpen && "transform rotate-45 translate-y-1.5")}></span>
            <span className={cn("block w-full h-0.5 bg-futuristic-blue transition-all duration-300", 
              mobileMenuOpen && "opacity-0")}></span>
            <span className={cn("block w-full h-0.5 bg-futuristic-blue transition-all duration-300", 
              mobileMenuOpen && "transform -rotate-45 -translate-y-1.5")}></span>
          </div>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={cn(
        "absolute top-full left-0 w-full bg-background/95 backdrop-blur-md shadow-lg shadow-futuristic-blue/10 transition-all duration-300 overflow-hidden",
        mobileMenuOpen ? "max-h-96 py-4" : "max-h-0"
      )}>
        <nav className="container flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "py-3 border-b border-futuristic-blue/10 last:border-b-0",
                location.pathname === link.path ? "text-futuristic-blue" : "text-foreground"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
