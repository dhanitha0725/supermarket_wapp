import { products, Prisma } from '@prisma/client';
import prisma from '../../prisma';
import { ok, Errors, Result } from '../../lib/result';

export interface UpdateProductInput {
  name?: string;
  description?: string;
  price?: number;
  discount?: number;
  imageUrl?: string;
  categoryId?: string;
  metadata?: any;
  isAvailable?: boolean;
}

export const updateProduct = async (id: string, input: UpdateProductInput): Promise<Result<products>> => {
  try {
    const data: Prisma.productsUpdateInput = {};
    if (input.name !== undefined) data.name = input.name;
    if (input.description !== undefined) data.description = input.description;
    if (input.price !== undefined) data.price = new Prisma.Decimal(input.price);
    if (input.discount !== undefined) data.discount = new Prisma.Decimal(input.discount);
    if (input.imageUrl !== undefined) data.image_url = input.imageUrl;
    if (input.categoryId !== undefined) data.category_id = input.categoryId;
    if (input.metadata !== undefined) data.metadata = input.metadata;
    if (input.isAvailable !== undefined) data.is_available = input.isAvailable;

    const product = await prisma.products.update({
      where: { id },
      data,
    });
    return ok(product);
  } catch (error) {
    return Errors.internal('Failed to update product');
  }
};
