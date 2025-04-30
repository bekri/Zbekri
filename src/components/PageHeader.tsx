
import React from 'react';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
  backgroundImage?: string;
}

const PageHeader = ({
  title,
  description,
  className,
  backgroundImage
}: PageHeaderProps) => {
  return (
    <div 
      className={cn(
        "relative py-20 md:py-32 overflow-hidden",
        className
      )}
    >
      {backgroundImage && (
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent z-0"></div>
      <div className="absolute inset-0 grid-bg opacity-10 z-0"></div>
      
      <div className="container relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span className="text-futuristic-blue animate-glow">{title}</span>
        </h1>
        {description && (
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
