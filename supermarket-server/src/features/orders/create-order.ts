import { Request, Response } from 'express';
import prisma from '../../prisma';

export const createOrder = async (req: Request, res: Response) => {
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
};
