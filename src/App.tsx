import React from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Drones from './components/Drones'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Pricing from './components/Pricing'
import InquiryForm from './components/InquiryForm'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Drones />
      <Services />
      <Portfolio />
      <Pricing />
      <InquiryForm />
      <About />
      <Footer />
    </div>
  )
}

export default App
