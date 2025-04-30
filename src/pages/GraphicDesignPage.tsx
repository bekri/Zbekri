
import React from 'react';
import PageHeader from '@/components/PageHeader';
import ProjectCard from '@/components/ProjectCard';

const GraphicDesignPage = () => {
  const projects = [
    {
      title: 'Brand Identity System',
      description: 'Complete visual identity including logo, color palette, and brand guidelines.',
      image: '/placeholder.svg',
      tools: ['Photoshop', 'Illustrator', 'Canva']
    },
    {
      title: 'Marketing Campaign Visuals',
      description: 'Series of digital ads and social media visuals for product launch.',
      image: '/placeholder.svg',
      tools: ['Photoshop', 'Canva']
    },
    {
      title: 'Event Promotion Materials',
      description: 'Posters, banners, and digital assets for tech conference.',
      image: '/placeholder.svg',
      tools: ['Photoshop', 'InDesign']
    },
    {
      title: 'Product Packaging Design',
      description: 'Minimalist eco-friendly packaging concept with emphasis on sustainability.',
      image: '/placeholder.svg',
      tools: ['Illustrator', 'Photoshop']
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Graphic Design" 
        description="Creating visual solutions that communicate ideas and messages through typography, images, and colors. Specialized in branding, digital marketing assets, and print designs." 
      />
      
      <section className="container py-12">
        <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
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
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">My Design Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="futuristic-card">
              <div className="w-12 h-12 rounded-full bg-futuristic-blue/10 flex items-center justify-center mb-4">
                <span className="text-futuristic-blue font-bold">01</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Research</h3>
              <p className="text-sm text-muted-foreground">Understanding the brand, audience, and objectives to inform design decisions.</p>
            </div>
            <div className="futuristic-card">
              <div className="w-12 h-12 rounded-full bg-futuristic-purple/10 flex items-center justify-center mb-4">
                <span className="text-futuristic-purple font-bold">02</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Conceptualize</h3>
              <p className="text-sm text-muted-foreground">Brainstorming ideas and creating initial sketches to visualize possibilities.</p>
            </div>
            <div className="futuristic-card">
              <div className="w-12 h-12 rounded-full bg-futuristic-neon/10 flex items-center justify-center mb-4">
                <span className="text-futuristic-neon font-bold">03</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Execute</h3>
              <p className="text-sm text-muted-foreground">Bringing concepts to life with precision, creativity, and attention to detail.</p>
            </div>
            <div className="futuristic-card">
              <div className="w-12 h-12 rounded-full bg-futuristic-blue/10 flex items-center justify-center mb-4">
                <span className="text-futuristic-blue font-bold">04</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Refine</h3>
              <p className="text-sm text-muted-foreground">Iterating and perfecting designs based on feedback and project goals.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GraphicDesignPage;
