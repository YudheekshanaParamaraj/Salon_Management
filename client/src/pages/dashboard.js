import React from 'react';

const Dashboard = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Admin Dashboard</h1>
      <p style={styles.subheading}>Manage Bookings and Services here.</p>

      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <h3>Total Bookings</h3>
          <p>42</p>
        </div>
        <div style={styles.card}>
          <h3>Available Services</h3>
          <p>5</p>
        </div>
        <div style={styles.card}>
          <h3>Registered Users</h3>
          <p>18</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '30px',
    fontFamily: 'sans-serif',
  },
  heading: {
    color: '#ff69b4',
    fontSize: '2rem',
    marginBottom: '10px',
  },
  subheading: {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '30px',
  },
  cardContainer: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
  },
  card: {
    flex: '1 1 200px',
    padding: '20px',
    border: '1px solid #eee',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
};

export default Dashboard;
