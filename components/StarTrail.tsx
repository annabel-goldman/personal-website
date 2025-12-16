'use client'
import React, { useEffect, useRef } from 'react'
import { ASSETS, UI, ANIMATION } from '@/constants/config'
import { StarTrailProps } from '@/types/types'

/**
 * StarTrail Component
 * Creates a trailing star effect that follows mouse movement
 */

const StarTrail: React.FC<StarTrailProps> = ({ isEnabled }) => {
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isEnabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      const star = document.createElement('img');
      star.src = ASSETS.STAR_IMAGE;
      star.style.position = 'fixed';
      star.style.left = `${e.clientX - UI.CURSOR_OFFSET}px`;
      star.style.top = `${e.clientY - UI.CURSOR_OFFSET}px`;
      star.style.width = `${UI.CURSOR_SIZE}px`;
      star.style.height = `${UI.CURSOR_SIZE}px`;
      star.style.pointerEvents = 'none';
      star.style.transition = 'opacity 0.7s, transform 0.7s';
      star.style.opacity = '1';
      star.style.zIndex = UI.STAR_TRAIL_Z_INDEX.toString();

      setTimeout(() => {
        star.style.opacity = '0';
        star.style.transform = 'scale(0.5) rotate(20deg)';
      }, ANIMATION.STAR_TRAIL_FADE_DELAY);

      setTimeout(() => {
        star.remove();
      }, ANIMATION.STAR_TRAIL_DURATION);

      trailRef.current?.appendChild(star);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isEnabled]);

  if (!isEnabled) return null;

  return (
    <div
      ref={trailRef}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: UI.STAR_TRAIL_Z_INDEX,
      }}
    />
  );
};

export default StarTrail; 