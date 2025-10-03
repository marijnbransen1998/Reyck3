import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Music2, Calendar, MapPin } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { Helmet } from 'react-helmet-async';

const HomeCreative: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const aboutRef = useRef<HTMLDivElement>(null);
  const showsRef = useRef<HTMLDivElement>(null);
  const isAboutInView = useInView(aboutRef);
  const isShowsInView = useInView(showsRef);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.5;

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <Helmet>
        <title>Reyck - Officiële Website | Nederrock Band</title>
        <meta name="description" content="Ontdek de Nederrock band Reyck. Beluister onze nieuwste releases en bekijk aankomende optredens." />
        <link rel="canonical" href="https://legendary-longma-12de88.netlify.app/" />
      </Helmet>

      {/* Hero Section - Full viewport with parallax */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 z-0"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-60"
          >
            <source src="/promo vid cinetol1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
        </div>

        <div className="relative z-10 text-center px-4">
          <div className="mb-12 transform hover:scale-105 transition-transform duration-700">
            <img
              src="/logozwart wit-vrijstaand copy.png"
              alt="Reyck Logo"
              className="w-72 md:w-96 h-auto mx-auto drop-shadow-2xl"
            />
          </div>
          <h1 className="text-3xl md:text-5xl text-white font-optien tracking-[0.3em] mb-8 animate-fade-in">
            NEDERROCK 'N ROLL
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://open.spotify.com/artist/36t2vlP5OiRO1G7EgxgNvU?si=irPhwZSJQVuFAUnn64deWA"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-white text-black font-optien text-lg overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Music2 size={20} />
                LUISTER NU
              </span>
              <div className="absolute inset-0 bg-[#6D3200] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
            <a
              href="#shows"
              className="px-8 py-4 border-2 border-white text-white font-optien text-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              OPTREDENS
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white rounded-full animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* About Section - Overlapping design */}
      <section ref={aboutRef} className="relative min-h-screen flex items-center py-20" style={{ backgroundColor: '#6D3200' }}>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent"></div>

        <div className="container mx-auto px-4 max-w-6xl">
          <div className={`grid md:grid-cols-2 gap-12 items-center transform transition-all duration-1000 ${
            isAboutInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-white/10 transform rotate-3 transition-transform group-hover:rotate-6"></div>
              <div className="relative transform -rotate-3 transition-transform group-hover:rotate-0">
                <img
                  src="/reyck analoog-13 (1) (1).jpg"
                  alt="Reyck Band"
                  className="w-full h-auto shadow-2xl"
                />
              </div>
            </div>

            <div className="text-white space-y-6">
              <h2 className="text-5xl md:text-7xl font-bold font-optien tracking-wider mb-8">
                OVER<br />REYCK
              </h2>
              <p className="text-lg md:text-xl leading-relaxed font-optien">
                Reyck ademt onversneden Nederrock. De band durft de Nederlandse taal te omhullen in een dikke boterham van rock 'n roll en serveert een gloednieuw, eigen gerecht, dat vertrouwd smaakt.
              </p>
              <p className="text-lg md:text-xl leading-relaxed font-optien">
                Met hun rauwe sound brengen ze je lijf in beweging. De teksten? Je kent ze niet, maar iets in je wil ze meteen meezingen - alsof ze al die tijd al ergens op je lagen te wachten...
              </p>
              <Link
                to="/biografie"
                className="inline-block mt-8 border-2 border-white text-white hover:bg-white hover:text-[#6D3200] font-optien py-3 px-8 transition-all duration-300 hover:scale-105"
              >
                LEES MEER →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Shows Section - Immersive dark layout */}
      <section id="shows" ref={showsRef} className="relative min-h-screen flex items-center py-20 bg-black">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#6D3200] to-black"></div>
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <h2 className={`text-5xl md:text-7xl font-bold mb-16 text-center text-white font-optien tracking-wider transform transition-all duration-1000 ${
            isShowsInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            AANKOMENDE<br />OPTREDENS
          </h2>

          <div className="space-y-6">
            {[
              { title: "HOFMAN", date: "6", month: "NOV", location: "UTRECHT", time: "20:30" },
              { title: "TOEKOMSTMUZIEK", date: "22", month: "NOV", location: "AMSTERDAM", time: "20:00" },
            ].map((gig, index) => (
              <div
                key={index}
                className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] transform ${
                  isShowsInView ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex items-center gap-8">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-white font-optien">{gig.date}</div>
                      <div className="text-xl text-white/70 font-din">{gig.month}</div>
                    </div>

                    <div className="hidden md:block w-px h-20 bg-white/20 group-hover:bg-white/40 transition-colors"></div>

                    <div>
                      <h3 className="text-3xl font-bold text-white font-optien tracking-wider mb-2">{gig.title}</h3>
                      <div className="flex items-center gap-2 text-white/70">
                        <MapPin size={16} />
                        <span className="font-din text-lg">{gig.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-3xl font-bold text-white font-optien">{gig.time}</div>
                    </div>
                    <div className="hidden md:block w-12 h-12 border-2 border-white rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                      <Calendar size={24} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/optredens"
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-black font-optien py-4 px-12 text-lg transition-all duration-300 hover:scale-105"
            >
              ALLE OPTREDENS
            </Link>
          </div>
        </div>
      </section>

      {/* Music Section - Split layout */}
      <section className="relative min-h-screen flex items-center" style={{ backgroundColor: '#6D3200' }}>
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-5xl md:text-7xl font-bold mb-16 text-center text-white font-optien tracking-wider">
            MUZIEK
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/30 backdrop-blur-sm p-8 hover:bg-black/40 transition-all duration-300 group">
              <div className="aspect-square mb-6 overflow-hidden">
                <iframe
                  src="https://open.spotify.com/embed/track/18j5JiVS1EpIz6LwKdJxNe?utm_source=generator"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="transform group-hover:scale-105 transition-transform duration-500"
                ></iframe>
              </div>
              <h3 className="text-2xl font-bold text-white font-optien mb-2">LAATSTE RELEASE</h3>
              <p className="text-white/70 font-din">Beluister onze nieuwste track</p>
            </div>

            <div className="bg-black/30 backdrop-blur-sm p-8 hover:bg-black/40 transition-all duration-300 group">
              <div className="aspect-square mb-6 overflow-hidden">
                <iframe
                  src="https://open.spotify.com/embed/album/3TvSGzAjPzPIFDPBc9A8eL?utm_source=generator"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="transform group-hover:scale-105 transition-transform duration-500"
                ></iframe>
              </div>
              <h3 className="text-2xl font-bold text-white font-optien mb-2">MEER MUZIEK</h3>
              <Link to="/muziek" className="text-white/70 font-din hover:text-white transition-colors">
                Ontdek onze volledige collectie →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Full width immersive */}
      <section className="relative py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-7xl font-bold mb-16 text-center text-white font-optien tracking-wider">
            GALERIJ
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              '/shoot-snackbar (1) copy copy.webp',
              '/shoot-bank (1) copy copy.webp',
              '/reyckdigi-081 (1) copy.webp',
              '/reyckdigi-027 (1) copy.webp',
              '/shoot-witteshirts-_1__1 copy.webp',
              '/shoot-trap-_1__1.webp'
            ].map((img, index) => (
              <div key={index} className="relative overflow-hidden group aspect-square">
                <img
                  src={img}
                  alt={`Reyck ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#6D3200]/0 group-hover:bg-[#6D3200]/30 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section - Modern social feed */}
      <section className="relative py-20" style={{ backgroundColor: '#6D3200' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Instagram size={48} className="text-white mx-auto mb-4" />
            <h2 className="text-4xl md:text-6xl font-bold text-white font-optien tracking-wider mb-4">
              VOLG ONS
            </h2>
            <p className="text-white/80 text-xl font-optien">@reyckband</p>
          </div>

          <div className="elfsight-app-971ba9a9-b75b-4ca1-95d1-b752ac7d0b22" data-elfsight-app-lazy></div>
        </div>
      </section>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scroll {
          0% { opacity: 0; transform: translateY(0); }
          50% { opacity: 1; }
          100% { opacity: 0; transform: translateY(10px); }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HomeCreative;
