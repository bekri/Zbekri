
import React from 'react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tools?: string[];
  link?: string;
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  tools,
  link,
  className
}: ProjectCardProps) => {
  const card = (
    <div className={cn(
      "futuristic-card group hover:shadow-lg hover:shadow-futuristic-blue/5 transition-all duration-300",
      className
    )}>
      <div className="relative overflow-hidden rounded mb-5 aspect-video">
        <div className="absolute inset-0 bg-futuristic-blue/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
          <span className="text-white text-sm font-medium px-4 py-2 rounded-full bg-black/30 backdrop-blur-sm">
            View Project
          </span>
        </div>
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-futuristic-blue transition-colors">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{description}</p>
      {tools && tools.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto">
          {tools.map((tool, index) => (
            <span 
              key={index}
              className="text-xs py-1 px-2 rounded-full border border-futuristic-blue/10 bg-futuristic-blue/5 text-futuristic-blue"
            >
              {tool}
            </span>
          ))}
        </div>
      )}
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        {card}
      </a>
    );
  }

  return card;
};

export default ProjectCard;
