import React from 'react';
import { CheckCircle } from 'lucide-react';
import './AboutUs.css';
import resSolar from '../assets/residential_solar_1780934831950.png';

const AboutUs = () => {
  return (
    <section id="about" className="section bg-surface">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrapper reveal">
            <img src={resSolar} alt="Residential Solar Installation" className="about-image" />
            <div className="experience-badge glass">
              <span className="years">10+</span>
              <span className="text">Years of<br/>Experience</span>
            </div>
          </div>
          
          <div className="about-content reveal">
            <div className="section-header">
              <span className="subtitle">About ims solar solutions</span>
              <h2>Pioneering the Transition to <span className="highlight">Sustainable Energy</span></h2>
            </div>
            
            <p className="lead">
              We are a premium solar energy provider based in Trichy, Tamil Nadu, dedicated to making high-quality solar power accessible to residential, commercial, and industrial clients.
            </p>
            
            <p>
              Our mission is to deliver innovative, efficient, and cost-effective solar solutions that reduce energy bills and carbon footprints. With a strong focus on engineering excellence and customer satisfaction, we handle everything from design to installation and maintenance.
            </p>
            
            <ul className="features-list">
              <li>
                <CheckCircle className="icon" />
                <span>Expert Engineering & Custom Design</span>
              </li>
              <li>
                <CheckCircle className="icon" />
                <span>Premium Quality Tier-1 Solar Panels</span>
              </li>
              <li>
                <CheckCircle className="icon" />
                <span>Seamless Government Subsidy Assistance</span>
              </li>
              <li>
                <CheckCircle className="icon" />
                <span>24/7 Dedicated Support & Maintenance</span>
              </li>
            </ul>
            
            <a href="#services" className="btn btn-outline" style={{marginTop: '2rem'}}>
              Discover Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
