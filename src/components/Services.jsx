import React from 'react';
import { Home, Building2, Factory, Droplet, Sun, Wrench, ArrowRight } from 'lucide-react';
import './Services.css';

const services = [
  {
    id: 1,
    title: 'Residential Solar Systems',
    description: 'Transform your home into a powerhouse. Reduce electricity bills significantly with our custom-designed rooftop solar systems tailored for modern homes.',
    icon: Home,
  },
  {
    id: 2,
    title: 'Commercial Solar Systems',
    description: 'Boost your business bottom line. Our commercial solar installations provide reliable energy and excellent ROI for offices, retail, and institutions.',
    icon: Building2,
  },
  {
    id: 3,
    title: 'Industrial Solar Projects',
    description: 'Large-scale energy solutions for manufacturing and industrial facilities. High-capacity systems built for maximum efficiency and durability.',
    icon: Factory,
  },
  {
    id: 4,
    title: 'Solar Water Pumps',
    description: 'Reliable and cost-effective solar pumping solutions for agriculture and rural water supply, reducing dependency on the grid.',
    icon: Droplet,
  },
  {
    id: 5,
    title: 'Solar Street Lights',
    description: 'Smart, self-sustaining solar street lighting systems ideal for pathways, communities, and public infrastructure.',
    icon: Sun,
  },
  {
    id: 6,
    title: 'Maintenance & Support',
    description: 'Comprehensive AMC packages ensuring your solar investment operates at peak performance year-round with quick response times.',
    icon: Wrench,
  },
];

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-header text-center reveal">
          <span className="subtitle">Our Services</span>
          <h2>Comprehensive <span className="highlight">Solar Solutions</span></h2>
          <p className="header-desc">
            From residential rooftops to massive industrial plants, ims solar solutions provides end-to-end expertise for every energy need.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`service-card glass reveal`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="service-icon-wrapper">
                <service.icon size={32} className="service-icon" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact" className="service-link">
                Learn more <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
