import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';
import { Music, ArrowRight } from 'lucide-react';

const MoreMusicSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);

  return (
    <section ref={sectionRef} className="mb-16 relative">

      <h2 className="text-4xl font-bold mb-12 text-center text-white font-optien tracking-wider">
        MUZIEK
      </h2>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Middenweg Track */}
          <div className={`relative transform transition-all duration-1000 ${
            isInView ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}>
            <div className="relative bg-white/5 p-6">
              <div className="relative">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white font-optien tracking-wider">MIDDENWEG</h3>
                </div>
                  <iframe
                    src="https://open.spotify.com/embed/track/38hADo4nBKqV2vphQ0zowA?utm_source=generator"
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className=""
                  ></iframe>
              </div>
            </div>
          </div>

          {/* Buitenaards Track */}
          <div className={`relative transform transition-all duration-1000 ${
            isInView ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            <div className="relative bg-white/5 p-6">
              <div className="relative">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white font-optien tracking-wider">BUITENAARDS</h3>
                </div>
                  <iframe
                    src="https://open.spotify.com/embed/track/3wuI7uacc65M4Q1oRBrGji?utm_source=generator"
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className=""
                  ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center relative">
          <Link 
            to="/muziek" 
            className="border-2 border-white text-white hover:bg-white hover:text-black font-optien py-3 px-8 transition-all duration-300"
          >
            Ontdek meer muziek
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MoreMusicSection;
