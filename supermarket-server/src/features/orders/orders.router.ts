import { Router } from 'express';
import { adminOnly } from '../auth/auth.router';
import { getOrders } from './get-orders';
import { createOrder } from './create-order';

const router = Router();

// POST /api/orders
router.post('/', createOrder);

// GET /api/admin/orders
router.get('/', adminOnly, getOrders);

export default router;
