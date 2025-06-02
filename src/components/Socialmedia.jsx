import { useEffect, useRef, useState } from "react";

function Socialmedia() {

  const cubeRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  // Auto rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => ({ x: prev.x, y: prev.y + 1 }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Update cube transform
  useEffect(() => {
    if (cubeRef.current) {
      cubeRef.current.style.transform = `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`;
    }
  }, [rotation]);

  const rotate = (axis, amount) => {
    setRotation((prev) => ({
      ...prev,
      [axis]: prev[axis] + amount,
    }));
  };

  return (
    <section className="social-cube-section">
      <h2 className="connectTitle">Connect where Creativity Lives</h2>
      <div className="cube-scene">
        <div className="cube" ref={cubeRef}>
          <a href="https://www.instagram.com/xyzspace.in/" target="_blank" rel="noopener noreferrer" className="face front">Instagram</a>
          <a href="https://www.linkedin.com/company/xyzspacein/" target="_blank" rel="noopener noreferrer" className="face back">LinkedIn</a>
          <a href="https://www.behance.net" target="_blank" rel="noopener noreferrer" className="face right">Behance</a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="face left">Facebook</a>
          <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="face top">Dribbble</a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="face bottom">WhatsApp</a>
        </div>
      </div>

      <div className="cube-controls">
        <button onClick={() => rotate("y", -90)}>Left</button>
        <button onClick={() => rotate("x", -90)}>Up</button>
        <button onClick={() => rotate("x", 90)}>Down</button>
        <button onClick={() => rotate("y", 90)}>Right</button>
      </div>
    </section>
  );
}


export default Socialmedia;
