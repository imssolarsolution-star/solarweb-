import React, { useState, useEffect } from 'react';
import { LogOut, RefreshCw, Mail, Phone, Calendar } from 'lucide-react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import './AdminDashboard.css';

const AdminDashboard = ({ onLogout }) => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchEnquiries = async () => {
    setLoading(true);
    setError('');
    try {
      const q = query(collection(db, 'enquiries'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate() || new Date()
      }));
      setEnquiries(data);
    } catch (err) {
      console.error('Error fetching enquiries:', err);
      setError('Failed to load enquiries. Please check your Firebase rules and config.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  return (
    <div className="admin-dashboard">
      <header className="dashboard-header">
        <div className="container header-content">
          <h2>Admin Dashboard</h2>
          <button onClick={onLogout} className="btn btn-outline logout-btn">
            <LogOut size={18} /> Logout
          </button>
        </div>
      </header>

      <main className="container dashboard-main">
        <div className="dashboard-controls">
          <h3>Recent Enquiries</h3>
          <button onClick={fetchEnquiries} className="btn btn-primary" disabled={loading}>
            <RefreshCw size={18} className={loading ? 'spinning' : ''} /> 
            Refresh
          </button>
        </div>

        {error && <div className="error-message">{error}</div>}

        {loading ? (
          <div className="loading-state">Loading enquiries...</div>
        ) : enquiries.length === 0 ? (
          <div className="empty-state">No enquiries found.</div>
        ) : (
          <div className="table-responsive">
            <table className="enquiries-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Contact Info</th>
                  <th>Service</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {enquiries.map((enq) => (
                  <tr key={enq.id}>
                    <td className="date-cell">
                      <div className="flex-center gap-2">
                        <Calendar size={14} className="icon-muted" />
                        {enq.createdAt.toLocaleDateString()}
                      </div>
                      <div className="time-text">{enq.createdAt.toLocaleTimeString()}</div>
                    </td>
                    <td className="font-semibold">{enq.name}</td>
                    <td>
                      <div className="contact-details">
                        <a href={`tel:${enq.phone}`} className="flex-center gap-2">
                          <Phone size={14} className="icon-muted" /> {enq.phone}
                        </a>
                        {enq.email && (
                          <a href={`mailto:${enq.email}`} className="flex-center gap-2">
                            <Mail size={14} className="icon-muted" /> {enq.email}
                          </a>
                        )}
                      </div>
                    </td>
                    <td><span className="badge-service">{enq.service}</span></td>
                    <td className="message-cell">{enq.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
