import './Benefits.css'

export default function Benefits() {
  const benefits = [
    {
      icon: '🎯',
      title: 'Clear Strategy',
      description: 'We understand your business first. Then we build campaigns that actually align with your goals.'
    },
    {
      icon: '⚙️',
      title: 'Continuous Optimization',
      description: 'We test, measure, and refine. Results improve over time because we constantly find what works better.'
    },
    {
      icon: '🎨',
      title: 'Creative That Converts',
      description: 'Great ad copy and design matter. We create content that speaks to your audience, not at them.'
    },
    {
      icon: '📊',
      title: 'You Understand Everything',
      description: 'No mystery box. We explain what we\'re doing, why, and what the numbers actually mean for your business.'
    },
    {
      icon: '🚀',
      title: 'Built to Scale',
      description: 'Whether you spend $500 or $5,000 a month, our approach grows with your business.'
    },
    {
      icon: '💬',
      title: 'You Have a Partner',
      description: 'Questions at 3pm? Insights you need to share? We\'re here to listen and support you.'
    }
  ]

  return (
    <section className="benefits" id="benefits">
      <div className="container">
        <div className="section-header">
          <h2>How We Work</h2>
          <p>Simple, straightforward, and focused on your success.</p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <div 
              key={benefit.title}
              className="benefit-card"
            >
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
