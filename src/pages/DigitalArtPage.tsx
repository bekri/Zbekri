
import React from 'react';
import PageHeader from '@/components/PageHeader';

const DigitalArtPage = () => {
  const artworks = [
    {
      title: 'Cyberpunk Portrait',
      thumbnail: '/placeholder.svg',
      description: 'Character concept with neon lighting and futuristic elements',
      tools: ['Clip Studio Paint', 'Photoshop']
    },
    {
      title: 'Fantasy Environment',
      thumbnail: '/placeholder.svg',
      description: 'Detailed environment painting of magical forest scene',
      tools: ['Photoshop']
    },
    {
      title: 'Sci-Fi Character Design',
      thumbnail: '/placeholder.svg',
      description: 'Original character concept for sci-fi universe',
      tools: ['Clip Studio Paint']
    },
    {
      title: 'Stylized Illustration',
      thumbnail: '/placeholder.svg',
      description: 'Colorful stylized illustration with ornate details',
      tools: ['Photoshop', 'Illustrator']
    },
    {
      title: 'Creature Design',
      thumbnail: '/placeholder.svg',
      description: 'Fantasy creature concept with anatomical details',
      tools: ['Photoshop']
    },
    {
      title: 'Abstract Digital Painting',
      thumbnail: '/placeholder.svg',
      description: 'Abstract composition exploring color and texture',
      tools: ['Clip Studio Paint', 'Photoshop']
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Digital Painting & Drawing" 
        description="Creating digital artworks ranging from illustrations to concept designs. Passionate about stylized art and character design with a distinct visual identity." 
      />
      
      <section className="container py-12">
        <h2 className="text-2xl font-bold mb-6">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artworks.map((artwork, index) => (
            <div key={index} className="futuristic-card group">
              <div className="relative rounded overflow-hidden mb-4 aspect-square">
                <img 
                  src={artwork.thumbnail} 
                  alt={artwork.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <h3 className="text-white font-medium mb-1">{artwork.title}</h3>
                    <p className="text-white/80 text-sm">{artwork.description}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {artwork.tools.map((tool, idx) => (
                  <span 
                    key={idx}
                    className="text-xs py-1 px-2 rounded-full border border-futuristic-purple/10 bg-futuristic-purple/5 text-futuristic-purple"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Art Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="futuristic-card aspect-square flex flex-col items-center justify-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-futuristic-blue/10 flex items-center justify-center mb-4">
                <span className="font-bold text-futuristic-blue text-lg">01</span>
              </div>
              <h3 className="font-semibold mb-2">Concept</h3>
              <p className="text-xs text-muted-foreground">Initial ideas and rough sketches</p>
            </div>
            
            <div className="futuristic-card aspect-square flex flex-col items-center justify-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-futuristic-purple/10 flex items-center justify-center mb-4">
                <span className="font-bold text-futuristic-purple text-lg">02</span>
              </div>
              <h3 className="font-semibold mb-2">Linework</h3>
              <p className="text-xs text-muted-foreground">Refined lines and composition</p>
            </div>
            
            <div className="futuristic-card aspect-square flex flex-col items-center justify-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-futuristic-neon/10 flex items-center justify-center mb-4">
                <span className="font-bold text-futuristic-neon text-lg">03</span>
              </div>
              <h3 className="font-semibold mb-2">Color</h3>
              <p className="text-xs text-muted-foreground">Base colors and tonal values</p>
            </div>
            
            <div className="futuristic-card aspect-square flex flex-col items-center justify-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-futuristic-blue/10 flex items-center justify-center mb-4">
                <span className="font-bold text-futuristic-blue text-lg">04</span>
              </div>
              <h3 className="font-semibold mb-2">Details</h3>
              <p className="text-xs text-muted-foreground">Final touches and refinements</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalArtPage;
