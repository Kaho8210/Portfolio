import React, { useState } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

export default function Career() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [popoverContent, setPopoverContent] = useState("");

  const handleClick = (event, content) => {
    setAnchorEl(event.currentTarget);
    setPopoverContent(content);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const items = [
    {
      date: "2020年4月",
      title: "会津大学入学",
      detail:
        "・プログラミング、アルゴリズム、画像処理、論理回路設計、CG、ソフトウェア設計など広く浅く学んだ。\n・バイトでは音楽スタジオのスタッフ、塾講師、家庭教師、大学内英語科の研究補助を経験。\n・学んだプログラミング言語：C、C++、C#、Java、JavaScript、TypeScript",
    },
    {
      date: "2024年3月",
      title: "会津大学卒業",
      detail:
        "学士号取得。",
    },
    {
      date: "2024年5月",
      title: "アクセンチュア入社",
      detail: "3ヶ月の研修を経て、初めてのプロジェクトアサイン。",
    },
    {
      date: "2024年8月",
      title: "ECサービスのシステム開発",
      detail:
        "・サイトの治安維持（出品のパトロール）をする内部ツール開発を行う。\n主にバッチ、コンシューマの設計・開発・運用を担当。\n・企画業務を手伝うこともあり、スケジュール作成、要件定義、画面仕様書作成、テスト仕様書作成も行う。\n・使用ツール：Node.js、MySQL、S3、GitHub、CI/CD、Tableau、クライアント環境のクラウドサービス",
    },
    {
      date: "現在",
      detail: "初アサイン時より同じプロジェクトに在籍。",
    },
  ];

  return (
    <div style={wrapper}>
      <div style={card}>
        <h2 style={title}>Career Timeline</h2>

        <Timeline position="left">
          {items.map((item, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot
                  color="primary"
                  onClick={(e) => handleClick(e, item.detail)}
                  style={{ cursor: "pointer", backgroundColor: "#4ea1ff" }}
                />
                {index !== items.length - 1 && (
                  <TimelineConnector style={{ backgroundColor: "#555" }} />
                )}
              </TimelineSeparator>

              <TimelineContent style={{ color: "#ddd" }}>
                <strong style={{ color: "#4ea1ff" }}>{item.date}</strong> {item.title}
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        PaperProps={{
          style: popoverStyle,
        }}
      >
        <Typography variant="body1" style={{ whiteSpace: "pre-line" }}>
          {popoverContent}
        </Typography>
      </Popover>
    </div>
  );
}

const wrapper = {
  display: "flex",
  justifyContent: "center",
  marginTop: "20px",
};

const card = {
  background: "#1e1e1e",
  color: "white",
  padding: "30px",
  borderRadius: "12px",
  maxWidth: "700px",
  width: "100%",
  boxShadow: "0 0 20px rgba(0,0,0,0.35)",
  fontFamily: "sans-serif",
};

const title = {
  fontSize: "26px",
  marginBottom: "20px",
  borderBottom: "2px solid #444",
  paddingBottom: "8px",
};

const popoverStyle = {
  padding: "20px",
  maxWidth: "400px",
  background: "#1e1e1e",
  color: "white",
  borderRadius: "12px",
  boxShadow: "0 0 20px rgba(0,0,0,0.5)",
  whiteSpace: "pre-line",
};
