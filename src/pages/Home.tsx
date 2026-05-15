import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Instagram, Music, Mail } from 'lucide-react';
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
    { src: '/reyck analoog-28 (1) copy copy.jpg', alt: 'Reyck Band Photo 1', position: 'center 65%' },
    { src: '/reyck analoog-56 (1) copy copy.jpg', alt: 'Reyck Band Photo 2', position: 'center 30%' },
    { src: '/reyck analoog-13 (1) (1) copy copy.jpg', alt: 'Reyck Band Photo 3', position: 'center 30%' },
    { src: '/reyckdigi-081 (1) copy copy.jpg', alt: 'Reyck Band Photo 4', position: 'center 30%' }
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
        <link rel="canonical" href="https://legendary-longma-12de88.netlify.app/" />
      </Helmet>

      {/* HEADER (FIXED) */}
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

          {/* CENTER NAV (JUISTE VOLGORDE) */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            <a href="#home" className="text-white hover:text-gray-300 font-optien tracking-wider">
              Home
            </a>
            <a href="#live" className="text-white hover:text-gray-300 font-optien tracking-wider">
              Live
            </a>
            <a href="#music" className="text-white hover:text-gray-300 font-optien tracking-wider">
              Music
            </a>
            <a href="#foto" className="text-white hover:text-gray-300 font-optien tracking-wider">
              Foto
            </a>
            <a href="#contact" className="text-white hover:text-gray-300 font-optien tracking-wider">
              Contact
            </a>
          </div>

          {/* RIGHT SOCIALS (BEHOUDEN) */}
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram size={20} className="text-white hover:text-gray-300" />
            </a>
            <a href="https://spotify.com" target="_blank" rel="noopener noreferrer">
              <Music size={20} className="text-white hover:text-gray-300" />
            </a>
            <a href="mailto:info@reyck.nl">
              <Mail size={20} className="text-white hover:text-gray-300" />
            </a>
          </div>

        </div>
      </nav>

      {/* HERO (ONGEWIJZIGD) */}
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

          <p
            className={`text-xl md:text-2xl text-white mb-12 font-optien tracking-widest transition-all duration-1000 transform
              ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '1000ms' }}
          >
            Nederrock ’n Roll
          </p>
        </div>
      </section>

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
          <section id="live" ref={upcomingShowsRef} className="mb-16 relative scroll-mt-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white font-optien tracking-wider">
              LIVE
            </h2>

            <div className="max-w-4xl mx-auto space-y-8">
              {[
                { title: "ELEMENTS BOARDFESTIVAL", date: "28", month: "JUN.", location: "SURFSCHOOL SENANG", time: "TBA" },
              ].map((gig, index) => (
                <div
                  key={index}
                  className={`transition-all duration-1000 ${
                    isUpcomingShowsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex justify-between border-b border-white/20 py-6 text-white">
                    <div>
                      <div className="text-3xl font-optien">{gig.date}</div>
                      <div className="text-sm">{gig.month}</div>
                    </div>

                    <div className="flex-1 px-6">
                      <div className="font-bold">{gig.title}</div>
                      <div className="text-sm opacity-70">{gig.location}</div>
                    </div>

                    <div className="text-right font-bold">
                      {gig.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* MUSIC */}
          <section id="music" className="mb-24 scroll-mt-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white font-optien">
              MUSIC
            </h2>

            <AboutSection />
          </section>

          {/* FOTO */}
          <section id="foto" className="mb-24 scroll-mt-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white font-optien">
              FOTO
            </h2>

            <div className="relative max-w-4xl mx-auto">
              <div className="overflow-hidden rounded-lg">
                <div
                  className="flex transition-transform duration-300"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {galleryImages.map((img, i) => (
                    <img
                      key={i}
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-[300px] md:h-[500px] object-cover flex-shrink-0"
                      style={{ objectPosition: img.position }}
                    />
                  ))}
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <button onClick={prevSlide} className="text-white">
                  <ChevronLeft />
                </button>
                <button onClick={nextSlide} className="text-white">
                  <ChevronRight />
                </button>
              </div>
            </div>
          </section>

          {/* CONTACT (NIEUW TOEGEVOEGD) */}
          <section id="contact" className="scroll-mt-24 text-center text-white pb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-optien">
              CONTACT
            </h2>

            <p className="text-lg">info@reyck.nl</p>
            <p className="text-lg">Instagram: @reyckmusic</p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Home;
