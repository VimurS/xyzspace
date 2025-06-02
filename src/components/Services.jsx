import { useState, useEffect, useRef } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

function Services() {
  useScrollReveal();

  const services = [
    {
      icon: "🎨",
      title: "Strategize",
      desc: "We deep dive into your goals and market, crafting data driven digital marketing strategies that don’t just reach — they resonate.",
    },
    {
      icon: "🚀",
      title: "Visualize",
      desc: "Through creative design aligned with your business goals, we shape bold visual stories that connect and convert.",
    },
    {
      icon: "💻",
      title: "Build",
      desc: "We bring your ideas to life. Whether it’s a product or a campaign, we launch it with precision and performance.",
    },
    {
      title: "Scale",
      desc: "As your digital partner, we iterate, optimize, and grow with you — turning success into long-term transformation.",
    },
  ];

  const expertiseItems = [
    { title: "Digital Marketing", content: "SEO, SEM, social media strategy..." },
    { title: "Creative Direction", content: "Visual storytelling, campaign direction..." },
    { title: "Branding", content: "Logos, brand identity, tone of voice..." },
    { title: "Product Development", content: "Full-cycle product design and dev..." },
    { title: "Web & App Development", content: "React, mobile apps, full-stack..." },
    { title: "e-com services", content: "Shopify, WooCommerce, marketing..." },
    { title: "3D Design", content: "Modeling, animation, AR assets..." },
    { title: "Video Production", content: "Commercials, reels, explainers..." },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const globeRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const rotateRight = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  // 🔁 Auto rotate every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      rotateRight();
    }, 5000);

    return () => clearInterval(interval); // cleanup
  }, []);

  useEffect(() => {
    const node = globeRef.current;
    if (!node) return;

    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      const diff = touchStartX.current - touchEndX.current;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          setCurrentIndex((prev) => (prev + 1) % services.length);
        } else {
          setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
        }
      }
    };

    node.addEventListener("touchstart", handleTouchStart);
    node.addEventListener("touchmove", handleTouchMove);
    node.addEventListener("touchend", handleTouchEnd);

    return () => {
      node.removeEventListener("touchstart", handleTouchStart);
      node.removeEventListener("touchmove", handleTouchMove);
      node.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <>
      <section className="services" id="services">
        <h3 className="section-title">Services</h3>

        <div className="expertise whatFlex">
          <span className="dot" />
          <h1>Our Expertise</h1>
          <div className="expertise-list">
            {expertiseItems.map((item, index) => (
              <div key={index}>
                <span
                  className="reveal expertise-item"
                  onClick={() => toggleItem(index)}
                >
                  {item.title}
                </span>
                {openIndex === index && (
                  <div className="expertise-content">{item.content}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="whatFlex overlay-content">
        <span className="dot" />
        <h1>Our Process</h1>
        <p className="intro-text">
          We craft bold, high performing brand experiences. Blending strategy,
          storytelling, and cutting-edge tech, we design campaigns that
          captivate, convert, and elevate. Whether you need digital marketing,
          product development, or full-stack creative execution — we don’t
          follow trends, we set them.
        </p>
      </div>

      {/* 3D Rotating Cube Section */}
      <div className="globe-container ProcessFlex" ref={globeRef}>
        <div
          className="globe-rotation"
          style={{ transform: `rotateY(${currentIndex * -90}deg)` }}
        >
          {services.map((service, index) => (
            <div className="globe-card" key={index}>
              <h2>{service.title}</h2>
              <p className="ProcessDesc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

       <Canvas className="canvas-overlay servicesCanvas">
        <ambientLight intensity={0.5} />
        <Stars radius={100} depth={50} count={5000} factor={4} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>

      {/* Swipe instruction text */}
      {/* <p className="swipe-hint">← Swipe →</p> */}
    </>
  );
}

export default Services;
