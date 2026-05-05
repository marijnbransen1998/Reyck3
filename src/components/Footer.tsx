import React from 'react';
import { Instagram, Youtube } from 'lucide-react';
import TikTokIcon from './TikTokIcon';

const SpotifyIcon = ({ size = 28 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12C24 5.373 18.627 0 12 0zm5.292 17.292a.75.75 0 01-1.03.256c-2.82-1.72-6.364-2.11-10.53-1.16a.75.75 0 11-.334-1.462c4.55-1.04 8.49-.6 11.66 1.33a.75.75 0 01.234 1.036zm1.47-3.27a.94.94 0 01-1.29.32c-3.23-1.98-8.15-2.56-11.97-1.4a.94.94 0 01-.54-1.8c4.32-1.31 9.72-.67 13.51 1.62.44.27.58.85.29 1.26zm.13-3.41C15.03 8.5 8.98 8.2 5.35 9.32a1.13 1.13 0 01-.66-2.16c4.17-1.28 11.11-1.03 15.46 1.6a1.13 1.13 0 11-1.23 1.85z"/>
  </svg>
);

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
            <a href="https://www.instagram.com/reyck.band/" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition duration-300">
              <Instagram size={28} />
            </a>

            {/* Spotify (vervangt Facebook) */}
            <a href="https://open.spotify.com/artist/36t2vlP5OiRO1G7EgxgNvU?si=6XGaYodjTpGaRupBWU0J5A" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition duration-300">
              <SpotifyIcon size={28} />
            </a>

            <a href="https://www.youtube.com/channel/UCRv53lUbgxdyuLYZibXAxxw" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition duration-300">
              <Youtube size={28} />
            </a>
            <a href="https://www.tiktok.com/@reyck.band" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition duration-300">
              <TikTokIcon size={28} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
