'use client'
import React, { useEffect, useRef } from 'react';

const STAR_IMAGE = '/image.png';

const StarTrail: React.FC = () => {
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const star = document.createElement('img');
      star.src = STAR_IMAGE;
      star.style.position = 'fixed';
      star.style.left = `${e.clientX - 15}px`;
      star.style.top = `${e.clientY - 15}px`;
      star.style.width = '30px';
      star.style.height = '30px';
      star.style.pointerEvents = 'none';
      star.style.transition = 'opacity 0.7s, transform 0.7s';
      star.style.opacity = '1';
      star.style.zIndex = '9999';

      setTimeout(() => {
        star.style.opacity = '0';
        star.style.transform = 'scale(0.5) rotate(20deg)';
      }, 10);

      setTimeout(() => {
        star.remove();
      }, 700);

      trailRef.current?.appendChild(star);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={trailRef}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
};

export default StarTrail; 