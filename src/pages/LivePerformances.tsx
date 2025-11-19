import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Helmet } from 'react-helmet-async';

const LivePerformances: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>REYCK | Optredens</title>
        <meta name="description" content="REYCK | Nederrock 'n Roll" />
      </Helmet>

      <div className="pt-32 pb-16" style={{ backgroundImage: 'url(/achtergrond-sfeerfoto-groenoranje.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
        <div className="container mx-auto px-4">
          <section ref={sectionRef} className="relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white font-optien tracking-wider">
              AANKOMENDE OPTREDENS
            </h2>

            <div className="max-w-4xl mx-auto space-y-8">
              {[
                { title: "'T OUDE POTHUYS", date: "21", month: "NOV.", location: "UTRECHT", time: "23:00" },
                { title: "TOEKOMSTMUZIEK", date: "22", month: "NOV.", location: "AMSTERDAM", time: "20:00" },
                { title: "PENGUIN RADIO SHOWCASES 2025", date: "TBA", month: "JAN.", location: "GRONINGEN", time: "TBA" },
                { title: "ROCK CAFE SNEEK", date: "11", month: "JUL.", location: "SNEEK", time: "20:00" },
                { title: "TO BE ANNOUNCED", date: "", month: "", location: "", time: "" },
              ].map((gig, index) => (
                <div
                  key={index}
                  className={`relative transform transition-all duration-1000 ${
                    isInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between py-6 border-b border-white/20 gap-4">
                    {gig.date ? (
                      <>
                        <div className="flex items-center space-x-4 md:space-x-8">
                          <div className="text-center flex-shrink-0">
                            <div className="text-4xl md:text-5xl font-bold text-white font-optien">{gig.date}</div>
                            {gig.month && <div className="text-sm text-white/80 font-din">{gig.month}</div>}
                          </div>
                          <div className="w-px h-16 bg-white/20 hidden md:block"></div>
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold text-white font-optien tracking-wider mb-1">{gig.title}</h3>
                            {gig.location && <p className="text-white/80 font-din text-sm">{gig.location}</p>}
                          </div>
                        </div>
                        {gig.time && (
                          <div className="text-left md:text-right ml-auto md:ml-0">
                            <div className="text-2xl font-bold text-white font-optien">{gig.time}</div>
                          </div>
                        )}
                      </>
                    ) : (
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white font-optien tracking-wider">{gig.title}</h3>
                      </div>
                    )}
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
