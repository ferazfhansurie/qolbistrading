import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">🌙 Qolbies Trading</h3>
            <p className="footer-subtitle">Moon Phase Trading System</p>
            <p>Scientific timing. Consistent profits. No more guessing.</p>
          </div>

          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">What's Included</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#solution">The System</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#solution">About System</a></li>
              <li><a href="#pricing">Packages</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:support@qolbiestrading.com">support@qolbiestrading.com</a></li>
              <li><a href="tel:+60112167672">+60 112 167 672</a></li>
              <li><a href="#contact">Get Support</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://tiktok.com" aria-label="TikTok" target="_blank" rel="noopener noreferrer">TikTok</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Qolbies Trading. All rights reserved. | Moon Phase Trading System</p>
          <p className="disclaimer">*Disclaimer: Past performance does not guarantee future results. Always do your own research and risk management.</p>
        </div>
      </div>
    </footer>
  )
}
