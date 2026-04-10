import { Router } from "express";
import {
  createExpense,
  getExpenses,
  getSummary,
  updateExpense,
  deleteExpense
} from "../controllers/expenseController";

const router = Router();

router.post("/", createExpense);
router.get("/", getExpenses);
router.get("/summary", getSummary);
router.put("/:id", updateExpense);
router.delete("/:id", deleteExpense);

export default router;