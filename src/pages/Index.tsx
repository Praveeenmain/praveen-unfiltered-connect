
import React from 'react';
import { Link } from 'react-router-dom';
import ProfileSection from '@/components/ProfileSection';
import SocialLinks from '@/components/SocialLinks';
import ContactForm from '@/components/ContactForm';
import FloatingContactButton from '@/components/FloatingContactButton';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ExternalLink, Github } from 'lucide-react';

const Index = () => {
  useScrollAnimation();

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
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
            Portfolio
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
        <main className="container mx-auto px-4 py-8 space-y-16 max-w-4xl">
          {/* Profile Section */}
          <ProfileSection />

          {/* Portfolio Link */}
          <section className="text-center animate-on-scroll">
            <Link 
              to="/"
              className="inline-flex items-center space-x-2 glass-card p-4 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-primary/10 group"
            >
              <div className="p-3 bg-primary/20 rounded-xl group-hover:bg-primary/30 transition-colors duration-300">
                <ExternalLink className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-semibold text-lg">View My Portfolio</h3>
                <p className="text-sm text-muted-foreground group-hover:text-white/80 transition-colors duration-300">
                  Explore my projects and services
                </p>
              </div>
              <div className="transform group-hover:translate-x-1 transition-transform duration-300">
                →
              </div>
            </Link>
          </section>

          {/* Social Links */}
          <SocialLinks />

          {/* Contact Form */}
          <ContactForm />
        </main>

        {/* Footer */}
        <footer className="text-center py-8 text-muted-foreground animate-on-scroll">
          <p className="text-sm">
            © 2025 Praveen. All Rights Reserved.
          </p>
        </footer>
      </div>

      {/* Floating Contact Button */}
      <FloatingContactButton />
    </div>
  );
};

export default Index;
