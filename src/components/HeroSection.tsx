
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pb-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-gradient z-0"></div>
      <div className="absolute inset-0 grid-bg opacity-10 z-0"></div>
      
      {/* Main Content */}
      <div className="container relative z-10 mt-20 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="text-sm py-1 px-3 rounded-full border border-futuristic-blue/20 bg-futuristic-blue/5 text-futuristic-blue">EN</span>
                <span className="text-sm py-1 px-3 rounded-full border border-futuristic-purple/20 bg-futuristic-purple/5 text-futuristic-purple">FR</span>
                <span className="text-sm py-1 px-3 rounded-full border border-futuristic-neon/20 bg-futuristic-neon/5 text-futuristic-neon">AR</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block">Hi, I'm</span>
                <span className="text-futuristic-blue animate-glow">Zakariae Bekri</span>
              </h1>
              
              <p className="text-xl md:text-2xl font-light text-muted-foreground leading-relaxed">
                Creative designer & developer crafting digital experiences across multiple disciplines
              </p>
              
              <p className="text-lg italic text-muted-foreground border-l-4 border-futuristic-blue/30 pl-4">
                "Bridging imagination and technology to create solutions that inspire."
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild className="bg-futuristic-blue hover:bg-futuristic-blue/80 font-medium text-white">
                  <Link to="/contact">
                    Get In Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild className="border-futuristic-blue/30 text-futuristic-blue hover:bg-futuristic-blue/10">
                  <Link to="/web-development">
                    View Projects
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full border-2 border-futuristic-blue/10 animate-pulse"></div>
              <div className="absolute inset-4 rounded-full border-2 border-futuristic-purple/20"></div>
              <div className="absolute inset-8 rounded-full border-2 border-futuristic-neon/10"></div>
              <div className="absolute inset-0 flex items-center justify-center p-10">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-futuristic-darkPurple via-futuristic-purple/20 to-futuristic-blue/20 backdrop-blur-sm shadow-xl border border-white/5 flex items-center justify-center">
                  <div className="text-center animate-float">
                    <span className="block text-6xl mb-3">ZB</span>
                    <span className="text-sm tracking-widest uppercase text-muted-foreground">Portfolio</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Quick Access Buttons - Now moved below introduction content */}
      <div className="container relative z-10 mt-16 mb-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-4">
          <Link to="/graphic-design" className="futuristic-card aspect-square flex flex-col items-center justify-center hover:bg-futuristic-blue/5 hover:scale-105 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-futuristic-blue mb-3"><path d="M8.7 4H4a2 2 0 0 0-2 2v4.7" /><path d="M20 11.5V7a2 2 0 0 0-2-2h-1.5" /><path d="M4 20h4.7" /><path d="M15.3 20H20a2 2 0 0 0 2-2v-4.7" /><circle cx="12" cy="12" r="3" /><path d="M16.5 7.5v0" /><path d="M7.5 7.5v0" /><path d="M7.5 16.5v0" /><path d="M16.5 16.5v0" /></svg>
            <span className="text-xs font-medium">Graphic Design</span>
          </Link>
          <Link to="/3d-modeling" className="futuristic-card aspect-square flex flex-col items-center justify-center hover:bg-futuristic-purple/5 hover:scale-105 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-futuristic-purple mb-3"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
            <span className="text-xs font-medium">3D Modeling</span>
          </Link>
          <Link to="/web-development" className="futuristic-card aspect-square flex flex-col items-center justify-center hover:bg-futuristic-blue/5 hover:scale-105 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-futuristic-blue mb-3"><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></svg>
            <span className="text-xs font-medium">Web Dev</span>
          </Link>
          <Link to="/game-development" className="futuristic-card aspect-square flex flex-col items-center justify-center hover:bg-futuristic-neon/5 hover:scale-105 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-futuristic-neon mb-3"><path d="M6 11h4a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1Z" /><path d="M15 10h3a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1Z" /><path d="M4 16h3a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1Z" /><path d="M14 18h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1Z" /><path d="M9 14.2a4 4 0 1 0 0 7.6c4.6 0 9-1.5 9-3.8s-4.4-3.8-9-3.8" /></svg>
            <span className="text-xs font-medium">Game Dev</span>
          </Link>
          <Link to="/digital-art" className="futuristic-card aspect-square flex flex-col items-center justify-center hover:bg-futuristic-purple/5 hover:scale-105 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-futuristic-purple mb-3"><path d="M12 19c0-4.2-2.8-7-7-7m14 0c-4.2 0-7 2.8-7 7M12 5c0 4.2 2.8 7 7 7m-14 0c4.2 0 7-2.8 7-7" /></svg>
            <span className="text-xs font-medium">Digital Art</span>
          </Link>
          <a href="#contact" className="futuristic-card aspect-square flex flex-col items-center justify-center hover:bg-futuristic-blue/5 hover:scale-105 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-futuristic-blue mb-3"><path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" /><polyline points="15,9 18,9 18,11" /><path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0" /><line x1="6" x2="7" y1="10" y2="10" /></svg>
            <span className="text-xs font-medium">Contact</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
