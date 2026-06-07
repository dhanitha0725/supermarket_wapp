import { Request, Response } from 'express';
import prisma from '../../prisma';

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await prisma.products.findMany({
      include: { categories: true }
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};
