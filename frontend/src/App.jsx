import { useState } from "react";
import "./App.css";
import Career from "./CareerContents";
import Contact from "./Contact";
import Introduction from "./Introduction";
import Academy from "./Academy";

export default function App() {
  const [activeTab, setActiveTab] = useState("introduction");

  return (
    <div style={{ fontFamily: "sans-serif"}}>
      {/* Header */}
      <header style={headerStyle}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            style={{
              ...tabItemStyle,
              textDecoration: activeTab === tab.id ? "underline" : "none",
            }}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </div>
        ))}
      </header>

      {/* Content */}
      <main className="body">
        {activeTab === "introduction" && (
          <section>
            <Introduction />
          </section>
        )}

        {activeTab === "career" && (
          <section>
            <Career />
          </section>
        )}

        {activeTab === "academy" && (
          <section>
            <Academy/>
          </section>
        )}

        {activeTab === "contact" && (
          <section>
            <Contact/>
          </section>
        )}
      </main>
    </div>
  );
}

const tabs = [
  { id: "introduction", label: "Introduction" },
  { id: "career", label: "Career" },
  { id: "academy", label: "Academy" },
  { id: "contact", label: "Contact" },
];

const headerStyle = {
  display: "flex",
  background: "#333",
  color: "white",
  padding: "12px 20px",
};

const tabItemStyle = {
  marginRight: "20px",
  cursor: "pointer",
};
