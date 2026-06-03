# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## コマンド

```bash
pnpm dev       # 開発サーバー起動 (http://localhost:3000)
pnpm build     # プロダクションビルド
pnpm start     # プロダクションサーバー起動
pnpm lint      # ESLint 実行
```

テストは現時点では存在しない。

## アーキテクチャ概要

Next.js 16 App Router ベースのプロジェクト。**2つの役割**を持つ：

1. **REST API**（`/api/*`）— フロントエンド学習用の日本語モック API
2. **ドキュメントサイト**（`/[lang]/docs/*`）— API の使い方を説明する Fumadocs 製サイト

### データフロー

静的な TypeScript データ（`src/data/`）を API ルートがそのまま返す。DBは未導入。

```
src/data/products.ts  →  src/app/api/products/route.ts  →  GET /api/products
src/data/categories.ts → src/app/api/categories/route.ts → GET /api/categories
```

### i18n ルーティング

- `src/proxy.ts`（Next.js middleware）が全リクエストを `[lang]` セグメントにリダイレクト
- デフォルト言語は `ja`（`src/lib/i18n.ts`）
- ドキュメントは `ja` / `en` の2言語対応

### ドキュメントシステム（Fumadocs）

- コンテンツ: `content/docs/**/*.mdx`
- ソース設定: `source.config.ts`（rehype コードハイライト + Twoslash + remarkSteps）
- ソースローダー: `src/lib/source.ts`
- MDX コンポーネント: `src/components/mdx.tsx`（CodeBlock・ImageZoom・Twoslash・Tabs を登録）
- コードブロックのシンタックスハイライトは `github-light` / `github-dark` テーマ

### 型定義

- `src/types/product.ts` — `Product` 型（`currency` は `'JPY'` リテラル固定）
- `src/types/categories.ts` — `CategorySlug` 型（7カテゴリのユニオン）

### スタイリング

- Tailwind CSS v4（PostCSS プラグイン経由）
- Prettier + `prettier-plugin-tailwindcss`（シングルクォート）
- フォント: `Noto Sans JP`（本文）+ `Space Mono`（コード）

## APIエンドポイント一覧

| Method | Path | 説明 |
|--------|------|------|
| GET | `/api/products` | 全商品 |
| GET | `/api/products/:id` | 商品詳細 |
| GET | `/api/categories` | 全カテゴリ |
| GET | `/api/products/category/:slug` | カテゴリ別商品 |

カテゴリスラッグ: `bread` / `sweets` / `drink` / `stationery` / `kitchen` / `cosmetics` / `lifestyle`

## 商品データの追加・変更

`src/data/products.ts` を直接編集する。画像は `/public/images/categories/` にある PNG（800×800）をカテゴリ単位で共有している（商品ごとの個別画像は現状なし）。
