import React, { useState } from 'react';
import { Lock } from 'lucide-react';
import './AdminLogin.css';

const credentials = {
  'flyggoagency@gmail.com': 'Flyggo@8',
  'imssolarsolution@gmail.com': 'Giant26&'
};

const AdminLogin = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials[email] && credentials[email] === password) {
      onLogin();
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="admin-login-wrapper">
      <div className="admin-login-card">
        <div className="login-header">
          <div className="icon-wrapper">
            <Lock size={24} />
          </div>
          <h2>Admin Portal</h2>
          <p>Sign in to manage enquiries</p>
        </div>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="adminEmail">Email Address</label>
            <input 
              type="email" 
              id="adminEmail" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="adminPassword">Password</label>
            <input 
              type="password" 
              id="adminPassword" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>

          <button type="submit" className="btn btn-primary login-btn">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
