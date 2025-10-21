import React, { useRef } from 'react';
import { Users, Music, Star } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { Helmet } from 'react-helmet-async';

const Biography: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bandMembersRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);
  const isBandMembersInView = useInView(bandMembersRef);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>REYCK | Nederrock 'n Roll</title>
        <meta name="description" content="Ontdek de Nederrock band Reyck. Beluister onze nieuwste releases en bekijk aankomende optredens." />
      </Helmet>

      <div className="pt-32 pb-16" style={{ backgroundImage: 'url(/achtergrond-sfeerfoto-groenoranje.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div className="container mx-auto px-4">
          {/* Main Bio Section */}
          <section ref={sectionRef} className="mb-24 relative">
            {/* Featured Image */}
            <div className={`relative max-w-3xl mx-auto mb-16 transform transition-all duration-1000 ${
              isInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
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

            {/* Bio Text Block */}
            <div className="max-w-4xl mx-auto">
              <div className={`relative transform transition-all duration-1000 ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`} style={{ transitionDelay: '200ms' }}>
                <div className="absolute inset-0 bg-white/5 transform -rotate-1"></div>
                <div className="relative bg-black/40 backdrop-blur-sm p-8 transform rotate-1 hover:rotate-0 transition-all duration-500">
                  <div className="text-white text-lg leading-relaxed font-heading space-y-6">
                    <p>
                      Reyck ademt onversneden Nederrock. De band durft de Nederlandse taal te omhullen in een dikke boterham van rock 'n roll en serveert een gloednieuw, eigen gerecht, dat vertrouwd smaakt. Met hun rauwe sound brengen ze je lijf in beweging. De teksten? Je kent ze niet, maar iets in je wil ze meteen meezingen - alsof ze al die tijd al ergens op je lagen te wachten.
                    </p>
                    <p>
                      Hun liveshow is als een oude leren jas: veel te warm, ruikend naar rook en de drank van gisteravond, maar hij zit als gegoten. Of je nu in een zweterige kelder bent of onder de festivaltent, Reyck grijpt je met muziek die je niet meer loslaat. En net als die jas, ooit Brits van snit maar gevormd door gure Nederlandse nachten.
                    </p>
                    <p>
                      De band laat zich muzikaal beïnvloeden door de scherpte en energie van Britse en Amerikaanse bands als Kings of Leon, Arctic Monkeys en het vroege werk van The Killers. Tegelijkertijd zijn het de teksten van iconen als Ramses Shaffy en Harry Mulisch die hen telkens opnieuw weten te raken.
                    </p>
                    <p>
                      In 2024 verscheen hun EP Los in een uitverkocht Bitterzoet en werd hun laatste single Op De Vlucht gedraaid op 3FM. Op dit moment werkt de band aan hun volgende album, dat in 2026 het daglicht zal zien.
                    </p>
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
                { name: "Twan de Kock", role: "Zanger/Gitarist", img: "/DSCF1053 (1) (1).jpg" },
                { name: "Wessel van Rooijen", role: "Gitarist", img: "/DSCF2496 (1).jpg" },
                { name: "Max Balvers", role: "Drummer", img: "/WhatsApp Image 2025-10-01 at 12.03.00.jpeg" },
                { name: "Elmo Wanders", role: "Bassist", img: "/DSCF1378 (1).jpg" }
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
                        {member.img.includes('drive.google.com') ? (
                          <iframe
                            src={member.img}
                            className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                            allow="autoplay"
                          ></iframe>
                        ) : (
                          <img
                            src={member.img}
                            alt={member.name}
                            className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                          />
                        )}
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
