import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);

  return (
    <section ref={sectionRef} className="mb-16 relative -mx-4 md:-mx-0">

      <div
        className={`w-full transform transition-all duration-1000 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        {/* ----------------------------- */}
        {/* ✔ MOBILE VERSION (UPDATED)   */}
        {/* ----------------------------- */}
        <div className="md:hidden relative w-full flex justify-center">
          <div className="relative w-[90%]">
            
            <img
              src="/reyck analoog-33 (2) copy copy.jpg"
              alt="Reyck Band"
              className="w-full max-h-[330px] object-cover rounded"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent rounded"></div>

            <div className="absolute inset-0 flex items-center">
              <div className="px-3 max-w-[160px] text-white space-y-2">
                <p className="text-xs leading-snug font-optien">
                  Reyck ademt<br />
                  onversneden<br />
                  Nederrock.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* ----------------------------- */}
        {/* ✔ DESKTOP VERSION (UNCHANGED) */}
        {/* ----------------------------- */}
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
                    Utrechtse indierockband Reyck haalt inspiratie uit Engelstalige indie pop/rock als Kings Of Leon, Nothing But Thieves en Kensington, maar vertelt een eigen verhaal in hun moedertaal. Dit brengt een oprechtheid mee die centraal staat in de muziek. Zonder omwegen leggen ze het hart op hun Nederlandse tong.
                  </p>
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
