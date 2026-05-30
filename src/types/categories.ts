export type CategorySlug =
  | 'bread'
  | 'sweets'
  | 'drink'
  | 'stationery'
  | 'kitchen'
  | 'cosmetics'
  | 'lifestyle';

export type Category = {
  slug: CategorySlug;
  name: string;
  image: string;
};
