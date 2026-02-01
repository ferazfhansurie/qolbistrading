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
    { id: 'services', label: 'Services' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <img src="/images/Adetic.png" alt="Adletic Agency" className="logo-image" />
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
          onClick={() => scrollToSection('contact')}
        >
          Get Started
        </button>
      </div>
    </nav>
  )
}