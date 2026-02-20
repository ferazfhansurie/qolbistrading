import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">🌙 Qolbies Trading</h3>
            <p className="footer-tagline">Moonphase Trade System</p>
            <p>
              Kawal market paling liar di dunia dengan ilmu yang betul.
              Trade dengan data, bukan nasib.
            </p>
            <div className="footer-contacts">
              <a
                href="https://wa.me/60112167672"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 +60 112 167 672 (WhatsApp)
              </a>
              <a href="mailto:support@qolbiestrading.com">
                📧 support@qolbiestrading.com
              </a>
            </div>
          </div>

          <div className="footer-nav">
            <div className="footer-col">
              <h4>Navigasi</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#sistem">Sistem</a></li>
                <li><a href="#testimoni">Testimoni</a></li>
                <li><a href="#kandungan">Apa Yang Dipelajari</a></li>
                <li><a href="#produk">Produk</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Produk</h4>
              <ul>
                <li><a href="#produk">Ebook + Guiding Signal</a></li>
                <li><a href="#produk">Moonphase Database 6 Bulan</a></li>
                <li><a href="#produk">Private Class</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} Qolbies Trading. All Rights Reserved.</p>
          <p className="footer-disclaimer">
            *Disclaimer: Trading melibatkan risiko. Past performance tidak
            menjamin future results. Sentiasa lakukan kajian dan risk management
            anda sendiri sebelum membuat sebarang keputusan trading.
          </p>
          <p className="footer-disclaimer">
            We are NOT affiliated with JP Morgan, Banks, or any financial
            institution mentioned. References are for educational purposes only.
          </p>
        </div>

      </div>
    </footer>
  )
}
