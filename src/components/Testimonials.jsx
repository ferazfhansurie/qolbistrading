import './Testimonials.css'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Ahmad Hassan',
      company: 'Fashion E-Commerce',
      text: 'Within 1 month, we went from breaking even to 15x ROAS. Adletic truly understands Meta Ads.',
      rating: 5
    },
    {
      name: 'Sarah Lim',
      company: 'Beauty & Wellness',
      text: 'The professionalism and results speak for themselves. Best investment we made this year.',
      rating: 5
    },
    {
      name: 'Rajesh Kumar',
      company: 'E-Learning Platform',
      text: 'Transparent reporting, quick responses, and campaigns that actually convert. Highly recommended!',
      rating: 5
    }
  ]

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>Loved by Our Clients</h2>
          <p>Real results from real businesses using Adletic</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx}
              className="testimonial-card"
            >
              <div className="stars">
                {'⭐'.repeat(testimonial.rating)}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
