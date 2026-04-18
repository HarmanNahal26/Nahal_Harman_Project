import { Request, Response, NextFunction } from "express";
import { admin } from "../config/firebase";

export const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const header = req.headers.authorization;

  if (!header) {
    res.status(401).json({ message: "No token" });
    return; // ✅ just return, NOT res.json
  }

  const token = header.split(" ")[1];

  try {
    const decoded = await admin.auth().verifyIdToken(token);
    (req as any).user = decoded;
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
    return;
  }
};