
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Github, Menu, X } from 'lucide-react';

const ResponsiveNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'College Projects', path: '/college-projects' },
    { name: '100 Days Challenge', path: '/100-days-challenge' },
    { name: 'Link in Bio', path: '/link-in-bio' },
  ];

  return (
    <nav className="relative z-20 p-6">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold text-2xl gradient-text">Praveen</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              {item.name}
            </Link>
          ))}
          <a 
            href="https://github.com/Praveeenmain" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border mt-2 rounded-lg mx-6">
          <div className="flex flex-col space-y-4 p-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
              >
                {item.name}
              </Link>
            ))}
            <a 
              href="https://github.com/Praveeenmain" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-300 py-2"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default ResponsiveNavbar;
