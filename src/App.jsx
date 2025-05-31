import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Whatwedo from "./components/WhatWeDoContent";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/loader"; // Capitalized
import Socialmedia from "./components/Socialmedia";
import banner from "../src/assets/xyz banner.png";
import useScrollReveal from "../src/hooks/useScrollReveal";
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  const [loading, setLoading] = useState(true);
  useScrollReveal();

  return (
    <>
      {loading ? (
        <Loader onFinish={() => setLoading(false)} />
      ) : (
         <ParallaxProvider>
        <div>
          <Navbar />
          <div id="NavBorder"></div>
          <Hero />
          {/* <hr id="border"></hr> */}
          <Whatwedo />
          <div id="border"></div>
          <Services />
          <Portfolio />
          <Contact />
          <img src={banner} alt="XYZ Banner" className="banner-img" />
          <Socialmedia />
          <Footer />
        </div>
        </ParallaxProvider>
      )}
    </>
  );
}

export default App;
