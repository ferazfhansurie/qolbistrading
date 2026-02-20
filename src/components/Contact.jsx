import './Contact.css'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <h2>Mula Journey Mu Sekarang</h2>
          <p>Ready untuk learn moon phase trading system? Contact us untuk beli ebook atau questions.</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">💬</div>
              <h3>WhatsApp</h3>
              <p><a href="https://api.whatsapp.com/send?phone=60178953047&text=Hi%20Qolbies%20Trading,%20I%20want%20to%20buy%20the%20Moon%20Phase%20Trading%20Ebook" target="_blank" rel="noopener noreferrer">+60 17-895 3047</a></p>
            </div>
            <div className="info-item">
              <div className="info-icon">📧</div>
              <h3>Email</h3>
              <p><a href="mailto:adminmasterprince63@qolbiestrading.com">adminmasterprince63@qolbiestrading.com</a></p>
            </div>
            <div className="info-item">
              <div className="info-icon">🚀</div>
              <h3>Instant Purchase</h3>
              <p><a href="#">Buy Ebook Directly Online</a></p>
            </div>
          </div>

          <div className="whatsapp-cta">
            <a 
              href="https://api.whatsapp.com/send?phone=60178953047&text=Hi%20Qolbies%20Trading,%20I%20want%20to%20buy%20the%20Moon%20Phase%20Trading%20Ebook%20RM149.90" 
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
