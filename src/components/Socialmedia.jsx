import useScrollReveal from "../hooks/useScrollReveal";

function Socialmedia() {
  useScrollReveal();

  const socials = [
    { name: "Instagram", url: "https://instagram.com" },
    { name: "Facebook", url: "https://facebook.com" },
    { name: "Twitter", url: "https://twitter.com" },
    { name: "LinkedIn", url: "https://linkedin.com" },
  ];

  return (
  <section className="social-section">
  <h4>Connect Where Creativity Lives</h4>
  <div className="social-icons">
    <a className="fb" href="https://behance.net" target="_blank" rel="noopener noreferrer">Facebook</a>
    <a className="insta" href="https://www.instagram.com/xyzspace.in/" target="_blank" rel="noopener noreferrer">Instagram</a>
    <a className="linkedin" href="https://www.linkedin.com/company/xyzspacein/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> */}
    <a className="whatsapp" href="https://dribbble.com" target="_blank" rel="noopener noreferrer">Whatsapp</a>
  </div>
</section>

  );
}

export default Socialmedia;
