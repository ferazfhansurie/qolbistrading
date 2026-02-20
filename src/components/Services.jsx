import './Services.css'

const modules = [
  {
    id: 1,
    number: 'MODUL 01',
    title: 'REALITI MARKET YANG SEBENAR',
    subtitle: '"Kenapa Trader Yang Rajin Belajar Teknikal Pun Masih Loss?"',
    desc: 'Ramai traders dah habiskan masa dan duit belajar teknikal analysis, tapi masih dalam loss cycle. Dalam modul ini, kami dedahkan realiti sebenar di sebalik market movement yang ramai traders tidak sedar.',
    callout: '👉 Modul ini akan reset mindset anda tentang apa itu trading yang betul.',
    featured: true,
  },
  {
    id: 2,
    number: 'MODUL 02',
    title: 'ASAS MOONPHASE CORRELATION',
    subtitle: '"Bukan Mistik, Bukan Ramalan — Ini Data."',
    desc: 'Pelajari bagaimana lunar cycles berkorelasi dengan Gold market movement. Bukan kepercayaan semata — ini didokumenkan oleh institusi kewangan global termasuk JP Morgan.',
    callout: '👉 Anda akan faham mengapa "Teknik Bulan" ini works secara saintifik.',
  },
  {
    id: 3,
    number: 'MODUL 03',
    title: 'MOONPHASE DATABASE & CARA BACA',
    subtitle: '"Data Masa Lalu = Predict Masa Depan"',
    desc: 'Akses dan cara guna Moonphase Database yang komprehensif. Pelajari cara correlate historical lunar data dengan current market untuk predict high-volatility periods dan safe entry zones.',
    callout: '👉 Ini modul yang bezakan sistem ini dengan mana-mana teknikal analysis lain.',
  },
  {
    id: 4,
    number: 'MODUL 04',
    title: 'MASUK MARKET DENGAN TIMING TEPAT',
    subtitle: '"Entry Bukan Soal Agak-Agak, Tapi Soal Timing"',
    desc: 'Kalau entry timing salah, technical analysis yang paling advance pun tak akan tolong. Pelajari cara guna moonphase data untuk identify exact windows untuk masuk market dengan confidence.',
    callout: '👉 Anda akan bina kebiasaan trade berdasarkan data, bukan emosi.',
  },
  {
    id: 5,
    number: 'MODUL 05',
    title: 'ELAK TRAP & PROTECT CAPITAL',
    subtitle: '"Tau Bila Nak Stop = Lebih Penting Dari Tau Bila Nak Masuk"',
    desc: 'Strategi khusus untuk elak market traps yang biasa berlaku semasa news spikes. Pelajari bagaimana moonphase awareness membantu anda protect capital dari unexpected volatility.',
    callout: '👉 Modul ini akan drastically kurangkan losses yang boleh dielak.',
  },
  {
    id: 6,
    number: 'MODUL 06',
    title: 'GOLD XAU — MARKET PALING LIAR',
    subtitle: '"Kawal Market Paling Volatile Di Dunia Guna Moonphase"',
    desc: 'Gold XAU/USD adalah market yang paling dipengaruhi oleh lunar cycles. Pelajari specific Gold trading strategies menggunakan moonphase data untuk hasil yang lebih consistent.',
    callout: '👉 Anda akan ada edge yang kebanyakan Gold traders tidak tahu wujud.',
  },
  {
    id: 7,
    number: 'MODUL 07',
    title: 'TRADING PSYCHOLOGY & DISCIPLINE',
    subtitle: '"Sistem Terbaik Tak Berguna Kalau Psychology Hancur"',
    desc: 'Framework untuk kuatkan mental game. Cara control FOMO, prevent revenge trading, dan maintain discipline semasa market chaos. Moonphase awareness turut membantu stabilkan emotional state.',
    callout: '👉 Anda akan jadi trader yang lebih tenang dengan keputusan lebih rational.',
  },
  {
    id: 8,
    number: 'MODUL 08',
    title: 'BINA SISTEM TRADING YANG KONSISTEN',
    subtitle: '"Dari Chaos Kepada System"',
    desc: 'Gabungkan semua yang dipelajari untuk bina satu sistem trading yang personal dan konsisten. Step-by-step framework untuk apply moonphase data dalam daily trading routine anda.',
    callout: '👉 Anda akan pulang dengan trading plan yang jelas dan boleh terus dilaksanakan.',
  },
]

export default function Services() {
  return (
    <section className="services" id="kandungan">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">📚 APA YANG ANDA BELAJAR</div>
          <h2>
            Strategy &amp; Framework Lengkap<br />
            Moonphase Trade System
          </h2>
          <p>
            8 modul komprehensif yang akan transform cara anda trade
            Gold XAU/USD selamanya.
          </p>
        </div>

        <div className="modules-grid">
          {modules.map((mod) => (
            <div
              key={mod.id}
              className={`module-card ${mod.featured ? 'featured' : ''}`}
            >
              <div className="module-number">{mod.number}</div>
              <h3>{mod.title}</h3>
              <p className="module-subtitle">{mod.subtitle}</p>
              <p>{mod.desc}</p>
              <p className="module-callout">{mod.callout}</p>
            </div>
          ))}
        </div>

        <div className="services-footer-cta">
          <p>
            Jika anda di dalam senarai di bawah, anda{' '}
            <strong>WAJIB dapatkan sistem ini:</strong>
          </p>
          <ul className="must-join-list">
            <li>✅ Belum consistent dalam trading Gold XAU</li>
            <li>✅ Masih loss semasa big news keluar</li>
            <li>✅ Dah ada teknikal knowledge tapi masih struggle</li>
            <li>✅ Nak bina sistem trading yang lebih reliable</li>
          </ul>
          <button
            className="btn btn-primary btn-large"
            onClick={() =>
              document.getElementById('produk')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            🌙 DAPATKAN AKSES SEKARANG
          </button>
        </div>
      </div>
    </section>
  )
}
