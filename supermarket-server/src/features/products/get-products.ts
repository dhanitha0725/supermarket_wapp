import { products, categories } from '@prisma/client';
import prisma from '../../prisma';
import { ok, Errors, Result } from '../../lib/result';

type ProductWithCategory = products & {
  categories: categories;
};

export const getProducts = async (): Promise<Result<ProductWithCategory[]>> => {
  try {
    const productsList = await prisma.products.findMany({
      include: { categories: true }
    }) as ProductWithCategory[];
    
    return ok(productsList);
  } catch (error) {
    return Errors.internal('Failed to fetch products');
  }
};
