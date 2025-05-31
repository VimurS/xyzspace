import { useState, useEffect } from "react";
import useScrollReveal from "../hooks/useScrollReveal";

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

   const [openIndex, setOpenIndex] = useState(null);

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

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const rotateLeft = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
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

  return (
    <section className="services" id="services">
      <h3 className="section-title">Services</h3>
      
       <div className="expertise whatFlex">
      <span className="dot" />
      <h1>Our Expertise</h1>
      <img src=""></img>
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

      {/* <div className="expertise whatFlex">
        <span className="dot" />
        <h1>Our Expertise</h1>
        <div className="expertise-list">
          <span className="reveal">Digital Marketing</span>
          <span className="reveal">Creative Direction</span>
          <span className="reveal">Branding</span>
          <span className="reveal">Product Development</span>
          <span className="reveal">Web & App Development</span>
          <span className="reveal">e-com services</span>
          <span className="reveal">3D Design</span>
          <span className="reveal">Video Production</span>
        </div>
      </div> */}

      <div className="whatFlex overlay-content">
        <span className="dot" />
        <h1>Our Process</h1>

        {/* Bottom intro content */}
        <p className="intro-text">
          We craft bold, high performing brand experiences. Blending strategy,
          storytelling, and cutting-edge tech, we design campaigns that
          captivate, convert, and elevate. Whether you need digital marketing,
          product development, or full-stack creative execution — we don’t
          follow trends, we set them.
        </p>
      </div>

      <div className="globe-container ProcessFlex">
        <div
          className="globe-rotation"
          style={{ transform: `rotateY(${currentIndex * -90}deg)` }}
        >
          {services.map((service, index) => (
            <div className="globe-card" key={index}>
              <h2>{service.title}</h2>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="controls">
        <button onClick={rotateLeft}>←</button>
        <button onClick={rotateRight}>→</button>
      </div>
    </section>
  );
}

export default Services;
