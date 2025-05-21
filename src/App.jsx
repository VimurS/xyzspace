import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Socialmedia from "./components/Socialmedia";
import banner from "../src/assets/xyz banner.png";
import useScrollReveal from "../src/hooks/useScrollReveal";

function App() {
    useScrollReveal();
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <img src={banner} alt="XYZ Banner" className="banner-img reveal" />
      <Contact />
      <Socialmedia />
      <Footer />
    </div>
  );
}

export default App;
