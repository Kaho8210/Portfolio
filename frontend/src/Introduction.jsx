import React, { useState } from "react";
import profile from "./pics/profile.jpg";

export default function Introduction() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* ---- モーダル（写真拡大） ---- */}
      {isOpen && (
        <div style={modalOverlay} onClick={() => setIsOpen(false)}>
          <div style={modalContent} onClick={(e) => e.stopPropagation()}>
            <img src={profile} alt="profile-large" style={modalImg} />
          </div>
        </div>
      )}

      <div style={container}>
        <div style={{ textAlign: "center" }}>
          <h2 style={title}>Self Introduction</h2>

          <div style={pic} onClick={() => setIsOpen(true)}>
            <img src={profile} style={profileImg} alt="profile" />
          </div>

          <div style={name}>白井 香帆</div>
        </div>

        {/* 出身地 */}
        <div style={item}>
          <span style={label}>出身地</span>
          <div style={detailRow}>
            <span style={emoji}>🐮</span>
            <p style={detailText}>福島県会津若松市</p>
          </div>
        </div>

        {/* 趣味・特技 */}
        <div style={item}>
          <span style={label}>趣味・特技</span>

          <div style={detailBlock}>
            <div style={detailRow}>
              <span style={emoji}>🎸</span>
              <p style={detailText}>
                ギターとベースが趣味で、学生時代は<a href="https://youtu.be/IwK-i32-62c" style={{ color: "pink" }}>バンド演奏</a>をしていました。<br />
                現在も弾いたり作曲したりしています。
              </p>
            </div>

            <div style={detailRow}>
              <span style={emoji}>📚</span>
              <p style={detailText}>
                英語が好きで、中学生から独学で英会話を勉強しています。<br />
              </p>
            </div>
          </div>
        </div>

        {/* 仕事 */}
        <div style={item}>
          <span style={label}>仕事</span>
          <div style={detailRow}>
            <span style={emoji}>💻</span>
            <p style={detailText}>ソリューションエンジニア（アクセンチュア株式会社）</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------ Styles ------------------ */
const container = {
  background: "#1e1e1e",
  color: "white",
  padding: "35px",
  borderRadius: "14px",
  maxWidth: "650px",
  margin: "40px auto",
  fontFamily: "sans-serif",
  boxShadow: "0 0 25px rgba(0,0,0,0.45)",
  textAlign: "left",
};

const title = {
  marginBottom: "25px",
  fontSize: "27px",
  borderBottom: "2px solid #444",
  paddingBottom: "8px",
  textAlign: "left",
};

const pic = {
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  overflow: "hidden",
  margin: "0 auto 20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0 0 12px rgba(0,0,0,0.4)",
  cursor: "pointer",
};

const profileImg = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const name = {
  marginBottom: "30px",
  fontSize: "26px",
  textAlign: "center",
};

const item = {
  marginBottom: "22px",
  paddingLeft: "8px",
};

const label = {
  fontSize: "20px",
  fontWeight: "bold",
  display: "block",
  marginBottom: "6px",
  color: "#e0e0e0",
};

const detailBlock = {
  display: "flex",
  flexDirection: "column",
  gap: "14px",
  marginTop: "5px",
};

const detailRow = {
  display: "flex",
  alignItems: "flex-start",
};

const emoji = {
  fontSize: "20px",
  marginRight: "10px",
  marginTop: "3px",
};

const detailText = {
  margin: 0,
  fontSize: "17px",
  lineHeight: "1.6",
};

/* ---- モーダル ---- */
const modalOverlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(0,0,0,0.7)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
};

const modalContent = {
  background: "#222",
  padding: "10px",
  borderRadius: "12px",
  maxWidth: "90vw",
  maxHeight: "90vh",
};

const modalImg = {
  width: "100%",
  height: "auto",
  borderRadius: "10px",
};
