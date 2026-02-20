import { useState, useEffect } from 'react'
import './Hero.css'

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date('2026-04-30T23:59:59')

    const updateTimer = () => {
      const now = new Date()
      const diff = targetDate - now

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        })
      }
    }

    updateTimer()
    const timer = setInterval(updateTimer, 1000)
    return () => clearInterval(timer)
  }, [])

  const scrollToPricing = () => {
    document.getElementById('produk')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToTestimoni = () => {
    document.getElementById('testimoni')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home">
      {/* Minimal stars background is now in .hero::before. Add glow overlays for previous effects. */}
      <div className="hero-glow-before" />
      <div className="hero-glow-after" />
      <div className="hero-overlay" />
      <div className="container">
        <div className="hero-content">

          <div className="hero-alert-badge">
            ⚠️ AMARAN PENTING UNTUK SEMUA TRADERS MALAYSIA
          </div>

          <h1 className="hero-title">
            U.S. Presidential News Spikes<br />
            <span className="hero-title-highlight">Destroy 75% of Traders</span><br />
            ..sebab tak tengok <span style={{color:'#FFB700'}}>BULAN</span>?<br />

          </h1>

          <div className="hero-subheadlines">
            <p className="hero-sub-main">
              75% Trader Rugi Teruk Semasa Spike News Presiden U.S<br />
              Sebab <strong style={{color:'#FFB700'}}>Tidak Tahu Teknik Bulan.</strong>
            </p>
          </div>


          <div className="hero-cta">
            <button className="btn btn-primary btn-large hero-cta-main" onClick={scrollToPricing}>
              🌙 KUASAI MOONPHASE TRADE SYSTEM SEKARANG
            </button>
            <button className="btn btn-secondary" onClick={scrollToTestimoni}>
              LIHAT TESTIMONI ↓
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">2,500+</span>
              <span className="stat-label">Traders Yang Belajar</span>
            </div>
            <div className="stat">
              <span className="stat-number">Sejak 2023</span>
              <span className="stat-label">Tahun Ditemuijana</span>
            </div>
            <div className="stat">
              <span className="stat-number">Gold XAU</span>
              <span className="stat-label">Market Utama</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
