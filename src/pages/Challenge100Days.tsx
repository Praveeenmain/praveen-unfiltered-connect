
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, Code, Zap } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Challenge100Days = () => {
  useScrollAnimation();

  const challengeProjects = [
    {
      id: 1,
      title: "Modern Dashboard",
      description: "A sleek and responsive admin dashboard with dark/light theme toggle and real-time data visualization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500",
      day: 1,
      technologies: ["React", "Tailwind CSS", "Chart.js"],
      link: "#",
      status: "completed"
    },
    {
      id: 2,
      title: "Weather App",
      description: "A beautiful weather application with location-based forecasts and animated weather icons.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500",
      day: 2,
      technologies: ["React", "OpenWeather API", "CSS3"],
      link: "#",
      status: "completed"
    },
    {
      id: 3,
      title: "E-commerce Landing",
      description: "A modern e-commerce landing page with smooth animations and mobile-first design approach.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500",
      day: 3,
      technologies: ["React", "Framer Motion", "Stripe"],
      link: "#",
      status: "in-progress"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 p-6">
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Portfolio</span>
        </Link>
      </nav>

      {/* Main Content */}
      <div className="relative z-10">
        <main className="container mx-auto px-4 py-8 space-y-16 max-w-6xl">
          
          {/* Hero Section */}
          <section className="text-center space-y-6 animate-on-scroll">
            <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto">
              <Code className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text">
              100 Websites 100 Days
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              An ambitious challenge to create 100 unique websites in 100 days, exploring new technologies and design patterns.
            </p>
            <div className="flex items-center justify-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">3</div>
                <div className="text-sm text-muted-foreground">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">97</div>
                <div className="text-sm text-muted-foreground">Remaining</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">3%</div>
                <div className="text-sm text-muted-foreground">Progress</div>
              </div>
            </div>
          </section>

          {/* Challenge Info */}
          <section className="space-y-8 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-center">Challenge Rules</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass-card p-6 rounded-2xl text-center space-y-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Daily Commitment</h3>
                <p className="text-muted-foreground text-sm">
                  Build and deploy one complete website every single day for 100 consecutive days.
                </p>
              </div>
              <div className="glass-card p-6 rounded-2xl text-center space-y-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Innovation Focus</h3>
                <p className="text-muted-foreground text-sm">
                  Each website must explore different technologies, design patterns, or creative concepts.
                </p>
              </div>
              <div className="glass-card p-6 rounded-2xl text-center space-y-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Open Source</h3>
                <p className="text-muted-foreground text-sm">
                  All code is made available on GitHub for learning and community contribution.
                </p>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="space-y-8 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-center">Recent Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {challengeProjects.map((project, index) => (
                <div 
                  key={project.id}
                  className="glass-card rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Day {project.day}
                    </div>
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${
                      project.status === 'completed' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-yellow-500 text-black'
                    }`}>
                      {project.status === 'completed' ? 'Done' : 'In Progress'}
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-muted-foreground text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-2 py-1 bg-primary/20 text-primary rounded-md text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.link}
                      className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
                    >
                      <span>View Project</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center space-y-6 animate-on-scroll">
            <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Follow the Journey</h2>
              <p className="text-muted-foreground mb-6">
                Stay updated with daily progress, code insights, and design decisions throughout this incredible challenge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://github.com/Praveeenmain" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                >
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <Link 
                  to="/"
                  className="inline-flex items-center space-x-2 bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                >
                  <span>Back to Portfolio</span>
                </Link>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="text-center py-8 text-muted-foreground animate-on-scroll">
          <p className="text-sm">
            © 2025 Praveen. All Rights Reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Challenge100Days;
