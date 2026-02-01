import './Problem.css'

const problems = [
  {
    id: 1,
    title: 'Cost per lead naik turun',
    description: 'One month affordable, next month too expensive. No consistency.'
  },
  {
    id: 2,
    title: 'Ads work one month, drop the next',
    description: 'Things are good, then suddenly everything stops working tanpa reason.'
  },
  {
    id: 3,
    title: 'Keep changing creatives, but tak sure which one works',
    description: 'Test this, test that. Still unsure which poster or video actually converts.'
  },
  {
    id: 4,
    title: 'Reports ada, but still unsure what to do next',
    description: 'Numbers exist lah, but what do they mean? What should I change?'
  },
  {
    id: 5,
    title: 'Every adjustment feels macam try luck',
    description: 'No system, no logic. Just guessing, hoping something works.'
  },
  {
    id: 6,
    title: 'Leads come in, but ROI unclear',
    description: 'Unsure if ads are actually profitable or just bleeding money slowly.'
  }
]

export default function Problem() {
  return (
    <section className="problem-section">
      <div className="container">
        <div className="section-header">
          <h2>RUNNING ADS… BUT STILL BLUR?</h2>
          <p>You're spending money. Leads do come in. But here's the problem:</p>
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
          <p>You're not doing it wrong. This is what happens when Meta Ads are run <strong>without a proper optimisation system.</strong></p>
        </div>
      </div>
    </section>
  )
}
