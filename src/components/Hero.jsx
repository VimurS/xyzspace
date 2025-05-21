import { useEffect, useState } from "react";
import useScrollReveal from "../hooks/useScrollReveal";

function Hero() {
  useScrollReveal();

  return (
    <section className="hero reveal">
      <h2>
        We Build <span>Brands</span> That Shine
      </h2>
      <p>XYZ SPACE is your creative partner in branding, digital marketing, and IT solutions. We craft only impactful digital experiences.</p>
      <button className="shiny-button">Get Started</button>
    </section>
  );
}

export default Hero;
