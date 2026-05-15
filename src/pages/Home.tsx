```tsx id="j9x2km"
import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Instagram,
  Music2,
  Mail
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
    setCurrentSlide((prev) => (
      prev - 1 + galleryImages.length
    ) % galleryImages.length);
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

        <meta
          name="description"
          content="REYCK | Nederrock 'n Roll"
        />

        <link
          rel="canonical"
          href="https://legendary-longma-12de88.netlify.app/"
        />
      </Helmet>

      {/* HEADER */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-sm border-b border-white/10">
        <div className="w-full px-4 md:px-8 py-4 flex items-center justify-between">

          {/* LEFT LOGO */}
          <a href="#home" className="flex-shrink-0">
            <img
              src="/logozwart wit-vrijstaand copy.png"
              alt="REYCK"
              className="w-24 md:w-32 h-auto"
            />
          </a>

          {/* CENTER NAVIGATION */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            <a
              href="#home"
              className="text-white hover:text-gray-300 text-sm tracking-[0.25em] uppercase font-optien transition-all duration-300"
            >
              Home
            </a>

            <a
              href="#live"
              className="text-white hover:text-gray-300 text-sm tracking-[0.25em] uppercase font-optien transition-all duration-300"
            >
              Live
            </a>

            <a
              href="#music"
              className="text-white hover:text-gray-300 text-sm tracking-[0.25em] uppercase font-optien transition-all duration-300"
            >
              Music
            </a>

            <a
              href="#foto"
              className="text-white hover:text-gray-300 text-sm tracking-[0.25em] uppercase font-optien transition-all duration-300"
            >
              Foto
            </a>

            <a
              href="#contact"
              className="text-white hover:text-gray-300 text-sm tracking-[0.25em] uppercase font-optien transition-all duration-300"
            >
              Contact
            </a>
          </div>

          {/* RIGHT SOCIALS */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-all duration-300"
            >
              <Instagram size={20} />
            </a>

            <a
              href="https://spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition-all duration-300"
            >
              <Music2 size={20} />
            </a>

            <a
              href="mailto:info@reyck.nl"
              className="text-white hover:text-gray-300 transition-all duration-300"
            >
              <Mail size={20} />
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
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover filter grayscale"
          >
            <source
              src="/promo vid cinetol1.mp4"
              type="video/mp4"
            />
          </video>

          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center flex flex-col items-center max-w-4xl mx-auto px-4">
          <img
            src="/logozwart wit-vrijstaand copy.png"
            alt="Reyck Logo"
            className="w-64 md:w-80 h-auto mb-8"
          />

          <p
            className={`text-xl md:text-2xl text-white mb-12 font-optien tracking-widest transition-all duration-1000 transform
            ${
              animate
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '1000ms' }}
          >
            Nederrock ’n Roll
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div
        className="py-16"
        style={{
          backgroundImage:
            'url(/achtergrond-sfeerfoto-groenoranje.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4">

          {/* LIVE */}
          <section
            id="live"
            ref={upcomingShowsRef}
            className="mb-16 relative scroll-mt-24"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white font-optien tracking-wider">
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
              ].map((gig, index) => (
                <div
                  key={index}
                  className={`relative transform transition-all duration-1000 ${
                    isUpcomingShowsInView
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-20 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between py-6 border-b border-white/20 gap-4">

                    <div className="flex items-center space-x-4 md:space-x-8">
                      <div className="text-center flex-shrink-0">
                        <div className="text-4xl md:text-5xl font-bold text-white font-optien">
                          {gig.date}
                        </div>

                        <div className="text-sm text-white/80">
                          {gig.month}
                        </div>
                      </div>

                      <div className="w-px h-16 bg-white/20 hidden md:block"></div>

                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:gap-2">

                          <h3 className="text-lg md:text-2xl font-bold text-white font-optien tracking-wider">
                            {gig.title}
                          </h3>

                          <span className="hidden md:inline text-white/60">
                            •
                          </span>

                          <p className="text-white/80 text-sm md:text-base">
                            {gig.location}
                          </p>

                        </div>
                      </div>
                    </div>

                    <div className="text-left md:text-right ml-auto md:ml-0">
                      <div className="text-2xl font-bold text-white font-optien">
                        {gig.time}
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* MUSIC */}
          <section
            id="music"
            className="mb-24 scroll-mt-24"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white font-optien tracking-wider">
              MUSIC
            </h2>

            <AboutSection />
          </section>

          {/* FOTO */}
          <section
            id="foto"
            className="mb-24 scroll-mt-24"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white font-optien tracking-wider">
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
                    <div
                      key={index}
                      className="w-full flex-shrink-0"
                    >
                      <div className="relative px-2 md:mx-4">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-[300px] md:h-[500px] object-cover object-center rounded-lg shadow-xl"
                          loading="eager"
                          style={{
                            objectPosition: image.position
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={prevSlide}
                  className="absolute left-1 md:left-2 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black text-white p-2 md:p-3 rounded-full transition-all duration-200 z-10 shadow-lg"
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-1 md:right-2 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black text-white p-2 md:p-3 rounded-full transition-all duration-200 z-10 shadow-lg"
                >
                  <ChevronRight size={20} />
                </button>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                  {galleryImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full ${
                        currentSlide === index
                          ? 'bg-white scale-125'
                          : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>

              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section
            id="contact"
            className="pb-12 scroll-mt-24"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white font-optien tracking-wider">
              CONTACT
            </h2>

            <div className="text-center text-white space-y-4">
              <p className="text-lg tracking-wider">
                info@reyck.nl
              </p>

              <p className="text-lg tracking-wider">
                Instagram: @reyckmusic
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Home;
```
