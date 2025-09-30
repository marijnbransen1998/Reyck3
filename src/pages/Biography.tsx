import React, { useRef } from 'react';
import { Users, Music, Star } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Biography: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bandMembersRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);
  const isBandMembersInView = useInView(bandMembersRef);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-70"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 font-accent">Over Reyck</h1>
        </div>
      </section>

      <div className="bg-gradient-to-b from-primary to-secondary py-16">
        <div className="container mx-auto px-4">
          {/* Main Bio Section */}
          <section ref={sectionRef} className="mb-24 relative">
            {/* Featured Image */}
            <div className={`relative max-w-4xl mx-auto mb-16 transform transition-all duration-1000 ${
              isInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
              <div className="absolute inset-0 bg-secondary/20 transform rotate-2"></div>
              <div className="relative bg-white/10 p-3 transform -rotate-2 hover:rotate-0 transition-all duration-500">
                <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                  <iframe
                    src="https://drive.google.com/file/d/1Jy6KsDocwvmAmCwUICRlEhDRT3MAgiN4/preview"
                    className="w-full h-full object-cover"
                    allow="autoplay"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Bio Text Sections */}
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {/* Eerste alinea */}
                <div className={`relative transform transition-all duration-1000 ${
                  isInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`} style={{ transitionDelay: '200ms' }}>
                  <div className="absolute inset-0 bg-white/5 transform -rotate-1"></div>
                  <div className="relative bg-black/40 backdrop-blur-sm p-6 transform rotate-1 hover:rotate-0 transition-all duration-500">
                    <div className="text-white text-lg leading-relaxed font-heading">
                      <p>
                        Reyck ademt onversneden Nederrock. De band durft de Nederlandse taal te omhullen in een dikke boterham van rock 'n roll en serveert een gloednieuw, eigen gerecht, dat vertrouwd smaakt. Met hun rauwe sound brengen ze je lijf in beweging. De teksten? Je kent ze niet, maar iets in je wil ze meteen meezingen - alsof ze al die tijd al ergens op je lagen te wachten.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tweede alinea */}
                <div className={`relative transform transition-all duration-1000 ${
                  isInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`} style={{ transitionDelay: '400ms' }}>
                  <div className="absolute inset-0 bg-white/5 transform rotate-1"></div>
                  <div className="relative bg-black/40 backdrop-blur-sm p-6 transform -rotate-1 hover:rotate-0 transition-all duration-500">
                    <div className="text-white text-lg leading-relaxed font-heading">
                      <p>
                        Hun liveshow is als een oude leren jas: veel te warm, ruikend naar rook en de drank van gisteravond, maar hij zit als gegoten. Of je nu in een zweterige kelder bent of onder de festivaltent, Reyck grijpt je met muziek die je niet meer loslaat. En net als die jas, ooit Brits van snit maar gevormd door gure Nederlandse nachten.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Derde alinea */}
                <div className={`relative transform transition-all duration-1000 ${
                  isInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`} style={{ transitionDelay: '600ms' }}>
                  <div className="absolute inset-0 bg-white/5 transform -rotate-1"></div>
                  <div className="relative bg-black/40 backdrop-blur-sm p-6 transform rotate-1 hover:rotate-0 transition-all duration-500">
                    <div className="text-white text-lg leading-relaxed font-heading">
                      <p>
                        De band laat zich muzikaal beïnvloeden door de scherpte en energie van Britse en Amerikaanse bands als Kings of Leon, Arctic Monkeys en het vroege werk van The Killers. Tegelijkertijd zijn het de teksten van iconen als Ramses Shaffy en Harry Mulisch die hen telkens opnieuw weten te raken.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Vierde alinea */}
                <div className={`relative transform transition-all duration-1000 ${
                  isInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`} style={{ transitionDelay: '800ms' }}>
                  <div className="absolute inset-0 bg-white/5 transform rotate-1"></div>
                  <div className="relative bg-black/40 backdrop-blur-sm p-6 transform -rotate-1 hover:rotate-0 transition-all duration-500">
                    <div className="text-white text-lg leading-relaxed font-heading">
                      <p>
                        In 2024 verscheen hun EP Los in een uitverkocht Bitterzoet en werd hun laatste single Op De Vlucht gedraaid op 3FM. Op dit moment werkt de band aan hun volgende album, dat in 2026 het daglicht zal zien.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Band Members Section */}
          <section ref={bandMembersRef} className="relative">
            <h2 className="text-4xl font-bold mb-12 text-center text-white font-accent">Bandleden</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Twan de Kock", role: "Zanger/Gitarist", img: "https://drive.google.com/file/d/1lWkA0I7gZ51hXJ5dLtrV62jY5qMtFdGz/preview" },
                { name: "Wessel van Rooijen", role: "Gitarist", img: "https://drive.google.com/file/d/1sSI5G2PkwzXDf4A7I64I5IcH26ZGS-QG/preview" },
                { name: "Max Balvers", role: "Drummer", img: "https://drive.google.com/file/d/1mEAvwhghPAV1sBmtyCayFZCEWDljEsRx/preview" },
                { name: "Elmo Wanders", role: "Bassist", img: "https://drive.google.com/file/d/1yjxfoZZb797w6RH_op8-pyNCZbzvp1vG/preview" }
              ].map((member, index) => (
                <div 
                  key={index} 
                  className={`relative transform transition-all duration-1000 ${
                    isBandMembersInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="relative">
                    <div className="relative bg-white/5 backdrop-blur-lg p-6">
                      <div className="relative overflow-hidden h-64">
                        <iframe 
                          src={member.img} 
                          className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                          allow="autoplay"
                        ></iframe>
                      </div>
                      <div className="mt-4">
                        <h3 className="text-2xl font-semibold text-white mb-2">{member.name}</h3>
                        <p className="text-xl text-white/80 font-din">{member.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Biography;
