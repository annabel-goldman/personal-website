'use client'
import React, { useEffect, useRef } from 'react';

const CURSOR_IMAGE = '/image.png';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Ensure cursor is visible initially
    cursor.style.opacity = '1';
    cursor.style.visibility = 'visible';

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX - 15}px`;
      cursor.style.top = `${e.clientY - 15}px`;
      // Ensure cursor stays visible during movement
      cursor.style.opacity = '1';
      cursor.style.visibility = 'visible';
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = '1';
      cursor.style.visibility = 'visible';
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = '0';
      cursor.style.visibility = 'hidden';
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Periodic check to ensure cursor stays visible
    const visibilityCheck = setInterval(() => {
      if (cursor && cursor.style.visibility === 'hidden') {
        cursor.style.visibility = 'visible';
        cursor.style.opacity = '1';
      }
    }, 100);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearInterval(visibilityCheck);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        width: '30px',
        height: '30px',
        pointerEvents: 'none',
        zIndex: 99999,
        opacity: 1,
        visibility: 'visible',
        transition: 'opacity 0.2s ease',
      }}
    >
      <img
        src={CURSOR_IMAGE}
        alt="cursor"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }}
      />
    </div>
  );
};

export default CustomCursor; 