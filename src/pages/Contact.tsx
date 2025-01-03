import React, { useState } from 'react';
import { Send, Instagram, Facebook, Youtube } from 'lucide-react';
import TikTokIcon from '../components/TikTokIcon';

const Contact: React.FC = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto URL with just the message
    const mailtoUrl = `mailto:reyckband@hotmail.com?subject=Bericht via website&body=${encodeURIComponent(message)}`;
    
    // Open default email client
    window.location.href = mailtoUrl;
    
    // Reset form
    setMessage('');
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-primary to-secondary py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 font-accent">Contact</h1>
          <p className="text-2xl md:text-3xl text-white">Neem contact met ons op</p>
        </div>
      </section>

      <div className="bg-gradient-to-b from-primary to-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg rounded-lg shadow-xl p-8 transition-all duration-300 hover:shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="message" className="block text-white font-bold mb-2">
                  Bericht
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-white placeholder-white/50"
                  rows={5}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-secondary hover:bg-accent text-white font-bold py-3 px-6 rounded-full transition-all duration-300 flex items-center justify-center hover:shadow-[0_0_30px_rgba(212,20,90,0.6)] hover:-translate-y-1"
              >
                <Send className="mr-2" size={20} />
                Verstuur Bericht
              </button>
            </form>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Volg ons op social media</h2>
            <div className="flex justify-center space-x-8">
              <a href="https://www.instagram.com/reyckband/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-all duration-300 hover:-translate-y-1">
                <Instagram size={40} />
              </a>
              <a href="https://www.facebook.com/REYCKBAND/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-all duration-300 hover:-translate-y-1">
                <Facebook size={40} />
              </a>
              <a href="https://www.youtube.com/channel/UCRv53lUbgxdyuLYZibXAxxw" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-all duration-300 hover:-translate-y-1">
                <Youtube size={40} />
              </a>
              <a href="https://www.tiktok.com/@reyckband" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-all duration-300 hover:-translate-y-1">
                <TikTokIcon size={40} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;