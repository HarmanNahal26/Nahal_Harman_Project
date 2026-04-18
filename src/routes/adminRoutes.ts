import { Router, Request, Response } from "express";
import { authenticate } from "../middleware/auth";
import { authorizeAdmin } from "../middleware/authorizeAdmin";

const router = Router();

router.get("/admin", authenticate, authorizeAdmin, (req: Request, res: Response) => {
  res.json({ message: "Admin access granted" });
});

export default router;