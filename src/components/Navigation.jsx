import './Navigation.css'

export default function Navigation() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'solution', label: 'Sistem' },
    { id: 'proof', label: 'Hasil' },
    { id: 'pricing', label: 'Harga' },
    { id: 'services', label: 'Kandungan' }
  ]

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">🌙 Qolbies Trading</span>
        </div>
        <div className="nav-items">
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
          className="btn btn-primary"
          onClick={() => scrollToSection('pricing')}
        >
          APA ITU QOLBIES
        </button>
      </div>
    </nav>
  )
}