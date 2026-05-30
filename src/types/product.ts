import { CategorySlug } from './categories';

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  currency: 'JPY';
  category: CategorySlug;
  images: string[]; // 複数枚表示でmap練習
  isNew: boolean;
  isPopular: boolean;
  rating: {
    rate: number;
    count: number;
  };
};
