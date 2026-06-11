import { products, Prisma } from '@prisma/client';
import prisma from '../../prisma';
import { ok, Errors, Result } from '../../lib/result';

export interface CreateProductInput {
  name: string;
  description?: string;
  price: number;
  discount?: number;
  imageUrl?: string;
  categoryId: string;
  metadata?: any;
}

export const createProduct = async (input: CreateProductInput): Promise<Result<products>> => {
  try {
    const product = await prisma.products.create({
      data: { 
        name: input.name, 
        description: input.description, 
        price: new Prisma.Decimal(input.price), 
        discount: input.discount ? new Prisma.Decimal(input.discount) : 0, 
        image_url: input.imageUrl,
        category_id: input.categoryId,
        metadata: input.metadata
      },
    });
    return ok(product);
  } catch (error) {
    console.error(error);
    return Errors.internal('Failed to create product');
  }
};
