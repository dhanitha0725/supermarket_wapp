import { Request, Response } from 'express';
import prisma from '../../prisma';

export const createProduct = async (req: Request, res: Response) => {
  const { name, description, price, discount, imageUrl, categoryId, metadata } = req.body;
  try {
    const product = await prisma.products.create({
      data: { 
        name, 
        description, 
        price, 
        discount, 
        image_url: imageUrl,
        category_id: categoryId,
        metadata
      },
    });
    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create product' });
  }
};
