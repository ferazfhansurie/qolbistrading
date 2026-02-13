import './Problem.css'

const problems = [
  {
    id: 1,
    title: 'Trade loss dengan no guiding element',
    description: 'Technical analysis ada, tapi masih loss control. Capital burst sebab takde proper direction system.'
  },
  {
    id: 2,
    title: 'Over-trade sebab market traps & emotional decisions',
    description: 'Full margin tanpa aware market blind spots. Weeks of wins hilang dalam few burst trades.'
  },
  {
    id: 3,
    title: 'Equity curves tak steady, capital habis tenggelam',
    description: 'Patterns ada, technical ada, tapi masih dalam loops of losing cycles. Takde external factor awareness.'
  },
  {
    id: 4,
    title: 'Trading psychology hancur, risau capital burst',
    description: 'Stress, sad, happy — semua affect trade. Market explosive movements buat traders panic dan loss discipline.'
  },
]

export default function Problem() {
  return (
    <section className="problem-section">
      <div className="container">
        <div className="section-header">
          <h2>Masalah Bukan Technical — Masalah Blind Spots</h2>
          <p>Real pain points dari traders yang dah try everything tapi masih loss</p>
        </div>
        <div className="problems-grid">
          {problems.map((problem) => (
            <div key={problem.id} className="problem-card">
              <h3>{problem.title}</h3>
              <p>{problem.description}</p>
            </div>
          ))}
        </div>
        <div className="problem-cta">
          <p>Even dengan banyak technical knowledge, traders still loss sebab <strong>tak aware environmental factors yang affect market behavior.</strong> Presidential events, lunar cycles, mass psychology — semua ni influence market patterns yang technical analysis alone tak boleh detect.</p>
        </div>
      </div>
    </section>
  )
}
