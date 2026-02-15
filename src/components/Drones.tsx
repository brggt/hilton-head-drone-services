import React, { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Drones.css'

export default function Drones() {
  const { ref, isVisible } = useScrollAnimation()
  const [selectedDrone, setSelectedDrone] = useState<'flip' | 'mini3'>('flip')

  const droneSpecs = {
    flip: {
      name: 'DJI Air 3S',
      subtitle: 'Premium Aerial Platform',
      specs: [
        { label: 'Max Flight Time', value: '46 min' },
        { label: 'Max Speed', value: '75.6 km/h' },
        { label: 'Camera', value: '48MP + 12MP' },
        { label: 'Range', value: '15 km' },
        { label: 'Wind Resistance', value: '12 m/s' },
        { label: 'Resolution', value: '4K/8K Video' }
      ],
      features: [
        'Dual camera system for versatile shots',
        'Advanced obstacle avoidance',
        'Professional color grading',
        'Extended flight time for longer shoots',
        'Superior low-light performance'
      ]
    },
    mini3: {
      name: 'DJI Mini 3',
      subtitle: 'Compact & Powerful',
      specs: [
        { label: 'Max Flight Time', value: '38 min' },
        { label: 'Max Speed', value: '57.6 km/h' },
        { label: 'Camera', value: '12MP' },
        { label: 'Range', value: '10 km' },
        { label: 'Wind Resistance', value: '10.5 m/s' },
        { label: 'Resolution', value: '4K Video' }
      ],
      features: [
        'Ultra-portable and lightweight',
        'Perfect for tight spaces and details',
        'Exceptional stability',
        'Great for quick property tours',
        'Ideal for aerial inspections'
      ]
    }
  }

  const current = droneSpecs[selectedDrone]

  return (
    <section id="drones" className="drones" ref={ref}>
      <div className="drones-container">
        <div className={`section-header ${isVisible ? 'fade-in-up' : ''}`}>
          <h2>Our Equipment</h2>
          <p>Professional-grade drones for stunning aerial content</p>
        </div>

        <div className="drone-selector">
          <button
            className={`drone-btn ${selectedDrone === 'flip' ? 'active' : ''}`}
            onClick={() => setSelectedDrone('flip')}
          >
            <span className="drone-icon">✈️</span>
            <span>DJI Air 3S</span>
          </button>
          <button
            className={`drone-btn ${selectedDrone === 'mini3' ? 'active' : ''}`}
            onClick={() => setSelectedDrone('mini3')}
          >
            <span className="drone-icon">🚁</span>
            <span>DJI Mini 3</span>
          </button>
        </div>

        <div className={`drone-showcase ${isVisible ? 'scale-in' : ''}`}>
          <div className="drone-visual">
            <div className="drone-image">
              {selectedDrone === 'flip' ? '✈️' : '🚁'}
            </div>
          </div>

          <div className="drone-details">
            <h3>{current.name}</h3>
            <p className="drone-subtitle">{current.subtitle}</p>

            <div className="specs-grid">
              {current.specs.map((spec, idx) => (
                <div key={idx} className="spec-item">
                  <span className="spec-label">{spec.label}</span>
                  <span className="spec-value">{spec.value}</span>
                </div>
              ))}
            </div>

            <div className="features">
              <h4>Key Features</h4>
              <ul>
                {current.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="drone-comparison">
          <h3>Why Both Drones?</h3>
          <p>
            We use both the DJI Air 3S and Mini 3 to provide comprehensive aerial coverage. 
            The Air 3S captures stunning wide shots and detailed telephoto perspectives, while 
            the Mini 3 excels in tight spaces and provides quick, agile movements for dynamic 
            property tours. This dual-drone approach ensures we deliver the perfect perspective 
            for every property.
          </p>
        </div>
      </div>
    </section>
  )
}
