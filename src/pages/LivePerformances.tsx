import React, { useRef } from 'react';
import { Calendar, Ticket, Music, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const LivePerformances: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);

  return (
    <div className="min-h-screen">
      {/* Hero sectie */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Live Performance" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-70"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 font-accent glitch-effect">Optredens</h1>
        </div>
      </section>

      {/* Optredens lijst */}
      <div className="bg-gradient-to-b from-primary to-secondary py-16">
        <div className="container mx-auto px-4">
          <section ref={sectionRef} className="relative">
            <h2 className="text-4xl font-bold mb-12 text-center text-white font-accent relative">
              <span className="relative inline-block">
                <span className="absolute -inset-1 bg-secondary/20 transform -skew-x-12"></span>
                <span className="relative">Aankomende Optredens</span>
              </span>
            </h2>

            {/* Optredens Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
              {[
                { title: "SPOEL Festival", date: "07 September", location: "Culemborg" },
                { title: "TO BE ANNOUNCED", date: "", location: "" },
                { title: "TO BE ANNOUNCED", date: "", location: "", link: "", hasTickets: false }
              ].map((gig, index) => (
                <div 
                  key={index}
                  className={`relative transform transition-all duration-1000 ${
                    isInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Visueel Effect */}
                  <div className="absolute inset-0 bg-white/5 transform rotate-1"></div>
                  <div className="relative bg-black/40 backdrop-blur-sm p-6 transform -rotate-1 hover:rotate-0 transition-all duration-500">
                    
                    {/* Noise Effect */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none noise-bg"></div>

                    {/* Content */}
                    <div className="relative">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-12 h-12 text-secondary" />
                          <div className="ml-4">
                            <h3 className="text-2xl font-bold text-white font-heading tracking-wider">{gig.title}</h3>
                            <p className="text-white/80">{gig.date}{gig.location && ` - ${gig.location}`}</p>
                          </div>
                        </div>
                        {gig.hasTickets && (
                          <span className="inline-flex items-center px-3 py-1 rounded-sm text-xs font-medium bg-secondary/80 text-white transform rotate-2">
                            <Ticket className="w-4 h-4 mr-1" />
                            Tickets beschikbaar
                          </span>
                        )}
                      </div>

                      {/* Scheidingslijn */}
                      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-4"></div>

                      {/* Extra CTA-knop voor Plugged Festival */}
                      {gig.link && gig.title === "Plugged Festival" && (
                        <div className="mt-6">
                          <a 
                            href={gig.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-block bg-secondary hover:bg-accent text-white font-bold py-3 px-6 transform hover:-rotate-2 transition-all duration-300 hover:scale-105 hover:shadow-glow group"
                          >
                            <span className="flex items-center justify-center">
                              Bekijk festivalwebsite
                              <ArrowRight className="ml-2 w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                          </a>
                        </div>
                      )}
                    </div>

                    {/* Torn Paper Effect */}
                    <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-white/10 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-t from-white/10 to-transparent"></div>
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

export default LivePerformances;
