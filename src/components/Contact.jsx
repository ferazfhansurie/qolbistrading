import './Contact.css'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    alert('Thank you for your message! We\'ll get back to you soon.')
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>Ready to talk about your Meta Ads? We're here to listen and help you figure out the best approach.</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">📧</div>
              <h3>Email</h3>
              <p><a href="mailto:hello@adleticagency.com">hello@adleticagency.com</a></p>
            </div>
            <div className="info-item">
              <div className="info-icon">📱</div>
              <h3>Phone</h3>
              <p><a href="tel:+60112167672">+60 112 167 672</a></p>
            </div>
            <div className="info-item">
              <div className="info-icon">📍</div>
              <h3>Location</h3>
              <p>
                No. 27-1, Jalan Neutron Q,<br />
                U16/Q Denai Alam,<br />
                Seksyen U16,<br />
                40160 Shah Alam,<br />
                Selangor Darul Ehsan
              </p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                placeholder="Your Name" 
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                placeholder="Your Email" 
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="text" 
                placeholder="Company Name" 
                required 
              />
            </div>
            <div className="form-group">
              <textarea 
                placeholder="Tell us about your goals..." 
                rows="5"
                required 
              ></textarea>
            </div>
            <button 
              type="submit"
              className="btn btn-primary"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
