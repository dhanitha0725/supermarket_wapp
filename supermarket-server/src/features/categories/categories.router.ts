import { Router, Request, Response } from 'express';
import prisma from '../../prisma';

const router = Router();

// GET /api/categories
router.get('/', async (req: Request, res: Response) => {
  try {
    const categories = await prisma.categories.findMany();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
});

// POST /api/admin/categories OR /api/categories (admin)
router.post('/', async (req: Request, res: Response) => {
  const { name, description } = req.body;
  try {
    const category = await prisma.categories.create({
      data: { name, description },
    });
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create category' });
  }
});

export default router;
