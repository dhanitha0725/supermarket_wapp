import { Router } from 'express';
import { adminOnly } from '../auth/auth.router';
import { getProducts } from './get-products';
import { createProduct } from './create-product';
import { updateProduct } from './update-product';
import { deleteProduct } from './delete-product';

const router = Router();

// GET /api/products
router.get('/', getProducts);

// POST /api/admin/products
router.post('/', adminOnly, createProduct);

// PUT /api/admin/products/:id
router.put('/:id', adminOnly, updateProduct);

// DELETE /api/admin/products/:id
router.delete('/:id', adminOnly, deleteProduct);

export default router;
