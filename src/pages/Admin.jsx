import React, { useState } from 'react';
import AdminLogin from '../components/AdminLogin';
import AdminDashboard from '../components/AdminDashboard';

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F3F4F6' }}>
      {!isLoggedIn ? (
        <AdminLogin onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <AdminDashboard onLogout={() => setIsLoggedIn(false)} />
      )}
    </div>
  );
};

export default Admin;
