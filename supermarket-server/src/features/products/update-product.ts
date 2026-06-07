import { Request, Response } from 'express';
import prisma from '../../prisma';

export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, description, price, discount, imageUrl, categoryId, metadata, isAvailable } = req.body;
  try {
    const product = await prisma.products.update({
      where: { id: id as string },
      data: {
        name,
        description,
        price,
        discount,
        image_url: imageUrl,
        category_id: categoryId,
        metadata,
        is_available: isAvailable
      },
    });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update product' });
  }
};
