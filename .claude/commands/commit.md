# commit - 学習コミット機能

学習進捗や実装内容を記録するためのgitコミットをサポートします。

## 使用法
```
/commit [コミット種別] [簡潔な説明]
/commit auto  # 自動分析でコミットメッセージ生成
```

## コミット種別

### 学習系
- `learn`: 学習内容の記録
- `practice`: 実践練習の記録
- `understand`: 理解内容の記録

### 実装系  
- `feat`: 新機能の実装
- `fix`: バグ修正
- `style`: スタイルやUI改善
- `refactor`: コードリファクタリング

### ドキュメント系
- `docs`: ドキュメント更新
- `progress`: 学習進捗
- `memo`: 学習メモ進捗

## 例

### 学習コミット
```
/commit learn Reactの基本とJSXの学習
/commit understand classNameの概念とTailwind CSSの使用法
/commit practice ページのStatusBadgeコンポーネント実装
```

### 実装コミット
```
/commit feat UserCardコンポーネントに新しいprops追加
/commit fix Event handlers 問題をClient Componentで解決
/commit style LoginStatusをTailwind CSSでスタイリング
```

### ドキュメントコミット
```
/commit docs phase2にclassNameの説明を追加
/commit progress 2025-07-13の学習記録更新
/commit memo 学習ノートの疑問点記録
```

### 自動コミット
```
/commit auto  # git statusとdiffを分析して最適なコミットメッセージを自動生成
```

## 自動生成されるコミット本文

```
[種別]: [簡潔な説明]

学習概要: [該当の概要]
学習者: [名前]

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

## 重要な注意点
1. **簡潔性重視**: 一行で内容が分かるように
2. **継続性確保**: 学習の継続性を保てる記録方法  
3. **学習記録**: 実際の学習内容を正確に記録
4. **実装記録**: 学習や理解を基にした実装内容の記録

## 自動コミット機能 (/commit auto)

### 機能概要
`/commit auto`は現在のgit変更を自動分析し、最適なコミットメッセージを生成します。

### 自動分析の仕組み
1. **git status確認**: 変更されたファイルの種類と状態を分析
2. **git diff分析**: 変更内容の詳細を確認
3. **ファイル種別判定**: 
   - `.md`ファイル → `docs`
   - コンポーネントファイル → `feat`/`fix`/`style`
   - 設定ファイル → `config`
   - 学習資料 → `learn`/`progress`
4. **変更規模判定**: 追加・修正・削除の規模を評価
5. **コミット種別自動選択**: 変更内容に最適な種別を選択
6. **メッセージ自動生成**: 簡潔で分かりやすい説明文を作成

### 生成例
```bash
# 複数ファイルの文字化け修正の場合
fix: UTF-8エンコーディング修正でcommit.mdとmemo.mdの文字化け解決

# 新しいコンポーネント追加の場合  
feat: UserProfileコンポーネント追加とprops型定義実装

# 学習資料更新の場合
docs: phase2学習資料にuseState実践例を追加
```

### 利用シーン
- 変更内容が明確で種別判定が容易な場合
- 複数ファイルの一括修正
- 定型的な学習記録やドキュメント更新
- 迅速なコミットが必要な場合

## 学習記録の目的:
- コミット履歴による学習進捗記録
- 段階的な理解度記録 
- 学習概要の継続的な記録