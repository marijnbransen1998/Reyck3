import React, { useEffect, useRef } from 'react';

const DynamicSplitLogo: React.FC<{ animate: boolean }> = ({ animate }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animate) return;

    const container = containerRef.current;
    if (!container) return;

    // Reset classes
    container.querySelectorAll('.split-line').forEach(el => {
      el.classList.remove('split-active');
    });

    // Trigger animations
    setTimeout(() => {
      container.querySelectorAll('.split-line').forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('split-active');
        }, index * 200);
      });
    }, 100);
  }, [animate]);

  return (
    <div ref={containerRef} className="relative w-64 h-64">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`transform-gpu transition-all duration-1000 ${animate ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
          <img 
            src="/logozwart wit-vrijstaand.png" 
            alt="Reyck Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`split-line absolute inset-0 border-t-2 border-white transform-gpu transition-all duration-1000 ease-out ${
            animate ? 'split-active' : ''
          }`}
          style={{
            transformOrigin: 'center',
            transform: `rotate(${(i * 360) / 5}deg) translateY(${animate ? '100px' : '0'}) scale(${animate ? '1.5' : '1'})`,
            opacity: animate ? 0 : 1,
            transitionDelay: `${i * 100}ms`
          }}
        />
      ))}
    </div>
  );
};

export default DynamicSplitLogo;