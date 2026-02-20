import { useState, useEffect } from 'react'
import './UrgencyBanner.css'

export default function UrgencyBanner() {
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

  return (
    <section className="urgency-banner">
      <div className="container">
        <div className="urgency-inner">

          <div className="urgency-text-block">
            <p className="urgency-sub">
              Dan inilah yang dilakukan oleh Trader-Trader Billionaires, Jerung yang
              mengawal liquidity markets secara senyap dan halimunan — mereka trade
              mengikut <strong>struktur masa Moonphase.</strong>
            </p>
            <p className="urgency-sub">
              Jangan biar harga promo ini terlepas. Daftar sekarang sebelum terlambat.
            </p>
          </div>

          <div className="urgency-countdown-block">
            <p className="urgency-timer-label">⏰ TAWARAN HARGA PROMO TAMAT DALAM:</p>
            <div className="urgency-timer">
              <div className="u-item">
                <span className="u-num">{String(timeLeft.days).padStart(2, '0')}</span>
                <span className="u-lbl">Hari</span>
              </div>
              <span className="u-sep">:</span>
              <div className="u-item">
                <span className="u-num">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="u-lbl">Jam</span>
              </div>
              <span className="u-sep">:</span>
              <div className="u-item">
                <span className="u-num">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="u-lbl">Minit</span>
              </div>
              <span className="u-sep">:</span>
              <div className="u-item">
                <span className="u-num">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="u-lbl">Saat</span>
              </div>
            </div>
            <button
              className="btn btn-primary btn-large urgency-cta"
              onClick={() =>
                document.getElementById('produk')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              🌙 DAFTAR SEKARANG — HARGA PROMO
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
