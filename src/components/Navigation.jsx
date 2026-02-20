import { useState } from 'react'
import './Navigation.css'

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'sistem', label: 'Sistem' },
    { id: 'testimoni', label: 'Testimoni' },
    { id: 'produk', label: 'Produk' },
    { id: 'faq', label: 'FAQ' },
  ]

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">🌙 Qolbies Trading</span>
        </div>

        <div className={`nav-items ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className="nav-item"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          className="btn btn-primary nav-cta"
          onClick={() => scrollToSection('produk')}
        >
          DAFTAR SEKARANG
        </button>

        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  )
}
