import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <img src="/images/Adetic.png" alt="Adletic Agency" className="footer-logo-image" />
            <h3 className="footer-logo">AdleticAgency.MY</h3>
            <p className="footer-subtitle">Meta Ads Management</p>
            <p>We build campaigns that work. Simple strategy, smart optimization, real support.</p>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Campaign Strategy</a></li>
              <li><a href="#services">Ad Creation</a></li>
              <li><a href="#services">Performance Optimization</a></li>
              <li><a href="#services">Analytics & Reporting</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:hello@adletic.com">hello@adletic.com</a></li>
              <li><a href="tel:+60112167672">+60 112 167 672</a></li>
              <li><a href="#contact">Get in Touch</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Adletic Agency. All rights reserved. | Meta Ads Specialists</p>
        </div>
      </div>
    </footer>
  )
}
