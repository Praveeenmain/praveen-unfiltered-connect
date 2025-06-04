
import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingContactButton = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToContact}
      className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary/90 text-white p-4 rounded-full shadow-2xl hover:shadow-primary/20 transform transition-all duration-300 hover:scale-110 animate-pulse-glow"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};

export default FloatingContactButton;
