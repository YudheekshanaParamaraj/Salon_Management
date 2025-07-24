import React, { useState } from 'react';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    alert('Booking submitted! (check console)');
  };

  return (
    <div className="page">
      <h1>Book an Appointment</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} />
        <select name="service" onChange={handleChange}>
          <option value="">Select Service</option>
          <option value="Haircut">Haircut</option>
          <option value="Facial">Facial</option>
          <option value="Pedicure">Pedicure</option>
        </select>
        <input type="date" name="date" onChange={handleChange} />
        <input type="time" name="time" onChange={handleChange} />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default Booking;
