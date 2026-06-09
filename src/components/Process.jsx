import React from 'react';
import { ClipboardList, Map, PenTool, Zap, HeartHandshake } from 'lucide-react';
import './Process.css';

const steps = [
  {
    icon: ClipboardList,
    title: 'Consultation',
    desc: 'We assess your energy needs and discuss potential savings.'
  },
  {
    icon: Map,
    title: 'Site Survey',
    desc: 'Our engineers conduct a thorough roof and shading analysis.'
  },
  {
    icon: PenTool,
    title: 'Custom Design',
    desc: 'We design a system optimized for your specific property and goals.'
  },
  {
    icon: Zap,
    title: 'Installation',
    desc: 'Professional installation by certified technicians in days.'
  },
  {
    icon: HeartHandshake,
    title: 'Support & AMC',
    desc: 'Continuous monitoring and maintenance to ensure peak performance.'
  }
];

const Process = () => {
  return (
    <section id="process" className="section bg-surface">
      <div className="container">
        <div className="section-header text-center reveal">
          <span className="subtitle">How It Works</span>
          <h2>Our <span className="highlight">Installation Process</span></h2>
          <p className="header-desc">
            We make transitioning to solar simple and stress-free with our streamlined 5-step process.
          </p>
        </div>

        <div className="process-timeline">
          {steps.map((step, idx) => (
            <div key={idx} className="process-step reveal" style={{transitionDelay: `${idx * 150}ms`}}>
              <div className="step-number">{idx + 1}</div>
              <div className="step-icon-box">
                <step.icon size={32} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
