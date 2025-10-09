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

      <div className={`w-full transform transition-all duration-1000 ${
        isInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}>
        {/* Mobile: Image and text below */}
        <div className="md:hidden flex flex-col items-center">
          <img
            src="/reyck analoog-33 (2) copy copy.jpg"
            alt="Reyck Band"
            className="max-w-full max-h-[300px] h-auto w-auto object-contain mb-6"
          />
          <div className="px-4 text-white space-y-3 max-w-md">
            <p className="text-sm leading-relaxed font-optien">
              Reyck ademt onversneden Nederrock. De band durft de Nederlandse taal te omhullen in een dikke boterham van rock 'n roll en serveert een gloednieuw, eigen gerecht, dat vertrouwd smaakt.
            </p>
            <p className="text-sm leading-relaxed font-optien">
              Met hun rauwe sound brengen ze je lijf in beweging. De teksten? Je kent ze niet, maar iets in je wil ze meteen meezingen - alsof ze al die tijd al ergens op je lagen te wachten...
            </p>
            <div className="pt-2">
              <Link
                to="/biografie"
                className="inline-block border-2 border-white text-white hover:bg-white hover:text-black font-optien py-2 px-6 text-sm transition-all duration-300"
              >
                Lees meer
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop: Image with overlay text */}
        <div className="hidden md:flex justify-center">
          <div className="relative inline-block">
            <img
              src="/reyck analoog-33 (2) copy copy.jpg"
              alt="Reyck Band"
              className="max-w-full max-h-[500px] h-auto w-auto object-contain"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

            <div className="absolute inset-0 flex items-center">
              <div className="px-4">
                <div className="max-w-[280px] text-white space-y-3 pl-8">
                  <p className="text-sm leading-snug font-optien">
                    Reyck ademt onversneden Nederrock. De band durft de Nederlandse taal te omhullen in een dikke boterham van rock 'n roll en serveert een gloednieuw, eigen gerecht, dat vertrouwd smaakt.
                  </p>
                  <p className="text-sm leading-snug font-optien">
                    Met hun rauwe sound brengen ze je lijf in beweging. De teksten? Je kent ze niet, maar iets in je wil ze meteen meezingen - alsof ze al die tijd al ergens op je lagen te wachten...
                  </p>
                  <div className="pt-3">
                    <Link
                      to="/biografie"
                      className="inline-block border-2 border-white text-white hover:bg-white hover:text-black font-optien py-2 px-6 text-sm transition-all duration-300"
                    >
                      Lees meer
                    </Link>
                  </div>
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