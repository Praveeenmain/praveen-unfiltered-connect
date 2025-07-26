import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Play, Calendar, Users, Eye } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const YouTubePlaylist = () => {
  useScrollAnimation();

  const playlistInfo = {
    title: "My YouTube Playlist",
    description: "A curated collection of videos showcasing my journey, tutorials, and insights in web development and technology.",
    playlistUrl: "https://www.youtube.com/playlist?list=PLwv-y3O0k0QebQALKf5v0C5kJEhMfQbJh",
    embedUrl: "https://www.youtube.com/embed/videoseries?list=PLwv-y3O0k0QebQALKf5v0C5kJEhMfQbJh"
  };



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
            <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto">
              <Play className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold gradient-text">
              YouTube Playlist
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              {playlistInfo.description}
            </p>

          </section>

          {/* YouTube Embed Section */}
          <section className="space-y-8 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-center">Watch the Playlist</h2>
            <div className="glass-card p-6 rounded-2xl">
              <div className="aspect-video w-full rounded-xl overflow-hidden">
                <iframe
                  src={playlistInfo.embedUrl}
                  title="YouTube Playlist"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </section>



          {/* Call to Action */}
          <section className="text-center space-y-6 animate-on-scroll">
            <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Subscribe & Stay Updated</h2>
              <p className="text-muted-foreground mb-6">
                Don't miss out on new videos! Subscribe to my channel for the latest tutorials, tips, and insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={playlistInfo.playlistUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                >
                  <span>Watch on YouTube</span>
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

export default YouTubePlaylist; 