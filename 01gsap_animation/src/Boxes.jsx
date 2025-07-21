import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Boxes = () => {
    const containerRef = useRef(); // Create a ref for the container

  useGSAP(() => {
    // All GSAP code inside this callback is context-safe and automatically cleaned up
    gsap.to(".box", {
      x: 200,
      rotation: 360,
      duration: 1
    });
  }, { scope: containerRef }); // Optional: scope the animations to this container

  return (
    <div className="container" ref={containerRef}>
      <div className="box"></div>
    </div>
  );
}

export default Boxes