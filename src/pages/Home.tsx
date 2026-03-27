import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import AboutSection from '../components/AboutSection';
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
        <meta name="description" content="REYCK | Nederrock 'n Roll" />
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
          {/* Upcoming Shows */}
          <section ref={upcomingShowsRef} className="mb-16 relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white font-optien tracking-wider">
              AANKOMENDE OPTREDENS
            </h2>
            {/* ... unchanged content ... */}
          </section>

          <AboutSection />

          {/* Galerij */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center text-white font-optien">GALERIJ</h2>
            {/* ... unchanged gallery code ... */}
          </section>

          {/* Instagram */}
          <section ref={instagramRef} className="relative z-10">
            <h2 className="text-4xl md:text-4xl font-bold mb-8 text-center text-white font-optien tracking-wider">
              VOLG REYCK OP INSTAGRAM
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
