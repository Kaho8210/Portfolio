import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

export default function Career() {
  const items = [
    {
      date: "2020年4月",
      title: "会津大学入学",
      detail:
        "・プログラミング、アルゴリズム、画像処理、論理回路設計、CG、ソフトウェア設計など広く浅く学んだ。\n・バイトでは音楽スタジオのスタッフ、塾講師、家庭教師、大学内英語科の研究補助を経験。\n・学んだプログラミング言語：C、C++、C#、Java、JavaScript、HTML、TypeScript",
    },
    {
      date: "2024年3月",
      title: "会津大学卒業",
      detail: "学士号取得。",
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
        "・サイトの治安維持（出品のパトロール）をする内部ツール開発を行う。\n主にバッチ、コンシューマの設計・開発・運用を担当。\n・企画業務を手伝うこともあり、スケジュール作成、要件定義、画面仕様書作成、テスト仕様書作成も行う。\n・使用ツール：Node.js、MySQL、Presto DB、S3、GitHub、CI/CD、Tableau、クライアント環境のクラウドサービス",
    },
    {
      date: "現在",
      title: "",
      detail: "初アサイン時より同じプロジェクトに在籍中。",
    },
  ];

  return (
    <div style={wrapper}>
      <div style={card}>
        <h2 style={title}>Career Timeline</h2>

        <Timeline position="right">
          {items.map((item, index) => (
            <TimelineItem key={index}>

              <TimelineOppositeContent style={leftInfo}>
                <strong style={{ color: "#4ea1ff" }}>{item.date}</strong> {item.title}
              </TimelineOppositeContent>

              <TimelineSeparator>
                <TimelineDot style={{ backgroundColor: "#4ea1ff" }} />
                {index !== items.length - 1 && (
                  <TimelineConnector style={{ backgroundColor: "#555" }} />
                )}
              </TimelineSeparator>

              <TimelineContent>
                <div style={detailBox}>
                  {item.detail.split("\n").map((line, i) => (
                    <p key={i} style={{ margin: "4px 0" }}>
                      {line}
                    </p>
                  ))}
                </div>
              </TimelineContent>

            </TimelineItem>
          ))}
        </Timeline>
      </div>
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
  maxWidth: "900px",
  width: "100%",
  boxShadow: "0 0 20px rgba(0,0,0,0.35)",
};

const title = {
  fontSize: "26px",
  marginBottom: "20px",
  borderBottom: "2px solid #444",
  paddingBottom: "8px",
};

const leftInfo = {
  minWidth: "150px",
  textAlign: "right",
  paddingRight: "15px",
  fontSize: "15px",
  color: "#ddd",
};

const detailBox = {
  background: "#2a2a2a",
  padding: "15px 20px",
  borderRadius: "8px",
  borderLeft: "2px solid #4ea1ff",
  boxShadow: "0 0 10px rgba(0,0,0,0.3)",
};
