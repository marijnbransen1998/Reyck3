import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Menu, X } from 'lucide-react';
import TikTokIcon from './TikTokIcon';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
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
            {[
              { name: 'Home', path: '/' },
              { name: 'Over Reyck', path: '/biografie' },
              { name: 'Muziek', path: '/muziek' },
              { name: 'Optredens', path: '/optredens' },
              { name: 'Contact', path: '/contact' },
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-din text-lg ${location.pathname === item.path ? 'text-white' : 'text-white/80'} hover:text-white transition duration-300`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex space-x-4">
            <a href="https://www.instagram.com/reyckband/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition duration-300">
              <Instagram size={24} />
            </a>
            <a href="https://www.facebook.com/REYCKBAND/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition duration-300">
              <Facebook size={24} />
            </a>
            <a href="https://www.youtube.com/channel/UCRv53lUbgxdyuLYZibXAxxw" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition duration-300">
              <Youtube size={24} />
            </a>
            <a href="https://www.tiktok.com/@reyckband" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition duration-300">
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
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
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
          {[
            { name: 'Home', path: '/' },
            { name: 'Over Reyck', path: '/biografie' },
            { name: 'Muziek', path: '/muziek' },
            { name: 'Optredens', path: '/optredens' },
            { name: 'Contact', path: '/contact' },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`font-din text-xl ${
                location.pathname === item.path ? 'text-white' : 'text-white/80'
              } hover:text-white transition duration-300`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Social Icons */}
          <div className="flex space-x-6 mt-8">
            <a href="https://www.instagram.com/reyckband/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition duration-300">
              <Instagram size={28} />
            </a>
            <a href="https://www.facebook.com/REYCKBAND/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition duration-300">
              <Facebook size={28} />
            </a>
            <a href="https://www.youtube.com/channel/UCRv53lUbgxdyuLYZibXAxxw" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition duration-300">
              <Youtube size={28} />
            </a>
            <a href="https://www.tiktok.com/@reyckband" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition duration-300">
              <TikTokIcon size={28} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;