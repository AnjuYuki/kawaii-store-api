import { products } from '@/data/products';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const filteredProducts = products.filter(
    (product) => product.category === slug,
  );

  return Response.json(filteredProducts);
}
