import { Router, Request, Response } from "express";
import { db } from "../config/firebase";
import { authenticate } from "../middleware/auth";

const router = Router();

router.post("/", authenticate, async (req: Request, res: Response) => {
  const { name } = req.body;

  // validation (REQUIRED for video fail case)
  if (!name || typeof name !== "string") {
    res.status(400).json({ message: "Invalid data" });
    return;
  }

  const docRef = await db.collection("items").add({
    name,
    createdAt: new Date(),
  });

  res.json({ id: docRef.id });
});



router.put("/:id", authenticate, async (req: Request, res: Response) => {
  const { id } = req.params;

  await db.collection("items").doc(id).update(req.body);

  res.json({ message: "Updated" });
});

router.delete("/:id", authenticate, async (req: Request, res: Response) => {
  const { id } = req.params;

  await db.collection("items").doc(id).delete();

  res.json({ message: "Deleted" });
});

export default router;