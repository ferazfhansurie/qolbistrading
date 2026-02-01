import './Services.css'

export default function Services() {
  const services = [
    {
      id: 1,
      icon: '💰',
      title: 'Cost Per Lead Below RM6.90',
      description: 'We optimize every campaign for maximum lead generation efficiency.'
    },
    {
      id: 2,
      icon: '🎨',
      title: 'Ad Video & Poster Creation',
      description: 'High-converting ad creatives designed to capture attention and drive engagement on Meta platforms.'
    },
    {
      id: 3,
      icon: '📊',
      title: 'Daily KPI Report',
      description: 'Track your campaign performance with daily key performance indicator reports. Stay updated on every metric that matters.'
    },
    {
      id: 4,
      icon: '💬',
      title: 'Weekly Discussion',
      description: 'Regular strategy sessions to review results, optimize campaigns, and plan next steps for growth.'
    },
    {
      id: 5,
      icon: '⚡',
      title: 'Zero-Cost Ad Setup',
      description: 'Complete campaign setup with Meta Ads Manager configuration, targeting, and optimization at no extra cost.'
    },
    {
      id: 6,
      icon: '🎁',
      title: 'First 5 Sign-Ups: 1 month FREE',
      description: 'Limited-time offer! First 5 sign-ups get 1 month of service completely free. Serious inquiries only.'
    }
  ]

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <h2>What You Get With Adletic</h2>
          <p>Complete lead generation solution with guaranteed low cost per lead</p>
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
              {service.id === 1 && <div className="featured-badge">OBJECTIVE</div>}
              {service.id === 6 && <div className="promo-badge">LIMITED TIME</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
