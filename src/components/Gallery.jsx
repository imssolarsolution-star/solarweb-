import React from 'react';
import './Gallery.css';

const Gallery = () => {
  // We have 14 work photos in public/Photos
  const projects = Array.from({ length: 14 }, (_, i) => ({
    id: i + 1,
    image: `/Photos/work-${i + 1}.jpeg`,
    title: `Solar Installation Project ${i + 1}`,
    category: 'Our Work',
  }));

  return (
    <section id="projects" className="section bg-surface">
      <div className="container">
        <div className="section-header text-center reveal">
          <span className="subtitle">Our Work</span>
          <h2>Recent <span className="highlight">Installations</span></h2>
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
