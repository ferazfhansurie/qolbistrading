import './About.css'

export default function About() {
  const stats = [
    { number: '50+', label: 'Successful Campaigns' },
    { number: '$5M+', label: 'Ad Spend Managed' },
    { number: '12x', label: 'Average ROAS' },
    { number: '98%', label: 'Business Satisfaction' }
  ]

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header">
          <h2>Who We Are</h2>
          <p>A team focused on one thing: making Meta Ads work for your business.</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Real Experience, Real Results</h3>
            <p>
              We've built and optimized hundreds of Meta Ad campaigns across different industries. That experience isn't theoretical—it's the foundation of everything we do. We know what works because we've seen it work repeatedly.
            </p>
            <p>
              We don't promise unrealistic returns or use empty jargon. Instead, we're straightforward about what's possible, why it matters, and how we'll get you there. We also make sure you understand what we're doing every step of the way.
            </p>
            <p>
              Whether you're just starting with Meta Ads or looking to improve underperforming campaigns, we meet you where you are and build a plan that actually fits your business.
            </p>
            <ul className="about-list">
              <li>Hands-on campaign management and optimization</li>
              <li>Regular communication and transparent reporting</li>
              <li>Data-driven decisions, not guesswork</li>
              <li>Flexible packages for businesses of all sizes</li>
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
