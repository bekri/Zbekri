
import React from 'react';
import PageHeader from '@/components/PageHeader';
import ProjectCard from '@/components/ProjectCard';

const GameDevelopmentPage = () => {
  const projects = [
    {
      title: 'Galaxy Racer',
      description: 'Fast-paced space racing game with advanced vehicle physics and multiplayer support.',
      image: '/placeholder.svg',
      tools: ['Unity', 'C#', 'Blender']
    },
    {
      title: 'Mystic Dungeon',
      description: 'Roguelike dungeon crawler with procedurally generated levels and strategic combat.',
      image: '/placeholder.svg',
      tools: ['Unity', 'C#', 'Photoshop']
    },
    {
      title: 'Puzzle Chronicles',
      description: 'Mobile puzzle game featuring unique mechanics and progressive difficulty.',
      image: '/placeholder.svg',
      tools: ['Unity', 'C#', 'Illustrator']
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Game Development" 
        description="Creating interactive gaming experiences from concept to execution. Specializing in Unity development with a focus on engaging gameplay and immersive worlds." 
      />
      
      <section className="container py-12">
        <h2 className="text-2xl font-bold mb-6">Game Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tools={project.tools}
            />
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-6">Game Development Skills</h2>
            <div className="futuristic-card">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-futuristic-blue/10 flex items-center justify-center mr-3 shrink-0">
                    <span className="text-futuristic-blue text-lg">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Game Logic Programming</h4>
                    <p className="text-sm text-muted-foreground">Implementing core game mechanics and systems</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-futuristic-purple/10 flex items-center justify-center mr-3 shrink-0">
                    <span className="text-futuristic-purple text-lg">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium">UI/UX Design for Games</h4>
                    <p className="text-sm text-muted-foreground">Creating intuitive interfaces and player experiences</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-futuristic-neon/10 flex items-center justify-center mr-3 shrink-0">
                    <span className="text-futuristic-neon text-lg">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Level Design</h4>
                    <p className="text-sm text-muted-foreground">Crafting engaging and balanced game environments</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-futuristic-blue/10 flex items-center justify-center mr-3 shrink-0">
                    <span className="text-futuristic-blue text-lg">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Game Asset Creation</h4>
                    <p className="text-sm text-muted-foreground">Developing optimized 3D and 2D assets for games</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Development Process</h2>
            <div className="space-y-4">
              <div className="futuristic-card">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-futuristic-blue/10 flex items-center justify-center mr-4">
                    <span className="font-bold text-futuristic-blue">01</span>
                  </div>
                  <h3 className="text-lg font-semibold">Concept & Design</h3>
                </div>
                <p className="text-sm text-muted-foreground ml-14">Defining core mechanics, gameplay loops, and visual style</p>
              </div>
              
              <div className="futuristic-card">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-futuristic-purple/10 flex items-center justify-center mr-4">
                    <span className="font-bold text-futuristic-purple">02</span>
                  </div>
                  <h3 className="text-lg font-semibold">Prototyping</h3>
                </div>
                <p className="text-sm text-muted-foreground ml-14">Building playable prototypes to test and refine mechanics</p>
              </div>
              
              <div className="futuristic-card">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-futuristic-neon/10 flex items-center justify-center mr-4">
                    <span className="font-bold text-futuristic-neon">03</span>
                  </div>
                  <h3 className="text-lg font-semibold">Production</h3>
                </div>
                <p className="text-sm text-muted-foreground ml-14">Full development of game systems, levels, and assets</p>
              </div>
              
              <div className="futuristic-card">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-futuristic-blue/10 flex items-center justify-center mr-4">
                    <span className="font-bold text-futuristic-blue">04</span>
                  </div>
                  <h3 className="text-lg font-semibold">Polish & Testing</h3>
                </div>
                <p className="text-sm text-muted-foreground ml-14">Refining gameplay, fixing bugs, and optimizing performance</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GameDevelopmentPage;
