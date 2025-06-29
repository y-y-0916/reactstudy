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
