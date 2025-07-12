# React学習プロジェクト

これは[Next.js](https://nextjs.org)を使用したReact学習プロジェクトです。フルスタックWebアプリケーション開発を段階的に学習することを目的としています。

## プロジェクト概要

- **バックエンド**: Next.js
- **フロントエンド**: React
- **中間目標**: シンプルなブログをAWS EC2にデプロイ
- **最終目標**: サーバーレスWebアプリケーションの作成

## 開発環境セットアップ

開発サーバーを起動するには、以下のコマンドを実行してください：

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて結果を確認できます。

`src/app/page.tsx`を編集することでページを修正できます。ファイルを編集すると自動的にページが更新されます。

## 技術スタック

- **フレームワーク**: Next.js 15.3.4 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS v4
- **リンター**: ESLint
- **バンドラー**: Turbopack（開発時）

## よく使うコマンド

- `npm run dev` - 開発サーバーの起動
- `npm run build` - 本番用ビルド
- `npm start` - 本番サーバーの起動
- `npm run lint` - コード品質チェック

## 学習フロー

このプロジェクトは以下の段階的な学習フローに基づいて進められます：

1. **フェーズ1**: 基礎理解と環境構築 ✅
2. **フェーズ2**: Reactの基礎学習
3. **フェーズ3**: Next.jsの理解
4. **フェーズ4**: ブログアプリケーション開発
5. **フェーズ5**: デプロイメント準備
6. **フェーズ6**: AWS EC2デプロイ
7. **フェーズ7**: サーバーレス移行

詳細な学習内容は各フェーズのasciidocファイルをご参照ください。

## 学習リソース

Next.jsについてより詳しく学習したい場合は、以下のリソースをご活用ください：

- [Next.js公式ドキュメント](https://nextjs.org/docs) - Next.jsの機能とAPIについて
- [Next.js学習コース](https://nextjs.org/learn) - インタラクティブなNext.jsチュートリアル
- [Next.js GitHubリポジトリ](https://github.com/vercel/next.js) - フィードバックと貢献を歓迎

## デプロイメント

最も簡単なデプロイ方法は、Next.jsの開発者が提供する [Vercelプラットフォーム](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) を使用することです。

詳細については[Next.jsデプロイメントドキュメント](https://nextjs.org/docs/app/building-your-application/deploying)をご確認ください。
