import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Instagram,
  Music,
  Mail,
  Youtube,
  Music2
} from 'lucide-react';

import TikTokIcon from '../components/TikTokIcon';

import { useInView } from '../hooks/useInView';
import AboutSection from '../components/AboutSection';
import { Helmet } from 'react-helmet-async';

/* ✔ Spotify icon exact zoals footer */
const SpotifyIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12C24 5.373 18.627 0 12 0zm5.292 17.292a.75.75 0 01-1.03.256c-2.82-1.72-6.364-2.11-10.53-1.16a.75.75 0 11-.334-1.462c4.55-1.04 8.49-.6 11.66 1.33a.75.75 0 01.234 1.036zm1.47-3.27a.94.94 0 01-1.29.32c-3.23-1.98-8.15-2.56-11.97-1.4a.94.94 0 01-.54-1.8c4.32-1.31 9.72-.67 13.51 1.62.44.27.58.85.29 1.26zm.13-3.41C15.03 8.5 8.98 8.2 5.35 9.32a1.13 1.13 0 01-.66-2.16c4.17-1.28 11.11-1.03 15.46 1.6a1.13 1.13 0 11-1.23 1.85z"/>
  </svg>
);

const Home: React.FC = () => {
  const [animate, setAnimate] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const upcomingShowsRef = useRef<HTMLDivElement>(null);
  const isUpcomingShowsInView = useInView(upcomingShowsRef);

  const galleryImages = [
    {
      src: '/reyck analoog-28 (1) copy copy.jpg',
      alt: 'Reyck Band Photo 1',
      position: 'center 65%'
    },
    {
      src: '/reyck analoog-56 (1) copy copy.jpg',
      alt: 'Reyck Band Photo 2',
      position: 'center 30%'
    },
    {
      src: '/reyck analoog-13 (1) (1) copy copy.jpg',
      alt: 'Reyck Band Photo 3',
      position: 'center 30%'
    },
    {
      src: '/reyckdigi-081 (1) copy copy.jpg',
      alt: 'Reyck Band Photo 4',
      position: 'center 30%'
    }
  ];

  useEffect(() => {
    setAnimate(true);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  useEffect(() => {
    if (intervalId) clearInterval(intervalId);
    const newInterval = setInterval(nextSlide, 6000);
    setIntervalId(newInterval);
    return () => clearInterval(newInterval);
  }, [currentSlide]);

  return (
    <div className="min-h-screen">

      <Helmet>
        <title>REYCK | Nederrock 'n Roll</title>
        <meta name="description" content="REYCK | Nederrock 'n Roll" />
      </Helmet>

      {/* HEADER */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-sm border-b border-white/10">
        <div className="w-full px-4 md:px-8 py-4 flex items-center justify-between">

          <a href="#home" className="flex-shrink-0">
            <img
              src="/logozwart wit-vrijstaand copy.png"
              alt="REYCK"
              className="w-24 md:w-32 h-auto"
            />
          </a>

          <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">

            <a href="#home" className="text-white hover:text-gray-300 text-xs md:text-sm tracking-[0.25em] uppercase font-optien">
              Home
            </a>

            <a href="#live" className="text-white hover:text-gray-300 text-xs md:text-sm tracking-[0.25em] uppercase font-optien">
              Live
            </a>

            <a href="#music" className="text-white hover:text-gray-300 text-xs md:text-sm tracking-[0.25em] uppercase font-optien">
              Music
            </a>

            <a href="#foto" className="text-white hover:text-gray-300 text-xs md:text-sm tracking-[0.25em] uppercase font-optien">
              Foto
            </a>

            <a href="#contact" className="text-white hover:text-gray-300 text-xs md:text-sm tracking-[0.25em] uppercase font-optien">
              Contact
            </a>

          </div>

          {/* ✔ ONLY CHANGE HERE: correct icons */}
          <div className="flex items-center gap-4 text-white">

            <a href="https://www.instagram.com/reyck.band" target="_blank">
              <Instagram size={18} />
            </a>

            <a href="https://open.spotify.com/artist/36t2vlP5OiRO1G7EgxgNvU?si=rGWmL_YjTlKlZ26VeyRxPA" target="_blank">
              <SpotifyIcon size={18} />
            </a>

            <a href="https://www.youtube.com/@reyck2368" target="_blank">
              <Youtube size={18} />
            </a>

            <a href="https://www.tiktok.com/@reyck.band" target="_blank">
              <TikTokIcon size={18} />
            </a>

          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden bg-black scroll-mt-24 pt-32 md:pt-36"
      >
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover filter grayscale">
            <source src="/promo vid cinetol1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center flex flex-col items-center max-w-4xl mx-auto px-4">
          <img
            src="/logozwart wit-vrijstaand copy.png"
            alt="Reyck Logo"
            className="w-64 md:w-80 h-auto mb-8"
          />

          <p className={`text-xl md:text-2xl text-white mb-12 font-optien tracking-widest transition-all duration-1000 transform
            ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Nederrock ’n Roll
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div
        className="py-16"
        style={{
          backgroundImage: 'url(/achtergrond-sfeerfoto-groenoranje.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4">

          {/* LIVE */}
          <section id="live" ref={upcomingShowsRef} className="mb-16 scroll-mt-24">

            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white font-optien tracking-wider">
              LIVE
            </h2>

            <div className="max-w-4xl mx-auto space-y-8">
              {[
                {
                  title: "ELEMENTS BOARDFESTIVAL",
                  date: "28",
                  month: "JUN.",
                  location: "SURFSCHOOL SENANG",
                  time: "TBA"
                },
                {
                  title: "ORCA OPEN AIR",
                  date: "11",
                  month: "AUG.",
                  location: "TBA",
                  time: "17:30"
                }
              ].map((gig, index) => (
                <div key={index} className="border-b border-white/20 py-6">

                  <div className="flex flex-col md:flex-row md:justify-between">

                    <div className="flex items-center gap-6">
                      <div className="text-white font-optien text-4xl">
                        {gig.date}
                      </div>

                      <div>
                        <h3 className="text-white font-optien text-xl">
                          {gig.title}
                        </h3>
                        <p className="text-white/70 text-sm">
                          {gig.location}
                        </p>
                      </div>
                    </div>

                    <div className="text-white font-optien text-lg">
                      {gig.time}
                    </div>

                  </div>

                </div>
              ))}
            </div>
          </section>

          {/* MUSIC */}
          <section id="music" className="mb-24 scroll-mt-24">

            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white font-optien tracking-wider">
              MUSIC
            </h2>

            <AboutSection />

          </section>

          {/* FOTO */}
          <section id="foto" className="mb-24 scroll-mt-24">

            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white font-optien tracking-wider">
              FOTO
            </h2>

            <div className="relative max-w-4xl mx-auto px-4 md:px-0">

              <div className="relative overflow-hidden rounded-lg">

                <div
                  className="flex transition-transform duration-300 ease-out"
                  style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                  }}
                >
                  {galleryImages.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0">

                      <div className="relative px-2 md:mx-4">

                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-[300px] md:h-[500px] object-cover object-center rounded-lg shadow-xl"
                          loading="eager"
                          style={{ objectPosition: image.position }}
                        />

                      </div>

                    </div>
                  ))}
                </div>

                <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 text-white p-2 rounded-full">
                  <ChevronLeft size={20} />
                </button>

                <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 text-white p-2 rounded-full">
                  <ChevronRight size={20} />
                </button>

              </div>

            </div>

          </section>

          {/* CONTACT */}
          <section id="contact" className="pb-12 scroll-mt-24">

            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white font-optien tracking-wider">
              CONTACT
            </h2>

            <div className="grid md:grid-cols-2 gap-8 text-white max-w-5xl mx-auto">

              <div className="space-y-4 text-center">
                <p className="text-lg">
                  reyckband@hotmail.com
                </p>
              </div>

              <form className="space-y-3">
                <input className="w-full p-3 bg-black/40 border border-white/20" placeholder="Naam" />
                <input className="w-full p-3 bg-black/40 border border-white/20" placeholder="Email" />
                <button className="w-full border border-white py-3 hover:bg-white hover:text-black transition">
                  Inschrijven
                </button>
              </form>

            </div>

          </section>

        </div>
      </div>

    </div>
  );
};

export default Home;
