import { useState } from "react";
import "./App.css";
import Career from "./CareerContents";
import Contact from "./Contact";
import Introduction from "./Introduction";


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
            <h1>学歴・資格</h1>
            <p>学歴・資格・学習経験</p>
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

// タブ一覧
const tabs = [
  { id: "introduction", label: "Introduction" },
  { id: "career", label: "Career" },
  { id: "academy", label: "Academy" },
  { id: "contact", label: "Contact" },
];

// スタイル
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
