import { Router } from "express";
import { createExpense, getExpenses, getSummary } from "../controllers/expenseController";

const router = Router();

router.post("/", createExpense);
router.get("/", getExpenses);
router.get("/summary", getSummary);

export default router;