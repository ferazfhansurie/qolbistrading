import './Problem.css'

const problems = [
  {
    id: 1,
    icon: '📉',
    title: 'Loss Teruk Masa Big News Keluar',
    desc: 'Presiden U.S tweet, Fed announcement, ekonomi report — semua buat market spike liar. Trader yang tiada sistem khusus untuk navigate ini akan selamanya jadi mangsa volatility.',
  },
  {
    id: 2,
    icon: '🌪️',
    title: 'Technical Analysis Belajar Bertahun, Masih Loss Juga',
    desc: 'Support, resistance, pattern breakout — semua dah belajar. Tapi market masih reverse tanpa reason yang jelas. Sebab ada faktor lain yang teknikal tidak boleh detect.',
  },
  {
    id: 3,
    icon: '💸',
    title: 'Capital Burst Berulang Kali',
    desc: 'Bulan ni untung, bulan depan habis semua balik. Cycle yang menyakitkan hati. Tiada sistem untuk control market exposure dan timing yang betul menyebabkan losses berulang.',
  },
  {
    id: 4,
    icon: '😤',
    title: 'Overtrade & Emotional Trading',
    desc: 'FOMO, takut tertinggal peluang, revenge trade selepas loss. Semua ini destroy account perlahan-lahan. Bila tiada framework timing, emosi yang akan control setiap keputusan.',
  },
  {
    id: 5,
    icon: '🎲',
    title: 'Trade Macam Berjudi Tanpa Arah',
    desc: 'Entry dan exit bergantung pada tekaan dan hunch semata-mata. Tanpa awareness tentang market structure sebenar, trading tidak ubah seperti berjudi di casino.',
  },
  {
    id: 6,
    icon: '🤦',
    title: 'Tiada Sistem Yang Konsisten',
    desc: 'Setiap hari cari strategy baru. Follow YouTube trader A, pastu trader B. Semua bagi pendapat berbeza. Akhirnya confuse dan masih dalam losses yang sama tanpa hala tuju.',
  },
]

export default function Problem() {
  return (
    <section className="problem-section" id="masalah">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">⚠️ REALITI PAHIT</div>
          <h2>
            Adakah Anda Mengalami<br />
            MASALAH Berikut?
          </h2>
          <p>
            Ini realiti yang dihadapi oleh kebanyakan traders Malaysia — mungkin
            termasuk anda sendiri tanpa anda sedar.
          </p>
        </div>

        <div className="problems-grid">
          {problems.map((p) => (
            <div key={p.id} className="problem-card">
              <div className="problem-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="problem-conclusion">
          <p>
            Anda tidak perlu terus struggle lagi. Ada{' '}
            <strong>strategy & formula yang terbukti berkesan</strong> mampu
            selesaikan masalah anda — dan ia bukan datang dari teknikal analysis
            yang anda dah tahu.
          </p>
          <p className="problem-teaser">
            Ia datang dari sesuatu yang lebih dalam. Sesuatu yang{' '}
            <strong>Bank-Dunia pun dah guna sejak bertahun lagi.</strong>
          </p>
          <button
            className="btn btn-primary"
            onClick={() =>
              document.getElementById('sistem')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            DEDAHKAN RAHSIA INI →
          </button>
        </div>
      </div>
    </section>
  )
}
