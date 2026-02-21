import { useState } from 'react'
import './Objections.css'

const faqs = [
  {
    q: 'Sesuai ke untuk saya yang masih trader baharu?',
    a: 'Ya, sangat sesuai. Sistem ini direka untuk semua peringkat. Trader baharu akan dapat foundation yang kuat dari awal, mengelakkan kesilapan yang biasa dilakukan oleh traders yang belajar teknikal dahulu. Modul kami disusun dari asas ke advance, step-by-step dan mudah difahami.',
  },
  {
    q: 'Saya dah ada pengalaman teknikal analysis. Ini berbeza ke?',
    a: 'Sangat berbeza. Teknikal analysis bagus untuk tahu "apa yang berlaku". Moonphase System jelaskan "kenapa" ia berlaku. Presidential news spikes, institutional movements, mass psychology — semua ini follow lunar patterns yang teknikal analysis alone tidak boleh detect. Ini adalah lapisan awareness baru yang akan melengkapi pengetahuan teknikal anda.',
  },
  {
    q: 'Ini bukan skim cepat kaya kan?',
    a: 'Bukan langsung. Kami tidak janjikan keuntungan dalam masa singkat. Ini adalah sistem berasaskan data untuk improve timing, awareness, dan discipline dalam trading. Hasil realistic: steady equity curve, kurang loss akibat blind spots, better entry timing. Ia memerlukan masa, konsistensi, dan proper application.',
  },
  {
    q: 'Moonphase ni ada kaitan dengan mistik atau kepercayaan tertentu?',
    a: 'Tidak sama sekali. Ini sepenuhnya berasaskan data dan kajian saintifik. Korelasi antara lunar cycles dan market behaviour adalah sesuatu yang telah didokumentasikan oleh institusi kewangan antarabangsa, termasuk JP Morgan. Ini bukan ramalan atau mistik — ini pattern recognition berasaskan data.',
  },
  {
    q: 'Boleh ke saya apply sistem ni pada market selain Gold?',
    a: 'Sistem kami dioptimumkan untuk Gold XAU/USD yang merupakan market paling dipengaruhi oleh lunar cycles. Walau bagaimanapun, konsep asasnya boleh diapply pada market lain. Kami rekomenkan mulakan dengan Gold dahulu untuk faham korelasi secara mendalam sebelum expand ke market lain.',
  },
  {
    q: 'Macam mana cara nak dapatkan akses selepas beli?',
    a: 'Selepas pembayaran disahkan, anda akan menerima akses dalam masa 24 jam melalui WhatsApp atau email. Untuk pakej Premium dan Elite, kami akan hubungi anda terus untuk setup akses database dan jadualkan session.',
  },
  {
    q: 'Ada sokongan selepas beli?',
    a: 'Ya. Semua pakej termasuk akses kepada community traders kami. Pakej Elite mendapat priority support dan direct access kepada team Qolbies. Kami serius tentang kejayaan anda — bukan sekadar jual dan tinggalkan.',
  },
]

export default function Objections() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="objections-section" id="faq">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">❓ SOALAN LAZIM</div>
          <h2>
            Soalan Yang Selalu<br />
            Ditanya
          </h2>
          <p>
            Semua yang anda perlu tahu sebelum memulakan perjalanan trading
            yang betul.
          </p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className={`faq-question ${openIndex === index ? 'open' : ''}`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
                {faq.q}
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="faq-contact" id="contact">
          <p>Masih ada soalan? Hubungi kami terus.</p>
          <div className="faq-contact-btns">
            <a
              href="https://wa.me/60178953047?text=Hi%20Qolbies%20Trading,%20I%20have%20a%20question%20about%20the%20Moon%20Phase%20Trading%20System"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 WhatsApp Kami
            </a>
            <a
              href="mailto:adminmasterprince63@qolbiestrading.com"
              className="btn btn-secondary"
            >
              📧 Email Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
