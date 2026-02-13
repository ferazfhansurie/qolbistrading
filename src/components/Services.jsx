import './Services.css'

export default function Services() {
  const services = [
    {
      id: 1,
      icon: '🌙',
      title: 'Moonphase Data System untuk Predict Market',
      description: 'Belajar gimme mana check moonphase past data untuk correlate dengan future trade ranges. Filter news noise dengan lunar patterns.'
    },
    {
      id: 2,
      icon: '👁️',
      title: 'Blind Spot Awareness Training',
      description: 'Discover environmental factors yang technical analysis alone tak detect. Presidential events, mass psychology, lunar impacts on behavior.'
    },
    {
      id: 3,
      icon: '�',
      title: 'Steady Equity Curve Strategy',
      description: 'System untuk grow portfolio steadily along market timelines. Avoid burst losses. Works even dengan high risk/full margin styles.'
    },
    {
      id: 4,
      icon: '🧠',
      title: 'Reset Traders Mindset Framework',
      description: 'Win back confidence dengan small step guiding. Real account strategies untuk regain equity. Control stress, sadness, happiness impacts.'
    },
    {
      id: 5,
      icon: '📋',
      title: 'Real-Life Evidence Experience',
      description: 'Case studies from actual market environments. Learn gimme mana inside & outside factors affect your trading portfolio dan decisions.'
    },
    {
      id: 6,
      icon: '🎯',
      title: 'Safe Trading Direction System',
      description: 'Apply moonphase data + technical boost untuk trade safely. Confident TP/take profit points. Avoid over-trading traps.'
    }
  ]

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <h2>Qolbies Moonphase System Advantage</h2>
          <p>Bukan sekadar technical analysis. Kita teach awareness of market blind spots using lunar data correlation.</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div 
              key={service.id}
              className={`service-card ${service.id === 1 ? 'featured' : ''}`}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              {service.id === 1 && <div className="featured-badge">CORE CONTENT</div>}
              {service.id === 6 && <div className="promo-badge">BONUS</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
