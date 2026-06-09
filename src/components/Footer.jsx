import React from 'react';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-col brand-col">
          <a href="#home" className="footer-logo">
            <img src="/logo.png" alt="ims solar solutions" className="brand-logo" />
            <div className="logo-text">
              <span className="logo-name">ims</span>
              <span className="logo-sub">solar solutions</span>
            </div>
          </a>
          <p className="footer-desc">
            Tamil Nadu's premier solar energy provider. Empowering homes and businesses with clean, sustainable, and cost-effective solar power systems.
          </p>
        </div>

        <div className="footer-col links-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about"><ArrowRight size={14}/> About Us</a></li>
            <li><a href="#services"><ArrowRight size={14}/> Our Services</a></li>
            <li><a href="#projects"><ArrowRight size={14}/> Project Gallery</a></li>
            <li><a href="#calculator"><ArrowRight size={14}/> Solar Calculator</a></li>
            <li><a href="#contact"><ArrowRight size={14}/> Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-col contact-col">
          <h3>Contact Info</h3>
          <ul>
            <li>
              <MapPin size={20} className="icon" />
              <span>
                HEAD OFFICE APA COMPLEX,<br />
                OPPOSITE CENTRAL BANK,<br />
                MANIKANDAM,<br />
                TRICHY - 12
              </span>
            </li>
            <li>
              <Phone size={20} className="icon" />
              <span>
                <a href="tel:7418105859">7418105859</a><br />
                <a href="tel:8300799399">8300799399</a> (WhatsApp)
              </span>
            </li>
            <li>
              <Mail size={20} className="icon" />
              <a href="mailto:imssolarsolutions@gmail.com">imssolarsolutions@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} ims solar solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
