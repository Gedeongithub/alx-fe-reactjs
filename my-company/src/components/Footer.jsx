import React from "react";

function Footer() {
  const footerStyle = {
    backgroundColor: "#f3f4f6",
    padding: "14px 20px",
    textAlign: "center",
    borderTop: "1px solid #e5e7eb",
    fontSize: "14px",
    color: "#4b5563",
  };

  return (
    <footer style={footerStyle}>
      <p style={{ margin: 0 }}>© 2023 City Lovers</p>
    </footer>
  );
}

export default Footer;
