import React, { useState } from 'react';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, service, date, time } = formData;

    if (!name || !service || !date || !time) {
      alert('Please fill in all fields.');
      return;
    }

    console.log('Booking submitted:', formData);
    alert(`Booking confirmed for ${name} on ${date} at ${time} for ${service}`);
    
    setFormData({ name: '', service: '', date: '', time: '' }); // Reset form
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Book an Appointment</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          style={styles.input}
          required
        >
          <option value="">Select Service</option>
          <option value="Haircut">Haircut</option>
          <option value="Facial">Facial</option>
          <option value="Pedicure">Pedicure</option>
        </select>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>Book Now</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '30px',
    fontFamily: 'sans-serif',
    maxWidth: '400px',
    margin: '0 auto',
  },
  heading: {
    textAlign: 'center',
    color: '#ff69b4',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  button: {
    backgroundColor: '#ff69b4',
    color: 'white',
    border: 'none',
    padding: '10px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
};

export default Booking;
