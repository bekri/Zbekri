
import React from 'react';
import PageHeader from '@/components/PageHeader';
import ProjectCard from '@/components/ProjectCard';

const ThreeDModelingPage = () => {
  const projects = [
    {
      title: 'Sci-Fi Character Model',
      description: 'Futuristic soldier character model with detailed armor and textures.',
      image: '/placeholder.svg',
      tools: ['Blender', 'Substance Painter']
    },
    {
      title: 'Architectural Visualization',
      description: 'Detailed 3D visualization of modern building with interior and exterior views.',
      image: '/placeholder.svg',
      tools: ['Blender', 'VRay']
    },
    {
      title: 'Game Environment Assets',
      description: 'Low-poly game-ready environment assets optimized for real-time rendering.',
      image: '/placeholder.svg',
      tools: ['Blender', 'Unity']
    },
    {
      title: 'Product Visualization',
      description: 'Photorealistic 3D product renders for e-commerce and marketing.',
      image: '/placeholder.svg',
      tools: ['Blender', 'Photoshop']
    }
  ];

  return (
    <div>
      <PageHeader 
        title="3D Modeling" 
        description="Building digital three-dimensional representations of objects or environments. Focused on creating game assets, product visualizations, and architectural models." 
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
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-6">Skills & Tools</h2>
            <div className="space-y-4">
              <div className="futuristic-card">
                <h3 className="text-lg font-semibold text-futuristic-blue mb-4">Software Proficiency</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Blender</span>
                      <span className="text-sm text-futuristic-blue">90%</span>
                    </div>
                    <div className="h-2 bg-muted rounded">
                      <div className="h-full w-[90%] bg-futuristic-blue rounded"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Substance Painter</span>
                      <span className="text-sm text-futuristic-purple">80%</span>
                    </div>
                    <div className="h-2 bg-muted rounded">
                      <div className="h-full w-[80%] bg-futuristic-purple rounded"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Autodesk Maya</span>
                      <span className="text-sm text-futuristic-neon">65%</span>
                    </div>
                    <div className="h-2 bg-muted rounded">
                      <div className="h-full w-[65%] bg-futuristic-neon rounded"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Cinema 4D</span>
                      <span className="text-sm text-futuristic-blue">50%</span>
                    </div>
                    <div className="h-2 bg-muted rounded">
                      <div className="h-full w-[50%] bg-futuristic-blue rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Specializations</h2>
            <div className="space-y-4">
              <div className="futuristic-card">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-futuristic-blue/10 flex items-center justify-center mr-3 shrink-0">
                      <span className="text-futuristic-blue text-lg">✓</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Character Modeling</h4>
                      <p className="text-sm text-muted-foreground">Creating detailed characters for games and animations</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-futuristic-purple/10 flex items-center justify-center mr-3 shrink-0">
                      <span className="text-futuristic-purple text-lg">✓</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Environment Design</h4>
                      <p className="text-sm text-muted-foreground">Building immersive 3D environments and scenes</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-futuristic-neon/10 flex items-center justify-center mr-3 shrink-0">
                      <span className="text-futuristic-neon text-lg">✓</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Product Visualization</h4>
                      <p className="text-sm text-muted-foreground">Photorealistic renders of products for marketing</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-futuristic-blue/10 flex items-center justify-center mr-3 shrink-0">
                      <span className="text-futuristic-blue text-lg">✓</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Low-Poly Game Assets</h4>
                      <p className="text-sm text-muted-foreground">Optimized models for real-time game engines</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThreeDModelingPage;
