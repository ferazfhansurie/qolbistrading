import { useState } from 'react'
import './Objections.css'

export default function Objections() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      id: 1,
      question: 'Macam mana moonphase data boleh prevent capital burst?',
      answer: 'Moonphase system teach kau predict market volatility periods using past lunar data correlation. Tau bila market expansive, bila consolidation. Filter over-trading traps. Bukan magic — it\s awareness of environmental factors yang technical alone tak detect. Dengan lunar timing, kau trade dengan arah and avoid blind spots yang cause burst losses.'
    },
    {
      id: 2,
      question: 'Saya dah ada technical knowledge, tapi still loss. Ini berbeza ke?',
      answer: 'Technical bagus untuk what is happening. Moonphase data explain why it happens. Presidential events, mass psychology shifts, lunar impacts — semua ni create pattern repeats dalam cycles. Ebook teach environmental awareness yang unlock steady equity curve even dengan full margin styles. Technical + moonphase = stronger direction system.'
    },
    {
      id: 3,
      question: 'Gimme mana control trading psychology dengan system ni?',
      answer: 'System ajar kau reset mindset. Small step guiding untuk win back confidence. Aware bila kau trade with stress, sadness, atau too happy — semua affect decisions. Moonphase activity help reset mood. Real account strategies untuk regain equity steadily instead of burst attempts. Discipline comes from understand market behavior, not guessing.'
    },
    {
      id: 4,
      question: 'Saya risau overtrade and full margin burst. Safe ke system ni?',
      answer: 'System specifically address overtrade awareness. Check moonphase before trade untuk tau bila market traps. Start small capital first, feel trade warmth, have backup capital. Lunar data + technical filtering = confident TP points. Works even high risk styles sebab kau aware of ranges and volatility patterns ahead.'
    },
    {
      id: 5,
      question: 'Bukan skim cepat kaya kan? What\s realistic expectation?',
      answer: 'Bukan get-rich-quick. Kita tak janji perfect win streaks or meteoric profits. Real expectation: steady equity curve growth, better direction awareness, fewer blind spot losses. Moonphase data help predict ranges — bukan guarantee wins. Kau still need discipline, capital management, proper execution. System gives confident framework, bukan magic formula.'
    },
    {
      id: 6,
      question: 'Berapa lama untuk master system dan nampak improvement?',
      answer: 'E-course format buat kau understand basics dalam 1-2 weeks. Apply on small capital first month. Traders report aware market direction better within 3-4 weeks. Real steady profit? 2-3 bulan dengan consistent application. Remember: secure reserves capital first (money-lock suggestion), avoid double directions, trade relax mood. Patience beats burst attempts.'
    }
  ]

  return (
    <section className="objections-section" id="faq">
      <div className="container">
        <div className="section-header">
          <h2>Soalan Lazim</h2>
          <p>Semua yang perlu kau ketahu sebelum beli ebook</p>
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
          <p>Still have questions? Tanya kami directly.</p>
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
