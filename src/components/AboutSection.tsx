import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';
import { ArrowRight } from 'lucide-react';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);

  return (
    <section ref={sectionRef} className="mb-16 relative">
      <div className="bg-black py-16">
      
      {/* Main content container with zigzag background */}

      <div className="relative max-w-6xl mx-auto">
        <div className={`relative bg-white/5 transform transition-all duration-1000
          ${isInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-8">
            <div className="relative">
              <div className="relative h-[400px] overflow-hidden">
                    <iframe
                      src="https://drive.google.com/file/d/1Jy6KsDocwvmAmCwUICRlEhDRT3MAgiN4/preview"
                      className="w-full h-full object-cover"
                      allow="autoplay"
                    ></iframe>
                  </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="relative">
                <p className="text-white text-lg mb-8 leading-relaxed font-optien">
                  Scherpe gitaarriffs snijden door de lucht, smerige baslicks kruipen onder je huid en voor je het weet dwingen keiharde drumfills je lijf in beweging. De woorden? Je kent ze niet, maar iets in je wil ze meteen meezingen - alsof ze al die tijd ergens diep in je lagen te wachten. Je denkt niet, maar je voelt en Reyck zorgt ervoor dat je er middenin staat...
                </p>
                
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
