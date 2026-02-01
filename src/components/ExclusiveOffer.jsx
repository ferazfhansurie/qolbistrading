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
      const tomorrow = new Date(now)
      tomorrow.setDate(tomorrow.getDate() + 1)
      tomorrow.setHours(0, 0, 0, 0)
      
      const diff = tomorrow - now
      
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
            🎁 LIMITED TIME OFFER
          </div>

          <h2>Only For The Next 24 Hours</h2>
          
          <div className="offer-highlight">
            <div className="highlight-box">
              <h3>First 5 Sign-Ups Get</h3>
              <div className="offer-amount">
                1 month FREE
              </div>
              <p>+ Free campaign audit worth RM 2,000</p>
              <p className="small-text">Then just RM 550/month (Poster Package value)</p>
            </div>
          </div>

          <div className="countdown">
            <p className="countdown-label">Offer expires in:</p>
            <div className="countdown-timer">
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
              <span className="countdown-separator">:</span>
              <div className="countdown-item">
                <span 
                  className="countdown-number"
                  key={timeLeft.seconds}
                >
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="countdown-label-small">Seconds</span>
              </div>
            </div>
          </div>

          <div className="offer-benefits">
            <h4>What You Get Immediately:</h4>
            <ul>
              <li>✓ FREE campaign audit & strategy session (RM 2,000 value)</li>
              <li>✓ Full ad setup & optimization by our team</li>
              <li>✓ Professional ad creatives (posters included)</li>
              <li>✓ Daily KPI tracking & monitoring</li>
              <li>✓ Weekly strategy calls with your dedicated team</li>
              <li>✓ 1 month to prove we can deliver 2x ROAS</li>
            </ul>
          </div>

          <div className="offer-cta">
            <button 
              className="btn btn-primary btn-large btn-pulse"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              🚀 CLAIM MY SPOT NOW
            </button>
            <p className="urgency-text">Only <span className="highlight-text">5 spots</span> available at this price</p>
          </div>

          <p className="guarantee-text">
            <strong>Money-Back Guarantee:</strong> If we don't deliver at least 2x ROAS in 1 month, we'll keep optimizing for free. No questions asked.
          </p>
        </div>
      </div>
    </section>
  )
}
