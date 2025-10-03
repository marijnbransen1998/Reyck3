import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import TikTokIcon from './TikTokIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <img
              src="/logozwart wit-vrijstaand copy.png"
              alt="Reyck Logo"
              className="h-8 w-auto"
            />
          </div>
          <div className="flex space-x-6">
            <a href="https://www.instagram.com/reyckband/" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition duration-300">
              <Instagram size={28} />
            </a>
            <a href="https://www.facebook.com/REYCKBAND/" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition duration-300">
              <Facebook size={28} />
            </a>
            <a href="https://www.youtube.com/channel/UCRv53lUbgxdyuLYZibXAxxw" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition duration-300">
              <Youtube size={28} />
            </a>
            <a href="https://www.tiktok.com/@reyckband" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition duration-300">
              <TikTokIcon size={28} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>Ontworpen door Bolt AI</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;