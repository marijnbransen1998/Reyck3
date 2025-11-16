import React, { useState } from 'react';
import { Send, Instagram, Facebook, Youtube } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Contact: React.FC = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent('Bericht via website');
    const body = encodeURIComponent(message);
    const mailtoUrl = `mailto:reyckband@hotmail.com?subject=${subject}&body=${body}`;
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
                  className="block text-white font-heading text-xl mb-2"
                >
                  Bericht
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-white placeholder-white/50 font-din"
                  rows={5}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-accent text-white font-din font-bold py-3 px-6 rounded-full transition-all duration-300 flex items-center justify-center hover:shadow-[0_0_30px_rgba(212,20,90,0.6)] hover:-translate-y-1"
              >
                <Send className="mr-2" size={20} />
                Verstuur Bericht
              </button>
            </form>
          </div>

          {/* Social Media Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-heading mb-6 text-white">
              Volg Reyck op social media
            </h2>
            <div className="flex justify-center space-x-8">
              <a
                href="https://www.instagram.com/reyckband/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Volg Reyck op Instagram"
                className="text-white hover:text-accent transition-all duration-300"
              >
                <Instagram size={40} />
              </a>

              <a
                href="https://www.facebook.com/REYCKBAND/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Volg Reyck op Facebook"
                className="text-white hover:text-accent transition-all duration-300"
              >
                <Facebook size={40} />
              </a>

              <a
                href="https://www.youtube.com/channel/UCRv53lUbgxdyuLYZibXAxxw"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bekijk Reyck op YouTube"
                className="text-white hover:text-accent transition-all duration-300"
              >
                <Youtube size={40} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
