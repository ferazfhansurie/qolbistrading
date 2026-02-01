import './Solution.css'

export default function Solution() {
  const solutions = [
    {
      id: 1,
      letter: 'A',
      title: 'AUDIENCE CLARITY',
      description: 'Target people who are more likely to convert, not just more people.'
    },
    {
      id: 2,
      letter: 'I',
      title: 'INTENT-BASED MESSAGING',
      description: 'Ads match what the audience is actually thinking, not hard selling terus.'
    },
    {
      id: 3,
      letter: 'D',
      title: 'DATA-DRIVEN CREATIVES',
      description: 'Every poster and video is tested with purpose, not "try try".'
    },
    {
      id: 4,
      letter: 'O',
      title: 'ONGOING OPTIMISATION',
      description: 'Weekly improvements based on performance, not vibes.'
    },
    {
      id: 5,
      letter: 'C',
      title: 'CONVERSION RETARGETING',
      description: 'People who interact don\'t get wasted. We bring them back properly.'
    },
    {
      id: 6,
      letter: 'A',
      title: 'ANALYTICS & REPORTING',
      description: 'Daily KPI reports. You always know what\'s going on.'
    },
    {
      id: 7,
      letter: 'C',
      title: 'CONTROLLED SCALING',
      description: 'Scale what works, slowly and safely. No gambling budget.'
    }
  ]

  return (
    <section className="solution-section" id="solution">
      <div className="container">
        <div className="section-header">
          <h2>THE AIDOCAC FRAMEWORK</h2>
          <p>How we run Meta Ads the Adletic way</p>
        </div>
        <div className="solutions-grid">
          {solutions.map((solution) => (
            <div key={solution.id} className="solution-card">
              <div className="solution-letter">{solution.letter}</div>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
            </div>
          ))}
        </div>
        <div className="framework-note">
          <p><strong>Simple. Logical. Repeatable.</strong></p>
        </div>
      </div>
    </section>
  )
}

