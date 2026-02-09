import './Pricing.css'

export default function Pricing() {
  const pricingPlans = [
    {
      id: 1,
      name: '3-WEEK TRIAL',
      price: 'RM 350',
      description: 'Low commitment, proper testing.',
      features: [
        'Full campaign setup',
        'Retargeting strategy',
        'Daily KPI reports',
        'Dedicated support',
      ],
      cta: 'Start Trial',
      highlighted: false
    },
    {
      id: 2,
      name: 'POSTER PACKAGE',
      price: 'RM 550',
      description: 'Most popular for SMEs.',
      features: [
        'Full campaign management',
        'Ad poster creation',
        'Retargeting strategy',
        'Daily KPI reports',
        'Weekly discussions',
        'Dedicated support',
      ],
      cta: 'Get Started',
      highlighted: true
    },
    { /** */
      id: 3,
      name: 'VIDEO PACKAGE',
      price: 'RM 1,050',
      description: 'Best for higher conversions and scaling.',
      features: [
        'Full campaign management',
        'Ad video & poster creation',
        'Video editing & optimization',
        'Retargeting strategy',
        'Daily KPI reports',
        'Weekly discussions',
        'Priority support',
      ],
      cta: 'Schedule Consultation',
      highlighted: false
    }
  ]

  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <div className="section-header">
          <h2>SIMPLE PRICING</h2>
          <p>All packages include full campaign management, retargeting, reports & dedicated support</p>
        </div>
        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id}
              className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}
            >
              {plan.highlighted && <div className="badge-featured">MOST POPULAR</div>}
              
              <h3>{plan.name}</h3>
              <p className="price">
                {plan.price}
              </p>
              <p className="description">{plan.description}</p>

              <button className={`btn ${plan.highlighted ? 'btn-primary' : 'btn-secondary'}`}>
                {plan.cta}
              </button>

              <div className="features">
                <h4>Includes:</h4>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <span className="checkmark">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="pricing-footer">
          <p><strong>First 5 sign-ups:</strong> 3 months FREE. Limited slots. Serious businesses only.</p>
        </div>
      </div>
    </section>
  )
}
