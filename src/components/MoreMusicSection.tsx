import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';
import { Music, ArrowRight } from 'lucide-react';

const MoreMusicSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);

  return (
    <section ref={sectionRef} className="mb-16 relative">
      {/* Diagonal stripes background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-transparent"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255, 255, 255, 0.05) 10px,
              rgba(255, 255, 255, 0.05) 20px
            )`
          }}
        ></div>
      </div>

      <h2 className="text-4xl font-bold mb-12 text-center text-white font-accent relative">
        Meer van onze muziek
      </h2>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Middenweg Track */}
          <div className={`relative transform transition-all duration-1000 ${
            isInView ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}>
            {/* Vintage poster frame */}
            <div className="absolute inset-0 bg-white/5 transform -rotate-2"></div>
            <div className="relative bg-black/40 backdrop-blur-sm p-6 transform rotate-2 hover:rotate-0 transition-all duration-500">
              {/* Distressed texture overlay */}
              <div className="absolute inset-0 opacity-10 pointer-events-none noise-bg"></div>
              
              {/* Content */}
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white font-heading tracking-wider">Middenweg</h3>
                  <Music className="w-8 h-8 text-secondary" />
                </div>
                <div className="relative">
                  {/* Sharp corner frame */}
                  <div className="absolute inset-0 border-2 border-white/10 transform -rotate-1"></div>
                  <iframe
                    src="https://open.spotify.com/embed/track/38hADo4nBKqV2vphQ0zowA?utm_source=generator"
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="relative z-10"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Buitenaards Track */}
          <div className={`relative transform transition-all duration-1000 ${
            isInView ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            {/* Vintage poster frame */}
            <div className="absolute inset-0 bg-white/5 transform rotate-2"></div>
            <div className="relative bg-black/40 backdrop-blur-sm p-6 transform -rotate-2 hover:rotate-0 transition-all duration-500">
              {/* Distressed texture overlay */}
              <div className="absolute inset-0 opacity-10 pointer-events-none noise-bg"></div>
              
              {/* Content */}
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white font-heading tracking-wider">Buitenaards</h3>
                  <Music className="w-8 h-8 text-secondary" />
                </div>
                <div className="relative">
                  {/* Sharp corner frame */}
                  <div className="absolute inset-0 border-2 border-white/10 transform rotate-1"></div>
                  <iframe
                    src="https://open.spotify.com/embed/track/3wuI7uacc65M4Q1oRBrGji?utm_source=generator"
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="relative z-10"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center relative">
          {/* Decorative elements */}
          <div className="absolute left-1/2 -translate-x-1/2 w-32 h-1 bg-secondary/30 transform -rotate-12 -translate-y-6"></div>
          <div className="absolute left-1/2 -translate-x-1/2 w-32 h-1 bg-secondary/30 transform rotate-12 -translate-y-6"></div>
          
          <Link 
            to="/muziek" 
            className="inline-block bg-secondary hover:bg-accent text-white font-bold py-3 px-6 transform hover:-rotate-2 transition-all duration-300 hover:scale-105 hover:shadow-glow group"
          >
            <span className="flex items-center justify-center">
              Ontdek meer muziek
              <ArrowRight className="ml-2 w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MoreMusicSection;