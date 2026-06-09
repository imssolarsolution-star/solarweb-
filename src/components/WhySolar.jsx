import React, { useState, useEffect, useRef } from 'react';
import { PiggyBank, Globe2, ShieldCheck, TrendingUp } from 'lucide-react';
import './WhySolar.css';

const WhySolar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: PiggyBank,
      title: 'Massive Cost Savings',
      desc: 'Reduce or completely eliminate your electricity bills from day one. Protect yourself from rising utility rates.'
    },
    {
      icon: Globe2,
      title: 'Green Energy Impact',
      desc: 'Reduce your carbon footprint significantly. Every KW installed is equivalent to planting multiple trees.'
    },
    {
      icon: TrendingUp,
      title: 'High ROI & Value',
      desc: 'Solar installations offer a return on investment of 20-30% annually and increase property value.'
    },
    {
      icon: ShieldCheck,
      title: 'Govt. Subsidies',
      desc: 'Take advantage of central and state government subsidies to lower your initial investment cost.'
    }
  ];

  return (
    <section id="why-solar" className="section" ref={sectionRef}>
      <div className="container">
        <div className="section-header text-center reveal">
          <span className="subtitle">Why Solar Energy?</span>
          <h2>A Smart Investment for <span className="highlight">Your Future</span></h2>
        </div>

        <div className="why-grid">
          {features.map((feature, idx) => (
            <div key={idx} className="why-card reveal" style={{transitionDelay: `${idx * 150}ms`}}>
              <div className="icon-box">
                <feature.icon size={32} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Animated Counters */}
        <div className="stats-container reveal">
          <div className="stat-box">
            <h4 className="counter">{isVisible ? '500' : '0'}+</h4>
            <p>Happy Clients</p>
          </div>
          <div className="stat-box">
            <h4 className="counter">{isVisible ? '10' : '0'}MW+</h4>
            <p>Energy Installed</p>
          </div>
          <div className="stat-box">
            <h4 className="counter">{isVisible ? '15000' : '0'}+</h4>
            <p>Tons CO2 Saved</p>
          </div>
          <div className="stat-box">
            <h4 className="counter">{isVisible ? '25' : '0'}Yrs</h4>
            <p>Performance Warranty</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySolar;
