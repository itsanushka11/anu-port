export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <a href="#" className="nav-brand">
            <div className="brand-icon" style={{ width: 28, height: 28, fontSize: 14 }}>A</div>
            <span>ANUSHKA</span>
          </a>
          <p>Business Analytics · Finance · Generative AI. Turning data into actionable insights.</p>
        </div>
        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Connect</h4>
          <ul>
            <li><a href="mailto:anushkanathani11@gmail.com">Email</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">GitHub</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Credentials</h4>
          <ul>
            <li><a href="#certificate">Certificate</a></li>
            <li><a href="#achievements">Achievements</a></li>
            <li><a href="bitsom_ba_2511785_certificate.pdf" target="_blank" rel="noopener noreferrer">Certificate PDF</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="brand-mark">
          <span className="mini-icon">A</span>
          Anushka © {year}
        </span>
        <span>Built with passion & data</span>
      </div>
    </footer>
  );
}
