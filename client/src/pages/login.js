import React, { useState } from 'react';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = credentials;

    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }

    // For now, just log in console
    console.log('Logging in with:', credentials);
    alert('Login successful! (check console)');
    
    // Reset fields
    setCredentials({ email: '', password: '' });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Login</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '30px',
    maxWidth: '400px',
    margin: '0 auto',
    fontFamily: 'sans-serif',
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

export default Login;

