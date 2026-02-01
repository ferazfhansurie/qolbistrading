import './Proof.css'

export default function Proof() {
  const results = [
    {
      id: 1,
      metric: '12x ROAS',
      description: 'Average return on ad spend across all campaigns'
    },
    {
      id: 2,
      metric: '50+',
      description: 'Successful campaigns managed and optimized'
    },
    {
      id: 3,
      metric: '98%',
      description: 'Client retention rate - businesses keep coming back'
    },
    {
      id: 4,
      metric: 'RM6.90',
      description: 'Average cost per lead - industry-leading efficiency'
    }
  ]

  const testimonials = [
    {
      id: 1,
      name: 'Ahmad Rizal',
      business: 'E-commerce Store Owner',
      quote: 'Was losing money on ads every month. They fixed our targeting and creatives. Now we\'re profitable. Best decision ever.',
      rating: 5
    },
    {
      id: 2,
      name: 'Sarah Chen',
      business: 'Digital Marketing Manager',
      quote: 'Their weekly check-ins and daily reports give us transparency we never had before. We finally understand our ad spend.',
      rating: 5
    },
    {
      id: 3,
      name: 'Ravi Kumar',
      business: 'SaaS Company Founder',
      quote: 'Tripled our leads in 6 weeks. The team knows what they\'re doing and actually cares about our results.',
      rating: 5
    }
  ]

  return (
    <section className="proof-section" id="proof">
      <div className="container">
        <div className="section-header">
          <h2>Proven Results That Speak</h2>
          <p>Real numbers. Real businesses. Real impact.</p>
        </div>

        <div className="metrics-grid">
          {results.map((result) => (
            <div 
              key={result.id} 
              className="metric-card"
            >
              <div className="metric-value">
                {result.metric}
              </div>
              <p>{result.description}</p>
            </div>
          ))}
        </div>

        <div className="testimonials-section">
          <h3>What Our Clients Say</h3>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="testimonial-card"
              >
                <div className="stars">
                  {'⭐'.repeat(testimonial.rating)}
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
