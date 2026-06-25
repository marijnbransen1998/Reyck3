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
      {/* ----------------------------- */}
{/* ✔ MOBILE VERSION (UPDATED)   */}
{/* ----------------------------- */}
<div className="md:hidden relative w-full flex flex-col items-center">
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
          Reyck ademt
          <br />
          onversneden
          <br />
          Nederrock.
        </p>
      </div>
    </div>
  </div>

  <div className="w-[90%] mt-4 text-white font-optien">
    <details className="group">
      <summary className="cursor-pointer text-sm font-medium list-none flex items-center gap-2">
        Meer over de band
        <span className="transition-transform group-open:rotate-180">
          ▼
        </span>
      </summary>

      <div className="mt-3 space-y-3 text-sm leading-relaxed text-white/90">
        <p>
          Utrechtse indierockband Reyck haalt inspiratie uit Engelstalige indie
          pop/rock als Kings Of Leon, Nothing But Thieves en Kensington, maar
          vertelt een eigen verhaal in hun moedertaal. Dit brengt een
          oprechtheid mee die centraal staat in de muziek. Zonder omwegen leggen
          ze het hart op hun Nederlandse tong.
        </p>

        <p>
          Eerder werd Reyck gedraaid op 3FM, KINK en NPO Radio 2, en verkocht de
          band in 2024 een eigen show in Bitterzoet uit. Live straalt de band
          een bepaald charisma uit, waardoor hun performance door{" "}
          <a
            href="https://3voor12lokaal.vpro.nl/artikelen/club-3voor12-utrecht-maart-van-rustige-pop-naar-op-hol-geslagen-neo-jazz"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80"
          >
            3voor12 Utrecht
          </a>{" "}
          omschreven wordt als ‘Ziggo Dome-ready’. Reyck is niet vies van stevig
          gitaarwerk, maar ook zeker niet bang voor een catchy popsong. In 2027
          verschijnt het debuutalbum dat volledig is gewijd aan de verzwegen
          kanten van de liefde.
        </p>
      </div>
    </details>
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

<p className="text-sm leading-snug font-optien mt-4">
  Eerder werd Reyck gedraaid op 3FM, KINK en NPO Radio 2, en verkocht de band in 2024 een eigen show in Bitterzoet uit. Live straalt de band een bepaald charisma uit, waardoor hun performance door{" "}
  <a
    href="https://3voor12lokaal.vpro.nl/artikelen/club-3voor12-utrecht-maart-van-rustige-pop-naar-op-hol-geslagen-neo-jazz"
    target="_blank"
    rel="noopener noreferrer"
    className="underline hover:opacity-80"
  >
    3voor12 Utrecht
  </a>{" "}
  omschreven wordt als ‘Ziggo Dome-ready’. Reyck is niet vies van stevig gitaarwerk, maar ook zeker niet bang voor een catchy popsong. In 2027 verschijnt het debuutalbum dat volledig is gewijd aan de verzwegen kanten van de liefde.
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
