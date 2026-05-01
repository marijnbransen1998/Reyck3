import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Youtube, Menu, X } from 'lucide-react';
import TikTokIcon from './TikTokIcon';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Over Reyck', path: '/biografie' },
    { name: 'Optredens', path: '/optredens' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        isScrolled || !isHomePage || isMenuOpen
          ? 'bg-black bg-opacity-90 py-2 shadow-lg'
          : 'bg-black/50 backdrop-blur-sm md:bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center relative">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/logozwart wit-vrijstaand copy copy.png"
              alt="Reyck Logo"
              className={`transition-all duration-300 ${isScrolled ? 'h-8' : 'h-12'} w-auto`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <h2 key={item.name} className="text-lg tracking-wider font-optien">
                <Link
                  to={item.path}
                  className={`${
                    location.pathname === item.path ? 'text-white' : 'text-white/80'
                  } hover:text-white transition duration-300`}
                >
                  {item.name}
                </Link>
              </h2>
            ))}
          </nav>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex space-x-4">
            <a href="https://www.instagram.com/reyck.band/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition duration-300">
              <Instagram size={24} />
            </a>

            <a href="https://open.spotify.com/artist/36t2vlP5OiRO1G7EgxgNvU?si=vLVuJOQETAGu4eRnmOrMXA" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition duration-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.52 17.34a.75.75 0 0 1-1.03.25c-2.83-1.73-6.4-2.12-10.62-1.16a.75.75 0 1 1-.33-1.46c4.6-1.04 8.57-.58 11.74 1.33.36.22.48.69.24 1.04zm1.47-3.27a.94.94 0 0 1-1.3.3c-3.24-1.99-8.18-2.57-12.01-1.4a.94.94 0 1 1-.55-1.8c4.37-1.34 9.86-.7 13.56 1.57.44.27.58.85.3 1.33zm.13-3.41C15.4 8.37 8.89 8.2 5.3 9.27a1.13 1.13 0 1 1-.65-2.17c4.13-1.25 11.1-1.01 15.46 1.5a1.13 1.13 0 0 1-1.13 1.96z"/>
              </svg>
            </a>

            <a href="https://www.youtube.com/channel/UCRv53lUbgxdyuLYZibXAxxw" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition duration-300">
              <Youtube size={24} />
            </a>

            <a href="https://www.tiktok.com/@reyck.band" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition duration-300">
              <TikTokIcon size={24} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden fixed top-4 right-4 z-50 p-2 rounded-lg transition-colors duration-300 ${
              isScrolled || !isHomePage || isMenuOpen
                ? 'text-white hover:text-white/80 bg-black/90'
                : 'bg-black/90 text-white hover:text-white/80'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 w-full h-full bg-primary bg-opacity-95 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } z-40`}
        style={{ top: '64px' }}
      >
        <nav className="flex flex-col items-center py-8 space-y-6 px-4 overflow-y-auto max-h-[calc(100vh-64px)]">
          {navItems.map((item) => (
            <h2 key={item.name} className="text-xl tracking-wider font-optien">
              <Link
                to={item.path}
                className={`${
                  location.pathname === item.path ? 'text-white' : 'text-white/80'
                } hover:text-white transition duration-300`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </h2>
          ))}

          {/* Mobile Social Icons */}
          <div className="flex space-x-6 mt-8">
            <a href="https://www.instagram.com/reyck.band/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition duration-300">
              <Instagram size={28} />
            </a>

            <a href="https://open.spotify.com/artist/36t2vlP5OiRO1G7EgxgNvU?si=vLVuJOQETAGu4eRnmOrMXA" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition duration-300">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.52 17.34a.75.75 0 0 1-1.03.25c-2.83-1.73-6.4-2.12-10.62-1.16a.75.75 0 1 1-.33-1.46c4.6-1.04 8.57-.58 11.74 1.33.36.22.48.69.24 1.04zm1.47-3.27a.94.94 0 0 1-1.3.3c-3.24-1.99-8.18-2.57-12.01-1.4a.94.94 0 1 1-.55-1.8c4.37-1.34 9.86-.7 13.56 1.57.44.27.58.85.3 1.33zm.13-3.41C15.4 8.37 8.89 8.2 5.3 9.27a1.13 1.13 0 1 1-.65-2.17c4.13-1.25 11.1-1.01 15.46 1.5a1.13 1.13 0 0 1-1.13 1.96z"/>
              </svg>
            </a>

            <a href="https://www.youtube.com/channel/UCRv53lUbgxdyuLYZibXAxxw" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition duration-300">
              <Youtube size={28} />
            </a>

            <a href="https://www.tiktok.com/@reyck.band" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition duration-300">
              <TikTokIcon size={28} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
