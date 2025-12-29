import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header style={headerStyle}>
      <h1>Fantasy Football App</h1>
      <nav>
        <Link to="/dashboard" style={linkStyle}>Dashboard</Link> |{" "}
        <Link to="/login" style={linkStyle}>Login</Link> |{" "}
        <Link to="/register" style={linkStyle}>Register</Link>
      </nav>
    </header>
  );
};

const headerStyle: React.CSSProperties = {
  backgroundColor: "#4CAF50",
  color: "white",
  padding: "10px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const linkStyle: React.CSSProperties = {
  color: "white",
  textDecoration: "none",
  margin: "0 5px"
};

export default Navbar;
