import './About.css'

const stats = [
  { number: '2023', label: 'Tahun Ditemuijana' },
  { number: '2,500+', label: 'Traders Dibimbing' },
  { number: 'Gold XAU', label: 'Market Utama' },
  { number: '30 Hari', label: 'Money Back Guarantee' },
]

export default function About() {
  return (
    <section className="about" id="tentang">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">🌙 SIAPA QOLBIES TRADING</div>
          <h2>
            Lahir Dari Jiwa<br />
            Trader Melayu Sendiri
          </h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              Qolbies Trading bukan syarikat besar dengan modal berbilion. Kami
              lahir dari <strong>pengalaman pahit trader Melayu biasa</strong>{' '}
              yang dah penat struggle dengan teknikal analysis bertahun-tahun,
              tapi masih dalam loss cycle.
            </p>
            <p>
              Sejak <strong>2023</strong>, team kami memulakan kajian mendalam
              tentang hubungan antara{' '}
              <strong>Astrologi dan Markets Correlations</strong>. Kami bukan
              saja-saja percaya — kami research, correlate, test, dan validate
              menggunakan data historical yang extensive.
            </p>
            <p>
              Apa yang kami jumpa? Korelasi yang kuat antara{' '}
              <strong>lunar cycles dengan Gold market movement</strong> —
              korelasi yang sama yang dah lama diketahui oleh institusi besar
              seperti JP Morgan, tapi tidak pernah dikongsi dengan traders awam.
            </p>
            <p>
              Misi kami mudah:{' '}
              <strong>bawa rahsia ini kepada traders Melayu</strong> supaya
              mereka boleh trade dengan lebih smart, lebih confident, dan
              akhirnya achieve financial freedom yang selama ini mereka impikan.
            </p>
            <ul className="about-list">
              <li>✓ Sistem berasaskan data — bukan tekaan atau emosi</li>
              <li>✓ Dibangunkan khusus untuk Gold XAU/USD market</li>
              <li>✓ Divalidate dengan historical data yang extensive</li>
              <li>✓ Disokong oleh kajian institusi kewangan global</li>
              <li>✓ Sesuai untuk trader baharu dan berpengalaman</li>
            </ul>
          </div>

          <div className="about-right">
            <div className="stats-grid">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-box">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="about-mission">
              <h4>🎯 Misi Kami</h4>
              <p>
                "Bawa Rahsia Market Sebenar Kepada Traders Melayu.
                Trade Dengan Ilmu, Bukan Nasib."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
