import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Proof from './components/Proof'
import Services from './components/Services'
import Objections from './components/Objections'
import ExclusiveOffer from './components/ExclusiveOffer'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <Problem />
      <Solution />
      <Proof />
      <Services />
      <Objections />
      <ExclusiveOffer />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}

export default App