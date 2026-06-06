import express from 'express';
import cors from 'cors';
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import categoriesRouter from './features/categories/categories.router';
import productsRouter from './features/products/products.router';
import ordersRouter from './features/orders/orders.router';
import authRouter from './features/auth/auth.router';

const app = express();

app.use(cors());

// Better Auth handler - must be mounted before express.json()
app.all("/api/auth/*", toNodeHandler(auth));

app.use(express.json());

// Routes
app.use('/api/categories', categoriesRouter);
app.use('/api/products', productsRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/auth', authRouter); // Adjusted to /api/auth for consistency
app.use('/api/admin', authRouter); // Keep legacy /api/admin/login mapping if needed

// Legacy mappings for admin features that moved to slices
app.use('/api/admin/categories', categoriesRouter);
app.use('/api/admin/products', productsRouter);
app.use('/api/admin/orders', ordersRouter);

export default app;
