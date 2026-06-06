import { Router, Request, Response } from 'express';
import prisma from '../../prisma';
import { adminOnly } from '../auth/auth.router';

const router = Router();

// GET /api/products
router.get('/', async (req: Request, res: Response) => {
  try {
    const products = await prisma.products.findMany({
      include: { categories: true }
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// POST /api/admin/products
router.post('/', adminOnly, async (req: Request, res: Response) => {
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
});

// PUT /api/admin/products/:id
router.put('/:id', adminOnly, async (req: Request, res: Response) => {
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
});

// DELETE /api/admin/products/:id
router.delete('/:id', adminOnly, async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.products.delete({ where: { id: id as string } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

export default router;
