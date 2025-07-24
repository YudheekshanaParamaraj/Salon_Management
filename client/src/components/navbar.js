import { Link } from "react-router-dom";

function Navbar() {
  const linkStyle = {
    marginRight: "20px",
    textDecoration: "none",
    color: "#333",
    fontWeight: "bold",
  };

  return (
    <nav style={{
      background: "#ff69b4",
      padding: "12px 20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      color: "white",
    }}>
      <h2 style={{ margin: 0 }}>SalonX</h2>
      <div>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/services" style={linkStyle}>Services</Link>
        <Link to="/booking" style={linkStyle}>Booking</Link>
        <Link to="/login" style={linkStyle}>Login</Link>
        <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
      </div>
    </nav>
  );
}

export default Navbar;

