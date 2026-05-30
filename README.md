# Kawaii Store API

[English](#english) | [日本語](#japanese)

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)
![Open Source](https://img.shields.io/badge/Open%20Source-Yes-success?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-MVP-success?style=for-the-badge)

A Japanese alternative to Fake Store API for frontend practice.

Includes 53 products across 7 kawaii categories.

---

## English

Kawaii Store API is a Japanese mock API designed for frontend developers and learners.

Build product listing pages, product detail pages, category filters, and e-commerce UI using Japanese product data with realistic yen pricing.

### Features

- Japanese product data
- Japanese Yen (JPY) pricing
- 53 products
- 7 categories
- Cute ("Kawaii") product categories
- Product list and detail APIs
- Great for React, Next.js, Vue, Angular, and TypeScript practice

### Demo

Coming Soon

### Endpoints

| Method | Endpoint                       | Description              |
| ------ | ------------------------------ | ------------------------ |
| GET    | `/api/products`                | Get all products         |
| GET    | `/api/products/:id`            | Get a product by ID      |
| GET    | `/api/categories`              | Get all categories       |
| GET    | `/api/products/category/:slug` | Get products by category |

### Example Response

#### GET /api/products

```json
[
  {
    "id": 1,
    "title": "くまさんメロンパン",
    "description": "くまの形をした、ふんわり甘いメロンパン。",
    "price": 260,
    "currency": "JPY",
    "category": "bread",
    "images": ["/images/categories/bread.png"],
    "isNew": true,
    "isPopular": true,
    "rating": {
      "rate": 4.7,
      "count": 132
    }
  }
]
```

### Local Development

#### Clone

```bash
git clone https://github.com/AnjuYuki/kawaii-store-api.git
cd kawaii-store-api
```

#### Install

```bash
pnpm install
```

#### Run

```bash
pnpm dev
```

Open:

```txt
http://localhost:3000
```

### Documentation

Coming Soon

### License

MIT

---

## Japanese

Kawaii Store API は、フロントエンド学習者向けの日本語モックAPIです。

日本語の商品名、日本円価格、かわいいカテゴリの商品データを使って、商品一覧ページや商品詳細ページの制作練習ができます。

### 特徴

- 日本語の商品データ
- 日本円価格（JPY）
- 53商品
- 7カテゴリ
- かわいいカテゴリ
- 商品一覧・商品詳細API
- React / Next.js / Vue / Angular / TypeScript の学習向け

### デモ

準備中

### エンドポイント

| Method | Endpoint                       | Description                |
| ------ | ------------------------------ | -------------------------- |
| GET    | `/api/products`                | 商品一覧を取得             |
| GET    | `/api/products/:id`            | 商品詳細を取得             |
| GET    | `/api/categories`              | カテゴリ一覧を取得         |
| GET    | `/api/products/category/:slug` | カテゴリ別の商品一覧を取得 |

### レスポンス例

#### GET /api/products

```json
[
  {
    "id": 1,
    "title": "くまさんメロンパン",
    "description": "くまの形をした、ふんわり甘いメロンパン。",
    "price": 260,
    "currency": "JPY",
    "category": "bread",
    "images": ["/images/categories/bread.png"],
    "isNew": true,
    "isPopular": true,
    "rating": {
      "rate": 4.7,
      "count": 132
    }
  }
]
```

### ローカル開発

#### リポジトリをクローン

```bash
git clone https://github.com/AnjuYuki/kawaii-store-api.git
cd kawaii-store-api
```

#### 依存関係をインストール

```bash
pnpm install
```

#### 開発サーバーを起動

```bash
pnpm dev
```

以下のURLを開いてください。

```txt
http://localhost:3000
```

### ドキュメント

準備中

### ライセンス

MIT
