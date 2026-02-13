import './Solution.css'

export default function Solution() {
  const lunarPhases = [
    {
      id: 1,
      phase: '🌑',
      name: 'NEW MOON PHASE',
      period: '0-7 days',
      market: 'EXPANSION ENERGY',
      description: 'Low volume, consolidation period. Setup phase untuk trend baru. Risk management tight.'
    },
    {
      id: 2,
      phase: '🌒',
      name: 'WAXING CRESCENT',
      period: '8-14 days',
      market: 'BULLISH MOMENTUM',
      description: 'Building momentum. Market trending up. Best untuk long entries. Confidence increases.'
    },
    {
      id: 3,
      phase: '🌕',
      name: 'FULL MOON PHASE',
      period: '14-21 days',
      market: 'PEAK VOLATILITY',
      description: 'Maximum energy. Highest volatility and institutional activity. Risk reversal zones.'
    },
    {
      id: 4,
      phase: '🌘',
      name: 'WANING CRESCENT',
      period: '22-29 days',
      market: 'BEARISH DECLINE',
      description: 'Declining momentum. Profit-taking phase. Short opportunities emerge. Caution increases.'
    }
  ]

  return (
    <section className="solution-section" id="solution">
      <div className="container">
        <div className="section-header">
          <h2>QOLBIES MOONPHASE DATA SYSTEM</h2>
          <p>Predict future market ranges dan behavior patterns guna moonphase data history. Bukan magic — it's data-driven correlation antara lunar cycles dengan market movements.</p>
        </div>
        <div className="solutions-grid">
          {lunarPhases.map((lunar) => (
            <div key={lunar.id} className="solution-card">
              <div className="solution-phase">{lunar.phase}</div>
              <h3>{lunar.name}</h3>
              <p className="phase-period">{lunar.period}</p>
              <p className="phase-market">{lunar.market}</p>
              <p>{lunar.description}</p>
            </div>
          ))}
        </div>
        <div className="framework-note">
          <p><strong>🌙 MOONPHASE DATA PAST = PREDICT MARKET FUTURE</strong></p>
          <p>Check moonphase setiap kali before trade. Correlate past data dengan technical analysis untuk safer directions. Filter news noise, identify real volatility periods. Trade dengan confident — even high risk atau full margin styles — sebab kau aware market behavior patterns yang repeat dalam lunar cycles. Steady equity curve growth instead of burst losses.</p>
        </div>
      </div>
    </section>
  )
}

