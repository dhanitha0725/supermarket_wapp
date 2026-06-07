import { Request, Response } from 'express';
import { fromNodeHeaders } from "better-auth/node";
import { auth } from "../../lib/auth";

export const getMe = async (req: Request, res: Response) => {
  try {
    const session = await auth.api.getSession({
      headers: fromNodeHeaders(req.headers),
    });
    
    if (!session) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }

    res.json(session);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch session' });
  }
};
