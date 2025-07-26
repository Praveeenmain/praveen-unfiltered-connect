
import React from 'react';
import { Youtube, Instagram, Linkedin } from 'lucide-react';

const SocialLinks = () => {
  const links = [
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@praveenunfiltered-11',
      icon: Youtube,
      color: 'hover:bg-red-600',
      description: 'Subscribe to my channel'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/praveenbuilds',
      icon: Instagram,
      color: 'hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600',
      description: 'Follow my journey'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kasiralla-praveenkumar-b201a9241/',
      icon: Linkedin,
      color: 'hover:bg-blue-600',
      description: 'Connect professionally'
    }
  ];

  return (
    <section className="space-y-6 animate-on-scroll">
      <h2 className="text-2xl md:text-3xl font-semibold text-center">
        Let's Connect
      </h2>
      
      <div className="grid gap-4 max-w-md mx-auto">
        {links.map((link, index) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group glass-card p-4 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${link.color} hover:text-white`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-primary/20 rounded-xl group-hover:bg-white/20 transition-colors duration-300">
                <link.icon className="w-6 h-6" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-semibold text-lg">{link.name}</h3>
                <p className="text-sm text-muted-foreground group-hover:text-white/80 transition-colors duration-300">
                  {link.description}
                </p>
              </div>
              <div className="transform group-hover:translate-x-1 transition-transform duration-300">
                →
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SocialLinks;
