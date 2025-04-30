
import React from 'react';
import PageHeader from '@/components/PageHeader';
import ProjectCard from '@/components/ProjectCard';

const WebDevelopmentPage = () => {
  const projects = [
    {
      title: 'TravelSphere.io',
      description: 'Interactive travel planning platform with personalized recommendations and itinerary creation.',
      image: '/placeholder.svg',
      tools: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      title: 'Manga Website',
      description: 'Online platform for manga enthusiasts with reading tracking and community features.',
      image: '/placeholder.svg',
      tools: ['HTML', 'CSS', 'JavaScript', 'Django'],
      link: '#'
    },
    {
      title: 'E-Commerce Store',
      description: 'Fully responsive e-commerce website with product catalog, cart functionality, and payment integration.',
      image: '/placeholder.svg',
      tools: ['WordPress', 'WooCommerce', 'Custom PHP'],
      link: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing creative work and professional experience.',
      image: '/placeholder.svg',
      tools: ['React', 'TailwindCSS', 'Framer Motion'],
      link: '#'
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Web Development" 
        description="Building responsive, user-friendly websites and applications. Experienced in both frontend and backend development with a focus on clean code and modern frameworks." 
      />
      
      <section className="container py-12">
        <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tools={project.tools}
              link={project.link}
            />
          ))}
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="futuristic-card">
              <h3 className="text-lg font-bold mb-4 text-futuristic-blue">Frontend</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="px-3 py-2 rounded bg-futuristic-blue/5 text-center">HTML5</div>
                <div className="px-3 py-2 rounded bg-futuristic-blue/5 text-center">CSS3</div>
                <div className="px-3 py-2 rounded bg-futuristic-blue/5 text-center">JavaScript</div>
                <div className="px-3 py-2 rounded bg-futuristic-blue/5 text-center">React</div>
                <div className="px-3 py-2 rounded bg-futuristic-blue/5 text-center">TailwindCSS</div>
                <div className="px-3 py-2 rounded bg-futuristic-blue/5 text-center">Bootstrap</div>
              </div>
            </div>
            
            <div className="futuristic-card">
              <h3 className="text-lg font-bold mb-4 text-futuristic-purple">Backend</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="px-3 py-2 rounded bg-futuristic-purple/5 text-center">Django</div>
                <div className="px-3 py-2 rounded bg-futuristic-purple/5 text-center">Node.js</div>
                <div className="px-3 py-2 rounded bg-futuristic-purple/5 text-center">Express</div>
                <div className="px-3 py-2 rounded bg-futuristic-purple/5 text-center">Flask</div>
                <div className="px-3 py-2 rounded bg-futuristic-purple/5 text-center">PHP</div>
                <div className="px-3 py-2 rounded bg-futuristic-purple/5 text-center">WordPress</div>
              </div>
            </div>
            
            <div className="futuristic-card">
              <h3 className="text-lg font-bold mb-4 text-futuristic-neon">Database & Tools</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="px-3 py-2 rounded bg-futuristic-neon/5 text-center">MySQL</div>
                <div className="px-3 py-2 rounded bg-futuristic-neon/5 text-center">MongoDB</div>
                <div className="px-3 py-2 rounded bg-futuristic-neon/5 text-center">Git</div>
                <div className="px-3 py-2 rounded bg-futuristic-neon/5 text-center">Docker</div>
                <div className="px-3 py-2 rounded bg-futuristic-neon/5 text-center">AWS</div>
                <div className="px-3 py-2 rounded bg-futuristic-neon/5 text-center">Netlify</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopmentPage;
