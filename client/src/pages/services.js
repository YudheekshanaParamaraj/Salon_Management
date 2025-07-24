import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Haircut & Styling',
      description: 'Trendy and classic cuts tailored to your style.',
    },
    {
      title: 'Facials & Skin Treatment',
      description: 'Rejuvenating facials using premium skincare products.',
    },
    {
      title: 'Manicure & Pedicure',
      description: 'Pamper your hands and feet with our expert care.',
    },
    {
      title: 'Hair Coloring',
      description: 'Vibrant, long-lasting colors with zero damage.',
    },
    {
      title: 'Bridal Packages',
      description: 'Exclusive beauty packages for your special day.',
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Our Services</h1>
      <div style={styles.grid}>
        {services.map((service, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.cardTitle}>{service.title}</h3>
            <p style={styles.cardText}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '30px',
    fontFamily: 'sans-serif',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.2rem',
    color: '#ff69b4',
    marginBottom: '30px',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  },
  card: {
    width: '250px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#fff0f5',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    textAlign: 'left',
  },
  cardTitle: {
    fontSize: '1.2rem',
    marginBottom: '10px',
    color: '#d63384',
  },
  cardText: {
    fontSize: '0.95rem',
    color: '#444',
  },
};

export default Services;
