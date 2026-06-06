import { Router, Request, Response } from 'express';

const router = Router();

// POST /api/admin/login OR /api/auth/login
router.post('/login', (req: Request, res: Response) => {
  const { username, password } = req.body;
  // Simple check for demonstration
  if (username === 'admin' && password === 'admin123') {
    res.json({ token: 'simple-temp-token-123' });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

export default router;
