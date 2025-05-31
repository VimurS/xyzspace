function Footer() {
  return (
   <footer className="footer">
  <div className="footertext-left">
    © {new Date().getFullYear()} XYZ SPACE
  </div>
  <div className="footertext-right" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
    Back to Top <span className="arrow-up">↑</span>
  </div>
</footer>

  );
}

export default Footer;
