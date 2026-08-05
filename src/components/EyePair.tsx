import { useEffect, useRef } from 'react';

type EyePairProps = {
  variant?: 'hero' | 'nav';
  className?: string;
};

const EyePair = ({ variant = 'hero', className = '' }: EyePairProps) => {
  const pairRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const pair = pairRef.current;
    if (!pair || window.matchMedia('(pointer: coarse)').matches) return;

    const pupils = Array.from(pair.querySelectorAll<HTMLElement>('[data-pupil]'));
    let animationFrame = 0;

    const resetPupils = () => {
      pupils.forEach((pupil) => {
        pupil.style.transform = 'translate3d(0, 0, 0)';
      });
    };

    const followPointer = (event: PointerEvent) => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        pupils.forEach((pupil) => {
          const eye = pupil.parentElement;
          if (!eye) return;

          const eyeRect = eye.getBoundingClientRect();
          const pupilRect = pupil.getBoundingClientRect();
          const deltaX = event.clientX - (eyeRect.left + eyeRect.width / 2);
          const deltaY = event.clientY - (eyeRect.top + eyeRect.height / 2);
          const angle = Math.atan2(deltaY, deltaX);
          const maxX = Math.max(0, (eyeRect.width - pupilRect.width) * 0.34);
          const maxY = Math.max(0, (eyeRect.height - pupilRect.height) * 0.34);
          const distance = Math.min(1, Math.hypot(deltaX, deltaY) / 180);

          pupil.style.transform = `translate3d(${Math.cos(angle) * maxX * distance}px, ${Math.sin(angle) * maxY * distance}px, 0)`;
        });
      });
    };

    window.addEventListener('pointermove', followPointer, { passive: true });
    window.addEventListener('blur', resetPupils);
    document.documentElement.addEventListener('mouseleave', resetPupils);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('pointermove', followPointer);
      window.removeEventListener('blur', resetPupils);
      document.documentElement.removeEventListener('mouseleave', resetPupils);
    };
  }, []);

  return (
    <span ref={pairRef} className={`eye-pair eye-pair--${variant} ${className}`} aria-hidden="true">
      <span className="tracking-eye"><span className="tracking-eye__pupil" data-pupil /></span>
      <span className="tracking-eye"><span className="tracking-eye__pupil" data-pupil /></span>
    </span>
  );
};

export default EyePair;
