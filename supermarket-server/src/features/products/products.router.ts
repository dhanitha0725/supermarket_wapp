import { Router, Request, Response } from 'express';
import { adminOnly } from '../auth/auth.router';
import { getProducts } from './get-products';
import { createProduct } from './create-product';
import { updateProduct } from './update-product';
import { deleteProduct } from './delete-product';
import { sendResult } from '../../lib/response';

const router = Router();

// GET /api/products
router.get('/', async (_req: Request, res: Response) => {
  const result = await getProducts();
  sendResult(res, result);
});

// POST /api/admin/products
router.post('/', adminOnly, async (req: Request, res: Response) => {
  const result = await createProduct(req.body);
  sendResult(res, result);
});

// PUT /api/admin/products/:id
router.put('/:id', adminOnly, updateProduct);

// DELETE /api/admin/products/:id
router.delete('/:id', adminOnly, deleteProduct);

export default router;
