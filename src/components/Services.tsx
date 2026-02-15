import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Services.css'

export default function Services() {
  const { ref, isVisible } = useScrollAnimation()

  const services = [
    {
      icon: '📸',
      title: 'Aerial Photography',
      description: 'Stunning high-resolution aerial photos showcasing properties from unique angles and perspectives.',
      features: ['4K Resolution', 'Professional Editing', 'Multiple Angles', 'Drone Footage']
    },
    {
      icon: '🎬',
      title: 'Video Production',
      description: 'Cinematic drone videos with smooth transitions and professional color grading.',
      features: ['4K/8K Video', 'Cinematic Transitions', 'Professional Audio', 'Custom Music']
    },
    {
      icon: '🏘️',
      title: 'Property Tours',
      description: 'Dynamic aerial property tours that showcase the entire property and surrounding area.',
      features: ['360° Coverage', 'Smooth Movements', 'Highlight Features', 'Quick Turnaround']
    },
    {
      icon: '🔍',
      title: 'Inspections',
      description: 'Detailed aerial inspections for roofs, structures, and land assessment.',
      features: ['High Detail', 'Safety Focused', 'Report Ready', 'Expert Analysis']
    },
    {
      icon: '🌅',
      title: 'Sunset Sessions',
      description: 'Golden hour and sunset photography for the most dramatic property presentations.',
      features: ['Perfect Lighting', 'Dramatic Skies', 'Premium Quality', 'Limited Availability']
    },
    {
      icon: '📊',
      title: 'Virtual Staging',
      description: 'Digital enhancement and staging to highlight property potential.',
      features: ['Enhancement', 'Staging', 'Color Correction', 'Fast Delivery']
    }
  ]

  return (
    <section id="services" className="services" ref={ref}>
      <div className="services-container">
        <div className={`section-header ${isVisible ? 'fade-in-up' : ''}`}>
          <h2>Our Services</h2>
          <p>Comprehensive aerial solutions for real estate professionals</p>
        </div>

        <div className={`services-grid ${isVisible ? 'fade-in' : ''}`}>
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="service-card"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, fidx) => (
                  <li key={fidx}>{feature}</li>
                ))}
              </ul>
              <button className="service-btn">Learn More →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
