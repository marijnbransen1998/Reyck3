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
        <title>Reyck - Officiële Website | Nederrock Band</title>
        <meta name="description" content="Ontdek de Nederrock band Reyck. Beluister onze nieuwste releases en bekijk aankomende optredens." />
        <link rel="canonical" href="https://legendary-longma-12de88.netlify.app/" />
      </Helmet>

     {/* Hero Section */}
<section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
  <div className="absolute inset-0 z-0">
    <video 
      autoPlay 
      muted 
      loop 
      playsInline
      className="w-full h-full object-cover filter grayscale"
    >
      <source src="/promo vid cinetol1.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-black/40"></div>
  </div>
        <div className="relative z-10 text-center flex flex-col items-center max-w-4xl mx-auto px-4">
          <h1 className="text-8xl md:text-9xl font-bold text-white mb-8 font-optien tracking-wider">
            REYCK
          </h1>
          <p 
            className={`text-xl md:text-2xl text-white mb-12 font-optien tracking-widest transition-all duration-1000 transform
              ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '1000ms' }}
          >
            nederrock 'n Roll
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
              className="border-2 border-white text-white hover:bg-white hover:text-black font-optien py-4 px-8 text-lg
                transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Beluister onze muziek</span>
            </a>
          </div>
        </div>
      </section>

      <div className="bg-black py-16">
        <div className="container mx-auto px-4">
          {/* Upcoming Shows Section */}
          <section ref={upcomingShowsRef} className="mb-16 relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white font-optien tracking-wider">
              AANKOMENDE OPTREDENS
            </h2>

            <div className="max-w-4xl mx-auto space-y-8">
              {[
                { title: "VORT MET DE GEIT", date: "30", month: "AUG.", location: "LEXMOND, KOM LEKDIJK 38", time: "18:30" },
                { title: "SPOEL FESTIVAL", date: "31", month: "AUG.", location: "CULEMBORG, WERK AAN HET SPOEL", time: "15:15" },
                { title: "BERGEN LIVE", date: "5", month: "SEP.", location: "BERGEN", time: "-" },
].map((gig, index) => (
                <div 
    key={index}
                  className={`relative transform transition-all duration-1000 ${
      isUpcomingShowsInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
    }`}



                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="flex items-center justify-between py-6 border-b border-white/20">
                      <div className="flex items-center space-x-8">
                        <div className="text-center">
                          <div className="text-4xl md:text-5xl font-bold text-white font-optien">{gig.date}</div>
                          <div className="text-sm text-white/80 font-din">{gig.month}</div>
                        </div>
                        <div className="w-px h-16 bg-white/20"></div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-white font-optien tracking-wider mb-1">{gig.title}</h3>
                          <p className="text-white/80 font-din text-sm">{gig.location}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white font-optien">{gig.time}</div>
                      </div>
                    </div>
                  </div>
))}
            </div>
            <div className="mt-12 text-center">
              
              <Link 
                to="/optredens" 
                className="border-2 border-white text-white hover:bg-white hover:text-black font-optien py-3 px-8 transition-all duration-300"
              >
                Bekijk alle optredens
              </Link>
            </div>
          </section>

          <AboutSection />
          <MoreMusicSection />

          {/* Instagram Feed Section */}
          <section>
            <h2 className="text-4xl font-bold mb-8 text-center text-white font-optien">GALERIJ</h2>
            <div className="bg-white/5 p-6">
              <div className="elfsight-app-971ba9a9-b75b-4ca1-95d1-b752ac7d0b22" data-elfsight-app-lazy></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;