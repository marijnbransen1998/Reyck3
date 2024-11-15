import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Music, Star, Sparkles } from 'lucide-react';

interface LatestReleaseProps {
  title: string;
  spotifyEmbedId: string;
}

const LatestRelease: React.FC<LatestReleaseProps> = ({
  title,
  spotifyEmbedId,
}) => {
  const titleRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(titleRef);

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Decorative elements */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        <Star className="w-8 h-8 text-secondary animate-pulse" />
        <Sparkles className="w-6 h-6 text-accent animate-pulse" style={{ animationDelay: '0.5s' }} />
        <Star className="w-8 h-8 text-secondary animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div 
        ref={titleRef}
        className={`relative bg-black/40 backdrop-blur-sm p-8 transform transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        {/* Background texture */}
        <div className="absolute inset-0 opacity-10 pointer-events-none noise-bg"></div>
        
        {/* Content */}
        <div className="relative">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Music className="w-10 h-10 text-secondary" />
              <h3 className="text-3xl font-bold text-white font-heading tracking-wider">{title}</h3>
            </div>
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-secondary/80 text-white">
              <Sparkles className="w-4 h-4 mr-2" />
              Nieuwste Release
            </span>
          </div>

          {/* Album art and Spotify embed with frame effect */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/20 transform rotate-1"></div>
              <div className="relative bg-black/60 p-4 transform -rotate-1 hover:rotate-0 transition-all duration-500">
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3M9S2ZF-fNDpUFnx4uBNv4jtg-tO_vKV5pQ&s"
                    alt={title}
                    className="w-full h-[352px] object-contain rounded-lg shadow-xl"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-secondary/20 transform -rotate-1"></div>
              <div className="relative bg-black/60 p-4 transform rotate-1 hover:rotate-0 transition-all duration-500">
                <iframe
                  src={`https://open.spotify.com/embed/track/${spotifyEmbedId}?utm_source=generator`}
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="w-full rounded-lg shadow-xl"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/10 transform rotate-45"></div>
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/10 transform -rotate-12"></div>
        </div>

        {/* Torn paper effect */}
        <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-white/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-t from-white/10 to-transparent"></div>
      </div>
    </div>
  );
};

export default LatestRelease;