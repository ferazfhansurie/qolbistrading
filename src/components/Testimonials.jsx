import './Testimonials.css'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Ahmad Hassan',
      company: 'Day Trader',
      text: 'Game changer talaga. Using the Moon Phase system, my trading wins improved to 95% consistency. Dapat bang RM149.90? Dapat. Worth 10x di honest assessments.',
      rating: 5
    },
    {
      name: 'Sarah Lim',
      company: 'Options Trader',
      text: 'Finally a system na make sense. Tired of losing money sa random entries. Moon phases give me timing precision I never had before. Recommend sa lahat.',
      rating: 5
    },
    {
      name: 'Rajesh Kumar',
      company: 'Swing Trader',
      text: 'Scientific approach meets practical trading. Templates included sa ebook ay ready to use agad. This is legit. Best RM149.90 spent sa trading education.',
      rating: 5
    }
  ]

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>Traders Are Getting Results</h2>
          <p>Real feedback dari traders na ginagamit ang Moon Phase System</p>
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
