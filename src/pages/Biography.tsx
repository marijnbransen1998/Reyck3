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
          <img 
            src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Band Performance" 
            className="w-full h-full object-cover"
          />
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Introduction */}
                <div className={`relative transform transition-all duration-1000 ${
                  isInView ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
                }`} style={{ transitionDelay: '200ms' }}>
                  <div className="absolute inset-0 bg-white/5 transform -rotate-1"></div>
                  <div className="relative bg-black/40 backdrop-blur-sm p-6 transform rotate-1 hover:rotate-0 transition-all duration-500">
                    <Star className="text-secondary w-8 h-8 mb-4" />
                    <div className="space-y-4 text-white text-lg leading-relaxed font-heading">
                      <p>
                        Reyck is de dynamische Nederpop viermansbob uit Utrecht en Amsterdam. De band bestaat uit zanger en gitarist Twan de Kock, gitarist Wessel van Rooijen, bassist Elmo Wanders en drummer Max Balvers.
                      </p>
                      <p>
                        De muziek van Reyck is fris en energiek, maar brengt ook nostalgische gevoelens bij luisteraars naar boven door sounds uit de jaren 80 in een nieuw jasje te steken. Wie denkt dat Nederpop volks of zoetsappige is, heeft het mis. Reyck is niet bang voor enge fills, harde gitaarsounds en smerige basloopjes.
                      </p>
                    </div>
                  </div>
                </div>

                {/* History */}
                <div className={`relative transform transition-all duration-1000 ${
                  isInView ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
                }`} style={{ transitionDelay: '400ms' }}>
                  <div className="absolute inset-0 bg-white/5 transform rotate-1"></div>
                  <div className="relative bg-black/40 backdrop-blur-sm p-6 transform -rotate-1 hover:rotate-0 transition-all duration-500">
                    <Music className="text-secondary w-8 h-8 mb-4" />
                    <div className="space-y-4 text-white text-lg leading-relaxed font-heading">
                      <p>
                        Reyck begon in 2016 met de jeugdvrienden Twan de Kock (zang/gitaar) en Wessel van Rooijen (gitaar). Na Engelstalig begonnen te zijn, switchte de band in 2020 naar schrijven in de moedertaal. Bassist Elmo Wanders sloot aan en Reyck's eerste album 'Bijschijnen', met onder andere de tracks 'Doktersvoorschrift (XTC)' en 'Toni' kwam in 2021 uit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Developments */}
              <div className={`relative mt-8 transform transition-all duration-1000 ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`} style={{ transitionDelay: '600ms' }}>
                <div className="absolute inset-0 bg-white/5 transform -rotate-1"></div>
                <div className="relative bg-black/40 backdrop-blur-sm p-6 transform rotate-1 hover:rotate-0 transition-all duration-500">
                  <div className="space-y-4 text-white text-lg leading-relaxed font-heading">
                    <p>
                      Na dit album werd vanaf dag één keihard gewerkt aan een nieuw EP 'Los'. Deze verscheen in 2024 en bevat onder andere de singles 'Buitenaards', 'Vanavond Gaat Ze Dansen' en 'Middenweg'. De EP werd door Reyck gepresenteerd in een bomvol Bitterzoet.
                    </p>
                    <p>
                      Na het succes van 'Los' sloot drummer Max Balvers aan in het najaar van 2024. Met de release van de nieuwe single 'Op De Vlucht' is Reyck meerdere malen op de radio te horen (3FM, Yoursafe Radio). Op 13 december brengen ze de single live te gehore tijdens hun release party in Cinetol, Amsterdam. Ondertussen is de band al weer druk bezig met meer materiaal voor een aankomend EP/album.
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
                    <div className="absolute inset-0 bg-secondary/20 transform rotate-3"></div>
                    <div className="relative bg-white/5 backdrop-blur-lg p-6 transform -rotate-3 hover:rotate-0 transition-all duration-500">
                      <div className="relative overflow-hidden h-64">
                        <iframe 
                          src={member.img} 
                          className="w-full h-full object-cover"
                          allow="autoplay"
                        ></iframe>
                        <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-white/10 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-t from-white/10 to-transparent"></div>
                      </div>
                      <div className="mt-4">
                        <h3 className="text-2xl font-semibold text-white mb-2">{member.name}</h3>
                        <p className="text-xl text-white/80">{member.role}</p>
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