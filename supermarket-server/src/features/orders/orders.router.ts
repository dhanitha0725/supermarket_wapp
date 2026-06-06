import { Router, Request, Response } from 'express';
import prisma from '../../prisma';
import { adminOnly } from '../auth/auth.router';

const router = Router();

// POST /api/orders
router.post('/', async (req: Request, res: Response) => {
  const { customerName, customerPhone, totalAmount, items } = req.body;
  try {
    const order = await prisma.orders.create({
      data: {
        customer_name: customerName,
        customer_phone: customerPhone,
        total_amount: totalAmount,
        order_items: items ? {
          create: items.map((item: any) => ({
            product_id: item.product_id,
            quantity: item.quantity,
            unit_price: item.unit_price,
            subtotal: item.subtotal || (item.unit_price * item.quantity)
          }))
        } : undefined
      },
      include: { order_items: true }
    });
    res.status(201).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to place order' });
  }
});

// GET /api/admin/orders
router.get('/', adminOnly, async (req: Request, res: Response) => {
  try {
    const orders = await prisma.orders.findMany({
      orderBy: { created_at: 'desc' },
      include: { order_items: true }
    });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

export default router;
