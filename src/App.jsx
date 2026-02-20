import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Proof from './components/Proof'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Services from './components/Services'
import About from './components/About'
import ExclusiveOffer from './components/ExclusiveOffer'
import Objections from './components/Objections'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <Proof />
      <Problem />
      <Solution />
      <Services />
      <About />
      <ExclusiveOffer />
      <Objections />
      <Footer />
    </div>
  )
}

export default App
