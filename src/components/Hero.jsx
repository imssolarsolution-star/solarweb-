import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import './Hero.css';
import heroBg from '../assets/hero_solar_bg_1780934818331.png';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <img src={heroBg} alt="Premium Solar Installation" className="hero-img" />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container hero-content">
        <div className="hero-text animate-fade-in">
          <div className="badge">Powering Tamil Nadu</div>
          <h1>
            World-Class Solar Energy for a <span className="highlight">Brighter Future</span>
          </h1>
          <p>
            Join the energy revolution with ims solar solutions. We deliver premium residential, commercial, and industrial solar systems designed for maximum savings and durability.
          </p>
          
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary btn-lg">
              Get Free Consultation
              <ArrowRight size={20} />
            </a>
            <a href="https://wa.me/917418105859" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg">
              <MessageCircle size={20} />
              WhatsApp Now
            </a>
          </div>
          
          <div className="hero-stats">
            <div className="stat">
              <h3>500+</h3>
              <span>Projects Completed</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <h3>25 Yrs</h3>
              <span>Performance Warranty</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <h3>100%</h3>
              <span>Customer Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
