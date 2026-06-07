import { Router, Request, Response, NextFunction } from 'express';
import { fromNodeHeaders } from "better-auth/node";
import { auth } from "../../lib/auth";
import { getMe } from "./get-me";

const router = Router();

/**
 * Admin check middleware
 */
export const adminOnly = async (req: Request, res: Response, next: NextFunction) => {
    const session = await auth.api.getSession({
        headers: fromNodeHeaders(req.headers),
    });

    if (!session || session.user.role !== 'admin') {
        res.status(403).json({ error: 'Forbidden: Admin access required' });
        return;
    }

    // Attach session to request for downstream usage
    (req as any).session = session;
    next();
};

/**
 * GET /api/auth/me
 * Returns current session info
 */
router.get('/me', getMe);

export default router;
