import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    question: 'How much does a solar system cost?',
    answer: 'The cost varies depending on the system size, type (on-grid, off-grid, hybrid), and your energy consumption. A typical residential system starts from around ₹1.5 Lakhs after subsidies. Contact us for a free site survey and exact quote.'
  },
  {
    question: 'Is my roof suitable for solar panels?',
    answer: 'Most roofs are suitable. We require a shadow-free area facing South, East, or West. Our engineers conduct a free site survey to assess structural integrity, shading, and the optimal angle for maximum efficiency.'
  },
  {
    question: 'Do I get any government subsidies?',
    answer: 'Yes! The Government of India provides attractive subsidies for residential solar installations under various schemes. We handle all the paperwork and ensure you receive the maximum eligible subsidy directly to your account.'
  },
  {
    question: 'How long do solar panels last?',
    answer: 'Premium Tier-1 solar panels, like the ones we install, come with a 25-year performance warranty. However, with proper maintenance, they can effectively generate power for 30+ years.'
  },
  {
    question: 'What happens during a power cut?',
    answer: 'If you have a grid-tied system without batteries, the system automatically shuts down for safety reasons (anti-islanding). If you experience frequent power cuts, we recommend a hybrid system with battery backup.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section bg-surface">
      <div className="container">
        <div className="section-header text-center reveal">
          <span className="subtitle">FAQ</span>
          <h2>Frequently Asked <span className="highlight">Questions</span></h2>
        </div>

        <div className="faq-container reveal">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`faq-item ${openIndex === idx ? 'open' : ''}`}
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <button className="faq-toggle">
                  {openIndex === idx ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </button>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
