
import React from 'react';
import ProfileSection from '@/components/ProfileSection';
import SocialLinks from '@/components/SocialLinks';
import ContactForm from '@/components/ContactForm';
import FloatingContactButton from '@/components/FloatingContactButton';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Index = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <main className="container mx-auto px-4 py-8 space-y-16 max-w-4xl">
          {/* Profile Section */}
          <ProfileSection />

          {/* Social Links */}
          <SocialLinks />

          {/* Contact Form */}
          <ContactForm />
        </main>

        {/* Footer */}
        <footer className="text-center py-8 text-muted-foreground animate-on-scroll">
          <p className="text-sm">
            © 2024 Praveen. Made with ❤️ and creativity.
          </p>
        </footer>
      </div>

      {/* Floating Contact Button */}
      <FloatingContactButton />
    </div>
  );
};

export default Index;
