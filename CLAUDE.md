# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## language setting
英語で思考して、応答は日本語でお願いします。

## Project Overview

This is a React study project (reactstudy) aimed at learning full-stack web development. The project goals are:

- **Backend**: Next.js
- **Frontend**: React  
- **Intermediate Goal**: Deploy a simple blog to AWS EC2
- **Final Goal**: Create a serverless web application

## Development Setup

This project uses Next.js 15.3.4 with TypeScript, Tailwind CSS, and ESLint configured.

## Common Commands

- `npm run dev` - Start development server with Turbopack (http://localhost:3000)
- `npm run build` - Build the application for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## Architecture 

- **Framework**: Next.js 15.3.4 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Linting**: ESLint with Next.js config
- **Bundler**: Turbopack for development

## Project Structure

- `src/app/` - App Router pages and layouts
- `public/` - Static assets
- `src/` - Source code with import alias `@/*`

## Learning Flow

このプロジェクトは段階的な学習フローに基づいて進めています。詳細な学習資料は以下のasciidocファイルに記載されています：

### 学習資料ファイル
- `learning-flow.adoc` - 全体的な学習フローの概要
- `phase2-react-basics.adoc` - Reactコンポーネントの基礎とJSX
- `phase2-react-state.adoc` - React状態管理（useState、useEffect、カスタムフック）
- `phase3-nextjs-fundamentals.adoc` - Next.js App Routerとルーティング
- `phase3-nextjs-api.adoc` - Next.jsのAPI開発とデータ取得
- `phase4-blog-development.adoc` - ブログアプリケーション開発
- `phase5-7-deployment.adoc` - デプロイメントとサーバーレス移行

### 学習フェーズ
1. **フェーズ1**: 基礎理解と環境構築 ✅（完了）
2. **フェーズ2**: Reactの基礎学習
   - 2.1 Reactコンポーネントの基礎
   - 2.2 Reactの状態管理
   - 2.3 実践演習
3. **フェーズ3**: Next.jsの理解
   - 3.1 Next.jsの基本機能
   - 3.2 データ取得とAPI
   - 3.3 スタイリング
4. **フェーズ4**: ブログアプリケーション開発
   - 4.1 基本設計
   - 4.2 実装
   - 4.3 高度な機能
5. **フェーズ5**: デプロイメント準備
6. **フェーズ6**: AWS EC2デプロイ
7. **フェーズ7**: サーバーレス移行

### 教育方針
- **段階的学習**: 基本概念から実践まで順序立てて進める
- **実践重視**: 理論学習後は必ず実際にコードを書く
- **体系的理解**: 各フェーズの学習内容を体系的に整理
- **実用性重視**: 実際のプロジェクトで使える技術を学習

## 指導ガイドライン

Claude Codeに対する指導方針：

1. **学習フローの遵守**: 必ず上記の学習フェーズに沿って指導する
2. **詳細解説の参照**: 各フェーズの詳細解説は対応するasciidocファイルを参照する
3. **段階的指導**: 学習者の現在のレベルに応じて適切なフェーズから開始する
4. **実践重視**: コード例を豊富に提供し、実際に手を動かす学習を促進する
5. **理解度確認**: 各ステップで理解度を確認してから次に進む
6. **日本語での解説**: 技術的な内容も日本語で分かりやすく説明する

### 現在の学習状況
- 環境構築: 完了
- 学習資料: 全フェーズの詳細解説を作成済み
- 次のステップ: フェーズ2（Reactの基礎学習）から開始可能

## 学習記録・日報システム

### 自動記録ルール
Claude Codeは以下の場合に学習記録を自動的に更新する：

1. **学習進捗の更新タイミング**
   - 新しいコンポーネントを作成・実装した時
   - 技術的な問題を解決した時
   - 学習フェーズを完了・進行した時
   - 学習資料に追加・修正を行った時

2. **日報作成ルール**
   - 各学習セッション終了時に日報を作成
   - ファイル名形式: `daily-log-YYYY-MM-DD.md`
   - 保存場所: `docs/progress/`

3. **記録すべき内容**
   - **質問と回答**: ユーザーの疑問点とその解決内容
   - **実装コンポーネント**: 新規作成・修正したコンポーネント
   - **解決した技術問題**: エラーやバグの解決過程
   - **学習資料の更新**: 追加・修正した学習コンテンツ
   - **理解度向上**: 新しく習得した概念や技術

4. **ファイル更新対象**
   - `docs/progress/LEARNING_PROGRESS.md` - 全体進捗
   - `docs/progress/daily-log-YYYY-MM-DD.md` - 日報
   - 必要に応じて学習資料（*.adoc）の更新

### 学習記録の継続性
- 毎回のセッションで前回からの継続性を保つ
- 疑問点の記録と解決の追跡
- 段階的な理解の促進と記録
