import React from 'react';

const Home = () => {
  return (
    <div className="page" style={styles.container}>
      <h1 style={styles.heading}>Welcome to SalonX</h1>
      <p style={styles.subheading}>Your beauty, our duty 💇‍♀️💅</p>

      <div style={styles.features}>
        <div style={styles.card}>
          <h3>Experienced Stylists</h3>
          <p>Our professional team ensures top-quality service tailored to your needs.</p>
        </div>
        <div style={styles.card}>
          <h3>Premium Products</h3>
          <p>We use only trusted and skin-safe salon products for your care.</p>
        </div>
        <div style={styles.card}>
          <h3>Online Booking</h3>
          <p>Book appointments at your convenience—no waiting, no hassle.</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '30px',
    fontFamily: 'sans-serif',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#ff69b4',
  },
  subheading: {
    fontSize: '1.2rem',
    marginBottom: '30px',
    color: '#555',
  },
  features: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '20px',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '20px',
    width: '250px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  },
};

export default Home;
