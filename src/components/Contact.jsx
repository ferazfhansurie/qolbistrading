import './Contact.css'

export default function Contact() {
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

          <div className="whatsapp-cta">
            <a 
              href="https://api.whatsapp.com/send?phone=601121677672&text=Hi%20Adletic%20Agency,%20I%20would%20like%20to%20learn%20more%20about%20your%20services" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              💬 Message Us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
