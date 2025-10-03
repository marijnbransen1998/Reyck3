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
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white font-optien tracking-wider">
        OVER REYCK
      </h2>

      <div className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-12 transform transition-all duration-1000 ${
        isInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Band Photo - Left */}
          <div ref={imageRef} className="relative group">
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

          {/* Text - Right */}
          <div className="text-white space-y-6">
            <p className="text-base md:text-lg leading-relaxed font-optien">
              Reyck ademt onversneden Nederrock. De band durft de Nederlandse taal te omhullen in een dikke boterham van rock 'n roll en serveert een gloednieuw, eigen gerecht, dat vertrouwd smaakt.
            </p>
            <p className="text-base md:text-lg leading-relaxed font-optien">
              Met hun rauwe sound brengen ze je lijf in beweging. De teksten? Je kent ze niet, maar iets in je wil ze meteen meezingen - alsof ze al die tijd al ergens op je lagen te wachten...
            </p>
            <div className="pt-4">
              <Link
                to="/biografie"
                className="inline-block border-2 border-white text-white hover:bg-white hover:text-black font-optien py-3 px-8 transition-all duration-300"
              >
                Lees meer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;