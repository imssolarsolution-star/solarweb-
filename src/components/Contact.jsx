import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'residential',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'enquiries'), {
        ...formData,
        createdAt: serverTimestamp()
      });
      alert('Thank you for contacting ims solar solutions! We will get back to you shortly.');
      setFormData({ name: '', phone: '', email: '', service: 'residential', message: '' });
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Sorry, there was an error submitting your request. Please try again or contact us directly via phone.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header text-center reveal">
          <span className="subtitle">Contact Us</span>
          <h2>Ready to <span className="highlight">Go Solar?</span></h2>
          <p className="header-desc">
            Get in touch with our experts for a free consultation and personalized quote.
          </p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info reveal">
            <div className="info-card">
              <div className="icon-wrapper">
                <MapPin size={24} />
              </div>
              <div>
                <h3>Head Office</h3>
                <p>
                  APA COMPLEX, OPPOSITE CENTRAL BANK,<br />
                  MANIKANDAM, TRICHY - 12
                </p>
              </div>
            </div>

            <div className="info-card">
              <div className="icon-wrapper">
                <Phone size={24} />
              </div>
              <div>
                <h3>Call or WhatsApp</h3>
                <p>
                  <a href="tel:7418105859">7418105859</a><br />
                  <a href="tel:8300799399">8300799399</a>
                </p>
              </div>
            </div>

            <div className="info-card">
              <div className="icon-wrapper">
                <Mail size={24} />
              </div>
              <div>
                <h3>Email Us</h3>
                <p>
                  <a href="mailto:imssolarsolutions@gmail.com">imssolarsolutions@gmail.com</a>
                </p>
              </div>
            </div>
          </div>

          <div className="contact-form-container glass reveal" style={{transitionDelay: '200ms'}}>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service">Interested Service</label>
                <select id="service" name="service" value={formData.service} onChange={handleChange}>
                  <option value="residential">Residential Solar</option>
                  <option value="commercial">Commercial Solar</option>
                  <option value="industrial">Industrial Solar</option>
                  <option value="pumps">Solar Water Pumps</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message / Requirements</label>
                <textarea id="message" name="message" rows="4" required value={formData.message} onChange={handleChange}></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-submit" disabled={isSubmitting}>
                <Send size={18} /> {isSubmitting ? 'Sending...' : 'Send Request'}
              </button>
            </form>
          </div>
        </div>

        <div className="map-container reveal" style={{transitionDelay: '400ms'}}>
          <iframe 
            title="ims solar solutions location"
            src="https://maps.google.com/maps?q=10.719244,78.629234&hl=es;z=14&amp;output=embed" 
            width="100%" 
            height="400" 
            style={{border: 0}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
