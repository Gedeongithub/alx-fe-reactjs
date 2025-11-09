function MainContent() {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #dbeafe, #fef3c7)",
        fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <p
        style={{
          backgroundColor: "white",
          border: "1px solid #ccc",
          padding: "20px 30px",
          borderRadius: "12px",
          boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
          fontSize: "18px",
          color: "#333",
        }}
      >
        I love to visit{" "}
        <span style={{ color: "#0077cc", fontWeight: "bold" }}>New York</span>,{" "}
        <span style={{ color: "#e91e63", fontWeight: "bold" }}>Paris</span>, and{" "}
        <span style={{ color: "#ff9800", fontWeight: "bold" }}>Tokyo</span>.
      </p>
    </main>
  );
}

export default MainContent;
