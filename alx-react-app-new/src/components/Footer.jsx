function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#f3f4f6",
        padding: "15px 0",
        textAlign: "center",
        borderTop: "1px solid #ccc",
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <p
        style={{
          margin: 0,
          color: "#555",
          fontSize: "16px",
        }}
      >
        © 2023 City Lovers
      </p>
    </footer>
  );
}

export default Footer;
