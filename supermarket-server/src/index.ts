import express, { Request, Response } from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Public: Get all products
app.get('/api/products', async (req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Client: Place an order
app.post('/api/orders', async (req: Request, res: Response) => {
  const { customerName, customerPhone, items, totalAmount } = req.body;
  try {
    const order = await prisma.order.create({
      data: {
        customerName,
        customerPhone,
        items,
        totalAmount,
      },
    });
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: 'Failed to place order' });
  }
});

// Admin Login (Temporary simple auth)
app.post('/api/admin/login', (req: Request, res: Response) => {
  const { username, password } = req.body;
  // Simple check for demonstration
  if (username === 'admin' && password === 'admin123') {
    res.json({ token: 'simple-temp-token-123' });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Admin: CRUD Products
app.post('/api/admin/products', async (req: Request, res: Response) => {
  const { name, description, price, discountPercentage, stockQuantity, imageUrl } = req.body;
  try {
    const product = await prisma.product.create({
      data: { name, description, price, discountPercentage, stockQuantity, imageUrl },
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create product' });
  }
});

app.put('/api/admin/products/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const product = await prisma.product.update({
      where: { id },
      data,
    });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update product' });
  }
});

app.delete('/api/admin/products/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.product.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

// Admin: View Orders
app.get('/api/admin/orders', async (req: Request, res: Response) => {
  try {
    const orders = await prisma.order.findMany({
      orderBy: { createdAt: 'desc' },
    });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
