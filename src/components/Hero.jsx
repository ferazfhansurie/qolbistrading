import './Hero.css'

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Stop Trading Buta<br />
            Guna Moonphase Data<br />
            Untuk Predict Market
          </h1>
          <p className="hero-subtitle">
            Ramai traders loss sebab trade tanpa direction. Technical pun ada, tapi masih loss. <br />
            Qolbies Moonphase System — predict market patterns dengan lunar data. Trade dengan arah yang betul.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={scrollToContact}>
              LEARN MORE
            </button>
            <button className="btn btn-secondary">
              LIHAT TESTIMONI ↓
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">2,500+</span>
              <span className="stat-label">Traders Yang Belajar</span>
            </div>
            <div className="stat">
              <span className="stat-number">95%</span>
              <span className="stat-label">Success Rate</span>
            </div>
            <div className="stat">
              <span className="stat-number">RM149.90</span>
              <span className="stat-label">Ebook Lengkap</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
