import { Router } from "express";
import {
  createExpense,
  getExpenses,
  getSummary,
  updateExpense,
  deleteExpense
} from "../controllers/expenseController";

const router = Router();

/**
 * @swagger
 * /expenses:
 *   post:
 *     summary: Create a new expense
 *     tags: [Expenses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: number
 *               category:
 *                 type: string
 *               note:
 *                 type: string
 *               date:
 *                 type: string
 *     responses:
 *       201:
 *         description: Expense created
 */
router.post("/", createExpense);

/**
 * @swagger
 * /expenses:
 *   get:
 *     summary: Get all expenses
 *     tags: [Expenses]
 *     responses:
 *       200:
 *         description: List of expenses
 */
router.get("/", getExpenses);

/**
 * @swagger
 * /expenses/summary:
 *   get:
 *     summary: Get expense summary
 *     tags: [Expenses]
 *     responses:
 *       200:
 *         description: Summary data
 */
router.get("/summary", getSummary);

/**
 * @swagger
 * /expenses/{id}:
 *   put:
 *     summary: Update expense
 *     tags: [Expenses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Updated successfully
 */
router.put("/:id", updateExpense);

/**
 * @swagger
 * /expenses/{id}:
 *   delete:
 *     summary: Delete expense
 *     tags: [Expenses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Deleted successfully
 */
router.delete("/:id", deleteExpense);

export default router;