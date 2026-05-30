# Kawaii Store API

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)
![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)
![Status](https://img.shields.io/badge/Status-MVP-success?style=for-the-badge)

Kawaii Store API は、フロントエンド学習者向けの日本語モックAPIです。

日本語の商品名、日本円価格、かわいいカテゴリの商品データを使って、商品一覧ページや商品詳細ページの制作練習ができます。

## 特徴

- 日本語の商品データ
- 日本円価格
- かわいいカテゴリ
- 商品一覧・商品詳細API
- React / Next.js / Vue / Angular / TypeScript の学習向け

## エンドポイント一覧

| Method | Endpoint                       | Description                |
| ------ | ------------------------------ | -------------------------- |
| GET    | `/api/products`                | 商品一覧を取得             |
| GET    | `/api/products/:id`            | 商品詳細を取得             |
| GET    | `/api/categories`              | カテゴリ一覧を取得         |
| GET    | `/api/products/category/:slug` | カテゴリ別の商品一覧を取得 |

## レスポンス例

### /api/products

```json
[
  {
    "id": 1,
    "title": "くまさんメロンパン",
    "description": "くまの形をした、ふんわり甘いメロンパン。",
    "price": 260,
    "currency": "JPY",
    "category": "bread",
    "images": [
      "/images/categories/bread.png"
    ],
    "isNew": true,
    "isPopular": true,
    "rating": {
      "rate": 4.7,
      "count": 132
    }
  },

  ...
]
```

### /api/categories

```json
[
  {
    "slug": "bread",
    "name": "パン",
    "image": "/images/categories/bread.png"
  },

  ...
]
```

### ローカル開発

リポジトリをクローン

```bash
git clone https://github.com/AnjuYuki/kawaii-store-api.git
cd kawaii-store-api
```

依存関係をインストール

```bash
pnpm install
```

ローカルサーバーを立ち上げ

```bash
pnpm dev
```

開く

```txt
http://localhost:3000
```
