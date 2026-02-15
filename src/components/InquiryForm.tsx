import React, { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './InquiryForm.css'

export default function InquiryForm() {
  const { ref, isVisible } = useScrollAnimation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyAddress: '',
    serviceType: 'photography',
    budget: 'under-500',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        setSubmitted(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          propertyAddress: '',
          serviceType: 'photography',
          budget: 'under-500',
          message: ''
        })
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="inquiry" className="inquiry-form" ref={ref}>
      <div className="form-container">
        <div className={`section-header ${isVisible ? 'fade-in-up' : ''}`}>
          <h2>Get Your Free Quote</h2>
          <p>Tell us about your property and we'll provide a personalized quote within 24 hours</p>
        </div>

        <div className={`form-wrapper ${isVisible ? 'scale-in' : ''}`}>
          {submitted && (
            <div className="success-message">
              <span>✓</span>
              <p>Thank you! We've received your inquiry and will contact you soon.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="inquiry-form-element">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Smith"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                />
              </div>
              <div className="form-group">
                <label htmlFor="propertyAddress">Property Address *</label>
                <input
                  type="text"
                  id="propertyAddress"
                  name="propertyAddress"
                  value={formData.propertyAddress}
                  onChange={handleChange}
                  required
                  placeholder="123 Main St, Hilton Head, SC"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="serviceType">Service Type *</label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                >
                  <option value="photography">Photography Only</option>
                  <option value="videography">Videography Only</option>
                  <option value="both">Photography & Videography</option>
                  <option value="inspection">Property Inspection</option>
                  <option value="tour">Virtual Tour</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="budget">Budget *</label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="under-500">Under $500</option>
                  <option value="500-1000">$500 - $1,000</option>
                  <option value="1000-2000">$1,000 - $2,000</option>
                  <option value="over-2000">Over $2,000</option>
                </select>
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="message">Additional Details</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your property, specific needs, or any special requests..."
                rows={5}
              />
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Inquiry'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
