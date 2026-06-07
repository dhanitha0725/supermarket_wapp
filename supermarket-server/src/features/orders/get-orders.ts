import { Request, Response } from 'express';
import prisma from '../../prisma';

export const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await prisma.orders.findMany({
      orderBy: { created_at: 'desc' },
      include: { order_items: true }
    });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
};
