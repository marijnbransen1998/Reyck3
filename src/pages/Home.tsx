import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Music, Users, Ticket, ArrowRight } from 'lucide-react';
import DynamicSplitLogo from '../components/DynamicSplitLogo';
import { useInView } from '../hooks/useInView';
import LatestRelease from '../components/LatestRelease';
import AboutSection from '../components/AboutSection';
import MoreMusicSection from '../components/MoreMusicSection';
import { Helmet } from 'react-helmet-async';

const Home: React.FC = () => {
  const [animate, setAnimate] = useState(false);
  const upcomingShowsRef = useRef<HTMLDivElement>(null);
  const isUpcomingShowsInView = useInView(upcomingShowsRef);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Reyck - Officiële Website | Nederlandse Pop-Rock Band</title>
        <meta name="description" content="Ontdek Reyck, de opkomende Nederlandse pop-rock band bekend om hun energieke optredens en nostalgische jaren '80 invloeden. Beluister onze nieuwste releases en bekijk aankomende optredens." />
        <link rel="canonical" href="https://legendary-longma-12de88.netlify.app/" />
      </Helmet>

     {/* Hero Section */}
<section className="relative h-screen flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0 z-0">
    <video 
      autoPlay 
      muted 
      loop 
      playsInline
      className="w-full h-full object-cover"
    >
      <source src="/promo vid cinetol1.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-70"></div>
  </div>
        <div className="relative z-10 text-center flex flex-col items-center">
          <div className="mb-8">
            <DynamicSplitLogo animate={animate} />
          </div>
          <p 
            className={`text-2xl md:text-3xl text-white mb-8 transition-all duration-1000 transform
              ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '1000ms' }}
          >
            Nederlandstalige pop-rock
          </p>
          <div 
            className={`relative transition-all duration-1000 transform
              ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '1500ms' }}
          >
            <a 
              href="https://reyckband.nl/muziek"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary hover:bg-accent text-white font-bold py-3 px-6 rounded-full text-xl
                transition-all duration-300 transform hover:scale-105 hover:shadow-glow relative overflow-hidden group"
            >
              <span className="relative z-10">Beluister onze muziek</span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </a>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-b from-primary to-secondary py-16">
        <div className="container mx-auto px-4">
          {/* Latest Release Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-white font-accent">Nieuwste Release</h2>
            <LatestRelease
              title="Op de Vlucht"
              spotifyEmbedId="7BfdCbRErgocMcpDsYVHKP"
            />
          </section>

          {/* Upcoming Shows Section */}
          <section ref={upcomingShowsRef} className="mb-16 relative">
            <h2 className="text-4xl font-bold mb-12 text-center text-white font-accent relative">
              <span className="relative inline-block">
                <span className="absolute -inset-1 bg-secondary/20 transform -skew-x-12"></span>
                <span className="relative">Aankomende Optredens</span>
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Plugged Festival", date: "05 June 2025", location: "Eindhoven" },
                { title: "SPOEL Festival", date: "07 September 2025", location: "Culemborg" },
                { title: "TO BE ANNOUNCED", date: "", location: "" },
                { 
                  title: "TO BE ANNOUNCED", 
                  date: "", 
                  location: "", 
                  link: "",
                  hasTickets: false
                }
              ].map((gig, index) => (
                <div 
                  key={index}
                  className={`relative transform transition-all duration-1000 ${
                    isUpcomingShowsInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 300}ms` }}
                >
                  <div className="absolute inset-0 bg-white/5 transform rotate-1"></div>
                  <div className="relative bg-black/40 backdrop-blur-sm p-6 transform -rotate-1 hover:rotate-0 transition-all duration-500">
                    <div className="absolute inset-0 opacity-10 pointer-events-none noise-bg"></div>
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

                      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-4"></div>

                      {gig.hasTickets && (
                        <div className="relative">
                          <div className="absolute inset-0 bg-secondary/20 transform rotate-1"></div>
                          <a
                            href={gig.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative block bg-secondary hover:bg-accent text-white font-bold py-3 px-6 text-center transform hover:-rotate-1 transition-all duration-300 hover:scale-105 hover:shadow-glow group"
                          >
                            <span className="flex items-center justify-center">
                              <Ticket className="w-5 h-5 mr-2" />
                              Koop tickets
                              <ArrowRight className="ml-2 w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center relative">
              <div className="absolute left-1/2 -translate-x-1/2 w-32 h-1 bg-secondary/30 transform -rotate-12 -translate-y-6"></div>
              <div className="absolute left-1/2 -translate-x-1/2 w-32 h-1 bg-secondary/30 transform rotate-12 -translate-y-6"></div>
              
              <Link 
                to="/optredens" 
                className="inline-block bg-secondary hover:bg-accent text-white font-bold py-3 px-6 transform hover:-rotate-2 transition-all duration-300 hover:scale-105 hover:shadow-glow group"
              >
                <span className="flex items-center justify-center">
                  Bekijk alle optredens
                  <ArrowRight className="ml-2 w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </section>

          <AboutSection />
          <MoreMusicSection />

          {/* Instagram Feed Section */}
          <section>
            <h2 className="text-4xl font-bold mb-8 text-center text-white font-accent">Galerij</h2>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-xl p-6">
              <div className="elfsight-app-971ba9a9-b75b-4ca1-95d1-b752ac7d0b22" data-elfsight-app-lazy></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
