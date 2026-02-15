import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './About.css'

export default function About() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="about" className="about" ref={ref}>
      <div className="about-container">
        <div className={`about-content ${isVisible ? 'slide-in-left' : ''}`}>
          <h2>About HH Drone Services</h2>
          <p>
            Based in Hilton Head Island, we specialize in professional aerial photography and videography 
            for real estate professionals. With years of experience and state-of-the-art equipment, we deliver 
            stunning visual content that helps properties sell faster and at better prices.
          </p>
          
          <div className="about-stats">
            <div className="stat">
              <h3>500+</h3>
              <p>Properties Captured</p>
            </div>
            <div className="stat">
              <h3>98%</h3>
              <p>Client Satisfaction</p>
            </div>
            <div className="stat">
              <h3>24h</h3>
              <p>Avg Delivery Time</p>
            </div>
          </div>

          <div className="about-features">
            <div className="feature">
              <span className="feature-icon">🎯</span>
              <h4>Professional Grade Equipment</h4>
              <p>DJI Air 3S and Mini 3 drones with latest technology</p>
            </div>
            <div className="feature">
              <span className="feature-icon">🎨</span>
              <h4>Expert Editing</h4>
              <p>Professional post-production and color grading</p>
            </div>
            <div className="feature">
              <span className="feature-icon">⚡</span>
              <h4>Quick Turnaround</h4>
              <p>Fast delivery without compromising quality</p>
            </div>
            <div className="feature">
              <span className="feature-icon">🏆</span>
              <h4>Award Winning</h4>
              <p>Recognized for excellence in aerial photography</p>
            </div>
          </div>
        </div>

        <div className={`about-visual ${isVisible ? 'slide-in-right' : ''}`}>
          <div className="visual-element">
            <div className="drone-icon">🚁</div>
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>
          </div>
        </div>
      </div>

      <div className="service-area">
        <h3>Service Area</h3>
        <p>Currently serving Hilton Head Island and surrounding areas</p>
        <div className="area-map">📍 Hilton Head Island, SC</div>
      </div>
    </section>
  )
}
