import { useEffect, useRef } from 'react';
import Img1 from '/space-1.jpg';
import './SpatialDemo.css';

export default function SpatialDemo() {
  const containerRef = useRef(null);
  const backgroundRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const background = backgroundRef.current;
    const content = contentRef.current;

    const handleMouseMove = (event) => {
      // Determine mouse position relative to the container
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Convert to percentage coordinates
      const xPercent = (x / rect.width) * 100;
      const yPercent = (y / rect.height) * 100;

      // Calculate rotations for background and content layers
      const xRotateBackground = (xPercent - 50) * 0.14;
      const yRotateBackground = (yPercent - 50) * -0.14;
      const xRotateContent = (xPercent - 50) * 0.2;
      const yRotateContent = (yPercent - 50) * -0.2;

      // Calculate translations using the same factors as the existing algorithm
      const translateBackgroundFactor = Math.sqrt(2) * -1.4 * Math.PI;
      const translateContentFactor = Math.sqrt(2) * -2 * Math.PI;
      const xTranslateBackground = (xPercent - 50) * translateBackgroundFactor;
      const yTranslateBackground = (yPercent - 50) * translateBackgroundFactor;
      const xTranslateContent = (xPercent - 50) * translateContentFactor;
      const yTranslateContent = (yPercent - 50) * translateContentFactor;

      // Apply transforms to the elements
      background.style.transform = `perspective(600px) rotateX(${yRotateBackground}deg) rotateY(${xRotateBackground}deg) translateX(${xTranslateBackground}px) translateY(${yTranslateBackground}px)`;
      content.style.transform = `perspective(600px) rotateX(${yRotateContent}deg) rotateY(${xRotateContent}deg) translateX(${xTranslateContent}px) translateY(${yTranslateContent}px)`;
    };

    const handleMouseLeave = () => {
      // Smoothly return elements to their neutral state on mouse leave
      background.style.transition = 'all 750ms ease-in 0.5s';
      content.style.transition = 'all 750ms ease-in 0.5s';
      background.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) translateX(0px) translateY(0px)';
      content.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) translateX(0px) translateY(0px)';
    };

    const handleMouseEnter = () => {
      // Remove transitions for immediate response
      background.style.transition = 'none';
      content.style.transition = 'none';
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <div className="perspective-container" ref={containerRef}>
      <div className="background-layer" ref={backgroundRef} style={{ backgroundImage: `url(${Img1})` }} />
      <div className="content-layer" ref={contentRef}>
        <h2>Spatial Design</h2>
        <p>Move your mouse to explore depth.</p>
      </div>
    </div>
  );
}

