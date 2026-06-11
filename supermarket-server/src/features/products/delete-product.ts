import prisma from '../../prisma';
import { ok, Errors, Result } from '../../lib/result';

export const deleteProduct = async (id: string): Promise<Result<void>> => {
  try {
    await prisma.products.delete({ where: { id } });
    return ok(undefined);
  } catch (error) {
    return Errors.internal('Failed to delete product');
  }
};
