import { useEffect, useState, useRef } from "react";
import logo from "../assets/logo.png"; // replace with your actual logo path
// import loaderMusic from "../assets/loader-music.mp3"; // place your music in assets folder

function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.2;
      audio.play().catch(() => {}); // silent autoplay
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            if (audio) audio.pause();
            onFinish();
          }, 500);
          return 100;
        }
        return prev + 1.5;
      });
    }, 20);
  }, [onFinish]);

  return (
    <div className="loader-wrapper">
      {/* <audio ref={audioRef} src={loaderMusic} loop /> */}
      <img src={logo} alt="XYZ Logo" className="loader-logo" />
      {/* <h1 className="loader-slogan">Where Imagination Meets Impact</h1> */}
      <p className="loader-percent">{Math.floor(progress)}</p>
      <div className="progress-bar">
        <div className="fill" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}

export default Loader;
