import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Music as MusicIcon, Ticket } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const MusicPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView]);

  const songs = [
    { title: "Doktersvoorschrift", link: "https://open.spotify.com/embed/track/1UCLCZ9tXtN0pmKnfBPe1g" },
    { title: "Geen excuus", link: "https://open.spotify.com/embed/track/3WTd07xKWgTviECZbaedJR" },
    { title: "Toni", link: "https://open.spotify.com/embed/track/50IgShK975gNTyuPmQcxFL" },
    { title: "Doodnormale jongen", link: "https://open.spotify.com/embed/track/2kf4yEiB7hjF4JOjCwBwyP" },
    { title: "Als alles valt", link: "https://open.spotify.com/embed/track/6vN3ixzyhUG4Yqy8M0Xui7" },
    { title: "Blauw licht", link: "https://open.spotify.com/embed/track/1eln29fPg2t0wg3unM4irc" },
    { title: "Kies niet voor mij", link: "https://open.spotify.com/embed/track/4YesFKZjybsdCp2qy8Q2sb" },
    { title: "Vanavond gaat ze dansen", link: "https://open.spotify.com/embed/track/4yuahnGA6D3oJHWioT0dN8" },
    { title: "Niet voor lang", link: "https://open.spotify.com/embed/track/0UEoi1eGmci5e56ijogGlz" },
    { title: "Mistakes", link: "https://open.spotify.com/embed/track/25q5mTNr6IY9mcJJUBUXek" }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary to-secondary py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 font-accent">Muziek & Releases</h1>
        </div>
      </section>

      <div className="bg-gradient-to-b from-primary to-secondary/90 py-16">
        <div className="container mx-auto px-4">
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-white font-accent">Nieuwste Release</h2>
            <div className="relative max-w-4xl mx-auto">
              <div className="noise-bg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className="relative transform -skew-x-6 overflow-hidden torn-edge h-[352px]">
                    <div className="glitch-effect transform skew-x-6 h-full relative">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3M9S2ZF-fNDpUFnx4uBNv4jtg-tO_vKV5pQ&s"
                        alt="Op de Vlucht"
                        className="w-full h-64 object-cover object-top"
                        style={{ objectPosition: "center 15%" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-secondary/50 mix-blend-overlay"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 z-50 p-6 bg-gradient-to-t from-black/90 to-transparent">
                      <h3 className="text-3xl font-bold text-white mb-2 text-center">Op de Vlucht</h3>
                      <p className="text-xl text-white/90 text-center">Nu te beluisteren op Spotify!</p>
                    </div>
                  </div>
                  <div className="relative transform skew-x-6 bg-white/5 backdrop-blur-lg p-4 angular-frame">
                    <div className="transform -skew-x-6">
                      <iframe
                        src="https://open.spotify.com/embed/track/7BfdCbRErgocMcpDsYVHKP"
                        width="100%"
                        height="352"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        className="w-full"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-4xl font-bold mb-8 text-center text-white font-accent mt-16">Recente Releases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="relative transform transition-all duration-1000">
                <div className="absolute inset-0 bg-white/5 transform -rotate-2"></div>
                <div className="relative bg-black/40 backdrop-blur-sm p-6 transform rotate-2 hover:rotate-0 transition-all duration-500">
                  <div className="absolute inset-0 opacity-10 pointer-events-none noise-bg"></div>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white font-heading tracking-wider">Middenweg</h3>
                      <MusicIcon className="w-8 h-8 text-secondary" />
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0 border-2 border-white/10 transform -rotate-1"></div>
                      <iframe
                        src="https://open.spotify.com/embed/track/38hADo4nBKqV2vphQ0zowA?utm_source=generator"
                        width="100%"
                        height="380"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        className="relative z-10"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative transform transition-all duration-1000">
                <div className="absolute inset-0 bg-white/5 transform rotate-2"></div>
                <div className="relative bg-black/40 backdrop-blur-sm p-6 transform -rotate-2 hover:rotate-0 transition-all duration-500">
                  <div className="absolute inset-0 opacity-10 pointer-events-none noise-bg"></div>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-white font-heading tracking-wider">Buitenaards</h3>
                      <MusicIcon className="w-8 h-8 text-secondary" />
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0 border-2 border-white/10 transform rotate-1"></div>
                      <iframe
                        src="https://open.spotify.com/embed/track/3wuI7uacc65M4Q1oRBrGji?utm_source=generator"
                        width="100%"
                        height="380"
                        frameBorder="0"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        className="relative z-10"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-4xl font-bold mb-8 text-center text-white font-accent">Andere Populaire Nummers</h3>
            <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {songs.map((song, index) => (
                <div 
                  key={index} 
                  className={relative transform transition-all duration-1000} ${
                    hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }}
                  style={{ transitionDelay: ${index * 100}ms }}
                >
                  <div className="absolute inset-0 bg-white/5 transform rotate-2"></div>
                  <div className="relative bg-black/40 backdrop-blur-sm p-6 transform -rotate-2 hover:rotate-0 transition-all duration-500">
                    <div className="absolute inset-0 opacity-10 pointer-events-none noise-bg"></div>
                    <div className="relative">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-2xl font-bold text-white font-heading tracking-wider">{song.title}</h4>
                        <MusicIcon className="w-8 h-8 text-secondary" />
                      </div>
                      <div className="relative">
                        <div className="absolute inset-0 border-2 border-white/10 transform rotate-1"></div>
                        <iframe
                          src={${song.link}?utm_source=generator}
                          width="100%"
                          height="152"
                          frameBorder="0"
                          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                          loading="lazy"
                          className="relative z-10 rounded-lg"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-4xl font-bold mb-8 text-center text-white font-accent">Muziekvideo's</h2>
            <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-xl p-6 hover:-translate-y-1 transition-all duration-300">
              <Link to="https://www.youtube.com/channel/UCRv53lUbgxdyuLYZibXAxxw" target="_blank" rel="noopener noreferrer" className="flex items-center">
                <img 
                  src="https://i.ytimg.com/vi/v4_pJB4GSuQ/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AG2CIAC0AWKAgwIABABGH8gEyghMA8=&rs=AOn4CLBGlAcCphIqdUWvgIE70MiaBxyv7w" 
                  alt="Reyck YouTube Channel" 
                  className="w-32 h-auto rounded-lg mr-6 hover:opacity-80 transition-opacity duration-300"
                />
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-white">Reyck YouTube Kanaal</h3>
                  <p className="text-gray-300">Bekijk al onze muziekvideo's op YouTube</p>
                </div>
                <MusicIcon className="ml-auto text-white/80 w-12 h-12" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MusicPage;
