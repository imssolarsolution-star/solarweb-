import React, { useState } from 'react';
import './Gallery.css';
import { galleryImages } from './galleryData';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('featured');
  const [visibleCount, setVisibleCount] = useState(12);

  // 11 Featured Photos
  const featuredProjects = Array.from({ length: 11 }, (_, i) => ({
    id: `featured-${i + 1}`,
    image: `/Photos/work-${i + 1}.jpeg`,
    title: 'Solar Installation',
    category: 'Featured Work',
  }));

  // 72 All Photos
  const allProjects = galleryImages.map((path, idx) => ({
    id: `all-${idx + 1}`,
    image: path,
    title: `Installation #${idx + 1}`,
    category: 'Project Gallery',
  }));

  const activeProjects = activeTab === 'featured' ? featuredProjects : allProjects;
  const displayedProjects = activeProjects.slice(0, visibleCount);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setVisibleCount(12); // reset visible count when changing tabs
  };

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

        {/* Tab Filters */}
        <div className="gallery-tabs">
          <button 
            className={`tab-btn ${activeTab === 'featured' ? 'active' : ''}`}
            onClick={() => handleTabChange('featured')}
          >
            Featured Projects ({featuredProjects.length})
          </button>
          <button 
            className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => handleTabChange('all')}
          >
            All Installations ({allProjects.length})
          </button>
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
        {visibleCount < activeProjects.length && (
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
