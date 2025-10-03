import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);
  const isImageInView = useInView(imageRef);

  return (
    <section ref={sectionRef} className="mb-16 relative">
      {/* About Text and Photo Container */}
      <div className="relative bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-12">
        <div className={`text-center max-w-2xl mx-auto mb-12 transform transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-white text-3xl md:text-4xl font-bold font-optien mb-8">
            OVER REYCK
          </h2>

          <p className="text-white text-base md:text-lg leading-relaxed font-optien mb-8">
            Reyck ademt onversneden Nederrock. De band durft de Nederlandse taal te omhullen in een dikke boterham van rock 'n roll en serveert een gloednieuw, eigen gerecht, dat vertrouwd smaakt. Met hun rauwe sound brengen ze je lijf in beweging. De teksten? Je kent ze niet, maar iets in je wil ze meteen meezingen - alsof ze al die tijd al ergens op je lagen te wachten...
          </p>
        </div>

        {/* Band Photo */}
        <div ref={imageRef} className={`relative max-w-3xl mx-auto mb-12 transform transition-all duration-1000 ${
          isImageInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="absolute inset-0 bg-secondary/20 transform rotate-2"></div>
          <div className="relative bg-white/10 p-3 transform -rotate-2 hover:rotate-0 transition-all duration-500">
            <div className="relative h-[300px] md:h-[400px] overflow-hidden">
              <img
                src="/reyck analoog-13 (1) (1).jpg"
                alt="Reyck Band"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/biografie"
            className="border-2 border-white text-white hover:bg-white hover:text-black font-optien py-3 px-8 transition-all duration-300 inline-block"
          >
            Lees meer
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;