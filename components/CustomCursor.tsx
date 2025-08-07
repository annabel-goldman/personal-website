'use client'
import React, { useEffect, useRef } from 'react';

const CURSOR_IMAGE = '/image.png';

interface CustomCursorProps {
  isEnabled: boolean;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ isEnabled }) => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Show/hide cursor based on isEnabled prop
    if (!isEnabled) {
      cursor.style.opacity = '0';
      cursor.style.visibility = 'hidden';
      return;
    }

    // Ensure cursor is visible initially when enabled
    cursor.style.opacity = '1';
    cursor.style.visibility = 'visible';

    const handleMouseMove = (e: MouseEvent) => {
      if (!isEnabled) return;
      cursor.style.left = `${e.clientX - 15}px`;
      cursor.style.top = `${e.clientY - 15}px`;
      // Ensure cursor stays visible during movement
      cursor.style.opacity = '1';
      cursor.style.visibility = 'visible';
    };

    const handleMouseEnter = () => {
      if (!isEnabled) return;
      cursor.style.opacity = '1';
      cursor.style.visibility = 'visible';
    };

    const handleMouseLeave = () => {
      if (!isEnabled) return;
      cursor.style.opacity = '0';
      cursor.style.visibility = 'hidden';
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Periodic check to ensure cursor stays visible (only when enabled)
    const visibilityCheck = setInterval(() => {
      if (isEnabled && cursor && cursor.style.visibility === 'hidden') {
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
  }, [isEnabled]);

  // Update cursor visibility immediately when isEnabled changes
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    if (isEnabled) {
      cursor.style.opacity = '1';
      cursor.style.visibility = 'visible';
    } else {
      cursor.style.opacity = '0';
      cursor.style.visibility = 'hidden';
    }
  }, [isEnabled]);

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        width: '30px',
        height: '30px',
        pointerEvents: 'none',
        zIndex: 99999,
        opacity: isEnabled ? 1 : 0,
        visibility: isEnabled ? 'visible' : 'hidden',
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