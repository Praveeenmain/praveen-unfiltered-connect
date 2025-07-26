
import React from 'react';

const ProfileSection = () => {
  return (
    <section className="text-center space-y-6 animate-on-scroll">
      <div className="relative inline-block">
        <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl transform transition-all duration-300 hover:scale-105 hover:border-primary/60 hover:shadow-primary/20">
          <img 
            src="/lovable-uploads/portfilo.jpeg"
            alt="Praveen"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center animate-pulse-glow">
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </div>
      </div>
      
      <div className="space-y-2">
        <h1 className="text-4xl md:text-6xl font-bold gradient-text">
          Praveen
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground font-medium">
          Freelancer | Content Creator
        </p>
      </div>
    </section>
  );
};

export default ProfileSection;
