import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);

  return (
    <section ref={sectionRef} className="mb-16 relative">
      <div className="bg-black py-16">
        <div className="container mx-auto px-4">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transform transition-all duration-1000 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            {/* Left side - Photo */}
            <div className="relative">
              <img
                src="/fotobreed copy.jpg"
                alt="Reyck Band"
                className="w-full h-auto object-cover grayscale"
              />
            </div>

            {/* Right side - Content */}
            <div className="flex flex-col justify-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white font-optien tracking-wider">
                OVER REYCK
              </h2>
              
              <p className="text-white text-lg leading-relaxed font-optien">
                Scherpe gitaarriffs snijden door de lucht, smerige baslicks kruipen onder je huid en voor je het weet dwingen keiharde drumfills je lijf in beweging. De woorden? Je kent ze niet, maar iets in je wil ze meteen meezingen - alsof ze al die tijd ergens diep in je lagen te wachten. Je denkt niet, maar je voelt en Reyck zorgt ervoor dat je er middenin staat...
              </p>
              
              <div>
                <Link 
                  to="/biografie" 
                  className="border-2 border-white text-white hover:bg-white hover:text-black font-optien py-3 px-8 transition-all duration-300 inline-block"
                >
                  Lees meer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;