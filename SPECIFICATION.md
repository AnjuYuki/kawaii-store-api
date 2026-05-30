# Kawaii Store API Specification

## 1. Project Overview

### Project Name

Kawaii Store API

### Description

Kawaii Store API is a Japanese mock API designed for frontend developers and learners.

Unlike many existing mock APIs that provide English product data, Kawaii Store API focuses on Japanese product names, Japanese Yen pricing, and kawaii-themed product categories.

The API is intended for learning API consumption, TypeScript, and e-commerce UI development.

---

## 2. Goals

### Learning Objectives

- API integration practice
- TypeScript type definition practice
- E-commerce UI development
- Portfolio projects
- CRUD learning

### Value Proposition

- Japanese product data
- Japanese Yen (JPY) pricing
- Realistic e-commerce scenarios
- Category filtering practice
- Product detail page practice

---

## 3. Target Audience

- React developers
- Next.js developers
- Vue developers
- Angular developers
- TypeScript learners
- Frontend beginners
- Portfolio creators

---

## 4. Current MVP Status

### Completed

- Product list endpoint
- Product detail endpoint
- Category list endpoint
- Category products endpoint
- 53 products
- 7 categories
- Vercel deployment

### Deployment

```txt
https://kawaii-store-api.vercel.app
```

---

## 5. Data Model

### Product

```ts
type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  currency: 'JPY';
  category: CategorySlug;
  images: string[];
  isNew: boolean;
  isPopular: boolean;
  rating: {
    rate: number;
    count: number;
  };
};
```

### Category

```ts
type Category = {
  slug: CategorySlug;
  name: string;
  image: string;
};
```

---

## 6. Categories

| Slug       | Display Name |
| ---------- | ------------ |
| bread      | パン         |
| sweets     | スイーツ     |
| drink      | ドリンク     |
| stationery | 文房具       |
| kitchen    | キッチン     |
| cosmetics  | コスメ       |
| lifestyle  | 雑貨         |

---

## 7. API Endpoints

### Get All Products

```http
GET /api/products
```

Returns all products.

---

### Get Product By ID

```http
GET /api/products/:id
```

Returns a single product.

Example:

```http
GET /api/products/1
```

---

### Get Categories

```http
GET /api/categories
```

Returns all categories.

---

### Get Products By Category

```http
GET /api/products/category/:slug
```

Example:

```http
GET /api/products/category/sweets
```

Returns products belonging to the specified category.

---

## 8. Response Example

```json
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
```

---

## 9. Error Responses

### 404 Not Found

```json
{
  "error": "Product not found"
}
```

---

## 10. Assets

### Category Images

Current implementation uses locally hosted AI-generated images.

```txt
/public/images/categories
```

Image format:

```txt
PNG
```

Recommended size:

```txt
800 × 800
```

---

## 11. Technology Stack

### Framework

- Next.js 16

### Language

- TypeScript

### API

- Route Handlers

### Package Manager

- pnpm

### Hosting

- Vercel

### Data Storage

Current:

- Static TypeScript data

Future:

- PostgreSQL
- Prisma ORM

---

## 12. Roadmap

### Search

```http
GET /api/products?q=プリン
```

---

### Sorting

```http
GET /api/products?sort=price_asc
```

```http
GET /api/products?sort=price_desc
```

---

### Pagination

```http
GET /api/products?page=1&limit=20
```

---

### Reviews

```http
GET /api/reviews
```

---

### Users

```http
GET /api/users
```

---

### Orders

```http
GET /api/orders
```

---

## 13. Brand Identity

### Tagline

- Kawaii Data for Frontend Developers
- Japanese Mock API for Learning
- Frontend Developers Love Kawaii Data

### Keywords

- Kawaii
- Japanese
- Mock API
- Frontend
- Learning
- TypeScript

---

## 14. Success Metrics

- GitHub Stars
- Portfolio adoption
- Community usage
- Open source contributions
- Documentation website launch
- npm package publication

```

```
