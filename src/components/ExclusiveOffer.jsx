import './ExclusiveOffer.css'

const products = [
  {
    id: 1,
    tier: 'STARTER',
    name: 'Ebook + Free Guiding Signal',
    price: 'RM 149.90',
    originalPrice: 'RM 350',
    badge: '⭐ PALING POPULAR',
    featured: false,
    desc: 'Permulaan yang sempurna untuk traders yang ingin faham Moonphase Trade System dari asas.',
    includes: [
      '📖 Ebook Moonphase Trade System (Lengkap)',
      '📊 Preview Database Moonphase (Free Access)',
      '🎯 Guiding Signal — Entry & Exit Framework',
      '💡 Case Studies Real Trades (Gold XAU)',
      '🧠 Trading Psychology Framework',
      '♾️ Lifetime Access + Free Updates',
      '🛡️ 30-Hari Money Back Guarantee',
    ],
    cta: 'DAPATKAN EBOOK SEKARANG',
    link: 'https://toyyibpay.com/Moon-Phase-Trading-E-book',
  },
  {
    id: 2,
    tier: 'PREMIUM',
    name: 'Moonphase Database — 6 Bulan Access',
    price: 'RM 497',
    originalPrice: 'RM 1,200',
    badge: '🔥 BEST VALUE',
    featured: true,
    desc: 'Akses penuh kepada Premium Moonphase Database selama 6 bulan. Worth lebih dari 10,000 USD!',
    includes: [
      '🌙 6 Bulan Access — Premium Moonphase Database',
      '📈 Real-Time Lunar Correlation Data (Gold XAU)',
      '🗓️ Monthly Moonphase Calendar & Forecast',
      '⚡ High-Volatility Period Alerts',
      '📖 Ebook Moonphase Trade System (Termasuk)',
      '🎯 Guiding Signal Framework (Termasuk)',
      '💬 Community Traders Access',
      '🛡️ 30-Hari Money Back Guarantee',
    ],
    cta: 'AKSES DATABASE SEKARANG',
    link: 'https://toyyibpay.com/Moonphase-Database-6-Bulan',
  },
  {
    id: 3,
    tier: 'ELITE',
    name: 'Private Class — Mega Discussion',
    price: 'RM 6,699',
    originalPrice: 'RM 12,000',
    badge: '💎 PALING COMPREHENSIVE',
    featured: false,
    desc: 'Khas untuk traders yang serius dan menghadapi isu kritikal. One-on-one dan group discussion bersama team Qolbies.',
    includes: [
      '👥 Private Class Access — Mega Discussion',
      '🔴 LIVE Group Session Bersama Qolbies Team',
      '🩺 Personal Trading Audit & Review',
      '💼 Custom Strategy untuk Situasi Anda',
      '🌙 6 Bulan Moonphase Database (Termasuk)',
      '📖 Ebook + Guiding Signal (Termasuk)',
      '⚡ Priority Support — Direct Access',
      '🛡️ 30-Hari Money Back Guarantee',
    ],
    cta: 'DAFTAR PRIVATE CLASS',
    link: 'https://toyyibpay.com/Private-Class-Mega-Discussion',
  },
]

export default function ExclusiveOffer() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="exclusive-offer-section" id="produk">
      <div className="container">

        <div className="section-header">
          <div className="section-badge">💰 Pilih Pakej Trading Anda</div>
          <h2>
            Setiap trader ada keperluan berbeza....<br />
            pilih pakej yang paling sesuai untuk perjalanan trading anda.<br />
          </h2>
        </div>

        <div className="products-grid">
          {products.map((p) => (
            <div key={p.id} className={`product-card ${p.featured ? 'featured' : ''}`}>
              {p.badge && <div className="product-badge">{p.badge}</div>}
              <div className="product-tier">{p.tier}</div>
              <h3 className="product-name">{p.name}</h3>
              <div className="product-pricing">
                <span className="product-original">{p.originalPrice}</span>
                <span className="product-price">{p.price}</span>
              </div>
              <p className="product-desc">{p.desc}</p>
              <ul className="product-includes">
                {p.includes.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${p.featured ? 'btn-primary' : 'btn-secondary'} btn-full`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="guarantee-block">
          <div className="guarantee-icon">🛡️</div>
          <h3>30-Hari Money Back Guarantee</h3>
          <p>
            Jika anda dah belajar sistem kami, apply ilmu yang dikongsi, tetapi
            tiada sebarang perubahan dalam masa <strong>30 hari</strong> — kami
            sedia pulangkan wang anda tanpa banyak soal.
          </p>
          <p>
            Dengan syarat, berikan kami review tentang tindakan yang telah anda
            ambil. Kami serius tentang hasil anda.
          </p>
        </div>

        {/* Final CTA */}
        <div className="offer-final-cta">
          <h2>
            Perjalanan Trading Yang Betul<br />
            Bermula Di Sini
          </h2>
          <p>
            Jangan tunggu lagi. Setiap hari yang berlalu tanpa Moonphase
            awareness adalah hari lagi anda terdedah kepada losses yang boleh
            dielak.
          </p>
          <button
            className="btn btn-primary btn-large"
            onClick={scrollToContact}
          >
            🌙 MULAKAN SEKARANG
          </button>
          <p className="offer-small-text">
            Tawaran harga promo terhad. Daftar sebelum harga naik semula.
          </p>
        </div>

      </div>
    </section>
  )
}
