import React, { useState } from 'react';
import { IndianRupee, Zap, Leaf } from 'lucide-react';
import './Calculator.css';

const Calculator = () => {
  const [bill, setBill] = useState(5000);

  // Simplified calculation logic for demonstration
  const systemSize = (bill / 1500).toFixed(1); // approx 1kW per ₹1500 monthly bill
  const monthlySavings = (bill * 0.9).toFixed(0); // approx 90% savings
  const yearlySavings = (monthlySavings * 12).toLocaleString();
  const co2Reduction = (systemSize * 1.5).toFixed(1); // approx 1.5 tons CO2 per kW per year

  return (
    <section id="calculator" className="section bg-primary text-white">
      <div className="container">
        <div className="calculator-wrapper reveal">
          <div className="calc-content">
            <span className="subtitle calc-subtitle">Solar Savings Calculator</span>
            <h2>Calculate Your <span className="highlight">Potential Savings</span></h2>
            <p>
              Discover how much you can save by switching to solar. Enter your average monthly electricity bill to get an instant estimate of your required system size and projected savings.
            </p>
            
            <div className="calc-form">
              <label htmlFor="billAmount">Average Monthly Electricity Bill (₹)</label>
              <div className="range-slider">
                <input 
                  type="range" 
                  id="billAmount" 
                  min="1000" 
                  max="50000" 
                  step="500" 
                  value={bill} 
                  onChange={(e) => setBill(Number(e.target.value))}
                />
                <div className="range-value">₹ {bill.toLocaleString()}</div>
              </div>
            </div>
            <a href="#contact" className="btn btn-accent mt-4">
              Get a Detailed Quote
            </a>
          </div>

          <div className="calc-results glass-dark">
            <h3>Estimated Results</h3>
            
            <div className="result-item">
              <div className="result-icon">
                <Zap size={24} />
              </div>
              <div className="result-text">
                <span className="label">Recommended System Size</span>
                <span className="value">{systemSize} kW</span>
              </div>
            </div>

            <div className="result-item">
              <div className="result-icon">
                <IndianRupee size={24} />
              </div>
              <div className="result-text">
                <span className="label">Estimated Yearly Savings</span>
                <span className="value highlight-text">₹ {yearlySavings}</span>
              </div>
            </div>

            <div className="result-item">
              <div className="result-icon">
                <Leaf size={24} />
              </div>
              <div className="result-text">
                <span className="label">Yearly CO₂ Reduction</span>
                <span className="value">{co2Reduction} Tons</span>
              </div>
            </div>

            <div className="calc-note">
              * This is a simplified estimate. Actual results may vary based on roof space, location, and precise energy consumption patterns.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
