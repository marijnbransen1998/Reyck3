import React, { useState } from 'react';
import { Send, Instagram, Facebook, Youtube } from 'lucide-react';
import TikTokIcon from '../components/TikTokIcon';
import { Helmet } from 'react-helmet-async';

const Contact: React.FC = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailtoUrl = `mailto:reyckband@hotmail.com?subject=Bericht via website&body=${encodeURIComponent(message)}`;

    window.location.href = mailtoUrl;

    setMessage('');
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>REYCK | Nederrock 'n Roll</title>
        <meta
          name="description"
          content="Ontdek de Nederrock band Reyck. Beluister onze nieuwste releases en bekijk aankomende optredens."
        />
      </Helmet>

      <div
        className="pt-32 pb-16"
        style={{
          backgroundImage: 'url(/achtergrond-sfeerfoto-groenoranje.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg rounded-lg shadow-xl p-8 transition-all duration-300 hover:shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="message"
                  className="block text-white mb-2"
                  style={{ fontFamily: 'Optien, sans-serif', fontWeight: 'bold' }}
                >
                  Bericht
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-white placeholder-white/50"
                  rows={5}
                  required
                  style={{ fontFamily: 'DIN Alternate Bold, sans-serif' }}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full text-white font-bold py-3 px-6 rounded-full transition-all duration-300 flex items-center justify-center hover:shadow-[0_0_30px_rgba(212,20,90,0.6)] hover:-translate-y-1"
                style={{
                  backgroundColor: 'rgba(26, 26, 26, 0.85)', // ✅ Donkerder achtergrond
                  fontFamily: 'DIN Alternate Bold, sans-serif',
                }}
              >
                <Send className="mr-2" size={20} />
                Verstuur Bericht
              </button>
            </form>
          </div>

          <div className="mt-16 text-center">
            <h2
              className="text-3xl mb-6 text-white"
              style={{ fontFamily: 'Optien, sans-serif', fontWeight: 'bold' }}
            >
              Volg ons op social media
            </h2>
            <div className="flex justify-center space-x-8">
              <a
                href="https://www.instagram.com/reyckband/"
                target      </a>
              <a
                href="https://www.facebook.com/REYCKBAND/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-all duration-300 hover:-translate-y-1"
="noopener noreferrer"
                className="text-white hover:text-accent transition-all duration-300 hoverner noreferrer"
                className="text-white hover:text-accent transition;
