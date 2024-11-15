import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';
import { ArrowRight } from 'lucide-react';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);

  return (
    <section ref={sectionRef} className="mb-16 relative">
      <h2 className="text-4xl font-bold mb-12 text-center text-white font-accent">Over Reyck</h2>
      
      {/* Main content container with zigzag background */}
      <div className="relative max-w-6xl mx-auto zigzag-container">
        {/* Geometric shapes background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-32 h-32 bg-secondary/10 transform rotate-45 -translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent/10 transform -rotate-12 translate-x-20 translate-y-20"></div>
          <div className="absolute top-1/2 right-0 w-24 h-24 bg-white/5 transform rotate-12 translate-x-12"></div>
        </div>

        {/* Content wrapper with ripped poster effect */}
        <div className={`relative bg-white/10 backdrop-blur-lg ripped-poster transform transition-all duration-1000
          ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          
          {/* Staggered grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 p-8">
            {/* Image section with tilted frame */}
            <div className="md:col-span-7 md:col-start-1 relative z-10">
              <div className="relative">
                {/* Decorative frame */}
                <div className="absolute inset-0 bg-secondary/20 transform -rotate-3 scale-105"></div>
                
                {/* Main image frame */}
                <div className="relative bg-white/10 p-2 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="relative h-[400px] overflow-hidden">
                    <iframe
                      src="https://drive.google.com/file/d/1Jy6KsDocwvmAmCwUICRlEhDRT3MAgiN4/preview"
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                      allow="autoplay"
                    ></iframe>
                    
                    {/* Torn paper overlay */}
                    <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-white/10 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white/10 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text content with dynamic angles */}
            <div className="md:col-span-5 md:col-start-8 relative z-20 flex flex-col justify-center">
              {/* Angled background for text */}
              <div className="absolute inset-0 bg-white/5 transform -rotate-2"></div>
              
              {/* Text content */}
              <div className="relative p-6 transform rotate-2">
                <p className="text-white text-lg mb-8 leading-relaxed font-heading">
                  Reyck is een opkomende Nederlandse pop-rock band die bekend staat om hun energieke optredens en nostalgische muzikale invloeden uit de jaren '80.
                </p>
                
                {/* CTA Button with geometric accent */}
                <div className="relative">
                  <div className="absolute inset-0 bg-secondary/20 transform rotate-6 scale-105"></div>
                  <Link 
                    to="/biografie" 
                    className="relative block bg-secondary hover:bg-accent text-white font-bold py-3 px-6 text-center transform hover:-rotate-2 transition-all duration-300 hover:scale-105 hover:shadow-glow group"
                  >
                    <span className="flex items-center justify-center">
                      Lees meer over ons
                      <ArrowRight className="ml-2 w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative torn edges */}
          <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-white/10 to-transparent transform -translate-y-4"></div>
          <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-t from-white/10 to-transparent transform translate-y-4"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;