import { useState, useEffect } from 'react'
import './ExclusiveOffer.css'

export default function ExclusiveOffer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const endDate = new Date(now)
      endDate.setDate(endDate.getDate() + 3) // 3 days from now
      endDate.setHours(23, 59, 59, 999)
      
      const diff = endDate - now
      
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="exclusive-offer-section" id="exclusive-offer">
      <div className="container">
        <div className="offer-content">
          <div className="offer-badge">
            🌙 MOON PHASE TRADING EBOOK
          </div>

          <h2>Tak Perlu Sentuh Duit Dalam Bank</h2>
          
          <div className="offer-highlight">
            <div className="highlight-box">
              <h3>Moon Phase Trading Ebook</h3>
              <div className="offer-amount">
                RM 149.90
              </div>
              <p>Everything Kau Need Untuk Trade With System</p>
              <p className="small-text">Includes lifetime access and free future updates</p>
            </div>
          </div>

          <div className="countdown">
            <p className="countdown-label">Available untuk download:</p>
            <div className="countdown-timer">
              <div className="countdown-item">
                <span 
                  className="countdown-number"
                  key={timeLeft.days}
                >
                  {String(timeLeft.days).padStart(2, '0')}
                </span>
                <span className="countdown-label-small">Days</span>
              </div>
              <span className="countdown-separator">:</span>
              <div className="countdown-item">
                <span 
                  className="countdown-number"
                  key={timeLeft.hours}
                >
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="countdown-label-small">Hours</span>
              </div>
              <span className="countdown-separator">:</span>
              <div className="countdown-item">
                <span 
                  className="countdown-number"
                  key={timeLeft.minutes}
                >
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="countdown-label-small">Minutes</span>
              </div>
            </div>
          </div>

          <div className="offer-benefits">
            <h4>Included Sa Ebook:</h4>
            <ul>
              <li>✓ 149.90+ Pages Complete Trading System</li>
              <li>✓ Moon Phase Signals & Patterns Explained</li>
              <li>✓ Entry/Exit Templates (Copy-Paste Ready)</li>
              <li>✓ Real Case Studies From Actual Trades</li>
              <li>✓ Psychological Trading Framework</li>
              <li>✓ BONUS: Digital Trading Journal Template</li>
              <li>✓ BONUS: Lifetime Updates (Free)</li>
            </ul>
          </div>

          <div className="offer-cta">
            <button 
              className="btn btn-primary btn-large"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              MULAI BELAJAR - RM149.90
            </button>
            <p className="urgency-text"></p>
          </div>
        </div>
      </div>
    </section>
  )
}
