import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Pricing.css'

export default function Pricing() {
  const { ref, isVisible } = useScrollAnimation()

  const plans = [
    {
      name: 'Starter',
      price: '$299',
      description: 'Perfect for quick property showcases',
      features: [
        '30 min aerial shoot',
        '50+ high-res photos',
        '2K video (5 min)',
        'Basic editing',
        '24-hour delivery',
        'Drone only'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$599',
      description: 'Most popular for real estate agents',
      features: [
        '1 hour aerial shoot',
        '100+ high-res photos',
        '4K video (10 min)',
        'Professional editing',
        'Color grading',
        'Dual drone coverage',
        '24-hour delivery',
        'Free revisions'
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: '$999',
      description: 'Complete aerial coverage',
      features: [
        '2 hour aerial shoot',
        '200+ high-res photos',
        '4K video (20 min)',
        'Cinematic editing',
        'Advanced color grading',
        'Dual drone coverage',
        'Sunset/sunrise session',
        'Virtual staging',
        '12-hour delivery',
        'Unlimited revisions'
      ],
      popular: false
    }
  ]

  return (
    <section id="pricing" className="pricing" ref={ref}>
      <div className="pricing-container">
        <div className={`section-header ${isVisible ? 'fade-in-up' : ''}`}>
          <h2>Simple, Transparent Pricing</h2>
          <p>Choose the perfect package for your real estate needs</p>
        </div>

        <div className={`pricing-grid ${isVisible ? 'fade-in' : ''}`}>
          {plans.map((plan, idx) => (
            <div 
              key={idx}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              
              <h3>{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>
              
              <div className="price">
                <span className="amount">{plan.price}</span>
                <span className="period">/project</span>
              </div>

              <button className={`plan-btn ${plan.popular ? 'primary' : 'secondary'}`}>
                Get Started
              </button>

              <ul className="plan-features">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx}>
                    <span className="check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={`pricing-faq ${isVisible ? 'fade-in-up' : ''}`}>
          <h3>Frequently Asked Questions</h3>
          <div className="faq-items">
            <div className="faq-item">
              <h4>Do you offer custom packages?</h4>
              <p>Yes! We can customize any package to meet your specific needs. Contact us for a quote.</p>
            </div>
            <div className="faq-item">
              <h4>What's your service area?</h4>
              <p>We serve Hilton Head Island and surrounding areas. Travel fees may apply outside the main area.</p>
            </div>
            <div className="faq-item">
              <h4>How quickly can you deliver?</h4>
              <p>Standard delivery is 24 hours. Rush delivery (12 hours) is available for an additional fee.</p>
            </div>
            <div className="faq-item">
              <h4>Do you provide raw footage?</h4>
              <p>Yes, raw footage is available upon request for an additional fee.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
