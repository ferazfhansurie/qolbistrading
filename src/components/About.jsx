import './About.css'

export default function About() {
  const stats = [
    { number: '2,500+', label: 'Traders Trained' },
    { number: '95%', label: 'Win Rate' },
    { number: '3.2x', label: 'Avg Returns' },
    { number: '30-Day', label: 'Money Back Guarantee' }
  ]

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header">
          <h2>Tentang System Kami</h2>
          <p>Simple framework untuk timing yang consistent dan profits yang real.</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Moon Phase Trading Gimme Mana Function</h3>
            <p>
              Kami develop ang system ini based sa scientific research tungkol sa moon cycles at market behavior. Walang spiritual nonsense — pure technical analysis combined with lunar timing patterns.
            </p>
            <p>
              The system simple lang, but effective. Follow the signals, keep emotions out, document everything. That's it. Majority of traders fail because dili consistent sa approach. Moon Phase System removes the guessing game.
            </p>
            <p>
              Whether kau complete beginner o experienced trader na need ng better timing tool, system ito scalable sa lahat. Pre-made templates mean kau puwede mag-trade agad.
            </p>
            <ul className="about-list">
              <li>Scientific approach based sa lunar cycles research</li>
              <li>Step-by-step templates ready to use immediately</li>
              <li>Real case studies from actual trades, not hypotheticals</li>
              <li>Lifetime updates at 30-day money-back guarantee</li>
            </ul>
          </div>

          <div className="about-stats">
            <div className="stats-grid">
              {stats.map((stat, idx) => (
                <div 
                  key={stat.number + idx}
                  className="stat-box"
                >
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
