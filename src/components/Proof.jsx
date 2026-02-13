import './Proof.css'

export default function Proof() {
  const results = [
    {
      id: 1,
      metric: '95%',
      description: 'Win rate using Moon Phase System consistently',
      icon: '📈',
      label: 'Success Rate',
      trend: 'up',
      change: '+12%',
      candle: { open: 60, close: 95, high: 100, low: 50 }
    },
    {
      id: 2,
      metric: '2,500+',
      description: 'Traders yang udah learn dan apply sistem kami',
      icon: '👥',
      label: 'Traders Yang Belajar',
      trend: 'up',
      change: '+340',
      candle: { open: 85, close: 55, high: 92, low: 48 }
    },
    {
      id: 3,
      metric: '3.2x',
      description: 'Average return multiplier dalam 6 bulan first use',
      icon: '💰',
      label: 'Return Multiplier',
      trend: 'up',
      change: '+0.8x',
      candle: { open: 58, close: 88, high: 95, low: 52 }
    },
    {
      id: 4,
      metric: 'RM149.90',
      description: 'Ebook lengkap dengan all trading signals dan templates',
      icon: '📚',
      label: 'Ebook Lengkap',
      trend: 'neutral',
      change: 'Lifetime',
      candle: { open: 80, close: 52, high: 86, low: 45 }
    }
  ]

  const testimonials = [
    {
      id: 1,
      name: 'Ahmad Fitri',
      business: 'Full-Time Trader (MT4)',
      quote: 'Technical ada, pattern ada, tapi still loss control. Moonphase system buka mata aku about market blind spots. Equity curve steady now, even full margin trading.',
      rating: 5
    },
    {
      id: 2,
      name: 'Siti Nurhaliza',
      business: 'Swing Trader (MT5)',
      quote: 'Overtrade sebab stress and FOMO. Burst 3 times dalam setahun. After apply lunar data correlation, aware bila market traps. Capital secure, psychology reset.',
      rating: 5
    },
    {
      id: 3,
      name: 'Khairul Azman',
      business: 'Maybank2u Trader, 7 Years Experience',
      quote: 'Years of finding patterns. Technical mastery. Still dalam losing loops. Moonphase data unlock environmental awareness. Sekarang predict range betul, equity growth steady.',
      rating: 5
    }
  ]

  return (
    <section className="proof-section" id="proof">
      <div className="container">
        <div className="section-header">
          <h2>HASIL YANG PROVEN</h2>
          <p>Bukan hype, bukan marketing. Real traders, real results.</p>
        </div>

        <div className="metrics-grid">
          {results.map((result) => {
            const candleIsGreen = result.candle.close >= result.candle.open
            const bodyHeight = Math.abs(result.candle.close - result.candle.open) || 2
            const wickTopHeight = result.candle.high - Math.max(result.candle.close, result.candle.open)
            const wickBottomHeight = Math.min(result.candle.close, result.candle.open) - result.candle.low
            const scale = 1.5 // scale factor for visual height
            
            return (
              <div 
                key={result.id} 
                className="metric-card"
              >
                <div className="metric-chart-container">
                  <div className="candlestick">
                    {/* Top wick */}
                    <div 
                      className="wick wick-top"
                      style={{
                        height: `${wickTopHeight * scale}px`
                      }}
                    />
                    
                    {/* Candle body */}
                    <div 
                      className={`candle-body ${candleIsGreen ? 'green' : 'red'}`}
                      style={{
                        height: `${bodyHeight * scale}px`
                      }}
                    />
                    
                    {/* Bottom wick */}
                    <div 
                      className="wick wick-bottom"
                      style={{
                        height: `${wickBottomHeight * scale}px`
                      }}
                    />
                  </div>
                </div>
                <div className="metric-content">
                  <div className="metric-icon">{result.icon}</div>
                  <div className="metric-value">
                    {result.metric}
                  </div>
                  <div className="metric-label">{result.label}</div>
                  <div className={`metric-trend trend-${result.trend}`}>
                    {result.trend === 'up' && '↑'} {result.change}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="testimonials-section">
          <h3>DARI TRADERS SEPERTI KAU</h3>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="testimonial-card"
              >
                <div className="stars">
                  {'⭐'.repeat(testimonial.rating || 5)}
                </div>
                <p className="quote">"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.business}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
