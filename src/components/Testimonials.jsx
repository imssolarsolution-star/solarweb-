import React from 'react';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Homeowner, Trichy',
    content: 'ims solar solutions installed a 5kW system at my house. The team was highly professional, and my electricity bill has reduced by 95%. Best investment ever!',
    rating: 5
  },
  {
    id: 2,
    name: 'Priya Textiles',
    role: 'Commercial Client',
    content: 'We opted for a 50kW commercial setup. The entire process from survey to installation was seamless. The ROI is better than expected.',
    rating: 5
  },
  {
    id: 3,
    name: 'Senthil Murugan',
    role: 'Factory Owner',
    content: 'Their expertise in industrial solar is unmatched in Tamil Nadu. The 200kW plant they installed is running perfectly with zero downtime.',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="section-header text-center reveal">
          <span className="subtitle">Testimonials</span>
          <h2>What Our <span className="highlight">Clients Say</span></h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testi, idx) => (
            <div key={testi.id} className="testi-card glass reveal" style={{transitionDelay: `${idx * 150}ms`}}>
              <Quote className="quote-icon" size={40} />
              <div className="stars">
                {[...Array(testi.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>
              <p className="testi-content">"{testi.content}"</p>
              <div className="testi-author">
                <h4>{testi.name}</h4>
                <span>{testi.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
