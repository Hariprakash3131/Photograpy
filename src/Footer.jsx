import './Footer.css';
import logoImage from './assets/logo.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo + About */}
        <div className="footer-col footer-about">
          <div className="footer-logo">
            <img src={logoImage} alt="Fotokaran Logo" />
            <h3>Fotokaran</h3>
          </div>
          <p>
            Professional photography services capturing life's most precious moments
            with artistic vision and technical excellence.
          </p>
          <div className="social-icons">
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-pinterest"></i>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Portfolio</li>
            <li>Services</li>
            <li>Booking</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>Wedding Photography</li>
            <li>Event Photography</li>
            <li>Corporate Photography</li>
            <li>Family Portraits</li>
            <li>Commercial Photography</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-col footer-newsletter">
          <h4>Newsletter</h4>
          <p>Subscribe to get updates on our latest work and photography tips.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Your email" />
            <button><i className="fa-solid fa-paper-plane"></i></button>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2025 Fotokaran. All rights reserved.</p>
        <div className="footer-links">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookie Policy</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
