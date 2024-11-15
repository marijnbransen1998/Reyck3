import React, { useState, useEffect } from 'react';
import { MessageCircle, Mail } from 'lucide-react';

const ContactButtons: React.FC = () => {
  const [showBubble, setShowBubble] = useState(false);
  const phoneNumber = '+31683033829';
  const email = 'reyckband@hotmail.com';
  const whatsappMessage = 'Hoi! Ik heb een vraag over het boeken van Reyck.';

  useEffect(() => {
    // Show bubble after 7 seconds
    const showTimer = setTimeout(() => {
      setShowBubble(true);
    }, 7000);

    // Hide bubble after 17 seconds (7s delay + 10s show time)
    const hideTimer = setTimeout(() => {
      setShowBubble(false);
    }, 17000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="fixed bottom-6 right-6 flex items-end z-50">
      <div 
        className={`
          absolute right-full bottom-full mb-4 mr-4 p-4 bg-secondary text-white rounded-lg shadow-xl
          transition-all duration-300 ease-in-out
          ${showBubble ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
        `}
        style={{
          maxWidth: '250px',
          filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
        }}
      >
        <p className="font-semibold mb-1">Interesse in een boeking?</p>
        <p className="text-sm">Neem contact met ons op voor beschikbaarheid</p>
        <div className="absolute -bottom-2 right-4 w-4 h-4 bg-secondary transform rotate-45"></div>
      </div>
      <div className="flex flex-col space-y-4">
        <button
          onClick={handleEmailClick}
          onMouseEnter={() => setShowBubble(true)}
          onMouseLeave={() => setShowBubble(false)}
          className="bg-secondary text-white p-4 rounded-full shadow-xl hover:bg-accent transition-colors duration-300"
          aria-label="Contact via Email"
        >
          <Mail size={28} />
        </button>
        <button
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setShowBubble(true)}
          onMouseLeave={() => setShowBubble(false)}
          className="bg-secondary text-white p-4 rounded-full shadow-xl hover:bg-accent transition-colors duration-300"
          aria-label="Contact via WhatsApp"
        >
          <MessageCircle size={28} />
        </button>
      </div>
    </div>
  );
};

export default ContactButtons;