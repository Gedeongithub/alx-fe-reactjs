import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const navStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 24px",
    backgroundColor: "#ffffffcc",
    borderBottom: "1px solid rgba(0,0,0,0.06)",
    backdropFilter: "saturate(120%) blur(6px)",
    position: "sticky",
    top: 0,
    zIndex: 100,
  };

  const leftStyle = { display: "flex", alignItems: "center", gap: "12px" };
  const brandStyle = { fontWeight: 700, fontSize: "18px", color: "#0b4a8b" };

  const linksStyle = { display: "flex", gap: "16px", alignItems: "center" };

  const linkBase = {
    textDecoration: "none",
    padding: "8px 12px",
    borderRadius: "8px",
    fontSize: "15px",
    color: "#1f2937",
  };

  const location = useLocation();

  return (
    <nav style={navStyle}>
      <div style={leftStyle}>
        <div style={brandStyle}>My Company</div>
      </div>

      <div style={linksStyle}>
        <Link
          to="/"
          style={{
            ...linkBase,
            backgroundColor: location.pathname === "/" ? "#e6f0ff" : "transparent",
            color: location.pathname === "/" ? "#0b4a8b" : linkBase.color,
          }}
        >
          Home
        </Link>

        <Link
          to="/about"
          style={{
            ...linkBase,
            backgroundColor: location.pathname === "/about" ? "#e6f0ff" : "transparent",
            color: location.pathname === "/about" ? "#0b4a8b" : linkBase.color,
          }}
        >
          About
        </Link>

        <Link
          to="/services"
          style={{
            ...linkBase,
            backgroundColor: location.pathname === "/services" ? "#e6f0ff" : "transparent",
            color: location.pathname === "/services" ? "#0b4a8b" : linkBase.color,
          }}
        >
          Services
        </Link>

        <Link
          to="/contact"
          style={{
            ...linkBase,
            backgroundColor: location.pathname === "/contact" ? "#e6f0ff" : "transparent",
            color: location.pathname === "/contact" ? "#0b4a8b" : linkBase.color,
          }}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
