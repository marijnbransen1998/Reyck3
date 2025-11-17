import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import AboutSection from '../components/AboutSection';
import MoreMusicSection from '../components/MoreMusicSection';
import { Helmet } from 'react-helmet-async';

const Home: React.FC = () => {
  const [animate, setAnimate] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const upcomingShowsRef = useRef<HTMLDivElement>(null);
  const instagramRef = useRef<HTMLDivElement>(null);
  const isUpcomingShowsInView = useInView(upcomingShowsRef);
  const isInstagramInView = useInView(instagramRef);

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
        <meta name="description" content="Ontdek de Nederrock band Reyck. Beluister nieuwste releases en bekijk aankomende optredens." />
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
    <img 
      src="/logozwart wit-vrijstaand copy.png" 
      alt="Reyck Logo" 
      className="w-64 md:w-80 h-auto mb-8"
    />

    {/* 🔙 Terug naar originele setup: Nederrock ’n Roll als normale tekst */}
    <p 
      className={`text-xl md:text-2xl text-white mb-12 font-optien tracking-widest transition-all duration-1000 transform
        ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: '1000ms' }}
    >
      Nederrock ’n Roll
    </p>

    <div 
      className={`relative transition-all duration-1000 transform
        ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: '1500ms' }}
    >
      <a 
        href="https://open.spotify.com/artist/36t2vlP5OiRO1G7EgxgNvU?si=irPhwZSJQVuFAUnn64deWA"
        target="_blank"
        rel="noopener noreferrer"
        className="border-2 border-white text-white hover:bg-white hover:text-black font-optien py-4 px-8 text-lg transition-all duration-300 relative overflow-hidden group"
      >
        <span className="relative z-10">Beluister muziek</span>
      </a>
    </div>
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
          {/* ✅ Upcoming Shows Section */}
          <section ref={upcomingShowsRef} className="mb-16 relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white font-optien tracking-wider">
              AANKOMENDE OPTREDENS
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {[
                { title: "'T OUDE POTHUYS", date: "21", month: "NOV.", location: "UTRECHT", time: "23:00" },
                { title: "TOEKOMSTMUZIEK", date: "22", month: "NOV.", location: "AMSTERDAM", time: "20:00" },
              ].map((gig, index) => (
                <div
                  key={index}
                  className={`relative transform transition-all duration-1000 ${
                    isUpcomingShowsInView ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between py-6 border-b border-white/20 gap-4">
                    <div className="flex items-center space-x-4 md:space-x-8">
                      <div className="text-center flex-shrink-0">
                        <div className="text-4xl md:text-5xl font-bold text-white font-optien">{gig.date}</div>
                        <div className="text-sm text-white/80">{gig.month}</div>
                      </div>
                      <div className="w-px h-16 bg-white/20 hidden md:block"></div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:gap-2">
                          <h3 className="text-lg md:text-2xl font-bold text-white font-optien tracking-wider">{gig.title}</h3>
                          <span className="hidden md:inline text-white/60">•</span>
                          <p className="text-white/80 text-sm md:text-base">{gig.location}</p>
                          <span className="md:hidden text-white/60">•</span>
                          <div className="text-sm md:text-2xl font-bold text-white font-optien md:hidden">{gig.time}</div>
                        </div>
                      </div>
                    </div>
                    <div className="text-left md:text-right ml-auto md:ml-0 hidden md:block">
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

          {/* Galerij */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-white font-optien">GALERIJ</h2>
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

                {/* Navigatieknoppen */}
                <button
                  onClick={prevSlide}
                  className="absolute left-1 md:left-2 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black text-white p-2 md:p-3 rounded-full transition-all duration-200 z-10 shadow-lg"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={20} className="md:w-6 md:h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-1 md:right-2 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black text-white p-2 md:p-3 rounded-full transition-all duration-200 z-10 shadow-lg"
                  aria-label="Next image"
                >
                  <ChevronRight size={20} className="md:w-6 md:h-6" />
                </button>

                {/* Puntjes */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                  {galleryImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        currentSlide === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Instagram Feed */}
          <section ref={instagramRef} className="relative z-10">
            <h2 className="text-4xl md:text-4xl font-bold mb-8 text-center text-white font-optien tracking-wider">
              FOLLOW US ON INSTAGRAM
            </h2>
            <div className="p-6 block instagram-widget-container">
              <div className="elfsight-app-971ba9a9-b75b-4ca1-95d1-b752ac7d0b22" data-elfsight-app-lazy></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
