import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-top">
        <div className="footer-logo-section">
          <img src="/path/to/footer-logo.png" alt="Company Logo" className="footer-logo" />
          <p className="footer-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="/">About Us</a></li>
              <li><a href="/">Careers</a></li>
              <li><a href="/">Press</a></li>
              <li><a href="/">Blog</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li><a href="/">Help Center</a></li>
              <li><a href="/">Contact Us</a></li>
              <li><a href="/">Terms of Service</a></li>
              <li><a href="/">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Explore</h4>
            <ul>
              <li><a href="/">Features</a></li>
              <li><a href="/">Pricing</a></li>
              <li><a href="/">Integrations</a></li>
              <li><a href="/">API Docs</a></li>
            </ul>
          </div>

          <div className="footer-column newsletter-column">
            <h4>Subscribe</h4>
            <p>Get the latest news & updates</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your Email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-middle">
        <div className="social-icons">
          <a href="/"><i className="fab fa-facebook-f"></i></a>
          <a href="/"><i className="fab fa-twitter"></i></a>
          <a href="/"><i className="fab fa-instagram"></i></a>
          <a href="/"><i className="fab fa-linkedin-in"></i></a>
        </div>
        <div className="footer-middle-links">
          <a href="/">Sitemap</a>
          <a href="/">Accessibility</a>
          <a href="/">Affiliate</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
