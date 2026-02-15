import React, { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Portfolio.css'

export default function Portfolio() {
  const { ref, isVisible } = useScrollAnimation()
  const [selectedCategory, setSelectedCategory] = useState('all')

  const portfolioItems = [
    { id: 1, category: 'photography', title: 'Beachfront Estate', image: '🏖️', price: '$2.5M' },
    { id: 2, category: 'videography', title: 'Luxury Villa Tour', image: '🏰', price: '$3.8M' },
    { id: 3, category: 'photography', title: 'Golf Course Property', image: '⛳', price: '$1.9M' },
    { id: 4, category: 'videography', title: 'Waterfront Mansion', image: '🌊', price: '$5.2M' },
    { id: 5, category: 'photography', title: 'Modern Home', image: '🏡', price: '$1.2M' },
    { id: 6, category: 'videography', title: 'Resort Property', image: '🏨', price: '$4.5M' },
    { id: 7, category: 'photography', title: 'Lakefront Cottage', image: '🏕️', price: '$890K' },
    { id: 8, category: 'videography', title: 'Gated Community', image: '🏘️', price: '$2.1M' },
  ]

  const filtered = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory)

  return (
    <section id="portfolio" className="portfolio" ref={ref}>
      <div className="portfolio-container">
        <div className={`section-header ${isVisible ? 'fade-in-up' : ''}`}>
          <h2>Portfolio</h2>
          <p>Showcase of our recent aerial photography and videography projects</p>
        </div>

        <div className={`filter-buttons ${isVisible ? 'fade-in' : ''}`}>
          <button
            className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            All Projects
          </button>
          <button
            className={`filter-btn ${selectedCategory === 'photography' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('photography')}
          >
            Photography
          </button>
          <button
            className={`filter-btn ${selectedCategory === 'videography' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('videography')}
          >
            Videography
          </button>
        </div>

        <div className={`portfolio-grid ${isVisible ? 'fade-in' : ''}`}>
          {filtered.map((item, idx) => (
            <div 
              key={item.id} 
              className="portfolio-item"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="portfolio-image">
                <span>{item.image}</span>
              </div>
              <div className="portfolio-info">
                <h3>{item.title}</h3>
                <p className="portfolio-price">{item.price}</p>
                <button className="view-btn">View Project →</button>
              </div>
            </div>
          ))}
        </div>

        <div className={`portfolio-cta ${isVisible ? 'fade-in-up' : ''}`}>
          <h3>Ready to showcase your property?</h3>
          <button className="btn btn-primary">Get Started Today</button>
        </div>
      </div>
    </section>
  )
}
