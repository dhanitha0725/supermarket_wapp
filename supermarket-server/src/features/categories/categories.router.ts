import { Router } from 'express';
import { adminOnly } from '../auth/auth.router';
import { getCategories } from './get-categories';
import { createCategory } from './create-category';

const router = Router();

// GET /api/categories
router.get('/', getCategories);

// POST /api/admin/categories OR /api/categories (admin only)
router.post('/', adminOnly, createCategory);

export default router;
