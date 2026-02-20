import './Proof.css'

const testimonials = [
  {
    id: 1,
    name: 'Ahmad Fitri',
    role: 'Full-Time Trader (MT4)',
    stars: 5,
    quote:
      'Dah 3 tahun trade, guna semua jenis teknikal analysis — tapi masih je loss control. Lepas belajar Moonphase System dari Qolbies, baru aku sedar ada blind spots yang teknikal tak boleh detect. Sekarang equity curve aku steady. Tak panic dah bila ada big news.',
  },
  {
    id: 2,
    name: 'Izwan Bahrin',
    role: 'Swing Trader (MT5)',
    stars: 5,
    quote:
      'Dulu overtrade gila sebab FOMO. Burst 3 kali dalam setahun! Selepas apply lunar data correlation, aku dah tahu bila market set trap. Capital aku selamat sekarang. Yang paling penting — psychology trading aku dah jauh lebih stabil.',
  },
  {
    id: 3,
    name: 'Khairul Azman',
    role: 'Trader Berpengalaman, 7 Tahun',
    stars: 5,
    quote:
      'Bertahun-tahun cari pattern, masteri teknikal analysis. Tapi masih dalam losing loops. Moonphase data unlock satu level awareness baru. Sekarang boleh predict range dengan lebih tepat dan equity curve grow steadily.',
  },
  {
    id: 4,
    name: 'Faizal Harun',
    role: 'Part-Time Trader, Johor',
    stars: 5,
    quote:
      'Honestly skeptical mula-mula. Tapi bila cuba apply dan tengok korelasi antara moonphase dan Gold movement, memang mind-blown. Ini bukan main-main. Ini sistem yang serius untuk traders yang serius.',
  },
  {
    id: 5,
    name: 'Nurul Ain',
    role: 'Trader Baharu, Kuala Lumpur',
    stars: 5,
    quote:
      'Sebagai trader baharu, aku takut nak start. Tapi dengan Qolbies Moonphase System, ada framework yang jelas. Tak perlu main agak-agak lagi. Database moonphase bagi aku confidence yang tak pernah ada sebelum ni.',
  },
  {
    id: 6,
    name: 'Rizal Mustapha',
    role: 'Gold Trader, Selangor',
    stars: 5,
    quote:
      'Trade Gold XAU ni memang liar. Tapi lepas faham struktur moonphase, aku dah tahu bila nak masuk dan bila nak tunggu. Loss aku dah drastically reduce. Ini bukan teknikal biasa — ini level lain.',
  },
]

export default function Proof() {
  return (
    <section className="proof-section" id="testimoni">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">★★★★★ TESTIMONI SEBENAR</div>
          <h2>
            Apa Kata Mereka Yang Dah Guna<br />
            Qolbies Moonphase System?
          </h2>
          <p>
            Bukan sekadar kata-kata semangat. Ini pengalaman sebenar dari traders
            seperti anda — yang dah transform cara mereka trade.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-card">
              <div className="testimonial-stars">{'⭐'.repeat(t.stars)}</div>
              <p className="testimonial-quote">"{t.quote}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.name[0]}</div>
                <div className="testimonial-info">
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="proof-cta">
          <p>
            Bergabunglah bersama <strong>2,500+ traders</strong> yang dah ubah cara
            mereka trade dengan Moonphase System.
          </p>
          <button
            className="btn btn-primary"
            onClick={() =>
              document.getElementById('produk')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            🌙 SAYA NAK JOIN SEKARANG
          </button>
        </div>
      </div>
    </section>
  )
}
