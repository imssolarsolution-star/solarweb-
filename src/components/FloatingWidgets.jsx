import React, { useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import './FloatingWidgets.css';

const FloatingWidgets = () => {
  const [showWaOptions, setShowWaOptions] = useState(false);

  return (
    <div className="floating-widgets">
      {/* WhatsApp Widget */}
      <div className="widget-container">
        {showWaOptions && (
          <div className="wa-options glass animate-fade-in">
            <button className="close-btn" onClick={() => setShowWaOptions(false)}>
              <X size={16} />
            </button>
            <h4>Chat with us</h4>
            <a href="https://wa.me/917418105859" target="_blank" rel="noopener noreferrer" className="wa-option">
              <MessageCircle size={18} />
              <span>7418105859</span>
            </a>
            <a href="https://wa.me/918300799399" target="_blank" rel="noopener noreferrer" className="wa-option">
              <MessageCircle size={18} />
              <span>8300799399</span>
            </a>
          </div>
        )}
        <button 
          className="float-btn wa-btn" 
          onClick={() => setShowWaOptions(!showWaOptions)}
          aria-label="WhatsApp"
        >
          <MessageCircle size={28} />
        </button>
      </div>

      {/* Call Widget */}
      <a href="tel:7418105859" className="float-btn call-btn" aria-label="Call Now">
        <Phone size={24} />
      </a>
    </div>
  );
};

export default FloatingWidgets;
