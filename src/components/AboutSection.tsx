import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);

  return (
    <section ref={sectionRef} className="mb-16 relative">
      <div 
        className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center"
        style={{
          backgroundImage: `url('/fotobreed copy.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content centered over the background */}
        <div className={`relative z-10 text-center max-w-2xl mx-auto px-8 transform transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-black text-3xl md:text-4xl font-bold font-optien mb-8">
            OVER REYCK
          </h2>
          
          <p className="text-black text-base md:text-lg leading-relaxed font-optien mb-12">
            Scherpe gitaarriffs snijden door de lucht, smerige baslicks kruipen onder je huid<br/>
            en voor je het weet dwingen keiharde drumfills je lijf in beweging. De woorden?<br/>
            Je kent ze niet, maar iets in je wil ze meteen meezingen - alsof ze al die tijd<br/>
            ergens diep in je lagen te wachten. Je denkt niet, maar je voelt en Reyck<br/>
            zorgt ervoor dat je er middenin staat...
          </p>
          
          <div>
            <Link 
              to="/biografie" 
              className="border-2 border-black text-black hover:bg-black hover:text-white font-optien py-4 px-12 text-lg transition-all duration-300 inline-block"
            >
              Lees meer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;