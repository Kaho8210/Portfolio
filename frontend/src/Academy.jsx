import toeicScore1 from "./pics/toeic970.pdf";
import toeicScore2 from "./pics/toeic925.pdf";

export default function Academy() {

  return (
    <div>
      <div style={container}>
        <div style={{ textAlign: "center" }}>
          <h2 style={title}>Academic Achievement</h2>

        </div>

        {/* 卒業研究 */}
        <div style={item}>
          <span style={label}>卒業研究</span>
          <div style={detailRow}>
            <span style={emoji}>🎓</span>
            <p style={detailText}>
                AR環境で高校物理を動的に学習できる<a href="https://youtu.be/Tt-ewnffNT4" style={{ color: "pink" }}>シミュレータ</a>をUnityで開発した。<br />
                アルバイトで塾講師、家庭教師をしており、高校物理で躓く生徒が多かったことから着想を得た。
            </p>
          </div>
        </div>

        {/* 論文発表 */}
        <div style={item}>
          <span style={label}>論文発表</span>
            <div style={detailRow}>
              <span style={emoji}>📃</span>
              <p style={detailText}>
                ICT教育機関の国際論文発表会<a href="https://www.shs-conferences.org/articles/shsconf/abs/2024/14/shsconf_etltc2024_03002/shsconf_etltc2024_03002.html" style={{color:"pink"}}>（ETLTC2024）</a>にて卒業研究内容を発表。<br/>
                英語での口頭発表、デモを行なった。
              </p>
          </div>
        </div>

        {/* 資格 */}
        <div style={item}>
          <span style={label}>資格</span>
          <div style={detailRow}>
            <span style={emoji}>🔤</span>
            <p style={detailText}>TOEIC<a href={toeicScore1} style={{color:"pink"}}>最高得点</a>：970点（<a href={toeicScore2} style={{color:"pink"}}>直近の点数</a>：925点）</p>
          </div>
        </div>
      </div>
    </div>
  );
}

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
