import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);

  return (
    <section ref={sectionRef} className="mb-16 relative">
      <div className="relative min-h-[500px] flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg">
        <div className={`text-center max-w-2xl mx-auto px-8 transform transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-white text-3xl md:text-4xl font-bold font-optien mb-8">
            OVER REYCK
          </h2>
          
          <p className="text-white text-base md:text-lg leading-relaxed font-optien mb-12">
            Scherpe gitaarriffs snijden door de lucht,<br/>
            smerige baslicks kruipen onder je huid en<br/>
            voor je het weet dwingen keiharde<br/>
            drumfills je lijf in beweging. De woorden?<br/>
            Je kent ze niet, maar iets in je wil ze<br/>
            meteen meezingen - alsof ze al die tijd<br/>
            ergens diep in je lagen te wachten. Je<br/>
            denkt niet, maar je voelt en Reyck zorgt<br/>
            ervoor dat je er middenin staat...
          </p>
          
          <Link 
            to="/biografie" 
            className="border-2 border-white text-white hover:bg-white hover:text-black font-optien py-3 px-8 transition-all duration-300"
          >
            Lees meer
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;