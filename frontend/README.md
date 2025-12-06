# ポートフォリオ（Webサイト）
Node.js（Express）× React を使用して構築したポートフォリオサイトです。
GitHub Actions による CI/CD を導入しており、PR 時の自動 Lint チェック・ステージングデプロイ、main push 時の本番デプロイを実行します。

---

##  💠 機能概要
* Node.js（Express）による Web サーバー
* React（Vite）によるフロントエンド構築（`frontend/`）
* GitHub Actions でのCI/CD構築→Render でのデプロイ

  * ESLint による構文エラーチェック
  * PR 時のステージング環境デプロイ
  * main push 時の本番環境デプロイ

---

## 💠 使用技術
* **Node.js / Express**
* **React**
* **CSS**
* **HTML**
* **GitHub Actions（CI/CD）**
* **ESLint**
* **npm**
* **Render**

---

## 💠 ローカル開発手順
### 1. 依存関係のインストール
```
npm install
```

### 2. フロントエンドのビルド（Vite）
`frontend/` ディレクトリ内で実行。
```
npm run build
```

### 3. サーバ起動（Express）
`root` ディレクトリでサーバを起動。
```
npm start
```

ブラウザで [http://localhost:3000](http://localhost:3000) にアクセス。

---

## 💠 Lint（ESLint）
### 実行コマンド
```
npm run lint
```

### `.eslintrc.config.js` のポイント
* JSX構文の有効化（` ecmaFeatures: { jsx: true }`）
* ESモジュール対応（`sourceType: "module"`）

---

## 💠 GitHub Actions（CI/CD）
 `.github/workflows/trigger.yml`

* PR/main push 時にESLint チェックを実行
* PR 成功時に、ステージング環境へ自動デプロイ
* ステージングデプロイ後に自動でmain push され、本番環境へデプロイ

---
## 💠 RenderにデプロイされたWebサイト
* [ステージング環境](https://staging-na20.onrender.com)
* [本番環境](https://production-vsj6.onrender.com)
