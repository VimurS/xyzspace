import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";


function WhatWeDo() {
  return (
    <section className="what-we-do">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
        src="/videos/creative-background.mp4"
      />

      {/* 3D Canvas Stars */}
      <Canvas className="canvas-overlay">
        <ambientLight intensity={0.5} />
        <Stars radius={100} depth={50} count={5000} factor={4} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>

      <div className="overlay-content">
       <div className="whatFlex">
  <span className="dot" />
  <h1>What we do</h1>

  <p className="intro-text">
 We create digital experiences that position your brand for long-term success. 
           Whether you’re a startup looking to launch or an established business ready to scale, 
           our process is engineered to deliver impact, creativity, and measurable growth.
           Your digital transformation journey starts here.
  </p>
</div>
      </div>
    </section>
  );
}

export default WhatWeDo;
