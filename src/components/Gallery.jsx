import React from 'react';
import './Gallery.css';
import resSolar from '../assets/residential_solar_1780934831950.png';
import comSolar from '../assets/commercial_solar_1780934870528.png';
import indSolar from '../assets/industrial_solar_1780934884899.png';

const Gallery = () => {
  const projects = [
    {
      id: 1,
      image: resSolar,
      title: 'Residential 5kW System',
      category: 'Residential',
    },
    {
      id: 2,
      image: comSolar,
      title: 'Commercial Office 50kW',
      category: 'Commercial',
    },
    {
      id: 3,
      image: indSolar,
      title: 'Industrial Plant 250kW',
      category: 'Industrial',
    },
    {
      id: 4,
      image: resSolar,
      title: 'Luxury Home 10kW',
      category: 'Residential',
    },
    {
      id: 5,
      image: indSolar,
      title: 'Factory Warehouse 500kW',
      category: 'Industrial',
    },
    {
      id: 6,
      image: comSolar,
      title: 'Retail Store 20kW',
      category: 'Commercial',
    }
  ];

  return (
    <section id="projects" className="section bg-surface">
      <div className="container">
        <div className="section-header text-center reveal">
          <span className="subtitle">Our Portfolio</span>
          <h2>Featured <span className="highlight">Installations</span></h2>
          <p className="header-desc">
            Explore our recent projects across Tamil Nadu, showcasing our expertise in delivering high-performance solar solutions.
          </p>
        </div>

        <div className="gallery-grid">
          {projects.map((project, idx) => (
            <div key={project.id} className="gallery-item reveal" style={{transitionDelay: `${(idx % 3) * 150}ms`}}>
              <img src={project.image} alt={project.title} className="gallery-img" />
              <div className="gallery-overlay">
                <span className="category">{project.category}</span>
                <h3>{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
