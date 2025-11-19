import React, { useState } from 'react';
import { MessageCircle, Mail } from 'lucide-react';

const ContactButtons: React.FC = () => {
  const [showBubble, setShowBubble] = useState(false);

  return (
    <div 
      className="fixed bottom-6 right-6 flex items-end z-50"
      style={{ display: 'none' }}  // 👈 volledige component onzichtbaar
    >
      <div
        className={`
          absolute right-full bottom-full mb-4 mr-4 p-4 bg-white text-black shadow-xl
          transition-all duration-300 ease-in-out
          ${showBubble ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
        `}
        style={{
          maxWidth: '250px',
          filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
        }}
      >
        <p className="font-semibold mb-1">Reyck boeken?</p>
        <p className="text-sm">Neem contact op!</p>
        <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white transform rotate-45"></div>
      </div>

      <div className="flex flex-col space-y-4">
        <button className="bg-white text-black p-4 shadow-xl hover:bg-gray-200">
          <Mail size={28} />
        </button>
        <button className="bg-white text-black p-4 shadow-xl hover:bg-gray-200">
          <MessageCircle size={28} />
        </button>
      </div>
    </div>
  );
};

export default ContactButtons;
