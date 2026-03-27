import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);

  useEffect(() => {
    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    let ringX = 0, ringY = 0;
    let dotX = 0, dotY = 0;
    let raf;

    const moveCursor = (e) => {
      dotX = e.clientX;
      dotY = e.clientY;
      dot.style.transform = `translate(${dotX}px, ${dotY}px)`;
    };

    const animate = () => {
      ringX += (dotX - ringX) * 0.12;
      ringY += (dotY - ringY) * 0.12;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      raf = requestAnimationFrame(animate);
    };

    const onMouseDown = () => {
      dot.style.transform = `translate(${dotX}px, ${dotY}px) scale(0.5)`;
      ring.style.width = '48px';
      ring.style.height = '48px';
    };
    const onMouseUp = () => {
      dot.style.transform = `translate(${dotX}px, ${dotY}px) scale(1)`;
      ring.style.width = '32px';
      ring.style.height = '32px';
    };

    const onMouseEnterLink = () => {
      ring.style.width = '50px';
      ring.style.height = '50px';
      ring.style.borderColor = 'var(--accent)';
      ring.style.background = 'rgba(34,211,238,0.08)';
    };
    const onMouseLeaveLink = () => {
      ring.style.width = '32px';
      ring.style.height = '32px';
      ring.style.borderColor = 'rgba(34,211,238,0.5)';
      ring.style.background = 'transparent';
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    raf = requestAnimationFrame(animate);

    const links = document.querySelectorAll('a, button, [role="button"]');
    links.forEach(el => {
      el.addEventListener('mouseenter', onMouseEnterLink);
      el.addEventListener('mouseleave', onMouseLeaveLink);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(raf);
      links.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnterLink);
        el.removeEventListener('mouseleave', onMouseLeaveLink);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorDotRef} className="cursor-dot" />
      <div ref={cursorRingRef} className="cursor-ring" />
    </>
  );
};

export default CustomCursor;
