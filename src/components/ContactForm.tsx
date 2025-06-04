
import React from 'react';
import { Mail } from 'lucide-react';

const ContactForm = () => {
  return (
    <section id="contact" className="space-y-8 animate-on-scroll">
      <div className="text-center space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Get In Touch
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Have a project in mind or just want to chat? Reach out via email!
        </p>
      </div>

      <div className="max-w-md mx-auto">
        <div className="glass-card p-6 rounded-2xl space-y-4">
          <h3 className="text-xl font-semibold text-center">Contact Info</h3>
          
          <div className="flex items-center justify-center space-x-3">
            <div className="p-2 bg-primary/20 rounded-lg">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <a 
                href="mailto:praveenunflitered96@gmail.com"
                className="text-primary hover:underline"
              >
                praveenunflitered96@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
