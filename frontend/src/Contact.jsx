import React from "react";

export default function Contact() {
  return (
    <div style={container}>
      <h2 style={title}>Email・GitHub</h2>

      <div style={item}>
        <span style={icon}>📧</span>
        <a href="mailto:melissarose.kaho@gmail.com" style={link}>
            melissarose.kaho@gmail.com
        </a>
      </div>

      <div style={item}>
        <span style={icon}>🐙</span>
        <a
          href="https://github.com/Kaho8210"
          target="_blank"
          rel="noopener noreferrer"
          style={link}
        >
          GitHub Profile
        </a>
      </div>
    </div>
  );
}

const container = {
  background: "#1e1e1e",
  color: "white",
  padding: "30px",
  borderRadius: "12px",
  maxWidth: "600px",
  margin: "40px auto",
  fontFamily: "sans-serif",
  boxShadow: "0 0 20px rgba(0,0,0,0.35)",
};

const title = {
  marginBottom: "25px",
  fontSize: "26px",
  borderBottom: "2px solid #444",
  paddingBottom: "8px",
};

const item = {
  display: "flex",
  alignItems: "center",
  margin: "18px 0",
  fontSize: "18px",
};

const icon = {
  fontSize: "26px",
  marginRight: "12px",
};

const link = {
  color: "#4ea1ff",
  textDecoration: "none",
  transition: "0.2s",
};

link[":hover"] = {
  color: "#82c2ff",
};
