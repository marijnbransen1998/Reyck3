import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Instagram,
  Music,
  Mail,
  Youtube,
  Music2,
  Spotify
} from 'lucide-react';

import { useInView } from '../hooks/useInView';
import AboutSection from '../components/AboutSection';
import { Helmet } from 'react-helmet-async';

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

          {/* NAV */}
          <div className="hidden md:flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2">

            <a href="#home" className="text-white hover:text-gray-300 text-[11px] md:text-xs tracking-[0.25em] uppercase font-optien">
              Home
            </a>

            <a href="#live" className="text-white hover:text-gray-300 text-[11px] md:text-xs tracking-[0.25em] uppercase font-optien">
              Live
            </a>

            <a href="#music" className="text-white hover:text-gray-300 text-[11px] md:text-xs tracking-[0.25em] uppercase font-optien">
              Music
            </a>

            <a href="#foto" className="text-white hover:text-gray-300 text-[11px] md:text-xs tracking-[0.25em] uppercase font-optien">
              Foto
            </a>

            <a href="#contact" className="text-white hover:text-gray-300 text-[11px] md:text-xs tracking-[0.25em] uppercase font-optien">
              Contact
            </a>

          </div>

          {/* SOCIALS */}
          <div className="flex items-center gap-4 text-white">

            <a href="https://www.instagram.com/reyck.band" target="_blank">
              <Instagram size={18} />
            </a>

            <a href="https://open.spotify.com/artist/36t2vlP5OiRO1G7EgxgNvU?si=rGWmL_YjTlKlZ26VeyRxPA" target="_blank">
              <Music2 size={18} />
            </a>

            <a href="https://www.youtube.com/@reyck2368" target="_blank">
              <Youtube size={18} />
            </a>

            <a href="https://www.tiktok.com/@reyck.band" target="_blank">
              <Music size={18} />
            </a>

          </div>

        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-black scroll-mt-24 pt-32 md:pt-36">

        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover filter grayscale">
            <source src="/promo vid cinetol1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center flex flex-col items-center max-w-4xl mx-auto px-4">
          <img src="/logozwart wit-vrijstaand copy.png" className="w-64 md:w-80 mb-8" />

          <p className={`text-xl md:text-2xl text-white mb-12 font-optien tracking-widest transition-all duration-1000 transform
            ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Nederrock ’n Roll
          </p>
        </div>

      </section>

      {/* CONTENT */}
      <div className="py-16" style={{
        backgroundImage: 'url(/achtergrond-sfeerfoto-groenoranje.jpg)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover'
      }}>

        <div className="container mx-auto px-4">

          {/* LIVE */}
          <section id="live" ref={upcomingShowsRef} className="mb-16 scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-optien text-white text-center mb-8">
              LIVE
            </h2>
          </section>

          {/* MUSIC */}
          <section id="music" className="mb-24 scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-optien text-white text-center mb-8">
              MUSIC
            </h2>

            <AboutSection />
          </section>

          {/* FOTO (UNCHANGED STRUCTURE) */}
          <section id="foto" className="mb-24 scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-optien text-white text-center mb-8">
              FOTO
            </h2>

            <div className="relative max-w-4xl mx-auto overflow-hidden">
              <div className="flex transition-transform duration-300"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}>

                {galleryImages.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    className="w-full h-[400px] object-cover flex-shrink-0"
                  />
                ))}

              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="pb-12 scroll-mt-24">

            <h2 className="text-3xl md:text-4xl font-optien text-white text-center mb-8">
              CONTACT
            </h2>

            <div className="grid md:grid-cols-2 gap-8 text-white max-w-5xl mx-auto">

              <div className="text-center space-y-4">
                <p>reyckband@hotmail.com</p>
              </div>

              <form className="space-y-3">
                <input className="w-full p-3 bg-black/40 border border-white/20" placeholder="Naam" />
                <input className="w-full p-3 bg-black/40 border border-white/20" placeholder="Email" />
                <button className="w-full border border-white py-3 hover:bg-white hover:text-black">
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
