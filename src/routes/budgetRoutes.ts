import { Router } from "express";
import {
  createBudget,
  getBudgets,
  getBudgetById,
  updateBudget,
  deleteBudget
} from "../controllers/budgetController";

const router = Router();

/**
 * @swagger
 * /budgets:
 *   post:
 *     summary: Create a budget
 *     tags: [Budgets]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               limit:
 *                 type: number
 *               category:
 *                 type: string
 *     responses:
 *       201:
 *         description: Budget created
 */
router.post("/", createBudget);

/**
 * @swagger
 * /budgets:
 *   get:
 *     summary: Get all budgets
 *     tags: [Budgets]
 *     responses:
 *       200:
 *         description: List of budgets
 */
router.get("/", getBudgets);

/**
 * @swagger
 * /budgets/{id}:
 *   get:
 *     summary: Get budget by ID
 *     tags: [Budgets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Budget found
 *       404:
 *         description: Budget not found
 */
router.get("/:id", getBudgetById);

/**
 * @swagger
 * /budgets/{id}:
 *   put:
 *     summary: Update budget
 *     tags: [Budgets]
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
 *         description: Budget updated
 */
router.put("/:id", updateBudget);

/**
 * @swagger
 * /budgets/{id}:
 *   delete:
 *     summary: Delete budget
 *     tags: [Budgets]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Budget deleted
 */
router.delete("/:id", deleteBudget);

export default router;