import { products } from '@/data/products';

export async function GET(request: Request) {
  const baseUrl = new URL(request.url).origin;
  const data = products.map((p) => ({
    ...p,
    images: p.images.map((img) => `${baseUrl}${img}`),
  }));
  return Response.json(data);
}
