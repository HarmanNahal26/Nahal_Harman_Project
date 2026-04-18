import { Request, Response, NextFunction } from "express";
import { db } from "../config/firebase";

export const authorizeAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const uid = (req as any).user.uid;

  const doc = await db.collection("users").doc(uid).get();

  if (!doc.exists || doc.data()?.role !== "admin") {
    res.status(403).json({ message: "Forbidden" });
    return;
  }

  next();
};