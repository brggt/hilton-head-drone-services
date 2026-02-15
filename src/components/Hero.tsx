import React, { useState, useEffect } from 'react'
import './Hero.css'

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero">
      <div 
        className="hero-background"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div className="gradient-bg"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title fade-in-up">
          Aerial Excellence for Real Estate
        </h1>
        <p className="hero-subtitle fade-in-up" style={{ animationDelay: '0.2s' }}>
          Professional drone photography and videography in Hilton Head Island
        </p>
        
        <div className="hero-cta fade-in-up" style={{ animationDelay: '0.4s' }}>
          <button 
            className="btn btn-primary"
            onClick={() => scrollToSection('inquiry')}
          >
            Get Your Free Quote
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => scrollToSection('drones')}
          >
            Learn More
          </button>
        </div>

        <div className="hero-stats fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="stat">
            <h3>500+</h3>
            <p>Properties Captured</p>
          </div>
          <div className="stat">
            <h3>100%</h3>
            <p>Client Satisfaction</p>
          </div>
          <div className="stat">
            <h3>24h</h3>
            <p>Quick Turnaround</p>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow">↓</div>
      </div>
    </section>
  )
}
