import './Pricing.css'

export default function Pricing() {
  const pricingPlans = [
    {
      id: 1,
      name: 'MOONPHASE EBOOK',
      price: 'RM 149.90',
      description: 'Lengkap dengan tools dan sistem untuk predict market dengan moonphase data.',
      features: [
        'Complete 149+ Page Ebook',
        'Moon Phase Trading System',
        'Entry/Exit Templates',
        'Case Studies & Analysis',
        'Trading Journal Template',
        'Lifetime Access & Updates',
      ],
      cta: 'Mulai Belajar',
      highlighted: true
    }
  ]

  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <div className="section-header">
          <h2>PRICING</h2>
          <p>Simple. Straightforward. Complete Moonphase system dalam satu ebook.</p>
        </div>
        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id}
              className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}
            >
              {plan.highlighted && <div className="badge-featured">PALING DIPILIH</div>}
              
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
          <p><strong>Lifetime Access:</strong> Unlimited updates at support para sa lahat.</p>
        </div>
      </div>
    </section>
  )
}
