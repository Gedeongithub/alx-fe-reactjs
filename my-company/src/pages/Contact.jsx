import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    // Reset form if you want:
    // setFormData({ name: "", email: "", message: "" });
  };

  const inputStyle = {
    display: "block",
    width: "100%",
    maxWidth: "520px",
    padding: "10px 12px",
    margin: "10px 0",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
    boxSizing: "border-box",
  };

  const labelStyle = { fontWeight: 600, marginTop: "8px", display: "block" };

  const buttonStyle = {
    padding: "10px 18px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#0b4a8b",
    color: "#fff",
    fontSize: "15px",
    marginTop: "10px",
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ marginTop: 0 }}>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label style={labelStyle} htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
        />

        <label style={labelStyle} htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
        />

        <label style={labelStyle} htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ ...inputStyle, minHeight: "120px", resize: "vertical" }}
        />

        <button type="submit" style={buttonStyle}>Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
