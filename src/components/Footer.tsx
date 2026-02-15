import React from 'react'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>HH Drone Services</h4>
            <p>Professional aerial photography and videography for real estate in Hilton Head Island.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="LinkedIn">in</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Aerial Photography</a></li>
              <li><a href="#services">Video Production</a></li>
              <li><a href="#services">Property Tours</a></li>
              <li><a href="#services">Inspections</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#inquiry">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <p>📍 Hilton Head Island, SC</p>
            <p>📧 info@hhdrone.com</p>
            <p>📱 (843) 555-0123</p>
            <p>🕐 Available 7 days a week</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} HH Drone Services. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
