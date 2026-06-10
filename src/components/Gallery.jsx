import React, { useState } from 'react';
import './Gallery.css';
import { galleryImages } from './galleryData';

const Gallery = () => {
  const [visibleCount, setVisibleCount] = useState(12);

  // All Photos from user folder
  const displayedProjects = galleryImages.slice(0, visibleCount).map((path, idx) => ({
    id: `all-${idx + 1}`,
    image: path,
    title: 'Installation',
    category: 'Project Gallery',
  }));

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

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
          {displayedProjects.map((project, idx) => (
            <div key={project.id} className="gallery-item reveal" style={{transitionDelay: `${(idx % 3) * 150}ms`}}>
              <img src={project.image} alt={project.title} className="gallery-img" loading="lazy" />
              <div className="gallery-overlay">
                <span className="category">{project.category}</span>
                <h3>{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < galleryImages.length && (
          <div className="load-more-container">
            <button className="btn btn-primary" onClick={handleLoadMore}>
              Load More Photos
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
