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
                        Scherpe gitaarriffs snijden door de lucht, smerige baslicks kruipen onder je huid en voor je het weet dwingen keiharde drumfills je lijf in beweging. De woorden? Je kent ze niet, maar iets in je wil ze meteen meezingen - alsof ze al die tijd ergens diep in je lagen te wachten. Je denkt niet, maar je voelt en Reyck zorgt ervoor dat je er middenin staat.
                      </p>
                      <p>
                       Hun liveshow is als een oude leren jas: veel te warm, ruikend naar rook en de drank van gisteravond, maar hij zit als gegoten. Of je nu in een zweterige kelder bent of onder de festivaltent, Reyck grijpt je met muziek die je niet meer loslaat. En net als die jas, ooit Brits van snit maar gevormd door gure Nederlandse nachten.
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
                        Reyck ademt onversneden Nederrock. Hun nummers raken precies daar waar het schuurt: aan de scherpe rand van verlangen, in de pijn die bij verliezen hoort, en in de plek waar liefde en verdriet elkaar stil omarmen. Reyck is zowel een vluchtige flirt, als een pleidooi voor hopeloze romantiek. Een sprong in het diepe, zonder vangnet.
                      </p>
                      <p>
                      Reyck laat zich muzikaal beïnvloeden door de scherpte en energie van Britse en Amerikaanse bands als Kings of Leon, Arctic Monkeys en het vroege werk van The Killers. Tegelijkertijd zijn het de teksten van iconen als Ramses Shaffy en Harry Mulisch die hen telkens opnieuw weten te raken. In hun recentere werk hoor je de rauwe rand van Radiohead verweven met het gepolijste van Nothing But Thieves. Het resultaat: stevige, eerlijke en euforische Nederlandstalige rock.
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
                    Begin 2024 presenteerde Reyck hun EP ‘Los’ in een uitverkochte Bitterzoet. Nog geen maand later zaten ze alweer midden in het schrijfproces. Eind 2024 verscheen de single ‘Op De Vlucht’, opgepikt door 3FM en te horen in ‘Debuut in een Minuut’. Op dit moment werkt de band aan hun volgende album, dat eind 2026 het daglicht zal zien.
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
