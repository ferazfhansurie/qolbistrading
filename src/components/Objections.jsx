import { useState } from 'react'
import './Objections.css'

export default function Objections() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      id: 1,
      question: 'How is this different from other agencies?',
      answer: 'Most agencies use one-size-fits-all strategies. We start with YOUR specific business goals, audience, and challenges. We\'re not trying to be the cheapest—we\'re trying to be the most profitable for you. You see daily reports, speak with a real human, and get strategy sessions weekly.'
    },
    {
      id: 2,
      question: 'What if my industry is too niche?',
      answer: 'We\'ve successfully managed campaigns across dozens of industries—from e-commerce to SaaS, services to physical products. Meta\'s targeting is sophisticated. If your customers are on Meta, we can find them. We\'ll spend the first week understanding your niche and testing different approaches.'
    },
    {
      id: 3,
      question: 'How long until I see results?',
      answer: 'You\'ll see the first metrics within 2-3 weeks. Real conversions and scaling? Usually 6-8 weeks. We\'re not interested in vanity metrics. We track ROAS, leads, and actual business impact. Expect daily monitoring and weekly optimizations.'
    },
    {
      id: 4,
      question: 'What\'s included in the packages?',
      answer: 'Every package includes: campaign strategy & setup, daily KPI monitoring, ad creative design (posters and/or videos), copywriting, audience targeting, retargeting, A/B testing, and weekly strategy calls. Our Video Package includes professional talent in your ads.'
    },
    {
      id: 5,
      question: 'Can I cancel anytime?',
      answer: 'Yes. No long-term contracts. Month-to-month basis. That said, most clients stay with us because they see results. If we\'re not delivering, you should leave. We\'d rather have you stay because you\'re seeing ROI.'
    },
    {
      id: 6,
      question: 'What if the ads don\'t work?',
      answer: 'First 1 month: we optimize for free until campaigns are profitable. If it\'s just not working due to market conditions or your product fit, we\'ll be honest about it. But 98% of the time, the problem is strategy or creative—both things we fix.'
    }
  ]

  return (
    <section className="objections-section" id="faq">
      <div className="container">
        <div className="section-header">
          <h2>Common Questions</h2>
          <p>Everything you need to know before getting started</p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              key={faq.id} 
              className="faq-item"
            >
              <button
                className={`faq-question ${openIndex === index ? 'open' : ''}`}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
                {faq.question}
              </button>
              
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <p>Still have questions? Let's talk.</p>
          <button 
            className="btn btn-secondary"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Us →
          </button>
        </div>
      </div>
    </section>
  )
}
