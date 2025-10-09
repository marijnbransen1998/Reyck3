import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);

  return (
    <section ref={sectionRef} className="mb-16 relative -mx-4 md:-mx-0">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white font-optien tracking-wider px-4 md:px-0">
        OVER REYCK
      </h2>

      <div className={`relative w-full transform transition-all duration-1000 ${
        isInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}>
        <div className="relative flex items-center justify-center min-h-[300px] md:min-h-[500px]">
          <img
            src="/reyck analoog-33 (2) copy copy.jpg"
            alt="Reyck Band"
            className="max-w-full max-h-[300px] md:max-h-[500px] h-auto w-auto object-contain mx-auto"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent md:via-black/50"></div>

          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-xs md:max-w-sm text-white space-y-3 md:space-y-4 pl-2 md:pl-8">
                <p className="text-sm md:text-base leading-relaxed font-optien">
                  Reyck ademt onversneden Nederrock. Met hun rauwe sound brengen ze je lijf in beweging.
                </p>
                <p className="text-sm md:text-base leading-relaxed font-optien">
                  De teksten? Je kent ze niet, maar iets in je wil ze meteen meezingen...
                </p>
                <div className="pt-2 md:pt-4">
                  <Link
                    to="/biografie"
                    className="inline-block border-2 border-white text-white hover:bg-white hover:text-black font-optien py-2 px-6 md:py-3 md:px-8 text-sm md:text-base transition-all duration-300"
                  >
                    Lees meer
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;