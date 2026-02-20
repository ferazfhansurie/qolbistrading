import './Solution.css'

export default function Solution() {
  const scrollToPricing = () => {
    document.getElementById('produk')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="solution-section" id="sistem">
      <div className="container">

        {/* Reveal hook */}
        <div className="solution-reveal">
          <div className="section-badge">🔓 RAHSIA YANG TERSEMBUNYI</div>
          <h2>
            Smart Money Tidak Trade<br />
            Secara <span className="highlight-gold">Random</span> —<br />
            Mereka Tunggu Struktur Masa Moonphase.
          </h2>
          <p className="reveal-body">
            Ya betul, itulah apa yang anda baca. Semua traders yang masih struggle
            tidak tahu <strong>realiti dan kebenaran pahit</strong> di sebalik
            Real-Market Volatility yang sebenar.
          </p>
          <p className="reveal-body">
            Ketika News Presiden U.S meletup, 75% Trader akan Loss Besar. Tapi
            Trader-Trader Billionaires, <strong>"Jerung"</strong> yang mengawal
            liquidity markets secara senyap dan halimunan — mereka tidak panik.
            Mereka dah tunggu masa tu.
          </p>
          <p className="reveal-body">
            Dan semua ini disokong sendiri oleh{' '}
            <strong>Institusi Bank-Traders terbesar di Dunia</strong> iaitu
            JP Morgan — dan oleh Foundernya sendiri.
          </p>
        </div>

        {/* JP Morgan image */}
        <div className="jpmorgan-block">
          <div className="jpmorgan-frame">
            <img
              src="/images/42c17b27-7dfb-487b-aba2-2c6a8ba540dd.jpeg"
              alt="JP Morgan Moonphase Trading Evidence"
              className="jpmorgan-img"
            />
            <div className="jpmorgan-caption">
              <span className="caption-tag">📌 BUKTI SAHIH</span>
              <p>
                JP Morgan — Ranking No.1 Dunia dalam industri bank-traders,
                dengan valuasi <strong>4 Trillion USD</strong> — mengakui
                korelasi antara lunar cycle dan market behaviour.
              </p>
            </div>
          </div>
        </div>

        {/* Post-image copy */}
        <div className="solution-copy">
          <p className="copy-big">
            Dan sehingga kini, JP Morgan Institusi masih memegang{' '}
            <strong>Ranking No.1 Dunia</strong> dalam industri bank-traders
            dunia, dan sehingga sekarang tercatat{' '}
            <strong>4 Trillion USD valuasi.</strong>
          </p>
          <p className="copy-challenge">
            Yeah. Betul. Itu yang korang heboh-hebohkan pasal teknikal?{' '}
            <em>Breakout</em> apa semua tu? Dah perit trade teknikal
            bertahun-tahun tapi masih loss pada hujungnya?
          </p>
          <p>
            Tapi agak-agak… Bank-Dunia ni nak share ke rahsia mereka kepada
            Traders awam? <strong>Semestinya Tidak.</strong>
          </p>
          <p>
            Sebab itulah — lahirnya <strong>Qolbies Trading</strong> dari jiwa
            Traders Melayu sendiri. Sejak 2023, tercetusnya kajian yang mendalam
            tentang kaitan antara Astrologi dan Markets Correlations, dan
            akhirnya lahirlah…
          </p>
        </div>

        {/* Big system reveal */}
        <div className="moonphase-announce">
          <div className="announce-slash">⚡</div>
          <p className="announce-pre">TEKNIK SULUNG YANG LENGKAP:</p>
          <h2 className="announce-title">MOONPHASE TRADE SYSTEM</h2>
          <p className="announce-desc">
            Ya betul, apa yang anda baca dan nampak —{' '}
            <strong>Teknik Bulan sahaja</strong> mampu kawal markets paling liar
            No.1 Dunia, iaitu{' '}
            <span className="gold-text">Gold. XAU Per USD.</span>
          </p>
          <button className="btn btn-primary btn-large" onClick={scrollToPricing}>
            🌙 PELAJARI MOONPHASE SYSTEM SEKARANG
          </button>
        </div>

        {/* 4 lunar phases */}
        <div className="lunar-phases">
          <h3>4 Fasa Bulan Yang Mengawal Market Movement</h3>
          <div className="phases-grid">
            <div className="phase-card">
              <span className="phase-moon">🌑</span>
              <h4>New Moon</h4>
              <p className="phase-tag neutral">EXPANSION ENERGY</p>
              <p>Fasa consolidation dan setup. Masa untuk prepare, bukan over-trade.</p>
            </div>
            <div className="phase-card">
              <span className="phase-moon">🌒</span>
              <h4>Waxing Crescent</h4>
              <p className="phase-tag bullish">BULLISH MOMENTUM</p>
              <p>Market mula trending up. Momentum membina. Terbaik untuk long entries.</p>
            </div>
            <div className="phase-card featured">
              <span className="phase-moon">🌕</span>
              <h4>Full Moon</h4>
              <p className="phase-tag danger">PEAK VOLATILITY</p>
              <p>Volatility maksimum. Institutional activity paling tinggi. Kritikal.</p>
            </div>
            <div className="phase-card">
              <span className="phase-moon">🌘</span>
              <h4>Waning Crescent</h4>
              <p className="phase-tag bearish">BEARISH DECLINE</p>
              <p>Momentum melemah. Profit-taking phase. Berhati-hati dengan traps.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
