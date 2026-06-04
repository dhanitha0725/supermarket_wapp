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

// Categories
app.get('/api/categories', async (req: Request, res: Response) => {
  try {
    const categories = await prisma.categories.findMany();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
});

app.post('/api/admin/categories', async (req: Request, res: Response) => {
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

// Public: Get all products
app.get('/api/products', async (req: Request, res: Response) => {
  try {
    const products = await prisma.products.findMany({
      include: { categories: true }
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Client: Place an order
app.post('/api/orders', async (req: Request, res: Response) => {
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

app.put('/api/admin/products/:id', async (req: Request, res: Response) => {
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

app.delete('/api/admin/products/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.products.delete({ where: { id: id as string } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete product' });
  }
});

// Admin: View Orders
app.get('/api/admin/orders', async (req: Request, res: Response) => {
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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
