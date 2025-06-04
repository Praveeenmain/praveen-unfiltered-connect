
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Github, Code, Palette, Smartphone, Wrench, Monitor, Bot, Camera } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Home = () => {
  useScrollAnimation();

  const projects = [
    {
      title: "Kafe Tirupati",
      description: "A modern website for a local café featuring online ordering capabilities and a dynamic menu system.",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500",
      link: "#"
    },
    {
      title: "Tirupati Cabs",
      description: "A transportation service website with booking functionality and route information.",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500",
      link: "#"
    },
    {
      title: "Vinod Constructions",
      description: "A corporate website for a construction company showcasing their projects and services.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500",
      link: "#"
    },
    {
      title: "Oasis Fitness Institute",
      description: "A comprehensive platform for a fitness center with class schedules and membership information.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500",
      link: "#"
    }
  ];

  const services = [
    {
      icon: Smartphone,
      title: "Responsive Website Development",
      description: "Custom websites that look and function flawlessly on all devices from mobile to desktop."
    },
    {
      icon: Bot,
      title: "AI Automations",
      description: "Intelligent automation solutions that streamline business processes and boost productivity."
    },
    {
      icon: Camera,
      title: "Thumbnail Design",
      description: "Eye-catching thumbnail designs that increase click-through rates and engagement."
    },
    {
      icon: Wrench,
      title: "Website Maintenance",
      description: "Regular updates, security patches, and performance optimizations to keep your site running smoothly."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Intuitive interfaces and seamless user experiences that engage visitors and boost conversions."
    },
    {
      icon: Monitor,
      title: "Custom Web Applications",
      description: "Tailored web applications that solve specific business problems and streamline operations."
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
      <nav className="relative z-10 p-6 flex justify-between items-center">
        <div className="font-bold text-2xl gradient-text">Praveen</div>
        <div className="flex space-x-6">
          <Link to="/college-projects" className="text-muted-foreground hover:text-primary transition-colors">
            College Projects
          </Link>
          <Link to="/link-in-bio" className="text-muted-foreground hover:text-primary transition-colors">
            Link in Bio
          </Link>
          <a 
            href="https://github.com/Praveeenmain" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10">
        <main className="container mx-auto px-4 py-8 space-y-16 max-w-6xl">
          
          {/* Hero Section */}
          <section className="text-center space-y-6 animate-on-scroll">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text">
              Hi, I'm Praveen
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              I build functional and elegant websites for businesses.
            </p>
            <div className="pt-4">
              <a 
                href="#projects" 
                className="inline-flex items-center space-x-2 bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                <span>VIEW MY WORK</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </section>

          {/* About Section */}
          <section className="space-y-8 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-center">About</h2>
            <div className="glass-card p-8 rounded-2xl space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate freelance web developer with expertise in creating responsive, user-friendly websites that deliver exceptional experiences.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a strong foundation in Web Development, React, and Node.js, I specialize in building responsive designs and writing clean, maintainable code that follows modern best practices.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I pride myself on delivering solutions that not only look great but also perform exceptionally well, ensuring that your online presence stands out from the competition.
              </p>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="space-y-8 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-center">Mission & Vision</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-card p-6 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4 text-primary">Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Deliver high-quality, responsive websites that help businesses grow. My mission is to create digital solutions that not only look visually appealing but also drive meaningful results for my clients.
                </p>
              </div>
              <div className="glass-card p-6 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4 text-primary">Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Become a trusted freelance developer known for reliability and creativity. I aim to build long-lasting relationships with clients by consistently delivering excellence and staying at the forefront of web development technologies.
                </p>
              </div>
            </div>
          </section>

          {/* 100 Websites 100 Days Section */}
          <section className="space-y-8 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-center">100 Websites 100 Days</h2>
            <div className="glass-card p-8 rounded-2xl text-center space-y-6">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <Code className="w-10 h-10 text-primary" />
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                An ambitious challenge to create 100 unique websites in 100 days, showcasing different design patterns, technologies, and creative solutions. Each project pushes the boundaries of web development and explores new possibilities.
              </p>
              <div className="pt-4">
                <a 
                  href="#" 
                  className="inline-flex items-center space-x-2 bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                >
                  <span>View Challenge Progress</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="space-y-8 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-center">Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={project.title}
                  className="glass-card rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
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

          {/* Services Section */}
          <section className="space-y-8 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-center">Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div 
                  key={service.title}
                  className="glass-card p-6 rounded-2xl space-y-4 transform transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="space-y-8 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-center">Contact</h2>
            <div className="glass-card p-8 rounded-2xl text-center space-y-6 max-w-md mx-auto">
              <p className="text-muted-foreground">
                Ready to start your next project? Reach out to me directly through any of the following channels.
              </p>
              <a 
                href="mailto:praveenunflitered96@gmail.com"
                className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors text-lg"
              >
                <span>praveenunflitered96@gmail.com</span>
              </a>
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

export default Home;
